import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 text-white bg-zinc-950 sm:px-8 sm:py-4">
      <h1 className="text-lg font-semibold tracking-tight sm:text-xl">
        ApplyLog
      </h1>

      <div className="flex items-center gap-4 sm:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm transition-colors ${isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white"}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `text-sm transition-colors ${isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white"} `
          }
        >
          Applications
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
