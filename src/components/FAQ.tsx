import { AnimatedSection } from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Как начать работу?",
    answer: "Запишитесь на бесплатную консультацию. На звонке разберём вашу ситуацию, цели и возможности. Если видим точки роста — предложим формат сотрудничества.",
  },
  {
    question: "Нужен ли готовый сайт?",
    answer: "Не обязательно. Если сайта нет — можем создать посадочную страницу под рекламу. Если есть — оценим его и дадим рекомендации по улучшению.",
  },
  {
    question: "Когда ждать первых результатов?",
    answer: "Первые заявки обычно появляются в течение 2–3 недель после запуска рекламы. Стабильный поток — через 1–2 месяца оптимизации.",
  },
  {
    question: "С какими бюджетами работаете?",
    answer: "Минимальный рекламный бюджет для теста — от $500–1000/мес. Конкретные цифры зависят от ниши и географии. Обсудим на консультации.",
  },
  {
    question: "Что будет после консультации?",
    answer: "Если решим работать — согласуем формат (разовый проект или ежемесячное сопровождение), подписываем договор, начинаем работу. Всё прозрачно.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/40 relative overflow-hidden">
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label mb-6 block mx-auto w-fit">FAQ</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-extrabold text-foreground mb-5 leading-tight">
            Частые вопросы
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-card rounded-2xl px-6 shadow-card border-none gradient-border overflow-hidden"
                >
                  <AccordionTrigger className="font-display font-bold text-foreground hover:no-underline py-5 text-left text-[15px]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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
