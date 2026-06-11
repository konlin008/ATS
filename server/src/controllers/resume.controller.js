import normalizeResume from "../services/normalizeResume.js";
import { parseResume } from "../services/parseResume.js";

export const uploadResume = async (req, res) => {
  try {
    const resumeFile = req.file;
    const jd = req.body;

    if (!resumeFile) {
      return res.status(400).json({
        success: false,
        message: "Resume PDF is required",
      });
    }
    if (!jd)
      return res.status(400).json({
        success: false,
        message: "Job description is required",
      });

    const parsedResume = await parseResume(resumeFile.path);
    const normalizedData = await normalizeResume(parsedResume);
    res.status(200).json({
      success: true,
      message: "Data received successfully",
      jd,
      data: {
        fileName: resumeFile.filename,
        normalizedData,
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
