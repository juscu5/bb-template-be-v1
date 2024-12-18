const { models, Sequelize } = require("../database"); // Ensure Sequelize is imported
const { putSysPar } = require("./systemparameter");
const { getSysparIncNum, getSysparDocnum } = require("../utilities/syspar");
const { Op } = require('sequelize');

const getSales = async () => {
  try {
    const getSale = await models.salesfile1.findAll();
    return getSale;
  } catch (error) {
    throw error;
  }
};

const getIjSales = async () => {
  try {
    const sal = await models.salesfile1.findAll({});
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

const getSalesItem = async (docnum) => {
  try {
    const getSaleItm = await models.salesfile2.findAll({
      where: { docnum: docnum },
      order: [["recid", "ASC"]],
    });
    console.log("docnum:", docnum)

    return getSaleItm;
  } catch (error) {
    throw error;
  }
}

const getSalesFilteredByDate = async (fromDate, toDate) => {
  try {
    const whereConditions = {};

    if (fromDate && toDate) {
      whereConditions.trndte = {
        [Sequelize.Op.between]: [fromDate, toDate],
      };
    }

    const filteredSales = await models.salesfile1.findAll({
      where: whereConditions,
      order: [["trndte", "ASC"]],
    });
    return filteredSales;
  } catch (error) {
    throw error;
  }
};

const getSalesFilteredByDocNo = async (docNumFrom, docNumTo) => {
  try {
    const whereConditions = {};

    if (docNumFrom && docNumTo) {
      whereConditions.docnum = {
        [Sequelize.Op.between]: [docNumFrom, docNumTo],
      };
    }

    const filteredSales = await models.salesfile1.findAll({
      where: whereConditions,
      order: [["docnum", "ASC"]],
    });
    return filteredSales;
  } catch (error) {
    throw error;
  }
};

const postSale = async (salesData, salesItem) => {
  try {
    const validate = await models.salesfile1.findOne({
      attributes: ["docnum"],
      where: { docnum: salesData.docnum },
    });

    if (validate) {
      return false;
    } else {
      await models.salesfile1.create({ ...salesData });
      await models.salesfile2.bulkCreate(salesItem);
      return true;
    }
  } catch (error) {
    throw error;
  }
};

const postSaleWDocnum = async (salesData, salesItem) => {
  try {
    let saldocnum;
    let validate = true;

    // Prevent Error for Duplicating SysparDocnum
    while (validate) {
      saldocnum = await getSysparIncNum("saldocnum");
      validate = await models.salesfile1.findOne({
        attributes: ["docnum"],
        where: { docnum: saldocnum },
      });
    }

    const docnum = { docnum: saldocnum };
    const updateSysPar = { saldocnum: saldocnum };
    const postSalesDataItem = await models.salesfile1.create({ ...salesData, ...docnum });
    await models.salesfile2.bulkCreate(salesItem);

    if (postSalesDataItem) {
      await putSysPar(1, updateSysPar);
    }

    return true;
  } catch (error) {
    throw error;
  }
};

const putSale = async (docnum, salesData, salesItems, removedItem) => {
  try {
    if (!docnum) {
      throw new Error("Document No is required");
    }

    // Update salesfile1
    const updatedRows = await models.salesfile1.update(salesData, {
      where: { docnum: docnum },
    });
    

    // Update salesfile2 for each item in salesItems
    const newItems = [];
    for (const item of salesItems) {
      const { itmcde, ...updateFields } = item;

      const existingRecord = await models.salesfile2.findOne({
        where: { itmcde: item.itmcde }
      });

      if (existingRecord) {
        await models.salesfile2.update(updateFields, {
          where: { itmcde: item.itmcde }
        });
      } else {
        newItems.push(item);
      }
    }
    await models.salesfile2.bulkCreate(newItems);
    

    if (removedItem && removedItem.length > 0) {
      const itmcdeList = removedItem.map(item => item.itmcde);

      await models.salesfile2.destroy({
        where: {
          itmcde: {
            [Op.in]: itmcdeList
          }
        }
      });
    }

    if (updatedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating sales data:', error);
    throw error;
  }
};

const deleteSale = async (docnum) => {
  try {
    if (!docnum) {
      throw new Error("Document No is required");
    }

    const deletedRows = await models.salesfile1.destroy({
      where: { docnum: docnum },
    });

    await models.salesfile2.destroy({
      where: { docnum: docnum },
    })

    if (deletedRows === 0) {
      return false;
    }

    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getSales,
  getIjSales,
  getSalesItem,
  getSalesFilteredByDate,
  getSalesFilteredByDocNo,
  postSale,
  postSaleWDocnum,
  putSale,
  deleteSale,
};
