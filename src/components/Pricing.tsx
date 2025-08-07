import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "1-Day Workshop",
      price: "25,000",
      description: "Perfect for busy educators seeking focused learning",
      features: [
        "Intensive single-day format",
        "Core concepts and tools",
        "Hands-on activities",
        "Take-home resources",
        "Certificate of completion",
        "3 months email support"
      ],
      popular: false,
      availableTracks: ["All 8 tracks available"]
    },
    {
      name: "2-Day Workshop", 
      price: "50,000",
      description: "Comprehensive learning with deeper exploration",
      features: [
        "Extended two-day format",
        "In-depth concept exploration", 
        "Advanced hands-on sessions",
        "Collaborative projects",
        "Comprehensive resources",
        "6 months email support",
        "Networking opportunities"
      ],
      popular: true,
      availableTracks: ["6 tracks available", "Best for Research & AI tracks"]
    },
    {
      name: "5-Day Workshop",
      price: "125,000", 
      description: "Complete mastery with extensive practical application",
      features: [
        "Immersive five-day experience",
        "Complete topic mastery",
        "Real project development",
        "One-on-one mentoring",
        "Premium resource library",
        "12 months ongoing support",
        "Alumni network access",
        "Follow-up consultation"
      ],
      popular: false,
      availableTracks: ["3 tracks available", "Gen Z, AI Tools, Advanced tracks"]
    }
  ];

  return (
    <section id="pricing" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Workshop Pricing
          </h2>
          <p className="text-xl text-muted-foreground">
            Flexible formats designed for your schedule and learning goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full gradient-card shadow-soft hover:shadow-elegant transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-primary scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 gradient-primary text-white px-4 py-1">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="text-4xl font-bold gradient-hero bg-clip-text text-transparent">
                    ₹{plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">per participant</div>
                </div>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2 pt-4 border-t border-border">
                  <h4 className="font-semibold text-sm">Available Tracks:</h4>
                  {plan.availableTracks.map((track, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground">
                      {track}
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant={plan.popular ? "hero" : "outline-primary"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center space-y-4">
          <h3 className="text-2xl font-bold">Group Discounts Available</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Special rates for institutions sending multiple participants. Contact us for custom pricing 
            for groups of 5+ educators or institutional partnerships.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Request Group Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;