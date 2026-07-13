"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqvzwjg";

const campos = [
  { name: "nome", label: "Nome", type: "text", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "whatsapp", label: "WhatsApp", type: "tel", required: true },
  {
    name: "tipo_negocio",
    label: "Tipo de negócio",
    type: "select",
    options: ["Negócio local", "Prestador de serviço"],
  },
  {
    name: "redes_atuais",
    label: "Site ou redes sociais atuais",
    type: "text",
    required: false,
  },
  {
    name: "investe_anuncios",
    label: "Já investe em anúncios hoje?",
    type: "select",
    options: ["Sim", "Não"],
  },
  {
    name: "desafio",
    label: "Qual o maior desafio do seu negócio hoje?",
    type: "textarea",
    required: true,
  },
];

const fieldClass =
  "mt-1 w-full rounded-lg border border-black/5 bg-[#FFFDFC] px-4 py-2 text-[#202629] placeholder:text-[#202629]/40 focus:outline-none focus:ring-2 focus:ring-[#E7664C]";

export default function FormularioDiagnostico() {
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-[#E3D3B4]/30 bg-[#E3D3B4]/10 px-6 py-12 text-center">
        <p className="text-lg font-semibold text-[#FFFDFC]">
          Recebemos suas informações! Em breve entraremos em contato.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {campos.map((campo) => (
        <div key={campo.name}>
          <label htmlFor={campo.name} className="block text-sm font-medium text-[#E3D3B4]">
            {campo.label}
            {campo.required && <span className="text-[#E7664C]"> *</span>}
          </label>

          {campo.type === "textarea" ? (
            <textarea
              id={campo.name}
              name={campo.name}
              rows={4}
              required={campo.required}
              className={fieldClass}
            />
          ) : campo.type === "select" ? (
            <select
              id={campo.name}
              name={campo.name}
              required={campo.required}
              defaultValue=""
              className={fieldClass}
            >
              <option value="" disabled>
                Selecione
              </option>
              {campo.options.map((opcao) => (
                <option key={opcao} value={opcao}>
                  {opcao}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={campo.name}
              name={campo.name}
              type={campo.type}
              required={campo.required}
              className={fieldClass}
            />
          )}
        </div>
      ))}

      {status === "error" && (
        <p className="text-sm text-[#E7664C]">
          Não foi possível enviar agora. Tente novamente ou fale direto pelo
          WhatsApp.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        disabled={status === "submitting"}
        className="w-full disabled:opacity-60"
      >
        {status === "submitting" ? "Enviando..." : "Enviar diagnóstico"}
      </Button>
    </form>
  );
}
