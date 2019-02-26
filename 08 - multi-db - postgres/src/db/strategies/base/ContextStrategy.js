const ICrud = require('../interfaces/interfaceCrud');

class ContextStrategy extends ICrud {
    constructor(strategy) {
        super()
        this._database = strategy
    }
    isConnected() {
        return this._database.isConnected();
    }
    create(item) {
        return this._database.create(item)
    }

    read(item) {
        return this._database.read(item)
    }
    update(id, item) {
        return this._database.update(id, item)
    }
    delete(id) {
        return this._database.delete(id)
    }
    connected() {
        return this._database.connect();
    }
}

module.exports = ContextStrategy