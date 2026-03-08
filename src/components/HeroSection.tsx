import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";
import appMockup from "@/assets/app-mockup.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Football AI Training" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 hero-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-4"
            >
              Built by Ballers, for Ballers
            </motion.p>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.9] mb-4">
              Football{" "}
              <span className="text-primary text-glow">AI</span>
            </h1>

            <p className="font-display text-lg sm:text-xl md:text-2xl text-foreground/90 mb-4">
              Train Harder, Play Smarter
            </p>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 font-body">
              Master your reads, sharpen your footwork, and dominate every position with AI-powered training that never takes a day off.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full" />
              <img
                src={appMockup}
                alt="Football AI App"
                className="relative z-10 w-80 animate-float drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
