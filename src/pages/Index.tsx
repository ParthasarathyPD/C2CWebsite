import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import WorkshopTracks from "@/components/WorkshopTracks";
import Pricing from "@/components/Pricing";
import Trainers from "@/components/Trainers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FAQ />
      <WorkshopTracks />
      <Trainers />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
