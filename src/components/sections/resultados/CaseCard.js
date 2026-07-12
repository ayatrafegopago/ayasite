import Card from "@/components/ui/Card";

export default function CaseCard({ projeto }) {
  return (
    <Card>
      <p className="text-lg font-semibold text-[#123B46]">{projeto.titulo}</p>
      <p className="mt-2 text-sm text-[#202629]/60">{projeto.periodo}</p>
      <p className="mt-4 text-[#202629]/70">{projeto.resultado}</p>
    </Card>
  );
}
