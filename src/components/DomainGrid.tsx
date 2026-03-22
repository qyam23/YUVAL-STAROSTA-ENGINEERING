import type { ReactElement } from "react";
import { motion } from "motion/react";
import { Factory, Cpu, Settings, Database, ArrowUpRight } from "lucide-react";

type DomainId = "intelligence" | "extrusion" | "factory" | "automation";

const domains: {
  id: DomainId;
  title: string;
  descriptor: string;
  icon: ReactElement;
}[] = [
  {
    id: "intelligence",
    title: "ER Labs",
    descriptor: "Real-time industrial intelligence",
    icon: <Database className="text-industrial-accent" size={28} />,
  },
  {
    id: "extrusion",
    title: "Extrusion Engineering",
    descriptor: "Twin-screw compounding and process optimization",
    icon: <Settings className="text-industrial-accent" size={28} />,
  },
  {
    id: "factory",
    title: "Factory Building",
    descriptor: "Layout, flow, and production infrastructure",
    icon: <Factory className="text-industrial-accent" size={28} />,
  },
  {
    id: "automation",
    title: "Automation & Control",
    descriptor: "PLC, integration, and process logic",
    icon: <Cpu className="text-industrial-accent" size={28} />,
  },
];

function ERLabsVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(89,168,255,0.28),transparent_26%),radial-gradient(circle_at_80%_24%,rgba(58,113,205,0.18),transparent_24%),linear-gradient(180deg,#13263b_0%,#0a1420_100%)]">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: "linear-gradient(rgba(120,168,223,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(120,168,223,0.16) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="absolute left-5 right-5 top-5 h-8 rounded-full border border-[#78a8df]/20 bg-[#0d1725]/82" />
      <div className="absolute left-5 right-5 top-[4.25rem] grid grid-cols-[1.1fr_0.9fr] gap-3">
        <div className="rounded-2xl border border-[#78a8df]/20 bg-[#0d1725]/84 p-3">
          <div className="mb-3 flex items-end gap-2">
            {[28, 52, 36, 64, 48, 72].map((height, idx) => (
              <div key={idx} className="w-full rounded-t-sm bg-[#3f8cff]/85" style={{ height }} />
            ))}
          </div>
          <div className="h-14 rounded-xl bg-[linear-gradient(180deg,rgba(9,17,29,0.3),rgba(9,17,29,0.1)),linear-gradient(90deg,rgba(95,184,255,0.12),rgba(95,184,255,0.04))]">
            <svg viewBox="0 0 220 70" className="h-full w-full">
              <path d="M8 47 C32 30, 44 32, 66 20 S112 52, 143 32 S188 16, 212 24" fill="none" stroke="#68c7ff" strokeWidth="3" />
              {[8, 66, 143, 212].map((cx) => (
                <circle key={cx} cx={cx} cy={cx === 8 ? 47 : cx === 66 ? 20 : cx === 143 ? 32 : 24} r="3.5" fill="#9ce2ff" />
              ))}
            </svg>
          </div>
        </div>
        <div className="grid gap-3">
          {["OEE", "Scrap", "Energy"].map((label, idx) => (
            <div key={label} className="rounded-2xl border border-[#78a8df]/20 bg-[#0d1725]/84 p-3">
              <div className="text-[10px] uppercase tracking-[0.22em] text-[#7dc8ff]">{label}</div>
              <div className="mt-2 text-xl font-semibold text-white">{["92.4%", "1.8%", "421"][idx]}</div>
              <div className="mt-2 h-2 rounded-full bg-white/8">
                <div className="h-2 rounded-full bg-[#63b8ff]" style={{ width: `${[92, 34, 74][idx]}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-5 bottom-[6.75rem] rounded-2xl border border-[#78a8df]/18 bg-[#0d1725]/68 p-3">
        <div className="grid grid-cols-4 gap-2">
          {[64, 82, 53, 91].map((value, idx) => (
            <div key={idx} className="rounded-xl bg-white/[0.03] p-2 text-center">
              <div className="text-[10px] text-slate-400">Line {idx + 1}</div>
              <div className="mt-1 text-sm font-semibold text-white">{value}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ExtrusionVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(61,122,214,0.22),transparent_28%),linear-gradient(180deg,#0e1b2d_0%,#09111d_100%)]">
      <div
        className="absolute inset-0 opacity-28"
        style={{
          backgroundImage: "linear-gradient(rgba(110,165,221,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(110,165,221,0.16) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute left-5 top-5 text-[10px] uppercase tracking-[0.26em] text-[#78bfff]">Platform 1</div>
      <div className="absolute right-5 top-5 text-[10px] uppercase tracking-[0.26em] text-[#78bfff]">Screw configuration</div>
      <svg viewBox="0 0 360 260" className="absolute inset-0 h-full w-full">
        <rect x="42" y="112" width="230" height="36" rx="18" fill="#16263a" stroke="#74b8ff" strokeWidth="2.5" />
        {[0, 1, 2, 3, 4, 5].map((idx) => (
          <g key={idx} transform={`translate(${70 + idx * 34} 130)`}>
            <path d="M-10 -14 C0 -22, 14 -18, 16 -8 C6 -6, -4 4, -10 14" fill="none" stroke="#f1c14f" strokeWidth="4" strokeLinecap="round" />
            <path d="M10 -14 C20 -22, 34 -18, 36 -8 C26 -6, 16 4, 10 14" fill="none" stroke="#f1c14f" strokeWidth="4" strokeLinecap="round" />
          </g>
        ))}
        <rect x="271" y="118" width="48" height="24" rx="8" fill="#22364f" stroke="#74b8ff" strokeWidth="2" />
        <rect x="28" y="93" width="30" height="76" rx="12" fill="#1b2b40" stroke="#74b8ff" strokeWidth="2" />
        <path d="M65 84 L96 84 L110 112" fill="none" stroke="#74b8ff" strokeWidth="2.5" />
        <path d="M108 84 L140 84 L154 112" fill="none" stroke="#74b8ff" strokeWidth="2.5" />
        <rect x="60" y="58" width="34" height="26" rx="6" fill="#132031" stroke="#74b8ff" strokeWidth="2" />
        <rect x="104" y="58" width="34" height="26" rx="6" fill="#132031" stroke="#74b8ff" strokeWidth="2" />
        <path d="M43 182 H317" stroke="#6d84a0" strokeDasharray="6 6" />
      </svg>
    </div>
  );
}

function FactoryVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_78%_18%,rgba(237,194,79,0.16),transparent_22%),linear-gradient(180deg,#182331_0%,#0c141f_60%,#0a1018_100%)]">
      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[linear-gradient(180deg,rgba(160,167,173,0.04),rgba(188,193,199,0.18))]" />
      <svg viewBox="0 0 360 260" className="absolute inset-0 h-full w-full">
        <path d="M0 92 H360" stroke="#8592a2" strokeWidth="2" opacity="0.4" />
        {[34, 92, 152, 212, 272, 330].map((x) => (
          <line key={x} x1={x} y1="20" x2={x} y2="196" stroke="#536274" strokeWidth="3" opacity="0.45" />
        ))}
        <line x1="0" y1="42" x2="360" y2="42" stroke="#546273" strokeWidth="4" opacity="0.45" />
        <line x1="0" y1="67" x2="360" y2="67" stroke="#546273" strokeWidth="4" opacity="0.45" />

        <rect x="90" y="126" width="174" height="16" fill="#1e3f71" />
        <rect x="210" y="92" width="84" height="16" fill="#1e3f71" />
        <rect x="92" y="112" width="170" height="9" fill="#f0c74f" />
        <rect x="210" y="78" width="84" height="9" fill="#f0c74f" />

        {[94, 136, 178, 220, 262].map((x) => (
          <line key={x} x1={x} y1="126" x2={x} y2="214" stroke="#8ea0b5" strokeWidth="5" />
        ))}
        <line x1="234" y1="92" x2="234" y2="214" stroke="#8ea0b5" strokeWidth="5" />
        <line x1="278" y1="92" x2="278" y2="214" stroke="#8ea0b5" strokeWidth="5" />

        <path d="M288 92 L326 128" stroke="#f0c74f" strokeWidth="7" />
        <path d="M316 120 L356 120" stroke="#f0c74f" strokeWidth="7" />
        <path d="M316 132 L356 132" stroke="#1e3f71" strokeWidth="13" />
        {[0, 1, 2, 3].map((step) => (
          <line
            key={step}
            x1={291 + step * 9}
            y1={96 + step * 8}
            x2={320 + step * 9}
            y2={96 + step * 8}
            stroke="#e8eef5"
            strokeWidth="1.8"
          />
        ))}
      </svg>
    </div>
  );
}

function AutomationVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_22%_22%,rgba(90,155,255,0.18),transparent_26%),linear-gradient(180deg,#101b2b_0%,#09111d_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,181,255,0.18),transparent_30%)]" />
      <svg viewBox="0 0 360 260" className="absolute inset-0 h-full w-full">
        <rect x="24" y="34" width="198" height="124" rx="14" fill="#101a28" stroke="#80c6ff" strokeWidth="2.5" />
        <rect x="34" y="46" width="178" height="98" rx="8" fill="#162334" />
        {[60, 88, 116].map((y, idx) => (
          <g key={y}>
            <line x1="44" y1={y} x2="202" y2={y} stroke="#4a5563" strokeWidth="1.5" opacity="0.5" />
            <path
              d={`M52 ${y} H82 V${y - 12} H104 V${y + 12} H126 V${y - 12} H148`}
              fill="none"
              stroke={idx === 1 ? "#f0c74f" : "#66c0ff"}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}
        <rect x="248" y="52" width="66" height="118" rx="8" fill="#172536" stroke="#8fb7d9" strokeWidth="2.5" />
        <rect x="258" y="66" width="46" height="12" rx="3" fill="#304964" />
        {[0, 1, 2, 3, 4].map((idx) => (
          <rect key={idx} x="258" y={88 + idx * 14} width="46" height="9" rx="2" fill={idx % 2 === 0 ? "#5f9dd7" : "#d8e1ea"} />
        ))}
        <circle cx="281" cy="182" r="10" fill="#101a28" stroke="#8fb7d9" strokeWidth="2.5" />

        <circle cx="96" cy="204" r="10" fill="#18273a" />
        <rect x="91" y="214" width="10" height="20" rx="4" fill="#18273a" />
        <line x1="96" y1="224" x2="86" y2="242" stroke="#18273a" strokeWidth="5" />
        <line x1="96" y1="224" x2="106" y2="242" stroke="#18273a" strokeWidth="5" />
        <line x1="96" y1="216" x2="82" y2="230" stroke="#18273a" strokeWidth="5" />
        <line x1="96" y1="216" x2="112" y2="228" stroke="#18273a" strokeWidth="5" />

        <circle cx="136" cy="206" r="10" fill="#18273a" />
        <rect x="131" y="216" width="10" height="18" rx="4" fill="#18273a" />
        <line x1="136" y1="226" x2="128" y2="242" stroke="#18273a" strokeWidth="5" />
        <line x1="136" y1="226" x2="144" y2="242" stroke="#18273a" strokeWidth="5" />
        <line x1="136" y1="218" x2="120" y2="203" stroke="#18273a" strokeWidth="5" />
        <line x1="136" y1="218" x2="152" y2="202" stroke="#18273a" strokeWidth="5" />

      </svg>
    </div>
  );
}

function DomainVisual({ id }: { id: DomainId }) {
  if (id === "intelligence") return <ERLabsVisual />;
  if (id === "extrusion") return <ExtrusionVisual />;
  if (id === "factory") return <FactoryVisual />;
  return <AutomationVisual />;
}

export default function DomainGrid() {
  return (
    <section id="domains" className="px-6 pb-20 pt-6 sm:px-8 sm:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-industrial-accent">Core Domains</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.8rem]">
            Four integrated disciplines built for advanced production systems.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            Use the homepage like an engineering map. Each domain anchors a detailed section below with the underlying delivery scope.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-4">
          {domains.map((domain, idx) => (
            <motion.a
              key={domain.id}
              href={`#${domain.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative flex aspect-[0.96] min-h-[15.5rem] flex-col justify-end overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0d1725]/70 p-4 shadow-[0_24px_48px_rgba(0,0,0,0.32)] transition-all duration-300 hover:border-industrial-accent/55 hover:shadow-[0_28px_60px_rgba(0,0,0,0.4)] sm:min-h-[17rem] sm:p-5"
            >
              <DomainVisual id={domain.id} />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.02)_0%,rgba(8,12,18,0.08)_24%,rgba(8,12,18,0.22)_48%,rgba(8,12,18,0.72)_78%,rgba(8,12,18,0.9)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(212,175,55,0.08),rgba(212,175,55,0.0)_30%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(82,146,214,0.18),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,rgba(8,12,18,0)_0%,rgba(8,12,18,0.18)_18%,rgba(8,12,18,0.82)_100%)]" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="flex justify-between">
                  <div className="rounded-full border border-white/10 bg-[#09111d]/78 p-2.5 shadow-[0_0_24px_rgba(25,63,104,0.16)]">
                    {domain.icon}
                  </div>
                  <ArrowUpRight size={18} className="text-white/60 transition-colors group-hover:text-industrial-accent" />
                </div>
                <div className="pt-12 text-left">
                  <h3 className="mt-3 max-w-[12rem] text-lg font-semibold leading-tight text-white sm:text-xl">
                    {domain.title}
                  </h3>
                  <p className="mt-3 max-w-[15rem] text-xs leading-5 text-slate-100 sm:text-sm sm:leading-6">
                    {domain.descriptor}
                  </p>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-x-5 bottom-5 h-px bg-gradient-to-r from-industrial-accent/0 via-industrial-accent/70 to-industrial-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
