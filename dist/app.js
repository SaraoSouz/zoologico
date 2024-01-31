"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 3000;
const server = (0, express_1.default)();
server.use(express_1.default.json());
server.use((0, cors_1.default)());
server.get('/', (req, res) => {
    console.log('recebi sua requisição');
    res.send({ mensagem: 'ola mundo' });
});
server.listen(port, () => {
    console.log(`Servidor está escutando no endereço http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map