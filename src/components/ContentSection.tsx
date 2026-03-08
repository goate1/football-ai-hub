import { motion } from "framer-motion";
import { Instagram, Youtube } from "lucide-react";

const ContentSection = () => {
  // Placeholder video/content cards — replace with real URLs
  const videos = [
    {
      title: "Elite QB Breakdown with Football AI",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://youtube.com",
      platform: "youtube" as const,
    },
    {
      title: "WR Route Running Analysis",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://youtube.com",
      platform: "youtube" as const,
    },
    {
      title: "Football AI in Action",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      url: "https://youtube.com",
      platform: "youtube" as const,
    },
  ];

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
        {/* YouTube section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-display text-sm uppercase tracking-[0.3em] mb-2">🎥 Featured Content</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Watch & <span className="text-primary text-glow">Learn</span>
          </h2>
          <p className="text-muted-foreground text-lg">See Football AI transform training in real-time</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {videos.map((video, index) => (
            <motion.a
              key={index}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-lg overflow-hidden border border-border hover:border-primary/40 transition-all"
            >
              <div className="aspect-video relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-background/60 group-hover:bg-background/40 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-card">
                <div className="flex items-center gap-2 mb-1">
                  <Youtube className="w-4 h-4 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">YouTube</span>
                </div>
                <h3 className="font-display text-sm text-foreground">{video.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social proof / influencer section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
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
