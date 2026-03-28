import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import NavbarBrand from "./NavbarBrand";

type NavbarProps = {
  onContactClick: () => void;
};

export default function Navbar({ onContactClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/8 bg-[#07101b]/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6">
        <a href="#top" className="flex min-w-0 items-center pr-4 lg:pr-6">
          <NavbarBrand />
        </a>

        <div className="hidden items-center gap-6 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-slate-300 lg:gap-7 md:flex">
          <a href="#domains" className="transition-colors hover:text-industrial-accent">What We Do</a>
          <a href="#intelligence" className="transition-colors hover:text-industrial-accent">ER Labs</a>
          <a href="#expertise" className="transition-colors hover:text-industrial-accent">Expertise</a>

          <div className="ml-3 flex items-center border-l border-white/10 pl-5">
            <button
              type="button"
              onClick={onContactClick}
              className="rounded-sm border border-industrial-accent/70 px-5 py-2 text-industrial-accent transition-all duration-300 hover:bg-industrial-accent hover:text-industrial-dark"
            >
              Contact us
            </button>
          </div>
        </div>

        <button
          className="rounded-sm border border-white/10 bg-white/[0.03] p-2 text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-b border-white/8 bg-[#07101b]/98 px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
            <a href="#domains" onClick={() => setIsOpen(false)}>What We Do</a>
            <a href="#intelligence" onClick={() => setIsOpen(false)}>ER Labs</a>
            <a href="#expertise" onClick={() => setIsOpen(false)}>Expertise</a>
          </div>

          <div className="mt-6 flex flex-col gap-6 border-t border-white/10 pt-6">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                onContactClick();
              }}
              className="w-full border border-industrial-accent/70 px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.22em] text-industrial-accent"
            >
              Contact us
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
