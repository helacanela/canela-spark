import { AnimatedSection } from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Разбираемся в задаче",
    description: "На бесплатной консультации обсуждаем ваш бизнес, текущий маркетинг и цели. Без обязательств.",
    result: "Понимание ситуации и возможностей",
  },
  {
    number: "02",
    title: "Готовим фундамент",
    description: "Формируем стратегию, готовим посадочную страницу, тексты и креативы. Тестовые гипотезы.",
    result: "Готовая база для запуска",
  },
  {
    number: "03",
    title: "Запускаем и тестируем",
    description: "Запускаем рекламу на контролируемом бюджете. Собираем данные, проверяем что работает.",
    result: "Первые заявки и данные для оптимизации",
  },
  {
    number: "04",
    title: "Оптимизируем и масштабируем",
    description: "Усиливаем то, что работает. Отключаем то, что нет. Постепенно увеличиваем объём.",
    result: "Стабильный поток обращений",
  },
];

export const Process = () => {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container">
        <AnimatedSection className="mb-14">
          <p className="text-raspberry font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Процесс
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg">
            Как мы работаем
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Простой и прозрачный процесс. Вы всегда знаете, что происходит и почему.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.08}>
              <div className="relative pl-14 md:pl-20 pb-10 last:pb-0">
                {index < steps.length - 1 && (
                  <div className="absolute left-[22px] md:left-[30px] top-10 w-px h-[calc(100%-40px)] bg-border" />
                )}
                
                <div className="absolute left-0 top-0 w-11 h-11 md:w-[60px] md:h-[60px] rounded-full bg-ink flex items-center justify-center">
                  <span className="font-display text-sm md:text-base font-bold text-raspberry">
                    {step.number}
                  </span>
                </div>
                
                <div className="pt-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
                    {step.description}
                  </p>
                  <p className="text-sm text-raspberry font-medium">
                    → {step.result}
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
