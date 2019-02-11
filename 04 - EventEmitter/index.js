const EventEmitter = require('events')

class MeuEmissor extends EventEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'

meuEmissor.on(nomeEvento, function(click) {
    console.log('\nUsuario final clicou', click)
})

const stdin = process.openStdin()
stdin.addListener('data', function (value) {
    console.log(`\nVocê digitou: ${value.toString()}\n`)
})



/*meuEmissor.emit(nomeEvento, 'no banner titulos')
meuEmissor.emit(nomeEvento, 'no mais detalhes')


let count = 0

setInterval(() => {
    meuEmissor.emit(nomeEvento, (count++) + ' vezes')
}, 1000); */