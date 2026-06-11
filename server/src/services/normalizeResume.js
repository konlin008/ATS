import { ai } from "../config/gemini.js";

async function normalizeResume(parsedResume) {
  const prompt = `
You are an expert resume parsing system.

Your task is to extract structured information from the provided resume text and return ONLY a valid JSON object.

Rules:
- Return ONLY JSON.
- Do not include markdown, explanations, comments, or code blocks.
- If a field is missing, return an empty string "" or empty array [].
- Extract information exactly as written.
- Normalize phone numbers and emails when possible.
- Remove duplicate skills.
- Preserve project names, company names, and institution names.
- Never hallucinate information that does not exist in the resume.

JSON Schema:
{
  "name": "",
  "email": "",
  "phone": "",
  "location": "",
  "github": "",
  "linkedin": "",
  "portfolio": "",
  "summary": "",
  "skills": [],
  "education": [
    {
      "degree": "",
      "institution": "",
      "startYear": "",
      "endYear": "",
      "cgpa": ""
    }
  ],
  "experience": [
    {
      "jobTitle": "",
      "company": "",
      "location": "",
      "startDate": "",
      "endDate": "",
      "description": []
    }
  ],
  "projects": [
    {
      "name": "",
      "technologies": [],
      "description": []
    }
  ],
  "certifications": [],
  "achievements": [],
  "languages": []
}

Resume Text:
${parsedResume}
`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text.trim();

    return JSON.parse(text);
  } catch (error) {
    console.error("Resume normalization failed:", error);
    throw new Error("Failed to normalize resume");
  }
}

export default normalizeResume;
