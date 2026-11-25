import './style.css';
import { renderHeader } from './components/Header.js';
import { paginaListagemEventos } from './pages/ListagemEventos.js';
import { paginaMinhasInscricoes } from './pages/MinhasInscricoes.js';

const header = document.getElementById('header');
const app = document.getElementById('app');

function navegar(pagina) {
  if (pagina === 'eventos') {
    paginaListagemEventos(app);
  } else if (pagina === 'inscricoes') {
    paginaMinhasInscricoes(app);
  }
}

renderHeader(header, navegar);
navegar('eventos');
