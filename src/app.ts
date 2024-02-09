import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';
import { Habitat } from './model/habitats';
import { Zoologico } from './model/zoologico';
import { Atracao } from './model/Atracao';


const port = 3000;
const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    let ave: Ave = new Ave('Papagaio', 30, 'Masculino', 10);
    let reptil: Reptil = new Reptil('Cobra', 50, 'Feminino', 'cicloides');
    let mamifero: Mamifero = new Mamifero('picher', 'Cachorro',  20, 'Masculino');
    res.json([ave, reptil, mamifero]);
    //console.log('recebi sua requisição');
  //  res.send({mensagem: 'ola mundo'})
})

server.post('/ave', (req, res) => {
    const {nome, idade, genero, envergadura} = req.body;
    let ave: Ave = new Ave(nome, idade, genero, envergadura);
    res.json(["a nova ave do zoologico é:", ave]);

});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})

const habitat = new Habitat('Selva', []);

server.post('/habitat', (req, res)=>{
    const { nome, animais } = req.body;
    const habitat = new Habitat(nome, animais);
    console.log(habitat);
    res.status(200).json('Habitat criado')
})

server.post('/atracao', (req, res)=>{
    const { nome, habitat } = req.body;
    const atracao = new Atracao(nome, habitat);
    console.log(atracao);
    res.status(200).json('Atração criado')
})

server.post('/zoologico', (req, res)=>{
    const { nome, atracao } = req.body;
    const zoo = new Zoologico(nome, atracao);
    console.log(zoo);
    res.status(200).json('Zoologico criado')
})