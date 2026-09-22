let nome = "Beatriz";
let idade = 18;

console.log("O nome do usúario é: " + nome);
console.log("A idade do usário é: " + idade);

const pNomeUsuario = document.getElementById("nomeUsuario");
pNomeUsuario.textContent = "O nome do usúario é: " + nome;

const pIdade = document.getElementById("idadeUsuario");
pIdade.textContent = "O nome do usúario é: " + idade;