import { PDFParse } from "pdf-parse";
import fs from "fs/promises";

export const parseResume = async (filePath) => {
  try {
    const buffer = await fs.readFile(filePath);
    const parser = new PDFParse({ data: buffer });

    const result = await parser.getText();
    return result.text;
  } catch (error) {
    console.error(`Failed to read file at ${filePath}:`, error.message);
    throw error;
  }
};
