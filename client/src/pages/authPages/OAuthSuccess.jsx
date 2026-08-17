import { useMe } from "@/hooks/auth.hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OAuthSuccess = () => {
  const { isSuccess } = useMe();
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900">
          You're successfully signed in
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Welcome back to Scorio. Taking you to your dashboard...
        </p>

        <div className="mt-8 flex justify-center">
          <div className="w-6 h-6 border-2 border-gray-200 border-t-[#3B5BFF] rounded-full animate-spin" />
        </div>
      </div>
    </div>
  );
};

export default OAuthSuccess;
