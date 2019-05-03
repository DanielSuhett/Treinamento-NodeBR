const assert = require('assert')
const Postgres = require('./../db/strategies/postgres');
const Context = require('../db/strategies/base/ContextStrategy')


const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: 'Gaviao Negro',
    poder: 'flexas'
}

const MOCK_HEROI_ATUALIZAR = {
    nome: 'Thor',
    poder: 'Mjonir'
}


describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async function () {
        await context.connected()
        await context.delete()
        await context.create(MOCK_HEROI_ATUALIZAR)

    })
    it('PostgresSQL Connection', async function () {
        const resultado = await context.isConnected();
        assert.equal(resultado, true)
    })
    it('Cadastrar', async function () {
        const result = await context.create(MOCK_HEROI_CADASTRAR)
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('Listar', async function () {
        const [result] = await context.read({
            nome: MOCK_HEROI_CADASTRAR.nome
        })
        delete result.id
        assert.deepEqual(result, MOCK_HEROI_CADASTRAR)
    })
    it('atualizar', async function () {

        const [itemAtualizar] = await context.read({
            nome: MOCK_HEROI_ATUALIZAR.nome
        })

        const novoItem = {
            ...MOCK_HEROI_ATUALIZAR,
            nome: 'Deus do Trovão'
        }
        const [result] = await context.update(itemAtualizar.id, novoItem)
        const [itemAtualizado] = await context.read({
            id: itemAtualizar.id
        })
        assert.deepEqual(result, 1)
        assert.deepEqual(itemAtualizado.nome, novoItem.nome)

    })
    it('Remover', async function () {
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepEqual(result, 1)
    })


})