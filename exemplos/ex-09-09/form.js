const formDdados = document.getElementById("formDados");

function atualizarDados(evento) {
    evento.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;


    const pNomeUsuario = document.getElementById("nomeUsuario");
    pNomeUsuario.textContent = "O nome do usúario é: " + nome;

    const pIdade = document.getElementById("idadeUsuario");
    pIdade.textContent = "O nome do usúario é: " + idade;
}

formDdados.addEventListener("submit", atualizarDados);