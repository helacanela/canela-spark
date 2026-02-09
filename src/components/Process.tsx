import { AnimatedSection } from "./AnimatedSection";

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
    <section id="process" className="py-20 md:py-28 bg-background">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Как работаем
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Прозрачный процесс: от первого звонка до системного потока заявок
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.1}>
              <div className="relative pl-16 md:pl-20 pb-12 last:pb-0">
                {/* Vertical line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-12 w-px h-[calc(100%-48px)] bg-border" />
                )}
                
                {/* Number badge */}
                <div className="absolute left-0 top-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-navy flex items-center justify-center">
                  <span className="font-display text-lg md:text-xl font-bold text-coral">
                    {step.number}
                  </span>
                </div>
                
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {step.description}
                  </p>
                  <p className="text-sm text-coral font-medium">
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
