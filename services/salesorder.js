const { models } = require("../database");
const { putSysPar } = require("./systemparameter");
const { getSysparIncNum, getSysparDocnum } = require("../utilities/syspar");

const getSalesOrder = async () => {
  try {
    const getSalesOrder = await models.salesorderfile1.findAll();
    return getSalesOrder;
  } catch (error) {
    throw error;
  }
};

const getIjSalesOrder = async () => {
  try {
    const sal = await models.salesorderfile1.findAll({});
    const inJoin = await Promise.all(
      sal.map(async (sal) => {
        const cust = await models.customerfile.findOne({
          where: { cuscde: sal.cuscde },
        });

        return {
          ...sal.dataValues,
          cusdsc: cust ? cust.cusdsc : null,
          cusadd1: cust ? cust.cusadd1 : null,
          cusadd2: cust ? cust.cusadd2 : null,
        };
      })
    );

    return inJoin;
  } catch (error) {
    throw error;
  }
};

const postSaleOrder = async (body) => {
  try {
    const validate = await models.salesorderfile1.findOne({
      attributes: ["docnum"],
      where: { docnum: body.docnum },
    });

    if (validate) {
      return false;
    } else {
      const returnObj = { ...body };
      await models.salesorderfile1.create(returnObj);
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const postSalesOrderDocnum = async (body) => {
  try {
    let sodocnum;
    let validate = true;

    // Prevent Error for Duplicating SysparDocnum
    while (validate) {
      sodocnum = await getSysparIncNum("sodocnum");
      validate = await models.salesorderfile1.findOne({
        attributes: ["docnum"],
        where: { docnum: sodocnum },
      });
    }

    const docnum = { docnum: sodocnum };
    const updateSysPar = { sodocnum: sodocnum };
    const returnObj = { ...body, ...docnum };
    const postSal = await models.salesorderfile1.create(returnObj);

    if (postSal) {
      await putSysPar(1, updateSysPar);
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const putSaleOrder = async (docnum, body) => {
  try {
    if (!docnum) {
      throw new Error("Document No is required");
    }

    const updatedRows = await models.salesorderfile1.update(body, {
      where: { docnum: docnum },
    });

    if (updatedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const deleteSaleOrder = async (docnum) => {
  try {
    if (!docnum) {
      throw new Error("Document No is required");
    }

    const deletedRows = await models.salesorderfile1.destroy({
      where: { docnum: docnum },
    });

    if (deletedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSalesOrder,
  getIjSalesOrder,
  postSaleOrder,
  postSalesOrderDocnum,
  putSaleOrder,
  deleteSaleOrder,
};
