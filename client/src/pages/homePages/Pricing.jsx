import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    description: "For focused applications and quick resume checks.",
    monthly: 0,
    yearly: 0,
    cta: "Start Free",
    featured: false,
    features: [
      "3 resume analyses per month",
      "Basic ATS score",
      "Keyword match summary",
      "PDF resume upload",
    ],
  },
  {
    name: "Pro",
    description: "For active job seekers tailoring resumes every week.",
    monthly: 12,
    yearly: 96,
    cta: "Get Pro",
    featured: true,
    features: [
      "Unlimited resume analyses",
      "Detailed ATS breakdown",
      "AI resume optimization",
      "PDF and LaTeX export",
      "Application history tracking",
    ],
  },
  {
    name: "Career",
    description: "For high-volume searches and interview-ready polish.",
    monthly: 29,
    yearly: 228,
    cta: "Choose Career",
    featured: false,
    features: [
      "Everything in Pro",
      "Multiple resume versions",
      "Priority optimization queue",
      "Advanced keyword insights",
      "Cover letter matching",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");
  const isYearly = billing === "yearly";

  return (
    <section
      id="pricing"
      className="min-h-[calc(100vh-4rem)] w-full scroll-mt-16 bg-white py-20 text-slate-950 sm:py-24"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-600">
          Pricing
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
          Simple Plans for Better Applications
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          Choose the resume optimization plan that fits your job search pace.
        </p>

        <div className="mt-8 inline-flex rounded-lg border border-slate-200 bg-white p-1 shadow-sm">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={`rounded-md px-5 py-2 text-sm font-semibold transition-colors ${
              billing === "monthly"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={`rounded-md px-5 py-2 text-sm font-semibold transition-colors ${
              billing === "yearly"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-950"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const price = isYearly ? plan.yearly : plan.monthly;

          return (
            <article
              key={plan.name}
              className={`relative flex min-h-120 flex-col rounded-md border bg-white p-7 shadow-sm ${
                plan.featured
                  ? "border-blue-200 shadow-blue-600/10 ring-2 ring-blue-100"
                  : "border-slate-200 shadow-slate-900/3"
              }`}
            >
              {plan.featured && (
                <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  Popular
                </div>
              )}

              <div className="pr-20">
                <h3 className="text-xl font-bold text-slate-950">
                  {plan.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-tight text-slate-950">
                  ${price}
                </span>
                <span className="pb-2 text-sm font-medium text-slate-500">
                  {price === 0 ? "forever" : isYearly ? "/ year" : "/ month"}
                </span>
              </div>

              {isYearly && price > 0 && (
                <p className="mt-2 text-sm font-medium text-emerald-600">
                  Save 33% with yearly billing
                </p>
              )}

              <Button
                className={`mt-8 h-12 w-full ${
                  plan.featured
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-950 text-white hover:bg-slate-800"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="mt-8 border-t border-slate-200 pt-7">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
