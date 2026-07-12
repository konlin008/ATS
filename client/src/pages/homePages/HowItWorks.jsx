import {
  ChartColumn,
  CloudUpload,
  Download,
  FileDown,
  FileText,
  History,
  KeyRound,
  Sparkles,
  Target,
  WandSparkles,
} from "lucide-react";

const steps = [
  {
    title: "Upload Resume",
    description: "Upload your existing resume in PDF format.",
    icon: CloudUpload,
  },
  {
    title: "Paste Job Description",
    description: "Add the job description you're applying for.",
    icon: FileText,
  },
  {
    title: "AI Analysis",
    description: "Our AI analyzes your resume against ATS criteria.",
    icon: Sparkles,
  },
  {
    title: "Get Optimized Resume",
    description: "Download your ATS-friendly, optimized resume.",
    icon: Download,
  },
];

const features = [
  {
    title: "ATS Score",
    description: "Get a comprehensive ATS score based on industry standards.",
    icon: Target,
    tone: "bg-blue-50 text-blue-600",
  },
  {
    title: "Keyword Analysis",
    description: "Find missing keywords and important terms from the JD.",
    icon: KeyRound,
    tone: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "Detailed Insights",
    description: "Get in-depth analysis of your strengths and areas to improve.",
    icon: ChartColumn,
    tone: "bg-violet-50 text-violet-600",
  },
  {
    title: "AI Resume Optimizer",
    description: "Generate an optimized resume tailored to the job description.",
    icon: WandSparkles,
    tone: "bg-orange-50 text-orange-600",
  },
  {
    title: "PDF & LaTeX Export",
    description: "Download your optimized resume in PDF or LaTeX format.",
    icon: FileDown,
    tone: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "History & Tracking",
    description: "Track all your analyses and improvements over time.",
    icon: History,
    tone: "bg-rose-50 text-rose-600",
  },
];

function SectionLabel({ children }) {
  return (
    <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-600">
      {children}
    </span>
  );
}

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="min-h-[calc(100vh-4rem)] w-full scroll-mt-16 bg-white px-0 pb-16 pt-20 text-slate-950 sm:pt-24"
    >
      <div className="text-center">
        <SectionLabel>How It Works</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Simple Steps to a Better Resume
        </h2>
      </div>

      <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="relative flex flex-col items-center text-center"
            >
              {index < steps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+4.25rem)] right-[calc(-50%+4.25rem)] top-11 hidden border-t-2 border-dashed border-blue-100 lg:block"
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex h-22 w-22 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shadow-sm ring-1 ring-blue-100/70">
                <Icon className="h-10 w-10" strokeWidth={2.25} />
              </div>
              <h3 className="mt-7 text-lg font-bold text-slate-950">
                {index + 1}. {step.title}
              </h3>
              <p className="mt-3 max-w-54 text-base leading-7 text-slate-600">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>

      <div id="features" className="mt-18 scroll-mt-16 text-center sm:mt-20">
        <SectionLabel>Powerful Features</SectionLabel>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Everything You Need to Outperform ATS
        </h2>
      </div>

      <div className="mt-9 grid gap-6 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article
              key={feature.title}
              className="flex min-h-33 items-center gap-6 rounded-md border border-slate-200 bg-white p-7 shadow-sm shadow-slate-900/3"
            >
              <div
                className={`flex h-18 w-18 shrink-0 items-center justify-center rounded-lg ${feature.tone}`}
              >
                <Icon className="h-9 w-9" strokeWidth={2.35} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
