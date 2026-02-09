import { AnimatedSection } from "./AnimatedSection";
import { Target, Zap, Globe, ArrowUpRight } from "lucide-react";

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
    accent: "from-coral/20 to-wine/10",
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
    accent: "from-plum/20 to-wine/10",
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
    accent: "from-navy/10 to-plum/10",
  },
];

export const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-6 block mx-auto w-fit">Услуги</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            Что мы делаем
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Три направления — одна цель: системный поток клиентов
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.1}>
              <div className="group relative bg-card rounded-2xl p-7 md:p-8 shadow-card hover:shadow-lift transition-all duration-500 h-full flex flex-col gradient-border overflow-hidden">
                {/* Subtle gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-6 group-hover:bg-coral/15 transition-colors duration-300">
                    <service.icon className="w-5 h-5 text-coral" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/75">
                        <span className="w-1 h-1 rounded-full bg-coral mt-2 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-coral font-display font-semibold text-sm hover:gap-3 transition-all duration-300 self-start group/btn"
                  >
                    Обсудить задачу
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
