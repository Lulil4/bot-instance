//traer data
const infracciones = require("./src/db/infracciones.json");
const express = require("express"); 
const cors = require("cors"); 
const session = require("express-session");

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(session({
    secret:"secretKey",
    resave:false,
    saveUninitialized:true
}))

app.get("/contextoInicial", (req, res) => {
    res.json({botName: "Lola", botId: req.sessionID, author:"Lucía Morel"})
});

app.post("/obtenerInfracciones/$userDNI", (req, res, next) => {
  ///  console.log(req.body)
   // res.send("$ works ")
    //remove dots, validate only numbers with specific range
   // let {userDNI} = req.body;
   // let infractor = infracciones.some((infraction)=> {return infraction.dni == userDNI});
   // res.json({userDNI: userDNI, infractor : infractor});
});


app.listen(3000, ()=>{ 
    console.log("Hi! I'm up at http://localhost:3000" );
});