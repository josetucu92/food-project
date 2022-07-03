import { DataTypes } from 'sequelize';


export const RecipeFactory = (sequelize) => {
    return sequelize.define('Recipe', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
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
        },
        createdInDb: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        }
    },{
        timestamps: false,
    })
};