const {connect} = require("mongoose");
const {DB_URI} = require("../utils/config");

const conectarDB = async()=>{
    connect(DB_URI);
};

conectarDB()
.then(res=>{
    console.info("Database connected");
})
.catch((err)=>{
    console.error("Error! Database was not connected");
});