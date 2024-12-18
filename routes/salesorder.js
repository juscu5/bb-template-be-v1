const { authMiddleware } = require("./auth");
// const { getSales, getIjSales, postSale, postSaleWDocnum, putSale, deleteSale } = require("../services/sales");
const {
  getSalesOrder,
  getIjSalesOrder,
  postSaleOrder,
  postSalesOrderDocnum,
  putSaleOrder,
  deleteSaleOrder,
} = require("../services/salesorder");

const router = require("express").Router();

const initSalesOrder = () => {
  router.get("/", authMiddleware, async (req, res) => {
    try {
      const salesOrderFind = await getIjSalesOrder();
      res
        .status(200)
        .json({ status: "Success", code: 200, payload: salesOrderFind });
    } catch (e) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: e.message } });
    }
  });

  router.post("/", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postSaleOrder(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Document code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Transaction successfully added" },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.post("/docnum", authMiddleware, async (req, res) => {
    try {
      const { body } = req;
      const uploaded = await postSalesOrderDocnum(body);

      if (!uploaded) {
        res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Document code already use." },
        });
      } else {
        res.status(200).json({
          status: "Success",
          code: 200,
          payload: { msg: "Transaction successfully added" },
        });
      }
    } catch (error) {
      res
        .status(500)
        .json({ status: "Error", code: 500, payload: { msg: error.message } });
    }
  });

  router.put("/:docnum", authMiddleware, async (req, res) => {
    try {
      const { docnum } = req.params;
      const { body } = req;
      const updated = await putSaleOrder(docnum, body);

      if (!updated) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Transaction not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Transaction was successfully updated." },
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Failure", code: 500, payload: { msg: error } });
    }
  });

  router.delete("/:docnum", authMiddleware, async (req, res) => {
    try {
      const { docnum } = req.params;

      const deleted = await deleteSaleOrder(docnum);

      if (!deleted) {
        return res.status(404).json({
          status: "Failure",
          code: 404,
          payload: { msg: "Transaction not found." },
        });
      }

      res.status(200).json({
        status: "Success",
        code: 200,
        payload: { msg: "Transaction was successfully deleted." },
      });
    } catch (error) {
      res
        .status(500)
        .json({ status: "Failure", code: 500, payload: { msg: error } });
    }
  });

  return router;
};

module.exports = {
  initSalesOrder,
};
