import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToProcess = () => {
    document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-navy noise-overlay overflow-hidden">
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-plum/20 to-navy" />
      
      <div className="container relative z-10 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Клиенты из интернета.{" "}
            <span className="text-coral">Системно.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-light-gray mb-10 max-w-xl mx-auto leading-relaxed">
            Строим маркетинг-систему, которая приводит заявки каждый день. 
            От стратегии до запуска рекламы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-coral hover:bg-coral/90 text-white font-display font-semibold shadow-button hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
            >
              Записаться на консультацию
            </Button>
            
            <Button 
              onClick={scrollToProcess}
              variant="outline" 
              size="lg"
              className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-display font-medium group"
            >
              Как работаем
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-sm text-light-gray/70"
          >
            Работаем с бизнесами по всему миру • Онлайн-консультация
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
