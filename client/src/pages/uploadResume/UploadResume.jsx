import { Card } from "@/components/ui/card";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { CheckCheck, CloudUpload, ReceiptText, TrendingUp } from "lucide-react";

const UploadResume = () => {
  const featuresTexts = [
    {
      tag: "ATS Score",
      about: "get detailed ATS compatibility score",
      icon: TrendingUp,
    },
    {
      tag: "AI Analysis",
      about: "Ai will analyze your resume against job description",
      icon: ReceiptText,
    },
    {
      tag: "Better Match",
      about: " Imporove Your resume and land more interviews",
      icon: CheckCheck,
    },
  ];
  return (
    <div className="w-full pt-10 space-y-5">
      <div>
        <h1 className="text-2xl font-semibold">
          Upload Resume & Job Description
        </h1>
        <p className="text-sm">
          Upload your resume and paste the job description to get your ATS score
          and Al optimized resume.
        </p>
      </div>
      <Card
        className={"bg-linear-to-r from-slate-50 to-sky-100 rounded-sm px-5"}
      >
        <div className="flex items-center justify-between">
          {featuresTexts.map((featuresText) => {
            const Icon = featuresText.icon;
            return (
              <div key={featuresText.tag} className="flex items-center gap-5">
                <div className="border border-blue-100 w-fit p-2 rounded-full bg-blue-100">
                  <Icon className="text-blue-600" />
                </div>
                <div className="">
                  <p className="font-semibold text-blue-600">
                    {featuresText.tag}
                  </p>
                  <p className="w-40">{featuresText.about}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
      <div className="flex">
        <div className="w-[40%] border py-5 px-3 flex flex-col items-center">
          <CloudUpload className="text-blue-600" />
          <Field>
            <FieldLabel htmlFor="resume">Resume</FieldLabel>
            <Input id="resume" type="file" accept="application/pdf" />
            <FieldDescription>Select Your Current Resume</FieldDescription>
          </Field>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default UploadResume;
