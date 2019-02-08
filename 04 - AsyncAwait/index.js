function obterUsuario() {
    //problema = reject, deu bom = resolve.

    return new Promise(function resolvePromise(resolve, reject){
        setTimeout(function() {
            return resolve({
                id: 1,
                nome: 'Fenrir, the worgen ',
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
        }, 1000);
    })
}

function obterEndereco(idUsuario) {
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                rua: 'Salão de Asgard',
                numero: 9
            })
        }, 1000);
    })
}

main()
async function main() {
    try {
        const usuario = await obterUsuario()
        const resultado = await Promise.all([
            obterTelefone(usuario.id),
            obterEndereco(usuario.id) 
        ])

        console.log(`
        Nome: ${usuario.nome}
        Data de Nascimento: ${usuario.DataNascimento}
        Telefone: (${resultado[0].ddd}) ${resultado[0].celular}
        Endereço: ${resultado[1].rua}, ${resultado[1].numero}
        `)

    } catch (error) {
        console.error('\nDeu ruim bro.\n\n', error)
    }
} 


