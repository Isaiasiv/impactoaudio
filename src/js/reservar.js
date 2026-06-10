function reservar(nome, preco, detalhes) {
  const telefone = "5562985784214";
  const mensagem = `Olá, gostaria de reservar um kit!
*Produto:* ${nome}
*Valor:* R$ ${preco}
*Detalhes:* ${detalhes}`;

  const url = `https://api.whatsapp.com/send?phone=${telefone}&text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank');
}
