const { authMiddleware } = require("./auth");
const {models} = require('../database');
const { putSysPar } = require('../services/systemparameter');

const router = require("express").Router()


const initSystemParameter = () => {


    router.get("/", authMiddleware, async(req,res) =>{

        const syspar = await models.syspar.findAll({});
        res.status(200).json({status: 'Success', code: 200, payload: syspar});

    });

    router.put("/", authMiddleware, async(req,res) => {
        try{

            const recid = 1;
            const {body} = req;
            const updated = await putSysPar(recid,body);

            if (!updated) {
                return res.status(404).json({ status: 'Failure', code: 404, payload: { msg: "Param not found on Table." } });
            }

            res.status(200).json({status: 'Success', code: 200, payload: {msg: "Syspar was successfully updated."}});
        } catch (error) {
            res.status(500).json({ status: 'Failure', code: 500, payload: { msg: "An error occurred while updating the Syspar." } });
            console.log(error)
        }
    })

    return router;
}


module.exports= {
    initSystemParameter
}