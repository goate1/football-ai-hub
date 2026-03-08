import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display text-xl tracking-wider text-foreground">
          Football <span className="text-primary">AI</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors">Features</a>
          <a href="/#content" className="text-sm text-muted-foreground hover:text-primary transition-colors">Content</a>
          <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</Link>
          <Button variant="hero" size="sm" asChild>
            <a href="https://apps.apple.com/us/app/football-ai-custom-ai-coach/id6757283802" target="_blank" rel="noopener noreferrer">Download App</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border px-6 py-6 space-y-4">
          <a href="/#features" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-primary">Features</a>
          <a href="/#content" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-primary">Content</a>
          <Link to="/support" onClick={() => setIsOpen(false)} className="block text-sm text-muted-foreground hover:text-primary">Support</Link>
          <Button variant="hero" size="sm" className="w-full" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">Download App</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
