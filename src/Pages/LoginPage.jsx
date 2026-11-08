
export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070711] px-4 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-180px] left-[-150px] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-180px] right-[-150px] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[130px]" />

      {/* Login Card */}
      <div className="relative w-full max-w-md">

        <div className="rounded-3xl p-[1px] bg-gradient-to-br from-blue-500/50 via-purple-500/30 to-transparent shadow-2xl shadow-purple-900/20">

          <div className="rounded-3xl px-8 py-9 bg-[#10101b]/95 backdrop-blur-xl border border-white/5 text-white">

            {/* Header */}
            <div className="text-center mb-8">

              <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-3xl">✦</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight">
                Welcome Back
              </h2>

              <p className="text-slate-400 mt-2">
                Sign in to continue to your account
              </p>

            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => e.preventDefault()}
            >

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-slate-300"
                >
                  Email address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-[#181824] border border-slate-700/70 rounded-xl text-white placeholder-slate-500 outline-none transition duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 hover:border-slate-600"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-[#181824] border border-slate-700/70 rounded-xl text-white placeholder-slate-500 outline-none transition duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 hover:border-slate-600"
                />
              </div>

              {/* Options */}
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                  />
                  Remember me
                </label>

                <a
                  href="#"
                  className="text-blue-400 hover:text-purple-400 transition"
                >
                  Forgot password?
                </a>

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full mt-3 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-600/30 hover:brightness-110 active:scale-[0.98]"
              >
                Sign In
              </button>

            </form>

            {/* Register */}
            <p className="text-center text-sm text-slate-500 mt-7">
              Don't have an account?
              <a
                href="#"
                className="ml-1 text-blue-400 hover:text-purple-400 transition"
              >
                Create account
              </a>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

