require("./src/db/mongo");
const {PORT} = require("./src/utils/config");
const express = require("express"); 
const session = require("express-session");
const infractorsRouter = require("./src/routes/infractorsRouter");
const sessionRouter = require("./src/routes/sessionDataRouter");
const { handlerError, handlerNotFound } = require("./src/utils/middleware");

const app = express();
app.use(express.json()); 
app.use(session({
    secret:"secretKey",
    resave:false,
    saveUninitialized:true
}))

app.use("/api/sessionData/", sessionRouter);
app.use("/api/infractores/", infractorsRouter);

app.use(handlerNotFound); 
app.use(handlerError); 

app.listen(PORT, ()=>{ 
    console.log("Hi! I'm up at http://localhost:" + PORT);
});