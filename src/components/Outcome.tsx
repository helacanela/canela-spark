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
    <section className="py-20 md:py-28 bg-navy noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-plum/10 to-navy" />
      
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Что вы получите
          </h2>
          <p className="text-light-gray max-w-lg mx-auto">
            Конкретные результаты, а не красивые презентации
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10">
            <ul className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-coral/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-coral" />
                  </div>
                  <span className="text-white/90">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
