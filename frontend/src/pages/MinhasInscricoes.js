import { pegarInscricoes, limparInscricoes } from '../storage.js';
import { registrarInscricoes } from '../api.js';
import { criarItemInscricao } from '../components/ItemInscricao.js';

export function paginaMinhasInscricoes(container) {
  const lista = pegarInscricoes();

  container.innerHTML = `
    <h2>MINHAS INSCRIÇOES</h2>
    <div class="resumo">
      <p><strong>Quantidade total de inscrições realizadas:</strong> ${lista.length}</p>
      <button id="btn-confirmar" class="btn" style="margin-top: 0;" ${lista.length === 0 ? 'disabled' : ''}>
        Confirmar Inscrições
      </button>
    </div>
    <div class="lista-inscritos" id="lista-inscritos"></div>
  `;

  const divLista = container.querySelector('#lista-inscritos');

  if (lista.length === 0) {
    divLista.innerHTML = '<p>Nenhuma inscrição realizada.</p>';
  } else {
    lista.forEach((evento) => {
      const item = criarItemInscricao(evento);
      divLista.appendChild(item);
    });
  }

  const btnConfirmar = container.querySelector('#btn-confirmar');
  btnConfirmar.addEventListener('click', async () => {
    try {
      await registrarInscricoes(lista);
      alert('Inscrições confirmadas e registradas no back-end!');
      limparInscricoes();
      paginaMinhasInscricoes(container);
    } catch (erro) {
      alert('Erro ao confirmar inscrições.');
    }
  });
}
