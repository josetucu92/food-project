import dotenv from 'dotenv';

dotenv.config()

export const port = process.env.PORT || 3001;
export const dbUser = process.env.DB_USER
export const dbName = process.env.DB_NAME
export const dbPort = process.env.DB_PORT
export const dbHost = process.env.DB_HOST
export const dbPassword = process.env.DB_PASSWORD
export const apiKey = process.env.API_KEY
export const apiKey2 = process.env.API_KEY2
export const apiKey3 = process.env.API_KEY3
export const apiKey4 = process.env.API_KEY4
export const apiKey5 = process.env.API_KEY5
export const amountRecipes = 16;