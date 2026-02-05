const WHATSAPP_NUMBER = "5519991979912"

function wa(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/** Links rastreáveis: cada botão tem mensagem específica para identificar origem/interesse */
export const LINKS = {
  whatsapp: wa("Olá, vim pelo site @uandersts e preciso de mais informações"),
  consultoria: wa("Olá, venho do Instagram @uandersts e preciso saber mais sobre diagnóstico para assistência."),
  whatsapp_agente: wa("Olá, venho do Instagram @uandersts e quero testar um agente de IA"),
  whatsapp_gestao: wa("Olá, venho do Instagram @uandersts e quero saber mais sobre gestão e processos."),
  crm: "https://ativacrm.com",
  assistencia: "https://primecamp.com.br",
  gestao: "https://primecamp.cloud",
  instagram: "https://instagram.com/uandersts",
  youtube: "https://www.youtube.com/@Uandersts",
  linkedin: "https://linkedin.com/in/uandersts",
  email: "mailto:contato@uandersts.com",
}
