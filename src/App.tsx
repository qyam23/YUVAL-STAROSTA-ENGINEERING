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
import { motion, AnimatePresence } from "motion/react";
import { FirebaseProvider } from "./context/FirebaseContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useState } from "react";

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ErrorBoundary>
      <FirebaseProvider>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(46,88,133,0.18),transparent_32%),linear-gradient(180deg,#0b1321_0%,#09101b_38%,#060b13_100%)] selection:bg-industrial-accent selection:text-industrial-dark"
          >
            <Navbar onContactClick={() => setIsContactOpen(true)} />
            <main>
              <Hero onContactClick={() => setIsContactOpen(true)} />
              <DomainGrid />
              <ExpandableSections />
              <IndustrialAI />
              <Differentiation />
              <ValueStrip />
              <FinalCTA onContactClick={() => setIsContactOpen(true)} />
            </main>
            <Footer />
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </motion.div>
        </AnimatePresence>
      </FirebaseProvider>
    </ErrorBoundary>
  );
}
