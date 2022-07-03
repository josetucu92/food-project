import { DataTypes } from 'sequelize';


export const DietFactory = (sequelize) =>{
    return sequelize.define('Diet', {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }, {
        timestamps: false,
    })
};


