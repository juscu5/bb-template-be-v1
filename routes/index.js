const { initDepartments } = require("./department");
const { initEmployees } = require("./employee");
const { initMenus } = require("./menus");
const { initUsers } = require("./user");
const { initUserActivityLog } = require("./useractivitylog");
const { initSystemParameter } = require("./systemparameter");
const { initUserMenus } = require("./user_menus");
const { initCustomer } = require("./customer");
const { initSales } = require("./sales");
const { initItem } = require("./itemfile");
const { initItemClass } = require("./itemclassfile");
const { initSalesOrder } = require("./salesorder");
const router = require("express").Router();

const initRoutes = (app) => {
  router.use("/users", initUsers());
  router.use("/menus", initMenus());
  router.use("/usermenus", initUserMenus());
  router.use("/departments", initDepartments());
  router.use("/employees", initEmployees());
  router.use("/useractivitylog", initUserActivityLog());
  router.use("/syspar", initSystemParameter());
  router.use("/customer", initCustomer());
  router.use("/sales", initSales());
  router.use("/salesorder", initSalesOrder());
  router.use("/item", initItem());
  router.use("/itemclass", initItemClass());

  app.use("/api", router);
};
module.exports = {
  initRoutes,
};
