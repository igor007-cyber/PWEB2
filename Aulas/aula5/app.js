const express = require('express');
const app = express();
app.use(express.json());

let usuarios = [
    {id: 1, name: 'ian'},
    {id: 2, name: 'joge'},
]

app.get('/', (req, res) => {
    res.send('Welcome to the world!')
})

app.get('/usuarios', (req, res) => {
    res.json(usuarios); //aqui ele ta mandando em formato em json
})

app.post('/usuarios', (req, res) => {
    const {name} = req.body; // vai enviar no corpo da requisição
    if(!name){
        return res.status(400).json({erro: 'o nome do usuario é obrigatorio'});
    } 

    const novoUsuario = {
        id: usuarios.length + 1,
        name: name
    }

    usuarios.push(novoUsuario);
    return res.status(201).json(novoUsuario)
});


app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const usuarioIndex = usuarios.findIndex(usuarios => usuarios.id === parseInt(id) );
    if(usuarioIndex === -1){
        return res.status(404).json({ error: 'usuario not found' });
    }

    if(!name){
        return res.status(400).json({ error: 'nome do usuario é obrigatorio' });
    }

    usuarios[usuarioIndex].name = name;
    return res.status(200).json(usuarios[usuarioIndex])
})


app.delete('/usuarios/:id', (req, res) => {
    const {id} = req.params
    const usuarioIndex = usuarios.findIndex(usuarios => usuarios.id === parseInt(id) );
    
    if(usuarioIndex === -1){
        return res.status(404).json({ error: 'usuario not found' });
    }

    usuarios.splice(usuarioIndex,1)
    res.status(204).json({ messagem: 'usuario deletado'})
})


app.listen(3000,() => {
    console.log('A porta 3000 esta ouvindo')
})