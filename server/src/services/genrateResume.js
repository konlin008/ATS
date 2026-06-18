import { ai } from "../config/gemini.js";

export default async function genrateUpdatedResume(resume, jd, ats) {
  const prompt = `You are an expert ATS resume optimization engine.

You are an expert resume writer and ATS optimization specialist.

You will be given:
1. The candidate's current resume data (JSON)
2. The ATS analysis/score details (JSON) — including missing keywords, weaknesses, and suggestions
3. A target Job Description (JD)

Your task:
- Rewrite and restructure the resume JSON so it is highly optimized for ATS and closely matches the JD.
- Naturally incorporate missing keywords/skills from the ATS analysis where truthful and relevant.
- Quantify achievements where possible (use realistic estimates based on project scope if no numbers exist).
- Keep the same JSON schema/structure as the input resume — only update field values.
- Do not invent false experience or skills the candidate clearly doesn't have.
- Return ONLY valid JSON. No markdown, no explanations, no extra text.
CURRENT_RESUME_JSON:
${resume}
ATS_ANALYSIS_JSON:
${ats}
JOB_DESCRIPTION_JSON:
${jd}
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
