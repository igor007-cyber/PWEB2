import express from 'express';
import rota from './routes/produtoRota.js';

const app = express();

app.use(express.json());
app.use('/api', rota);

export default app;