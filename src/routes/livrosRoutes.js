import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/:id", LivroController.listarlivroPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.deletarLivroPorId)

export default router;