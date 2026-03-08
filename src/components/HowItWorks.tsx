import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Upload & Analyze",
      description: "Upload game film or practice clips. Our AI breaks down every play, route, and technique in seconds.",
    },
    {
      number: "02",
      title: "Set Your Goals",
      description: "Choose your position, skill level, and focus areas. Football AI builds a personalized training plan.",
    },
    {
      number: "03",
      title: "Train & Dominate",
      description: "Execute AI-driven drills, track your progress through levels, and watch your game transform.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It <span className="text-primary text-glow">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Three steps to elevate your game</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center relative"
            >
              <div className="font-display text-7xl font-bold text-primary/15 mb-2">{step.number}</div>
              <h3 className="font-display text-xl text-foreground mb-3 -mt-6">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-4 w-8 h-[2px] bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
