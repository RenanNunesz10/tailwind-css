import { ExerciseWrapper } from "../components/layout/ExerciseWrapper";
import { InputField } from "../components/ui/InputField";
import { Button } from "../components/ui/Button";

export function Ex05LoginForm() {
  return (
    <ExerciseWrapper
      number="05"
      title="Login Form"
      subtitle="Input component + focus state + static form composition"
    >
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-xs">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
          Welcome back
        </h2>
        <p className="mt-2 text-sm text-slate-500">Sign in to continue</p>

        {/* Como é estático, form sem onSubmit e input sem onChange */}
        <form className="mt-6 space-y-5">
          <InputField
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
          />

          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex cursor-pointer items-center gap-2 text-slate-500">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-slate-300 accent-blue-600 focus:ring-2 focus:ring-blue-600/20"
              />
              Remember me
            </label>

            <a
              href="#"
              className="font-bold text-blue-600 transition hover:text-blue-700 focus:underline focus:outline-none"
            >
              Forgot password?
            </a>
          </div>

          <Button type="button" variant="primary" className="mt-2 w-full">
            Sign In
          </Button>
        </form>
      </div>
    </ExerciseWrapper>
  );
}

export default Ex05LoginForm;