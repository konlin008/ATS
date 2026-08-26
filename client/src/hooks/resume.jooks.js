import { uploadResumeApi } from "@/api/resume.api";
import { useMutation } from "@tanstack/react-query";

export const useUploadResume = () => {
  return useMutation({
    mutationFn: uploadResumeApi,
  });
};
