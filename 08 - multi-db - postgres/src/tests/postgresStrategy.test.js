const assert = require('assert')
const Postgres = require('./../db/strategies/postgres');
const Context = require('../db/strategies/base/ContextStrategy')


const context = new Context(new Postgres())
const MOCK_HEROI_CADASTRAR = {
    nome: 'Gaviao Negro',
    poder: 'flexas'
}


describe('Postgres Strategy', function () {
    this.timeout(Infinity)
    this.beforeAll(async function () {
        await context.connected()
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


})