import Sequelize from 'sequelize';
import { dbHost, dbName, dbPassword, dbUser } from '../utils/config/index.js';
import  { RecipeFactory } from './models/Recipe.js';
import  { TypeFactory } from './models/Type.js';

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'postgres',
    logging: false,
    native: false
});

//inject sequelize connection to my models.-
const Recipe = RecipeFactory(sequelize)
const Type = TypeFactory(sequelize)

// associations.-
Recipe.belongsToMany(Type, { through: 'Recipe_Type' });
Type.belongsToMany(Recipe, { through: 'Recipe_Type' });


export {
    sequelize,
    Recipe,
    Type};