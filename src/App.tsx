import React, { useState } from "react";

type SectionId =
  | "intro"
  | "agenda"
  | "frustrations"
  | "mental-shift"
  | "workflow"
  | "embedding"
  | "routing"
  | "demo"
  | "takeaways";

const sections: { id: SectionId; label: string }[] = [
  { id: "intro", label: "Title" },
  { id: "agenda", label: "Agenda" },
  { id: "frustrations", label: "Why LLMs Frustrate Us" },
  { id: "mental-shift", label: "Deterministic vs Probabilistic" },
  { id: "workflow", label: "Workflow Accelerator" },
  { id: "embedding", label: "Embedding in Products" },
  { id: "routing", label: "Smaller Models + Routing" },
  { id: "demo", label: "Digital Signage Demo" },
  { id: "takeaways", label: "Key Takeaways" },
];

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 flex flex-col">
      <header className="flex items-center justify-between border-b border-slate-800 px-6 py-3 bg-slate-950/80 backdrop-blur">
        <div className="text-sm font-medium tracking-wide text-teal-300 uppercase">
          LLMs in Production
        </div>
        <div className="text-xs text-slate-400">
          30-minute mini seminar · Technical · Cultural · Strategic
        </div>
      </header>
      <main className="flex-1 flex overflow-hidden">
        {children}
      </main>
    </div>
  );
}

function SidebarNav({
  current,
  onSelect,
}: {
  current: SectionId;
  onSelect: (id: SectionId) => void;
}) {
  return (
    <nav className="w-64 border-r border-slate-800 bg-slate-950/60 backdrop-blur hidden md:flex flex-col">
      <div className="px-4 py-3 text-xs font-semibold tracking-wide text-slate-400 uppercase">
        Index
      </div>
      <ol className="flex-1 overflow-y-auto text-sm">
        {sections.map((s, i) => (
          <li key={s.id}>
            <button
              onClick={() => onSelect(s.id)}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                current === s.id
                  ? "bg-slate-800/80 text-slate-50 border-l border-teal-400"
                  : "text-slate-400 hover:bg-slate-900/70 hover:text-slate-50 border-l border-transparent"
              }`}
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-mono text-slate-300">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span>{s.label}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="border-t border-slate-800 px-4 py-3 text-[11px] leading-relaxed text-slate-400">
        Lukas Benneberg - 2026
      </div>
    </nav>
  );
}

function SlideShell({
  title,
  subtitle,
  children,
  notes,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  notes?: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col md:flex-row">
      <section className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-5xl rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 px-6 sm:px-10 py-6 sm:py-8 shadow-xl shadow-slate-950/70">
          <header className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-1 text-sm sm:text-base text-teal-300/90">
                {subtitle}
              </p>
            )}
          </header>
          <div className="space-y-4 text-sm sm:text-base text-slate-100">
            {children}
          </div>
        </div>
      </section>
      <aside className="w-full md:w-80 border-t md:border-t-0 md:border-l border-slate-800 bg-slate-950/80 px-4 py-4 sm:px-5 sm:py-5 text-xs text-slate-300 flex flex-col gap-2">
        <div className="font-semibold text-slate-200 flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-amber-500/10 text-amber-300 text-[10px] font-mono border border-amber-500/40">
            Notes
          </span>
          Seminar notes for presenter — not visible to audience
        </div>
        <div className="space-y-2 leading-relaxed max-h-64 overflow-y-auto pr-1">
          {notes}
        </div>
      </aside>
    </div>
  );
}

function IntroSlide() {
  return (
    <SlideShell
      title="LLMs in Production: What Breaks, What Works, and Why"
      subtitle="A practical mental model for developers, product, QA and leadership"
      notes={
        <>
          <p>
            Set the tone: this is not another "AI is magic" talk. It is about
            how to think about LLMs as engineering components.
          </p>
          <p>
            Connect to previous sessions: coding conventions, agents, MCP.
            Explain that this talk gives the underlying mental model that makes
            those practices make sense.
          </p>
          <p>
            Emphasise the three aims: technical alignment, cultural mindset
            shift, and strategic positioning of AI.
          </p>
        </>
      }
    >
      <p>
        The goal of this session is to build a shared mental model for how
        Large Language Models behave in real products  not just in ChatGPT.
      </p>
      <ul className="mt-4 space-y-2 list-disc list-inside text-slate-100/90">
        <li>Why LLMs can feel brilliant and broken at the same time</li>
        <li>How coding conventions and workflow make agents dramatically better</li>
        <li>What it means to embed probabilistic systems safely into our stack</li>
      </ul>
      <p className="mt-4 text-sm text-slate-400">
        30-minute session. Deeper discussion after  bring examples,
        frustrations, and ideas.
      </p>
    </SlideShell>
  );
}

function AgendaSlide() {
  const items = [
    {
      label: "Hook: Why LLMs frustrate us",
      time: "0–3 min",
    },
    {
      label: "The core mental shift: Deterministic vs Probabilistic",
      time: "3–8 min",
    },
    {
      label: "LLMs as a workflow accelerator (coding conventions)",
      time: "8–15 min",
    },
    {
      label: "Embedding LLMs in our products",
      time: "15–21 min",
    },
    {
      label: "Why smaller models + routing wins",
      time: "21–25 min",
    },
    {
      label: "Concrete demo: Digital signage prompt design",
      time: "25–28 min",
    },
    {
      label: "Key takeaways & what AI maturity means for us",
      time: "28–30 min",
    },
  ];
  return (
    <SlideShell
      title="Agenda"
      subtitle="What we'll cover in ~30 minutes"
      notes={
        <>
          <p>
            Walk through the flow so people know where you are. Emphasise that
            there will be a concrete demo, not only concepts.
          </p>
          <p>
            Flag the "smaller models + routing" section as something of special
            interest for the board because it speaks to efficiency and cost
            control.
          </p>
        </>
      }
    >
      <ol className="space-y-2 text-sm sm:text-base">
        {items.map((item, i) => (
          <li
            key={item.label}
            className="flex items-center justify-between rounded-md border border-slate-800/80 bg-slate-900/60 px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 text-[11px] font-mono">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <span>{item.label}</span>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {item.time}
            </span>
          </li>
        ))}
      </ol>
    </SlideShell>
  );
}

function FrustrationsSlide() {
  const points = [
    "It wrote perfect code… then failed on the second attempt with the same prompt",
    "It hallucinated an API, library or function that simply doesn't exist",
    "It 'forgot' a constraint you gave it 10 messages earlier in the same chat",
    "It gave brilliant output today and confusing output tomorrow — same question",
    "It confidently told you something wrong, with zero indication of uncertainty",
  ];
  return (
    <SlideShell
      title="Why Do LLMs Frustrate Us?"
      subtitle="You've probably experienced at least one of these…"
      notes={
        <>
          <p>
            Use this as a relatable hook. Ask for a quick show of hands: "Who
            has seen one of these in the last week?".
          </p>
          <p>
            Close by teasing the key message: the problem is not (only) the
            model, but the mental model and the way we integrate it.
          </p>
        </>
      }
    >
      <ul className="space-y-2">
        {points.map((p) => (
          <li
            key={p}
            className="rounded-md border border-amber-500/30 bg-amber-500/5 px-3 py-2 text-sm sm:text-base text-slate-50"
          >
            {p}
          </li>
        ))}
      </ul>
      <div className="mt-4 rounded-md border border-amber-500/60 bg-amber-500/10 px-3 py-2 text-xs sm:text-sm text-amber-100 font-medium">
        The problem is not the model. The problem is expecting deterministic
        behaviour from a probabilistic system.
      </div>
    </SlideShell>
  );
}

function MentalShiftSlide() {
  const left = [
    "Same input → always same output",
    "Explicit control flow, traceable step by step",
    "Unit-testable with reliable pass / fail",
    "Precise – errors are deterministic bugs",
    "Best for logic, routing, validation, data",
  ];
  const right = [
    "Same input → distribution of outputs",
    "Implicit statistical reasoning, not explicit logic",
    "Must be validated externally – output is never guaranteed",
    "Approximate – confident ≠ correct",
    "Best for language, generation, fuzzy reasoning",
  ];
  return (
    <SlideShell
      title="The Core Mental Shift"
      subtitle="Deterministic code vs. probabilistic systems"
      notes={
        <>
          <p>
            Draw a clear line between traditional software (deterministic) and
            LLMs (probabilistic). This underpins every other slide.
          </p>
          <p>
            Make it concrete: in deterministic code, if a test passes today it
            passes tomorrow. With LLMs, you can only talk about probabilities
            and guardrails.
          </p>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-md border border-slate-700 bg-slate-900/80 p-4">
          <h2 className="mb-2 text-sm font-semibold text-slate-100 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-slate-800 text-slate-200 text-xs">
              Code
            </span>
            Deterministic Code
          </h2>
          <ul className="space-y-1.5 text-sm text-slate-100/90">
            {left.map((p) => (
              <li key={p}>→ {p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-fuchsia-700/70 bg-fuchsia-950/40 p-4">
          <h2 className="mb-2 text-sm font-semibold text-fuchsia-100 flex items-center gap-2">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-fuchsia-700 text-slate-50 text-xs">
              LLM
            </span>
            LLM (Probabilistic)
          </h2>
          <ul className="space-y-1.5 text-sm text-fuchsia-50/90">
            {right.map((p) => (
              <li key={p}>≈ {p}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 rounded-md border border-teal-500/60 bg-teal-500/10 px-3 py-2 text-xs sm:text-sm text-teal-100">
        Most LLM frustration = expecting deterministic behaviour from a
        probabilistic system.
      </div>
    </SlideShell>
  );
}

function WorkflowSlide() {
  const blocks = [
    {
      title: "Think Before You Prompt",
      body: "Clear plan + AI = fast. No plan + AI = fast in the wrong direction. Write plan.md → tasks.md → then prompt.",
    },
    {
      title: "Structure Beats Chat",
      body: "spec.md, prd.md, interfaces.ts first. Give the model a framework – it replicates patterns it can clearly see.",
    },
    {
      title: "Iterate Small",
      body: "'Create the interface' → 'Implement' → 'Write the tests' beats one huge prompt every time.",
    },
    {
      title: "Log Everything",
      body: "Full system prompt, full user message, full raw response. If you don't log, you're guessing – not debugging.",
    },
    {
      title: "Validate Output",
      body: "Never trust blindly. Parse, schema-check, test. LLM output is a first draft – not a finished result.",
    },
    {
      title: "Manage Context",
      body: "Context windows are finite. Summarise earlier turns explicitly. Design for overflow from day one.",
    },
  ];
  return (
    <SlideShell
      title="LLM as a Workflow Accelerator"
      subtitle="Augmenting how you work — not replacing what you build"
      notes={
        <>
          <p>
            Connect directly to your boss's points on coding conventions and
            workflow. Emphasise that these are not "nice to have"; they are how
            we make probabilistic systems reliable in practice.
          </p>
          <p>
            Highlight the cultural angle: good AI use looks like disciplined
            engineering, not magic prompts.
          </p>
        </>
      }
    >
      <p className="text-sm text-slate-300 mb-2">
        This is the WHY behind our coding conventions for AI agents:
        explicit types, clear naming, interfaces first, consistent patterns.
      </p>
      <div className="grid gap-3 sm:grid-cols-3 text-sm">
        {blocks.map((b) => (
          <div
            key={b.title}
            className="rounded-md border border-slate-800 bg-slate-900/70 p-3 flex flex-col gap-1.5"
          >
            <h3 className="text-xs font-semibold tracking-wide text-teal-300 uppercase">
              {b.title}
            </h3>
            <p className="text-slate-100/90 text-[13px]">{b.body}</p>
          </div>
        ))}
      </div>
    </SlideShell>
  );
}

function EmbeddingSlide() {
  const left = [
    "Dynamic promotional copy on displays",
    "Natural language playlist / scheduling",
    "Auto-tagging and categorising media",
    "Chatbot or assistant inside the platform",
    "Summarising content feeds automatically",
  ];
  const right = [
    "Latency: 0.5–5s per call. Async, streaming, or pre-generation?",
    "Cost: tokens = money. Bad prompts → cost explosion.",
    "Routing: small model for classification, large for reasoning.",
    "Context limits: design for finite windows and overflow.",
    "Guardrails: validate JSON, sanitise, moderate before display.",
    "Fallbacks: if the API is down, what does the screen show?",
  ];
  return (
    <SlideShell
      title="Embedding LLMs in Your Product"
      subtitle="Using an LLM yourself vs. shipping one inside a product are very different problems"
      notes={
        <>
          <p>
            Shift from personal productivity to product engineering. Stress
            that once it's in the product, you need SLAs, observability,
            guardrails and fallbacks.
          </p>
          <p>
            Tie to your domain (digital signage) so it feels concrete for the
            board and non-engineers.
          </p>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
        <div className="rounded-md border border-slate-800 bg-slate-900/70 p-4">
          <h2 className="mb-2 text-sm font-semibold text-slate-200">
            Relevant for Digital Signage
          </h2>
          <ul className="space-y-1.5 text-sm text-slate-100/90">
            {left.map((p) => (
              <li key={p}>→ {p}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-md border border-slate-800 bg-slate-900/70 p-4">
          <h2 className="mb-2 text-sm font-semibold text-slate-200">
            Key Engineering Concerns
          </h2>
          <ul className="space-y-1.5 text-sm text-slate-100/90">
            {right.map((p) => (
              <li key={p}>→ {p}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 rounded-md border border-amber-500/60 bg-amber-500/10 px-3 py-2 text-xs sm:text-sm text-amber-100">
        Deterministic layers around probabilistic cores = robust,
        shippable systems.
      </div>
    </SlideShell>
  );
}

function RoutingSlide() {
  return (
    <SlideShell
      title="Why Smaller Models + Routing Wins"
      subtitle="Architectural thinking beyond experimenting with ChatGPT"
      notes={
        <>
          <p>
            Aim this at leadership: efficiency and control. Explain that most of
            our real workloads are simple classification or extraction tasks.
          </p>
          <p>
            Walk the diagram left to right: request comes in → cheap model tags
            the intent → router chooses between deterministic logic, small
            model, or expensive model.
          </p>
          <p>
            Emphasise the message: AI maturity is about architectures and
            safety, not about who has access to the latest model.
          </p>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 text-sm">
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-200">
            90% of tasks don't need GPT‑4 class reasoning
          </h2>
          <ul className="space-y-1.5 text-slate-100/90">
            <li>Most of our realistic use cases are classification or extraction.</li>
            <li>
              Example: "Is this asset safe to show?" · "Which campaign bucket
              does this belong to?" · "Pull product IDs from this text".
            </li>
            <li>
              These are fast, cheap, and more stable on small specialised
              models.
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h2 className="text-sm font-semibold text-slate-200">
            Routing Architecture
          </h2>
          <ol className="space-y-1.5 text-slate-100/90 list-decimal list-inside">
            <li>Cheap model for tagging / intent detection / routing.</li>
            <li>
              If task is simple → deterministic logic or small model handles it.
            </li>
            <li>
              Only send complex generation or reasoning to an expensive model.
            </li>
            <li>
              Always keep a deterministic fallback path for critical flows.
            </li>
          </ol>
          <p className="text-xs text-slate-400 mt-2">
            Result: lower cost, tighter latency bounds, and predictable
            behaviour – with the option to "spend" intelligence only where it
            pays off.
          </p>
        </div>
      </div>
    </SlideShell>
  );
}

function DemoSlide() {
  return (
    <SlideShell
      title="Concrete Demo: Digital Signage Prompt"
      subtitle="Retail screen — generate promotional copy dynamically"
      notes={
        <>
          <p>
            Talk through the naive vs structured prompt. Emphasise that the
            right-hand side is constraint engineering: the prompt becomes a
            product contract, not a one-off chat.
          </p>
          <p>
            If you demo live, use this slide as the reference and show how the
            JSON output can be validated and rendered into actual signage.
          </p>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 text-sm">
        <div className="rounded-md border border-red-700/80 bg-red-950/40 p-4">
          <h2 className="mb-2 text-sm font-semibold text-red-100">
            Naive Prompt
          </h2>
          <p className="text-xs font-mono text-red-100/90 bg-black/30 rounded px-2 py-1 mb-2">
            "Write a promotional message for a summer sale."
          </p>
          <p className="text-slate-100/90 text-[13px] mb-2">
            Output: generic copy, no structure, impossible to parse.
          </p>
          <ul className="space-y-1.5 text-[13px] text-red-100/90">
            <li>✗ Vague & generic</li>
            <li>✗ Brand-inconsistent</li>
            <li>✗ No structure → can't parse into UI components</li>
            <li>✗ Feels unreliable to stakeholders</li>
          </ul>
        </div>
        <div className="rounded-md border border-emerald-700/80 bg-emerald-950/40 p-4">
          <h2 className="mb-2 text-sm font-semibold text-emerald-100">
            Structured Prompt
          </h2>
          <p className="text-xs font-mono text-emerald-100/90 bg-black/30 rounded px-2 py-1 mb-2">
            System: "You are a copy generator for retail digital signage. Output
            valid JSON only. Max 20 words. Tone: energetic but premium. No
            emojis. Audience: Scandinavian fashion retail."
          </p>
          <p className="text-xs font-mono text-emerald-100/90 bg-black/30 rounded px-2 py-1 mb-2">
            User: "30% summer sale — linen shirts."
          </p>
          <p className="text-[13px] text-slate-50 mb-1">Output (example):</p>
          <pre className="text-[11px] bg-black/40 rounded px-3 py-2 overflow-x-auto text-emerald-100 border border-emerald-500/40">
{`{
  "headline": "30% Off Linen Essentials",
  "body": "Lightweight summer styles crafted for comfort and elegance."
}`}
          </pre>
        </div>
      </div>
      <div className="mt-4 rounded-md border border-teal-500/60 bg-teal-500/10 px-3 py-2 text-xs sm:text-sm text-teal-100">
        This is not prompt engineering. This is constraint engineering — and
        now it's a product component.
      </div>
    </SlideShell>
  );
}

function TakeawaysSlide() {
  const points = [
    "LLMs are probabilistic engines — not databases, not a reliable function.",
    "Structure, naming, interfaces and plans work because they reduce ambiguity for a probabilistic system.",
    "If you don't log full prompts and full responses, you are guessing — not debugging.",
    "Using an LLM yourself vs. shipping one in a product are fundamentally different engineering problems.",
    "Deterministic layers around probabilistic cores = robust, production-grade systems.",
    "AI maturity ≠ who uses ChatGPT. AI maturity = who integrates probabilistic systems safely into deterministic products.",
  ];
  return (
    <SlideShell
      title="Key Takeaways"
      subtitle="What to carry out of this room"
      notes={
        <>
          <p>
            Use this slide to recap and then explicitly invite questions. Ask
            the board what "AI maturity" should mean for the company in the
            next 12–24 months.
          </p>
          <p>
            Suggest next steps: internal coding standards for AI, a small
            cross-functional working group, or a pilot around routing & small
            models.
          </p>

          <p>
            My boss asked me if I could prepare a small 30min mini seminar to share some knowledge within the areas of ai technology for my coworkers and the company board.

He then posted me this:
Well, several people have given short 15-30 minute trainings how they see AI in their life

CODING CONVENTIONS THAT MAKE AGENTS BETTER

Small adjustments in how we write code have an outsized impact on AI output quality:

Explicit types over inference where possible. Agents generate more consistent code when types are spelled out.

Descriptive naming. Sounds obvious, but agents extrapolate heavily from names. CalculateAirtimeCredit() produces far better suggestions than Calc().

Define interfaces and contracts first. Write your interfaces, DTOs, and proto files first, then let the agent implement against them. It has a clear framework to work within.

Consistent patterns. Once you establish a pattern (e.g. a repository pattern, a handler structure), the agent recognizes it and replicates it reliably. Deviations confuse it.

WORKFLOW

Think before you prompt. The biggest productivity gain isn't faster typing. It's having a clear plan and letting AI accelerate the execution. Clear plan + AI = extremely fast. No plan + AI = fast in the wrong direction.

Iterate, don't big-bang. 5 small prompts beat 1 massive one. "Create the interface" → "Implement the service" → "Write the tests" works far better than "Build me the whole feature".

Commit early, commit often. Agents work best on a clean git state. If something goes wrong, git reset is much faster than manual rollback. Small commits are your safety net.

Review EVERYTHING. Agents hallucinate – especially with package imports, API calls, and configuration. If you don't understand what the generated code does, it doesn't belong in the repo.

Yesterday's 15-minute UI and AI workshop was (se attached image with screenshots)from Vertiseit

I made a powerpoint (see attached). Can you please rview it and share your sincere honest opinion and share some feedback please?

And then help me tune this mini seminar powerpoint into the best it can get

I am aiming for:

A) Technical alignment
B) Cultural mindset shift
C) Strategic positioning of AI in the company

Maybe I fex should add:
One Slide on “Why Smaller Models + Routing Wins”

This is a very advanced insight and boards love efficiency:

90% of tasks are classification or extraction.
They don’t need GPT-4 class reasoning.

Explain:

Cheap model for tagging

Expensive model only for complex generation

Deterministic fallback

That signals architectural thinking beyond experimentation.

Maybe for the board I shoud end with something like:

AI maturity = not who uses ChatGPT
AI maturity = who integrates probabilistic systems safely into deterministic products
          </p>
        </>
      }
    >
      <ul className="space-y-2 text-sm sm:text-base">
        {points.map((p) => (
          <li
            key={p}
            className="rounded-md border border-slate-800 bg-slate-900/70 px-3 py-2 text-slate-100/95"
          >
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs sm:text-sm text-teal-200">
        Happy to stay and go deeper — bring your questions, examples, and
        frustrations.
      </p>
    </SlideShell>
  );
}

export function App() {
  const [current, setCurrent] = useState<SectionId>("intro");

  let slide: React.ReactElement;
  switch (current) {
    case "intro":
      slide = <IntroSlide />;
      break;
    case "agenda":
      slide = <AgendaSlide />;
      break;
    case "frustrations":
      slide = <FrustrationsSlide />;
      break;
    case "mental-shift":
      slide = <MentalShiftSlide />;
      break;
    case "workflow":
      slide = <WorkflowSlide />;
      break;
    case "embedding":
      slide = <EmbeddingSlide />;
      break;
    case "routing":
      slide = <RoutingSlide />;
      break;
    case "demo":
      slide = <DemoSlide />;
      break;
    case "takeaways":
      slide = <TakeawaysSlide />;
      break;
    default:
      slide = <IntroSlide />;
  }

  return (
    <Layout>
      <SidebarNav current={current} onSelect={setCurrent} />
      <div className="flex-1 flex flex-col">
        <div className="md:hidden border-b border-slate-800 bg-slate-950/90 px-3 py-2 text-xs text-slate-300 flex items-center gap-2 overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setCurrent(s.id)}
              className={`px-2 py-1 rounded-full border text-[11px] whitespace-nowrap ${
                current === s.id
                  ? "border-teal-400 bg-teal-500/10 text-teal-200"
                  : "border-slate-700 bg-slate-900 text-slate-300"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
        {slide}
      </div>
    </Layout>
  );
}
