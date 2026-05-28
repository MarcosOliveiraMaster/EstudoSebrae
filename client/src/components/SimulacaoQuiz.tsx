import { useState } from "react";
import { simulacaoQuiz, SimulacaoSecao, SimulacaoPergunta } from "../data/simulacaoData";
import { cn } from "../lib/utils";

type Tela = "menu" | "quiz" | "resultado";

interface Resposta {
  perguntaId: string;
  escolhida: string;
  correta: boolean;
}

/* ── Tela de Menu ── */
function MenuSecoes({ onIniciar }: { onIniciar: (secao: SimulacaoSecao | "todas") => void }) {
  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <div className="text-center space-y-2">
        <p className="text-4xl">🎓</p>
        <h2 className="text-xl font-bold text-foreground">{simulacaoQuiz.titulo}</h2>
        <p className="text-sm text-muted-foreground">{simulacaoQuiz.descricao}</p>
      </div>

      <div className="space-y-3">
        {/* Todas as seções */}
        <button
          onClick={() => onIniciar("todas")}
          className="w-full flex items-center gap-4 p-4 rounded-2xl border-2 border-primary bg-orange-50 hover:bg-orange-100 transition-all text-left group"
        >
          <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-2xl flex-shrink-0">
            🏆
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-primary">Simulação Completa</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {simulacaoQuiz.secoes.reduce((acc, s) => acc + s.perguntas.length, 0)} questões · todas as seções
            </p>
          </div>
          <span className="text-primary text-lg group-hover:translate-x-1 transition-transform">→</span>
        </button>

        {/* Por seção */}
        {simulacaoQuiz.secoes.map((secao, i) => (
          <button
            key={secao.id}
            onClick={() => onIniciar(secao)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl border border-border bg-white hover:border-primary/40 hover:bg-orange-50/50 transition-all text-left group"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-xl font-bold text-primary flex-shrink-0">
              S{i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">{secao.titulo}</p>
              <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{secao.descricao}</p>
              <p className="text-xs text-primary font-medium mt-1">{secao.perguntas.length} questões</p>
            </div>
            <span className="text-muted-foreground group-hover:text-primary text-lg group-hover:translate-x-1 transition-all">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Card de Pergunta ── */
function CardPergunta({
  pergunta,
  numero,
  total,
  onResponder,
  respondida,
}: {
  pergunta: SimulacaoPergunta;
  numero: number;
  total: number;
  onResponder: (letra: string) => void;
  respondida: Resposta | null;
}) {
  const letras = Object.keys(pergunta.alternativas) as string[];

  return (
    <div className="space-y-5">
      {/* Progresso */}
      <div className="space-y-1.5">
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>Questão {numero} de {total}</span>
          {respondida && (
            <span className={cn("font-semibold", respondida.correta ? "text-emerald-600" : "text-red-500")}>
              {respondida.correta ? "✓ Correta" : "✗ Incorreta"}
            </span>
          )}
        </div>
        <div className="w-full bg-secondary rounded-full h-1.5">
          <div
            className="bg-primary h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${(numero / total) * 100}%` }}
          />
        </div>
      </div>

      {/* Situação */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <p className="text-[11px] font-bold text-blue-500 uppercase tracking-wider mb-1.5">📋 Situação</p>
        <p className="text-sm text-blue-900 leading-relaxed">{pergunta.situacao}</p>
      </div>

      {/* Pergunta */}
      <div className="bg-white border border-border rounded-xl p-4 shadow-sm">
        <p className="font-semibold text-base leading-relaxed text-foreground">{pergunta.pergunta}</p>
      </div>

      {/* Alternativas */}
      <div className="space-y-2.5">
        {letras.map((letra) => {
          const texto = pergunta.alternativas[letra];
          const isEscolhida = respondida?.escolhida === letra;
          const isCorreta = letra === pergunta.resposta_correta;

          let estilo = "border-border bg-white hover:border-primary/50 hover:bg-orange-50/50";
          let badge = "";

          if (respondida) {
            if (isCorreta) {
              estilo = "border-emerald-400 bg-emerald-50";
              badge = "✓ Correta";
            } else if (isEscolhida && !isCorreta) {
              estilo = "border-red-400 bg-red-50";
              badge = "✗ Sua resposta";
            } else {
              estilo = "border-border bg-white opacity-45";
            }
          }

          return (
            <button
              key={letra}
              onClick={() => !respondida && onResponder(letra)}
              disabled={!!respondida}
              className={cn(
                "w-full flex gap-3 items-start border-2 rounded-xl p-3.5 text-left transition-all",
                estilo,
                !respondida && "active:scale-[0.99]"
              )}
            >
              <span
                className={cn(
                  "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5",
                  respondida
                    ? isCorreta
                      ? "bg-emerald-500 text-white"
                      : isEscolhida
                      ? "bg-red-400 text-white"
                      : "bg-secondary text-muted-foreground"
                    : "bg-secondary text-foreground"
                )}
              >
                {letra}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm leading-relaxed text-foreground">{texto}</p>
                {badge && (
                  <p className={cn("text-xs font-semibold mt-1", isCorreta ? "text-emerald-600" : "text-red-500")}>
                    {badge}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explicação */}
      {respondida && (
        <div
          className={cn(
            "rounded-xl p-4 border",
            respondida.correta
              ? "bg-emerald-50 border-emerald-200"
              : "bg-amber-50 border-amber-200"
          )}
        >
          <p className={cn("text-xs font-bold uppercase tracking-wider mb-2", respondida.correta ? "text-emerald-700" : "text-amber-700")}>
            💬 Comentário da questão
          </p>
          <p className={cn("text-sm leading-relaxed", respondida.correta ? "text-emerald-900" : "text-amber-900")}>
            {pergunta.explicacao}
          </p>
        </div>
      )}
    </div>
  );
}

/* ── Tela de Resultado ── */
function Resultado({
  perguntas,
  respostas,
  tituloSecao,
  onReiniciar,
  onMenu,
}: {
  perguntas: SimulacaoPergunta[];
  respostas: Resposta[];
  tituloSecao: string;
  onReiniciar: () => void;
  onMenu: () => void;
}) {
  const [detalheAberto, setDetalheAberto] = useState<string | null>(null);
  const acertos = respostas.filter((r) => r.correta).length;
  const total = perguntas.length;
  const pct = Math.round((acertos / total) * 100);

  const emoji = pct >= 90 ? "🏆" : pct >= 70 ? "🎯" : pct >= 50 ? "📚" : "💪";
  const msg =
    pct >= 90
      ? "Excelente! Domínio completo do conteúdo."
      : pct >= 70
      ? "Bom resultado! Revise os pontos em que errou."
      : pct >= 50
      ? "Continue estudando — você está no caminho certo."
      : "Revise os módulos e tente novamente. Você consegue!";

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Placar */}
      <div className="bg-white border border-border rounded-2xl p-6 text-center shadow-sm space-y-4">
        <div className="text-5xl">{emoji}</div>
        <div>
          <h3 className="text-xl font-bold">{tituloSecao}</h3>
          <p className="text-muted-foreground text-sm mt-1">Simulação concluída</p>
        </div>

        {/* Anel de progresso */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
              <circle
                cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 40 * pct / 100} ${2 * Math.PI * 40}`}
                className={pct >= 70 ? "text-emerald-500" : pct >= 50 ? "text-orange-400" : "text-red-400"}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold leading-none">{pct}%</span>
              <span className="text-xs text-muted-foreground">{acertos}/{total}</span>
            </div>
          </div>
        </div>

        <p className={cn("text-sm font-medium", pct >= 70 ? "text-emerald-700" : pct >= 50 ? "text-orange-600" : "text-red-600")}>
          {msg}
        </p>

        {/* Grid de acertos */}
        <div className="flex flex-wrap justify-center gap-1.5 pt-2">
          {respostas.map((r, i) => (
            <button
              key={r.perguntaId}
              onClick={() => setDetalheAberto(detalheAberto === r.perguntaId ? null : r.perguntaId)}
              className={cn(
                "w-9 h-9 rounded-lg text-xs font-bold text-white transition-all hover:scale-110",
                r.correta ? "bg-emerald-500" : "bg-red-400"
              )}
              title={`Q${i + 1}: ${r.correta ? "Correta" : "Incorreta"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <p className="text-[11px] text-muted-foreground">Clique em um número para ver a questão</p>
      </div>

      {/* Revisão por questão */}
      {respostas.map((resp, i) => {
        const perg = perguntas[i];
        const aberto = detalheAberto === resp.perguntaId;
        return (
          <div key={resp.perguntaId} className={cn("border rounded-xl overflow-hidden transition-all", resp.correta ? "border-emerald-200" : "border-red-200")}>
            <button
              onClick={() => setDetalheAberto(aberto ? null : resp.perguntaId)}
              className={cn("w-full flex items-center gap-3 p-3.5 text-left", resp.correta ? "bg-emerald-50" : "bg-red-50")}
            >
              <span className={cn("w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white flex-shrink-0", resp.correta ? "bg-emerald-500" : "bg-red-400")}>
                {i + 1}
              </span>
              <p className="text-sm font-medium flex-1 line-clamp-1 text-foreground">{perg.pergunta}</p>
              <span className={cn("text-sm flex-shrink-0 transition-transform", aberto && "rotate-180")}>▾</span>
            </button>

            {aberto && (
              <div className="p-4 bg-white border-t border-border space-y-3">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                  <p className="text-xs text-blue-600 font-semibold mb-1">📋 Situação</p>
                  <p className="text-xs text-blue-900 leading-relaxed">{perg.situacao}</p>
                </div>
                <div className="space-y-1.5">
                  {(Object.keys(perg.alternativas) as string[]).map((letra) => {
                    const isCorreta = letra === perg.resposta_correta;
                    const isEscolhida = resp.escolhida === letra;
                    return (
                      <div key={letra} className={cn("flex gap-2 p-2.5 rounded-lg text-xs",
                        isCorreta ? "bg-emerald-50 border border-emerald-200" : isEscolhida ? "bg-red-50 border border-red-200" : "bg-secondary/40"
                      )}>
                        <span className={cn("w-5 h-5 rounded flex items-center justify-center font-bold flex-shrink-0 text-[10px]",
                          isCorreta ? "bg-emerald-500 text-white" : isEscolhida ? "bg-red-400 text-white" : "bg-secondary text-muted-foreground"
                        )}>{letra}</span>
                        <span className={cn(isCorreta ? "text-emerald-900" : isEscolhida ? "text-red-800" : "text-muted-foreground")}>
                          {perg.alternativas[letra]}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <p className="text-xs font-bold text-amber-700 mb-1">💬 Comentário</p>
                  <p className="text-xs text-amber-900 leading-relaxed">{perg.explicacao}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Ações */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={onMenu}
          className="py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-orange-50 transition-all"
        >
          ← Menu
        </button>
        <button
          onClick={onReiniciar}
          className="py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

/* ── Componente Principal ── */
export default function SimulacaoQuizPage() {
  const [tela, setTela] = useState<Tela>("menu");
  const [secaoAtiva, setSecaoAtiva] = useState<SimulacaoSecao | null>(null);
  const [perguntas, setPerguntas] = useState<SimulacaoPergunta[]>([]);
  const [indice, setIndice] = useState(0);
  const [respostas, setRespostas] = useState<Resposta[]>([]);
  const [respondidaAtual, setRespondidaAtual] = useState<Resposta | null>(null);

  const iniciar = (secao: SimulacaoSecao | "todas") => {
    const lista =
      secao === "todas"
        ? simulacaoQuiz.secoes.flatMap((s) => s.perguntas)
        : secao.perguntas;
    setPerguntas(lista);
    setSecaoAtiva(secao === "todas" ? null : secao);
    setIndice(0);
    setRespostas([]);
    setRespondidaAtual(null);
    setTela("quiz");
  };

  const responder = (letra: string) => {
    const perg = perguntas[indice];
    const correta = letra === perg.resposta_correta;
    const resp: Resposta = { perguntaId: perg.id, escolhida: letra, correta };
    setRespondidaAtual(resp);
    setRespostas((prev) => [...prev, resp]);
  };

  const avancar = () => {
    if (indice + 1 < perguntas.length) {
      setIndice((i) => i + 1);
      setRespondidaAtual(null);
    } else {
      setTela("resultado");
    }
  };

  const reiniciar = () => {
    setIndice(0);
    setRespostas([]);
    setRespondidaAtual(null);
    setTela("quiz");
  };

  return (
    <div className="space-y-6">
      {tela === "menu" && <MenuSecoes onIniciar={iniciar} />}

      {tela === "quiz" && perguntas[indice] && (
        <div className="max-w-2xl mx-auto space-y-4">
          <CardPergunta
            pergunta={perguntas[indice]}
            numero={indice + 1}
            total={perguntas.length}
            onResponder={responder}
            respondida={respondidaAtual}
          />
          {respondidaAtual && (
            <button
              onClick={avancar}
              className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
            >
              {indice + 1 < perguntas.length ? "Próxima questão →" : "Ver resultado →"}
            </button>
          )}
        </div>
      )}

      {tela === "resultado" && (
        <Resultado
          perguntas={perguntas}
          respostas={respostas}
          tituloSecao={secaoAtiva ? secaoAtiva.titulo : "Simulação Completa"}
          onReiniciar={reiniciar}
          onMenu={() => setTela("menu")}
        />
      )}
    </div>
  );
}
