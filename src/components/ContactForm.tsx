import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    website: "",
    goal: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Заявка отправлена! Свяжемся в течение 24 часов.");
    setFormData({ name: "", contact: "", website: "", goal: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-ink relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-deep-wine/20 via-ink to-ink" />
      
      <div className="container relative z-10">
        <div className="max-w-lg mx-auto">
          <AnimatedSection className="text-center mb-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Обсудим вашу задачу?
            </h2>
            <p className="text-white/50">
              Бесплатная консультация — 30 минут. Разберём вашу ситуацию, 
              покажем точки роста. Без обязательств и давления.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium uppercase tracking-wider">
                  Ваше имя
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-raspberry/50 h-11"
                />
              </div>
              
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium uppercase tracking-wider">
                  Контакт для связи
                </label>
                <Input
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Email, Telegram или WhatsApp"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-raspberry/50 h-11"
                />
              </div>
              
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium uppercase tracking-wider">
                  Сайт или Instagram <span className="text-white/30">(необязательно)</span>
                </label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="example.com или @username"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-raspberry/50 h-11"
                />
              </div>
              
              <div>
                <label className="block text-xs text-white/50 mb-1.5 font-medium uppercase tracking-wider">
                  Какая задача?
                </label>
                <Textarea
                  required
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  placeholder="Коротко опишите, что хотите получить"
                  rows={3}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/25 focus:border-raspberry/50 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-raspberry hover:bg-raspberry/90 text-white font-display font-semibold shadow-button hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 h-12"
              >
                {isSubmitting ? "Отправляем..." : "Оставить заявку"}
              </Button>
              
              <p className="text-[11px] text-white/30 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
