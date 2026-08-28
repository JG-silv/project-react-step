export function formatarPreco(valor) {
  if (valor === '' || valor === null || valor === undefined) return '';
  const numero = Number(valor);
  return Number.isNaN(numero) ? '' : numero.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatarPrecoDigitado(valor) {
  const apenasNumeros = valor.replace(/\D/g, '');
  return apenasNumeros ? (Number(apenasNumeros) / 100).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '';
}

export function converterPreco(valor) {
  return valor ? Number(valor.replace(/\./g, '').replace(',', '.')) : NaN;
}
