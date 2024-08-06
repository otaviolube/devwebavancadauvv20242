import express, { Request, Response } from 'express';

const app = express();

app.get('/', function(req: Request, res: Response){
    res.send("Olá pessoal")
});

app.listen(3000, function(){
    console.log("Servidor rodando na porta 3000")
});