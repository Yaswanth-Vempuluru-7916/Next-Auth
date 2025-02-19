import register from "@/action/user";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

const Register = async () => {
  return (
    <div className="relative mt-10 max-w-md w-full mx-auto p-6 md:p-10 shadow-2xl border border-blue-500/30 rounded-md bg-[#030d1f] text-white overflow-hidden">

      {/* Solo Leveling circuit-like glowing borders */}
      <div className="absolute inset-0 opacity-10 z-[-1] overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MyI+PHBhdGggZD0iTTI1IDQzbDI1LTQzSDBMMjUgNDN6IiBmaWxsPSIjMDI4OGQxIiBmaWxsLW9wYWNpdHk9Ii4yIi8+PC9zdmc+')] bg-repeat"></div>

      {/* Glowing top & bottom border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-70"></div>

      <h2 className="font-bold text-2xl text-blue-300 tracking-wide">
        Awakening Portal
      </h2>

      <p className="text-blue-400 text-sm mt-2">
        Enter your details to unlock your hunter rank!
      </p>

      <form className="my-8 space-y-5" autoComplete="off" action={register}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex flex-col w-full">
            <Label htmlFor="firstname" className="mb-1 text-blue-300">First Name</Label>
            <Input
              name="firstname"
              placeholder="Jin-Woo"
              type="text"
              id="firstname"
              className="bg-[#061427] border border-blue-500/50 text-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
            />
          </div>
          <div className="flex flex-col w-full">
            <Label htmlFor="lastname" className="mb-1 text-blue-300">Last Name</Label>
            <Input
              name="lastname"
              placeholder="Sung"
              type="text"
              id="lastname"
              className="bg-[#061427] border border-blue-500/50 text-blue-200 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition-all"
            />
          </div>
        </div>

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

        <button className="w-full mt-4 relative group bg-gradient-to-br from-blue-700 to-blue-900 py-2.5 rounded-md text-lg font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-800 hover:shadow-blue-400/50">
          <span className="relative z-10">Awaken &rarr;</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>

        <p className="text-blue-400 text-sm mt-2">
          Already an awakened hunter? <Link href="/login" className="underline hover:text-blue-300">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
