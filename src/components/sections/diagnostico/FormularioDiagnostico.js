import Button from "@/components/ui/Button";

const campos = [
  { name: "nome", label: "Nome", type: "text" },
  { name: "empresa", label: "Empresa", type: "text" },
  { name: "segmento", label: "Segmento", type: "text" },
  { name: "cidade", label: "Cidade", type: "text" },
  { name: "desafio", label: "Principal desafio", type: "textarea" },
  { name: "investimento", label: "Faixa de investimento", type: "text" },
  { name: "whatsapp", label: "WhatsApp", type: "tel" },
];

export default function FormularioDiagnostico() {
  return (
    <form className="mt-8 space-y-4">
      {campos.map((campo) => (
        <div key={campo.name}>
          <label htmlFor={campo.name} className="block text-sm font-medium text-[#202629]">
            {campo.label}
          </label>
          {campo.type === "textarea" ? (
            <textarea
              id={campo.name}
              name={campo.name}
              rows={4}
              className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 focus:border-[#123B46] focus:outline-none"
            />
          ) : (
            <input
              id={campo.name}
              name={campo.name}
              type={campo.type}
              className="mt-1 w-full rounded-lg border border-black/10 px-4 py-2 focus:border-[#123B46] focus:outline-none"
            />
          )}
        </div>
      ))}
      <Button type="submit">Enviar diagnóstico</Button>
    </form>
  );
}
