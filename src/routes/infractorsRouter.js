const infractorsRouter = require("express").Router();
const Infraction = require("../models/Infraction");

infractorsRouter.post("/obtenerInfracciones/:userDNI", async (req, res, next) => {
    let isInfractor = false;
    let {userDNI} = req.params;
    userDNI = userDNI.replaceAll(/[.]/g, "");

    try{
        const infraction = await Infraction.findOne({dni: userDNI});
        if (infraction != null){
            isInfractor = true;
        }
        res.json({userDNI: userDNI, infractor : isInfractor});
    }
    catch(err){
        next(err);
    }
});

module.exports = infractorsRouter;