import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Heart,
  Share2,
  Clock,
  Quote,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const stats = [
  { icon: FileText, value: "5,000+", label: "Resumes analyzed" },
  { icon: Heart, value: "85%", label: "Average score boost" },
  { icon: Share2, value: "3x", label: "More interview calls" },
  { icon: Clock, value: "98%", label: "User satisfaction" },
];

const testimonials = [
  {
    text: "ATS Resume Boost helped me increase my ATS score from 45% to 92%. I started getting interview calls within a week.",
    name: "Sarah Johnson",
    role: "Frontend developer",
    initials: "SJ",
  },
  {
    text: "The keyword suggestions were spot on. My resume finally started passing the automated screens.",
    name: "Marcus Lee",
    role: "Product manager",
    initials: "ML",
  },
  {
    text: "I landed three interviews in two weeks after using the recommended edits. Genuinely surprised how fast it worked.",
    name: "Priya Nair",
    role: "Data analyst",
    initials: "PN",
  },
];

export default function TestimonialStats() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <div className="w-full max-w-full mx-auto space-y-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-4">
        {/* Stats panel */}
        <Card className="bg-blue-50 border-none shadow-none">
          <CardContent className="p-6">
            <p className="text-lg font-medium text-blue-900 mb-5 leading-snug">
              Join thousands of successful job seekers
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center mb-2.5">
                    <Icon className="w-4.5 h-4.5 text-blue-600" size={18} />
                  </div>
                  <p className="text-lg font-medium text-blue-900">{value}</p>
                  <p className="text-xs text-blue-700/70 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border shadow-none">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <Quote className="w-5 h-5 text-blue-600" />
              <p className="text-sm text-gray-800 leading-relaxed mt-2.5 mb-5">
                {active.text}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-700">
                  {active.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {active.name}
                  </p>
                  <p className="text-xs text-gray-500">{active.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-7 h-7"
                  onClick={prev}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-7 h-7"
                  onClick={next}
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-center gap-1.5 mt-3">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full ${
                    i === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-blue-600 border-none shadow-none">
        <CardContent className="p-6 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-white text-lg font-medium mb-1.5">
              Ready to boost your resume?
            </p>
            <p className="text-blue-100 text-sm max-w-md">
              Join thousands of job seekers who have successfully landed their
              dream jobs with ATS Resume Boost.
            </p>
          </div>
          <div className="text-right">
            <Button className="bg-white text-blue-700 hover:bg-blue-50">
              Get started for free
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <p className="text-blue-100 text-xs mt-2">
              No credit card required. Free to get started.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
