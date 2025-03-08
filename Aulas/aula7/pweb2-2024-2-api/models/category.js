'use strict';
const { DataTypes } = require("sequelize");
const { FOREIGNKEYS } = require("sequelize/lib/query-types");

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        descrition:{
            type: DataTypes.STRING,
            allowNull: false, 
        }
    })

    Category.associate = (models) => {
        Category.hasMany(models.Product, {FOREIGNKEYS: 'categoryId'});
    }
    return Category;

}