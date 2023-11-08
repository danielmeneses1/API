import express from "express";
import  conectNaDatabase from "./config/dbConect.js";
import Livro from "./models/Livro.js";

const conexao = await conectNaDatabase();

conexao.on("error", (error) => {
    console.error("Erro de conexão",error)
});

conexao.once("open", () => {
    console.log("Conectado com sucesso")
})

const app = express();
app.use(express.json());

app.get("/livros",async (req, res) => {
    const ListaLivros = await Livro.find({});
    res.status(200).json(ListaLivros);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).json(req.body);
})

app.get("/livros/:id", (req, res) => {
    const id = req.params.id;
    const livro = livros.find(livro => livro.id == id);
    if (livro) {
        res.status(200).json(livro);
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
    }
})

app.put("/livros/:id", (req, res) => {
    const id = req.params.id;
    const livro = livros.find(livro => livro.id == id);
    if (livro) {
        livro.titulo = req.body.titulo;
        res.status(200).json(livro);
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
    }
})

app.delete("/livros/:id", (req, res) => {
    const id = req.params.id;
    const index = livros.findIndex(livro => livro.id == id);
    if (index >= 0) {
        livros.splice(index, 1);
        res.status(200).json({ mensagem: "Livro excluído com sucesso" });
    } else {
        res.status(404).json({ mensagem: "Livro não encontrado" });
    }
})


export default app;

