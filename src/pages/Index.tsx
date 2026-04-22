import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { PainPoints } from "@/components/PainPoints";
import { Differentiators } from "@/components/Differentiators";
import { Process } from "@/components/Process";
import { WhoIsFor } from "@/components/WhoIsFor";
import { Outcome } from "@/components/Outcome";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <PainPoints />
        <Differentiators />
        <Process />
        <WhoIsFor />
        <Outcome />
        <section id="faq-wrapper">
          <FAQ />
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
