import { DataSource } from "typeorm"

const {
    POSTGRES_USER = 'postgres',
    POSTGRES_PASSWORD = '123',
    POSTGRES_DATABASE = 'app_db'
} = process.env

export default new DataSource({
    type: 'postgres',
    host: 'database',
    port: 5432,
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: POSTGRES_DATABASE,
    synchronize: true,
    logging: false,
    entities: [`${__dirname}/models/**/*.model.ts`],
    subscribers: [],
    migrations: [],
    // migrations: [`${__dirname}/migrations/**/*.migration.ts`],
})