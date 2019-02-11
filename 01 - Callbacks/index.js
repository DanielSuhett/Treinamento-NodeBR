/* 
Obter um usuario
Obter o numero de telefone de um usuario a partir do seu id
obter o endereço do usuario pelo ID
*/


function obterUsuario(callback) {
    setTimeout(function() {
        return callback(null, {
            id: 1,
            nome: 'Ricardo',
            dataNascimento: new Date()
        }
    )}, 1000)
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            celular: '37769591',
            ddd: 21
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'Rua dos Bobos',
            numero: 0
        })
    }, 2000);
}

function resolverUsuario(erro, usuario) {
    console.log('usuario: ', usuario)
}

obterUsuario(function resolverUsuario(error, usuario) {
    if(error){
        console.error("DEU RUIM EM USUARIO", error);
        return;
    }
    
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.error("DEU RUIM EM TELEFONE", error);
            return;
        }


    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
        if(error2){
            console.error("DEU RUIM EM TELEFONE", error);
            return;
        }

            console.log(`
            Nome: ${usuario.nome}
            Endereco: ${endereco.rua},${endereco.numero}
            Telefone: ${telefone.ddd}${telefone.celular}
            `)

        })
    })
})

//console.log('telefone: ', telefone)
