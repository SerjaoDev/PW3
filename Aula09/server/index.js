import 'dotenv/config' 
import express from 'express'
import cors from 'cors'

async function setup(request, response) {
    
}

async function loadUsers(request, response) {
    response.status(200).json({mensagem: 'Load feito com sucesso'})
}

async function addUser(request, response) {
    response.status(200).json({mensagem: 'Add feito com sucesso'})    
}

async function editUser(request, response) {
    response.status(200).json({mensagem: 'Edit feito com sucesso'})
}

async function removeUser(request, response) {
    response.status(200).json({mensagem: 'Remove feito com sucesso'})    
}

const app = express();
app.use(express.json());
app.use(cors());

app.get('api/users', loadUsers);
app.post('api/users', addUser);
app.put('api/users/:id', editUser);
app.delete('api/users/:id', removeUser);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Rodando em http://localhost:${port}`));