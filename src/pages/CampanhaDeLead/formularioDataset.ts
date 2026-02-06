/**
 * Dataset: Gerador de Formulário por Nicho.
 * Filtros: Ticket (baixo/alto), Canal (WhatsApp/ligação) alteram perguntas e copy.
 */
export type TicketFilter = "baixo" | "alto"
export type CanalFilter = "whatsapp" | "ligacao"

export interface MetaPergunta {
  label: string
  options?: string[]
}

export interface MetaInstantaneo {
  titulo: string
  descricao: string
  perguntas: MetaPergunta[]
}

export interface VersaoLP {
  campos: string[]
  perguntasQualificatorias: string[]
  observacao: string
}

export interface CopyAnuncio {
  headlines: string[]
  primaryTexts: string[]
  cta: string
  linhaQualificacao: string
}

export interface NichoGenerator {
  id: string
  name: string
  /** Variantes por ticket/canal: chave "baixo_whatsapp" etc. Opcional; se não houver, usa default. */
  meta: MetaInstantaneo
  metaAlto?: MetaInstantaneo
  lp: VersaoLP
  lpAlto?: VersaoLP
  copy: CopyAnuncio
  copyLigacao?: CopyAnuncio
}

export const FORMULARIO_NICHOS: NichoGenerator[] = [
  {
    id: "ebook-infoproduto",
    name: "E-book / infoproduto",
    meta: {
      titulo: "Acesso ao material",
      descricao: "Informe seu e-mail e interesse. Enviamos o material em minutos.",
      perguntas: [
        { label: "Qual material te interessa?", options: ["E-book", "Curso", "Template", "Outro"] },
        { label: "Já consome conteúdo do autor?", options: ["Sim", "Não"] },
        { label: "Melhor contato?", options: ["E-mail", "WhatsApp"] },
        { label: "Objetivo?", options: ["Aprender", "Implementar", "Só conhecer"] },
      ],
    },
    lp: {
      campos: ["Nome", "E-mail", "WhatsApp (opcional)"],
      perguntasQualificatorias: ["Qual material te interessa?", "Prefere receber por e-mail ou WhatsApp?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["E-book gratuito em 1 minuto", "Material que você precisa na sua caixa de entrada", "Acesso imediato ao conteúdo"],
      primaryTexts: ["Informe seu e-mail. Enviamos o material na hora.", "Conteúdo prático. Sem compromisso."],
      cta: "Quero o material",
      linhaQualificacao: "Material educativo. Entrega por e-mail ou WhatsApp.",
    },
  },
  {
    id: "clinica-consultorio",
    name: "Clínica / Consultório",
    meta: {
      titulo: "Agende sua consulta",
      descricao: "Primeira consulta ou retorno. Escolha o melhor horário.",
      perguntas: [
        { label: "Procedimento/consulta?", options: ["Check-up", "Especialidade específica", "Retorno"] },
        { label: "Primeira vez ou retorno?", options: ["Primeira vez", "Retorno"] },
        { label: "Urgência?", options: ["Esta semana", "Próximas 2 semanas", "Só agendar"] },
        { label: "Cidade e bairro?", options: [] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp", "Cidade/Bairro"],
      perguntasQualificatorias: ["Qual especialidade ou procedimento?", "Prefere manhã ou tarde?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Agende sua consulta em 1 minuto", "Primeira consulta com desconto", "Atendimento humanizado na sua região"],
      primaryTexts: ["Escolha o horário e receba confirmação pelo WhatsApp.", "Agendamento rápido. Sem fila de espera."],
      cta: "Agendar consulta",
      linhaQualificacao: "Somente para região de atuação da clínica.",
    },
  },
  {
    id: "agencia-gestor",
    name: "Agência / Gestor",
    meta: {
      titulo: "Diagnóstico ou gestão de tráfego",
      descricao: "Informe seu objetivo. Retornamos com proposta em 24h.",
      perguntas: [
        { label: "O que você precisa?", options: ["Gestão de Meta Ads", "Diagnóstico da conta", "Criação de campanhas", "Consultoria"] },
        { label: "Já anuncia hoje?", options: ["Sim", "Não", "Parei"] },
        { label: "Orçamento mensal (aproximado)?", options: ["Até R$ 2k", "R$ 2k a R$ 5k", "R$ 5k a R$ 10k", "Acima de R$ 10k"] },
        { label: "Melhor contato?", options: ["WhatsApp", "Ligação", "E-mail"] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp ou E-mail", "Empresa ou nicho"],
      perguntasQualificatorias: ["O que você precisa? Gestão, diagnóstico ou criação?", "Já anuncia hoje? Qual rede?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Gestão de tráfego que entrega resultado", "Diagnóstico gratuito da sua conta Meta", "Meta Ads sob medida para seu negócio"],
      primaryTexts: ["Informe seu objetivo. Montamos uma proposta em até 24h.", "Conta desorganizada? Fazemos um diagnóstico sem compromisso."],
      cta: "Quero uma proposta",
      linhaQualificacao: "Atendemos agências e gestores de tráfego.",
    },
    copyLigacao: {
      headlines: ["Fale com um especialista em Meta Ads", "Diagnóstico por telefone - sem compromisso", "Gestão de tráfego com resultado"],
      primaryTexts: ["Agende uma ligação. Nossa equipe retorna em até 24h.", "Conte seu objetivo. Montamos a proposta por telefone."],
      cta: "Solicitar ligação",
      linhaQualificacao: "Atendemos agências e gestores de tráfego.",
    },
  },
  {
    id: "imobiliaria",
    name: "Imobiliária",
    meta: {
      titulo: "Encontre o imóvel ideal",
      descricao: "Comprar ou alugar? Informe região e faixa. Te enviamos as melhores opções.",
      perguntas: [
        { label: "Comprar ou alugar?", options: ["Comprar", "Alugar"] },
        { label: "Tipo de imóvel?", options: ["Apartamento", "Casa", "Comercial"] },
        { label: "Região?", options: [] },
        { label: "Faixa de investimento?", options: ["Até R$ 1.500/mês", "R$ 1.500 a R$ 3.000/mês", "Acima de R$ 3.000/mês", "Comprar - até R$ 300k", "Comprar - acima de R$ 300k"] },
        { label: "Prazo?", options: ["Agora", "Em 30 dias", "Só pesquisando"] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp", "Cidade/Bairro"],
      perguntasQualificatorias: ["Comprar ou alugar? Qual região e faixa?", "Prazo: agora, 30 dias ou pesquisando?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Imóveis na sua região com um clique", "Aluguel e venda - opções atualizadas", "Encontre o imóvel ideal"],
      primaryTexts: ["Informe região e faixa. Enviamos as melhores opções por WhatsApp.", "Atendimento rápido. Sem compromisso."],
      cta: "Quero ver opções",
      linhaQualificacao: "Atendemos na região de Campinas e interior.",
    },
  },
  {
    id: "beleza-estetica",
    name: "Beleza / Estética",
    meta: {
      titulo: "Agende seu horário",
      descricao: "Procedimento e preferência de horário. Te confirmamos na hora.",
      perguntas: [
        { label: "Procedimento de interesse?", options: ["Limpeza de pele", "Depilação", "Design de sobrancelha", "Outro"] },
        { label: "Primeira vez ou já é cliente?", options: ["Primeira vez", "Já sou cliente"] },
        { label: "Manhã ou tarde?", options: ["Manhã", "Tarde"] },
        { label: "Cidade e bairro?", options: [] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp", "Cidade/Bairro"],
      perguntasQualificatorias: ["Qual procedimento?", "Prefere manhã ou tarde?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Agende seu horário em 1 minuto", "Beleza e cuidado perto de você", "Primeira vez? Agende já"],
      primaryTexts: ["Escolha o procedimento e horário. Confirmamos pelo WhatsApp.", "Atendimento personalizado. Agende sem compromisso."],
      cta: "Agendar horário",
      linhaQualificacao: "Atendemos na região.",
    },
  },
  {
    id: "servicos-gerais",
    name: "Serviços gerais",
    meta: {
      titulo: "Orçamento rápido - Encanador, Eletricista",
      descricao: "Informe o serviço e a urgência. Retornamos em minutos.",
      perguntas: [
        { label: "Tipo de serviço?", options: ["Encanamento", "Elétrica", "Outro"] },
        { label: "Urgência?", options: ["Hoje", "Essa semana", "Só orçamento"] },
        { label: "Cidade e bairro?", options: [] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp", "Cidade/Bairro"],
      perguntasQualificatorias: ["Qual serviço precisa?", "Urgência: hoje, esta semana ou orçamento?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Orçamento de encanador e eletricista na hora", "Resolva vazamento e elétrica sem stress", "Serviço rápido na sua região"],
      primaryTexts: ["Informe o problema e a urgência. Te respondemos pelo WhatsApp.", "Orçamento gratuito. Atendimento rápido."],
      cta: "Pedir orçamento",
      linhaQualificacao: "Atendemos na região de Campinas e interior.",
    },
  },
  {
    id: "oficina-automoveis",
    name: "Oficina / Automóveis",
    meta: {
      titulo: "Orçamento para seu veículo",
      descricao: "Revisão, funilaria ou elétrica. Informe o serviço e a cidade.",
      perguntas: [
        { label: "Serviço necessário?", options: ["Revisão", "Funilaria", "Elétrica", "Outro"] },
        { label: "Veículo em condições de ir até a oficina?", options: ["Sim", "Não"] },
        { label: "Urgência?", options: ["Esta semana", "Só orçamento"] },
        { label: "Cidade?", options: [] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp", "Cidade"],
      perguntasQualificatorias: ["Qual serviço precisa?", "O veículo está em condições de ir até a oficina?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Orçamento de oficina em 1 minuto", "Revisão e reparo na sua região", "Cuidamos do seu carro"],
      primaryTexts: ["Informe o serviço. Retornamos com orçamento pelo WhatsApp.", "Oficina de confiança. Atendimento rápido."],
      cta: "Pedir orçamento",
      linhaQualificacao: "Atendemos na região.",
    },
  },
  {
    id: "escola-curso",
    name: "Escola / Curso",
    meta: {
      titulo: "Informações sobre o curso",
      descricao: "Qual área te interessa? Enviamos material e valor.",
      perguntas: [
        { label: "Área ou curso?", options: [] },
        { label: "Já atua na área ou está começando?", options: ["Já atuo", "Estou começando"] },
        { label: "Melhor horário para contato?", options: ["Manhã", "Tarde"] },
        { label: "Receber por WhatsApp ou e-mail?", options: ["WhatsApp", "E-mail"] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp", "E-mail"],
      perguntasQualificatorias: ["Qual área ou curso te interessa?", "Prefere receber material por WhatsApp ou e-mail?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Material do curso em 10 segundos", "Comece na área que você quer", "Curso com suporte"],
      primaryTexts: ["Informe a área de interesse. Enviamos material e valor pelo WhatsApp.", "Dúvidas? Respondemos rápido."],
      cta: "Quero receber o material",
      linhaQualificacao: "Material e informações sem compromisso.",
    },
  },
  {
    id: "advogado-consultoria",
    name: "Advogado / Consultoria",
    meta: {
      titulo: "Atendimento jurídico",
      descricao: "Informe a área de interesse. Retornamos para uma conversa inicial.",
      perguntas: [
        { label: "Área de interesse?", options: ["Trabalhista", "Família", "Empresarial", "Outro"] },
        { label: "Cidade?", options: [] },
        { label: "Prefere ligação ou WhatsApp?", options: ["Ligação", "WhatsApp"] },
        { label: "Urgência?", options: ["Esta semana", "Só tirar dúvidas"] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp ou Telefone", "Cidade"],
      perguntasQualificatorias: ["Qual área do seu interesse?", "Prefere que entremos em contato por ligação ou WhatsApp?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Atendimento jurídico - primeira conversa sem custo", "Sua situação merece uma análise", "Advocacia com resposta rápida"],
      primaryTexts: ["Informe a área. Um especialista retorna para uma conversa inicial.", "Atendimento humanizado. Resposta em até 24h."],
      cta: "Solicitar contato",
      linhaQualificacao: "Atendemos diversas áreas. Primeira conversa sem compromisso.",
    },
    copyLigacao: {
      headlines: ["Ligamos para você - atendimento jurídico", "Conte seu caso. Retornamos por telefone.", "Atendimento jurídico na sua região"],
      primaryTexts: ["Deixe seu telefone. Um advogado retorna em até 24h.", "Primeira conversa por telefone. Sem custo."],
      cta: "Solicitar ligação",
      linhaQualificacao: "Atendemos diversas áreas. Primeira conversa sem compromisso.",
    },
  },
  {
    id: "personal-academia",
    name: "Personal / Academia",
    meta: {
      titulo: "Treino sob medida",
      descricao: "Objetivo e disponibilidade. Montamos um plano em 24h.",
      perguntas: [
        { label: "Objetivo principal?", options: ["Emagrecer", "Ganhar massa", "Condicionamento"] },
        { label: "Presencial ou online?", options: ["Presencial", "Online"] },
        { label: "Melhor período?", options: ["Manhã", "Tarde"] },
        { label: "Contato preferido?", options: ["WhatsApp", "Ligação"] },
      ],
    },
    lp: {
      campos: ["Nome", "WhatsApp", "Cidade/Bairro"],
      perguntasQualificatorias: ["Qual seu objetivo? Emagrecer, massa ou condicionamento?", "Prefere treino presencial ou online?"],
      observacao: "Poucos campos. CTA único. Página rápida.",
    },
    copy: {
      headlines: ["Treino sob medida em 24h", "Alcance seu objetivo com acompanhamento", "Personal presencial ou online"],
      primaryTexts: ["Informe seu objetivo. Montamos um plano e enviamos pelo WhatsApp.", "Primeira conversa sem compromisso."],
      cta: "Quero meu plano",
      linhaQualificacao: "Atendemos presencial e online.",
    },
  },
]
