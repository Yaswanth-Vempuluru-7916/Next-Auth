import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-around items-center py-4 bg-black text-blue-400 border-b border-blue-500">
      <Link href="/" className="text-xl font-bold text-blue-300 hover:text-blue-100">
        Shadow Monarch Interface
      </Link>
      
      <ul className="hidden md:flex space-x-6 list-none">
        <li>
          <Link href="/login" className="hover:text-blue-100 transition-colors">
            Access Portal
          </Link>
        </li>
      </ul>
      
      <ul>
        <li>
          <Link href="/register" className="hover:text-blue-100 transition-colors">
            New Hunter Registration
          </Link>
        </li>
      </ul>
      
      <div className="flex items-center gap-4">
        <Link href="/private/dashboard" className="hover:text-blue-100 transition-colors">
          Hunter Status
        </Link>
        
        <form action="">
          <Button 
            type="submit" 
            variant={"ghost"} 
            className="border border-blue-500 text-blue-300 hover:bg-blue-900 hover:text-blue-100"
          >
            Disconnect
          </Button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;