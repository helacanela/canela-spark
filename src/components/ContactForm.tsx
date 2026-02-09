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
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Заявка отправлена! Свяжемся в течение 24 часов.");
    setFormData({ name: "", contact: "", website: "", goal: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-navy noise-overlay relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-plum/10 to-navy" />
      
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Обсудим ваш проект?
          </h2>
          <p className="text-light-gray max-w-lg mx-auto">
            Бесплатная консультация 30 минут. Без обязательств.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/80 mb-2 font-medium">
                  Ваше имя *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-coral"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/80 mb-2 font-medium">
                  Контакт для связи *
                </label>
                <Input
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Email, Telegram или WhatsApp"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-coral"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/80 mb-2 font-medium">
                  Сайт или Instagram <span className="text-white/50">(не обязательно)</span>
                </label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="example.com или @username"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-coral"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/80 mb-2 font-medium">
                  Какая задача? *
                </label>
                <Textarea
                  required
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  placeholder="Коротко опишите, что хотите получить"
                  rows={3}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-coral resize-none"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coral hover:bg-coral/90 text-white font-display font-semibold shadow-button hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 h-12"
              >
                {isSubmitting ? "Отправляем..." : "Записаться на консультацию"}
              </Button>
              
              <p className="text-xs text-white/50 text-center">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};
