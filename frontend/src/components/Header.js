export function renderHeader(container, onNavigate) {
  container.innerHTML = `
    <div class="topo">
      <h1>GERENCIADOR DE EVENTOS</h1>
      <nav>
        <button id="nav-eventos" class="ativo">Eventos</button>
        <button id="nav-inscricoes">Minhas Inscrições</button>
      </nav>
    </div>
  `;

  const btnEventos = container.querySelector('#nav-eventos');
  const btnInscricoes = container.querySelector('#nav-inscricoes');

  btnEventos.addEventListener('click', () => {
    btnEventos.classList.add('ativo');
    btnInscricoes.classList.remove('ativo');
    onNavigate('eventos');
  });

  btnInscricoes.addEventListener('click', () => {
    btnInscricoes.classList.add('ativo');
    btnEventos.classList.remove('ativo');
    onNavigate('inscricoes');
  });
}
