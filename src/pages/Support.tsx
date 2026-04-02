import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, MessageCircle, HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is Football AI?",
    a: "Football AI is an AI-powered training app designed to help football players at every level improve their skills, football IQ, and physical performance through personalized drills, film analysis, and progress tracking.",
  },
  {
    q: "What positions does Football AI support?",
    a: "Football AI supports all positions — QB, WR, RB, TE, OL, DL, LB, DB, and special teams. Each position gets tailored drills, film breakdowns, and training plans.",
  },
  {
    q: "Is Football AI free?",
    a: "Football AI is a premium subscription app. It costs $9.99/month or $59.99/year. Premium includes AI film analysis, unlimited drills, personalized coaching plans, and full progress tracking.",
  },
  {
    q: "How does the AI film analysis work?",
    a: "Simply upload your game film or practice footage. Our AI analyzes technique, positioning, timing, and reads — then provides specific, actionable feedback to improve your game.",
  },
  {
    q: "Can I use Football AI for my team?",
    a: "Yes! Football AI offers team plans that allow coaches to assign drills, track player progress, and analyze game film for the entire roster.",
  },
  {
    q: "What devices is Football AI available on?",
    a: "Football AI is available on iOS. Download it from the App Store.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-card hover:bg-secondary/50 transition-colors"
      >
        <span className="font-display text-foreground text-sm uppercase tracking-wider">{q}</span>
        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-card">
          <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
};

const Support = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4">
              <span className="text-primary text-glow">Support</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Have questions? We're here to help you get the most out of Football AI.
            </p>
          </motion.div>

          {/* Contact options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-4xl mx-auto">
            {[
              { icon: Mail, title: "Email Us", desc: "info@footballaimobile.com", href: "mailto:info@footballaimobile.com" },
              { icon: MessageCircle, title: "Live Chat", desc: "Available in the app", href: "#" },
              { icon: HelpCircle, title: "FAQ", desc: "Find answers below", href: "#faq" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border hover:border-primary/40 rounded-lg p-6 text-center transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.a>
            ))}
          </div>

          {/* FAQ */}
          <div id="faq" className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Support;
