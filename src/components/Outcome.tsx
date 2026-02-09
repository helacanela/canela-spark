import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";

const outcomes = [
  "План действий на первые 30 дней",
  "Тестовые гипотезы и креативы",
  "Настроенная аналитика и отслеживание",
  "Еженедельные отчёты и созвоны",
  "Понятные рекомендации по следующим шагам",
  "Прозрачность: доступ ко всем кабинетам",
];

export const Outcome = () => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark bg */}
      <div className="absolute inset-0 bg-[hsl(229,30%,14%)]" />
      
      {/* Orbs */}
      <div className="orb w-[400px] h-[400px] bg-[hsl(var(--plum)/0.15)] bottom-[-10%] left-[-5%] animate-pulse-soft" />
      <div className="orb w-[300px] h-[300px] bg-[hsl(var(--coral)/0.08)] top-[-5%] right-[10%]" />
      
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label-dark mb-6 block mx-auto w-fit">Результат</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-extrabold text-white mb-5 leading-tight">
            Что вы получите
          </h2>
          <p className="text-[hsl(var(--light-gray))] max-w-lg mx-auto text-lg">
            Конкретные результаты, а не красивые презентации
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto glass rounded-3xl p-8 md:p-12">
            <ul className="grid sm:grid-cols-2 gap-5">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-coral/15 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-coral/25 transition-colors">
                    <Check className="w-3.5 h-3.5 text-coral" />
                  </div>
                  <span className="text-white/85 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
