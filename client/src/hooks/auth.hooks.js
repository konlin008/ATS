import { loginApi, meApi, registerApi } from "@/api/auth.api";
import authStore from "@/store/authStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useLogin = () => {
  const setUser = authStore((state) => state.setUser);
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success("Login Successfully");
      setUser(data.user);
      navigate("/");
    },
  });
};
export const useRegister = () => {
  return useMutation({
    mutationFn: registerApi,
    onSuccess: (data) => {
      console.log("SignUp Successfully", data);
    },
  });
};
export const useMe = () => {
  const setUser = authStore((state) => state.setUser);
  return useQuery({
    queryFn: meApi,
    queryKey: ["me"],
    onSuccess: (data) => {
      setUser(data.user);
    },
  });
};
