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

const tabDescriptions: Record<Tab, string> = {
  explicacao: "Conteúdo teórico detalhado com exemplos práticos",
  cronograma: "Passo a passo visual — clique em cada etapa para expandir",
  forca: "Jogo da forca com dicas — teste seus conhecimentos",
  quiz: "5 questões interativas com feedback imediato",
  glossario: "Termos e definições — busca em tempo real",
};

export default function Home() {
  const [activeModule, setActiveModule] = useState<Module>(modules[0]);
  const [activeTab, setActiveTab] = useState<Tab>("explicacao");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const switchModule = (mod: Module) => {
    setActiveModule(mod);
    setActiveTab("explicacao");
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f5f2]">
      {/* ── TOP HEADER ── */}
      <header className="bg-primary shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-3">
          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Menu"
          >
            {sidebarOpen ? "✕" : "☰"}
          </button>

          <div className="flex items-center gap-3 flex-1">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-xl flex-shrink-0">
              🎓
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-tight font-[Poppins]">
                Master Educação
              </h1>
              <p className="text-white/70 text-xs hidden sm:block">MEI — Microempreendedor Individual</p>
            </div>
          </div>

          <div className="lg:hidden flex items-center gap-1.5 bg-white/15 rounded-xl px-3 py-1.5">
            <span className="text-base">{activeModule.icon}</span>
            <span className="text-white text-xs font-semibold">{activeModule.subtitle}</span>
          </div>

          <span className="text-white/50 text-xs hidden lg:block font-semibold tracking-wide">SEBRAE</span>
        </div>
      </header>

      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        {/* ── SIDEBAR ── */}
        <>
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/40 z-30 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <aside
            className={cn(
              "fixed top-[57px] left-0 bottom-0 z-40 w-68 bg-white border-r border-border shadow-xl overflow-y-auto transition-transform duration-300",
              "lg:static lg:top-auto lg:translate-x-0 lg:shadow-none lg:w-64 lg:flex-shrink-0 lg:h-[calc(100vh-57px)] lg:sticky lg:top-[57px]",
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="p-4 space-y-6">
              {/* Módulos */}
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">
                  Módulos
                </p>
                <nav className="space-y-1">
                  {modules.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => switchModule(mod)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all text-left",
                        activeModule.id === mod.id
                          ? "bg-primary text-white shadow-md"
                          : "hover:bg-orange-50 hover:text-primary text-foreground/70"
                      )}
                    >
                      <span className="text-xl flex-shrink-0">{mod.icon}</span>
                      <div className="min-w-0">
                        <p className={cn("text-[10px] font-semibold", activeModule.id === mod.id ? "text-white/70" : "text-muted-foreground")}>
                          {mod.title}
                        </p>
                        <p className="font-semibold leading-tight truncate">{mod.subtitle}</p>
                      </div>
                      {activeModule.id === mod.id && (
                        <span className="ml-auto text-white/80 flex-shrink-0">→</span>
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="border-t border-border" />

              {/* Seções */}
              <div>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2 px-1">
                  Seções
                </p>
                <nav className="space-y-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-left",
                        activeTab === tab.id
                          ? "bg-orange-50 text-primary border border-primary/20"
                          : "hover:bg-secondary text-foreground/70 hover:text-foreground"
                      )}
                    >
                      <span className="text-base">{tab.icon}</span>
                      <span>{tab.label}</span>
                      {activeTab === tab.id && (
                        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
                <p className="text-xs text-orange-700 font-semibold">💡 Dica de estudo</p>
                <p className="text-xs text-orange-600 mt-1 leading-relaxed">
                  Leia a Explicação, siga o Cronograma e depois teste com o Quiz e a Forca!
                </p>
              </div>
            </div>
          </aside>
        </>

        {/* ── MAIN CONTENT ── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Mobile tab bar */}
          <div className="lg:hidden bg-white border-b border-border sticky top-[57px] z-20 shadow-sm">
            <div className="flex overflow-x-auto px-3 py-2 gap-1.5">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all",
                    activeTab === tab.id
                      ? "bg-primary text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )}
                >
                  <span>{tab.icon}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Banner */}
          <div className="bg-gradient-to-r from-primary via-orange-500 to-amber-400 text-white">
            <div className="px-6 sm:px-10 py-7 sm:py-10">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="bg-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full">
                    {activeModule.title}
                  </span>
                  <span className="text-white/50 text-xs">·</span>
                  <span className="text-white/80 text-xs flex items-center gap-1">
                    {tabs.find(t => t.id === activeTab)?.icon}
                    {tabs.find(t => t.id === activeTab)?.label}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold font-[Poppins] leading-tight">
                  {activeModule.subtitle}
                </h2>
                <p className="text-white/75 text-sm mt-2">{tabDescriptions[activeTab]}</p>
              </div>
            </div>
          </div>

          {/* Page body */}
          <main className="flex-1 px-4 sm:px-8 lg:px-10 py-8">
            {activeTab === "explicacao" && (
              <div className="max-w-2xl mx-auto lg:mx-0">
                <Explicacao sections={activeModule.explanation} />
              </div>
            )}
            {activeTab === "cronograma" && (
              <div className="max-w-2xl mx-auto lg:mx-0">
                <Cronograma steps={activeModule.cronograma} />
              </div>
            )}
            {activeTab === "forca" && (
              <div className="max-w-lg mx-auto">
                <Forca words={activeModule.forcaWords} />
              </div>
            )}
            {activeTab === "quiz" && (
              <div className="max-w-xl mx-auto">
                <Quiz questions={activeModule.quiz} />
              </div>
            )}
            {activeTab === "glossario" && (
              <div className="max-w-2xl mx-auto lg:mx-0">
                <Glossario terms={activeModule.glossario} />
              </div>
            )}
          </main>

          <footer className="border-t border-border bg-white px-6 sm:px-10 py-4 mt-auto">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
              <span>© 2025 Master Educação MEI — SEBRAE</span>
              <span>Material didático para estudo e capacitação.</span>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
