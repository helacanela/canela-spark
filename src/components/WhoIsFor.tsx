import { AnimatedSection } from "./AnimatedSection";

const audiences = [
  {
    title: "Образование для взрослых",
    examples: "Курсы, школы, наставники, коучи",
  },
  {
    title: "Детское образование",
    examples: "Языковые школы, творческие студии, развивающие центры",
  },
  {
    title: "Театральные и творческие студии",
    examples: "Театры, танцевальные школы, арт-пространства",
  },
  {
    title: "Бьюти и здоровье",
    examples: "Салоны красоты, косметология, wellness",
  },
  {
    title: "Кафе и рестораны",
    examples: "Заведения среднего сегмента, кофейни, бары",
  },
  {
    title: "Сервисные компании",
    examples: "Клининг, ремонт, юридические услуги, консалтинг",
  },
];

export const WhoIsFor = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="audience" className="section-padding bg-muted/50">
      <div className="container">
        <AnimatedSection className="mb-14">
          <p className="text-raspberry font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Для кого
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg">
            Кому мы помогаем
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Работаем с малым и средним бизнесом — чаще всего с русскоязычными предпринимателями 
            в Европе и США. Но география не ограничена.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mb-10">
          {audiences.map((item, index) => (
            <AnimatedSection key={item.title} delay={index * 0.05}>
              <div className="bg-card border border-border rounded-xl p-5">
                <h3 className="font-display font-bold text-foreground text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.examples}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-sm text-muted-foreground">
            Не нашли свою нишу?{" "}
            <button onClick={scrollToContact} className="text-raspberry font-medium hover:underline">
              Напишите нам
            </button>
            {" "}— обсудим вашу задачу.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
