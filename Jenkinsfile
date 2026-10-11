pipeline {
    agent any

    // Default checkout runs before any stage and fails on Windows while PM2
    // still has prisma/generated/client/query_engine-windows.dll.node loaded.
    options {
        skipDefaultCheckout()
    }

    environment {
        ENV_FILE_PATH = "C:\\Program Files\\Jenkins\\jenkinsEnv\\qms-v2-backend"
        // ENV_FILE_PATH = "C:\\Users\\Administrator\\Desktop\\projects\\QMS_V2\\qms_api_nartec"
    }

    stages {
        stage('Stop app before checkout') {
            steps {
                echo "Stopping qms so Git can replace the Prisma query engine DLL..."
                bat '''
                    pm2 stop qms || echo qms was not running
                    ping 127.0.0.1 -n 4 > nul
                    if exist "prisma\\generated\\client\\query_engine-windows.dll.node" del /f /q "prisma\\generated\\client\\query_engine-windows.dll.node"
                    if exist "prisma\\generated\\client\\query_engine-windows.dll.node" (
                        echo ERROR: query_engine-windows.dll.node is still locked. Stop the Node process using it, then rebuild.
                        exit /b 1
                    )
                    if exist "prisma\\generated" rmdir /s /q "prisma\\generated"
                '''
            }
        }

        stage('Checkout') {
            steps {
                checkout scmGit(
                    branches: [[name: '*/main']],
                    extensions: [],
                    userRemoteConfigs: [[
                        credentialsId: 'eissa',
                        url: 'https://github.com/Eissanoor/qms_v2_api.git'
                    ]]
                )
            }
        }

        stage('Setup Environment File') {
            steps {
                echo "Copying environment file to the backend..."
                bat "copy \"${ENV_FILE_PATH}\" \"%WORKSPACE%\\.env\""
            }
        }

        stage('Manage PM2 and Install Dependencies') {
            steps {
                script {
                    echo "Stopping PM2 process if running..."
                    def processStatus = bat(script: 'pm2 list', returnStdout: true).trim()
                    if (processStatus.contains('qms')) {
                        bat 'pm2 stop qms || exit 0'
                    }
                }
                echo "Deleting node_modules folder on windows..."
                bat 'if exist node_modules rmdir /s /q node_modules'
                echo "Deleting node_modules folder on windows... Done"
                echo "Installing dependencies for QMS..."
                bat 'npm install'
                echo "Installing Chrome for ticket PDFs..."
                bat '''
                    set PUPPETEER_EXECUTABLE_PATH=
                    set PUPPETEER_SKIP_DOWNLOAD=
                    set PUPPETEER_CACHE_DIR=C:\\puppeteer-chrome
                    call npx puppeteer browsers install chrome
                '''
                echo "Generating Prisma files..."
                bat 'npx prisma generate --schema="./prisma/schema/schema.prisma"'
                echo "Restarting PM2 process..."
                bat 'pm2 restart qms || pm2 start src/app.js --name qms'
                echo "Restarting PM2 process... Done"
                echo "Saving PM2 process..."
                bat 'pm2 save'
                echo "Saving PM2 process... Done"
            }
        }
    }
}
