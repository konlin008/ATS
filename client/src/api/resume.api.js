import api from "./axios";

export const uploadResumeApi = async (payload) => {
  const res = await api.post("/resume/upload", payload);
  return res.data;
};
