const CHAVE = 'eventos_inscritos';

export function pegarInscricoes() {
  const dados = localStorage.getItem(CHAVE);
  return dados ? JSON.parse(dados) : [];
}

export function salvarInscricao(evento) {
  const lista = pegarInscricoes();
  const jaExiste = lista.some((item) => item.id === evento.id);

  if (!jaExiste) {
    lista.push(evento);
    localStorage.setItem(CHAVE, JSON.stringify(lista));
  }
}

export function limparInscricoes() {
  localStorage.removeItem(CHAVE);
}
