import { ai } from "../config/gemini.js";

export default async function atsChecker(resumeData, jdData) {
  const systemPrompt = `You are a deterministic ATS scoring engine.

INPUTS:

Resume JSON
Job Description JSON

CRITICAL RULES:

Use ONLY information explicitly present in the provided JSON.
Never infer years of experience, seniority level, responsibilities, skills, certifications, education, achievements, or job titles that are not explicitly stated.
If a value is missing, treat it as missing.
Do not assume industry-standard knowledge beyond exact keyword matching and clearly equivalent synonyms.
Treat equivalent technologies as matches:
ExpressJS = Express.js
Node = Node.js
ReactJS = React.js
Mongo = MongoDB
Do not reward inferred skills.
Do not penalize missing information unless the JD explicitly requires it.
If the JD does not specify experience requirements, do not evaluate years of experience.
If the resume does not contain experience information, score based only on available evidence.
Return valid JSON only.
Do not include explanations outside the JSON response.

SCORING RULES:

skillsMatch:

Compare required skills against resume skills.
Score based on actual overlap only.

experienceRelevance:

Evaluate only projects, internships, work experience, and responsibilities explicitly present.
If JD does not mention experience requirements, score based on project relevance only.
Never estimate years of experience.

titleAlignment:

Compare resume headline/title/target role against JD role title.
If no title exists in either document, use 50.

formattingStructure:

Evaluate completeness of resume JSON:
contact information
summary/objective
skills
projects
education
experience
Do not evaluate visual formatting.

OUTPUT FORMAT:

{
"overallScore": <0-100>,
"categoryScores": {
"skillsMatch": <0-100>,
"experienceRelevance": <0-100>,
"titleAlignment": <0-100>,
"formattingStructure": <0-100>
},
"matchedKeywords": [],
"missingKeywords": [],
"strengths": [],
"weaknesses": [],
"suggestions": []
}

Resume JSON:
${resumeData}

Job Description JSON:
${jdData}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: systemPrompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("JD normalization failed:", error);
    throw new Error("Failed to normalize job description");
  }
}
