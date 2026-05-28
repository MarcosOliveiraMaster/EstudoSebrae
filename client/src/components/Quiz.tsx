import { useState } from "react";
import { QuizQuestion } from "../data/meiContent";
import { cn } from "../lib/utils";

interface Props {
  questions: QuizQuestion[];
}

export default function Quiz({ questions }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = questions[current];
  const answered = selected !== null;

  const handleSelect = (i: number) => {
    if (answered) return;
    setSelected(i);
    const correct = i === q.correctIndex;
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-lg mx-auto text-center space-y-6">
        <div className="text-6xl">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
        <div>
          <h3 className="text-2xl font-bold">Quiz Concluído!</h3>
          <p className="text-muted-foreground mt-1">Você acertou {score} de {questions.length} questões</p>
        </div>

        {/* Score ring */}
        <div className="flex justify-center">
          <div className="relative w-28 h-28">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8" className="text-border" />
              <circle
                cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8"
                strokeDasharray={`${2 * Math.PI * 40 * pct / 100} ${2 * Math.PI * 40 * (1 - pct / 100)}`}
                className={pct >= 80 ? "text-emerald-500" : pct >= 60 ? "text-orange-400" : "text-red-400"}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold">{pct}%</span>
            </div>
          </div>
        </div>

        {/* Answer summary */}
        <div className="flex justify-center gap-2">
          {answers.map((correct, i) => (
            <div key={i} className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white",
              correct ? "bg-emerald-500" : "bg-red-400"
            )}>
              {correct ? "✓" : "✗"}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          {pct >= 80 && <p className="text-emerald-700 font-medium">Excelente! Você domina este módulo. 🎉</p>}
          {pct >= 60 && pct < 80 && <p className="text-orange-700 font-medium">Bom resultado! Revise alguns pontos e tente novamente.</p>}
          {pct < 60 && <p className="text-red-700 font-medium">Revise a explicação e tente novamente. Você consegue!</p>}
        </div>

        <button
          onClick={restart}
          className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {/* Progress */}
      <div className="space-y-1">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>Questão {current + 1} de {questions.length}</span>
          <span>{score} acertos</span>
        </div>
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(current / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
        <p className="font-semibold text-base leading-relaxed">{q.question}</p>
      </div>

      {/* Options */}
      <div className="space-y-3">
        {q.options.map((opt, i) => {
          const isSelected = selected === i;
          const isCorrect = i === q.correctIndex;
          let style = "border-border bg-white hover:border-primary hover:bg-orange-50";
          if (answered) {
            if (isCorrect) style = "border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (isSelected && !isCorrect) style = "border-red-400 bg-red-50 text-red-800";
            else style = "border-border bg-white opacity-50";
          }

          return (
            <button
              key={i}
              onClick={() => handleSelect(i)}
              disabled={answered}
              className={cn(
                "w-full text-left border-2 rounded-xl p-4 text-sm font-medium transition-all",
                style,
                !answered && "active:scale-[0.99]"
              )}
            >
              <span className="font-bold mr-2">{String.fromCharCode(65 + i)}.</span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {answered && (
        <div className={cn(
          "rounded-xl p-4 text-sm",
          selected === q.correctIndex
            ? "bg-emerald-50 border border-emerald-200 text-emerald-800"
            : "bg-amber-50 border border-amber-200 text-amber-800"
        )}>
          <p className="font-semibold mb-1">
            {selected === q.correctIndex ? "✅ Correto!" : "❌ Incorreto"}
          </p>
          <p>{q.explanation}</p>
        </div>
      )}

      {/* Next button */}
      {answered && (
        <button
          onClick={handleNext}
          className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-md active:scale-[0.98]"
        >
          {current + 1 < questions.length ? "Próxima questão →" : "Ver resultado"}
        </button>
      )}
    </div>
  );
}
