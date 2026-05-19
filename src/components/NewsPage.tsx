import { motion } from "motion/react";
import { ArrowRight, BarChart3, Factory, Gauge, LineChart, Search } from "lucide-react";
import glassLineWide from "../assets/news/glass-line-wide.png";
import line277Dashboard from "../assets/news/line-277-dashboard.png";

type NewsPageProps = {
  variant?: "index" | "story";
  onContactClick: () => void;
};

const insights = [
  {
    title: "Line stability",
    text: "ER Labs treats stability as a measurable operating state, not only as an operator impression.",
    icon: Gauge,
  },
  {
    title: "Repeating stop patterns",
    text: "Short stops, adjustments, and recurring downtime reasons are grouped into visible production patterns.",
    icon: LineChart,
  },
  {
    title: "Bottleneck detection",
    text: "The analysis compares availability, performance, throughput, quality, and downtime signals to identify where capacity is being lost.",
    icon: Search,
  },
  {
    title: "Operational visibility",
    text: "Factory data is translated into clear engineering signals for feasibility decisions and improvement planning.",
    icon: BarChart3,
  },
];

const storySections = [
  {
    title: "Context",
    body:
      "Line 277 is presented as a glass bottle production-line case story for ER Labs industrial intelligence. The work focus is feasibility-stage learning: understanding where the line may lose stability, throughput, and efficiency before locking a wider improvement program.",
  },
  {
    title: "Engineering question",
    body:
      "The practical question is not only whether the line can produce, but whether the production behavior is stable enough to support a stronger operating window. ER Labs looks for repeated loss patterns, bottlenecks, downtime concentration, and weak visibility across the production flow.",
  },
  {
    title: "Data interpretation",
    body:
      "The dashboard view combines OEE, availability, performance, quality, throughput, scrap rate, downtime reasons, and trend behavior. These signals help separate visible symptoms from the process or operational constraints that may be driving them.",
  },
  {
    title: "Outcome",
    body:
      "A 15% potential stability and efficiency improvement was identified during the feasibility and project-learning stage. This is framed as an engineering opportunity for further validation, not as an unsupported claim of final production implementation.",
  },
];

function NewsIndex({ onContactClick }: Pick<NewsPageProps, "onContactClick">) {
  return (
    <main className="min-h-screen pt-20">
      <section className="px-4 pb-14 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-industrial-accent">
                News / Case Stories
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Industrial case stories and process intelligence notes.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                A focused public library for Starosta Industrial work stories, ER Labs findings, and practical manufacturing intelligence material.
              </p>
            </div>

            <a
              href="/news/glass-bottle-line-277"
              className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#0b1521] p-4 shadow-[0_28px_60px_rgba(0,0,0,0.25)]"
            >
              <img
                src={glassLineWide}
                alt="Glass bottle production line case story"
                className="h-[22rem] w-full rounded-[1.25rem] object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-b-[1.25rem] bg-[#07101b]/82 p-5 backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
                  Featured case story
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Line 277 | Glass Bottle Production Line
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  ER Labs identified a 15% stability and efficiency gap during the feasibility stage.
                </p>
              </div>
            </a>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-[1.4rem] border border-industrial-accent/22 bg-white/[0.035] p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
                Case story
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Line 277 | Glass Bottle Production Line Case Story
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                How ER Labs identified a 15% stability and efficiency gap during the feasibility stage.
              </p>
              <a
                href="/news/glass-bottle-line-277"
                className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-industrial-accent"
              >
                Read story
                <ArrowRight size={14} />
              </a>
            </article>

            <article className="rounded-[1.4rem] border border-white/10 bg-white/[0.025] p-7">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Next stories
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                More operational intelligence notes will be added here.
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                Future entries can cover extrusion, compounding, automation, PLC/HMI visibility, bottleneck analysis, and factory data diagnostics.
              </p>
              <button
                type="button"
                onClick={onContactClick}
                className="mt-6 rounded-sm border border-industrial-accent/70 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-industrial-accent transition-all duration-300 hover:bg-industrial-accent hover:text-industrial-dark"
              >
                Start a similar analysis
              </button>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

function CaseStory({ onContactClick }: Pick<NewsPageProps, "onContactClick">) {
  return (
    <main className="min-h-screen pt-20">
      <section className="relative overflow-hidden px-4 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "46px 46px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-end"
          >
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-industrial-accent">
                News / Case Stories
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                Line 277 | Glass Bottle Production Line
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                How ER Labs identified a 15% stability and efficiency gap during the feasibility stage.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-industrial-accent/24 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(83,184,255,0.08))] p-6 shadow-[0_28px_60px_rgba(0,0,0,0.26)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
                Result signal
              </p>
              <div className="mt-5 flex items-end gap-4">
                <span className="text-7xl font-semibold leading-none text-white">15%</span>
                <span className="pb-2 text-xl font-semibold leading-tight text-slate-100">
                  potential improvement identified
                </span>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                During feasibility and project-learning stage.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025]"
          >
            <img src={glassLineWide} alt="Wide glass bottle production line" className="h-full min-h-[22rem] w-full object-cover" />
          </motion.figure>
          <div className="grid gap-4">
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.05 }}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025]"
            >
              <img src={glassLineWide} alt="Glass bottles moving through a production line" className="h-[18rem] w-full object-cover object-right" />
            </motion.figure>
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: 0.1 }}
              className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025]"
            >
              <img src={line277Dashboard} alt="Line 277 ER Labs production dashboard" className="h-[18rem] w-full object-cover object-left" />
            </motion.figure>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <motion.article
                  key={insight.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                  className="rounded-[1.35rem] border border-white/10 bg-white/[0.035] p-6"
                >
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full border border-industrial-accent/30 bg-industrial-accent/10 text-industrial-accent">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{insight.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{insight.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="h-fit rounded-[1.5rem] border border-industrial-accent/24 bg-[#0a1421] p-7 lg:sticky lg:top-28">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-industrial-accent/35 bg-industrial-accent/10 text-industrial-accent">
              <Factory size={22} />
            </div>
            <h2 className="mt-6 text-3xl font-semibold text-white">Case story summary</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              This page is written as a public case-story foundation. It can later be expanded with approved client details, deeper event timelines, and verified implementation results.
            </p>
            <button
              type="button"
              onClick={onContactClick}
              className="mt-7 inline-flex items-center gap-3 rounded-sm border border-industrial-accent/70 px-5 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-industrial-accent transition-all duration-300 hover:bg-industrial-accent hover:text-industrial-dark"
            >
              Start a similar analysis
              <ArrowRight size={14} />
            </button>
          </aside>

          <div className="grid gap-5">
            {storySections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-7"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">{section.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function NewsPage({ variant = "index", onContactClick }: NewsPageProps) {
  return variant === "story" ? <CaseStory onContactClick={onContactClick} /> : <NewsIndex onContactClick={onContactClick} />;
}
