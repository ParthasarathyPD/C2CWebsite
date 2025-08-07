import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="gradient-hero text-white py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/460bd323-3739-4544-bfb6-5b97e058aa9e.png" 
              alt="Corporate 2 Campus Logo" 
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Empowering CS educators with cutting-edge professional development workshops. 
              Excellence in education through innovation.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#programs" className="block text-white/80 hover:text-white transition-colors">
                Workshop Tracks
              </a>
              <a href="#trainers" className="block text-white/80 hover:text-white transition-colors">
                Our Trainers
              </a>
              <a href="#pricing" className="block text-white/80 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#contact" className="block text-white/80 hover:text-white transition-colors">
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Workshop Formats</h3>
            <div className="space-y-2 text-white/80">
              <div>1-Day Workshop - ₹25,000</div>
              <div>2-Day Workshop - ₹50,000</div>
              <div>5-Day Workshop - ₹125,000</div>
              <div className="text-sm pt-2">Group discounts available</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/80 text-sm">info@corporate2campus.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/80 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80 text-sm">Pan India Workshops</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-white/60" />
                <span className="text-white/80 text-sm">Year-round Training</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 Corporate 2 Campus. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                Cancellation Policy
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Schedule a Consultation
          </Button>
          <p className="text-white/60 text-sm mt-4">
            Ready to transform your teaching? Let's discuss your institution's needs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;