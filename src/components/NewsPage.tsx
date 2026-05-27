import { motion } from "motion/react";
import { ArrowRight, BarChart3, Factory, Gauge, LineChart, Route, Search, SlidersHorizontal } from "lucide-react";
import glassLineWide from "../assets/news/glass-line-wide.png";
import line277Dashboard from "../assets/news/line-277-dashboard.png";
import conveyingSystemsImage from "../assets/news/er-labs-conveying-systems.png";

type NewsPageProps = {
  variant?: "index" | "line277" | "conveying";
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

const conveyingInsights = [
  {
    title: "Behavior change",
    text: "ER Labs watches conveying behavior around pressure, vacuum, transfer efficiency, and demand shifts.",
    icon: Gauge,
  },
  {
    title: "Early blockage signals",
    text: "Gradual clogging, repeated interventions, and abnormal load can be identified before they become line stops.",
    icon: Search,
  },
  {
    title: "Supply and demand balance",
    text: "Material transfer capacity is compared with real consumption points and production demand.",
    icon: Route,
  },
  {
    title: "Control-layer context",
    text: "PLC, HMI, SCADA, and operational data are connected into a decision-support layer above the existing controls.",
    icon: SlidersHorizontal,
  },
];

const conveyingArticleBlocks = [
  { text: "ER Labs has developed an Industrial Intelligence layer for industrial conveying systems.", strong: true },
  { text: "Not to replace SCADA." },
  { text: "To extend it." },
  {
    text:
      "To add a layer that understands conveying behavior, detects operational change, and supports intervention before the issue reaches the production line.",
  },
  { text: "In most industrial plants, conveying systems are already connected to PLC, HMI, or SCADA platforms." },
  { text: "The data exists.\nThe alarms exist.\nThe screens exist." },
  { text: "But the operational decision is still mostly handled by people." },
  {
    text:
      "When to adjust the conveying rate.\nWhen to identify a filter starting to clog.\nWhen to recognize that the material has changed.\nWhen to stop before a blockage occurs.\nWhen to balance conveying capacity with production demand.",
  },
  { text: "This is where plants lose stability, throughput, and money." },
  { text: "A conveying system is not just piping, pumps, and valves." },
  {
    text:
      "It is an operational system affected by material behavior, pressure, vacuum, moisture, bulk density, filters, conveying distances, consumption points, production rates, and operator interventions.",
  },
  { text: "When one of these variables changes, the impact is not always visible immediately." },
  {
    text:
      "Sometimes it appears as a short stop.\nSometimes as a gradual drop in throughput.\nSometimes as a quality rejection.\nSometimes as a line that simply starts working harder.",
  },
  { text: "This is where ER Labs comes in." },
  {
    text:
      "ER Labs adds an Industrial Intelligence layer above existing control systems, designed to turn conveying data into clear operational decisions.",
  },
  { text: "Not just another alarm.\nNot just another trend.\nNot just another data report." },
  {
    text:
      "A layer that understands what is changing, what the operational meaning is, and where intervention is required.",
  },
  {
    text:
      "It can identify patterns such as reduced material transfer efficiency, early signs of blockage, repeated operator interventions, abnormal load at a consumption point, or a mismatch between material supply and production demand.",
  },
  { text: "The goal is not to add another screen to the factory." },
  { text: "The goal is to add a layer of understanding." },
  { text: "This is where Starosta Industrial specializes:" },
  {
    text:
      "Connecting control systems, HMI, SCADA, operational data, and AI intelligence layers in a way that supports production continuity, not just data visualization.",
  },
  { text: "Because in the end, a conveying problem is not only a material handling problem." },
  { text: "It is an operational control problem." },
  {
    text:
      "And when raw material supply is unstable, it quickly becomes a problem of throughput, quality, downtime, and P&L.",
  },
  { text: "SCADA shows the system.", strong: true },
  { text: "ER Labs helps control the flow.", strong: true },
  { text: "Not just conveying lines.", strong: true },
  { text: "Industrial intelligence in motion.", strong: true },
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

          <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
            <a
              href="/news/glass-bottle-line-277"
              className="group rounded-[1.4rem] border border-industrial-accent/22 bg-white/[0.035] p-7 transition-colors duration-300 hover:border-industrial-accent/55 hover:bg-white/[0.05]"
              data-analytics="content-link"
              data-analytics-section-name="news_index"
              data-analytics-service-name="line_277_case_story"
            >
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
                Case story
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                Line 277 | Glass Bottle Production Line Case Story
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                How ER Labs identified a 15% stability and efficiency gap during the feasibility stage.
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-industrial-accent">
                Read story
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href="/news/er-labs-conveying-systems"
              className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.025] transition-colors duration-300 hover:border-industrial-accent/45 hover:bg-white/[0.045]"
              data-analytics="content-link"
              data-analytics-section-name="news_index"
              data-analytics-service-name="er_labs_conveying_systems"
            >
              <img
                src={conveyingSystemsImage}
                alt="Industrial conveying pipe systems"
                className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.025]"
              />
              <div className="p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
                  Industrial intelligence note
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  ER Labs | Industrial Intelligence for Conveying Systems
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  A control-layer view of conveying behavior, material flow, blockage risk, and operational decision support.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-industrial-accent">
                  Read story
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function Line277Story({ onContactClick }: Pick<NewsPageProps, "onContactClick">) {
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

function ConveyingStory({ onContactClick }: Pick<NewsPageProps, "onContactClick">) {
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
                News / Industrial Intelligence
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                ER Labs: Industrial Intelligence for Conveying Systems
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Not to replace SCADA. To extend it with a layer that understands conveying behavior and supports intervention before instability reaches the production line.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-industrial-accent/24 bg-[linear-gradient(135deg,rgba(212,175,55,0.16),rgba(83,184,255,0.08))] p-6 shadow-[0_28px_60px_rgba(0,0,0,0.26)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
                Control-layer signal
              </p>
              <div className="mt-5 flex flex-col gap-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                <span>SCADA shows the system.</span>
                <span className="text-industrial-accent">ER Labs helps control the flow.</span>
              </div>
              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
                Not just conveying lines. Industrial intelligence in motion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <motion.figure
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.025]"
          >
            <img
              src={conveyingSystemsImage}
              alt="Industrial conveying pipe systems inside a production facility"
              className="h-full min-h-[24rem] w-full object-cover"
            />
          </motion.figure>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {conveyingInsights.map((insight, index) => {
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
            <h2 className="mt-6 text-3xl font-semibold text-white">Operational flow intelligence</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              A conveying problem is not only a material handling problem. It is an operational control problem that can quickly become a throughput, quality, downtime, and P&L problem.
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

          <motion.article
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-7 sm:p-9"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-industrial-accent">
              Article
            </p>
            <div className="mt-6 space-y-6 text-base leading-8 text-slate-300">
              {conveyingArticleBlocks.map((block, index) => {
                const lines = block.text.split("\n");
                return (
                  <p key={`${block.text.slice(0, 24)}-${index}`} className={block.strong ? "font-semibold text-white" : undefined}>
                    {lines.map((line, lineIndex) => (
                      <span key={line}>
                        {lineIndex > 0 && <br />}
                        {line}
                      </span>
                    ))}
                  </p>
                );
              })}
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}

export default function NewsPage({ variant = "index", onContactClick }: NewsPageProps) {
  if (variant === "line277") return <Line277Story onContactClick={onContactClick} />;
  if (variant === "conveying") return <ConveyingStory onContactClick={onContactClick} />;
  return <NewsIndex onContactClick={onContactClick} />;
}
