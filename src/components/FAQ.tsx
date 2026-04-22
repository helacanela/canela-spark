import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Вы работаете только с определёнными нишами?",
    answer: "Мы специализируемся на малом и среднем бизнесе: образование, бьюти, общепит, услуги. Но подход применим шире — если ваш бизнес продаёт услуги или продукты онлайн, напишите нам, обсудим.",
  },
  {
    question: "Мы уже запускаем рекламу — можете помочь?",
    answer: "Да. Начнём с аудита: посмотрим текущие кампании, посадочные страницы и воронку. Дадим рекомендации и, если нужно, возьмём управление на себя.",
  },
  {
    question: "Вы делаете только стратегию или также реализуете?",
    answer: "И то, и другое. Можем провести разовый аудит с рекомендациями, а можем взять проект целиком — от стратегии до ежедневного управления рекламой.",
  },
  {
    question: "Какой бюджет нужен для начала?",
    answer: "Минимальный рекламный бюджет для теста — от $500–1000 в месяц, зависит от ниши и географии. На консультации подскажем, какой бюджет реалистичен для вашей задачи.",
  },
  {
    question: "Как быстро можно начать?",
    answer: "Обычно от первого разговора до запуска — 1–2 недели. Зависит от сложности задачи и готовности материалов.",
  },
  {
    question: "Что будет после консультации?",
    answer: "На консультации разберём вашу задачу и определим, можем ли мы быть полезны. Если да — предложим формат работы и следующие шаги. Если нет — честно скажем. Никакого давления.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/50">
      <div className="container">
        <AnimatedSection className="mb-10">
          <p className="text-raspberry font-display font-semibold text-sm mb-3 uppercase tracking-wide">
            Вопросы
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Частые вопросы
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl">
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-raspberry/20"
                >
                  <AccordionTrigger className="font-display font-semibold text-foreground hover:no-underline py-5 text-left text-[15px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
