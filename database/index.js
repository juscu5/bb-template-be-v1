const { Sequelize } = require("sequelize");

const environment = process.argv[2] || "dev";
let config;
switch (environment) {
    case 'dev':
      config = require('../config/config.dev.json');
      break;
    case 'prod':
      config = require('../config/config.prod.json');
      break;
    case 'staging':
      config = require('../config/config.staging.json');
      break;
    default:
      throw new Error(`Unknown environment: ${environment}`);
  }

const sequelize = new Sequelize(
  config.db.database,
  config.db.username,
  config.db.password,
  {
    dialect: config.db.dialect,
    define: {
      underscored: true,
      freezeTableName: true,
      timestamps: false,
    },
    timezone: "+08:00",
    logging: false
});

const modelDefiners = [
    require('../models/users'),
    require('../models/menus'),
    require('../models/user_menus'),
    require('../models/departmentfile'),
    require('../models/employeefile'),
    require('../models/customerfile'),
    require('../models/salesfile1'),
    require('../models/salesfile2'),
    require('../models/useractivitylogfile'),
    require('../models/syspar'),
    require('../models/itemclassfile'),
    require('../models/itemfile'),
    require('../models/salesorderfile1'),
    require('../models/salesorderfile2')
]


for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

module.exports = sequelize;