//Sequlize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SenecaDB', 'sezgunb', '7vBGc1MFAWia', {
  host: 'ep-fragrant-sunset-65383109.us-east-2.aws.neon.tech',
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

async function connect() {
    try{
      await sequelize.authenticate();
      console.log("Connection has been established");
    }
    catch(err){
      console.log("Problem with connection: ", err);
    }
}

async function sync() {
    await sequelize.sync({alter:true})
}


//USER
const User = sequelize.define('User', {
    firstName: Sequelize.TEXT,
    lastName: Sequelize.TEXT,
});

//ORDER
const Order = sequelize.define('Order', {
    orderDesc: Sequelize.TEXT,
});

//PRODCUT
const Product = sequelize.define('Product', {
   name: Sequelize.TEXT,
   isbn: Sequelize.TEXT,
   price: Sequelize.DECIMAL,
   description: Sequelize.TEXT,
});

module.exports = {
    connect,
    sync,
    models: {
        User,
        Product,
        Order,
    }
}