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
    headline: "Você está comprando lead… ou pagando curioso pra te chamar?",
    bullets: [
      "O Meta não entrega cliente. Entrega comportamento.",
      "Se você otimiza errado, paga por lead curioso.",
      "Hoje você sai com: objetivo certo + filtro + criativo que puxa lead bom.",
    ],
    punchline: "Lead barato sem filtro = volume disfarçado de prejuízo.",
  },
  {
    smallTitle: "Passo 1",
    headline: "O objetivo que você escolhe decide QUEM o Meta te entrega.",
    bullets: [
      "Campanha de lead não é captar. É selecionar.",
      "Objetivo errado cria volume e mata qualidade.",
      "A campanha tem que otimizar para: resposta + intenção.",
    ],
    punchline: "Se o lead não responde, o erro começou aqui.",
  },
  {
    smallTitle: "",
    headline: "Modelo de formulário de qualificação na Comunidade",
    bullets: [
      "Na comunidade Extremo Plus: aula passo a passo para baixar e importar o modelo de formulário na sua página",
      "Modelo pronto para Elementor, ideal para qualificar leads antes do contato",
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
      "Se o lead vem errado, o problema começa no anúncio.",
    ],
    punchline: "",
  },
  {
    smallTitle: "Atendimento do lead",
    headline: "Se você não responde rápido, seu concorrente te agradece.",
    bullets: [
      "Primeira resposta puxa uma ação",
      "1 pergunta por mensagem",
      "Próximo passo claro (agendar / triagem / orçamento)",
    ],
    punchline: "Velocidade transforma lead em dinheiro.",
    whatsappScript:
      "Oi {{Nome}}! Aqui é o Uander. Você preencheu o formulário no nosso site ou anúncio sobre [produto/serviço X], e eu estou aqui pra te ajudar a encontrar a melhor opção. Posso te mandar mais informações ou agendar um horário. O que fizer mais sentido pra você agora?",
  },
  {
    smallTitle: "Abrindo o gerenciador de anúncios...",
    headline: "O plano prático em 20 minutos",
    bullets: [
      "Objetivo certo define o tipo de lead",
      "Formulário vs LP depende do cenário",
      "Filtro transforma quantidade em qualidade",
      "Criativo puxa a conversa certa",
    ],
    punchline: "Campanha de lead sem processo, pode ser volume disfarçado de lucro.",
  },
]
