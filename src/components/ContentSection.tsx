import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useEffect } from "react";

const ContentSection = () => {
  // Instagram Reels
  const reels = [
    {
      id: "DWjfwQkihpr",
      shortCode: "DWjfwQkihpr",
      title: "Elite QB Breakdown with Football AI",
      url: "https://www.instagram.com/reel/DWjfwQkihpr/?igsh=MXNkYmtuajhhemM0MA==",
    },
    {
      id: "DWjvwZdEWbx",
      shortCode: "DWjvwZdEWbx",
      title: "WR Route Running Analysis",
      url: "https://www.instagram.com/reel/DWjvwZdEWbx/?igsh=MWJhNzZjODNjZ2Fieg==",
    },
    {
      id: "DWmpfiYilOB",
      shortCode: "DWmpfiYilOB",
      title: "Football AI in Action",
      url: "https://www.instagram.com/reel/DWmpfiYilOB/?igsh=MXN0OW50bWV2cDd2NQ==",
    },
  ];

  useEffect(() => {
    // Load Instagram embed script
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    } else {
      const script = document.createElement('script');
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const socialPosts = [
    {
      handle: "@footballai",
      platform: "instagram" as const,
      text: "Watch our athletes train smarter with AI 🏈🔥",
      url: "https://instagram.com",
    },
    {
      handle: "@footballai",
      platform: "tiktok" as const,
      text: "This DB's coverage skills went crazy after using Football AI 👀",
      url: "https://tiktok.com",
    },
    {
      handle: "@footballai",
      platform: "instagram" as const,
      text: "From JV to Varsity starter in one off-season. Here's how. 💪",
      url: "https://instagram.com",
    },
  ];

  return (
    <section id="content" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Instagram Reels section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-2">📱 Instagram Reels</p>
           <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Watch & <span className="text-primary text-glow">Learn</span>
          </h2>
          <p className="text-muted-foreground text-lg">See Football AI transform training in real-time</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {reels.map((reel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-lg overflow-hidden border border-border"
            >
              <blockquote 
                className="instagram-media" 
                data-instgrm-permalink={reel.url}
                data-instgrm-version="14"
              />
            </motion.div>
          ))}
        </div>

        {/* Social proof / influencer section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Influencer <span className="text-primary text-glow">Spotlight</span>
          </h2>
          <p className="text-muted-foreground text-lg">Our creators are making waves across social media</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border hover:border-primary/40 rounded-lg p-6 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {post.platform === "instagram" ? (
                    <Instagram className="w-5 h-5 text-primary" />
                  ) : (
                    <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.51a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.37a8.16 8.16 0 004.76 1.51v-3.45a4.85 4.85 0 01-1-.74z"/>
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-foreground text-sm font-medium">{post.handle}</p>
                  <p className="text-muted-foreground text-xs capitalize">{post.platform}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">{post.text}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
