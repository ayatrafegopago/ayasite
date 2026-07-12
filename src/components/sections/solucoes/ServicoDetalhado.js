import Card from "@/components/ui/Card";

export default function ServicoDetalhado({ servico }) {
  return (
    <Card>
      <p className="text-lg font-semibold text-[#123B46]">{servico.titulo}</p>
      <p className="mt-2 text-[#202629]/70">Conteúdo em construção.</p>
    </Card>
  );
}
