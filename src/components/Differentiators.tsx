import { AnimatedSection } from "./AnimatedSection";

const points = [
  {
    title: "Не конвейер",
    description: "Берём ограниченное количество проектов. Каждый клиент получает внимание, а не шаблон.",
  },
  {
    title: "Не «просто запустим рекламу»",
    description: "Связываем стратегию, креативы, посадочные страницы, офферы и аналитику. Без этого реклама — слив бюджета.",
  },
  {
    title: "Объясняем, что делаем и зачем",
    description: "Не прячемся за терминологией. Вы понимаете каждое решение и видите логику за цифрами.",
  },
  {
    title: "Считаем заявки, а не охваты",
    description: "Красивые метрики никого не кормят. Нам важно, сколько реальных обращений приходит в ваш бизнес.",
  },
  {
    title: "Делаем руками, а не только советуем",
    description: "Стратегия без реализации — просто документ. Мы и думаем, и делаем.",
  },
];

export const Differentiators = () => {
  return (
    <section className="section-padding bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-deep-wine/20 to-ink" />
      
      <div className="container relative z-10">
        <AnimatedSection className="mb-14">
          <p className="text-raspberry font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Подход
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 max-w-lg">
            Чем мы отличаемся
          </h2>
          <p className="text-white/50 max-w-xl">
            Мы — бутиковая студия. Это значит: меньше проектов, больше глубины, 
            больше результата.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          {points.map((point, index) => (
            <AnimatedSection key={point.title} delay={index * 0.05}>
              <div className="border border-white/8 rounded-xl p-6 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <h3 className="font-display text-lg font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
