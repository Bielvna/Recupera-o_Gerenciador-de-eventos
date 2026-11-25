export function criarCardEvento(evento, jaInscrito, onInscrever) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${evento.imagem}" alt="${evento.nome}" />
    <div class="card-corpo">
      <h3>${evento.nome}</h3>
      <p><strong>Data:</strong> ${evento.data}</p>
      <p><strong>Local:</strong> ${evento.local}</p>
      <button class="btn" ${jaInscrito ? 'disabled' : ''}>
        ${jaInscrito ? 'Inscrito' : 'Inscrever-se'}
      </button>
    </div>
  `;

  const botao = card.querySelector('button');
  botao.addEventListener('click', () => {
    onInscrever(evento);
    botao.textContent = 'Inscrito';
    botao.disabled = true;
  });

  return card;
}
