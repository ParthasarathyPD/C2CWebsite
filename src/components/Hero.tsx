import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="pt-24 pb-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Elevate Your{" "}
              <span className="text-primary">Teaching</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Where Pedagogy Meets Technology: Faculty Development for the Future of Computing</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto" onClick={() => document.getElementById('programs')?.scrollIntoView({
            behavior: 'smooth'
          })}>
              Explore Workshops
            </Button>
            <Button variant="outline-primary" size="xl" className="w-full sm:w-auto" onClick={() => window.open('mailto:info@corporate2campus.com?subject=Brochure Request&body=Please send me the workshop brochure.', '_blank')}>
              Download Brochure
            </Button>
            
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">8</div>
              <div className="text-sm text-muted-foreground font-medium">Workshop Tracks</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground font-medium">Educators Trained</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground font-medium">Expert Trainers</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">1-5</div>
              <div className="text-sm text-muted-foreground font-medium">Day Formats</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;