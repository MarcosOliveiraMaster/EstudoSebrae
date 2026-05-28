import { useState } from "react";
import { CronogramaStep } from "../data/meiContent";
import { cn } from "../lib/utils";

interface Props {
  steps: CronogramaStep[];
}

const statusLabel = {
  required: { label: "Obrigatório", class: "bg-orange-100 text-orange-700" },
  optional: { label: "Opcional", class: "bg-gray-100 text-gray-600" },
  result: { label: "Resultado", class: "bg-emerald-100 text-emerald-700" },
};

export default function Cronograma({ steps }: Props) {
  const [openStep, setOpenStep] = useState<number | null>(0);

  return (
    <div className="max-w-2xl space-y-0">
      {steps.map((step, i) => {
        const isOpen = openStep === i;
        const isLast = i === steps.length - 1;
        const status = statusLabel[step.status];

        return (
          <div key={i} className="flex gap-4">
            {/* Timeline line + circle */}
            <div className="flex flex-col items-center flex-shrink-0">
              <button
                onClick={() => setOpenStep(isOpen ? null : i)}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-200 shadow-sm z-10",
                  isOpen
                    ? "bg-primary text-white scale-110 shadow-md"
                    : "bg-white text-primary border-2 border-primary/40 hover:border-primary"
                )}
              >
                {step.icon}
              </button>
              {!isLast && (
                <div className={cn("w-0.5 flex-1 min-h-[1.5rem] transition-all", isOpen ? "bg-primary/40" : "bg-border")} />
              )}
            </div>

            {/* Content */}
            <div className={cn("pb-6 flex-1", isLast && "pb-0")}>
              <button
                onClick={() => setOpenStep(isOpen ? null : i)}
                className="w-full text-left group"
              >
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Etapa {step.step}
                  </span>
                  <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", status.class)}>
                    {status.label}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <h3 className={cn(
                    "font-semibold text-base transition-colors",
                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
                  )}>
                    {step.title}
                  </h3>
                  <span className={cn("text-muted-foreground transition-transform duration-200 flex-shrink-0", isOpen && "rotate-180")}>
                    ▾
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-0.5">{step.description}</p>
              </button>

              {/* Expanded details */}
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                isOpen ? "max-h-96 opacity-100 mt-3" : "max-h-0 opacity-0"
              )}>
                <div className="bg-secondary/50 rounded-xl p-4 space-y-2 border border-border">
                  {step.details.map((detail, j) => (
                    <div key={j} className="flex gap-2 items-start text-sm">
                      <span className="text-primary font-bold mt-0.5 flex-shrink-0">→</span>
                      <span className="text-foreground/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
