import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Menu, BookOpen, SquarePlayIcon, User2Icon, X } from "lucide-react";

export default function MenuLateral() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden md:flex h-screen fixed bg-gray-100">
        <aside
          className={`bg-slate-900 text-white transition-all duration-300 ${open ? "w-64" : "w-16"}`}>
          <div className="flex items-center justify-between p-5 border-b border-slate-500">
            <span className={`text-lg font-bold ${!open && "hidden"}`}>
              Menu
            </span>
            <button onClick={() => setOpen(!open)} className="hover:bg-slate-800 p-1 rounded">
              <Menu size={20} />
            </button>
          </div>

          <nav className="p-2 space-y-2">
            <MenuItem 
              icon={<Home size={18} />} 
              label="Inicio" 
              path="/" 
              open={open}
              onClick={handleLinkClick}
            />
            <MenuItem 
              icon={<BookOpen size={18} />} 
              label="Base de conhecimento" 
              path="/base-conhecimento" 
              open={open}
              onClick={handleLinkClick}
            />
            <MenuItem 
              icon={<SquarePlayIcon size={18} />} 
              label="Videos" 
              path="/videos" 
              open={open}
              onClick={handleLinkClick}
            />
            <MenuItem 
              icon={<User2Icon size={18} />} 
              label="Área do educador" 
              path="/educador" 
              open={open}
              onClick={handleLinkClick}
            />
          </nav>
        </aside>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900 text-white z-50 flex items-center justify-between p-4">
        <span className="text-lg font-bold">Menu</span>
        <button 
          onClick={() => setOpen(!open)} 
          className="hover:bg-slate-800 p-1 rounded"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {open && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40 top-16"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu Dropdown */}
      {open && (
        <nav className="md:hidden fixed top-16 left-0 right-0 bg-slate-900 text-white z-40 p-4 space-y-2 max-h-[calc(100vh-64px)] overflow-y-auto">
          <MenuItem 
            icon={<Home size={18} />} 
            label="Inicio" 
            path="/" 
            open={true}
            onClick={handleLinkClick}
            mobile={true}
          />
          <MenuItem 
            icon={<BookOpen size={18} />} 
            label="Base de conhecimento" 
            path="/base-conhecimento" 
            open={true}
            onClick={handleLinkClick}
            mobile={true}
          />
          <MenuItem 
            icon={<SquarePlayIcon size={18} />} 
            label="Videos" 
            path="/videos" 
            open={true}
            onClick={handleLinkClick}
            mobile={true}
          />
          <MenuItem 
            icon={<User2Icon size={18} />} 
            label="Área do educador" 
            path="/educador" 
            open={true}
            onClick={handleLinkClick}
            mobile={true}
          />
        </nav>
      )}
    </>
  );
}

function MenuItem({ icon, label, path, open, onClick, mobile = false }) {
  return (
    <Link to={path} onClick={onClick}>
      <div className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-slate-800 transition-colors ${
        mobile ? "justify-start" : "justify-center md:justify-start"
      }`}>
        {icon}
        <span className={`${!open && !mobile && "hidden"}`}>{label}</span>
      </div>
    </Link>
  );
}