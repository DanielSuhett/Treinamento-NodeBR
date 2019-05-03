/*  docker ps
    docker exec -it 4fce6673c0a7 / mongo -u daniel -p minhasenha --authenticationDatabase herois

docker exec -it 4fce6673c0a7 bash
mongo 192.168.99.100:27017 -u daniel -p minhasenha --authenticationDatabase herois

    */

//database
//show dbs

// mudando o contexto para uma database
//use herois

//mostrar tabelas
//show collections

//create
db.herois.insert({
    nome: 'Flash',
    poder: 'Velocidade',
    dataNascimento: '1998-01-01'
})


//read
db.herois.find().pretty()
db.herois.findOne()
db.herois.find().limit(1000).sort({
    nome: -1
})
db.herois.find({}, {
    poder: 1,
    _id: 0
})

//update
db.herois.update({
    _id: ObjectId("5cc29019b677ec9088318135")
}, {
    nome: 'Mulher Maravilha'
})
db.herois.update({
    _id: ObjectId("5cc28ec0b677ec9088318116")
}, {
    $set: {
        nome: 'Lanterna Verde'
    }
})

db.herois.update({
    poder: 'Velocidade'
}, {
    $set: {
        poder: 'Super Força'
    }
})

//delete
db.herois.remove({})
db.herois.remove({
    poder: 'Super Força'
})



//scripts
for (let i = 0; i < 50; i++) {
    db.herois.insert({
        nome: `NPC-${i}`,
        poder: 'Velocidade',
        dataNascimento: '1998-01-01'
    })
}

for (let i = 0; i < 100000; i++) {
    db.herois.deleteOne({})
}