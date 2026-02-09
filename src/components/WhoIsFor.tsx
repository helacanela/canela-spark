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
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] bg-[hsl(var(--plum)/0.05)] top-[10%] left-[-5%]" />

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label mb-6 block mx-auto w-fit">Аудитория</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            Кому подходит
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Работаем с бизнесами по всему миру. Главное — готовность к системной работе.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {audiences.map((audience, index) => (
            <AnimatedSection key={audience.title} delay={index * 0.08}>
              <div className="group bg-card rounded-2xl p-7 text-center shadow-card hover:shadow-lift transition-all duration-500 gradient-border">
                <div className="w-14 h-14 rounded-2xl bg-plum/8 flex items-center justify-center mx-auto mb-5 group-hover:bg-plum/12 transition-colors duration-300">
                  <audience.icon className="w-6 h-6 text-plum" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {audience.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
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
