import { AnimatedSection } from "./AnimatedSection";
import { Check } from "lucide-react";

const outcomes = [
  "Понятная маркетинг-система вместо хаоса",
  "Сайт или лендинг, который конвертирует трафик в заявки",
  "Работающая реклама с прозрачной стоимостью обращения",
  "Регулярная отчётность и понимание, что работает",
  "Креативы и офферы, адаптированные под вашу аудиторию",
  "Конкретный план действий и чёткие следующие шаги",
];

export const Outcome = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        <div className="max-w-3xl">
          <AnimatedSection className="mb-10">
            <p className="text-raspberry font-display font-semibold text-sm mb-3 uppercase tracking-wide">
              Результат
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg">
              Что вы получите
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Мы не обещаем «рост в 10 раз». Мы строим системы, которые приносят предсказуемые обращения.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <ul className="space-y-4">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-raspberry/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-raspberry" />
                  </div>
                  <span className="text-foreground/80 text-sm leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
