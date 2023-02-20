// Определение модели продукта
const Sequelize = require('sequelize')
const { sequelize } = require('./index')

const ProductModel = sequelize.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  description: {
    type: Sequelize.TEXT,
    defaultValue: 'Default description',
  },
  stock: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  discount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  category: {
    type: Sequelize.STRING,
  },
  picture: {
    type: Sequelize.TEXT,
    defaultValue: 'https://cdns.iconmonstr.com/wp-content/releases/preview/2019/240/iconmonstr-product-3.png',
  },

})

module.exports = { ProductModel }
