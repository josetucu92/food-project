import dotenv from 'dotenv';

dotenv.config()

export const port = process.env.PORT || 3001;
export const dbUser = process.env.DB_USER
export const dbName = process.env.DB_NAME
export const dbPort = process.env.DB_PORT
export const dbHost = process.env.DB_HOST
export const dbPassword = process.env.DB_PASSWORD