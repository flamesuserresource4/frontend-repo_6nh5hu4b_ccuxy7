import { Menu, GraduationCap, ChevronDown } from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-400 to-blue-600 grid place-items-center text-white shadow-md">
              <GraduationCap size={20} />
            </div>
            <div className="leading-tight">
              <p className="font-extrabold text-blue-700 tracking-tight">DTEF</p>
              <p className="text-[11px] text-blue-500">Student Funding</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programs" className="text-gray-700 hover:text-blue-700 transition-colors">Programs</a>
            <a href="#how" className="text-gray-700 hover:text-blue-700 transition-colors">How it works</a>
            <a href="#stories" className="text-gray-700 hover:text-blue-700 transition-colors">Stories</a>
            <button className="inline-flex items-center gap-1 text-gray-700 hover:text-blue-700">
              More <ChevronDown size={16} />
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#apply" className="hidden sm:inline-block px-3 py-2 text-sm font-medium rounded-md text-blue-700 hover:bg-blue-50">Check eligibility</a>
            <a href="#apply" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white font-semibold shadow-sm hover:bg-blue-700 transition-colors">Apply now</a>
            <button className="md:hidden p-2 rounded-md border border-blue-100 text-blue-700">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
