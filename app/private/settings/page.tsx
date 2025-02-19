import { fetchAllUsers } from "@/action/user";
import { getSession } from "@/lib/getSession";
import { deleteUserAction } from "@/action/user"; // Import the delete function
import { redirect } from "next/navigation";

const Settings = async () => {
  const session = await getSession();
  const user = session?.user;
  if (!user) redirect("/login");

  if (user?.role !== "admin") return redirect("/private/dashboard");

  const allUsers = await fetchAllUsers();

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-white flex flex-col items-center justify-center px-6 py-10">
      {/* Glowing Border */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,rgba(0,100,255,0.3),transparent)]"></div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500 tracking-wide text-center mb-6">
        ⚔️ Shadow Legion Control ⚔️
      </h1>

      {/* Table Container */}
      <div className="w-full max-w-4xl rounded-lg bg-[#111827] shadow-lg border border-blue-500 overflow-hidden">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-blue-900 text-blue-300 uppercase">
              <th className="p-4">First Name</th>
              <th className="p-4">Last Name</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUsers?.map((user) => (
              <tr key={user._id} className="border-b border-gray-700 hover:bg-blue-950 transition">
                <td className="p-4">{user.firstName}</td>
                <td className="p-4">{user.lastName}</td>
                <td className={`p-4 ${user.role === "admin" ? "text-yellow-400 font-semibold" : ""}`}>
                  {user.role}
                </td>
                <td className="p-4">
                  {user.role !== "admin" ? (
                    <form action={deleteUserAction.bind(null, user._id)}>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition-all"
                      >
                        Exile ❌
                      </button>
                    </form>
                  ) : (
                    <span className="text-gray-400 italic">Protected 🛡️</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Settings;
