async function carregarKits() {
  const container = document.getElementById('container-kits');

  try {
    // Busca o arquivo JSON
    const resposta = await fetch('../data/dados.json');
    const kits = await resposta.json();

    // Limpa o container antes de carregar
    container.innerHTML = "";

    // Percorre cada kit e cria o HTML dinamicamente
    kits.forEach(kit => {
      // Agora o card inteiro tem o onclick para ver detalhes
      const card = `
                <div class="equipamentos" onclick="verDetalhes(${kit.id})" style="cursor:pointer">
                    <img src="${kit.imagem}" alt="${kit.nome}">
                    <h3>${kit.nome}</h3>
                    <p>${kit.descricao}</p>
                    <h5>R$ ${kit.preco}</h5>
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            `;
      container.innerHTML += card;
    });

  } catch (erro) {
    console.error("Erro ao carregar os kits:", erro);
    container.innerHTML = "<p>Erro ao carregar equipamentos. Tente novamente mais tarde.</p>";
  }
}

// Inicia a função quando a página carregar
document.addEventListener('DOMContentLoaded', carregarKits);

// Função que redireciona para a página de detalhes passando o ID na URL
function verDetalhes(id) {
  window.location.href = `detalhes.html?id=${id}`;
}
