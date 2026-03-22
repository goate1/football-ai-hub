import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import screenshot4 from "@/assets/screenshot-4.png";
import screenshot5 from "@/assets/screenshot-5.png";
import screenshot6 from "@/assets/screenshot-6.png";
import screenshot7 from "@/assets/screenshot-7.png";
import screenshot8 from "@/assets/screenshot-8.png";

const screenshots = [
  { src: screenshot1, alt: "Football AI Home Screen" },
  { src: screenshot2, alt: "AI Film Breakdown" },
  { src: screenshot3, alt: "Position-Specific Drills" },
  { src: screenshot4, alt: "Stats & Progress Tracking" },
  { src: screenshot5, alt: "Combine Prep & Workouts" },
  { src: screenshot6, alt: "Training Analytics" },
  { src: screenshot7, alt: "Performance Dashboard" },
  { src: screenshot8, alt: "Game Prep Center" },
];

const ScreenshotCarousel = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? screenshots.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === screenshots.length - 1 ? 0 : c + 1));

  // Show 3 screenshots at a time on desktop, 1 on mobile
  const getVisibleIndices = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + screenshots.length) % screenshots.length);
    }
    return indices;
  };

  const visible = getVisibleIndices();

  return (
    <section className="py-16 sm:py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            App <span className="text-primary text-glow">Screenshots</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a closer look at Football AI's features
          </p>
        </motion.div>

        {/* Desktop carousel */}
        <div className="hidden md:flex items-center justify-center gap-6 relative">
          <button
            onClick={prev}
            className="absolute left-4 z-20 w-12 h-12 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center gap-6">
            {visible.map((index, pos) => {
              const isCenter = pos === 1;
              return (
                <motion.div
                  key={`${index}-${pos}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isCenter ? 1 : 0.5,
                    scale: isCenter ? 1 : 0.85,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`relative rounded-2xl overflow-hidden border ${
                    isCenter ? "border-primary/40 box-glow" : "border-border"
                  } transition-all`}
                >
                  <img
                    src={screenshots[index].src}
                    alt={screenshots[index].alt}
                    className="w-56 h-auto object-contain"
                  />
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="absolute right-4 z-20 w-12 h-12 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <div className="flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl overflow-hidden border border-primary/40 box-glow"
              >
                <img
                  src={screenshots[current].src}
                  alt={screenshots[current].alt}
                  className="w-64 h-auto object-contain mx-auto"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-card border border-border hover:border-primary/40 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {screenshots.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotCarousel;
