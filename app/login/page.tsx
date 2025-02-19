import { login } from "@/action/user";
import { signIn } from "@/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

const Login = () => {
  return (
    <div className="relative mt-10 max-w-md w-full mx-auto p-6 md:p-10 shadow-2xl border border-blue-500/30 rounded-md bg-[#030d1f] text-white overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10 z-[-1] overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MyI+PHBhdGggZD0iTTI1IDQzbDI1LTQzSDBMMjUgNDN6IiBmaWxsPSIjMDI4OGQxIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9zdmc+')] bg-repeat"></div>
      
      {/* Glowing Borders */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>

      <h2 className="font-bold text-2xl text-blue-300 tracking-wide">
        Hunter Login
      </h2>
      <p className="text-blue-400 text-sm mt-2">Enter your credentials to continue.</p>

      <form className="my-8 space-y-5" autoComplete="off" action={login}>
        <Label htmlFor="email" className="text-blue-300">Email</Label>
        <Input
          name="email"
          placeholder="hunter@mail.com"
          type="email"
          id="email"
          autoComplete="new-email"
          className="bg-[#061427] border border-blue-500/50 text-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
        />

        <Label htmlFor="password" className="text-blue-300">Password</Label>
        <Input
          name="password"
          placeholder="*********"
          type="password"
          id="password"
          className="bg-[#061427] border border-blue-500/50 text-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
          autoComplete="new-password"
        />

        <button className="w-full mt-4 bg-gradient-to-br from-blue-700 to-blue-900 py-2.5 rounded-md text-lg font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-800 hover:shadow-blue-400/50">
          Enter the Gate &rarr;
        </button>

        <p className="text-blue-400 text-sm mt-2">
          New hunter? <Link href="/register" className="underline hover:text-blue-300">Register</Link>
        </p>
      </form>

      {/* Divider */}
      <div className="border-t border-blue-500/30 my-6"></div>

      {/* OAuth Buttons */}
      <div className="flex flex-col space-y-3">
        <form action={async () => { "use server"; await signIn("github"); }}>
          <button
            className="w-full flex items-center justify-center gap-2 text-blue-300 bg-[#061427] border border-blue-500/50 py-2 rounded-md shadow-md hover:bg-blue-900 transition cursor-pointer"
            type="submit"
          >
            <IconBrandGithub className="h-5 w-5 text-blue-400" />
            Sign in with GitHub
          </button>
        </form>

        <form action={async () => { "use server"; await signIn("google"); }}>
          <button
            className="w-full flex items-center justify-center gap-2 text-blue-300 bg-[#061427] border border-blue-500/50 py-2 rounded-md shadow-md hover:bg-blue-900 transition cursor-pointer"
            type="submit"
          >
            <IconBrandGoogle className="h-5 w-5 text-blue-400" />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
