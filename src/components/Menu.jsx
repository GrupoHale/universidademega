import { useState } from "react";
import { Home, Settings, Menu, BookOpen, SquarePlayIcon } from "lucide-react";

export default function MenuLateral() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen fixed bg-gray-100">

      <aside
        className={`bg-slate-900 text-white transition-all duration-300 ${open ? "w-64" : "w-16"}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <span className={`text-lg font-bold ${!open && "hidden"}`}>
           Menu
          </span>
          <button onClick={() => setOpen(!open)}>
            <Menu size={20} />
          </button>
        </div>

        <nav className="p-2 space-y-2">
          <MenuItem icon={<Home size={18} />} label="Inicio" open={open} />
          <MenuItem icon={<BookOpen size={18} />} label="Base de conhecimento" open={open} />
          <MenuItem icon={<SquarePlayIcon size={18} />} label="Videos" open={open} />
        </nav>
      </aside>
    </div>
  );
}

function MenuItem({ icon, label, open }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-800">
      {icon}
      <span className={`${!open && "hidden"}`}>{label}</span>
    </div>
  );
}
