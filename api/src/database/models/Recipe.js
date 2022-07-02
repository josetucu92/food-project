import { DataTypes } from 'sequelize';


export const RecipeFactory = function(sequelize){
    return sequelize.define('Recipe', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        healthScore: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        steps: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        timestamps: false,
    })
};