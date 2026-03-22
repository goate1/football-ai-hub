import { motion } from "framer-motion";
import { Target, Zap, BarChart3, Dumbbell, Trophy, Video } from "lucide-react";

const features = [
  {
    icon: Video,
    title: "AI Film Breakdown",
    description: "Upload game film or practice clips for instant AI analysis on routes, reads, blocking, and technique.",
  },
  {
    icon: Target,
    title: "Position-Specific Drills",
    description: "Custom training plans for QB, WR, RB, DB, LB, OL, DL — tailored to your skill level and goals.",
  },
  {
    icon: Zap,
    title: "Combine Prep",
    description: "Sprint, agility, and explosiveness drills designed to peak your 40-yard dash and shuttle times.",
  },
  {
    icon: BarChart3,
    title: "Stats & Progress",
    description: "Track every rep, every drill, every improvement. See your growth over weeks and months.",
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description: "Football-specific power, speed, and endurance programs that translate to on-field dominance.",
  },
  {
    icon: Trophy,
    title: "Levels & Challenges",
    description: "Progress through training levels, unlock new drills, and compete in timed challenges.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 sm:py-24 relative">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core <span className="text-primary text-glow">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to dominate on the field
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="group relative bg-card rounded-lg p-6 border border-border hover:border-primary/40 transition-all duration-300"
            >
              <div className="gradient-border rounded-lg" />
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
