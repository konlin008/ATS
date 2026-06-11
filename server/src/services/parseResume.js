import { PDFParse } from "pdf-parse";

export const parseResume = async (filePath) => {
  try {
    const parser = new PDFParse({ url: filePath });

    const result = await parser.getText();
    return result.text;
  } catch (error) {
    console.error(`Failed to read file at ${filePath}:`, error.message);
    throw error;
  }
};
