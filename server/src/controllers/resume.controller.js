import atsChecker from "../services/atsChecker.js";
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
    const normalizedJddd = await normalizeJD(jd);
    const parsedResume = await parseResume(resumeFile.path);
    const normalizedResume = await normalizeResume(parsedResume);
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
