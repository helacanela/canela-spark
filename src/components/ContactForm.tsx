import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";

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
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Dark bg */}
      <div className="absolute inset-0 bg-[hsl(229,30%,12%)]" />

      {/* Orbs */}
      <div className="orb w-[500px] h-[500px] bg-[hsl(var(--coral)/0.1)] bottom-[-15%] right-[-10%] animate-pulse-soft" />
      <div className="orb w-[400px] h-[400px] bg-[hsl(var(--plum)/0.15)] top-[-10%] left-[-10%] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />

      <div className="absolute inset-0 noise-overlay" />
      
      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="section-label-dark mb-6 block mx-auto w-fit">Контакт</span>
          <h2 className="font-display text-3xl md:text-[2.75rem] font-extrabold text-white mb-5 leading-tight">
            Обсудим ваш проект?
          </h2>
          <p className="text-[hsl(var(--light-gray))] max-w-lg mx-auto text-lg">
            Бесплатная консультация 30 минут. Без обязательств.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto glass rounded-3xl p-8 md:p-10"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-sm text-white/70 mb-2 font-medium">
                  Ваше имя *
                </label>
                <Input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Как к вам обращаться"
                  className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-coral/60 focus:bg-white/[0.08] transition-all duration-300 h-12 rounded-xl"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/70 mb-2 font-medium">
                  Контакт для связи *
                </label>
                <Input
                  required
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  placeholder="Email, Telegram или WhatsApp"
                  className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-coral/60 focus:bg-white/[0.08] transition-all duration-300 h-12 rounded-xl"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/70 mb-2 font-medium">
                  Сайт или Instagram <span className="text-white/30">(не обязательно)</span>
                </label>
                <Input
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="example.com или @username"
                  className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-coral/60 focus:bg-white/[0.08] transition-all duration-300 h-12 rounded-xl"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/70 mb-2 font-medium">
                  Какая задача? *
                </label>
                <Textarea
                  required
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  placeholder="Коротко опишите, что хотите получить"
                  rows={3}
                  className="bg-white/[0.06] border-white/10 text-white placeholder:text-white/30 focus:border-coral/60 focus:bg-white/[0.08] transition-all duration-300 resize-none rounded-xl"
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-coral hover:bg-coral/90 text-white font-display font-bold shadow-button hover:shadow-glow transition-all duration-500 hover:-translate-y-0.5 h-14 rounded-2xl text-base"
              >
                {isSubmitting ? (
                  "Отправляем..."
                ) : (
                  <>
                    Записаться на консультацию
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
              
              <p className="text-xs text-white/30 text-center pt-1">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных
              </p>
            </div>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
};
