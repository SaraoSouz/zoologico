import express from 'express';
import cors from 'cors';
import { Ave } from './model/Ave';
import { Reptil } from './model/Reptil';
import { Mamifero } from './model/Mamifero';


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
    let ave: Ave = new Ave('nome', idade, 'genero', envergadura);
    res.json(ave);

});

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})