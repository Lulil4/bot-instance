const handlerNotFound = (req, res) => {
    res.status(404).json(
        {
            error: "Ruta inexistente"
        }
    );
};

const handlerError = (error, req, res, next)=>{ 
    if(error.name === "CastError"){
        res.status(400).send({error:"DNI con caracteres inválidos"});
    }
    next(error);
};

module.exports = {
    handlerNotFound, 
    handlerError
};


