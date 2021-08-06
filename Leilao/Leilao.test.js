const Leilao = require('./Leilao');
const Lance = require('./Lance');


test('Pega maior lance aleatório', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 100.0));
        leilao.propoe(new Lance('Maria' , 200.0));
        leilao.propoe(new Lance('João' , 150.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(200.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Maria');
    }
);

test('Pega o maior lance em Ordem crescente', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 100.0));
        leilao.propoe(new Lance('Maria' , 200.0));
        leilao.propoe(new Lance('João' , 300.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(300.0);
        expect(leilao.getMaiorLance().getNome()).toBe('João');
    }
);

test('Lance o maior lance Ordem Decrescente', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('Arthur' , 350.0));
        leilao.propoe(new Lance('Matheus' , 250.0));
        leilao.propoe(new Lance('Gabriela' , 100.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(350.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Arthur');
    }
);

test('Coloca lance negativo', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , -100.0));
        leilao.propoe(new Lance('Maria' , -200.0));
        leilao.propoe(new Lance('João' , -300.0));

        leilao.avalia();
        expect(leilao.getMaiorLance().getValor()).toBe(0.0);
        expect(leilao.getMaiorLance().getNome()).toBe('Nenhum');
    }
);

test('Menor lance aleatório', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 400.0));
        leilao.propoe(new Lance('Maria' , 50.0));
        leilao.propoe(new Lance('João' , 100.0));

        leilao.menor();
        expect(leilao.getMenorLance().getValor()).toBe(50.0);
        expect(leilao.getMenorLance().getNome()).toBe('Maria');
    }
);

test('Menor lance em Ordem crescente', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 50.0));
        leilao.propoe(new Lance('Maria' , 150.0));
        leilao.propoe(new Lance('João' , 200.0));

        leilao.menor();
        expect(leilao.getMenorLance().getValor()).toBe(50.0);
        expect(leilao.getMenorLance().getNome()).toBe('José');
    }
);

test('Menor lance em Ordem Decrescente', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 400.0));
        leilao.propoe(new Lance('Maria' , 150.0));
        leilao.propoe(new Lance('João' , 10.0));

        leilao.menor();
        expect(leilao.getMenorLance().getValor()).toBe(10.0);
        expect(leilao.getMenorLance().getNome()).toBe('João');
    }
);


test('Menor lance e Maior lance', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 400.0));
        leilao.propoe(new Lance('Maria' , 150.0));
        leilao.propoe(new Lance('João' , 10.0));

        leilao.avalia();
        leilao.menor();
        expect(leilao.getMaiorLance().getValor()).toBe(400.0);
        expect(leilao.getMaiorLance().getNome()).toBe('José');
        expect(leilao.getMenorLance().getValor()).toBe(10.0);
        expect(leilao.getMenorLance().getNome()).toBe('João');
    }
);

test('Menor lance e Maior lance em ordem crescente', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 10.0));
        leilao.propoe(new Lance('Maria' , 200.0));
        leilao.propoe(new Lance('João' , 500.0));

        leilao.avalia();
        leilao.menor();
        expect(leilao.getMaiorLance().getValor()).toBe(500.0);
        expect(leilao.getMaiorLance().getNome()).toBe('João');
        expect(leilao.getMenorLance().getValor()).toBe(10.0);
        expect(leilao.getMenorLance().getNome()).toBe('José');
    }
);

test('Menor lance e Maior lance em ordem decrescente', 
    () => {
        var leilao = new Leilao('PlayStation');
        leilao.propoe(new Lance('José' , 700.0));
        leilao.propoe(new Lance('Maria' , 500.0));
        leilao.propoe(new Lance('João' , 200.0));

        leilao.avalia();
        leilao.menor();
        expect(leilao.getMaiorLance().getValor()).toBe(700.0);
        expect(leilao.getMaiorLance().getNome()).toBe('José');
        expect(leilao.getMenorLance().getValor()).toBe(200.0);
        expect(leilao.getMenorLance().getNome()).toBe('João');
    }
);