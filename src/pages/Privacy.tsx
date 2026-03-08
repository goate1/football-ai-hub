import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
              Privacy <span className="text-primary text-glow">Policy</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12">Last updated: March 8, 2026</p>

            <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
              <section>
                <h2 className="font-display text-xl text-foreground mb-3">1. Information We Collect</h2>
                <p>When you use Football AI, we may collect the following types of information:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong className="text-foreground">Account Information:</strong> Name, email address, and profile details you provide when creating an account.</li>
                  <li><strong className="text-foreground">Usage Data:</strong> Information about how you interact with the app, including training sessions completed, drills performed, and progress metrics.</li>
                  <li><strong className="text-foreground">Video Content:</strong> Game film and practice footage you upload for AI analysis. Videos are processed securely and are not shared with third parties.</li>
                  <li><strong className="text-foreground">Device Information:</strong> Device type, operating system, and app version for performance optimization.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Provide, maintain, and improve the Football AI app and services.</li>
                  <li>Generate personalized training plans and AI-driven recommendations.</li>
                  <li>Analyze game film and provide performance feedback.</li>
                  <li>Track your progress and provide performance insights.</li>
                  <li>Communicate with you about updates, features, and support.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">3. Data Sharing</h2>
                <p>We do not sell your personal information. We may share data with:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong className="text-foreground">Service Providers:</strong> Third-party services that help us operate and improve the app (e.g., cloud hosting, analytics).</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> When required by law or to protect our rights and safety.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">4. Data Security</h2>
                <p>We implement industry-standard security measures to protect your data, including encryption in transit and at rest. However, no method of transmission over the Internet is 100% secure.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">5. Data Retention</h2>
                <p>We retain your data for as long as your account is active or as needed to provide services. You may request deletion of your data at any time by contacting us at support@footballai.app.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">6. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Access, correct, or delete your personal information.</li>
                  <li>Object to or restrict processing of your data.</li>
                  <li>Request data portability.</li>
                  <li>Withdraw consent at any time.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">7. Children's Privacy</h2>
                <p>Football AI is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, please contact us immediately.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">8. Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                <p className="mt-2 text-primary">support@footballai.app</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
