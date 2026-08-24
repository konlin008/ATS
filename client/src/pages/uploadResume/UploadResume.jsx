import { useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  BadgeCheck,
  CheckCheck,
  ClipboardList,
  CloudUpload,
  FileText,
  LoaderCircle,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  WandSparkles,
  X,
} from "lucide-react";

const featureCards = [
  {
    tag: "ATS Score",
    about: "Get a detailed compatibility score before you apply.",
    icon: TrendingUp,
    tone: "bg-blue-50 text-blue-600 ring-blue-100",
  },
  {
    tag: "AI Analysis",
    about: "Compare your resume against the job description.",
    icon: ReceiptText,
    tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
  },
  {
    tag: "Better Match",
    about: "Improve your resume and land more interviews.",
    icon: CheckCheck,
    tone: "bg-violet-50 text-violet-600 ring-violet-100",
  },
];

const scoreItems = [
  { label: "Keyword Match", value: 82, color: "bg-blue-600" },
  { label: "Role Alignment", value: 74, color: "bg-emerald-500" },
  { label: "Formatting", value: 91, color: "bg-orange-500" },
];

const preparationSteps = [
  "PDF resume selected",
  "Job description added",
  "Ready for ATS analysis",
];

const UploadResume = () => {
  const fileInputRef = useRef(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const wordCount = useMemo(() => {
    return jobDescription.trim()
      ? jobDescription.trim().split(/\s+/).filter(Boolean).length
      : 0;
  }, [jobDescription]);

  const isReady = Boolean(resumeFile) && jobDescription.trim().length > 0;

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    window.setTimeout(() => setIsAnalyzing(false), 900);
  };

  const handleFileChange = (file) => {
    if (file?.type === "application/pdf") {
      setResumeFile(file);
    }
  };

  const handleRemoveFile = () => {
    setResumeFile(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full py-8 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-600 ring-1 ring-blue-100">
            <Sparkles className="mr-2 h-4 w-4" />
            Resume Match Analyzer
          </span>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-normal text-slate-950 sm:text-4xl">
            Upload your resume and job description
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            Get an ATS score, missing keyword insights, and AI-backed
            recommendations tailored to the role you want.
          </p>
        </div>

        <Card className="rounded-lg border-slate-200 bg-slate-50/80 p-4 shadow-sm">
          <div className="grid gap-3 sm:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.tag}
                  className="grid grid-cols-[2.5rem_1fr] items-start gap-3 rounded-md bg-white p-3 ring-1 ring-slate-200"
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-md ring-1 ${feature.tone}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-950">
                      {feature.tag}
                    </p>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                      {feature.about}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_22rem]">
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">
                Resume Details
              </h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Add your current resume and paste the job post you are applying
                for.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-md bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700 ring-1 ring-emerald-100">
              <ShieldCheck className="h-4 w-4" />
              PDF only
            </div>
          </div>

          <div className="mt-6 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Field>
                <FieldLabel htmlFor="resume">Resume</FieldLabel>
                <label
                  htmlFor="resume"
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault();
                    handleFileChange(event.dataTransfer.files?.[0]);
                  }}
                  className="mt-2 flex min-h-72 cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-blue-200 bg-blue-50/50 px-5 py-8 text-center transition-colors hover:border-blue-400 hover:bg-blue-50"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                    <CloudUpload className="h-7 w-7" />
                  </div>
                  <p className="mt-5 text-base font-bold text-slate-950">
                    Drop your resume here
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Choose a PDF resume from your device to begin the ATS check.
                  </p>
                  <span className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm shadow-blue-600/20">
                    Browse Files
                  </span>
                </label>
                <Input
                  id="resume"
                  ref={fileInputRef}
                  type="file"
                  accept="application/pdf"
                  className="sr-only"
                  onChange={(event) =>
                    handleFileChange(event.target.files?.[0] ?? null)
                  }
                />
                <FieldDescription>
                  Supported format: PDF. For best results, use a text-based
                  resume file.
                </FieldDescription>
              </Field>

              {resumeFile && (
                <div className="mt-4 flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-100 text-slate-600">
                      <FileText className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-950">
                        {resumeFile.name}
                      </p>
                      <p className="text-xs text-slate-500">
                        {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label="Remove resume"
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
                    onClick={handleRemoveFile}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>

            <Field>
              <div className="flex items-center justify-between gap-4">
                <FieldLabel htmlFor="job-description">
                  Job Description
                </FieldLabel>
                <span className="text-xs font-medium text-slate-500">
                  {wordCount} words
                </span>
              </div>
              <textarea
                id="job-description"
                value={jobDescription}
                onChange={(event) => setJobDescription(event.target.value)}
                placeholder="Paste the complete job description here..."
                className="mt-2 min-h-72 w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
              <FieldDescription>
                Include responsibilities, required skills, preferred skills,
                and seniority details for a better analysis.
              </FieldDescription>
            </Field>
          </div>
        </section>

        <aside className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-slate-950 text-white">
              <ClipboardList className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-950">
                Analysis Preview
              </h2>
              <p className="text-sm text-slate-600">What you will receive</p>
            </div>
          </div>

          <div className="mt-6 space-y-5">
            {scoreItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-slate-700">
                    {item.label}
                  </span>
                  <span className="font-bold text-slate-950">
                    {item.value}%
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
            <p className="text-sm font-bold text-slate-950">Before analysis</p>
            <div className="mt-4 space-y-3">
              {preparationSteps.map((step, index) => {
                const complete =
                  (index === 0 && resumeFile) ||
                  (index === 1 && jobDescription.trim()) ||
                  (index === 2 && isReady);

                return (
                  <div key={step} className="flex items-center gap-3">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        complete
                          ? "bg-emerald-500 text-white"
                          : "bg-white text-slate-300 ring-1 ring-slate-200"
                      }`}
                    >
                      <BadgeCheck className="h-4 w-4" />
                    </div>
                    <span
                      className={`text-sm ${
                        complete
                          ? "font-semibold text-slate-800"
                          : "text-slate-500"
                      }`}
                    >
                      {step}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-4">
            <div className="flex items-start gap-3">
              <WandSparkles className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <p className="text-sm leading-6 text-blue-950">
                The analyzer highlights missing keywords, formatting issues,
                and practical rewrite ideas for the target role.
              </p>
            </div>
          </div>
        </aside>
      </div>

      <div className="mt-6 flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-6 text-slate-600">
          Your resume and job description are used only to generate this
          analysis.
        </p>
        <Button
          type="button"
          disabled={!isReady || isAnalyzing}
          onClick={handleAnalyze}
          className="h-11 rounded-md bg-blue-600 px-5 text-sm font-bold text-white hover:bg-blue-700 disabled:bg-slate-300"
        >
          {isAnalyzing ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Analyzing
            </>
          ) : (
            <>
              Analyze Resume
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default UploadResume;
