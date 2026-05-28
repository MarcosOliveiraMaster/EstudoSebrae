import { useState } from "react";
import { modules, Module } from "../data/meiContent";
import Explicacao from "../components/Explicacao";
import Cronograma from "../components/Cronograma";
import Forca from "../components/Forca";
import Quiz from "../components/Quiz";
import Glossario from "../components/Glossario";
import { cn } from "../lib/utils";

type Tab = "explicacao" | "cronograma" | "forca" | "quiz" | "glossario";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "explicacao", label: "Explicação", icon: "📖" },
  { id: "cronograma", label: "Cronograma", icon: "🗓️" },
  { id: "forca", label: "Forca", icon: "🎯" },
  { id: "quiz", label: "Quiz", icon: "🧠" },
  { id: "glossario", label: "Glossário", icon: "📚" },
];

export default function Home() {
  const [activeModule, setActiveModule] = useState<Module>(modules[0]);
  const [activeTab, setActiveTab] = useState<Tab>("explicacao");

  const switchModule = (mod: Module) => {
    setActiveModule(mod);
    setActiveTab("explicacao");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="bg-primary shadow-md sticky top-0 z-50">
        <div className="container py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-xl">
              🎓
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-tight font-[Poppins]">
                Master Educação
              </h1>
              <p className="text-white/70 text-xs">MEI — Microempreendedor Individual</p>
            </div>
          </div>
          <span className="text-white/60 text-xs hidden sm:block font-medium">SEBRAE</span>
        </div>
      </header>

      {/* Module selector */}
      <div className="bg-white border-b border-border shadow-sm">
        <div className="container py-3">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {modules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => switchModule(mod)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all flex-shrink-0",
                  activeModule.id === mod.id
                    ? "bg-primary text-white shadow-md scale-[1.02]"
                    : "bg-secondary text-foreground/70 hover:bg-orange-50 hover:text-primary"
                )}
              >
                <span>{mod.icon}</span>
                <span className="hidden sm:inline">{mod.title} — </span>
                <span>{mod.subtitle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab bar */}
      <div className="bg-white border-b border-border">
        <div className="container">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap flex-shrink-0",
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                )}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-primary to-orange-400 text-white">
        <div className="container py-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl">{activeModule.icon}</div>
            <div>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                {activeModule.title}
              </p>
              <h2 className="text-xl font-bold font-[Poppins] leading-tight">
                {activeModule.subtitle}
              </h2>
              <p className="text-white/80 text-sm mt-1">
                {activeTab === "explicacao" && "Conteúdo teórico detalhado"}
                {activeTab === "cronograma" && "Passo a passo visual"}
                {activeTab === "forca" && "Jogo da forca — teste seus conhecimentos"}
                {activeTab === "quiz" && "Quiz interativo — 5 questões"}
                {activeTab === "glossario" && "Termos e definições do módulo"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1 container py-8">
        {activeTab === "explicacao" && (
          <Explicacao sections={activeModule.explanation} />
        )}
        {activeTab === "cronograma" && (
          <Cronograma steps={activeModule.cronograma} />
        )}
        {activeTab === "forca" && (
          <Forca words={activeModule.forcaWords} />
        )}
        {activeTab === "quiz" && (
          <Quiz questions={activeModule.quiz} />
        )}
        {activeTab === "glossario" && (
          <Glossario terms={activeModule.glossario} />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-6">
        <div className="container text-center">
          <p className="text-xs text-muted-foreground">
            Material didático para estudo e capacitação. Informações baseadas na legislação vigente.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © 2025 Master Educação MEI — SEBRAE
          </p>
        </div>
      </footer>
    </div>
  );
}
