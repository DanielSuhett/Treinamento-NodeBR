/* 
Obter um usuario
Obter o numero de telefone de um usuario a partir do seu id
obter o endereço do usuario pelo IDDD
kkkk*/


function obterUsuario() {
    //problema = reject, deu bom = resolve.

    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                id: 1,
                nome: 'Odin de Ymir',
                DataNascimento: new Date().toUTCString()
            })
        }, 1000)
    })
}


function obterTelefone(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                celular: '3776-9591',
                ddd: 21
            })
        }, 2000);
    })
}

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'Salão de Asgard',
                numero: 9
            })
        }, 2000);
    })
}

const usuarioPromise = obterUsuario()
// para manipular sucesso usamos a função .then
//para manipular erros, usamos o .catch

usuarioPromise
    .then(function (usuario) {
        return obterTelefone(usuario.id)
        .then(function resolverTelefone(result){
            return {
                usuario: {
                    nome: usuario.nome,
                    id: usuario.id,
                    DataNascimento: usuario.DataNascimento
                },
                telefone: result,
            }
        })
    })
    .then(function (resultado) {
        return obterEndereco(resultado.usuario.id)
            .then(function resolveEndereco(result) {
                return {
                    usuario: resultado.usuario,
                    telefone: resultado.telefone,
                    endereco: result
                }
            })
        })
    .then(function (resultado){
        console.log(`
        Nome: ${resultado.usuario.nome}
        Data de Nascimento: ${resultado.usuario.DataNascimento}
        Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
        Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.celular}
        `)
    })
    .catch(function (error){
        console.error('Deu ruim!', error)
    })





