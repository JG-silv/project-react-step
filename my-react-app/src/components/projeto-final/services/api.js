export const API_URL = 'https://projeto-node-step-t5i1.vercel.app';

export function getToken() {
  return localStorage.getItem('token');
}

export function getAuthHeaders() {
  const token = getToken();

  if (!token) {
    throw new Error('Faca login novamente para continuar.');
  }

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function lerResposta(resposta) {
  const texto = await resposta.text();

  if (!texto) {
    return {};
  }

  try {
    return JSON.parse(texto);
  } catch {
    return {};
  }
}

export function mensagemErroApi(resposta, resultado, mensagemPadrao) {
  if (resposta.status === 401 || resposta.status === 403) {
    return 'Sua sessao expirou ou seu usuario nao tem permissao para esta acao. Faca login novamente.';
  }

  return resultado.mensagem || mensagemPadrao;
}
