import { ai } from "./src/config/gemini.js";

const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: `You are an expert resume parsing system.

Your task is to extract structured information from the provided resume text and return ONLY a valid JSON object.

Rules:

Return ONLY JSON.
Do not include markdown, explanations, comments, or code blocks.
If a field is missing, return an empty string "" or empty array [].
Extract information exactly as written.
Normalize phone numbers and emails when possible.
Remove duplicate skills.
Preserve project names, company names, and institution names.
Never hallucinate information that does not exist in the resume.

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

Resume Text: AMAN MONDAL\nMERN Developer | React | Node.js | MongoDB\nPh: +91-9123970930 || Email- amanofficial0108@gmail.com || GitHub || LinkedIn\nProfessional Summary\nFull-stack MERN developer experienced in building production-ready web applications including e-learning, ticketing,\nand real-time platforms. Strong in React, Node.js, and MongoDB, with hands-on experience in authentication, APIs,\nrole-based access, and modern UI using Tailwind.\nSkills\n Backend: Node.js, Express.js, REST APIs, Authentication (JWT), Zod Validation\n Frontend: React, Redux Toolkit, Zustand, Tailwind CSS, Shadcn UI\n Database: MongoDB (NoSQL)\n Tools: Git, GitHub, Stripe Payments\nProjects\nSKILLORA (React, Node, MongoDB, Express, Redux, Tailwind, Stripe) Live || GitHub\nModern MERN LMS with role-based access, secure payments, and responsive UI.\n Built a scalable MERN-based LMS with JWT auth and RBAC 99.9% uptime.\n Developed full-stack LMS using React 18, Node.js, Express, MongoDB, Redux Toolkit, Zod, and Tailwind CSS.\n Reduced invalid requests by 85% and achieved <2s page loads with optimized student and course workflows.\n Designed LMS with CI/CD, role-based authorization, and 75% faster MongoDB queries.\n Deployed full-stack LMS from MVP to production with real-time notifications and enrollment tracking.\nBlood Bank App (React, Node.js, Express.js, MongoDB, Redux, Tailwind, JWT) GitHub\nFull-stack app for tracking blood inventory, managing donors, and coordinating donation requests.\n Developed a full-stack blood donation management platform featuring secure authentication, donor onboarding,\nand real-time request processing.\n Engineered robust REST APIs with Express.js and MongoDB to manage donors, blood inventory, user roles,\nand request lifecycle.\n Built a clean, responsive React interface enabling users to search availability, submit requests, and track\ndonation status seamlessly.\n Improved operational efficiency by implementing structured data models, modular services, and a scalable\nbackend architecture.\nGatePe (React, Node, MongoDB, Express, Zustand, Shadcn, Tailwind, Stripe) GitHub\nEvent ticketing platform with event listings, ticket purchasing, and gate verification\n Architected a scalable MERN-based event ticketing platform, designing modular Node.js + Express APIs capable\nof handling high-traffic event searches with sub-200ms response times.\n Implemented secure JWT authentication, role-based access, and data validation pipelines, reducing\nunauthorized access attempts and transaction failures by 40%.\n Built location-aware event discovery using MongoDB geospatial queries, enabling fast city-based filtering and\nimproving search accuracy by 60%.\n Optimized frontend performance with React + Tailwind, reducing page load time by 50% and improving user\nengagement for ticket browsing and checkout flows.\nEducation\n Bachelor of Computer Applications (BCA) — Narula Institute of Technology, India (2022–2025)\n Higher Secondary (10+2) — Kalyan Nagar Vidyapith, India (2019–2021)\n Secondary (10th) — Sodepur High School, India (2018–2019)\n\n-- 1 of 1 --\n\n`,
});

console.log(response.text);

