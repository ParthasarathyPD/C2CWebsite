import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Lightbulb, Users } from "lucide-react";

const Trainers = () => {
  const credentials = [
    {
      icon: <GraduationCap className="w-8 h-8 text-primary" />,
      title: "Elite Academic Background",
      description: "Graduates from IITs, BITS Pilani, and IIITs",
      details: "PhD holders with deep subject matter expertise"
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Industry Experience", 
      description: "MNC and startup veterans",
      details: "Real-world experience from leading technology companies"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Research Excellence",
      description: "Published researchers and innovators",
      details: "Cutting-edge research in CS education and technology"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Teaching Mastery",
      description: "Proven track record in education",
      details: "Years of experience training educators across India"
    }
  ];

  return (
    <section id="trainers" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            World-Class Trainers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from the best minds in computer science education - PhD holders from premier 
            institutions with diverse experience across startups, MNCs, and academia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credentials.map((credential, index) => (
            <Card key={index} className="text-center gradient-card shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <CardContent className="pt-8 space-y-4">
                <div className="flex justify-center">
                  {credential.icon}
                </div>
                <h3 className="font-bold text-lg">
                  {credential.title}
                </h3>
                <p className="text-primary font-semibold text-sm">
                  {credential.description}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {credential.details}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-elegant">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge className="gradient-primary text-white px-4 py-2 text-sm">
                  Our Commitment
                </Badge>
                <h3 className="text-3xl font-bold">
                  Excellence in Every Workshop
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our trainers bring together the perfect blend of academic rigor and practical experience. 
                  With backgrounds spanning premier institutions like IITs and BITS Pilani, combined with 
                  real-world experience from startups and MNCs, they deliver training that's both 
                  theoretically sound and practically applicable.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">What Sets Our Trainers Apart:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">PhD-level expertise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Industry experience</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Research publications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">Teaching excellence</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="gradient-hero rounded-xl p-6 text-white">
                <h4 className="font-bold text-xl mb-4">Institutional Excellence</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>IIT Graduates</span>
                    <Badge className="bg-white/20 text-white">40%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>BITS Pilani Alumni</span>
                    <Badge className="bg-white/20 text-white">30%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>IIIT Graduates</span>
                    <Badge className="bg-white/20 text-white">20%</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>PhD Holders</span>
                    <Badge className="bg-white/20 text-white">100%</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent rounded-xl p-6">
                <h4 className="font-bold text-lg mb-3">Experience Distribution</h4>
                <div className="space-y-2 text-sm">
                  <div>🚀 Startup Experience: 60%</div>
                  <div>🏢 MNC Background: 70%</div>
                  <div>🎓 Academic Research: 80%</div>
                  <div>👨‍🏫 Teaching Experience: 100%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainers;