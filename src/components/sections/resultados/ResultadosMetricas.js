import AnimatedSection, { AnimatedTitle } from "@/components/ui/AnimatedSection";
import Accordion from "@/components/ui/Accordion";

const metricas = [
  {
    pergunta: "CTR, taxa de cliques",
    resposta:
      "Mostra quantas pessoas clicaram depois de visualizar o anúncio. Ajuda a avaliar se o criativo, a copy e a oferta despertam interesse no público alcançado.",
  },
  {
    pergunta: "CPC, custo por clique",
    resposta:
      "Indica quanto foi investido, em média, para levar uma pessoa até a página, o perfil ou o canal de atendimento. Ajuda a comparar a eficiência entre anúncios e públicos.",
  },
  {
    pergunta: "Taxa de conversão",
    resposta:
      "Mostra quantas pessoas realizaram a ação desejada depois do clique, como preencher um formulário, chamar no WhatsApp, solicitar um orçamento ou fazer uma compra.",
  },
  {
    pergunta: "CPA, custo por resultado",
    resposta:
      "Indica quanto custa gerar o resultado definido para a campanha. Esse resultado pode ser um contato, um cadastro, um agendamento ou uma venda.",
  },
  {
    pergunta: "Alcance e frequência",
    resposta:
      "O alcance mostra quantas pessoas diferentes visualizaram os anúncios. A frequência indica quantas vezes, em média, cada pessoa foi impactada. Esses dados ajudam a identificar quando o público está sendo pouco alcançado ou começando a demonstrar sinais de saturação.",
  },
  {
    pergunta: "CPM, custo por mil impressões",
    resposta:
      "Mostra quanto custa exibir os anúncios mil vezes. Ajuda a compreender o nível de concorrência pelo público e as variações de custo ao longo da campanha.",
  },
  {
    pergunta: "ROAS, retorno sobre o investimento em anúncios",
    resposta:
      "Indica quanto foi gerado em receita para cada real investido em mídia. Essa análise é utilizada quando o negócio possui estrutura para acompanhar vendas e valores gerados pelas campanhas.",
  },
];

export default function ResultadosMetricas() {
  const items = metricas.map((m) => ({ title: m.pergunta, description: m.resposta }));

  return (
    <AnimatedSection className="px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <AnimatedTitle className="text-2xl font-bold text-[#123B46] sm:text-3xl">
          As métricas que orientam as decisões
        </AnimatedTitle>
        <p className="mt-4 text-[#202629]/80">
          A métrica mais importante depende do objetivo da campanha. Uma ação
          voltada para reconhecimento exige uma leitura diferente de uma
          campanha criada para gerar mensagens, agendamentos ou vendas. Por
          isso, os números são analisados em conjunto, considerando o
          contexto e o resultado esperado pelo negócio.
        </p>

        <Accordion
          items={items}
          stagger
          containerClassName="mt-8 divide-y divide-[#123B46]/10 border-t border-b border-[#123B46]/10"
          titleClassName="font-semibold text-[#123B46]"
          descriptionClassName="pb-5 text-[#202629]/70"
          chevronClassName="shrink-0 text-[#E7664C]"
        />

        <div className="mt-10">
          <h3 className="font-bold text-[#123B46]">Qualidade dos contatos</h3>
          <p className="mt-2 text-[#202629]/80">
            Cliques e formulários sozinhos não mostram toda a história.
            Sempre que possível, também analisamos quantos contatos
            responderam, tinham o perfil desejado, agendaram ou avançaram na
            decisão de compra.
          </p>
        </div>
      </div>
    </AnimatedSection>
  );
}
