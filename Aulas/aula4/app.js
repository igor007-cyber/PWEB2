const express = require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('testando a API')
})

app.listen(3000,() => {
    console.log('servidor rodando na porta 3000')   
})

const usuarios = [
    {id: 1, name: 'igor'},
    {id: 2, name: 'ian'},
]

app.get('/usuarios', (req, res) => {
    res.send(usuarios)
})

app.post('/usuarios', (req, res) => {
    const {name} = req.body;

    if(!name) {
        return res.status(404).json({erro: 'Usuarios é obrigatorio'})
    }
    //req.params.name = name;
    const NewUsuarios = {id:usuarios.length + 1, name:name}
    usuarios.push(NewUsuarios)
    return res.status(201).json(NewUsuarios)
})

app.put('usuarios/:id', (req, res))