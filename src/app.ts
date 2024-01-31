import express from 'express';
import cors from 'cors';


const port = 3000;
const server = express();


server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
    console.log('recebi sua requisição');
    res.send({mensagem: 'ola mundo'})
})

server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
})