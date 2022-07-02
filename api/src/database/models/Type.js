import { DataTypes } from 'sequelize';


export const TypeFactory = function(sequelize){
    return sequelize.define('Type', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
    })
};


