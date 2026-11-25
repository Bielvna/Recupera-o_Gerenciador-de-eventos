const API_URL = 'http://localhost:3000';

export async function buscarEventos() {
  const resposta = await fetch(`${API_URL}/eventos`);
  return resposta.json();
}

export async function registrarInscricoes(lista) {
  const dados = {
    dataConfirmacao: new Date().toLocaleString('pt-BR'),
    totalInscricoes: lista.length,
    eventos: lista
  };

  const resposta = await fetch(`${API_URL}/inscricoes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  });

  return resposta.json();
}
