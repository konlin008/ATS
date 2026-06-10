import fs from "fs";
import pdf from "pdf-parse";

export const parseResume = async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path);

    const data = await pdf(dataBuffer);

    return data.text;
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
