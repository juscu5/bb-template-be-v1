const { authMiddleware } = require("./auth");
const {models} = require('../database');
const { getEmployee, postEmployee, putEmployee, deleteEmployee } = require('../services/employee')

const router = require("express").Router()


const initEmployees = () => {

    router.get("/", authMiddleware, async(req, res) => {

        try{
            const employeeFind = await getEmployee();
            res.status(200).json({status: 'Success', code: 200, payload: employeeFind});
        }
        catch (e){
            res.status(500).json({status: 'Error', code: 500, payload: {msg: e.message}});
        }
        
    })

    router.post("/", authMiddleware, async(req,res) => {

        try {

            console.log("pumasok here");
            
            const {body} = req;
            const uploaded = await postEmployee(body);

            res.status(200).json({status: 'Success', code: 200, payload: uploaded});

        } catch (error) {
            res.status(500).json({status: 'Error', code: 500, payload: {msg: error.message}});
        }
        

    });

    router.put("/:recid", authMiddleware, async(req,res) => {
        try{
            console.log("Baguhin motto");

            const {recid} = req.params
            const {body} = req;
            const updated = await putEmployee(recid,body);

            if (!updated) {
                return res.status(404).json({ status: 'Failure', code: 404, payload: { msg: "Employee not found." } });
            }

            res.status(200).json({status: 'Success', code: 200, payload: {msg: "Employee was successfully updated."}});
        } catch (error) {
            res.status(500).json({ status: 'Failure', code: 500, payload: { msg: "An error occurred while updating the employee." } });
            console.log(error)
        }
    })

    router.delete("/:recid", authMiddleware, async (req, res) => {
        try {
            console.log("delete motto")
            const { recid } = req.params;
    
            const deleted = await deleteEmployee(recid);
    
            if (!deleted) {
                return res.status(404).json({ status: 'Failure', code: 404, payload: { msg: "Employee not found." } });
            }
    
            res.status(200).json({ status: 'Success', code: 200, payload: { msg: "Employee was successfully deleted." } });
        } catch (error) {
            res.status(500).json({ status: 'Failure', code: 500, payload: { msg: "An error occurred while deleting the employee." } });
            console.log(error);
        }
    });

    return router;

}


module.exports= {
    initEmployees
}