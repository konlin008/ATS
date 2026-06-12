import { ai } from "../config/gemini.js";

async function normalizeJD(jdText) {
  const prompt = `
You are an expert job description parsing system.

Your task is to extract structured information from the provided job description and return ONLY a valid JSON object.

Rules:
- Return ONLY JSON.
- Do not include markdown, explanations, comments, or code blocks.
- If a field is missing, return an empty string "" or empty array [].
- Extract information exactly as written.
- Remove duplicate skills.
- Never hallucinate information that does not exist in the job description.

JSON Schema:
{
  "jobTitle": "",
  "company": "",
  "location": "",
  "employmentType": "",
  "experienceRequired": "",
  "educationRequired": [],
  "requiredSkills": [],
  "preferredSkills": [],
  "responsibilities": [],
  "requirements": [],
  "keywords": []
}

Job Description:
${jdText}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
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

export default normalizeJD;
