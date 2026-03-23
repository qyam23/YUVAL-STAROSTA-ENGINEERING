import type { ReactElement } from "react";
import { motion } from "motion/react";
import { Factory, Cpu, Settings, Database, ArrowUpRight } from "lucide-react";
import factoryBuildingMasterplan from "../assets/factory-building-masterplan.png";
import extrusionEngineeringVisual from "../assets/extrusion-engineering-visual.png";
import automationControlCard from "../assets/automation-control-card.png";

type DomainId = "intelligence" | "extrusion" | "factory" | "automation";

const domains: {
  id: DomainId;
  title: string;
  descriptor: string;
  icon: ReactElement;
  image: string;
  position?: string;
}[] = [
  {
    id: "intelligence",
    title: "ER Labs",
    descriptor: "Real-time industrial intelligence",
    icon: <Database className="text-industrial-accent" size={28} />,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    position: "center",
  },
  {
    id: "extrusion",
    title: "Extrusion Engineering",
    descriptor: "Twin-screw compounding and process optimization",
    icon: <Settings className="text-industrial-accent" size={28} />,
    image: extrusionEngineeringVisual,
    position: "center",
  },
  {
    id: "factory",
    title: "Factory Building",
    descriptor: "Layout, flow, and production infrastructure",
    icon: <Factory className="text-industrial-accent" size={28} />,
    image: factoryBuildingMasterplan,
    position: "center",
  },
  {
    id: "automation",
    title: "Automation & Control",
    descriptor: "PLC, integration, and process logic",
    icon: <Cpu className="text-industrial-accent" size={28} />,
    image: automationControlCard,
    position: "center",
  },
];

export default function DomainGrid() {
  return (
    <section id="domains" className="px-4 pb-18 pt-6 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-industrial-accent">What We Do</p>
          <h2 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.8rem]">
            Four core capabilities, built for real production systems.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
            Each area reflects a critical layer in how modern factories are designed, controlled, and improved.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-5 md:gap-6 xl:grid-cols-4">
          {domains.map((domain, idx) => (
            <motion.a
              key={domain.id}
              href={`#${domain.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative flex min-w-0 h-[17.25rem] flex-col justify-end overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0d1725]/70 p-3 shadow-[0_24px_48px_rgba(0,0,0,0.32)] transition-all duration-300 hover:border-industrial-accent/55 hover:shadow-[0_28px_60px_rgba(0,0,0,0.4)] sm:aspect-[0.96] sm:min-h-[17rem] sm:h-auto sm:rounded-[1.6rem] sm:p-5"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-[1.04]"
                style={{
                  backgroundImage: `url("${domain.image}")`,
                  backgroundPosition: domain.position ?? "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                aria-hidden="true"
              />
              <div
                className={`absolute inset-0 ${
                  domain.id === "factory"
                    ? "bg-[radial-gradient(circle_at_76%_18%,rgba(212,175,55,0.18),transparent_22%),radial-gradient(circle_at_18%_24%,rgba(77,138,221,0.14),transparent_28%),linear-gradient(180deg,rgba(6,11,19,0.08)_0%,rgba(6,11,19,0.12)_30%,rgba(6,11,19,0.4)_58%,rgba(6,11,19,0.82)_100%)]"
                    : domain.id === "extrusion"
                      ? "bg-[radial-gradient(circle_at_24%_18%,rgba(212,175,55,0.16),transparent_24%),radial-gradient(circle_at_82%_24%,rgba(72,137,221,0.14),transparent_30%),linear-gradient(180deg,rgba(7,12,20,0.08)_0%,rgba(7,12,20,0.14)_28%,rgba(7,12,20,0.42)_60%,rgba(7,12,20,0.84)_100%)]"
                    : domain.id === "automation"
                      ? "bg-[radial-gradient(circle_at_78%_18%,rgba(212,175,55,0.12),transparent_22%),radial-gradient(circle_at_16%_24%,rgba(75,136,217,0.18),transparent_26%),linear-gradient(180deg,rgba(7,12,20,0.08)_0%,rgba(7,12,20,0.16)_28%,rgba(7,12,20,0.42)_58%,rgba(7,12,20,0.82)_100%)]"
                    : "bg-[radial-gradient(circle_at_top_left,rgba(72,137,221,0.14),transparent_28%),linear-gradient(180deg,rgba(7,12,20,0.1)_0%,rgba(7,12,20,0.16)_30%,rgba(7,12,20,0.48)_62%,rgba(7,12,20,0.84)_100%)]"
                }`}
              />
              <div className="absolute inset-x-0 bottom-0 h-[48%] bg-[linear-gradient(180deg,rgba(8,12,18,0)_0%,rgba(8,12,18,0.2)_18%,rgba(8,12,18,0.88)_100%)]" />
              <div
                className="absolute inset-0 opacity-16"
                style={{
                  backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "38px 38px",
                }}
              />

              <div className="relative z-10 flex h-full min-w-0 flex-col justify-between">
                <div className="flex justify-between">
                  <div className="rounded-full border border-white/10 bg-[#09111d]/78 p-2 shadow-[0_0_24px_rgba(25,63,104,0.16)] sm:p-2.5">
                    {domain.icon}
                  </div>
                  <ArrowUpRight size={16} className="text-white/65 transition-colors group-hover:text-industrial-accent sm:size-[18px]" />
                </div>
                <div className="min-w-0 pt-10 text-left sm:pt-12">
                  <h3 className="max-w-full text-[1rem] font-semibold leading-tight text-white break-words sm:max-w-[12rem] sm:text-xl">
                    {domain.title}
                  </h3>
                  <p className="mt-2 max-w-full text-[0.78rem] leading-5 text-slate-100 sm:mt-3 sm:max-w-[15rem] sm:text-sm sm:leading-6">
                    {domain.descriptor}
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-4 bottom-4 h-px bg-gradient-to-r from-industrial-accent/0 via-industrial-accent/70 to-industrial-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:inset-x-5 sm:bottom-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
