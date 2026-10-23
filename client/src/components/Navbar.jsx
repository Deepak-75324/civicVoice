
import { Link } from "react-router-dom";
import { ShieldCheck, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <ShieldCheck className="h-8 w-8 text-emerald-600" />
          <span className="text-2xl font-bold text-slate-900">
            Civic<span className="text-emerald-600">Voice</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 font-bold">
            How it works
          </a>
          <a href="#issues" className="text-gray-600 hover:text-emerald-600 font-bold">
            Public issues
          </a>
          <Link to="/login" className="text-slate-600 hover:text-emerald-600 font-bold ">
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700"
          >
            Get started
          </Link>
        </div>

        <button
          type="button"
          aria-label="Navigation menu"
          className="rounded-lg p-2 md:hidden"
        >
          <Menu />
        </button>
      </div>
    </nav>
  );
}
