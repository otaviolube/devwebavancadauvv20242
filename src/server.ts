import express, { Request, Response } from "express";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.get("/", function (req: Request, res: Response) {
  res.send("Olá pessoal, tudo bem? Quero fazer mais uma mudança");
});

app.get("/users", async function (req: Request, res: Response) {
  const users = await prisma.user.findMany();

  res.json(users);
});

app.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
