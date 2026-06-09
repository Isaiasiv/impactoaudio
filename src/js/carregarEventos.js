// Carrega os dados do arquivo JSON
fetch('../data/eventos.json')
  .then(response => response.json())
  .then(eventos => {
    const containerPrincipal = document.getElementById('lista-eventos');
    let htmlGerado = '';

    // Loop para agrupar de 2 em 2 cards por linha (.Container-card-1)
    for (let i = 0; i < eventos.length; i += 2) {
      htmlGerado += `<div class="Container-card-1">`;

      // Primeiro Card do par
      htmlGerado += renderizarCard(eventos[i]);

      // Segundo Card do par (se existir, para não quebrar caso o número total seja ímpar)
      if (eventos[i + 1]) {
        htmlGerado += renderizarCard(eventos[i + 1]);
      }

      htmlGerado += `</div>`;
    }

    // Injeta o HTML gerado na página
    containerPrincipal.innerHTML = htmlGerado;
  })
  .catch(error => console.error('Erro ao carregar os eventos:', error));

// Função auxiliar para criar a estrutura de cada card individual
function renderizarCard(evento) {
  return `
    <div class="cards">
      <h3>${evento.titulo}</h3>

      ${
    evento.link && evento.link !== '#'
      ? `<a href="${evento.link}">
               <img src="${evento.imagem}" alt="${evento.titulo}">
             </a>`
      : `<img src="${evento.imagem}" alt="${evento.titulo}">`
  }

      <p>${evento.descricao}</p>
    </div>
  `;
}
