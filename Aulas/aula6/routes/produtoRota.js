import { Router } from 'express';
import { 
    getProdutoById, 
    listProduto, 
    criarProduto, 
    updateProduto, 
    deleteProduto 
} from '../controllers/produtoControle.js';

const rota = Router();

rota.get('/produtos', listProduto);
rota.get('/produtos/:id', getProdutoById);
rota.post('/produtos', criarProduto);
rota.put('/produtos/:id', updateProduto);
rota.delete('/produtos/:id', deleteProduto); // Aqui corrigido

export default rota;
