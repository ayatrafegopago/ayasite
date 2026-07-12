import Link from "next/link";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5551982414249"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      aria-label="Falar no WhatsApp"
    >
      WA
    </Link>
  );
}
