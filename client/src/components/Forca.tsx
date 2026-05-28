import { useState, useCallback } from "react";
import { ForcaWord } from "../data/meiContent";
import { cn } from "../lib/utils";

interface Props {
  words: ForcaWord[];
}

const MAX_ERRORS = 6;

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function HangmanSVG({ errors }: { errors: number }) {
  return (
    <svg viewBox="0 0 200 220" className="w-44 h-44 mx-auto" aria-label={`Forca com ${errors} erros`}>
      {/* Base */}
      <line x1="20" y1="210" x2="180" y2="210" strokeWidth="4" strokeLinecap="round" stroke="currentColor" className="text-gray-400" />
      {/* Pole */}
      {errors >= 1 && <line x1="60" y1="210" x2="60" y2="20" strokeWidth="4" strokeLinecap="round" stroke="currentColor" className="text-gray-600" />}
      {/* Top bar */}
      {errors >= 1 && <line x1="60" y1="20" x2="140" y2="20" strokeWidth="4" strokeLinecap="round" stroke="currentColor" className="text-gray-600" />}
      {/* Rope */}
      {errors >= 1 && <line x1="140" y1="20" x2="140" y2="50" strokeWidth="3" strokeLinecap="round" stroke="currentColor" className="text-gray-500" />}
      {/* Head */}
      {errors >= 2 && <circle cx="140" cy="65" r="15" fill="none" strokeWidth="3" stroke="currentColor" className="text-orange-500" />}
      {/* Body */}
      {errors >= 3 && <line x1="140" y1="80" x2="140" y2="140" strokeWidth="3" strokeLinecap="round" stroke="currentColor" className="text-orange-500" />}
      {/* Left arm */}
      {errors >= 4 && <line x1="140" y1="100" x2="110" y2="125" strokeWidth="3" strokeLinecap="round" stroke="currentColor" className="text-orange-500" />}
      {/* Right arm */}
      {errors >= 4 && <line x1="140" y1="100" x2="170" y2="125" strokeWidth="3" strokeLinecap="round" stroke="currentColor" className="text-orange-500" />}
      {/* Left leg */}
      {errors >= 5 && <line x1="140" y1="140" x2="110" y2="175" strokeWidth="3" strokeLinecap="round" stroke="currentColor" className="text-orange-500" />}
      {/* Right leg */}
      {errors >= 6 && <line x1="140" y1="140" x2="170" y2="175" strokeWidth="3" strokeLinecap="round" stroke="currentColor" className="text-orange-500" />}
    </svg>
  );
}

export default function Forca({ words }: Props) {
  const [wordIndex, setWordIndex] = useState(0);
  const [guessed, setGuessed] = useState<Set<string>>(new Set());
  const [showHint, setShowHint] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);

  const current = words[wordIndex];
  const word = current.word.replace(/\s/g, "");
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

  const revealHint = () => {
    setShowHint(true);
    setHintUsed(true);
  };

  return (
    <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
      {/* Header */}
      <div className="w-full flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Palavra {wordIndex + 1} / {words.length}
        </div>
        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
          {current.category}
        </span>
      </div>

      {/* Hangman drawing */}
      <div className={cn("rounded-2xl p-4 bg-secondary/40 w-full", lost && "bg-red-50")}>
        <HangmanSVG errors={errors} />
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({ length: MAX_ERRORS }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                i < errors ? "bg-red-400" : "bg-gray-200"
              )}
            />
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground mt-1">
          {errors} / {MAX_ERRORS} erros
        </p>
      </div>

      {/* Word display */}
      <div className="flex flex-wrap gap-2 justify-center">
        {current.word.toUpperCase().split("").map((letter, i) => {
          if (letter === " ") return <div key={i} className="w-4" />;
          const revealed = guessed.has(letter) || gameOver;
          return (
            <div
              key={i}
              className={cn(
                "w-9 h-11 border-b-2 flex items-end justify-center pb-1 text-lg font-bold transition-all",
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

      {/* Hint section */}
      <div className="w-full">
        {!showHint ? (
          <button
            onClick={revealHint}
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

      {/* Game over message */}
      {gameOver && (
        <div
          className={cn(
            "w-full rounded-xl p-4 text-center",
            won ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-800"
          )}
        >
          {won ? (
            <p className="font-bold text-lg">🎉 Parabéns! Você acertou!</p>
          ) : (
            <>
              <p className="font-bold text-lg">😔 Não foi dessa vez!</p>
              <p className="text-sm mt-1">
                A palavra era: <strong>{current.word}</strong>
              </p>
            </>
          )}
          <p className="text-sm mt-2 opacity-80">{current.hint}</p>
        </div>
      )}

      {/* Keyboard */}
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

      {/* Next / Play again */}
      <button
        onClick={nextWord}
        className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all active:scale-[0.98] shadow-md"
      >
        {gameOver ? "Próxima palavra →" : "Pular →"}
      </button>
    </div>
  );
}
