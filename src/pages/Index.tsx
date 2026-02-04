import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Outcome } from "@/components/Outcome";
import { WhoIsFor } from "@/components/WhoIsFor";
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
        <Process />
        <Outcome />
        <WhoIsFor />
        <section id="faq">
          <FAQ />
        </section>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
