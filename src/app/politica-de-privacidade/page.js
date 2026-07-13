import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";

export const metadata = {
  title: "Política de Privacidade | Aya Tráfego Pago",
};

const secoes = [
  {
    titulo: "1. Quem somos",
    texto:
      "Este site é operado por Amanda Leal, responsável pela Aya Tráfego Pago, com atendimento pelo e-mail ayatrafegopago@gmail.com.",
  },
  {
    titulo: "2. Quais dados coletamos",
    texto:
      "Coletamos as informações fornecidas voluntariamente por você ao preencher o formulário de diagnóstico: nome, e-mail, WhatsApp, tipo de negócio, redes sociais/site atual e informações sobre seu momento de marketing.",
  },
  {
    titulo: "3. Para que usamos seus dados",
    texto:
      "Utilizamos essas informações exclusivamente para entrar em contato, entender seu negócio e apresentar uma proposta de diagnóstico ou serviço. Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing de outras empresas.",
  },
  {
    titulo: "4. Com quem compartilhamos",
    texto:
      "As respostas do formulário são processadas pela plataforma Formspree, utilizada exclusivamente para envio seguro das mensagens ao nosso e-mail.",
  },
  {
    titulo: "5. Seus direitos (LGPD)",
    texto:
      "De acordo com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem direito a confirmar a existência de tratamento de dados, acessar, corrigir, solicitar a exclusão dos seus dados e revogar seu consentimento a qualquer momento, entrando em contato pelo e-mail ayatrafegopago@gmail.com.",
  },
  {
    titulo: "6. Cookies",
    texto:
      "Este site pode utilizar cookies para melhorar sua experiência de navegação. Você pode desativar cookies nas configurações do seu navegador a qualquer momento.",
  },
  {
    titulo: "7. Alterações nesta política",
    texto:
      "Esta política pode ser atualizada periodicamente. Recomendamos revisá-la de tempos em tempos.",
  },
  {
    titulo: "8. Contato",
    texto: "Dúvidas sobre esta política podem ser enviadas para ayatrafegopago@gmail.com.",
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <AnimatedSection className="bg-[#FFFDFC] px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <AnimatedTitle as="h1" className="text-3xl font-bold text-[#123B46] sm:text-4xl">
          Política de Privacidade
        </AnimatedTitle>

        <div className="mt-10 space-y-10">
          {secoes.map((secao) => (
            <div key={secao.titulo}>
              <h2 className="text-lg font-bold text-[#123B46] sm:text-xl">
                {secao.titulo}
              </h2>
              <p className="mt-2 text-[#202629]/80">{secao.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
