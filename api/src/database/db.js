import Sequelize from 'sequelize';
import { dbHost, dbName, dbPassword, dbUser } from '../utils/index.js';
import  { RecipeFactory } from './models/Recipe.js';
import  { DietFactory } from './models/Diet.js';

// Create a new sequelize instance with our local postgres database information.
export const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    logging: false,
    native: false
});

//inject sequelize connection to my models.-
export const Recipe = RecipeFactory(sequelize)
export const Diet = DietFactory(sequelize)

// associations.-
Recipe.belongsToMany(Diet, { through: 'Recipe_Diet' }, { timestamps : false });
Diet.belongsToMany(Recipe, { through: 'Recipe_Diet' }, { timestamps : false });
