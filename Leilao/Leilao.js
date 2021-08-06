const Lance = require('./Lance');

module.exports = class Leilao{
    constructor(desc){
        this.descricao = desc;
        this.lances = [];
        this.maiorLance = new Lance('Nenhum', 0.0);
        this.menorLance = new Lance('Nenhum', 0.0);
    }

    getDescricao(){
        return this.descricao;
    }

    getLances(){
        return this.lances;
    }

    getMaiorLance(){
        return this.maiorLance;
    }

    getMenorLance(){
        return this.menorLance;
    }

    propoe(lance){
        this.lances.push(lance);
    }
    menor(){
        this.lances.forEach(
            (lance) => {
                if(this.menorLance.getValor() === 0 || lance.getValor() < this.menorLance.getValor()){
                    this.menorLance = lance;
                }
            }
        );
    }
    avalia(){
        this.lances.forEach(
            (lance) => {
                if(lance.getValor() > this.maiorLance.getValor()){
                    this.maiorLance = lance;
                }
            }
        );
    }
}