import { buscarEventos } from '../api.js';
import { pegarInscricoes, salvarInscricao } from '../storage.js';
import { criarCardEvento } from '../components/CardEvento.js';

export async function paginaListagemEventos(container) {
  container.innerHTML = '<p>Carregando eventos...</p>';

  try {
    const eventos = await buscarEventos();
    const inscritos = pegarInscricoes();

    container.innerHTML = `
      <h2>EVENTOS DISPONIVEIS</h2>
      <div class="grid-eventos" id="grid-eventos"></div>
    `;

    const grid = container.querySelector('#grid-eventos');

    eventos.forEach((evento) => {
      const jaInscrito = inscritos.some((item) => item.id === evento.id);
      const card = criarCardEvento(evento, jaInscrito, (ev) => {
        salvarInscricao(ev);
        alert(`Inscrição realizada em: ${ev.nome}`);
      });
      grid.appendChild(card);
    });
  } catch (erro) {
    container.innerHTML = '<p>Erro ao carregar eventos do servidor.</p>';
  }
}
