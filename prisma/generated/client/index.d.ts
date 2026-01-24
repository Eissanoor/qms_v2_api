
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Bed
 * 
 */
export type Bed = $Result.DefaultSelection<Prisma.$BedPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model tblDepartment
 * 
 */
export type tblDepartment = $Result.DefaultSelection<Prisma.$tblDepartmentPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model VitalSign
 * 
 */
export type VitalSign = $Result.DefaultSelection<Prisma.$VitalSignPayload>
/**
 * Model Journey
 * 
 */
export type Journey = $Result.DefaultSelection<Prisma.$JourneyPayload>
/**
 * Model PatientCount
 * 
 */
export type PatientCount = $Result.DefaultSelection<Prisma.$PatientCountPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Beds
 * const beds = await prisma.bed.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Beds
   * const beds = await prisma.bed.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.bed`: Exposes CRUD operations for the **Bed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Beds
    * const beds = await prisma.bed.findMany()
    * ```
    */
  get bed(): Prisma.BedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tblDepartment`: Exposes CRUD operations for the **tblDepartment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblDepartments
    * const tblDepartments = await prisma.tblDepartment.findMany()
    * ```
    */
  get tblDepartment(): Prisma.tblDepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vitalSign`: Exposes CRUD operations for the **VitalSign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VitalSigns
    * const vitalSigns = await prisma.vitalSign.findMany()
    * ```
    */
  get vitalSign(): Prisma.VitalSignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.journey`: Exposes CRUD operations for the **Journey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Journeys
    * const journeys = await prisma.journey.findMany()
    * ```
    */
  get journey(): Prisma.JourneyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patientCount`: Exposes CRUD operations for the **PatientCount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatientCounts
    * const patientCounts = await prisma.patientCount.findMany()
    * ```
    */
  get patientCount(): Prisma.PatientCountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Bed: 'Bed',
    User: 'User',
    Role: 'Role',
    tblDepartment: 'tblDepartment',
    Patient: 'Patient',
    VitalSign: 'VitalSign',
    Journey: 'Journey',
    PatientCount: 'PatientCount',
    RefreshToken: 'RefreshToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "bed" | "user" | "role" | "tblDepartment" | "patient" | "vitalSign" | "journey" | "patientCount" | "refreshToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Bed: {
        payload: Prisma.$BedPayload<ExtArgs>
        fields: Prisma.BedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          findFirst: {
            args: Prisma.BedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          findMany: {
            args: Prisma.BedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>[]
          }
          create: {
            args: Prisma.BedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          createMany: {
            args: Prisma.BedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          update: {
            args: Prisma.BedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          deleteMany: {
            args: Prisma.BedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BedPayload>
          }
          aggregate: {
            args: Prisma.BedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBed>
          }
          groupBy: {
            args: Prisma.BedGroupByArgs<ExtArgs>
            result: $Utils.Optional<BedGroupByOutputType>[]
          }
          count: {
            args: Prisma.BedCountArgs<ExtArgs>
            result: $Utils.Optional<BedCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      tblDepartment: {
        payload: Prisma.$tblDepartmentPayload<ExtArgs>
        fields: Prisma.tblDepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblDepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblDepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload>
          }
          findFirst: {
            args: Prisma.tblDepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblDepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload>
          }
          findMany: {
            args: Prisma.tblDepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload>[]
          }
          create: {
            args: Prisma.tblDepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload>
          }
          createMany: {
            args: Prisma.tblDepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblDepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload>
          }
          update: {
            args: Prisma.tblDepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload>
          }
          deleteMany: {
            args: Prisma.tblDepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblDepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblDepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDepartmentPayload>
          }
          aggregate: {
            args: Prisma.TblDepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblDepartment>
          }
          groupBy: {
            args: Prisma.tblDepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblDepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblDepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<TblDepartmentCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      VitalSign: {
        payload: Prisma.$VitalSignPayload<ExtArgs>
        fields: Prisma.VitalSignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VitalSignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VitalSignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          findFirst: {
            args: Prisma.VitalSignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VitalSignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          findMany: {
            args: Prisma.VitalSignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>[]
          }
          create: {
            args: Prisma.VitalSignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          createMany: {
            args: Prisma.VitalSignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VitalSignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          update: {
            args: Prisma.VitalSignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          deleteMany: {
            args: Prisma.VitalSignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VitalSignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VitalSignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VitalSignPayload>
          }
          aggregate: {
            args: Prisma.VitalSignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVitalSign>
          }
          groupBy: {
            args: Prisma.VitalSignGroupByArgs<ExtArgs>
            result: $Utils.Optional<VitalSignGroupByOutputType>[]
          }
          count: {
            args: Prisma.VitalSignCountArgs<ExtArgs>
            result: $Utils.Optional<VitalSignCountAggregateOutputType> | number
          }
        }
      }
      Journey: {
        payload: Prisma.$JourneyPayload<ExtArgs>
        fields: Prisma.JourneyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JourneyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JourneyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          findFirst: {
            args: Prisma.JourneyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JourneyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          findMany: {
            args: Prisma.JourneyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>[]
          }
          create: {
            args: Prisma.JourneyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          createMany: {
            args: Prisma.JourneyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.JourneyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          update: {
            args: Prisma.JourneyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          deleteMany: {
            args: Prisma.JourneyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JourneyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JourneyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JourneyPayload>
          }
          aggregate: {
            args: Prisma.JourneyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJourney>
          }
          groupBy: {
            args: Prisma.JourneyGroupByArgs<ExtArgs>
            result: $Utils.Optional<JourneyGroupByOutputType>[]
          }
          count: {
            args: Prisma.JourneyCountArgs<ExtArgs>
            result: $Utils.Optional<JourneyCountAggregateOutputType> | number
          }
        }
      }
      PatientCount: {
        payload: Prisma.$PatientCountPayload<ExtArgs>
        fields: Prisma.PatientCountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientCountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientCountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload>
          }
          findFirst: {
            args: Prisma.PatientCountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientCountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload>
          }
          findMany: {
            args: Prisma.PatientCountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload>[]
          }
          create: {
            args: Prisma.PatientCountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload>
          }
          createMany: {
            args: Prisma.PatientCountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientCountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload>
          }
          update: {
            args: Prisma.PatientCountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload>
          }
          deleteMany: {
            args: Prisma.PatientCountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientCountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientCountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientCountPayload>
          }
          aggregate: {
            args: Prisma.PatientCountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatientCount>
          }
          groupBy: {
            args: Prisma.PatientCountGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientCountGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    bed?: BedOmit
    user?: UserOmit
    role?: RoleOmit
    tblDepartment?: tblDepartmentOmit
    patient?: PatientOmit
    vitalSign?: VitalSignOmit
    journey?: JourneyOmit
    patientCount?: PatientCountOmit
    refreshToken?: RefreshTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BedCountOutputType
   */

  export type BedCountOutputType = {
    patient: number
  }

  export type BedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | BedCountOutputTypeCountPatientArgs
  }

  // Custom InputTypes
  /**
   * BedCountOutputType without action
   */
  export type BedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BedCountOutputType
     */
    select?: BedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BedCountOutputType without action
   */
  export type BedCountOutputTypeCountPatientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    refreshToken: number
    patients: number
    patientCounts: number
    roles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshToken?: boolean | UserCountOutputTypeCountRefreshTokenArgs
    patients?: boolean | UserCountOutputTypeCountPatientsArgs
    patientCounts?: boolean | UserCountOutputTypeCountPatientCountsArgs
    roles?: boolean | UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPatientCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientCountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type TblDepartmentCountOutputType
   */

  export type TblDepartmentCountOutputType = {
    patients: number
  }

  export type TblDepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | TblDepartmentCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * TblDepartmentCountOutputType without action
   */
  export type TblDepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblDepartmentCountOutputType
     */
    select?: TblDepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TblDepartmentCountOutputType without action
   */
  export type TblDepartmentCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    vitalSigns: number
    journeys: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vitalSigns?: boolean | PatientCountOutputTypeCountVitalSignsArgs
    journeys?: boolean | PatientCountOutputTypeCountJourneysArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountVitalSignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VitalSignWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountJourneysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JourneyWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Bed
   */

  export type AggregateBed = {
    _count: BedCountAggregateOutputType | null
    _min: BedMinAggregateOutputType | null
    _max: BedMaxAggregateOutputType | null
  }

  export type BedMinAggregateOutputType = {
    id: string | null
    bedNumber: string | null
    bedStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BedMaxAggregateOutputType = {
    id: string | null
    bedNumber: string | null
    bedStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BedCountAggregateOutputType = {
    id: number
    bedNumber: number
    bedStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BedMinAggregateInputType = {
    id?: true
    bedNumber?: true
    bedStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BedMaxAggregateInputType = {
    id?: true
    bedNumber?: true
    bedStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BedCountAggregateInputType = {
    id?: true
    bedNumber?: true
    bedStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bed to aggregate.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Beds
    **/
    _count?: true | BedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BedMaxAggregateInputType
  }

  export type GetBedAggregateType<T extends BedAggregateArgs> = {
        [P in keyof T & keyof AggregateBed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBed[P]>
      : GetScalarType<T[P], AggregateBed[P]>
  }




  export type BedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BedWhereInput
    orderBy?: BedOrderByWithAggregationInput | BedOrderByWithAggregationInput[]
    by: BedScalarFieldEnum[] | BedScalarFieldEnum
    having?: BedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BedCountAggregateInputType | true
    _min?: BedMinAggregateInputType
    _max?: BedMaxAggregateInputType
  }

  export type BedGroupByOutputType = {
    id: string
    bedNumber: string | null
    bedStatus: string | null
    createdAt: Date
    updatedAt: Date
    _count: BedCountAggregateOutputType | null
    _min: BedMinAggregateOutputType | null
    _max: BedMaxAggregateOutputType | null
  }

  type GetBedGroupByPayload<T extends BedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BedGroupByOutputType[P]>
            : GetScalarType<T[P], BedGroupByOutputType[P]>
        }
      >
    >


  export type BedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bedNumber?: boolean
    bedStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | Bed$patientArgs<ExtArgs>
    _count?: boolean | BedCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bed"]>



  export type BedSelectScalar = {
    id?: boolean
    bedNumber?: boolean
    bedStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bedNumber" | "bedStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["bed"]>
  export type BedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Bed$patientArgs<ExtArgs>
    _count?: boolean | BedCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bed"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bedNumber: string | null
      bedStatus: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bed"]>
    composites: {}
  }

  type BedGetPayload<S extends boolean | null | undefined | BedDefaultArgs> = $Result.GetResult<Prisma.$BedPayload, S>

  type BedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BedCountAggregateInputType | true
    }

  export interface BedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bed'], meta: { name: 'Bed' } }
    /**
     * Find zero or one Bed that matches the filter.
     * @param {BedFindUniqueArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BedFindUniqueArgs>(args: SelectSubset<T, BedFindUniqueArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bed that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BedFindUniqueOrThrowArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BedFindUniqueOrThrowArgs>(args: SelectSubset<T, BedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindFirstArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BedFindFirstArgs>(args?: SelectSubset<T, BedFindFirstArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindFirstOrThrowArgs} args - Arguments to find a Bed
     * @example
     * // Get one Bed
     * const bed = await prisma.bed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BedFindFirstOrThrowArgs>(args?: SelectSubset<T, BedFindFirstOrThrowArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Beds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Beds
     * const beds = await prisma.bed.findMany()
     * 
     * // Get first 10 Beds
     * const beds = await prisma.bed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bedWithIdOnly = await prisma.bed.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BedFindManyArgs>(args?: SelectSubset<T, BedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bed.
     * @param {BedCreateArgs} args - Arguments to create a Bed.
     * @example
     * // Create one Bed
     * const Bed = await prisma.bed.create({
     *   data: {
     *     // ... data to create a Bed
     *   }
     * })
     * 
     */
    create<T extends BedCreateArgs>(args: SelectSubset<T, BedCreateArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Beds.
     * @param {BedCreateManyArgs} args - Arguments to create many Beds.
     * @example
     * // Create many Beds
     * const bed = await prisma.bed.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BedCreateManyArgs>(args?: SelectSubset<T, BedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bed.
     * @param {BedDeleteArgs} args - Arguments to delete one Bed.
     * @example
     * // Delete one Bed
     * const Bed = await prisma.bed.delete({
     *   where: {
     *     // ... filter to delete one Bed
     *   }
     * })
     * 
     */
    delete<T extends BedDeleteArgs>(args: SelectSubset<T, BedDeleteArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bed.
     * @param {BedUpdateArgs} args - Arguments to update one Bed.
     * @example
     * // Update one Bed
     * const bed = await prisma.bed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BedUpdateArgs>(args: SelectSubset<T, BedUpdateArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Beds.
     * @param {BedDeleteManyArgs} args - Arguments to filter Beds to delete.
     * @example
     * // Delete a few Beds
     * const { count } = await prisma.bed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BedDeleteManyArgs>(args?: SelectSubset<T, BedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Beds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Beds
     * const bed = await prisma.bed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BedUpdateManyArgs>(args: SelectSubset<T, BedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bed.
     * @param {BedUpsertArgs} args - Arguments to update or create a Bed.
     * @example
     * // Update or create a Bed
     * const bed = await prisma.bed.upsert({
     *   create: {
     *     // ... data to create a Bed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bed we want to update
     *   }
     * })
     */
    upsert<T extends BedUpsertArgs>(args: SelectSubset<T, BedUpsertArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Beds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedCountArgs} args - Arguments to filter Beds to count.
     * @example
     * // Count the number of Beds
     * const count = await prisma.bed.count({
     *   where: {
     *     // ... the filter for the Beds we want to count
     *   }
     * })
    **/
    count<T extends BedCountArgs>(
      args?: Subset<T, BedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BedAggregateArgs>(args: Subset<T, BedAggregateArgs>): Prisma.PrismaPromise<GetBedAggregateType<T>>

    /**
     * Group by Bed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BedGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BedGroupByArgs['orderBy'] }
        : { orderBy?: BedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bed model
   */
  readonly fields: BedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends Bed$patientArgs<ExtArgs> = {}>(args?: Subset<T, Bed$patientArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bed model
   */
  interface BedFieldRefs {
    readonly id: FieldRef<"Bed", 'String'>
    readonly bedNumber: FieldRef<"Bed", 'String'>
    readonly bedStatus: FieldRef<"Bed", 'String'>
    readonly createdAt: FieldRef<"Bed", 'DateTime'>
    readonly updatedAt: FieldRef<"Bed", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bed findUnique
   */
  export type BedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed findUniqueOrThrow
   */
  export type BedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed findFirst
   */
  export type BedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beds.
     */
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed findFirstOrThrow
   */
  export type BedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Bed to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Beds.
     */
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed findMany
   */
  export type BedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter, which Beds to fetch.
     */
    where?: BedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Beds to fetch.
     */
    orderBy?: BedOrderByWithRelationInput | BedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Beds.
     */
    cursor?: BedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Beds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Beds.
     */
    skip?: number
    distinct?: BedScalarFieldEnum | BedScalarFieldEnum[]
  }

  /**
   * Bed create
   */
  export type BedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The data needed to create a Bed.
     */
    data: XOR<BedCreateInput, BedUncheckedCreateInput>
  }

  /**
   * Bed createMany
   */
  export type BedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Beds.
     */
    data: BedCreateManyInput | BedCreateManyInput[]
  }

  /**
   * Bed update
   */
  export type BedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The data needed to update a Bed.
     */
    data: XOR<BedUpdateInput, BedUncheckedUpdateInput>
    /**
     * Choose, which Bed to update.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed updateMany
   */
  export type BedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Beds.
     */
    data: XOR<BedUpdateManyMutationInput, BedUncheckedUpdateManyInput>
    /**
     * Filter which Beds to update
     */
    where?: BedWhereInput
    /**
     * Limit how many Beds to update.
     */
    limit?: number
  }

  /**
   * Bed upsert
   */
  export type BedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * The filter to search for the Bed to update in case it exists.
     */
    where: BedWhereUniqueInput
    /**
     * In case the Bed found by the `where` argument doesn't exist, create a new Bed with this data.
     */
    create: XOR<BedCreateInput, BedUncheckedCreateInput>
    /**
     * In case the Bed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BedUpdateInput, BedUncheckedUpdateInput>
  }

  /**
   * Bed delete
   */
  export type BedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    /**
     * Filter which Bed to delete.
     */
    where: BedWhereUniqueInput
  }

  /**
   * Bed deleteMany
   */
  export type BedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Beds to delete
     */
    where?: BedWhereInput
    /**
     * Limit how many Beds to delete.
     */
    limit?: number
  }

  /**
   * Bed.patient
   */
  export type Bed$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Bed without action
   */
  export type BedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    deptcode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    deptcode: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    deptcode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    deptcode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    deptcode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    deptcode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    password: string | null
    name: string | null
    deptcode: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    deptcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    patients?: boolean | User$patientsArgs<ExtArgs>
    patientCounts?: boolean | User$patientCountsArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    deptcode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "deptcode" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    patients?: boolean | User$patientsArgs<ExtArgs>
    patientCounts?: boolean | User$patientCountsArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      refreshToken: Prisma.$RefreshTokenPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
      patientCounts: Prisma.$PatientCountPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      password: string | null
      name: string | null
      deptcode: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    refreshToken<T extends User$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends User$patientsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patientCounts<T extends User$patientCountsArgs<ExtArgs> = {}>(args?: Subset<T, User$patientCountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly deptcode: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.refreshToken
   */
  export type User$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.patients
   */
  export type User$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * User.patientCounts
   */
  export type User$patientCountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    where?: PatientCountWhereInput
    orderBy?: PatientCountOrderByWithRelationInput | PatientCountOrderByWithRelationInput[]
    cursor?: PatientCountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientCountScalarFieldEnum | PatientCountScalarFieldEnum[]
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    route: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    route: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    route: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    route?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    route?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    route?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    route: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    route?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    route?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "route" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      route: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly route: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model tblDepartment
   */

  export type AggregateTblDepartment = {
    _count: TblDepartmentCountAggregateOutputType | null
    _avg: TblDepartmentAvgAggregateOutputType | null
    _sum: TblDepartmentSumAggregateOutputType | null
    _min: TblDepartmentMinAggregateOutputType | null
    _max: TblDepartmentMaxAggregateOutputType | null
  }

  export type TblDepartmentAvgAggregateOutputType = {
    tblDepartmentID: Decimal | null
  }

  export type TblDepartmentSumAggregateOutputType = {
    tblDepartmentID: Decimal | null
  }

  export type TblDepartmentMinAggregateOutputType = {
    tblDepartmentID: Decimal | null
    deptcode: string | null
    deptname: string | null
  }

  export type TblDepartmentMaxAggregateOutputType = {
    tblDepartmentID: Decimal | null
    deptcode: string | null
    deptname: string | null
  }

  export type TblDepartmentCountAggregateOutputType = {
    tblDepartmentID: number
    deptcode: number
    deptname: number
    _all: number
  }


  export type TblDepartmentAvgAggregateInputType = {
    tblDepartmentID?: true
  }

  export type TblDepartmentSumAggregateInputType = {
    tblDepartmentID?: true
  }

  export type TblDepartmentMinAggregateInputType = {
    tblDepartmentID?: true
    deptcode?: true
    deptname?: true
  }

  export type TblDepartmentMaxAggregateInputType = {
    tblDepartmentID?: true
    deptcode?: true
    deptname?: true
  }

  export type TblDepartmentCountAggregateInputType = {
    tblDepartmentID?: true
    deptcode?: true
    deptname?: true
    _all?: true
  }

  export type TblDepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblDepartment to aggregate.
     */
    where?: tblDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDepartments to fetch.
     */
    orderBy?: tblDepartmentOrderByWithRelationInput | tblDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblDepartments
    **/
    _count?: true | TblDepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblDepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblDepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblDepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblDepartmentMaxAggregateInputType
  }

  export type GetTblDepartmentAggregateType<T extends TblDepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateTblDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblDepartment[P]>
      : GetScalarType<T[P], AggregateTblDepartment[P]>
  }




  export type tblDepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblDepartmentWhereInput
    orderBy?: tblDepartmentOrderByWithAggregationInput | tblDepartmentOrderByWithAggregationInput[]
    by: TblDepartmentScalarFieldEnum[] | TblDepartmentScalarFieldEnum
    having?: tblDepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblDepartmentCountAggregateInputType | true
    _avg?: TblDepartmentAvgAggregateInputType
    _sum?: TblDepartmentSumAggregateInputType
    _min?: TblDepartmentMinAggregateInputType
    _max?: TblDepartmentMaxAggregateInputType
  }

  export type TblDepartmentGroupByOutputType = {
    tblDepartmentID: Decimal
    deptcode: string | null
    deptname: string | null
    _count: TblDepartmentCountAggregateOutputType | null
    _avg: TblDepartmentAvgAggregateOutputType | null
    _sum: TblDepartmentSumAggregateOutputType | null
    _min: TblDepartmentMinAggregateOutputType | null
    _max: TblDepartmentMaxAggregateOutputType | null
  }

  type GetTblDepartmentGroupByPayload<T extends tblDepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblDepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblDepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblDepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], TblDepartmentGroupByOutputType[P]>
        }
      >
    >


  export type tblDepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tblDepartmentID?: boolean
    deptcode?: boolean
    deptname?: boolean
    patients?: boolean | tblDepartment$patientsArgs<ExtArgs>
    _count?: boolean | TblDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblDepartment"]>



  export type tblDepartmentSelectScalar = {
    tblDepartmentID?: boolean
    deptcode?: boolean
    deptname?: boolean
  }

  export type tblDepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tblDepartmentID" | "deptcode" | "deptname", ExtArgs["result"]["tblDepartment"]>
  export type tblDepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patients?: boolean | tblDepartment$patientsArgs<ExtArgs>
    _count?: boolean | TblDepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tblDepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblDepartment"
    objects: {
      patients: Prisma.$PatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tblDepartmentID: Prisma.Decimal
      deptcode: string | null
      deptname: string | null
    }, ExtArgs["result"]["tblDepartment"]>
    composites: {}
  }

  type tblDepartmentGetPayload<S extends boolean | null | undefined | tblDepartmentDefaultArgs> = $Result.GetResult<Prisma.$tblDepartmentPayload, S>

  type tblDepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tblDepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TblDepartmentCountAggregateInputType | true
    }

  export interface tblDepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblDepartment'], meta: { name: 'tblDepartment' } }
    /**
     * Find zero or one TblDepartment that matches the filter.
     * @param {tblDepartmentFindUniqueArgs} args - Arguments to find a TblDepartment
     * @example
     * // Get one TblDepartment
     * const tblDepartment = await prisma.tblDepartment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblDepartmentFindUniqueArgs>(args: SelectSubset<T, tblDepartmentFindUniqueArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TblDepartment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tblDepartmentFindUniqueOrThrowArgs} args - Arguments to find a TblDepartment
     * @example
     * // Get one TblDepartment
     * const tblDepartment = await prisma.tblDepartment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblDepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, tblDepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TblDepartment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDepartmentFindFirstArgs} args - Arguments to find a TblDepartment
     * @example
     * // Get one TblDepartment
     * const tblDepartment = await prisma.tblDepartment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblDepartmentFindFirstArgs>(args?: SelectSubset<T, tblDepartmentFindFirstArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TblDepartment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDepartmentFindFirstOrThrowArgs} args - Arguments to find a TblDepartment
     * @example
     * // Get one TblDepartment
     * const tblDepartment = await prisma.tblDepartment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblDepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, tblDepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TblDepartments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblDepartments
     * const tblDepartments = await prisma.tblDepartment.findMany()
     * 
     * // Get first 10 TblDepartments
     * const tblDepartments = await prisma.tblDepartment.findMany({ take: 10 })
     * 
     * // Only select the `tblDepartmentID`
     * const tblDepartmentWithTblDepartmentIDOnly = await prisma.tblDepartment.findMany({ select: { tblDepartmentID: true } })
     * 
     */
    findMany<T extends tblDepartmentFindManyArgs>(args?: SelectSubset<T, tblDepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TblDepartment.
     * @param {tblDepartmentCreateArgs} args - Arguments to create a TblDepartment.
     * @example
     * // Create one TblDepartment
     * const TblDepartment = await prisma.tblDepartment.create({
     *   data: {
     *     // ... data to create a TblDepartment
     *   }
     * })
     * 
     */
    create<T extends tblDepartmentCreateArgs>(args: SelectSubset<T, tblDepartmentCreateArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TblDepartments.
     * @param {tblDepartmentCreateManyArgs} args - Arguments to create many TblDepartments.
     * @example
     * // Create many TblDepartments
     * const tblDepartment = await prisma.tblDepartment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblDepartmentCreateManyArgs>(args?: SelectSubset<T, tblDepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblDepartment.
     * @param {tblDepartmentDeleteArgs} args - Arguments to delete one TblDepartment.
     * @example
     * // Delete one TblDepartment
     * const TblDepartment = await prisma.tblDepartment.delete({
     *   where: {
     *     // ... filter to delete one TblDepartment
     *   }
     * })
     * 
     */
    delete<T extends tblDepartmentDeleteArgs>(args: SelectSubset<T, tblDepartmentDeleteArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TblDepartment.
     * @param {tblDepartmentUpdateArgs} args - Arguments to update one TblDepartment.
     * @example
     * // Update one TblDepartment
     * const tblDepartment = await prisma.tblDepartment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblDepartmentUpdateArgs>(args: SelectSubset<T, tblDepartmentUpdateArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TblDepartments.
     * @param {tblDepartmentDeleteManyArgs} args - Arguments to filter TblDepartments to delete.
     * @example
     * // Delete a few TblDepartments
     * const { count } = await prisma.tblDepartment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblDepartmentDeleteManyArgs>(args?: SelectSubset<T, tblDepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblDepartments
     * const tblDepartment = await prisma.tblDepartment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblDepartmentUpdateManyArgs>(args: SelectSubset<T, tblDepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblDepartment.
     * @param {tblDepartmentUpsertArgs} args - Arguments to update or create a TblDepartment.
     * @example
     * // Update or create a TblDepartment
     * const tblDepartment = await prisma.tblDepartment.upsert({
     *   create: {
     *     // ... data to create a TblDepartment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblDepartment we want to update
     *   }
     * })
     */
    upsert<T extends tblDepartmentUpsertArgs>(args: SelectSubset<T, tblDepartmentUpsertArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TblDepartments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDepartmentCountArgs} args - Arguments to filter TblDepartments to count.
     * @example
     * // Count the number of TblDepartments
     * const count = await prisma.tblDepartment.count({
     *   where: {
     *     // ... the filter for the TblDepartments we want to count
     *   }
     * })
    **/
    count<T extends tblDepartmentCountArgs>(
      args?: Subset<T, tblDepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblDepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblDepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TblDepartmentAggregateArgs>(args: Subset<T, TblDepartmentAggregateArgs>): Prisma.PrismaPromise<GetTblDepartmentAggregateType<T>>

    /**
     * Group by TblDepartment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDepartmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tblDepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblDepartmentGroupByArgs['orderBy'] }
        : { orderBy?: tblDepartmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tblDepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblDepartment model
   */
  readonly fields: tblDepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblDepartment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblDepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patients<T extends tblDepartment$patientsArgs<ExtArgs> = {}>(args?: Subset<T, tblDepartment$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tblDepartment model
   */
  interface tblDepartmentFieldRefs {
    readonly tblDepartmentID: FieldRef<"tblDepartment", 'Decimal'>
    readonly deptcode: FieldRef<"tblDepartment", 'String'>
    readonly deptname: FieldRef<"tblDepartment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tblDepartment findUnique
   */
  export type tblDepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which tblDepartment to fetch.
     */
    where: tblDepartmentWhereUniqueInput
  }

  /**
   * tblDepartment findUniqueOrThrow
   */
  export type tblDepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which tblDepartment to fetch.
     */
    where: tblDepartmentWhereUniqueInput
  }

  /**
   * tblDepartment findFirst
   */
  export type tblDepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which tblDepartment to fetch.
     */
    where?: tblDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDepartments to fetch.
     */
    orderBy?: tblDepartmentOrderByWithRelationInput | tblDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblDepartments.
     */
    cursor?: tblDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblDepartments.
     */
    distinct?: TblDepartmentScalarFieldEnum | TblDepartmentScalarFieldEnum[]
  }

  /**
   * tblDepartment findFirstOrThrow
   */
  export type tblDepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which tblDepartment to fetch.
     */
    where?: tblDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDepartments to fetch.
     */
    orderBy?: tblDepartmentOrderByWithRelationInput | tblDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblDepartments.
     */
    cursor?: tblDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDepartments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblDepartments.
     */
    distinct?: TblDepartmentScalarFieldEnum | TblDepartmentScalarFieldEnum[]
  }

  /**
   * tblDepartment findMany
   */
  export type tblDepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * Filter, which tblDepartments to fetch.
     */
    where?: tblDepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDepartments to fetch.
     */
    orderBy?: tblDepartmentOrderByWithRelationInput | tblDepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblDepartments.
     */
    cursor?: tblDepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDepartments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDepartments.
     */
    skip?: number
    distinct?: TblDepartmentScalarFieldEnum | TblDepartmentScalarFieldEnum[]
  }

  /**
   * tblDepartment create
   */
  export type tblDepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a tblDepartment.
     */
    data: XOR<tblDepartmentCreateInput, tblDepartmentUncheckedCreateInput>
  }

  /**
   * tblDepartment createMany
   */
  export type tblDepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblDepartments.
     */
    data: tblDepartmentCreateManyInput | tblDepartmentCreateManyInput[]
  }

  /**
   * tblDepartment update
   */
  export type tblDepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a tblDepartment.
     */
    data: XOR<tblDepartmentUpdateInput, tblDepartmentUncheckedUpdateInput>
    /**
     * Choose, which tblDepartment to update.
     */
    where: tblDepartmentWhereUniqueInput
  }

  /**
   * tblDepartment updateMany
   */
  export type tblDepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblDepartments.
     */
    data: XOR<tblDepartmentUpdateManyMutationInput, tblDepartmentUncheckedUpdateManyInput>
    /**
     * Filter which tblDepartments to update
     */
    where?: tblDepartmentWhereInput
    /**
     * Limit how many tblDepartments to update.
     */
    limit?: number
  }

  /**
   * tblDepartment upsert
   */
  export type tblDepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the tblDepartment to update in case it exists.
     */
    where: tblDepartmentWhereUniqueInput
    /**
     * In case the tblDepartment found by the `where` argument doesn't exist, create a new tblDepartment with this data.
     */
    create: XOR<tblDepartmentCreateInput, tblDepartmentUncheckedCreateInput>
    /**
     * In case the tblDepartment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblDepartmentUpdateInput, tblDepartmentUncheckedUpdateInput>
  }

  /**
   * tblDepartment delete
   */
  export type tblDepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    /**
     * Filter which tblDepartment to delete.
     */
    where: tblDepartmentWhereUniqueInput
  }

  /**
   * tblDepartment deleteMany
   */
  export type tblDepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblDepartments to delete
     */
    where?: tblDepartmentWhereInput
    /**
     * Limit how many tblDepartments to delete.
     */
    limit?: number
  }

  /**
   * tblDepartment.patients
   */
  export type tblDepartment$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * tblDepartment without action
   */
  export type tblDepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    age: number | null
    ticketNumber: number | null
    departmentId: Decimal | null
    state: number | null
  }

  export type PatientSumAggregateOutputType = {
    age: number | null
    ticketNumber: number | null
    departmentId: Decimal | null
    state: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    nationality: string | null
    sex: string | null
    idNumber: string | null
    age: number | null
    mobileNumber: string | null
    status: string | null
    cheifComplaint: string | null
    ticket: string | null
    ticketNumber: number | null
    barcode: string | null
    bloodGroup: string | null
    birthDate: Date | null
    mrnNumber: string | null
    remarks: string | null
    registrationDate: Date | null
    firstCallTime: Date | null
    vitalTime: Date | null
    assignDeptTime: Date | null
    secondCallTime: Date | null
    departmentId: Decimal | null
    userId: string | null
    bedId: string | null
    state: number | null
    callPatient: boolean | null
    beginTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nationality: string | null
    sex: string | null
    idNumber: string | null
    age: number | null
    mobileNumber: string | null
    status: string | null
    cheifComplaint: string | null
    ticket: string | null
    ticketNumber: number | null
    barcode: string | null
    bloodGroup: string | null
    birthDate: Date | null
    mrnNumber: string | null
    remarks: string | null
    registrationDate: Date | null
    firstCallTime: Date | null
    vitalTime: Date | null
    assignDeptTime: Date | null
    secondCallTime: Date | null
    departmentId: Decimal | null
    userId: string | null
    bedId: string | null
    state: number | null
    callPatient: boolean | null
    beginTime: Date | null
    endTime: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    nationality: number
    sex: number
    idNumber: number
    age: number
    mobileNumber: number
    status: number
    cheifComplaint: number
    ticket: number
    ticketNumber: number
    barcode: number
    bloodGroup: number
    birthDate: number
    mrnNumber: number
    remarks: number
    registrationDate: number
    firstCallTime: number
    vitalTime: number
    assignDeptTime: number
    secondCallTime: number
    departmentId: number
    userId: number
    bedId: number
    state: number
    callPatient: number
    beginTime: number
    endTime: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    age?: true
    ticketNumber?: true
    departmentId?: true
    state?: true
  }

  export type PatientSumAggregateInputType = {
    age?: true
    ticketNumber?: true
    departmentId?: true
    state?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    nationality?: true
    sex?: true
    idNumber?: true
    age?: true
    mobileNumber?: true
    status?: true
    cheifComplaint?: true
    ticket?: true
    ticketNumber?: true
    barcode?: true
    bloodGroup?: true
    birthDate?: true
    mrnNumber?: true
    remarks?: true
    registrationDate?: true
    firstCallTime?: true
    vitalTime?: true
    assignDeptTime?: true
    secondCallTime?: true
    departmentId?: true
    userId?: true
    bedId?: true
    state?: true
    callPatient?: true
    beginTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    nationality?: true
    sex?: true
    idNumber?: true
    age?: true
    mobileNumber?: true
    status?: true
    cheifComplaint?: true
    ticket?: true
    ticketNumber?: true
    barcode?: true
    bloodGroup?: true
    birthDate?: true
    mrnNumber?: true
    remarks?: true
    registrationDate?: true
    firstCallTime?: true
    vitalTime?: true
    assignDeptTime?: true
    secondCallTime?: true
    departmentId?: true
    userId?: true
    bedId?: true
    state?: true
    callPatient?: true
    beginTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    nationality?: true
    sex?: true
    idNumber?: true
    age?: true
    mobileNumber?: true
    status?: true
    cheifComplaint?: true
    ticket?: true
    ticketNumber?: true
    barcode?: true
    bloodGroup?: true
    birthDate?: true
    mrnNumber?: true
    remarks?: true
    registrationDate?: true
    firstCallTime?: true
    vitalTime?: true
    assignDeptTime?: true
    secondCallTime?: true
    departmentId?: true
    userId?: true
    bedId?: true
    state?: true
    callPatient?: true
    beginTime?: true
    endTime?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string | null
    nationality: string | null
    sex: string | null
    idNumber: string | null
    age: number | null
    mobileNumber: string | null
    status: string | null
    cheifComplaint: string | null
    ticket: string | null
    ticketNumber: number | null
    barcode: string | null
    bloodGroup: string | null
    birthDate: Date | null
    mrnNumber: string | null
    remarks: string | null
    registrationDate: Date | null
    firstCallTime: Date | null
    vitalTime: Date | null
    assignDeptTime: Date | null
    secondCallTime: Date | null
    departmentId: Decimal | null
    userId: string | null
    bedId: string | null
    state: number | null
    callPatient: boolean | null
    beginTime: Date | null
    endTime: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nationality?: boolean
    sex?: boolean
    idNumber?: boolean
    age?: boolean
    mobileNumber?: boolean
    status?: boolean
    cheifComplaint?: boolean
    ticket?: boolean
    ticketNumber?: boolean
    barcode?: boolean
    bloodGroup?: boolean
    birthDate?: boolean
    mrnNumber?: boolean
    remarks?: boolean
    registrationDate?: boolean
    firstCallTime?: boolean
    vitalTime?: boolean
    assignDeptTime?: boolean
    secondCallTime?: boolean
    departmentId?: boolean
    userId?: boolean
    bedId?: boolean
    state?: boolean
    callPatient?: boolean
    beginTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    department?: boolean | Patient$departmentArgs<ExtArgs>
    user?: boolean | Patient$userArgs<ExtArgs>
    bed?: boolean | Patient$bedArgs<ExtArgs>
    vitalSigns?: boolean | Patient$vitalSignsArgs<ExtArgs>
    journeys?: boolean | Patient$journeysArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    nationality?: boolean
    sex?: boolean
    idNumber?: boolean
    age?: boolean
    mobileNumber?: boolean
    status?: boolean
    cheifComplaint?: boolean
    ticket?: boolean
    ticketNumber?: boolean
    barcode?: boolean
    bloodGroup?: boolean
    birthDate?: boolean
    mrnNumber?: boolean
    remarks?: boolean
    registrationDate?: boolean
    firstCallTime?: boolean
    vitalTime?: boolean
    assignDeptTime?: boolean
    secondCallTime?: boolean
    departmentId?: boolean
    userId?: boolean
    bedId?: boolean
    state?: boolean
    callPatient?: boolean
    beginTime?: boolean
    endTime?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "nationality" | "sex" | "idNumber" | "age" | "mobileNumber" | "status" | "cheifComplaint" | "ticket" | "ticketNumber" | "barcode" | "bloodGroup" | "birthDate" | "mrnNumber" | "remarks" | "registrationDate" | "firstCallTime" | "vitalTime" | "assignDeptTime" | "secondCallTime" | "departmentId" | "userId" | "bedId" | "state" | "callPatient" | "beginTime" | "endTime" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | Patient$departmentArgs<ExtArgs>
    user?: boolean | Patient$userArgs<ExtArgs>
    bed?: boolean | Patient$bedArgs<ExtArgs>
    vitalSigns?: boolean | Patient$vitalSignsArgs<ExtArgs>
    journeys?: boolean | Patient$journeysArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      department: Prisma.$tblDepartmentPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      bed: Prisma.$BedPayload<ExtArgs> | null
      vitalSigns: Prisma.$VitalSignPayload<ExtArgs>[]
      journeys: Prisma.$JourneyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      nationality: string | null
      sex: string | null
      idNumber: string | null
      age: number | null
      mobileNumber: string | null
      status: string | null
      cheifComplaint: string | null
      ticket: string | null
      ticketNumber: number | null
      barcode: string | null
      bloodGroup: string | null
      birthDate: Date | null
      mrnNumber: string | null
      remarks: string | null
      registrationDate: Date | null
      firstCallTime: Date | null
      vitalTime: Date | null
      assignDeptTime: Date | null
      secondCallTime: Date | null
      departmentId: Prisma.Decimal | null
      userId: string | null
      bedId: string | null
      state: number | null
      callPatient: boolean | null
      beginTime: Date | null
      endTime: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends Patient$departmentArgs<ExtArgs> = {}>(args?: Subset<T, Patient$departmentArgs<ExtArgs>>): Prisma__tblDepartmentClient<$Result.GetResult<Prisma.$tblDepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends Patient$userArgs<ExtArgs> = {}>(args?: Subset<T, Patient$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    bed<T extends Patient$bedArgs<ExtArgs> = {}>(args?: Subset<T, Patient$bedArgs<ExtArgs>>): Prisma__BedClient<$Result.GetResult<Prisma.$BedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vitalSigns<T extends Patient$vitalSignsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$vitalSignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    journeys<T extends Patient$journeysArgs<ExtArgs> = {}>(args?: Subset<T, Patient$journeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly nationality: FieldRef<"Patient", 'String'>
    readonly sex: FieldRef<"Patient", 'String'>
    readonly idNumber: FieldRef<"Patient", 'String'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly mobileNumber: FieldRef<"Patient", 'String'>
    readonly status: FieldRef<"Patient", 'String'>
    readonly cheifComplaint: FieldRef<"Patient", 'String'>
    readonly ticket: FieldRef<"Patient", 'String'>
    readonly ticketNumber: FieldRef<"Patient", 'Int'>
    readonly barcode: FieldRef<"Patient", 'String'>
    readonly bloodGroup: FieldRef<"Patient", 'String'>
    readonly birthDate: FieldRef<"Patient", 'DateTime'>
    readonly mrnNumber: FieldRef<"Patient", 'String'>
    readonly remarks: FieldRef<"Patient", 'String'>
    readonly registrationDate: FieldRef<"Patient", 'DateTime'>
    readonly firstCallTime: FieldRef<"Patient", 'DateTime'>
    readonly vitalTime: FieldRef<"Patient", 'DateTime'>
    readonly assignDeptTime: FieldRef<"Patient", 'DateTime'>
    readonly secondCallTime: FieldRef<"Patient", 'DateTime'>
    readonly departmentId: FieldRef<"Patient", 'Decimal'>
    readonly userId: FieldRef<"Patient", 'String'>
    readonly bedId: FieldRef<"Patient", 'String'>
    readonly state: FieldRef<"Patient", 'Int'>
    readonly callPatient: FieldRef<"Patient", 'Boolean'>
    readonly beginTime: FieldRef<"Patient", 'DateTime'>
    readonly endTime: FieldRef<"Patient", 'DateTime'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.department
   */
  export type Patient$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDepartment
     */
    select?: tblDepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tblDepartment
     */
    omit?: tblDepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblDepartmentInclude<ExtArgs> | null
    where?: tblDepartmentWhereInput
  }

  /**
   * Patient.user
   */
  export type Patient$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Patient.bed
   */
  export type Patient$bedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bed
     */
    select?: BedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bed
     */
    omit?: BedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BedInclude<ExtArgs> | null
    where?: BedWhereInput
  }

  /**
   * Patient.vitalSigns
   */
  export type Patient$vitalSignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    where?: VitalSignWhereInput
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    cursor?: VitalSignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VitalSignScalarFieldEnum | VitalSignScalarFieldEnum[]
  }

  /**
   * Patient.journeys
   */
  export type Patient$journeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    where?: JourneyWhereInput
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    cursor?: JourneyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model VitalSign
   */

  export type AggregateVitalSign = {
    _count: VitalSignCountAggregateOutputType | null
    _min: VitalSignMinAggregateOutputType | null
    _max: VitalSignMaxAggregateOutputType | null
  }

  export type VitalSignMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    bp: string | null
    height: string | null
    temp: string | null
    spo2: string | null
    weight: string | null
    hr: string | null
    rbs: string | null
    rr: string | null
    timeVs: Date | null
    allergies: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VitalSignMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    bp: string | null
    height: string | null
    temp: string | null
    spo2: string | null
    weight: string | null
    hr: string | null
    rbs: string | null
    rr: string | null
    timeVs: Date | null
    allergies: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VitalSignCountAggregateOutputType = {
    id: number
    patientId: number
    bp: number
    height: number
    temp: number
    spo2: number
    weight: number
    hr: number
    rbs: number
    rr: number
    timeVs: number
    allergies: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VitalSignMinAggregateInputType = {
    id?: true
    patientId?: true
    bp?: true
    height?: true
    temp?: true
    spo2?: true
    weight?: true
    hr?: true
    rbs?: true
    rr?: true
    timeVs?: true
    allergies?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VitalSignMaxAggregateInputType = {
    id?: true
    patientId?: true
    bp?: true
    height?: true
    temp?: true
    spo2?: true
    weight?: true
    hr?: true
    rbs?: true
    rr?: true
    timeVs?: true
    allergies?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VitalSignCountAggregateInputType = {
    id?: true
    patientId?: true
    bp?: true
    height?: true
    temp?: true
    spo2?: true
    weight?: true
    hr?: true
    rbs?: true
    rr?: true
    timeVs?: true
    allergies?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VitalSignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitalSign to aggregate.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VitalSigns
    **/
    _count?: true | VitalSignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VitalSignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VitalSignMaxAggregateInputType
  }

  export type GetVitalSignAggregateType<T extends VitalSignAggregateArgs> = {
        [P in keyof T & keyof AggregateVitalSign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVitalSign[P]>
      : GetScalarType<T[P], AggregateVitalSign[P]>
  }




  export type VitalSignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VitalSignWhereInput
    orderBy?: VitalSignOrderByWithAggregationInput | VitalSignOrderByWithAggregationInput[]
    by: VitalSignScalarFieldEnum[] | VitalSignScalarFieldEnum
    having?: VitalSignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VitalSignCountAggregateInputType | true
    _min?: VitalSignMinAggregateInputType
    _max?: VitalSignMaxAggregateInputType
  }

  export type VitalSignGroupByOutputType = {
    id: string
    patientId: string | null
    bp: string | null
    height: string | null
    temp: string | null
    spo2: string | null
    weight: string | null
    hr: string | null
    rbs: string | null
    rr: string | null
    timeVs: Date | null
    allergies: boolean | null
    createdAt: Date
    updatedAt: Date
    _count: VitalSignCountAggregateOutputType | null
    _min: VitalSignMinAggregateOutputType | null
    _max: VitalSignMaxAggregateOutputType | null
  }

  type GetVitalSignGroupByPayload<T extends VitalSignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VitalSignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VitalSignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VitalSignGroupByOutputType[P]>
            : GetScalarType<T[P], VitalSignGroupByOutputType[P]>
        }
      >
    >


  export type VitalSignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    bp?: boolean
    height?: boolean
    temp?: boolean
    spo2?: boolean
    weight?: boolean
    hr?: boolean
    rbs?: boolean
    rr?: boolean
    timeVs?: boolean
    allergies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | VitalSign$patientArgs<ExtArgs>
  }, ExtArgs["result"]["vitalSign"]>



  export type VitalSignSelectScalar = {
    id?: boolean
    patientId?: boolean
    bp?: boolean
    height?: boolean
    temp?: boolean
    spo2?: boolean
    weight?: boolean
    hr?: boolean
    rbs?: boolean
    rr?: boolean
    timeVs?: boolean
    allergies?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VitalSignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "patientId" | "bp" | "height" | "temp" | "spo2" | "weight" | "hr" | "rbs" | "rr" | "timeVs" | "allergies" | "createdAt" | "updatedAt", ExtArgs["result"]["vitalSign"]>
  export type VitalSignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | VitalSign$patientArgs<ExtArgs>
  }

  export type $VitalSignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VitalSign"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string | null
      bp: string | null
      height: string | null
      temp: string | null
      spo2: string | null
      weight: string | null
      hr: string | null
      rbs: string | null
      rr: string | null
      timeVs: Date | null
      allergies: boolean | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vitalSign"]>
    composites: {}
  }

  type VitalSignGetPayload<S extends boolean | null | undefined | VitalSignDefaultArgs> = $Result.GetResult<Prisma.$VitalSignPayload, S>

  type VitalSignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VitalSignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VitalSignCountAggregateInputType | true
    }

  export interface VitalSignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VitalSign'], meta: { name: 'VitalSign' } }
    /**
     * Find zero or one VitalSign that matches the filter.
     * @param {VitalSignFindUniqueArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VitalSignFindUniqueArgs>(args: SelectSubset<T, VitalSignFindUniqueArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VitalSign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VitalSignFindUniqueOrThrowArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VitalSignFindUniqueOrThrowArgs>(args: SelectSubset<T, VitalSignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitalSign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignFindFirstArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VitalSignFindFirstArgs>(args?: SelectSubset<T, VitalSignFindFirstArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VitalSign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignFindFirstOrThrowArgs} args - Arguments to find a VitalSign
     * @example
     * // Get one VitalSign
     * const vitalSign = await prisma.vitalSign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VitalSignFindFirstOrThrowArgs>(args?: SelectSubset<T, VitalSignFindFirstOrThrowArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VitalSigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VitalSigns
     * const vitalSigns = await prisma.vitalSign.findMany()
     * 
     * // Get first 10 VitalSigns
     * const vitalSigns = await prisma.vitalSign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vitalSignWithIdOnly = await prisma.vitalSign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VitalSignFindManyArgs>(args?: SelectSubset<T, VitalSignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VitalSign.
     * @param {VitalSignCreateArgs} args - Arguments to create a VitalSign.
     * @example
     * // Create one VitalSign
     * const VitalSign = await prisma.vitalSign.create({
     *   data: {
     *     // ... data to create a VitalSign
     *   }
     * })
     * 
     */
    create<T extends VitalSignCreateArgs>(args: SelectSubset<T, VitalSignCreateArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VitalSigns.
     * @param {VitalSignCreateManyArgs} args - Arguments to create many VitalSigns.
     * @example
     * // Create many VitalSigns
     * const vitalSign = await prisma.vitalSign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VitalSignCreateManyArgs>(args?: SelectSubset<T, VitalSignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VitalSign.
     * @param {VitalSignDeleteArgs} args - Arguments to delete one VitalSign.
     * @example
     * // Delete one VitalSign
     * const VitalSign = await prisma.vitalSign.delete({
     *   where: {
     *     // ... filter to delete one VitalSign
     *   }
     * })
     * 
     */
    delete<T extends VitalSignDeleteArgs>(args: SelectSubset<T, VitalSignDeleteArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VitalSign.
     * @param {VitalSignUpdateArgs} args - Arguments to update one VitalSign.
     * @example
     * // Update one VitalSign
     * const vitalSign = await prisma.vitalSign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VitalSignUpdateArgs>(args: SelectSubset<T, VitalSignUpdateArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VitalSigns.
     * @param {VitalSignDeleteManyArgs} args - Arguments to filter VitalSigns to delete.
     * @example
     * // Delete a few VitalSigns
     * const { count } = await prisma.vitalSign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VitalSignDeleteManyArgs>(args?: SelectSubset<T, VitalSignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VitalSigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VitalSigns
     * const vitalSign = await prisma.vitalSign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VitalSignUpdateManyArgs>(args: SelectSubset<T, VitalSignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VitalSign.
     * @param {VitalSignUpsertArgs} args - Arguments to update or create a VitalSign.
     * @example
     * // Update or create a VitalSign
     * const vitalSign = await prisma.vitalSign.upsert({
     *   create: {
     *     // ... data to create a VitalSign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VitalSign we want to update
     *   }
     * })
     */
    upsert<T extends VitalSignUpsertArgs>(args: SelectSubset<T, VitalSignUpsertArgs<ExtArgs>>): Prisma__VitalSignClient<$Result.GetResult<Prisma.$VitalSignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VitalSigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignCountArgs} args - Arguments to filter VitalSigns to count.
     * @example
     * // Count the number of VitalSigns
     * const count = await prisma.vitalSign.count({
     *   where: {
     *     // ... the filter for the VitalSigns we want to count
     *   }
     * })
    **/
    count<T extends VitalSignCountArgs>(
      args?: Subset<T, VitalSignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VitalSignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VitalSign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VitalSignAggregateArgs>(args: Subset<T, VitalSignAggregateArgs>): Prisma.PrismaPromise<GetVitalSignAggregateType<T>>

    /**
     * Group by VitalSign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VitalSignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VitalSignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VitalSignGroupByArgs['orderBy'] }
        : { orderBy?: VitalSignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VitalSignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVitalSignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VitalSign model
   */
  readonly fields: VitalSignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VitalSign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VitalSignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends VitalSign$patientArgs<ExtArgs> = {}>(args?: Subset<T, VitalSign$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VitalSign model
   */
  interface VitalSignFieldRefs {
    readonly id: FieldRef<"VitalSign", 'String'>
    readonly patientId: FieldRef<"VitalSign", 'String'>
    readonly bp: FieldRef<"VitalSign", 'String'>
    readonly height: FieldRef<"VitalSign", 'String'>
    readonly temp: FieldRef<"VitalSign", 'String'>
    readonly spo2: FieldRef<"VitalSign", 'String'>
    readonly weight: FieldRef<"VitalSign", 'String'>
    readonly hr: FieldRef<"VitalSign", 'String'>
    readonly rbs: FieldRef<"VitalSign", 'String'>
    readonly rr: FieldRef<"VitalSign", 'String'>
    readonly timeVs: FieldRef<"VitalSign", 'DateTime'>
    readonly allergies: FieldRef<"VitalSign", 'Boolean'>
    readonly createdAt: FieldRef<"VitalSign", 'DateTime'>
    readonly updatedAt: FieldRef<"VitalSign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VitalSign findUnique
   */
  export type VitalSignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign findUniqueOrThrow
   */
  export type VitalSignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign findFirst
   */
  export type VitalSignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitalSigns.
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitalSigns.
     */
    distinct?: VitalSignScalarFieldEnum | VitalSignScalarFieldEnum[]
  }

  /**
   * VitalSign findFirstOrThrow
   */
  export type VitalSignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSign to fetch.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VitalSigns.
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VitalSigns.
     */
    distinct?: VitalSignScalarFieldEnum | VitalSignScalarFieldEnum[]
  }

  /**
   * VitalSign findMany
   */
  export type VitalSignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter, which VitalSigns to fetch.
     */
    where?: VitalSignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VitalSigns to fetch.
     */
    orderBy?: VitalSignOrderByWithRelationInput | VitalSignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VitalSigns.
     */
    cursor?: VitalSignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VitalSigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VitalSigns.
     */
    skip?: number
    distinct?: VitalSignScalarFieldEnum | VitalSignScalarFieldEnum[]
  }

  /**
   * VitalSign create
   */
  export type VitalSignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * The data needed to create a VitalSign.
     */
    data: XOR<VitalSignCreateInput, VitalSignUncheckedCreateInput>
  }

  /**
   * VitalSign createMany
   */
  export type VitalSignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VitalSigns.
     */
    data: VitalSignCreateManyInput | VitalSignCreateManyInput[]
  }

  /**
   * VitalSign update
   */
  export type VitalSignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * The data needed to update a VitalSign.
     */
    data: XOR<VitalSignUpdateInput, VitalSignUncheckedUpdateInput>
    /**
     * Choose, which VitalSign to update.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign updateMany
   */
  export type VitalSignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VitalSigns.
     */
    data: XOR<VitalSignUpdateManyMutationInput, VitalSignUncheckedUpdateManyInput>
    /**
     * Filter which VitalSigns to update
     */
    where?: VitalSignWhereInput
    /**
     * Limit how many VitalSigns to update.
     */
    limit?: number
  }

  /**
   * VitalSign upsert
   */
  export type VitalSignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * The filter to search for the VitalSign to update in case it exists.
     */
    where: VitalSignWhereUniqueInput
    /**
     * In case the VitalSign found by the `where` argument doesn't exist, create a new VitalSign with this data.
     */
    create: XOR<VitalSignCreateInput, VitalSignUncheckedCreateInput>
    /**
     * In case the VitalSign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VitalSignUpdateInput, VitalSignUncheckedUpdateInput>
  }

  /**
   * VitalSign delete
   */
  export type VitalSignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
    /**
     * Filter which VitalSign to delete.
     */
    where: VitalSignWhereUniqueInput
  }

  /**
   * VitalSign deleteMany
   */
  export type VitalSignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VitalSigns to delete
     */
    where?: VitalSignWhereInput
    /**
     * Limit how many VitalSigns to delete.
     */
    limit?: number
  }

  /**
   * VitalSign.patient
   */
  export type VitalSign$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * VitalSign without action
   */
  export type VitalSignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VitalSign
     */
    select?: VitalSignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VitalSign
     */
    omit?: VitalSignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VitalSignInclude<ExtArgs> | null
  }


  /**
   * Model Journey
   */

  export type AggregateJourney = {
    _count: JourneyCountAggregateOutputType | null
    _min: JourneyMinAggregateOutputType | null
    _max: JourneyMaxAggregateOutputType | null
  }

  export type JourneyMinAggregateOutputType = {
    id: string | null
    isActive: boolean | null
    firstCallTime: Date | null
    vitalTime: Date | null
    assignDeptTime: Date | null
    secondCallTime: Date | null
    beginTime: Date | null
    endTime: Date | null
    patientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JourneyMaxAggregateOutputType = {
    id: string | null
    isActive: boolean | null
    firstCallTime: Date | null
    vitalTime: Date | null
    assignDeptTime: Date | null
    secondCallTime: Date | null
    beginTime: Date | null
    endTime: Date | null
    patientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JourneyCountAggregateOutputType = {
    id: number
    isActive: number
    firstCallTime: number
    vitalTime: number
    assignDeptTime: number
    secondCallTime: number
    beginTime: number
    endTime: number
    patientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JourneyMinAggregateInputType = {
    id?: true
    isActive?: true
    firstCallTime?: true
    vitalTime?: true
    assignDeptTime?: true
    secondCallTime?: true
    beginTime?: true
    endTime?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JourneyMaxAggregateInputType = {
    id?: true
    isActive?: true
    firstCallTime?: true
    vitalTime?: true
    assignDeptTime?: true
    secondCallTime?: true
    beginTime?: true
    endTime?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JourneyCountAggregateInputType = {
    id?: true
    isActive?: true
    firstCallTime?: true
    vitalTime?: true
    assignDeptTime?: true
    secondCallTime?: true
    beginTime?: true
    endTime?: true
    patientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JourneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journey to aggregate.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Journeys
    **/
    _count?: true | JourneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JourneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JourneyMaxAggregateInputType
  }

  export type GetJourneyAggregateType<T extends JourneyAggregateArgs> = {
        [P in keyof T & keyof AggregateJourney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJourney[P]>
      : GetScalarType<T[P], AggregateJourney[P]>
  }




  export type JourneyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JourneyWhereInput
    orderBy?: JourneyOrderByWithAggregationInput | JourneyOrderByWithAggregationInput[]
    by: JourneyScalarFieldEnum[] | JourneyScalarFieldEnum
    having?: JourneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JourneyCountAggregateInputType | true
    _min?: JourneyMinAggregateInputType
    _max?: JourneyMaxAggregateInputType
  }

  export type JourneyGroupByOutputType = {
    id: string
    isActive: boolean | null
    firstCallTime: Date | null
    vitalTime: Date | null
    assignDeptTime: Date | null
    secondCallTime: Date | null
    beginTime: Date | null
    endTime: Date | null
    patientId: string | null
    createdAt: Date
    updatedAt: Date
    _count: JourneyCountAggregateOutputType | null
    _min: JourneyMinAggregateOutputType | null
    _max: JourneyMaxAggregateOutputType | null
  }

  type GetJourneyGroupByPayload<T extends JourneyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JourneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JourneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JourneyGroupByOutputType[P]>
            : GetScalarType<T[P], JourneyGroupByOutputType[P]>
        }
      >
    >


  export type JourneySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    isActive?: boolean
    firstCallTime?: boolean
    vitalTime?: boolean
    assignDeptTime?: boolean
    secondCallTime?: boolean
    beginTime?: boolean
    endTime?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    patient?: boolean | Journey$patientArgs<ExtArgs>
  }, ExtArgs["result"]["journey"]>



  export type JourneySelectScalar = {
    id?: boolean
    isActive?: boolean
    firstCallTime?: boolean
    vitalTime?: boolean
    assignDeptTime?: boolean
    secondCallTime?: boolean
    beginTime?: boolean
    endTime?: boolean
    patientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JourneyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "isActive" | "firstCallTime" | "vitalTime" | "assignDeptTime" | "secondCallTime" | "beginTime" | "endTime" | "patientId" | "createdAt" | "updatedAt", ExtArgs["result"]["journey"]>
  export type JourneyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patient?: boolean | Journey$patientArgs<ExtArgs>
  }

  export type $JourneyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Journey"
    objects: {
      patient: Prisma.$PatientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      isActive: boolean | null
      firstCallTime: Date | null
      vitalTime: Date | null
      assignDeptTime: Date | null
      secondCallTime: Date | null
      beginTime: Date | null
      endTime: Date | null
      patientId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["journey"]>
    composites: {}
  }

  type JourneyGetPayload<S extends boolean | null | undefined | JourneyDefaultArgs> = $Result.GetResult<Prisma.$JourneyPayload, S>

  type JourneyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JourneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JourneyCountAggregateInputType | true
    }

  export interface JourneyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Journey'], meta: { name: 'Journey' } }
    /**
     * Find zero or one Journey that matches the filter.
     * @param {JourneyFindUniqueArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JourneyFindUniqueArgs>(args: SelectSubset<T, JourneyFindUniqueArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Journey that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JourneyFindUniqueOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JourneyFindUniqueOrThrowArgs>(args: SelectSubset<T, JourneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindFirstArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JourneyFindFirstArgs>(args?: SelectSubset<T, JourneyFindFirstArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Journey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindFirstOrThrowArgs} args - Arguments to find a Journey
     * @example
     * // Get one Journey
     * const journey = await prisma.journey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JourneyFindFirstOrThrowArgs>(args?: SelectSubset<T, JourneyFindFirstOrThrowArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Journeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Journeys
     * const journeys = await prisma.journey.findMany()
     * 
     * // Get first 10 Journeys
     * const journeys = await prisma.journey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const journeyWithIdOnly = await prisma.journey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JourneyFindManyArgs>(args?: SelectSubset<T, JourneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Journey.
     * @param {JourneyCreateArgs} args - Arguments to create a Journey.
     * @example
     * // Create one Journey
     * const Journey = await prisma.journey.create({
     *   data: {
     *     // ... data to create a Journey
     *   }
     * })
     * 
     */
    create<T extends JourneyCreateArgs>(args: SelectSubset<T, JourneyCreateArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Journeys.
     * @param {JourneyCreateManyArgs} args - Arguments to create many Journeys.
     * @example
     * // Create many Journeys
     * const journey = await prisma.journey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JourneyCreateManyArgs>(args?: SelectSubset<T, JourneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Journey.
     * @param {JourneyDeleteArgs} args - Arguments to delete one Journey.
     * @example
     * // Delete one Journey
     * const Journey = await prisma.journey.delete({
     *   where: {
     *     // ... filter to delete one Journey
     *   }
     * })
     * 
     */
    delete<T extends JourneyDeleteArgs>(args: SelectSubset<T, JourneyDeleteArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Journey.
     * @param {JourneyUpdateArgs} args - Arguments to update one Journey.
     * @example
     * // Update one Journey
     * const journey = await prisma.journey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JourneyUpdateArgs>(args: SelectSubset<T, JourneyUpdateArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Journeys.
     * @param {JourneyDeleteManyArgs} args - Arguments to filter Journeys to delete.
     * @example
     * // Delete a few Journeys
     * const { count } = await prisma.journey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JourneyDeleteManyArgs>(args?: SelectSubset<T, JourneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Journeys
     * const journey = await prisma.journey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JourneyUpdateManyArgs>(args: SelectSubset<T, JourneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Journey.
     * @param {JourneyUpsertArgs} args - Arguments to update or create a Journey.
     * @example
     * // Update or create a Journey
     * const journey = await prisma.journey.upsert({
     *   create: {
     *     // ... data to create a Journey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Journey we want to update
     *   }
     * })
     */
    upsert<T extends JourneyUpsertArgs>(args: SelectSubset<T, JourneyUpsertArgs<ExtArgs>>): Prisma__JourneyClient<$Result.GetResult<Prisma.$JourneyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Journeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyCountArgs} args - Arguments to filter Journeys to count.
     * @example
     * // Count the number of Journeys
     * const count = await prisma.journey.count({
     *   where: {
     *     // ... the filter for the Journeys we want to count
     *   }
     * })
    **/
    count<T extends JourneyCountArgs>(
      args?: Subset<T, JourneyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JourneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JourneyAggregateArgs>(args: Subset<T, JourneyAggregateArgs>): Prisma.PrismaPromise<GetJourneyAggregateType<T>>

    /**
     * Group by Journey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JourneyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JourneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JourneyGroupByArgs['orderBy'] }
        : { orderBy?: JourneyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JourneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJourneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Journey model
   */
  readonly fields: JourneyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Journey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JourneyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patient<T extends Journey$patientArgs<ExtArgs> = {}>(args?: Subset<T, Journey$patientArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Journey model
   */
  interface JourneyFieldRefs {
    readonly id: FieldRef<"Journey", 'String'>
    readonly isActive: FieldRef<"Journey", 'Boolean'>
    readonly firstCallTime: FieldRef<"Journey", 'DateTime'>
    readonly vitalTime: FieldRef<"Journey", 'DateTime'>
    readonly assignDeptTime: FieldRef<"Journey", 'DateTime'>
    readonly secondCallTime: FieldRef<"Journey", 'DateTime'>
    readonly beginTime: FieldRef<"Journey", 'DateTime'>
    readonly endTime: FieldRef<"Journey", 'DateTime'>
    readonly patientId: FieldRef<"Journey", 'String'>
    readonly createdAt: FieldRef<"Journey", 'DateTime'>
    readonly updatedAt: FieldRef<"Journey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Journey findUnique
   */
  export type JourneyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey findUniqueOrThrow
   */
  export type JourneyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey findFirst
   */
  export type JourneyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey findFirstOrThrow
   */
  export type JourneyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journey to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Journeys.
     */
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey findMany
   */
  export type JourneyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter, which Journeys to fetch.
     */
    where?: JourneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Journeys to fetch.
     */
    orderBy?: JourneyOrderByWithRelationInput | JourneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Journeys.
     */
    cursor?: JourneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Journeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Journeys.
     */
    skip?: number
    distinct?: JourneyScalarFieldEnum | JourneyScalarFieldEnum[]
  }

  /**
   * Journey create
   */
  export type JourneyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The data needed to create a Journey.
     */
    data: XOR<JourneyCreateInput, JourneyUncheckedCreateInput>
  }

  /**
   * Journey createMany
   */
  export type JourneyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Journeys.
     */
    data: JourneyCreateManyInput | JourneyCreateManyInput[]
  }

  /**
   * Journey update
   */
  export type JourneyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The data needed to update a Journey.
     */
    data: XOR<JourneyUpdateInput, JourneyUncheckedUpdateInput>
    /**
     * Choose, which Journey to update.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey updateMany
   */
  export type JourneyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Journeys.
     */
    data: XOR<JourneyUpdateManyMutationInput, JourneyUncheckedUpdateManyInput>
    /**
     * Filter which Journeys to update
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to update.
     */
    limit?: number
  }

  /**
   * Journey upsert
   */
  export type JourneyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * The filter to search for the Journey to update in case it exists.
     */
    where: JourneyWhereUniqueInput
    /**
     * In case the Journey found by the `where` argument doesn't exist, create a new Journey with this data.
     */
    create: XOR<JourneyCreateInput, JourneyUncheckedCreateInput>
    /**
     * In case the Journey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JourneyUpdateInput, JourneyUncheckedUpdateInput>
  }

  /**
   * Journey delete
   */
  export type JourneyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
    /**
     * Filter which Journey to delete.
     */
    where: JourneyWhereUniqueInput
  }

  /**
   * Journey deleteMany
   */
  export type JourneyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Journeys to delete
     */
    where?: JourneyWhereInput
    /**
     * Limit how many Journeys to delete.
     */
    limit?: number
  }

  /**
   * Journey.patient
   */
  export type Journey$patientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
  }

  /**
   * Journey without action
   */
  export type JourneyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Journey
     */
    select?: JourneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Journey
     */
    omit?: JourneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JourneyInclude<ExtArgs> | null
  }


  /**
   * Model PatientCount
   */

  export type AggregatePatientCount = {
    _count: PatientCountCountAggregateOutputType | null
    _avg: PatientCountAvgAggregateOutputType | null
    _sum: PatientCountSumAggregateOutputType | null
    _min: PatientCountMinAggregateOutputType | null
    _max: PatientCountMaxAggregateOutputType | null
  }

  export type PatientCountAvgAggregateOutputType = {
    counter: number | null
  }

  export type PatientCountSumAggregateOutputType = {
    counter: number | null
  }

  export type PatientCountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    counter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    counter: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountCountAggregateOutputType = {
    id: number
    userId: number
    counter: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientCountAvgAggregateInputType = {
    counter?: true
  }

  export type PatientCountSumAggregateInputType = {
    counter?: true
  }

  export type PatientCountMinAggregateInputType = {
    id?: true
    userId?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountMaxAggregateInputType = {
    id?: true
    userId?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountCountAggregateInputType = {
    id?: true
    userId?: true
    counter?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientCountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientCount to aggregate.
     */
    where?: PatientCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientCounts to fetch.
     */
    orderBy?: PatientCountOrderByWithRelationInput | PatientCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatientCounts
    **/
    _count?: true | PatientCountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientCountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientCountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientCountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientCountMaxAggregateInputType
  }

  export type GetPatientCountAggregateType<T extends PatientCountAggregateArgs> = {
        [P in keyof T & keyof AggregatePatientCount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatientCount[P]>
      : GetScalarType<T[P], AggregatePatientCount[P]>
  }




  export type PatientCountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientCountWhereInput
    orderBy?: PatientCountOrderByWithAggregationInput | PatientCountOrderByWithAggregationInput[]
    by: PatientCountScalarFieldEnum[] | PatientCountScalarFieldEnum
    having?: PatientCountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountCountAggregateInputType | true
    _avg?: PatientCountAvgAggregateInputType
    _sum?: PatientCountSumAggregateInputType
    _min?: PatientCountMinAggregateInputType
    _max?: PatientCountMaxAggregateInputType
  }

  export type PatientCountGroupByOutputType = {
    id: string
    userId: string | null
    counter: number | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountCountAggregateOutputType | null
    _avg: PatientCountAvgAggregateOutputType | null
    _sum: PatientCountSumAggregateOutputType | null
    _min: PatientCountMinAggregateOutputType | null
    _max: PatientCountMaxAggregateOutputType | null
  }

  type GetPatientCountGroupByPayload<T extends PatientCountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientCountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientCountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientCountGroupByOutputType[P]>
            : GetScalarType<T[P], PatientCountGroupByOutputType[P]>
        }
      >
    >


  export type PatientCountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | PatientCount$userArgs<ExtArgs>
  }, ExtArgs["result"]["patientCount"]>



  export type PatientCountSelectScalar = {
    id?: boolean
    userId?: boolean
    counter?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientCountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "counter" | "createdAt" | "updatedAt", ExtArgs["result"]["patientCount"]>
  export type PatientCountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | PatientCount$userArgs<ExtArgs>
  }

  export type $PatientCountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatientCount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      counter: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patientCount"]>
    composites: {}
  }

  type PatientCountGetPayload<S extends boolean | null | undefined | PatientCountDefaultArgs> = $Result.GetResult<Prisma.$PatientCountPayload, S>

  type PatientCountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientCountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountCountAggregateInputType | true
    }

  export interface PatientCountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatientCount'], meta: { name: 'PatientCount' } }
    /**
     * Find zero or one PatientCount that matches the filter.
     * @param {PatientCountFindUniqueArgs} args - Arguments to find a PatientCount
     * @example
     * // Get one PatientCount
     * const patientCount = await prisma.patientCount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientCountFindUniqueArgs>(args: SelectSubset<T, PatientCountFindUniqueArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatientCount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientCountFindUniqueOrThrowArgs} args - Arguments to find a PatientCount
     * @example
     * // Get one PatientCount
     * const patientCount = await prisma.patientCount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientCountFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientCountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientCount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountFindFirstArgs} args - Arguments to find a PatientCount
     * @example
     * // Get one PatientCount
     * const patientCount = await prisma.patientCount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientCountFindFirstArgs>(args?: SelectSubset<T, PatientCountFindFirstArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatientCount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountFindFirstOrThrowArgs} args - Arguments to find a PatientCount
     * @example
     * // Get one PatientCount
     * const patientCount = await prisma.patientCount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientCountFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientCountFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatientCounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatientCounts
     * const patientCounts = await prisma.patientCount.findMany()
     * 
     * // Get first 10 PatientCounts
     * const patientCounts = await prisma.patientCount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientCountWithIdOnly = await prisma.patientCount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientCountFindManyArgs>(args?: SelectSubset<T, PatientCountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatientCount.
     * @param {PatientCountCreateArgs} args - Arguments to create a PatientCount.
     * @example
     * // Create one PatientCount
     * const PatientCount = await prisma.patientCount.create({
     *   data: {
     *     // ... data to create a PatientCount
     *   }
     * })
     * 
     */
    create<T extends PatientCountCreateArgs>(args: SelectSubset<T, PatientCountCreateArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatientCounts.
     * @param {PatientCountCreateManyArgs} args - Arguments to create many PatientCounts.
     * @example
     * // Create many PatientCounts
     * const patientCount = await prisma.patientCount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCountCreateManyArgs>(args?: SelectSubset<T, PatientCountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PatientCount.
     * @param {PatientCountDeleteArgs} args - Arguments to delete one PatientCount.
     * @example
     * // Delete one PatientCount
     * const PatientCount = await prisma.patientCount.delete({
     *   where: {
     *     // ... filter to delete one PatientCount
     *   }
     * })
     * 
     */
    delete<T extends PatientCountDeleteArgs>(args: SelectSubset<T, PatientCountDeleteArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatientCount.
     * @param {PatientCountUpdateArgs} args - Arguments to update one PatientCount.
     * @example
     * // Update one PatientCount
     * const patientCount = await prisma.patientCount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientCountUpdateArgs>(args: SelectSubset<T, PatientCountUpdateArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatientCounts.
     * @param {PatientCountDeleteManyArgs} args - Arguments to filter PatientCounts to delete.
     * @example
     * // Delete a few PatientCounts
     * const { count } = await prisma.patientCount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientCountDeleteManyArgs>(args?: SelectSubset<T, PatientCountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatientCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatientCounts
     * const patientCount = await prisma.patientCount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientCountUpdateManyArgs>(args: SelectSubset<T, PatientCountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PatientCount.
     * @param {PatientCountUpsertArgs} args - Arguments to update or create a PatientCount.
     * @example
     * // Update or create a PatientCount
     * const patientCount = await prisma.patientCount.upsert({
     *   create: {
     *     // ... data to create a PatientCount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatientCount we want to update
     *   }
     * })
     */
    upsert<T extends PatientCountUpsertArgs>(args: SelectSubset<T, PatientCountUpsertArgs<ExtArgs>>): Prisma__PatientCountClient<$Result.GetResult<Prisma.$PatientCountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatientCounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountCountArgs} args - Arguments to filter PatientCounts to count.
     * @example
     * // Count the number of PatientCounts
     * const count = await prisma.patientCount.count({
     *   where: {
     *     // ... the filter for the PatientCounts we want to count
     *   }
     * })
    **/
    count<T extends PatientCountCountArgs>(
      args?: Subset<T, PatientCountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatientCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatientCountAggregateArgs>(args: Subset<T, PatientCountAggregateArgs>): Prisma.PrismaPromise<GetPatientCountAggregateType<T>>

    /**
     * Group by PatientCount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatientCountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientCountGroupByArgs['orderBy'] }
        : { orderBy?: PatientCountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatientCountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientCountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatientCount model
   */
  readonly fields: PatientCountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatientCount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientCountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends PatientCount$userArgs<ExtArgs> = {}>(args?: Subset<T, PatientCount$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatientCount model
   */
  interface PatientCountFieldRefs {
    readonly id: FieldRef<"PatientCount", 'String'>
    readonly userId: FieldRef<"PatientCount", 'String'>
    readonly counter: FieldRef<"PatientCount", 'Int'>
    readonly createdAt: FieldRef<"PatientCount", 'DateTime'>
    readonly updatedAt: FieldRef<"PatientCount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PatientCount findUnique
   */
  export type PatientCountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * Filter, which PatientCount to fetch.
     */
    where: PatientCountWhereUniqueInput
  }

  /**
   * PatientCount findUniqueOrThrow
   */
  export type PatientCountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * Filter, which PatientCount to fetch.
     */
    where: PatientCountWhereUniqueInput
  }

  /**
   * PatientCount findFirst
   */
  export type PatientCountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * Filter, which PatientCount to fetch.
     */
    where?: PatientCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientCounts to fetch.
     */
    orderBy?: PatientCountOrderByWithRelationInput | PatientCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientCounts.
     */
    cursor?: PatientCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientCounts.
     */
    distinct?: PatientCountScalarFieldEnum | PatientCountScalarFieldEnum[]
  }

  /**
   * PatientCount findFirstOrThrow
   */
  export type PatientCountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * Filter, which PatientCount to fetch.
     */
    where?: PatientCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientCounts to fetch.
     */
    orderBy?: PatientCountOrderByWithRelationInput | PatientCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatientCounts.
     */
    cursor?: PatientCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientCounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatientCounts.
     */
    distinct?: PatientCountScalarFieldEnum | PatientCountScalarFieldEnum[]
  }

  /**
   * PatientCount findMany
   */
  export type PatientCountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * Filter, which PatientCounts to fetch.
     */
    where?: PatientCountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatientCounts to fetch.
     */
    orderBy?: PatientCountOrderByWithRelationInput | PatientCountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatientCounts.
     */
    cursor?: PatientCountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatientCounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatientCounts.
     */
    skip?: number
    distinct?: PatientCountScalarFieldEnum | PatientCountScalarFieldEnum[]
  }

  /**
   * PatientCount create
   */
  export type PatientCountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * The data needed to create a PatientCount.
     */
    data: XOR<PatientCountCreateInput, PatientCountUncheckedCreateInput>
  }

  /**
   * PatientCount createMany
   */
  export type PatientCountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatientCounts.
     */
    data: PatientCountCreateManyInput | PatientCountCreateManyInput[]
  }

  /**
   * PatientCount update
   */
  export type PatientCountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * The data needed to update a PatientCount.
     */
    data: XOR<PatientCountUpdateInput, PatientCountUncheckedUpdateInput>
    /**
     * Choose, which PatientCount to update.
     */
    where: PatientCountWhereUniqueInput
  }

  /**
   * PatientCount updateMany
   */
  export type PatientCountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatientCounts.
     */
    data: XOR<PatientCountUpdateManyMutationInput, PatientCountUncheckedUpdateManyInput>
    /**
     * Filter which PatientCounts to update
     */
    where?: PatientCountWhereInput
    /**
     * Limit how many PatientCounts to update.
     */
    limit?: number
  }

  /**
   * PatientCount upsert
   */
  export type PatientCountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * The filter to search for the PatientCount to update in case it exists.
     */
    where: PatientCountWhereUniqueInput
    /**
     * In case the PatientCount found by the `where` argument doesn't exist, create a new PatientCount with this data.
     */
    create: XOR<PatientCountCreateInput, PatientCountUncheckedCreateInput>
    /**
     * In case the PatientCount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientCountUpdateInput, PatientCountUncheckedUpdateInput>
  }

  /**
   * PatientCount delete
   */
  export type PatientCountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
    /**
     * Filter which PatientCount to delete.
     */
    where: PatientCountWhereUniqueInput
  }

  /**
   * PatientCount deleteMany
   */
  export type PatientCountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatientCounts to delete
     */
    where?: PatientCountWhereInput
    /**
     * Limit how many PatientCounts to delete.
     */
    limit?: number
  }

  /**
   * PatientCount.user
   */
  export type PatientCount$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PatientCount without action
   */
  export type PatientCountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCount
     */
    select?: PatientCountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatientCount
     */
    omit?: PatientCountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientCountInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string | null
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | RefreshToken$userArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RefreshToken$userArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RefreshToken$userArgs<ExtArgs> = {}>(args?: Subset<T, RefreshToken$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken.user
   */
  export type RefreshToken$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BedScalarFieldEnum: {
    id: 'id',
    bedNumber: 'bedNumber',
    bedStatus: 'bedStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BedScalarFieldEnum = (typeof BedScalarFieldEnum)[keyof typeof BedScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    deptcode: 'deptcode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    route: 'route',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const TblDepartmentScalarFieldEnum: {
    tblDepartmentID: 'tblDepartmentID',
    deptcode: 'deptcode',
    deptname: 'deptname'
  };

  export type TblDepartmentScalarFieldEnum = (typeof TblDepartmentScalarFieldEnum)[keyof typeof TblDepartmentScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nationality: 'nationality',
    sex: 'sex',
    idNumber: 'idNumber',
    age: 'age',
    mobileNumber: 'mobileNumber',
    status: 'status',
    cheifComplaint: 'cheifComplaint',
    ticket: 'ticket',
    ticketNumber: 'ticketNumber',
    barcode: 'barcode',
    bloodGroup: 'bloodGroup',
    birthDate: 'birthDate',
    mrnNumber: 'mrnNumber',
    remarks: 'remarks',
    registrationDate: 'registrationDate',
    firstCallTime: 'firstCallTime',
    vitalTime: 'vitalTime',
    assignDeptTime: 'assignDeptTime',
    secondCallTime: 'secondCallTime',
    departmentId: 'departmentId',
    userId: 'userId',
    bedId: 'bedId',
    state: 'state',
    callPatient: 'callPatient',
    beginTime: 'beginTime',
    endTime: 'endTime',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const VitalSignScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    bp: 'bp',
    height: 'height',
    temp: 'temp',
    spo2: 'spo2',
    weight: 'weight',
    hr: 'hr',
    rbs: 'rbs',
    rr: 'rr',
    timeVs: 'timeVs',
    allergies: 'allergies',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VitalSignScalarFieldEnum = (typeof VitalSignScalarFieldEnum)[keyof typeof VitalSignScalarFieldEnum]


  export const JourneyScalarFieldEnum: {
    id: 'id',
    isActive: 'isActive',
    firstCallTime: 'firstCallTime',
    vitalTime: 'vitalTime',
    assignDeptTime: 'assignDeptTime',
    secondCallTime: 'secondCallTime',
    beginTime: 'beginTime',
    endTime: 'endTime',
    patientId: 'patientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JourneyScalarFieldEnum = (typeof JourneyScalarFieldEnum)[keyof typeof JourneyScalarFieldEnum]


  export const PatientCountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    counter: 'counter',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientCountScalarFieldEnum = (typeof PatientCountScalarFieldEnum)[keyof typeof PatientCountScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BedWhereInput = {
    AND?: BedWhereInput | BedWhereInput[]
    OR?: BedWhereInput[]
    NOT?: BedWhereInput | BedWhereInput[]
    id?: StringFilter<"Bed"> | string
    bedNumber?: StringNullableFilter<"Bed"> | string | null
    bedStatus?: StringNullableFilter<"Bed"> | string | null
    createdAt?: DateTimeFilter<"Bed"> | Date | string
    updatedAt?: DateTimeFilter<"Bed"> | Date | string
    patient?: PatientListRelationFilter
  }

  export type BedOrderByWithRelationInput = {
    id?: SortOrder
    bedNumber?: SortOrderInput | SortOrder
    bedStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByRelationAggregateInput
  }

  export type BedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BedWhereInput | BedWhereInput[]
    OR?: BedWhereInput[]
    NOT?: BedWhereInput | BedWhereInput[]
    bedNumber?: StringNullableFilter<"Bed"> | string | null
    bedStatus?: StringNullableFilter<"Bed"> | string | null
    createdAt?: DateTimeFilter<"Bed"> | Date | string
    updatedAt?: DateTimeFilter<"Bed"> | Date | string
    patient?: PatientListRelationFilter
  }, "id">

  export type BedOrderByWithAggregationInput = {
    id?: SortOrder
    bedNumber?: SortOrderInput | SortOrder
    bedStatus?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BedCountOrderByAggregateInput
    _max?: BedMaxOrderByAggregateInput
    _min?: BedMinOrderByAggregateInput
  }

  export type BedScalarWhereWithAggregatesInput = {
    AND?: BedScalarWhereWithAggregatesInput | BedScalarWhereWithAggregatesInput[]
    OR?: BedScalarWhereWithAggregatesInput[]
    NOT?: BedScalarWhereWithAggregatesInput | BedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bed"> | string
    bedNumber?: StringNullableWithAggregatesFilter<"Bed"> | string | null
    bedStatus?: StringNullableWithAggregatesFilter<"Bed"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bed"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bed"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    deptcode?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: RefreshTokenListRelationFilter
    patients?: PatientListRelationFilter
    patientCounts?: PatientCountListRelationFilter
    roles?: RoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    deptcode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    refreshToken?: RefreshTokenOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    patientCounts?: PatientCountOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    deptcode?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    refreshToken?: RefreshTokenListRelationFilter
    patients?: PatientListRelationFilter
    patientCounts?: PatientCountListRelationFilter
    roles?: RoleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    deptcode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    deptcode?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    route?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    route?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    route?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    route?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type tblDepartmentWhereInput = {
    AND?: tblDepartmentWhereInput | tblDepartmentWhereInput[]
    OR?: tblDepartmentWhereInput[]
    NOT?: tblDepartmentWhereInput | tblDepartmentWhereInput[]
    tblDepartmentID?: DecimalFilter<"tblDepartment"> | Decimal | DecimalJsLike | number | string
    deptcode?: StringNullableFilter<"tblDepartment"> | string | null
    deptname?: StringNullableFilter<"tblDepartment"> | string | null
    patients?: PatientListRelationFilter
  }

  export type tblDepartmentOrderByWithRelationInput = {
    tblDepartmentID?: SortOrder
    deptcode?: SortOrderInput | SortOrder
    deptname?: SortOrderInput | SortOrder
    patients?: PatientOrderByRelationAggregateInput
  }

  export type tblDepartmentWhereUniqueInput = Prisma.AtLeast<{
    tblDepartmentID?: Decimal | DecimalJsLike | number | string
    deptcode?: string
    AND?: tblDepartmentWhereInput | tblDepartmentWhereInput[]
    OR?: tblDepartmentWhereInput[]
    NOT?: tblDepartmentWhereInput | tblDepartmentWhereInput[]
    deptname?: StringNullableFilter<"tblDepartment"> | string | null
    patients?: PatientListRelationFilter
  }, "tblDepartmentID" | "deptcode">

  export type tblDepartmentOrderByWithAggregationInput = {
    tblDepartmentID?: SortOrder
    deptcode?: SortOrderInput | SortOrder
    deptname?: SortOrderInput | SortOrder
    _count?: tblDepartmentCountOrderByAggregateInput
    _avg?: tblDepartmentAvgOrderByAggregateInput
    _max?: tblDepartmentMaxOrderByAggregateInput
    _min?: tblDepartmentMinOrderByAggregateInput
    _sum?: tblDepartmentSumOrderByAggregateInput
  }

  export type tblDepartmentScalarWhereWithAggregatesInput = {
    AND?: tblDepartmentScalarWhereWithAggregatesInput | tblDepartmentScalarWhereWithAggregatesInput[]
    OR?: tblDepartmentScalarWhereWithAggregatesInput[]
    NOT?: tblDepartmentScalarWhereWithAggregatesInput | tblDepartmentScalarWhereWithAggregatesInput[]
    tblDepartmentID?: DecimalWithAggregatesFilter<"tblDepartment"> | Decimal | DecimalJsLike | number | string
    deptcode?: StringNullableWithAggregatesFilter<"tblDepartment"> | string | null
    deptname?: StringNullableWithAggregatesFilter<"tblDepartment"> | string | null
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringNullableFilter<"Patient"> | string | null
    nationality?: StringNullableFilter<"Patient"> | string | null
    sex?: StringNullableFilter<"Patient"> | string | null
    idNumber?: StringNullableFilter<"Patient"> | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    mobileNumber?: StringNullableFilter<"Patient"> | string | null
    status?: StringNullableFilter<"Patient"> | string | null
    cheifComplaint?: StringNullableFilter<"Patient"> | string | null
    ticket?: StringNullableFilter<"Patient"> | string | null
    ticketNumber?: IntNullableFilter<"Patient"> | number | null
    barcode?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    mrnNumber?: StringNullableFilter<"Patient"> | string | null
    remarks?: StringNullableFilter<"Patient"> | string | null
    registrationDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    firstCallTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    vitalTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    assignDeptTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    secondCallTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    departmentId?: DecimalNullableFilter<"Patient"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringNullableFilter<"Patient"> | string | null
    bedId?: StringNullableFilter<"Patient"> | string | null
    state?: IntNullableFilter<"Patient"> | number | null
    callPatient?: BoolNullableFilter<"Patient"> | boolean | null
    beginTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    department?: XOR<TblDepartmentNullableScalarRelationFilter, tblDepartmentWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bed?: XOR<BedNullableScalarRelationFilter, BedWhereInput> | null
    vitalSigns?: VitalSignListRelationFilter
    journeys?: JourneyListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    cheifComplaint?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    mrnNumber?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    registrationDate?: SortOrderInput | SortOrder
    firstCallTime?: SortOrderInput | SortOrder
    vitalTime?: SortOrderInput | SortOrder
    assignDeptTime?: SortOrderInput | SortOrder
    secondCallTime?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    bedId?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    callPatient?: SortOrderInput | SortOrder
    beginTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    department?: tblDepartmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    bed?: BedOrderByWithRelationInput
    vitalSigns?: VitalSignOrderByRelationAggregateInput
    journeys?: JourneyOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringNullableFilter<"Patient"> | string | null
    nationality?: StringNullableFilter<"Patient"> | string | null
    sex?: StringNullableFilter<"Patient"> | string | null
    idNumber?: StringNullableFilter<"Patient"> | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    mobileNumber?: StringNullableFilter<"Patient"> | string | null
    status?: StringNullableFilter<"Patient"> | string | null
    cheifComplaint?: StringNullableFilter<"Patient"> | string | null
    ticket?: StringNullableFilter<"Patient"> | string | null
    ticketNumber?: IntNullableFilter<"Patient"> | number | null
    barcode?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    mrnNumber?: StringNullableFilter<"Patient"> | string | null
    remarks?: StringNullableFilter<"Patient"> | string | null
    registrationDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    firstCallTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    vitalTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    assignDeptTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    secondCallTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    departmentId?: DecimalNullableFilter<"Patient"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringNullableFilter<"Patient"> | string | null
    bedId?: StringNullableFilter<"Patient"> | string | null
    state?: IntNullableFilter<"Patient"> | number | null
    callPatient?: BoolNullableFilter<"Patient"> | boolean | null
    beginTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    department?: XOR<TblDepartmentNullableScalarRelationFilter, tblDepartmentWhereInput> | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    bed?: XOR<BedNullableScalarRelationFilter, BedWhereInput> | null
    vitalSigns?: VitalSignListRelationFilter
    journeys?: JourneyListRelationFilter
  }, "id">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    sex?: SortOrderInput | SortOrder
    idNumber?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    mobileNumber?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    cheifComplaint?: SortOrderInput | SortOrder
    ticket?: SortOrderInput | SortOrder
    ticketNumber?: SortOrderInput | SortOrder
    barcode?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    mrnNumber?: SortOrderInput | SortOrder
    remarks?: SortOrderInput | SortOrder
    registrationDate?: SortOrderInput | SortOrder
    firstCallTime?: SortOrderInput | SortOrder
    vitalTime?: SortOrderInput | SortOrder
    assignDeptTime?: SortOrderInput | SortOrder
    secondCallTime?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    bedId?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    callPatient?: SortOrderInput | SortOrder
    beginTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    nationality?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    sex?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    idNumber?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    age?: IntNullableWithAggregatesFilter<"Patient"> | number | null
    mobileNumber?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    status?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    cheifComplaint?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    ticket?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    ticketNumber?: IntNullableWithAggregatesFilter<"Patient"> | number | null
    barcode?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    bloodGroup?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    mrnNumber?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    remarks?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    registrationDate?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    firstCallTime?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    vitalTime?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    assignDeptTime?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    secondCallTime?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    departmentId?: DecimalNullableWithAggregatesFilter<"Patient"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    bedId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    state?: IntNullableWithAggregatesFilter<"Patient"> | number | null
    callPatient?: BoolNullableWithAggregatesFilter<"Patient"> | boolean | null
    beginTime?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type VitalSignWhereInput = {
    AND?: VitalSignWhereInput | VitalSignWhereInput[]
    OR?: VitalSignWhereInput[]
    NOT?: VitalSignWhereInput | VitalSignWhereInput[]
    id?: StringFilter<"VitalSign"> | string
    patientId?: StringNullableFilter<"VitalSign"> | string | null
    bp?: StringNullableFilter<"VitalSign"> | string | null
    height?: StringNullableFilter<"VitalSign"> | string | null
    temp?: StringNullableFilter<"VitalSign"> | string | null
    spo2?: StringNullableFilter<"VitalSign"> | string | null
    weight?: StringNullableFilter<"VitalSign"> | string | null
    hr?: StringNullableFilter<"VitalSign"> | string | null
    rbs?: StringNullableFilter<"VitalSign"> | string | null
    rr?: StringNullableFilter<"VitalSign"> | string | null
    timeVs?: DateTimeNullableFilter<"VitalSign"> | Date | string | null
    allergies?: BoolNullableFilter<"VitalSign"> | boolean | null
    createdAt?: DateTimeFilter<"VitalSign"> | Date | string
    updatedAt?: DateTimeFilter<"VitalSign"> | Date | string
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type VitalSignOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrderInput | SortOrder
    bp?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    temp?: SortOrderInput | SortOrder
    spo2?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    hr?: SortOrderInput | SortOrder
    rbs?: SortOrderInput | SortOrder
    rr?: SortOrderInput | SortOrder
    timeVs?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type VitalSignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VitalSignWhereInput | VitalSignWhereInput[]
    OR?: VitalSignWhereInput[]
    NOT?: VitalSignWhereInput | VitalSignWhereInput[]
    patientId?: StringNullableFilter<"VitalSign"> | string | null
    bp?: StringNullableFilter<"VitalSign"> | string | null
    height?: StringNullableFilter<"VitalSign"> | string | null
    temp?: StringNullableFilter<"VitalSign"> | string | null
    spo2?: StringNullableFilter<"VitalSign"> | string | null
    weight?: StringNullableFilter<"VitalSign"> | string | null
    hr?: StringNullableFilter<"VitalSign"> | string | null
    rbs?: StringNullableFilter<"VitalSign"> | string | null
    rr?: StringNullableFilter<"VitalSign"> | string | null
    timeVs?: DateTimeNullableFilter<"VitalSign"> | Date | string | null
    allergies?: BoolNullableFilter<"VitalSign"> | boolean | null
    createdAt?: DateTimeFilter<"VitalSign"> | Date | string
    updatedAt?: DateTimeFilter<"VitalSign"> | Date | string
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id">

  export type VitalSignOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrderInput | SortOrder
    bp?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    temp?: SortOrderInput | SortOrder
    spo2?: SortOrderInput | SortOrder
    weight?: SortOrderInput | SortOrder
    hr?: SortOrderInput | SortOrder
    rbs?: SortOrderInput | SortOrder
    rr?: SortOrderInput | SortOrder
    timeVs?: SortOrderInput | SortOrder
    allergies?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VitalSignCountOrderByAggregateInput
    _max?: VitalSignMaxOrderByAggregateInput
    _min?: VitalSignMinOrderByAggregateInput
  }

  export type VitalSignScalarWhereWithAggregatesInput = {
    AND?: VitalSignScalarWhereWithAggregatesInput | VitalSignScalarWhereWithAggregatesInput[]
    OR?: VitalSignScalarWhereWithAggregatesInput[]
    NOT?: VitalSignScalarWhereWithAggregatesInput | VitalSignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VitalSign"> | string
    patientId?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    bp?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    height?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    temp?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    spo2?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    weight?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    hr?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    rbs?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    rr?: StringNullableWithAggregatesFilter<"VitalSign"> | string | null
    timeVs?: DateTimeNullableWithAggregatesFilter<"VitalSign"> | Date | string | null
    allergies?: BoolNullableWithAggregatesFilter<"VitalSign"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"VitalSign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VitalSign"> | Date | string
  }

  export type JourneyWhereInput = {
    AND?: JourneyWhereInput | JourneyWhereInput[]
    OR?: JourneyWhereInput[]
    NOT?: JourneyWhereInput | JourneyWhereInput[]
    id?: StringFilter<"Journey"> | string
    isActive?: BoolNullableFilter<"Journey"> | boolean | null
    firstCallTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    vitalTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    assignDeptTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    secondCallTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    beginTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    patientId?: StringNullableFilter<"Journey"> | string | null
    createdAt?: DateTimeFilter<"Journey"> | Date | string
    updatedAt?: DateTimeFilter<"Journey"> | Date | string
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }

  export type JourneyOrderByWithRelationInput = {
    id?: SortOrder
    isActive?: SortOrderInput | SortOrder
    firstCallTime?: SortOrderInput | SortOrder
    vitalTime?: SortOrderInput | SortOrder
    assignDeptTime?: SortOrderInput | SortOrder
    secondCallTime?: SortOrderInput | SortOrder
    beginTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    patientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    patient?: PatientOrderByWithRelationInput
  }

  export type JourneyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JourneyWhereInput | JourneyWhereInput[]
    OR?: JourneyWhereInput[]
    NOT?: JourneyWhereInput | JourneyWhereInput[]
    isActive?: BoolNullableFilter<"Journey"> | boolean | null
    firstCallTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    vitalTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    assignDeptTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    secondCallTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    beginTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    patientId?: StringNullableFilter<"Journey"> | string | null
    createdAt?: DateTimeFilter<"Journey"> | Date | string
    updatedAt?: DateTimeFilter<"Journey"> | Date | string
    patient?: XOR<PatientNullableScalarRelationFilter, PatientWhereInput> | null
  }, "id">

  export type JourneyOrderByWithAggregationInput = {
    id?: SortOrder
    isActive?: SortOrderInput | SortOrder
    firstCallTime?: SortOrderInput | SortOrder
    vitalTime?: SortOrderInput | SortOrder
    assignDeptTime?: SortOrderInput | SortOrder
    secondCallTime?: SortOrderInput | SortOrder
    beginTime?: SortOrderInput | SortOrder
    endTime?: SortOrderInput | SortOrder
    patientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JourneyCountOrderByAggregateInput
    _max?: JourneyMaxOrderByAggregateInput
    _min?: JourneyMinOrderByAggregateInput
  }

  export type JourneyScalarWhereWithAggregatesInput = {
    AND?: JourneyScalarWhereWithAggregatesInput | JourneyScalarWhereWithAggregatesInput[]
    OR?: JourneyScalarWhereWithAggregatesInput[]
    NOT?: JourneyScalarWhereWithAggregatesInput | JourneyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Journey"> | string
    isActive?: BoolNullableWithAggregatesFilter<"Journey"> | boolean | null
    firstCallTime?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    vitalTime?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    assignDeptTime?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    secondCallTime?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    beginTime?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    endTime?: DateTimeNullableWithAggregatesFilter<"Journey"> | Date | string | null
    patientId?: StringNullableWithAggregatesFilter<"Journey"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Journey"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Journey"> | Date | string
  }

  export type PatientCountWhereInput = {
    AND?: PatientCountWhereInput | PatientCountWhereInput[]
    OR?: PatientCountWhereInput[]
    NOT?: PatientCountWhereInput | PatientCountWhereInput[]
    id?: StringFilter<"PatientCount"> | string
    userId?: StringNullableFilter<"PatientCount"> | string | null
    counter?: IntNullableFilter<"PatientCount"> | number | null
    createdAt?: DateTimeFilter<"PatientCount"> | Date | string
    updatedAt?: DateTimeFilter<"PatientCount"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PatientCountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    counter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PatientCountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PatientCountWhereInput | PatientCountWhereInput[]
    OR?: PatientCountWhereInput[]
    NOT?: PatientCountWhereInput | PatientCountWhereInput[]
    userId?: StringNullableFilter<"PatientCount"> | string | null
    counter?: IntNullableFilter<"PatientCount"> | number | null
    createdAt?: DateTimeFilter<"PatientCount"> | Date | string
    updatedAt?: DateTimeFilter<"PatientCount"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PatientCountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    counter?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountCountOrderByAggregateInput
    _avg?: PatientCountAvgOrderByAggregateInput
    _max?: PatientCountMaxOrderByAggregateInput
    _min?: PatientCountMinOrderByAggregateInput
    _sum?: PatientCountSumOrderByAggregateInput
  }

  export type PatientCountScalarWhereWithAggregatesInput = {
    AND?: PatientCountScalarWhereWithAggregatesInput | PatientCountScalarWhereWithAggregatesInput[]
    OR?: PatientCountScalarWhereWithAggregatesInput[]
    NOT?: PatientCountScalarWhereWithAggregatesInput | PatientCountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PatientCount"> | string
    userId?: StringNullableWithAggregatesFilter<"PatientCount"> | string | null
    counter?: IntNullableWithAggregatesFilter<"PatientCount"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PatientCount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PatientCount"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringNullableWithAggregatesFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type BedCreateInput = {
    id?: string
    bedNumber?: string | null
    bedStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedManyWithoutBedInput
  }

  export type BedUncheckedCreateInput = {
    id?: string
    bedNumber?: string | null
    bedStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientUncheckedCreateNestedManyWithoutBedInput
  }

  export type BedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateManyWithoutBedNestedInput
  }

  export type BedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUncheckedUpdateManyWithoutBedNestedInput
  }

  export type BedCreateManyInput = {
    id?: string
    bedNumber?: string | null
    bedStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    patients?: PatientCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    patients?: PatientUncheckedCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    patients?: PatientUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    patients?: PatientUncheckedUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    route?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutRolesInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    route?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutRolesNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    route?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblDepartmentCreateInput = {
    tblDepartmentID: Decimal | DecimalJsLike | number | string
    deptcode?: string | null
    deptname?: string | null
    patients?: PatientCreateNestedManyWithoutDepartmentInput
  }

  export type tblDepartmentUncheckedCreateInput = {
    tblDepartmentID: Decimal | DecimalJsLike | number | string
    deptcode?: string | null
    deptname?: string | null
    patients?: PatientUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type tblDepartmentUpdateInput = {
    tblDepartmentID?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    deptname?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUpdateManyWithoutDepartmentNestedInput
  }

  export type tblDepartmentUncheckedUpdateInput = {
    tblDepartmentID?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    deptname?: NullableStringFieldUpdateOperationsInput | string | null
    patients?: PatientUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type tblDepartmentCreateManyInput = {
    tblDepartmentID: Decimal | DecimalJsLike | number | string
    deptcode?: string | null
    deptname?: string | null
  }

  export type tblDepartmentUpdateManyMutationInput = {
    tblDepartmentID?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    deptname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblDepartmentUncheckedUpdateManyInput = {
    tblDepartmentID?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    deptname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientCreateInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: tblDepartmentCreateNestedOneWithoutPatientsInput
    user?: UserCreateNestedOneWithoutPatientsInput
    bed?: BedCreateNestedOneWithoutPatientInput
    vitalSigns?: VitalSignCreateNestedManyWithoutPatientInput
    journeys?: JourneyCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    userId?: string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedManyWithoutPatientInput
    journeys?: JourneyUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: tblDepartmentUpdateOneWithoutPatientsNestedInput
    user?: UserUpdateOneWithoutPatientsNestedInput
    bed?: BedUpdateOneWithoutPatientNestedInput
    vitalSigns?: VitalSignUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    userId?: string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignCreateInput = {
    id?: string
    bp?: string | null
    height?: string | null
    temp?: string | null
    spo2?: string | null
    weight?: string | null
    hr?: string | null
    rbs?: string | null
    rr?: string | null
    timeVs?: Date | string | null
    allergies?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedOneWithoutVitalSignsInput
  }

  export type VitalSignUncheckedCreateInput = {
    id?: string
    patientId?: string | null
    bp?: string | null
    height?: string | null
    temp?: string | null
    spo2?: string | null
    weight?: string | null
    hr?: string | null
    rbs?: string | null
    rr?: string | null
    timeVs?: Date | string | null
    allergies?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VitalSignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bp?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    temp?: NullableStringFieldUpdateOperationsInput | string | null
    spo2?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    hr?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    rr?: NullableStringFieldUpdateOperationsInput | string | null
    timeVs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutVitalSignsNestedInput
  }

  export type VitalSignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    bp?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    temp?: NullableStringFieldUpdateOperationsInput | string | null
    spo2?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    hr?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    rr?: NullableStringFieldUpdateOperationsInput | string | null
    timeVs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignCreateManyInput = {
    id?: string
    patientId?: string | null
    bp?: string | null
    height?: string | null
    temp?: string | null
    spo2?: string | null
    weight?: string | null
    hr?: string | null
    rbs?: string | null
    rr?: string | null
    timeVs?: Date | string | null
    allergies?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VitalSignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bp?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    temp?: NullableStringFieldUpdateOperationsInput | string | null
    spo2?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    hr?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    rr?: NullableStringFieldUpdateOperationsInput | string | null
    timeVs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    bp?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    temp?: NullableStringFieldUpdateOperationsInput | string | null
    spo2?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    hr?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    rr?: NullableStringFieldUpdateOperationsInput | string | null
    timeVs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyCreateInput = {
    id?: string
    isActive?: boolean | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patient?: PatientCreateNestedOneWithoutJourneysInput
  }

  export type JourneyUncheckedCreateInput = {
    id?: string
    isActive?: boolean | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    patientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JourneyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneWithoutJourneysNestedInput
  }

  export type JourneyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyCreateManyInput = {
    id?: string
    isActive?: boolean | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    patientId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JourneyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    patientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCountCreateInput = {
    id?: string
    counter?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientCountsInput
  }

  export type PatientCountUncheckedCreateInput = {
    id?: string
    userId?: string | null
    counter?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPatientCountsNestedInput
  }

  export type PatientCountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCountCreateManyInput = {
    id?: string
    userId?: string | null
    counter?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    counter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    counter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BedCountOrderByAggregateInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    bedStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BedMaxOrderByAggregateInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    bedStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BedMinOrderByAggregateInput = {
    id?: SortOrder
    bedNumber?: SortOrder
    bedStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type PatientCountListRelationFilter = {
    every?: PatientCountWhereInput
    some?: PatientCountWhereInput
    none?: PatientCountWhereInput
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    deptcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    deptcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    deptcode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    route?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type tblDepartmentCountOrderByAggregateInput = {
    tblDepartmentID?: SortOrder
    deptcode?: SortOrder
    deptname?: SortOrder
  }

  export type tblDepartmentAvgOrderByAggregateInput = {
    tblDepartmentID?: SortOrder
  }

  export type tblDepartmentMaxOrderByAggregateInput = {
    tblDepartmentID?: SortOrder
    deptcode?: SortOrder
    deptname?: SortOrder
  }

  export type tblDepartmentMinOrderByAggregateInput = {
    tblDepartmentID?: SortOrder
    deptcode?: SortOrder
    deptname?: SortOrder
  }

  export type tblDepartmentSumOrderByAggregateInput = {
    tblDepartmentID?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type TblDepartmentNullableScalarRelationFilter = {
    is?: tblDepartmentWhereInput | null
    isNot?: tblDepartmentWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type BedNullableScalarRelationFilter = {
    is?: BedWhereInput | null
    isNot?: BedWhereInput | null
  }

  export type VitalSignListRelationFilter = {
    every?: VitalSignWhereInput
    some?: VitalSignWhereInput
    none?: VitalSignWhereInput
  }

  export type JourneyListRelationFilter = {
    every?: JourneyWhereInput
    some?: JourneyWhereInput
    none?: JourneyWhereInput
  }

  export type VitalSignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JourneyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationality?: SortOrder
    sex?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    mobileNumber?: SortOrder
    status?: SortOrder
    cheifComplaint?: SortOrder
    ticket?: SortOrder
    ticketNumber?: SortOrder
    barcode?: SortOrder
    bloodGroup?: SortOrder
    birthDate?: SortOrder
    mrnNumber?: SortOrder
    remarks?: SortOrder
    registrationDate?: SortOrder
    firstCallTime?: SortOrder
    vitalTime?: SortOrder
    assignDeptTime?: SortOrder
    secondCallTime?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    bedId?: SortOrder
    state?: SortOrder
    callPatient?: SortOrder
    beginTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    age?: SortOrder
    ticketNumber?: SortOrder
    departmentId?: SortOrder
    state?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationality?: SortOrder
    sex?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    mobileNumber?: SortOrder
    status?: SortOrder
    cheifComplaint?: SortOrder
    ticket?: SortOrder
    ticketNumber?: SortOrder
    barcode?: SortOrder
    bloodGroup?: SortOrder
    birthDate?: SortOrder
    mrnNumber?: SortOrder
    remarks?: SortOrder
    registrationDate?: SortOrder
    firstCallTime?: SortOrder
    vitalTime?: SortOrder
    assignDeptTime?: SortOrder
    secondCallTime?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    bedId?: SortOrder
    state?: SortOrder
    callPatient?: SortOrder
    beginTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nationality?: SortOrder
    sex?: SortOrder
    idNumber?: SortOrder
    age?: SortOrder
    mobileNumber?: SortOrder
    status?: SortOrder
    cheifComplaint?: SortOrder
    ticket?: SortOrder
    ticketNumber?: SortOrder
    barcode?: SortOrder
    bloodGroup?: SortOrder
    birthDate?: SortOrder
    mrnNumber?: SortOrder
    remarks?: SortOrder
    registrationDate?: SortOrder
    firstCallTime?: SortOrder
    vitalTime?: SortOrder
    assignDeptTime?: SortOrder
    secondCallTime?: SortOrder
    departmentId?: SortOrder
    userId?: SortOrder
    bedId?: SortOrder
    state?: SortOrder
    callPatient?: SortOrder
    beginTime?: SortOrder
    endTime?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    age?: SortOrder
    ticketNumber?: SortOrder
    departmentId?: SortOrder
    state?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PatientNullableScalarRelationFilter = {
    is?: PatientWhereInput | null
    isNot?: PatientWhereInput | null
  }

  export type VitalSignCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bp?: SortOrder
    height?: SortOrder
    temp?: SortOrder
    spo2?: SortOrder
    weight?: SortOrder
    hr?: SortOrder
    rbs?: SortOrder
    rr?: SortOrder
    timeVs?: SortOrder
    allergies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VitalSignMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bp?: SortOrder
    height?: SortOrder
    temp?: SortOrder
    spo2?: SortOrder
    weight?: SortOrder
    hr?: SortOrder
    rbs?: SortOrder
    rr?: SortOrder
    timeVs?: SortOrder
    allergies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VitalSignMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    bp?: SortOrder
    height?: SortOrder
    temp?: SortOrder
    spo2?: SortOrder
    weight?: SortOrder
    hr?: SortOrder
    rbs?: SortOrder
    rr?: SortOrder
    timeVs?: SortOrder
    allergies?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JourneyCountOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    firstCallTime?: SortOrder
    vitalTime?: SortOrder
    assignDeptTime?: SortOrder
    secondCallTime?: SortOrder
    beginTime?: SortOrder
    endTime?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JourneyMaxOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    firstCallTime?: SortOrder
    vitalTime?: SortOrder
    assignDeptTime?: SortOrder
    secondCallTime?: SortOrder
    beginTime?: SortOrder
    endTime?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JourneyMinOrderByAggregateInput = {
    id?: SortOrder
    isActive?: SortOrder
    firstCallTime?: SortOrder
    vitalTime?: SortOrder
    assignDeptTime?: SortOrder
    secondCallTime?: SortOrder
    beginTime?: SortOrder
    endTime?: SortOrder
    patientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientCountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientCountAvgOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type PatientCountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientCountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    counter?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientCountSumOrderByAggregateInput = {
    counter?: SortOrder
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PatientCreateNestedManyWithoutBedInput = {
    create?: XOR<PatientCreateWithoutBedInput, PatientUncheckedCreateWithoutBedInput> | PatientCreateWithoutBedInput[] | PatientUncheckedCreateWithoutBedInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBedInput | PatientCreateOrConnectWithoutBedInput[]
    createMany?: PatientCreateManyBedInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutBedInput = {
    create?: XOR<PatientCreateWithoutBedInput, PatientUncheckedCreateWithoutBedInput> | PatientCreateWithoutBedInput[] | PatientUncheckedCreateWithoutBedInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBedInput | PatientCreateOrConnectWithoutBedInput[]
    createMany?: PatientCreateManyBedInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PatientUpdateManyWithoutBedNestedInput = {
    create?: XOR<PatientCreateWithoutBedInput, PatientUncheckedCreateWithoutBedInput> | PatientCreateWithoutBedInput[] | PatientUncheckedCreateWithoutBedInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBedInput | PatientCreateOrConnectWithoutBedInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutBedInput | PatientUpsertWithWhereUniqueWithoutBedInput[]
    createMany?: PatientCreateManyBedInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutBedInput | PatientUpdateWithWhereUniqueWithoutBedInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutBedInput | PatientUpdateManyWithWhereWithoutBedInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutBedNestedInput = {
    create?: XOR<PatientCreateWithoutBedInput, PatientUncheckedCreateWithoutBedInput> | PatientCreateWithoutBedInput[] | PatientUncheckedCreateWithoutBedInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutBedInput | PatientCreateOrConnectWithoutBedInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutBedInput | PatientUpsertWithWhereUniqueWithoutBedInput[]
    createMany?: PatientCreateManyBedInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutBedInput | PatientUpdateWithWhereUniqueWithoutBedInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutBedInput | PatientUpdateManyWithWhereWithoutBedInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput> | PatientCreateWithoutUserInput[] | PatientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput | PatientCreateOrConnectWithoutUserInput[]
    createMany?: PatientCreateManyUserInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientCountCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientCountCreateWithoutUserInput, PatientCountUncheckedCreateWithoutUserInput> | PatientCountCreateWithoutUserInput[] | PatientCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCountCreateOrConnectWithoutUserInput | PatientCountCreateOrConnectWithoutUserInput[]
    createMany?: PatientCountCreateManyUserInputEnvelope
    connect?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput> | PatientCreateWithoutUserInput[] | PatientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput | PatientCreateOrConnectWithoutUserInput[]
    createMany?: PatientCreateManyUserInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientCountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PatientCountCreateWithoutUserInput, PatientCountUncheckedCreateWithoutUserInput> | PatientCountCreateWithoutUserInput[] | PatientCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCountCreateOrConnectWithoutUserInput | PatientCountCreateOrConnectWithoutUserInput[]
    createMany?: PatientCountCreateManyUserInputEnvelope
    connect?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput> | PatientCreateWithoutUserInput[] | PatientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput | PatientCreateOrConnectWithoutUserInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutUserInput | PatientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientCreateManyUserInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutUserInput | PatientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutUserInput | PatientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientCountUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientCountCreateWithoutUserInput, PatientCountUncheckedCreateWithoutUserInput> | PatientCountCreateWithoutUserInput[] | PatientCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCountCreateOrConnectWithoutUserInput | PatientCountCreateOrConnectWithoutUserInput[]
    upsert?: PatientCountUpsertWithWhereUniqueWithoutUserInput | PatientCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientCountCreateManyUserInputEnvelope
    set?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    disconnect?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    delete?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    connect?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    update?: PatientCountUpdateWithWhereUniqueWithoutUserInput | PatientCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientCountUpdateManyWithWhereWithoutUserInput | PatientCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientCountScalarWhereInput | PatientCountScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput> | PatientCreateWithoutUserInput[] | PatientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutUserInput | PatientCreateOrConnectWithoutUserInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutUserInput | PatientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientCreateManyUserInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutUserInput | PatientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutUserInput | PatientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientCountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatientCountCreateWithoutUserInput, PatientCountUncheckedCreateWithoutUserInput> | PatientCountCreateWithoutUserInput[] | PatientCountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatientCountCreateOrConnectWithoutUserInput | PatientCountCreateOrConnectWithoutUserInput[]
    upsert?: PatientCountUpsertWithWhereUniqueWithoutUserInput | PatientCountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatientCountCreateManyUserInputEnvelope
    set?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    disconnect?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    delete?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    connect?: PatientCountWhereUniqueInput | PatientCountWhereUniqueInput[]
    update?: PatientCountUpdateWithWhereUniqueWithoutUserInput | PatientCountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatientCountUpdateManyWithWhereWithoutUserInput | PatientCountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatientCountScalarWhereInput | PatientCountScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type PatientCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type PatientUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDepartmentInput | PatientUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDepartmentInput | PatientUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDepartmentInput | PatientUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput> | PatientCreateWithoutDepartmentInput[] | PatientUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDepartmentInput | PatientCreateOrConnectWithoutDepartmentInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDepartmentInput | PatientUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: PatientCreateManyDepartmentInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDepartmentInput | PatientUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDepartmentInput | PatientUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type tblDepartmentCreateNestedOneWithoutPatientsInput = {
    create?: XOR<tblDepartmentCreateWithoutPatientsInput, tblDepartmentUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: tblDepartmentCreateOrConnectWithoutPatientsInput
    connect?: tblDepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPatientsInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    connect?: UserWhereUniqueInput
  }

  export type BedCreateNestedOneWithoutPatientInput = {
    create?: XOR<BedCreateWithoutPatientInput, BedUncheckedCreateWithoutPatientInput>
    connectOrCreate?: BedCreateOrConnectWithoutPatientInput
    connect?: BedWhereUniqueInput
  }

  export type VitalSignCreateNestedManyWithoutPatientInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput> | VitalSignCreateWithoutPatientInput[] | VitalSignUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput | VitalSignCreateOrConnectWithoutPatientInput[]
    createMany?: VitalSignCreateManyPatientInputEnvelope
    connect?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
  }

  export type JourneyCreateNestedManyWithoutPatientInput = {
    create?: XOR<JourneyCreateWithoutPatientInput, JourneyUncheckedCreateWithoutPatientInput> | JourneyCreateWithoutPatientInput[] | JourneyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutPatientInput | JourneyCreateOrConnectWithoutPatientInput[]
    createMany?: JourneyCreateManyPatientInputEnvelope
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
  }

  export type VitalSignUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput> | VitalSignCreateWithoutPatientInput[] | VitalSignUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput | VitalSignCreateOrConnectWithoutPatientInput[]
    createMany?: VitalSignCreateManyPatientInputEnvelope
    connect?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
  }

  export type JourneyUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<JourneyCreateWithoutPatientInput, JourneyUncheckedCreateWithoutPatientInput> | JourneyCreateWithoutPatientInput[] | JourneyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutPatientInput | JourneyCreateOrConnectWithoutPatientInput[]
    createMany?: JourneyCreateManyPatientInputEnvelope
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type tblDepartmentUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<tblDepartmentCreateWithoutPatientsInput, tblDepartmentUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: tblDepartmentCreateOrConnectWithoutPatientsInput
    upsert?: tblDepartmentUpsertWithoutPatientsInput
    disconnect?: tblDepartmentWhereInput | boolean
    delete?: tblDepartmentWhereInput | boolean
    connect?: tblDepartmentWhereUniqueInput
    update?: XOR<XOR<tblDepartmentUpdateToOneWithWhereWithoutPatientsInput, tblDepartmentUpdateWithoutPatientsInput>, tblDepartmentUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientsInput
    upsert?: UserUpsertWithoutPatientsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientsInput, UserUpdateWithoutPatientsInput>, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type BedUpdateOneWithoutPatientNestedInput = {
    create?: XOR<BedCreateWithoutPatientInput, BedUncheckedCreateWithoutPatientInput>
    connectOrCreate?: BedCreateOrConnectWithoutPatientInput
    upsert?: BedUpsertWithoutPatientInput
    disconnect?: BedWhereInput | boolean
    delete?: BedWhereInput | boolean
    connect?: BedWhereUniqueInput
    update?: XOR<XOR<BedUpdateToOneWithWhereWithoutPatientInput, BedUpdateWithoutPatientInput>, BedUncheckedUpdateWithoutPatientInput>
  }

  export type VitalSignUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput> | VitalSignCreateWithoutPatientInput[] | VitalSignUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput | VitalSignCreateOrConnectWithoutPatientInput[]
    upsert?: VitalSignUpsertWithWhereUniqueWithoutPatientInput | VitalSignUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VitalSignCreateManyPatientInputEnvelope
    set?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    disconnect?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    delete?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    connect?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    update?: VitalSignUpdateWithWhereUniqueWithoutPatientInput | VitalSignUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VitalSignUpdateManyWithWhereWithoutPatientInput | VitalSignUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VitalSignScalarWhereInput | VitalSignScalarWhereInput[]
  }

  export type JourneyUpdateManyWithoutPatientNestedInput = {
    create?: XOR<JourneyCreateWithoutPatientInput, JourneyUncheckedCreateWithoutPatientInput> | JourneyCreateWithoutPatientInput[] | JourneyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutPatientInput | JourneyCreateOrConnectWithoutPatientInput[]
    upsert?: JourneyUpsertWithWhereUniqueWithoutPatientInput | JourneyUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: JourneyCreateManyPatientInputEnvelope
    set?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    disconnect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    delete?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    update?: JourneyUpdateWithWhereUniqueWithoutPatientInput | JourneyUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: JourneyUpdateManyWithWhereWithoutPatientInput | JourneyUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type VitalSignUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput> | VitalSignCreateWithoutPatientInput[] | VitalSignUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: VitalSignCreateOrConnectWithoutPatientInput | VitalSignCreateOrConnectWithoutPatientInput[]
    upsert?: VitalSignUpsertWithWhereUniqueWithoutPatientInput | VitalSignUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: VitalSignCreateManyPatientInputEnvelope
    set?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    disconnect?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    delete?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    connect?: VitalSignWhereUniqueInput | VitalSignWhereUniqueInput[]
    update?: VitalSignUpdateWithWhereUniqueWithoutPatientInput | VitalSignUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: VitalSignUpdateManyWithWhereWithoutPatientInput | VitalSignUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: VitalSignScalarWhereInput | VitalSignScalarWhereInput[]
  }

  export type JourneyUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<JourneyCreateWithoutPatientInput, JourneyUncheckedCreateWithoutPatientInput> | JourneyCreateWithoutPatientInput[] | JourneyUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: JourneyCreateOrConnectWithoutPatientInput | JourneyCreateOrConnectWithoutPatientInput[]
    upsert?: JourneyUpsertWithWhereUniqueWithoutPatientInput | JourneyUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: JourneyCreateManyPatientInputEnvelope
    set?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    disconnect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    delete?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    connect?: JourneyWhereUniqueInput | JourneyWhereUniqueInput[]
    update?: JourneyUpdateWithWhereUniqueWithoutPatientInput | JourneyUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: JourneyUpdateManyWithWhereWithoutPatientInput | JourneyUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
  }

  export type PatientCreateNestedOneWithoutVitalSignsInput = {
    create?: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVitalSignsInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneWithoutVitalSignsNestedInput = {
    create?: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutVitalSignsInput
    upsert?: PatientUpsertWithoutVitalSignsInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutVitalSignsInput, PatientUpdateWithoutVitalSignsInput>, PatientUncheckedUpdateWithoutVitalSignsInput>
  }

  export type PatientCreateNestedOneWithoutJourneysInput = {
    create?: XOR<PatientCreateWithoutJourneysInput, PatientUncheckedCreateWithoutJourneysInput>
    connectOrCreate?: PatientCreateOrConnectWithoutJourneysInput
    connect?: PatientWhereUniqueInput
  }

  export type PatientUpdateOneWithoutJourneysNestedInput = {
    create?: XOR<PatientCreateWithoutJourneysInput, PatientUncheckedCreateWithoutJourneysInput>
    connectOrCreate?: PatientCreateOrConnectWithoutJourneysInput
    upsert?: PatientUpsertWithoutJourneysInput
    disconnect?: PatientWhereInput | boolean
    delete?: PatientWhereInput | boolean
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutJourneysInput, PatientUpdateWithoutJourneysInput>, PatientUncheckedUpdateWithoutJourneysInput>
  }

  export type UserCreateNestedOneWithoutPatientCountsInput = {
    create?: XOR<UserCreateWithoutPatientCountsInput, UserUncheckedCreateWithoutPatientCountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientCountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutPatientCountsNestedInput = {
    create?: XOR<UserCreateWithoutPatientCountsInput, UserUncheckedCreateWithoutPatientCountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatientCountsInput
    upsert?: UserUpsertWithoutPatientCountsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatientCountsInput, UserUpdateWithoutPatientCountsInput>, UserUncheckedUpdateWithoutPatientCountsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type PatientCreateWithoutBedInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: tblDepartmentCreateNestedOneWithoutPatientsInput
    user?: UserCreateNestedOneWithoutPatientsInput
    vitalSigns?: VitalSignCreateNestedManyWithoutPatientInput
    journeys?: JourneyCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutBedInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    userId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedManyWithoutPatientInput
    journeys?: JourneyUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutBedInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutBedInput, PatientUncheckedCreateWithoutBedInput>
  }

  export type PatientCreateManyBedInputEnvelope = {
    data: PatientCreateManyBedInput | PatientCreateManyBedInput[]
  }

  export type PatientUpsertWithWhereUniqueWithoutBedInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutBedInput, PatientUncheckedUpdateWithoutBedInput>
    create: XOR<PatientCreateWithoutBedInput, PatientUncheckedCreateWithoutBedInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutBedInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutBedInput, PatientUncheckedUpdateWithoutBedInput>
  }

  export type PatientUpdateManyWithWhereWithoutBedInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutBedInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringNullableFilter<"Patient"> | string | null
    nationality?: StringNullableFilter<"Patient"> | string | null
    sex?: StringNullableFilter<"Patient"> | string | null
    idNumber?: StringNullableFilter<"Patient"> | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    mobileNumber?: StringNullableFilter<"Patient"> | string | null
    status?: StringNullableFilter<"Patient"> | string | null
    cheifComplaint?: StringNullableFilter<"Patient"> | string | null
    ticket?: StringNullableFilter<"Patient"> | string | null
    ticketNumber?: IntNullableFilter<"Patient"> | number | null
    barcode?: StringNullableFilter<"Patient"> | string | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    birthDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    mrnNumber?: StringNullableFilter<"Patient"> | string | null
    remarks?: StringNullableFilter<"Patient"> | string | null
    registrationDate?: DateTimeNullableFilter<"Patient"> | Date | string | null
    firstCallTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    vitalTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    assignDeptTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    secondCallTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    departmentId?: DecimalNullableFilter<"Patient"> | Decimal | DecimalJsLike | number | string | null
    userId?: StringNullableFilter<"Patient"> | string | null
    bedId?: StringNullableFilter<"Patient"> | string | null
    state?: IntNullableFilter<"Patient"> | number | null
    callPatient?: BoolNullableFilter<"Patient"> | boolean | null
    beginTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Patient"> | Date | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
  }

  export type PatientCreateWithoutUserInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: tblDepartmentCreateNestedOneWithoutPatientsInput
    bed?: BedCreateNestedOneWithoutPatientInput
    vitalSigns?: VitalSignCreateNestedManyWithoutPatientInput
    journeys?: JourneyCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedManyWithoutPatientInput
    journeys?: JourneyUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutUserInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type PatientCreateManyUserInputEnvelope = {
    data: PatientCreateManyUserInput | PatientCreateManyUserInput[]
  }

  export type PatientCountCreateWithoutUserInput = {
    id?: string
    counter?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCountUncheckedCreateWithoutUserInput = {
    id?: string
    counter?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCountCreateOrConnectWithoutUserInput = {
    where: PatientCountWhereUniqueInput
    create: XOR<PatientCountCreateWithoutUserInput, PatientCountUncheckedCreateWithoutUserInput>
  }

  export type PatientCountCreateManyUserInputEnvelope = {
    data: PatientCountCreateManyUserInput | PatientCountCreateManyUserInput[]
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    route?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    route?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringNullableFilter<"RefreshToken"> | string | null
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type PatientUpsertWithWhereUniqueWithoutUserInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCreateWithoutUserInput, PatientUncheckedCreateWithoutUserInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutUserInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutUserInput, PatientUncheckedUpdateWithoutUserInput>
  }

  export type PatientUpdateManyWithWhereWithoutUserInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutUserInput>
  }

  export type PatientCountUpsertWithWhereUniqueWithoutUserInput = {
    where: PatientCountWhereUniqueInput
    update: XOR<PatientCountUpdateWithoutUserInput, PatientCountUncheckedUpdateWithoutUserInput>
    create: XOR<PatientCountCreateWithoutUserInput, PatientCountUncheckedCreateWithoutUserInput>
  }

  export type PatientCountUpdateWithWhereUniqueWithoutUserInput = {
    where: PatientCountWhereUniqueInput
    data: XOR<PatientCountUpdateWithoutUserInput, PatientCountUncheckedUpdateWithoutUserInput>
  }

  export type PatientCountUpdateManyWithWhereWithoutUserInput = {
    where: PatientCountScalarWhereInput
    data: XOR<PatientCountUpdateManyMutationInput, PatientCountUncheckedUpdateManyWithoutUserInput>
  }

  export type PatientCountScalarWhereInput = {
    AND?: PatientCountScalarWhereInput | PatientCountScalarWhereInput[]
    OR?: PatientCountScalarWhereInput[]
    NOT?: PatientCountScalarWhereInput | PatientCountScalarWhereInput[]
    id?: StringFilter<"PatientCount"> | string
    userId?: StringNullableFilter<"PatientCount"> | string | null
    counter?: IntNullableFilter<"PatientCount"> | number | null
    createdAt?: DateTimeFilter<"PatientCount"> | Date | string
    updatedAt?: DateTimeFilter<"PatientCount"> | Date | string
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    route?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type UserCreateWithoutRolesInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    patients?: PatientCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    patients?: PatientUncheckedCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    deptcode?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type PatientCreateWithoutDepartmentInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutPatientsInput
    bed?: BedCreateNestedOneWithoutPatientInput
    vitalSigns?: VitalSignCreateNestedManyWithoutPatientInput
    journeys?: JourneyCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    userId?: string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedManyWithoutPatientInput
    journeys?: JourneyUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutDepartmentInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput>
  }

  export type PatientCreateManyDepartmentInputEnvelope = {
    data: PatientCreateManyDepartmentInput | PatientCreateManyDepartmentInput[]
  }

  export type PatientUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutDepartmentInput, PatientUncheckedUpdateWithoutDepartmentInput>
    create: XOR<PatientCreateWithoutDepartmentInput, PatientUncheckedCreateWithoutDepartmentInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutDepartmentInput, PatientUncheckedUpdateWithoutDepartmentInput>
  }

  export type PatientUpdateManyWithWhereWithoutDepartmentInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type tblDepartmentCreateWithoutPatientsInput = {
    tblDepartmentID: Decimal | DecimalJsLike | number | string
    deptcode?: string | null
    deptname?: string | null
  }

  export type tblDepartmentUncheckedCreateWithoutPatientsInput = {
    tblDepartmentID: Decimal | DecimalJsLike | number | string
    deptcode?: string | null
    deptname?: string | null
  }

  export type tblDepartmentCreateOrConnectWithoutPatientsInput = {
    where: tblDepartmentWhereUniqueInput
    create: XOR<tblDepartmentCreateWithoutPatientsInput, tblDepartmentUncheckedCreateWithoutPatientsInput>
  }

  export type UserCreateWithoutPatientsInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPatientsInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutPatientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
  }

  export type BedCreateWithoutPatientInput = {
    id?: string
    bedNumber?: string | null
    bedStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BedUncheckedCreateWithoutPatientInput = {
    id?: string
    bedNumber?: string | null
    bedStatus?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BedCreateOrConnectWithoutPatientInput = {
    where: BedWhereUniqueInput
    create: XOR<BedCreateWithoutPatientInput, BedUncheckedCreateWithoutPatientInput>
  }

  export type VitalSignCreateWithoutPatientInput = {
    id?: string
    bp?: string | null
    height?: string | null
    temp?: string | null
    spo2?: string | null
    weight?: string | null
    hr?: string | null
    rbs?: string | null
    rr?: string | null
    timeVs?: Date | string | null
    allergies?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VitalSignUncheckedCreateWithoutPatientInput = {
    id?: string
    bp?: string | null
    height?: string | null
    temp?: string | null
    spo2?: string | null
    weight?: string | null
    hr?: string | null
    rbs?: string | null
    rr?: string | null
    timeVs?: Date | string | null
    allergies?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VitalSignCreateOrConnectWithoutPatientInput = {
    where: VitalSignWhereUniqueInput
    create: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
  }

  export type VitalSignCreateManyPatientInputEnvelope = {
    data: VitalSignCreateManyPatientInput | VitalSignCreateManyPatientInput[]
  }

  export type JourneyCreateWithoutPatientInput = {
    id?: string
    isActive?: boolean | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JourneyUncheckedCreateWithoutPatientInput = {
    id?: string
    isActive?: boolean | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JourneyCreateOrConnectWithoutPatientInput = {
    where: JourneyWhereUniqueInput
    create: XOR<JourneyCreateWithoutPatientInput, JourneyUncheckedCreateWithoutPatientInput>
  }

  export type JourneyCreateManyPatientInputEnvelope = {
    data: JourneyCreateManyPatientInput | JourneyCreateManyPatientInput[]
  }

  export type tblDepartmentUpsertWithoutPatientsInput = {
    update: XOR<tblDepartmentUpdateWithoutPatientsInput, tblDepartmentUncheckedUpdateWithoutPatientsInput>
    create: XOR<tblDepartmentCreateWithoutPatientsInput, tblDepartmentUncheckedCreateWithoutPatientsInput>
    where?: tblDepartmentWhereInput
  }

  export type tblDepartmentUpdateToOneWithWhereWithoutPatientsInput = {
    where?: tblDepartmentWhereInput
    data: XOR<tblDepartmentUpdateWithoutPatientsInput, tblDepartmentUncheckedUpdateWithoutPatientsInput>
  }

  export type tblDepartmentUpdateWithoutPatientsInput = {
    tblDepartmentID?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    deptname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblDepartmentUncheckedUpdateWithoutPatientsInput = {
    tblDepartmentID?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    deptname?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutPatientsInput = {
    update: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
    create: XOR<UserCreateWithoutPatientsInput, UserUncheckedCreateWithoutPatientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientsInput, UserUncheckedUpdateWithoutPatientsInput>
  }

  export type UserUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type BedUpsertWithoutPatientInput = {
    update: XOR<BedUpdateWithoutPatientInput, BedUncheckedUpdateWithoutPatientInput>
    create: XOR<BedCreateWithoutPatientInput, BedUncheckedCreateWithoutPatientInput>
    where?: BedWhereInput
  }

  export type BedUpdateToOneWithWhereWithoutPatientInput = {
    where?: BedWhereInput
    data: XOR<BedUpdateWithoutPatientInput, BedUncheckedUpdateWithoutPatientInput>
  }

  export type BedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BedUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bedStatus?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignUpsertWithWhereUniqueWithoutPatientInput = {
    where: VitalSignWhereUniqueInput
    update: XOR<VitalSignUpdateWithoutPatientInput, VitalSignUncheckedUpdateWithoutPatientInput>
    create: XOR<VitalSignCreateWithoutPatientInput, VitalSignUncheckedCreateWithoutPatientInput>
  }

  export type VitalSignUpdateWithWhereUniqueWithoutPatientInput = {
    where: VitalSignWhereUniqueInput
    data: XOR<VitalSignUpdateWithoutPatientInput, VitalSignUncheckedUpdateWithoutPatientInput>
  }

  export type VitalSignUpdateManyWithWhereWithoutPatientInput = {
    where: VitalSignScalarWhereInput
    data: XOR<VitalSignUpdateManyMutationInput, VitalSignUncheckedUpdateManyWithoutPatientInput>
  }

  export type VitalSignScalarWhereInput = {
    AND?: VitalSignScalarWhereInput | VitalSignScalarWhereInput[]
    OR?: VitalSignScalarWhereInput[]
    NOT?: VitalSignScalarWhereInput | VitalSignScalarWhereInput[]
    id?: StringFilter<"VitalSign"> | string
    patientId?: StringNullableFilter<"VitalSign"> | string | null
    bp?: StringNullableFilter<"VitalSign"> | string | null
    height?: StringNullableFilter<"VitalSign"> | string | null
    temp?: StringNullableFilter<"VitalSign"> | string | null
    spo2?: StringNullableFilter<"VitalSign"> | string | null
    weight?: StringNullableFilter<"VitalSign"> | string | null
    hr?: StringNullableFilter<"VitalSign"> | string | null
    rbs?: StringNullableFilter<"VitalSign"> | string | null
    rr?: StringNullableFilter<"VitalSign"> | string | null
    timeVs?: DateTimeNullableFilter<"VitalSign"> | Date | string | null
    allergies?: BoolNullableFilter<"VitalSign"> | boolean | null
    createdAt?: DateTimeFilter<"VitalSign"> | Date | string
    updatedAt?: DateTimeFilter<"VitalSign"> | Date | string
  }

  export type JourneyUpsertWithWhereUniqueWithoutPatientInput = {
    where: JourneyWhereUniqueInput
    update: XOR<JourneyUpdateWithoutPatientInput, JourneyUncheckedUpdateWithoutPatientInput>
    create: XOR<JourneyCreateWithoutPatientInput, JourneyUncheckedCreateWithoutPatientInput>
  }

  export type JourneyUpdateWithWhereUniqueWithoutPatientInput = {
    where: JourneyWhereUniqueInput
    data: XOR<JourneyUpdateWithoutPatientInput, JourneyUncheckedUpdateWithoutPatientInput>
  }

  export type JourneyUpdateManyWithWhereWithoutPatientInput = {
    where: JourneyScalarWhereInput
    data: XOR<JourneyUpdateManyMutationInput, JourneyUncheckedUpdateManyWithoutPatientInput>
  }

  export type JourneyScalarWhereInput = {
    AND?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
    OR?: JourneyScalarWhereInput[]
    NOT?: JourneyScalarWhereInput | JourneyScalarWhereInput[]
    id?: StringFilter<"Journey"> | string
    isActive?: BoolNullableFilter<"Journey"> | boolean | null
    firstCallTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    vitalTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    assignDeptTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    secondCallTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    beginTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    endTime?: DateTimeNullableFilter<"Journey"> | Date | string | null
    patientId?: StringNullableFilter<"Journey"> | string | null
    createdAt?: DateTimeFilter<"Journey"> | Date | string
    updatedAt?: DateTimeFilter<"Journey"> | Date | string
  }

  export type PatientCreateWithoutVitalSignsInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: tblDepartmentCreateNestedOneWithoutPatientsInput
    user?: UserCreateNestedOneWithoutPatientsInput
    bed?: BedCreateNestedOneWithoutPatientInput
    journeys?: JourneyCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutVitalSignsInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    userId?: string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    journeys?: JourneyUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutVitalSignsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
  }

  export type PatientUpsertWithoutVitalSignsInput = {
    update: XOR<PatientUpdateWithoutVitalSignsInput, PatientUncheckedUpdateWithoutVitalSignsInput>
    create: XOR<PatientCreateWithoutVitalSignsInput, PatientUncheckedCreateWithoutVitalSignsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutVitalSignsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutVitalSignsInput, PatientUncheckedUpdateWithoutVitalSignsInput>
  }

  export type PatientUpdateWithoutVitalSignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: tblDepartmentUpdateOneWithoutPatientsNestedInput
    user?: UserUpdateOneWithoutPatientsNestedInput
    bed?: BedUpdateOneWithoutPatientNestedInput
    journeys?: JourneyUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutVitalSignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    journeys?: JourneyUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateWithoutJourneysInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    department?: tblDepartmentCreateNestedOneWithoutPatientsInput
    user?: UserCreateNestedOneWithoutPatientsInput
    bed?: BedCreateNestedOneWithoutPatientInput
    vitalSigns?: VitalSignCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutJourneysInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    userId?: string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vitalSigns?: VitalSignUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutJourneysInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutJourneysInput, PatientUncheckedCreateWithoutJourneysInput>
  }

  export type PatientUpsertWithoutJourneysInput = {
    update: XOR<PatientUpdateWithoutJourneysInput, PatientUncheckedUpdateWithoutJourneysInput>
    create: XOR<PatientCreateWithoutJourneysInput, PatientUncheckedCreateWithoutJourneysInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutJourneysInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutJourneysInput, PatientUncheckedUpdateWithoutJourneysInput>
  }

  export type PatientUpdateWithoutJourneysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: tblDepartmentUpdateOneWithoutPatientsNestedInput
    user?: UserUpdateOneWithoutPatientsNestedInput
    bed?: BedUpdateOneWithoutPatientNestedInput
    vitalSigns?: VitalSignUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutJourneysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type UserCreateWithoutPatientCountsInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedManyWithoutUserInput
    patients?: PatientCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPatientCountsInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    patients?: PatientUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutPatientCountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatientCountsInput, UserUncheckedCreateWithoutPatientCountsInput>
  }

  export type UserUpsertWithoutPatientCountsInput = {
    update: XOR<UserUpdateWithoutPatientCountsInput, UserUncheckedUpdateWithoutPatientCountsInput>
    create: XOR<UserCreateWithoutPatientCountsInput, UserUncheckedCreateWithoutPatientCountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatientCountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatientCountsInput, UserUncheckedUpdateWithoutPatientCountsInput>
  }

  export type UserUpdateWithoutPatientCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    patients?: PatientUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPatientCountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    patients?: PatientUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateWithoutRefreshTokenInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountCreateNestedManyWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    email?: string | null
    password?: string | null
    name?: string | null
    deptcode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    patients?: PatientUncheckedCreateNestedManyWithoutUserInput
    patientCounts?: PatientCountUncheckedCreateNestedManyWithoutUserInput
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUpdateManyWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patients?: PatientUncheckedUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUncheckedUpdateManyWithoutUserNestedInput
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type PatientCreateManyBedInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    userId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateWithoutBedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: tblDepartmentUpdateOneWithoutPatientsNestedInput
    user?: UserUpdateOneWithoutPatientsNestedInput
    vitalSigns?: VitalSignUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutBedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutBedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PatientCreateManyUserInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    departmentId?: Decimal | DecimalJsLike | number | string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCountCreateManyUserInput = {
    id?: string
    counter?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    department?: tblDepartmentUpdateOneWithoutPatientsNestedInput
    bed?: BedUpdateOneWithoutPatientNestedInput
    vitalSigns?: VitalSignUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departmentId?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    counter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    counter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    counter?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    route?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateManyWithoutUserNestedInput
    patients?: PatientUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    patients?: PatientUncheckedUpdateManyWithoutUserNestedInput
    patientCounts?: PatientCountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    deptcode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateManyDepartmentInput = {
    id?: string
    name?: string | null
    nationality?: string | null
    sex?: string | null
    idNumber?: string | null
    age?: number | null
    mobileNumber?: string | null
    status?: string | null
    cheifComplaint?: string | null
    ticket?: string | null
    ticketNumber?: number | null
    barcode?: string | null
    bloodGroup?: string | null
    birthDate?: Date | string | null
    mrnNumber?: string | null
    remarks?: string | null
    registrationDate?: Date | string | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    userId?: string | null
    bedId?: string | null
    state?: number | null
    callPatient?: boolean | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutPatientsNestedInput
    bed?: BedUpdateOneWithoutPatientNestedInput
    vitalSigns?: VitalSignUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vitalSigns?: VitalSignUncheckedUpdateManyWithoutPatientNestedInput
    journeys?: JourneyUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: NullableStringFieldUpdateOperationsInput | string | null
    idNumber?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    mobileNumber?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    cheifComplaint?: NullableStringFieldUpdateOperationsInput | string | null
    ticket?: NullableStringFieldUpdateOperationsInput | string | null
    ticketNumber?: NullableIntFieldUpdateOperationsInput | number | null
    barcode?: NullableStringFieldUpdateOperationsInput | string | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mrnNumber?: NullableStringFieldUpdateOperationsInput | string | null
    remarks?: NullableStringFieldUpdateOperationsInput | string | null
    registrationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bedId?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableIntFieldUpdateOperationsInput | number | null
    callPatient?: NullableBoolFieldUpdateOperationsInput | boolean | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignCreateManyPatientInput = {
    id?: string
    bp?: string | null
    height?: string | null
    temp?: string | null
    spo2?: string | null
    weight?: string | null
    hr?: string | null
    rbs?: string | null
    rr?: string | null
    timeVs?: Date | string | null
    allergies?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JourneyCreateManyPatientInput = {
    id?: string
    isActive?: boolean | null
    firstCallTime?: Date | string | null
    vitalTime?: Date | string | null
    assignDeptTime?: Date | string | null
    secondCallTime?: Date | string | null
    beginTime?: Date | string | null
    endTime?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VitalSignUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bp?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    temp?: NullableStringFieldUpdateOperationsInput | string | null
    spo2?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    hr?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    rr?: NullableStringFieldUpdateOperationsInput | string | null
    timeVs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bp?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    temp?: NullableStringFieldUpdateOperationsInput | string | null
    spo2?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    hr?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    rr?: NullableStringFieldUpdateOperationsInput | string | null
    timeVs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VitalSignUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    bp?: NullableStringFieldUpdateOperationsInput | string | null
    height?: NullableStringFieldUpdateOperationsInput | string | null
    temp?: NullableStringFieldUpdateOperationsInput | string | null
    spo2?: NullableStringFieldUpdateOperationsInput | string | null
    weight?: NullableStringFieldUpdateOperationsInput | string | null
    hr?: NullableStringFieldUpdateOperationsInput | string | null
    rbs?: NullableStringFieldUpdateOperationsInput | string | null
    rr?: NullableStringFieldUpdateOperationsInput | string | null
    timeVs?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    allergies?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JourneyUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: NullableBoolFieldUpdateOperationsInput | boolean | null
    firstCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vitalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignDeptTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    secondCallTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    beginTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}