import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 text-center">
              Terms of <span className="text-primary text-glow">Service</span>
            </h1>
            <p className="text-muted-foreground text-center mb-12">Last updated: March 8, 2026</p>

            <div className="space-y-8 text-muted-foreground text-sm leading-relaxed">
              <section>
                <h2 className="font-display text-xl text-foreground mb-3">1. Acceptance of Terms</h2>
                <p>By downloading, installing, or using the Football AI mobile application ("App"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the App.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">2. Description of Service</h2>
                <p>Football AI provides AI-powered football training tools, including game film analysis, personalized drills, progress tracking, and football IQ training. The App is designed to supplement — not replace — professional coaching and training.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">3. Subscription & Pricing</h2>
                <p>Football AI offers the following subscription plans:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li><strong className="text-foreground">Monthly Plan:</strong> $9.99/month</li>
                  <li><strong className="text-foreground">Annual Plan:</strong> $59.99/year</li>
                </ul>
                <p className="mt-2">Subscriptions automatically renew unless canceled at least 24 hours before the end of the current billing period. You can manage and cancel your subscription through your Apple App Store or Google Play Store account settings.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">4. User Accounts</h2>
                <p>You are responsible for maintaining the confidentiality of your account credentials. You agree to provide accurate and complete information when creating an account and to update your information as needed. You are responsible for all activities that occur under your account.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">5. User Content</h2>
                <p>You retain ownership of any content you upload to the App, including game film and practice footage. By uploading content, you grant Football AI a limited license to process, analyze, and store your content solely for the purpose of providing and improving our services.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">6. Acceptable Use</h2>
                <p>You agree not to:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>Use the App for any unlawful or unauthorized purpose.</li>
                  <li>Reverse engineer, decompile, or disassemble any part of the App.</li>
                  <li>Interfere with or disrupt the App's servers or networks.</li>
                  <li>Upload content that infringes on the rights of others.</li>
                  <li>Share your account credentials with others or allow unauthorized access.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">7. Intellectual Property</h2>
                <p>All content, features, and functionality of the App — including but not limited to text, graphics, logos, AI models, training algorithms, and software — are the exclusive property of Football AI and are protected by copyright, trademark, and other intellectual property laws.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">8. Disclaimer of Warranties</h2>
                <p>The App is provided "as is" and "as available" without warranties of any kind, either express or implied. Football AI does not guarantee that the App will be uninterrupted, error-free, or that results from use of the App will be accurate. The App is not a substitute for professional medical or coaching advice.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">9. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Football AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the App, including but not limited to physical injury during training activities.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">10. Termination</h2>
                <p>We may terminate or suspend your account at any time, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the App will immediately cease.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">11. Changes to Terms</h2>
                <p>We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the updated Terms within the App or on our website. Continued use of the App after changes constitutes acceptance of the new Terms.</p>
              </section>

              <section>
                <h2 className="font-display text-xl text-foreground mb-3">12. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p className="mt-2 text-primary">info@footballaimobile.com</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
