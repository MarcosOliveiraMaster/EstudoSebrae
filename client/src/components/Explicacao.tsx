import { ExplanationSection } from "../data/meiContent";

interface Props {
  sections: ExplanationSection[];
}

const variantStyles = {
  info: "bg-blue-50 border-blue-200 text-blue-900",
  warning: "bg-amber-50 border-amber-200 text-amber-900",
  success: "bg-emerald-50 border-emerald-200 text-emerald-900",
  tip: "bg-orange-50 border-orange-200 text-orange-900",
};

export default function Explicacao({ sections }: Props) {
  return (
    <div className="space-y-5 max-w-3xl">
      {sections.map((section, i) => {
        if (section.type === "title") {
          return (
            <h2
              key={i}
              className="text-xl font-bold text-foreground mt-6 first:mt-0 pb-2 border-b border-border"
            >
              {section.content}
            </h2>
          );
        }

        if (section.type === "paragraph") {
          return (
            <p
              key={i}
              className="text-base leading-relaxed text-foreground/90"
              dangerouslySetInnerHTML={{ __html: section.content }}
            />
          );
        }

        if (section.type === "highlight-box") {
          const style = variantStyles[section.variant ?? "info"];
          return (
            <div key={i} className={`border rounded-xl p-4 ${style}`}>
              <p
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          );
        }

        if (section.type === "bullet-list") {
          return (
            <div key={i} className="space-y-2">
              {section.content && (
                <p
                  className="font-semibold text-foreground"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              )}
              <ul className="space-y-2">
                {section.items?.map((item, j) => (
                  <li key={j} className="flex gap-3 items-start">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {j + 1}
                    </span>
                    <span
                      className="text-sm leading-relaxed text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
