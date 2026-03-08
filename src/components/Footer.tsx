import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="font-display text-2xl text-foreground mb-3">
              Football <span className="text-primary">AI</span>
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI-powered football training to elevate your game to the next level.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary text-sm transition-colors">Home</Link></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary text-sm transition-colors">Features</a></li>
              <li><a href="https://apps.apple.com/us/app/football-ai-custom-ai-coach/id6757283802" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm transition-colors">Download App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-muted-foreground hover:text-primary text-sm transition-colors">Support</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              {/* TikTok custom icon */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.37a8.16 8.16 0 004.76 1.51v-3.45a4.85 4.85 0 01-1-.74z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Football AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
