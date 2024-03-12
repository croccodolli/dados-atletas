class Atleta {

    categoria = null;
    imc = null;
    mediaValida = null;

    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
        this.calculaCategoria();
        this.calculaIMC();
        this.calculaMediaValida();
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade < 12) {
            this.categoria = "Infantil";
        } else if (this.idade >= 12 && this.idade < 14) {
            this.categoria = "Juvenil";
        } else if (this.idade >= 14 && this.idade < 16) {
            this.categoria = "Intermediário";
        } else if (this.idade >= 16 && this.idade < 31) {
            this.categoria = "Adulto";
        } else {
            this.categoria = "Sem categoria";
        }
    }

    calculaIMC() {
        this.imc = this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.sort((a, b) => a - b);
        let notasValidas = this.notas.slice(1, 4);
        let somaDasNotasValidas = notasValidas.reduce((total, atual) => total + atual);
        this.mediaValida = somaDasNotasValidas / notasValidas.length;
    }

    obtemNomeAtleta() {
        return this.nome;
    }

    obtemIdadeAtleta() {
        return this.idade;
    }

    obtemPesoAtleta() {
        return this.peso;
    }

    obtemNotasAtleta() {
        return this.notas;
    }

    obtemCategoria() {
        return this.categoria;
    }

    obtemIMC() {
        return this.imc;
    }

    obtemMediaValida() {
        return this.mediaValida;
    }

    exibirDados() {
        console.log(`Nome: ${this.obtemNomeAtleta()}`)
        console.log(`Idade: ${this.obtemIdadeAtleta()}`)
        console.log(`Peso: ${this.obtemPesoAtleta()}`)
        console.log(`Altura: ${this.altura}`)
        console.log(`Notas: ${this.obtemNotasAtleta()}`)
        console.log(`Categoria: ${this.obtemCategoria()}`)
        console.log(`IMC: ${this.obtemIMC()}`)
        console.log(`Média válida: ${this.obtemMediaValida()}`)
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

atleta.exibirDados();
