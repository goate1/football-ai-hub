import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4">
            Ready to <span className="text-primary text-glow">Level Up?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Join thousands of athletes using Football AI to train smarter, faster, and harder than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://apps.apple.com/us/app/football-ai-custom-ai-coach/id6757283802" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Apple className="w-5 h-5" />
                Download on iOS
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Play className="w-5 h-5" />
                Get on Android
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
