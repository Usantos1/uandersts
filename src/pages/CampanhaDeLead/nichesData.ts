/** Campos do formulário estilo Elementor (exemplo por nicho) */
export interface FormField {
  label: string
  type: "text" | "select"
  placeholder?: string
  options?: string[]
}

export interface NichoModel {
  id: string
  name: string
  questions: FormField[]
}

export const NICHOS: NichoModel[] = [
  {
    id: "assistencia-tecnica",
    name: "Assistência técnica",
    questions: [
      { label: "Qual equipamento ou aparelho precisa de reparo?", type: "text", placeholder: "Ex.: geladeira, ar-condicionado" },
      { label: "Qual sua cidade e bairro?", type: "text", placeholder: "Ex.: Campinas - Cambuí" },
      { label: "Qual a urgência?", type: "select", options: ["Hoje", "Esta semana", "Só orçamento"] },
      { label: "Prefere atendimento por WhatsApp ou ligação?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
  {
    id: "clinica-consultorio",
    name: "Clínica / Consultório",
    questions: [
      { label: "Qual especialidade ou procedimento te interessa?", type: "text", placeholder: "Ex.: dermatologia, check-up" },
      { label: "Prefere agendar para manhã ou tarde?", type: "select", options: ["Manhã", "Tarde"] },
      { label: "É primeira consulta ou retorno?", type: "select", options: ["Primeira consulta", "Retorno"] },
      { label: "Prefere que entremos em contato por WhatsApp ou ligação?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
  {
    id: "escola-curso",
    name: "Escola / Curso",
    questions: [
      { label: "Qual área ou curso te interessa?", type: "text", placeholder: "Ex.: marketing digital, design" },
      { label: "Você já atua na área ou está começando?", type: "select", options: ["Já atuo", "Estou começando"] },
      { label: "Melhor horário para uma conversa?", type: "select", options: ["Manhã", "Tarde"] },
      { label: "Prefere receber material por WhatsApp ou e-mail?", type: "select", options: ["WhatsApp", "E-mail"] },
    ],
  },
  {
    id: "imobiliaria",
    name: "Imobiliária",
    questions: [
      { label: "Está buscando comprar, alugar ou vender?", type: "select", options: ["Comprar", "Alugar", "Vender"] },
      { label: "Qual cidade e bairro de interesse?", type: "text", placeholder: "Ex.: São Paulo - Pinheiros" },
      { label: "Qual faixa de valor ou orçamento?", type: "text", placeholder: "Ex.: até R$ 2.000/mês" },
      { label: "Prefere contato por WhatsApp ou ligação?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
  {
    id: "servicos-gerais",
    name: "Serviços gerais (encanador, eletricista)",
    questions: [
      { label: "Qual tipo de serviço precisa?", type: "text", placeholder: "Ex.: vazamento, instalação" },
      { label: "Qual sua cidade e bairro?", type: "text", placeholder: "Ex.: Campinas - Centro" },
      { label: "Urgência?", type: "select", options: ["Hoje", "Esta semana", "Só orçamento"] },
      { label: "Prefere WhatsApp ou ligação para o orçamento?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
  {
    id: "automoveis",
    name: "Oficina / Automóveis",
    questions: [
      { label: "Qual serviço precisa?", type: "text", placeholder: "Ex.: revisão, funilaria, elétrica" },
      { label: "Qual cidade? O veículo está em condições de ir até a oficina?", type: "text", placeholder: "Ex.: Sim, em Campinas" },
      { label: "Urgência?", type: "select", options: ["Esta semana", "Só orçamento"] },
      { label: "Melhor contato?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
  {
    id: "beleza-estetica",
    name: "Beleza / Estética",
    questions: [
      { label: "Qual procedimento ou tratamento te interessa?", type: "text", placeholder: "Ex.: limpeza de pele, depilação" },
      { label: "Prefere agendar para manhã ou tarde?", type: "select", options: ["Manhã", "Tarde"] },
      { label: "Primeira vez no espaço ou já é cliente?", type: "select", options: ["Primeira vez", "Já sou cliente"] },
      { label: "Contato preferido?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
  {
    id: "advogado-consultoria",
    name: "Advogado / Consultoria",
    questions: [
      { label: "Qual área do seu interesse?", type: "select", options: ["Trabalhista", "Família", "Empresarial", "Outro"] },
      { label: "Sua cidade?", type: "text", placeholder: "Ex.: São Paulo" },
      { label: "Prefere uma ligação ou envio de material por WhatsApp?", type: "select", options: ["Ligação", "WhatsApp"] },
      { label: "Urgência?", type: "select", options: ["Esta semana", "Só tirar dúvidas"] },
    ],
  },
  {
    id: "dentista",
    name: "Dentista / Odontologia",
    questions: [
      { label: "Qual procedimento ou tratamento você precisa?", type: "text", placeholder: "Ex.: clareamento, implante" },
      { label: "Prefere horário de manhã ou tarde?", type: "select", options: ["Manhã", "Tarde"] },
      { label: "Primeira vez na clínica ou retorno?", type: "select", options: ["Primeira vez", "Retorno"] },
      { label: "Melhor forma de contato?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
  {
    id: "personal-treino",
    name: "Personal / Academia",
    questions: [
      { label: "Seu objetivo principal?", type: "select", options: ["Emagrecer", "Ganhar massa", "Condicionamento"] },
      { label: "Prefere treino presencial ou online?", type: "select", options: ["Presencial", "Online"] },
      { label: "Qual melhor período?", type: "select", options: ["Manhã", "Tarde"] },
      { label: "Prefere que eu te chame no WhatsApp ou por ligação?", type: "select", options: ["WhatsApp", "Ligação"] },
    ],
  },
]
