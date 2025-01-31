let amigos = [];

/**
 * Adiciona um novo amigo à lista, validando se o nome não está vazio.
 */
function adicionarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nomeAmigo = inputAmigo.value.trim();

  if (!nomeAmigo) {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  atualizarLista();
}

/**
 * Atualiza a exibição da lista de amigos no DOM.
 */
function atualizarLista() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

/**
 * Sorteia e exibe um amigo aleatório da lista.
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um amigo antes de sortear.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  document.getElementById("resultado").textContent = `Amigo sorteado: ${amigos[indiceSorteado]}`;
}
