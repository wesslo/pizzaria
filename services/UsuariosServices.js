const usuarios = require('../databases/usuarios.json')
function listar(){
    // Seu código aqui
    const formatUsuario = u => {
        return{
            id: u.id,
            nome: u.nome,
            email: u.email
        }
    }

    
    let usuariosFormatados = usuarios.map(formatUsuario)
    console.table(usuariosFormatados)
} 

function listarNomes(){
    const restornaNo = usuarios => usuarios.nome;
    
    
    console.table(usuarios.map(restornaNo));
}

function salvar(arrayDeUsuarios){
    // Seu código aqui
    const fs = require('fs');
    fs.writeFileSync('./databases/usuarios.json', JSON.stringify(arrayDeUsuarios, null, 4));
}

function cadastrar(objeto){
// Seu código aqui
}

function detalhar(idUsuario){
// Seu código aqui

const detalharUsuario = usuarios => {
    return{
        nome: usuarios.nome,
        email: usuarios.email,
        formaDePagameto: usuarios.FormaDePagamento
    }
    // const formasDePagamento = usuarios => {
    //     return{
    //         formaDePagameto: usuarios.formasDePagamento
    //     }
}
let usuarioDetalhado = usuarios.map(detalharUsuario);
let formaDePagameto = usuarios.map(formasDePagamento)
console.table(usuarioDetalhado)
console.table(formaDePagameto)
}

function remover(idDoUsuarioParaRemover){
    // Seu código aqui
}

function alterar(novosDados, idUsuario){
    // Seu código aqui
}

function addEndereco(novoEndereco, idUsuario){
    // Seu código aqui
}

function removerEndereco(posicaoDoEndereco, idUsuario){
// Seu código aqui
}

function alterarEndereco(posicaoDoEndereco, novoEndereco, idUsuario){
// Seu código aqui        
}

function addFormaDePagamento(novaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function removerFormaDePagamento(posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

function alterarFormaDePagamento(novaFormaDePagamento, posicaoDaFormaDePagamento, idUsuario){
    // Seu código aqui
}

const UsuariosServices = {
    cadastrar,
    listar,
    detalhar,
    remover,
    alterar,
    addEndereco,
    removerEndereco,
    alteraEndereco: alterarEndereco,
    addFormaDePagamento,
    removerFormaDePagamento,
    alterarFormaDePagamento,
    salvar,
    listarNomes
}

module.exports = UsuariosServices;