pipeline {
    agent any

    environment {
        ENV_FILE_PATH = "C:\\Program Files\\Jenkins\\jenkinsEnv\\qms-v2-backend"
        // ENV_FILE_PATH = "C:\\Users\\Administrator\\Desktop\\projects\\QMS_V2\\qms_api_nartec"
    }

    stages {
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
                echo "Generating Prisma files..."
                bat 'npx prisma generate --schema="./prisma/schema"'
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
