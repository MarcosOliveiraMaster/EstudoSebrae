import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-4">
        <p className="text-6xl">🔍</p>
        <h1 className="text-2xl font-bold">Página não encontrada</h1>
        <Link href="/" className="text-primary underline">Voltar ao início</Link>
      </div>
    </div>
  );
}
