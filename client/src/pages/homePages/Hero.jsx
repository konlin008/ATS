import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Code2,
  FileText,
  Info,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    label: "Skills Match",
    value: "90%",
    color: "bg-emerald-500",
    icon: Boxes,
    tone: "bg-emerald-50 text-emerald-500",
  },
  {
    label: "Keywords",
    value: "80%",
    color: "bg-blue-600",
    icon: BadgeCheck,
    tone: "bg-emerald-50 text-emerald-500",
  },
  {
    label: "Experience",
    value: "75%",
    color: "bg-violet-500",
    icon: BriefcaseBusiness,
    tone: "bg-violet-50 text-violet-500",
  },
  {
    label: "Formatting",
    value: "95%",
    color: "bg-orange-500",
    icon: FileText,
    tone: "bg-rose-50 text-rose-500",
  },
];

const missingKeywords = ["Docker", "Kubernetes", "CI/CD", "AWS", "Jenkins"];
const matchedSkills = ["React", "Node.js", "JavaScript", "Express", "MongoDB"];

const avatars = [
  "bg-[linear-gradient(135deg,#f59e0b,#7c2d12)]",
  "bg-[linear-gradient(135deg,#38bdf8,#1e3a8a)]",
  "bg-[linear-gradient(135deg,#fb7185,#831843)]",
  "bg-[linear-gradient(135deg,#d6d3d1,#44403c)]",
  "bg-[linear-gradient(135deg,#fdba74,#9a3412)]",
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] w-full scroll-mt-16 items-center overflow-hidden bg-white text-slate-900"
    >
      <div className="relative z-10 w-full py-10 sm:py-12 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600 ring-1 ring-blue-100">
              <Sparkles className="mr-2 h-4 w-4" />
              AI-Powered ATS Resume Optimization
            </span>

            <h1 className="mt-7 text-5xl font-bold leading-[1.12] tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              Beat ATS.
              <br />
              Land More{" "}
              <span className="text-blue-600">Interviews.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Upload your resume, paste the job description, and get an ATS
              score, detailed analysis, and an optimized resume tailored to the
              job.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                className="inline-flex h-14 items-center justify-center gap-2 rounded-md bg-blue-600 px-7 text-base font-bold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                onClick={() => navigate("/upload-resume")}
              >
                Analyze My Resume
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-md border-slate-200 bg-white px-7 text-base font-bold text-blue-600 shadow-sm hover:bg-blue-50 hover:text-blue-700"
              >
                See How It Works
                <PlayCircle className="h-5 w-5" />
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar}
                    className={`h-10 w-10 rounded-full border-2 border-white shadow-sm ${avatar}`}
                    aria-label={`Job seeker ${index + 1}`}
                    role="img"
                  />
                ))}
              </div>
              <p className="max-w-64 text-sm leading-6 text-slate-600">
                Trusted by 5,000+ job seekers to land their dream jobs
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-blue-950/8 backdrop-blur sm:p-7">
              <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr]">
                <div className="border-slate-200 md:border-r md:pr-7">
                  <div className="flex items-center justify-center gap-2 text-center text-lg font-bold text-slate-950">
                    ATS Score
                    <Info className="h-4 w-4 text-slate-400" />
                  </div>
                  <div className="mt-5 border-t border-slate-100 pt-5">
                    <div className="relative mx-auto h-52 w-52">
                      <svg viewBox="0 0 160 160" className="h-full w-full">
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          className="fill-transparent stroke-slate-100"
                          strokeWidth="14"
                        />
                        <circle
                          cx="80"
                          cy="80"
                          r="60"
                          className="fill-transparent stroke-blue-600"
                          strokeWidth="14"
                          strokeLinecap="round"
                          strokeDasharray="316.67 60.32"
                          transform="rotate(-95 80 80)"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <p className="text-4xl font-bold text-slate-950">84%</p>
                        <p className="mt-2 text-sm font-bold text-emerald-500">
                          Good Match
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-base font-bold text-slate-950">
                    Score Breakdown
                  </p>
                  <div className="mt-5 space-y-5">
                    {stats.map((stat) => {
                      const Icon = stat.icon;

                      return (
                        <div
                          key={stat.label}
                          className="grid grid-cols-[2.5rem_1fr] items-center gap-3"
                        >
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-md ${stat.tone}`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center justify-between gap-4 text-sm font-bold text-slate-800">
                              <span>{stat.label}</span>
                              <span>{stat.value}</span>
                            </div>
                            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200">
                              <div
                                className={`${stat.color} h-full rounded-full`}
                                style={{ width: stat.value }}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-5 rounded-xl border border-slate-200 bg-white/95 p-6 shadow-2xl shadow-blue-950/8 backdrop-blur sm:grid-cols-2">
              <div>
                <h3 className="text-base font-bold text-slate-950">
                  Missing Keywords
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {missingKeywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-md bg-red-50 px-3 py-2 text-sm font-semibold text-red-500"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-950">
                  Top Skills Matched
                </h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {matchedSkills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-600"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
