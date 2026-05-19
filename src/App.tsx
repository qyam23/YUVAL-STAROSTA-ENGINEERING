/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ValueStrip from "./components/ValueStrip";
import DomainGrid from "./components/DomainGrid";
import ExpandableSections from "./components/ExpandableSections";
import IndustrialAI from "./components/IndustrialAI";
import Differentiation from "./components/Differentiation";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import NewsPage from "./components/NewsPage";
import { motion, AnimatePresence } from "motion/react";
import { FirebaseProvider } from "./context/FirebaseContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useEffect, useMemo, useState } from "react";
import { initAnalytics } from "./services/analytics";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const isPrivacyPage = useMemo(() => {
    const path = window.location.pathname.toLowerCase();
    return path.endsWith("/privacy-policy.html") || path.endsWith("/privacy-policy");
  }, []);
  const isNewsPage = useMemo(() => {
    const path = window.location.pathname.toLowerCase();
    return (
      path.endsWith("/news.html") ||
      path.endsWith("/news") ||
      path.endsWith("/news/") ||
      path.endsWith("/news/glass-bottle-line-277") ||
      path.endsWith("/news/glass-bottle-line-277/")
    );
  }, []);
  const isNewsStoryPage = useMemo(() => {
    const path = window.location.pathname.toLowerCase();
    return path.endsWith("/news/glass-bottle-line-277") || path.endsWith("/news/glass-bottle-line-277/");
  }, []);
  const isStandalonePage = isPrivacyPage || isNewsPage;

  useEffect(() => {
    document.title = isPrivacyPage
      ? "Privacy Policy | STAROSTA INDUSTRIAL"
      : isNewsStoryPage
        ? "Line 277 | Glass Bottle Production Line Case Story | STAROSTA INDUSTRIAL"
        : isNewsPage
          ? "News / Case Stories | STAROSTA INDUSTRIAL"
        : "STAROSTA INDUSTRIAL";
  }, [isNewsPage, isNewsStoryPage, isPrivacyPage]);

  useEffect(() => initAnalytics(), []);

  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(46,88,133,0.18),transparent_32%),linear-gradient(180deg,#0b1321_0%,#09101b_38%,#060b13_100%)] selection:bg-industrial-accent selection:text-industrial-dark"
          >
            <Navbar onContactClick={() => setIsContactOpen(true)} isPolicyPage={isStandalonePage} />
            {isPrivacyPage ? (
              <PrivacyPolicyPage />
            ) : isNewsPage ? (
              <NewsPage
                variant={isNewsStoryPage ? "story" : "index"}
                onContactClick={() => setIsContactOpen(true)}
              />
            ) : (
              <main>
                <Hero onContactClick={() => setIsContactOpen(true)} />
                <DomainGrid />
                <ExpandableSections />
                <IndustrialAI />
                <Differentiation />
                <ValueStrip />
                <FinalCTA onContactClick={() => setIsContactOpen(true)} />
              </main>
            )}
            <Footer isPolicyPage={isStandalonePage} />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </motion.div>
        </AnimatePresence>
      </FirebaseProvider>
    </ErrorBoundary>
  );
}
