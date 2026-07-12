export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl border border-black/10 bg-white p-6 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
