import { AnimatedSection } from "./AnimatedSection";
import { Target, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Маркетинг-система",
    description: "Стратегия продвижения и план действий на первые 90 дней.",
    bullets: [
      "Анализ аудитории и конкурентов",
      "Воронка продаж под ваш бизнес",
      "Приоритеты: что делать сначала",
    ],
  },
  {
    icon: Zap,
    title: "Performance-продвижение",
    description: "Платная реклама, которая приносит заявки, а не клики.",
    bullets: [
      "Настройка и тестирование гипотез",
      "Оптимизация по стоимости заявки",
      "Масштабирование рабочих связок",
    ],
  },
  {
    icon: Globe,
    title: "Сайт и инфраструктура",
    description: "От лендинга до сложных digital-систем — под задачу.",
    bullets: [
      "Быстрые посадочные страницы",
      "Многостраничные сайты",
      "Аналитика и отслеживание",
    ],
  },
];

export const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Что мы делаем
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Три направления — одна цель: системный поток клиентов
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-lift transition-all duration-300 h-full flex flex-col">
                <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-coral" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-5">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-coral mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={scrollToContact}
                  className="text-coral font-display font-semibold text-sm hover:text-wine transition-colors self-start"
                >
                  Обсудить задачу →
                </button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
