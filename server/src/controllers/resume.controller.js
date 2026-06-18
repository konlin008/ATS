import { json } from "express";
import atsChecker from "../services/atsChecker.js";
import genrateUpdatedResume from "../services/genrateResume.js";
import normalizeJD from "../services/normalizeJd.js";
import normalizeResume from "../services/normalizeResume.js";
import { parseResume } from "../services/parseResume.js";

export const uploadResume = async (req, res) => {
  try {
    const resumeFile = req.file;
    const { jd } = req.body;

    if (!resumeFile) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required",
      });
    }
    if (jd.length < 1)
      return res.status(400).json({
        success: false,
        message: "Job description is required",
      });
    console.log("Normalizeing jd...");
    const normalizedJddd = await normalizeJD(jd);
    console.log("Parsing resume to normal text...");
    const parsedResume = await parseResume(resumeFile.path);
    console.log("Normalizeing resume...");
    const normalizedResume = await normalizeResume(parsedResume);
    console.log("Calculating ats Score...");
    const atsResult = await atsChecker(normalizedResume, normalizedJddd);
    res.status(200).json({
      success: true,
      message: "Data received successfully",
      data: {
        atsResult,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export const genrateResume = async (req, res) => {
  try {
    const { resume, jd, ats } = req.body;
    if (!resume || !jd || !ats)
      return res.status(400).json({ message: "Bad Request" });
    const resumeJson = await genrateUpdatedResume(resume, jd, ats);
    return res.status(200).json({ resumeJson });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
