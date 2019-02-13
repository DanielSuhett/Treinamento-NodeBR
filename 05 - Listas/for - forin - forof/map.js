const service = require('./service')

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = []
    for (let index = 0; index <= this.length - 1; index++) {
        const resultado = callback(this[index], index)
        novoArrayMapeado.push(resultado)
    }
    return novoArrayMapeado;
}

async function main() {
    try {
        const result = await service.obterPessoas('a')

        /*result.results.forEach(item => {
            names.push(item.name)
        });*/

        const names = result.results.meuMap(function (pessoa, index) {
            return `[${index}]${pessoa.name}`
        })

        console.log(names)
    } catch (error) {
        console.log('Nem cheguei a varrer a API bro')
    }
}

main()