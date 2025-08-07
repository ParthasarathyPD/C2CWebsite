import { Button } from "@/components/ui/button";
const Header = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/460bd323-3739-4544-bfb6-5b97e058aa9e.png" alt="Corporate 2 Campus Logo" className="h-10 w-auto" />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#programs" className="text-foreground hover:text-primary transition-colors font-medium">
            Programs
          </a>
          <a href="#trainers" className="text-foreground hover:text-primary transition-colors font-medium">
            Trainers
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium">
            Pricing
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </nav>
        
        
      </div>
    </header>;
};
export default Header;