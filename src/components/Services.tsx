import { AnimatedSection } from "./AnimatedSection";
import { BarChart3, Layout, Megaphone, PenTool, Search, Settings } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Реклама и лидогенерация",
    description: "Настраиваем платную рекламу, которая приносит заявки. Тестируем гипотезы, оптимизируем по стоимости лида, масштабируем рабочие связки.",
  },
  {
    icon: Layout,
    title: "Сайты и лендинги",
    description: "Создаём и улучшаем посадочные страницы, которые конвертируют трафик в обращения. От быстрого лендинга до полноценного сайта.",
  },
  {
    icon: PenTool,
    title: "Креативы и офферы",
    description: "Разрабатываем рекламные тексты, визуалы и офферы, которые цепляют вашу аудиторию. Без шаблонов и клише.",
  },
  {
    icon: Settings,
    title: "Воронки и логика продаж",
    description: "Выстраиваем путь клиента от первого касания до заявки. Убираем лишние шаги, усиливаем конверсию на каждом этапе.",
  },
  {
    icon: Search,
    title: "Маркетинг-аудит",
    description: "Разбираем текущий маркетинг: что работает, что нет, где теряются деньги. Даём конкретные рекомендации.",
  },
  {
    icon: BarChart3,
    title: "Сопровождение бизнеса",
    description: "Ежемесячная поддержка: ведение рекламы, отчётность, рекомендации по росту. Как внешний маркетинг-отдел.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container">
        <AnimatedSection className="mb-14">
          <p className="text-raspberry font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Услуги
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg">
            Всё, что нужно для системного привлечения клиентов
          </h2>
          <p className="text-muted-foreground max-w-xl">
            Мы не делаем «просто рекламу» или «просто сайт». Мы связываем стратегию, 
            рекламу, посадочные страницы и аналитику в одну работающую систему.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={index * 0.05}>
              <div className="group bg-card border border-border rounded-xl p-5 md:p-6 hover:border-raspberry/20 hover:shadow-elevated transition-all duration-300 h-full">
                <service.icon className="w-5 h-5 text-raspberry mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-base md:text-lg font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
