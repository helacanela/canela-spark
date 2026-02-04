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
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
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
                  className="bg-card rounded-xl px-6 shadow-card border-none"
                >
                  <AccordionTrigger className="font-display font-semibold text-foreground hover:no-underline py-5 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
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
