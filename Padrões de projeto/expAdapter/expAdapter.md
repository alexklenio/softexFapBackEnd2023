# Atividade

Crie um adaptador que permita que um objeto do tipo Pato seja usado como se fosse um objeto do tipo Galinha.

Siga o exemplo apresentado no Hipertexto 4 e crie as classes AdaptadorPato e AdaptadorDemo para demonstrar o uso da classe AdaptadorPato.

**Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.

## Resposta:


``` TypeScript

class Pato {
    quack() {
        console.log("Quack!");
    }

    fly() {
        console.log("Estou voando!");
    }
}

class Galinha {
    cacar() {
        console.log("Cacaaaaa!");
    }

    botaOvo() {
        console.log("Botei um ovo!");
    }
}

class AdaptadorPato {
    constructor(pato: Pato) {
        this.pato = pato;
    }

    cacar() {
        this.pato.quack();
    }

    botaOvo() {
        console.log("Botei um ovo de pato!");
    }
}

class AdaptadorPatoDemo {
    static main() {
        const pato = new Pato();
        const adaptadorPato = new AdaptadorPato(pato);

        pato.cacar();
        pato.botaOvo();

        adaptadorPato.cacar();
        adaptadorPato.botaOvo();
    }
}

AdaptadorPatoDemo.main();

```