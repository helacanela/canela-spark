import { AnimatedSection } from "./AnimatedSection";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Старт и цели",
    description: "Разбираем вашу ситуацию, продукт, аудиторию. Формулируем измеримые цели.",
    result: "Ясность: что продвигаем, кому, зачем",
  },
  {
    number: "02",
    title: "Подготовка и гипотезы",
    description: "Готовим посадочную страницу, тексты, креативы. Формируем тестовые связки.",
    result: "Готовая база для запуска",
  },
  {
    number: "03",
    title: "Тест-запуск",
    description: "Запускаем рекламу на небольшом бюджете. Проверяем гипотезы, собираем данные.",
    result: "Первые заявки + понимание, что работает",
  },
  {
    number: "04",
    title: "Улучшение и рост",
    description: "Отключаем слабое, усиливаем сильное. Масштабируем то, что приносит результат.",
    result: "Стабильный поток заявок",
  },
];

export const Process = () => {
  return (
    <section id="process" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      {/* Decorative orb */}
      <div className="orb w-[400px] h-[400px] bg-[hsl(var(--coral)/0.06)] top-[20%] right-[-10%]" />

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-6 block mx-auto w-fit">Процесс</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            Как работаем
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Прозрачный процесс: от первого звонка до системного потока заявок
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.1}>
              <div className="relative pl-20 md:pl-24 pb-14 last:pb-0 group">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-[1.625rem] md:left-[2.125rem] top-[3.5rem] w-px h-[calc(100%-3.5rem)] bg-gradient-to-b from-coral/30 to-border" />
                )}
                
                {/* Number badge */}
                <div className="absolute left-0 top-0 w-[3.25rem] h-[3.25rem] md:w-[4.25rem] md:h-[4.25rem] rounded-2xl bg-card shadow-card flex items-center justify-center gradient-border group-hover:shadow-lift transition-all duration-500">
                  <span className="font-display text-lg md:text-xl font-extrabold text-gradient">
                    {step.number}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm text-coral font-semibold flex items-center gap-2">
                    <span className="w-4 h-px bg-coral" />
                    {step.result}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
