"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Ave_1 = require("./src/model/Ave");
const Reptil_1 = require("./src/model/Reptil");
const Mamifero_1 = require("./src/model/Mamifero");
const Habitats_1 = require("./src/model/Habitats");
const Zoologico_1 = require("./src/model/Zoologico");
const Atracao_1 = require("./src/model/Atracao");
const port = 3000;
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.get('/', (req, res) => {
    let ave = new Ave_1.Ave('Papagaio', 30, 'Masculino', 10);
    let reptil = new Reptil_1.Reptil('Cobra', 50, 'Feminino', 'cicloides');
    let mamifero = new Mamifero_1.Mamifero('picher', 'Cachorro', 20, 'Masculino');
    res.json([ave, reptil, mamifero]);
    //console.log('recebi sua requisição');
    //  res.send({mensagem: 'ola mundo'})
});
server.post('/ave', (req, res) => {
    const { nome, idade, genero, envergadura } = req.body;
    let ave = new Ave_1.Ave(nome, idade, genero, envergadura);
    res.json(["a nova ave do zoologico é:", ave]);
});
server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
});
const habitat = new Habitats_1.Habitat('Selva', []);
server.post('/habitat', (req, res) => {
    const { nome, animais } = req.body;
    const habitat = new Habitats_1.Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado');
});
server.post('/atracao', (req, res) => {
    const { nome, habitat } = req.body;
    const atracao = new Atracao_1.Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criado');
});
server.post('/zoologico', (req, res) => {
    const { nome, atracao } = req.body;
    const zoo = new Zoologico_1.Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoologico criado');
});
//# sourceMappingURL=app.js.map