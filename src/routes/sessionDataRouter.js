const sessionRouter = require("express").Router();

sessionRouter.get("/contextoInicial", (req, res) => {
    res.json({botName: "Lola", botId: req.sessionID, author:"Lucía Morel"})
});

module.exports = sessionRouter;