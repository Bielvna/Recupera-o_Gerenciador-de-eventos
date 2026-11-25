export function criarItemInscricao(evento) {
  const item = document.createElement('div');
  item.className = 'item-inscrito';

  item.innerHTML = `
    <h3>${evento.nome}</h3>
    <p><strong>Data:</strong> ${evento.data}</p>
    <p><strong>Local:</strong> ${evento.local}</p>
  `;

  return item;
}
