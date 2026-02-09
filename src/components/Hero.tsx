import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[hsl(229,30%,14%)]" />
      
      {/* Animated gradient orbs */}
      <div className="orb w-[500px] h-[500px] bg-[hsl(var(--coral)/0.15)] top-[-10%] right-[-10%] animate-pulse-soft" />
      <div className="orb w-[600px] h-[600px] bg-[hsl(var(--plum)/0.2)] bottom-[-15%] left-[-15%] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      <div className="orb w-[300px] h-[300px] bg-[hsl(var(--wine)/0.12)] top-[40%] left-[50%] animate-float" />

      {/* Noise */}
      <div className="absolute inset-0 noise-overlay" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(hsl(0 0% 100% / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.1) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      
      <div className="container relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="section-label-dark mb-8 mx-auto w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Digital-маркетинг для роста бизнеса
          </motion.div>

          <h1 className="font-display text-[2.5rem] md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Клиенты из интернета.{" "}
            <span className="text-gradient">Системно.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(var(--light-gray))] mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Строим маркетинг-систему, которая приводит заявки каждый день. 
            От стратегии до запуска рекламы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-coral hover:bg-coral/90 text-white font-display font-bold shadow-button hover:shadow-glow transition-all duration-500 hover:-translate-y-1 h-14 px-10 text-base rounded-2xl"
            >
              Записаться на консультацию
            </Button>
            
            <Button 
              onClick={scrollToProcess}
              variant="outline" 
              size="lg"
              className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 font-display font-medium group h-14 px-10 text-base rounded-2xl bg-white/[0.03]"
            >
              Как работаем
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center justify-center gap-6 text-sm text-[hsl(0,0%,100%,0.4)]"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Работаем по всему миру
            </span>
            <span className="w-px h-4 bg-white/10" />
            <span>Онлайн-консультация</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
