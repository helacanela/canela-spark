import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex items-center bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-deep-wine/30 to-ink" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-raspberry/5 to-transparent" />
      
      <div className="container relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-raspberry font-display font-semibold text-sm md:text-base mb-6 tracking-wide uppercase">
            Агентство диджитал маркетинга
          </p>

          <h1 className="font-display text-[2rem] sm:text-[2.25rem] md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6">
            Выстраиваем маркетинг,{" "}
            <span className="text-gradient">который приводит клиентов</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 max-w-xl leading-relaxed">
            Стратегия, реклама, сайт, аналитика — как единая система. 
            Для малого и среднего бизнеса, которому нужны заявки, а не отчёты.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-raspberry hover:bg-raspberry/90 text-white font-display font-semibold shadow-button hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5 h-12 px-8 w-full sm:w-auto"
            >
              Обсудить задачу
            </Button>
            
            <Button 
              onClick={scrollToServices}
              variant="ghost" 
              size="lg"
              className="text-white/60 hover:text-white hover:bg-white/5 font-display font-medium h-12 w-full sm:w-auto"
            >
              Что мы делаем
            </Button>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40"
          >
            <span>Реклама и лидогенерация</span>
            <span className="text-white/20">·</span>
            <span>Сайты и лендинги</span>
            <span className="text-white/20">·</span>
            <span>Воронки и аналитика</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
