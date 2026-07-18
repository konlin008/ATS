import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  BarChart2,
  FileEdit,
  Search,
  Link2,
  Sparkles,
} from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);

  const features = [
    { icon: BarChart2, label: "ATS Score Analysis" },
    { icon: FileEdit, label: "Resume Optimization" },
    { icon: Search, label: "Keyword Suggestions" },
    { icon: Link2, label: "Job Match Insights" },
  ];

  return (
    <div className="min-h-screen w-full flex items-stretch bg-white font-sans">

      <div className="hidden lg:flex lg:w-2/5 relative bg-slate-50 flex-col justify-between px-12 py-14 overflow-hidden">

        <Sparkles
          className="absolute top-16 left-10 w-5 h-5 text-slate-300"
          strokeWidth={1.5}
        />
        <Sparkles
          className="absolute top-28 right-16 w-4 h-4 text-slate-300"
          strokeWidth={1.5}
        />
        <Sparkles
          className="absolute bottom-40 left-16 w-4 h-4 text-slate-300"
          strokeWidth={1.5}
        />

        <div className="flex-1 flex items-center justify-center">
          <div className="relative bg-white rounded-2xl shadow-xl shadow-slate-200/60 w-56 h-64 p-5 flex flex-col gap-3"> 
            <div className="absolute top-0 right-0 w-6 h-6 bg-slate-100 rounded-bl-xl rounded-tr-2xl" />
            <div className="w-6 h-6 rounded-full border-2 border-slate-800" />
            <div className="space-y-2 mt-1">
              <div className="h-2 w-3/4 bg-slate-200 rounded-full" />
              <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
            </div>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-4 h-4 rounded-full bg-slate-200" />
              <div className="h-2 w-2/3 bg-slate-100 rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-slate-200" />
              <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
            </div>

            <div className="flex-1 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-blue-600 shadow-md flex items-center justify-center">
                <span className="text-xl font-bold text-slate-800">85</span>
              </div>
            </div>

            <div className="flex items-end gap-1 h-6 justify-end">
              <div className="w-1.5 bg-blue-600 rounded-sm h-2" />
              <div className="w-1.5 bg-blue-600 rounded-sm h-4" />
              <div className="w-1.5 bg-blue-600 rounded-sm h-6" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-slate-900 leading-snug mb-3">
            Boost Your Resume.
            <br />
            Boost Your <span className="text-blue-600">Career.</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Get ATS score, optimize your resume and stand out to recruiters.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm text-slate-700 font-medium"
              >
                <span className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center">
                  <Icon className="w-3.5 h-3.5 text-blue-600" strokeWidth={2} />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-6 sm:px-10 py-12 bg-white">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold text-slate-900">Scorio</span>
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-1">
            Welcome <span className="text-blue-600">back</span>
          </h1>
          <p className="text-slate-500 text-sm mb-7">
            Login to continue boosting your ATS score.
          </p>

          <form
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-700"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500/30 focus:ring-2 accent-blue-600"
              />
              <span className="text-sm text-slate-700">Remember me</span>
            </label>


            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition shadow-sm shadow-blue-200"
            >
              Login
            </button>
          </form>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-xs text-slate-400">or continue with</span>
            <div className="flex-1 h-px bg-slate-200" />
          </div>

          <div className="space-y-3">
            <button
              type="button"
              className="w-full py-2.5 rounded-lg border border-slate-200 flex items-center justify-center gap-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              <GoogleIcon />
              Continue with Google
            </button>
            <button
              type="button"
              className="w-full py-2.5 rounded-lg border border-slate-200 flex items-center justify-center gap-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
            >
              <GithubIcon />
              Continue with GitHub
            </button>
          </div>

          <p className="text-center text-sm text-slate-500 mt-7">
            Don't have an account?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3.02h3.87c2.27-2.09 3.58-5.17 3.58-8.84z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.9l-3.87-3.02c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.27v3.11A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.27a7.2 7.2 0 0 1 0-4.54V6.62H1.27a12 12 0 0 0 0 10.76l4-3.11z"
      />
      <path
        fill="#EA4335"
        d="M12 4.77c1.76 0 3.34.61 4.59 1.8l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.27 6.62l4 3.11C6.22 6.88 8.87 4.77 12 4.77z"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
    </svg>
  );
}
