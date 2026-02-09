import { AnimatedSection } from "./AnimatedSection";
import { Users, GraduationCap, MapPin, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Услуги и консалтинг",
    description: "Юристы, бухгалтеры, агентства, студии",
  },
  {
    icon: GraduationCap,
    title: "Обучение и эксперты",
    description: "Курсы, коучи, наставники, репетиторы",
  },
  {
    icon: MapPin,
    title: "Локальный бизнес",
    description: "Клиники, салоны, рестораны, ремонт",
  },
  {
    icon: Users,
    title: "Онлайн-проекты",
    description: "SaaS, маркетплейсы, приложения",
  },
];

export const WhoIsFor = () => {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Кому подходит
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Работаем с бизнесами по всему миру. Главное — готовность к системной работе.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((audience, index) => (
            <AnimatedSection key={audience.title} delay={index * 0.1}>
              <div className="bg-card rounded-xl p-6 text-center shadow-card hover:shadow-lift transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-plum/10 flex items-center justify-center mx-auto mb-4">
                  <audience.icon className="w-6 h-6 text-plum" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
