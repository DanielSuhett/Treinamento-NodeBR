const database = require("./database");
const Commander = require("commander");
const Heroi = require("./heroi");

async function main() {
    Commander.version("1.0.0")

        .option("-n, --nome [value]", "Nome do Heroi")
        .option("-p, --poder [value]", "Poder do Heroi")
        .option("-i --id [value]", "ID do Heroi")

        .option("-c, --cadastrar", "Cadastrar um heroi")
        .option("-l, --listar", "Lista herois")
        .option("-r, --remover", "Remove heroi por ID")
        .option("-a, --atualizar [value]", "Atualiza heroi por ID")

        .parse(process.argv);

    const heroi = new Heroi(Commander);

    try {
        if (Commander.cadastrar) {
            delete heroi.id;
            const resultado = await database.cadastrar(heroi);

            if (resultado === -1) {
                console.error("\nO herói não foi cadastrado!");
                return;
            }
            console.log("\nO herói foi cadastrado com sucesso");
        }
        if (Commander.listar) {
            const resultado = await database.listar();
            if (resultado.length <= 0) {
                console.log("\n NÃO EXISTEM HERÓIS AQUI");
            } else {
                console.log("\n                 LISTA DE HERÓIS CADASTRADOS     ");
            }

            for (let index = 0; index < resultado.length; index++) {
                console.log(`
                ----------------------------
                    Nome: ${resultado[index].nome} 

                    Poder: ${resultado[index].poder}

                    ID: ${resultado[index].id}
                ----------------------------
                `);
            }
            return;
        }
        if (Commander.remover) {
            const resultado = await database.remover(heroi.id);
            if (!resultado) {
                console.error("\nNão foi possivel remover o herói");
                return;
            }
            console.log("\nO herói foi removido com sucesso");
        }
        if (Commander.atualizar) {
            const idATT = parseInt(Commander.atualizar);
            const dado = JSON.stringify(heroi);
            const heroiAtualizar = JSON.parse(dado);
            const resultado = await database.atualizar(idATT, heroiAtualizar);

            if (!resultado) {
                console.error("\nNão foi possivel atualizar o herói");
                return;
            }
            console.log("\nO herói foi atualizado com sucesso");
        }
    } catch (error) {
        console.error("\nDeu xabu\n", error);
    }
}

main();