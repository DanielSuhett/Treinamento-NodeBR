const { obterPessoas} = require('./service')

async function main() {
    let random = Math.random().toString(36).substr(2, 5).slice(1, 2);
    try {
        const { results } = await obterPessoas(`${random}`)
        for (let i = 0; i < results.length; i++) {
            
            console.log(`
            ----------------------------------------
            Nome: ${results[i].name}
            Gênero: ${results[i].gender}
            Cor dos olhos: ${results[i].eye_color} 
            ----------------------------------------`)
        }
    }
    catch (error) {
        console.error('nem chegou a tentar bro.', error)
    }
}

main()