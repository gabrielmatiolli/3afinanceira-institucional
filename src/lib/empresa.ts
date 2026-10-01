// Dados cadastrais da 3A Soluções. Tudo o que aparece no site sai daqui, e a
// verificação da Meta compara estes dados com o CNPJ. Não altere sem conferir.

const telefoneDigitos = "6299257376";

export const empresa = {
  nomeFantasia: "3A Soluções",
  razaoSocial: "3A SOLUCOES FINANCEIRAS LTDA",
  cnpj: "68.950.299/0001-89",
  fundacao: 2026,
  endereco: {
    logradouro: "Rua Coronel Antônio Rios, 1087",
    complemento: "Sala 107",
    bairro: "Santa Maria",
    cidade: "Uberaba",
    uf: "MG",
    cep: "38061-150",
  },
  email: "adelino@3asolucoesfinanceiras.com.br",
  telefone: {
    exibicao: "(62) 9925-7376",
    href: `tel:+55${telefoneDigitos}`,
  },
  whatsapp: {
    href: (mensagem?: string) =>
      `https://wa.me/55${telefoneDigitos}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ""}`,
  },
  site: "https://3asolucoesfinanceiras.com.br",
} as const;

export const enderecoCompleto = `${empresa.endereco.logradouro}, ${empresa.endereco.complemento}, Bairro ${empresa.endereco.bairro}, ${empresa.endereco.cidade}/${empresa.endereco.uf}, CEP ${empresa.endereco.cep}`;

// Endereço em duas partes, para quebrar a linha no lugar certo em telas estreitas.
export const enderecoLinhas = [
  `${empresa.endereco.logradouro}, ${empresa.endereco.complemento}, Bairro ${empresa.endereco.bairro},`,
  `${empresa.endereco.cidade}/${empresa.endereco.uf}, CEP ${empresa.endereco.cep}`,
] as const;

export const mensagemWhatsApp =
  "Olá! Vim pelo site da 3A Soluções e gostaria de falar sobre a cobrança de valores em aberto da minha empresa.";
