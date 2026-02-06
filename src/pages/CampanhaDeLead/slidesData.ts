/** Slide 1 é intocável, renderizado por LockedSlide. Demais slides usam esta estrutura.
 * Regra de copy: nunca usar reticências (...) em textos. */
export interface SlideData {
  /** Se true, usar LockedSlide (só slide 1) */
  isLocked?: boolean
  /** Título pequeno acima da headline */
  smallTitle: string
  /** Headline grande */
  headline: string
  /** 2 a 4 bullets curtos */
  bullets: string[]
  /** Frase que fecha o slide */
  punchline: string
  /** Slide 4: cards Instantâneo vs Externo */
  cards?: {
    instantaneo: { title: string; items: string[] }
    externo: { title: string; items: string[] }
  }
  /** Slide 5: entregável Comunidade + formulário demo (modelo Elementor) */
  isGenerator?: boolean
  /** Slide 5: link da comunidade Extremo Plus */
  communityLink?: string
  /** Slide 5: mostrar botão para abrir formulário demo modal */
  showFormDemo?: boolean
  /** Slide 8: botão Copiar 4 headlines + exemplos de ganchos por tópico */
  copyHeadlines?: string[]
  /** Slide 8: exemplos de ganchos de criativos (um por tópico do slide) */
  creativeHooks?: { topic: string; example: string }[]
  /** Slide 9: card WhatsApp + script */
  whatsappScript?: string
}

export const TOTAL_SLIDES = 7

export const slidesData: SlideData[] = [
  {
    isLocked: true,
    smallTitle: "",
    headline: "",
    bullets: [],
    punchline: "",
  },
  {
    smallTitle: "Objetivo da aula",
    headline: "Você vai entender qual é a campanha de Lead ideal para o seu seguimento",
    bullets: [
      "O Meta não entrega cliente. Entrega comportamento.",
      "Se você otimiza errado, paga por lead curioso.",
      "Hoje você sai com: destino certo + filtro no formulário.",
    ],
    punchline: "Lead barato sem filtro = volume disfarçado de prejuízo.",
  },
  {
    smallTitle: "Passo 1",
    headline: "O destino que você escolhe decide quem o Meta te entrega.",
    bullets: [
      "Campanha de lead para WhatsApp, ideal para ter volume, com qualificação manual, Chatbot ou IA.",
      "Campanha de Formulário instantâneo (Meta): vejo pessoas usando para imobiliária e planos de saúde.",
      "Campanha de Formulário na LP, melhor para quando você precisa qualificar por região, interesse e nível de consciência.",
    ],
    punchline: "Se o lead não responde, o erro pode estar na escolha do destino.",
  },
  {
    smallTitle: "",
    headline: "Baixar formulário de qualificação na Comunidade",
    bullets: [
      "Aula passo a passo para baixar e importar o modelo de formulário na sua página.",
    ],
    punchline: "",
    isGenerator: true,
    communityLink: "https://www.facebook.com/groups/extremoplus",
    showFormDemo: true,
  },
  {
    smallTitle: "Segmentação",
    headline: "Se o lead vem errado, o problema começa no anúncio.",
    bullets: [
      "Público certo não compensa criativo fraco.",
      "Criativo forte não salva segmentação ruim.",
    ],
    punchline: "",
  },
  {
    smallTitle: "Atendimento do lead",
    headline: "Se você não responde rápido, seu concorrente te agradece.",
    bullets: [
      "Primeira resposta puxa uma ação.",
      "1 pergunta por mensagem.",
      "Próximo passo claro (agendar, triagem ou orçamento).",
    ],
    punchline: "Velocidade transforma lead em dinheiro.",
    whatsappScript:
      "Oi {{Nome}}, Uander aqui 👍\n\nVi seu interesse em [produto/serviço X] e já separei algumas opções.\n\nMe diz uma coisa:\nisso é algo urgente ou você ainda está avaliando?",
  },
  {
    smallTitle: "Abrindo o gerenciador de anúncios",
    headline: "Vamos criar as campanhas em minutos.",
    bullets: [
      "Destino certo define o tipo de lead.",
      "WhatsApp, Formulário vs LP: depende do cenário.",
      "Filtro transforma quantidade em qualidade.",
      "Criativo puxa a conversa certa.",
    ],
    punchline: "Campanha de lead sem processo, pode ser volume disfarçado de lucro.",
  },
]
