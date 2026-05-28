import { useState } from "react";
import { GlossarioTerm } from "../data/meiContent";

interface Props {
  terms: GlossarioTerm[];
}

export default function Glossario({ terms }: Props) {
  const [search, setSearch] = useState("");

  const filtered = terms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full space-y-4">
      <input
        type="search"
        placeholder="Buscar termo..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-sm"
      />

      {filtered.length === 0 ? (
        <p className="text-muted-foreground text-sm text-center py-8">Nenhum termo encontrado.</p>
      ) : (
        <div className="space-y-3">
          {filtered.map((t, i) => (
            <div key={i} className="bg-white border border-border rounded-xl p-4 hover:border-primary/40 transition-colors">
              <div className="flex items-start gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {t.term[0]}
                </span>
                <div>
                  <h4 className="font-bold text-primary">{t.term}</h4>
                  <p className="text-sm text-foreground/80 mt-0.5 leading-relaxed">{t.definition}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
