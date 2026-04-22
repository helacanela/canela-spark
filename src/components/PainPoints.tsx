import { AnimatedSection } from "./AnimatedSection";

const painPoints = [
  {
    pain: "Маркетинг ощущается как хаос",
    solution: "Выстраиваем понятную систему: что, зачем и в каком порядке.",
  },
  {
    pain: "Реклама дорогая, а результат непонятный",
    solution: "Считаем стоимость заявки, а не клики и охваты. Прозрачная отчётность.",
  },
  {
    pain: "Агентства обещают много — делают мало",
    solution: "Работаем руками, объясняем решения, показываем цифры каждую неделю.",
  },
  {
    pain: "Сайт или лендинг не конвертирует",
    solution: "Делаем страницы, которые ведут к действию, а не просто «красиво».",
  },
  {
    pain: "Нужны клиенты, а не метрики",
    solution: "Фокус на заявках и продажах, а не на подписчиках и лайках.",
  },
];

export const PainPoints = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container">
        <AnimatedSection className="mb-14">
          <p className="text-raspberry font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Знакомо?
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg">
            Почему к нам приходят
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Мы работаем с владельцами бизнеса, которым надоело тратить бюджет 
            без понятного результата.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl space-y-4">
          {painPoints.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="bg-card border border-border rounded-xl p-6 md:p-7">
                <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-8">
                  <p className="text-foreground font-display font-semibold md:w-2/5 md:flex-shrink-0">
                    «{item.pain}»
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed md:w-3/5">
                    {item.solution}
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
