const carro = { 
    marca: "Toyota", 
    modelo: "Corola", 
    ano: 2015, 
    cor: "Pink",
    velocidade: 0,

    buzinar: function () {
        console.log("Estou buzinando...");
    },
    acelerar: function () {
        this.velocidade += 10;
    },
    frear: function () {
        this.velocidade += 5;
    }
}

console.table(carro);

carro.cor = "Vermelho";

console.table(carro);
console.log(`O ano do carro é ${carro.ano}`);

carro.buzinar();
carro.acelerar();
console.table(carro);