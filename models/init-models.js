var DataTypes = require("sequelize").DataTypes;
var _customerfile = require("./customerfile");
var _departmentfile = require("./departmentfile");
var _employeefile = require("./employeefile");
var _menus = require("./menus");
var _salesfile1 = require("./salesfile1");
var _salesfile2 = require("./salesfile2");
var _syspar = require("./syspar");
var _user_menus = require("./user_menus");
var _useractivitylogfile = require("./useractivitylogfile");
var _users = require("./users");
var _itemclassfile = require("./itemclassfile");
var _itemfile = require("./itemfile");
var _salesorderfile1 = require("./salesorderfile1");
var _salesorderfile2 = require("./salesorderfile2");

function initModels(sequelize) {
  var departmentfile = _departmentfile(sequelize, DataTypes);
  var employeefile = _employeefile(sequelize, DataTypes);
  var customerfile = _customerfile(sequelize, DataTypes);
  var salesfile1 = _salesfile1(sequelize, DataTypes);
  var salesfile2 = _salesfile2(sequelize, DataTypes);
  var menus = _menus(sequelize, DataTypes);
  var syspar = _syspar(sequelize, DataTypes);
  var user_menus = _user_menus(sequelize, DataTypes);
  var useractivitylogfile = _useractivitylogfile(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var itemclassfile = _itemclassfile(sequelize, DataTypes);
  var itemfile = _itemfile(sequelize, DataTypes);
  var salesorderfile1 = _salesorderfile1(sequelize, DataTypes);
  var salesorderfile2 = _salesorderfile2(sequelize, DataTypes);


  return {
    departmentfile,
    employeefile,
    customerfile,
    salesfile1,
    salesfile2,
    menus,
    syspar,
    user_menus,
    useractivitylogfile,
    users,
    itemclassfile,
    itemfile,
    salesorderfile1,
    salesorderfile2
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
