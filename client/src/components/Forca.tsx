import { useState, useCallback } from "react";
import { ForcaWord } from "../data/meiContent";
import { cn } from "../lib/utils";

interface Props {
  words: ForcaWord[];
}

const MAX_ERRORS = 6;
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/* ── Parte animada do boneco ── */
function AnimatedLine({
  show, x1, y1, x2, y2, strokeWidth = 3, color = "#f97316",
}: {
  show: boolean; x1: number; y1: number; x2: number; y2: number;
  strokeWidth?: number; color?: string;
}) {
  const len = Math.hypot(x2 - x1, y2 - y1);
  return (
    <line
      x1={x1} y1={y1} x2={x2} y2={y2}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      stroke={color}
      style={{
        strokeDasharray: len,
        strokeDashoffset: show ? 0 : len,
        transition: show ? "stroke-dashoffset 0.35s ease-out" : "none",
      }}
    />
  );
}

function AnimatedCircle({ show, cx, cy, r }: { show: boolean; cx: number; cy: number; r: number }) {
  const circ = 2 * Math.PI * r;
  return (
    <circle
      cx={cx} cy={cy} r={r}
      fill="none"
      strokeWidth={3}
      stroke="#f97316"
      style={{
        strokeDasharray: circ,
        strokeDashoffset: show ? 0 : circ,
        transition: show ? "stroke-dashoffset 0.4s ease-out" : "none",
      }}
    />
  );
}

function HangmanSVG({ errors, lost }: { errors: number; lost: boolean }) {
  const bodyColor = lost ? "#ef4444" : "#f97316";
  return (
    <svg viewBox="0 0 220 240" className="w-full h-full" aria-label={`Forca: ${errors} de ${MAX_ERRORS} erros`}>
      {/* ── Estrutura da forca (sempre visível) ── */}
      {/* Base */}
      <line x1="10" y1="230" x2="130" y2="230" strokeWidth="5" strokeLinecap="round" stroke="#9ca3af" />
      {/* Poste vertical */}
      <line x1="50" y1="230" x2="50" y2="15" strokeWidth="5" strokeLinecap="round" stroke="#6b7280" />
      {/* Trave horizontal */}
      <line x1="50" y1="15" x2="150" y2="15" strokeWidth="5" strokeLinecap="round" stroke="#6b7280" />
      {/* Apoio diagonal */}
      <line x1="50" y1="50" x2="80" y2="15" strokeWidth="3" strokeLinecap="round" stroke="#9ca3af" />
      {/* Corda */}
      <line x1="150" y1="15" x2="150" y2="45" strokeWidth="3" strokeLinecap="round" stroke="#9ca3af" />

      {/* ── Boneco (aparece por partes) ── */}
      {/* Cabeça — erro 1 */}
      <AnimatedCircle show={errors >= 1} cx={150} cy={60} r={15} />

      {/* Tronco — erro 2 */}
      <AnimatedLine show={errors >= 2} x1={150} y1={75} x2={150} y2={135} color={bodyColor} />

      {/* Braço esquerdo — erro 3 */}
      <AnimatedLine show={errors >= 3} x1={150} y1={95} x2={118} y2={118} color={bodyColor} />

      {/* Braço direito — erro 4 */}
      <AnimatedLine show={errors >= 4} x1={150} y1={95} x2={182} y2={118} color={bodyColor} />

      {/* Perna esquerda — erro 5 */}
      <AnimatedLine show={errors >= 5} x1={150} y1={135} x2={120} y2={172} color={bodyColor} />

      {/* Perna direita — erro 6 */}
      <AnimatedLine show={errors >= 6} x1={150} y1={135} x2={180} y2={172} color={bodyColor} />

      {/* Rosto triste quando perde */}
      {lost && (
        <>
          <circle cx={144} cy={56} r={2} fill="#ef4444" />
          <circle cx={156} cy={56} r={2} fill="#ef4444" />
          <path d="M144 67 Q150 62 156 67" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        </>
      )}

      {/* Rosto feliz quando está bem (0 erros) */}
      {errors === 0 && (
        <text x="150" y="230" textAnchor="middle" fontSize="13" fill="#d1d5db">
          ↑ adivinhe!
        </text>
      )}
    </svg>
  );
}

export default function Forca({ words }: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);

  const current = words[wordIndex];
  const word = current.word.toUpperCase().replace(/\s/g, "");
  const letters = current.word.toUpperCase().split("");

  const wrong = Array.from(guessed).filter((l) => !word.includes(l));
  const errors = wrong.length;
  const won = letters.filter((l) => l !== " ").every((l) => guessed.has(l));
  const lost = errors >= MAX_ERRORS;
  const gameOver = won || lost;

  const guess = useCallback(
    (letter: string) => {
      if (gameOver || guessed.has(letter)) return;
      setGuessed((prev) => new Set(Array.from(prev).concat(letter)));
    },
    [gameOver, guessed]
  );

  const nextWord = () => {
    setWordIndex((i) => (i + 1) % words.length);
    setGuessed(new Set());
    setShowHint(false);
    setHintUsed(false);
  };

  return (
    <div className="flex flex-col items-center gap-5 max-w-xl mx-auto">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Palavra {wordIndex + 1} / {words.length}
        </span>
        <span className="text-xs bg-secondary px-2 py-1 rounded-full text-secondary-foreground">
          {current.category}
        </span>
      </div>

      {/* Painel principal: forca + letras erradas */}
      <div className={cn(
        "w-full rounded-2xl border-2 transition-colors overflow-hidden",
        lost ? "border-red-200 bg-red-50" : won ? "border-emerald-200 bg-emerald-50" : "border-border bg-white"
      )}>
        <div className="flex gap-0 items-stretch">
          {/* SVG da forca */}
          <div className="flex-1 min-w-0" style={{ height: "200px" }}>
            <HangmanSVG errors={errors} lost={lost} />
          </div>

          {/* Painel direito: erros + letras erradas */}
          <div className="w-28 sm:w-32 flex-shrink-0 border-l border-border/50 flex flex-col items-center justify-center gap-3 p-3 bg-secondary/20">
            {/* Contador */}
            <div className="text-center">
              <p className="text-2xl font-bold leading-none" style={{ color: errors > 0 ? "#ef4444" : "#9ca3af" }}>
                {errors}
              </p>
              <p className="text-[10px] text-muted-foreground leading-tight">
                de {MAX_ERRORS}<br />erros
              </p>
            </div>

            {/* Bolinhas de vida */}
            <div className="grid grid-cols-3 gap-1">
              {Array.from({ length: MAX_ERRORS }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "w-4 h-4 rounded-full transition-all duration-300",
                    i < errors ? "bg-red-400 scale-90" : "bg-gray-200"
                  )}
                />
              ))}
            </div>

            {/* Letras erradas */}
            {wrong.length > 0 && (
              <div className="w-full">
                <p className="text-[9px] text-muted-foreground uppercase tracking-wider text-center mb-1">Erradas</p>
                <div className="flex flex-wrap gap-1 justify-center">
                  {wrong.map((l) => (
                    <span
                      key={l}
                      className="w-5 h-5 flex items-center justify-center rounded text-[10px] font-bold bg-red-100 text-red-500"
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Palavra — cada palavra em grupo nowrap, quebra só entre palavras */}
      <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center">
        {current.word.toUpperCase().split(" ").map((wordPart, wi) => (
          <div key={wi} className="flex gap-1.5 flex-nowrap">
            {wordPart.split("").map((letter, i) => {
              const revealed = guessed.has(letter) || gameOver;
              const letterSize = wordPart.length > 10 ? "w-7 text-base" : "w-9 text-lg";
              return (
                <div
                  key={i}
                  className={cn(
                    "h-11 border-b-2 flex items-end justify-center pb-1 font-bold transition-all duration-200",
                    letterSize,
                    revealed
                  ? won
                    ? "text-emerald-600 border-emerald-400"
                    : lost
                    ? "text-red-500 border-red-300"
                    : "text-primary border-primary"
                  : "border-gray-300 text-transparent"
                  )}
                >
                  {revealed ? letter : "_"}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Dica */}
      <div className="w-full">
        {!showHint ? (
          <button
            onClick={() => { setShowHint(true); setHintUsed(true); }}
            disabled={gameOver}
            className={cn(
              "w-full py-2 px-4 rounded-xl text-sm font-medium border transition-all",
              gameOver
                ? "border-gray-200 text-gray-400 cursor-not-allowed"
                : "border-primary/40 text-primary hover:bg-primary/5 hover:border-primary"
            )}
          >
            💡 Ver dica {hintUsed ? "(já usada)" : ""}
          </button>
        ) : (
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-sm text-orange-800">
            <span className="font-semibold">💡 Dica:</span> {current.hint}
          </div>
        )}
      </div>

      {/* Game over */}
      {gameOver && (
        <div className={cn(
          "w-full rounded-xl p-4 text-center",
          won ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"
        )}>
          {won ? (
            <p className="font-bold text-lg">🎉 Parabéns! Você acertou!</p>
          ) : (
            <>
              <p className="font-bold text-lg">😔 Não foi dessa vez!</p>
              <p className="text-sm mt-1">A palavra era: <strong>{current.word}</strong></p>
            </>
          )}
          <p className="text-sm mt-2 opacity-80">{current.hint}</p>
        </div>
      )}

      {/* Teclado */}
      {!gameOver && (
        <div className="flex flex-wrap gap-1.5 justify-center max-w-sm">
          {ALPHABET.map((letter) => {
            const isGuessed = guessed.has(letter);
            const isWrong = isGuessed && !word.includes(letter);
            const isCorrect = isGuessed && word.includes(letter);
            return (
              <button
                key={letter}
                onClick={() => guess(letter)}
                disabled={isGuessed}
                className={cn(
                  "w-9 h-9 rounded-lg text-sm font-bold transition-all",
                  isWrong && "bg-red-100 text-red-400 cursor-not-allowed",
                  isCorrect && "bg-emerald-100 text-emerald-600 cursor-not-allowed",
                  !isGuessed && "bg-white border border-border hover:border-primary hover:text-primary hover:bg-orange-50 active:scale-95 shadow-sm"
                )}
              >
                {letter}
              </button>
            );
          })}
        </div>
      )}

      {/* Próxima / Pular */}
      <button
        onClick={nextWord}
        className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-md"
      >
        {gameOver ? "Próxima palavra →" : "Pular →"}
      </button>
    </div>
  );
}
