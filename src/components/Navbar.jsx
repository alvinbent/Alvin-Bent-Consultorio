import { Link, useLocation } from 'react-router-dom';
import { SITE_CONFIG } from '../siteData';

export default function Navbar() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#050B18]/80 backdrop-blur-xl border-b border-silver-100/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="text-2xl font-black tracking-tighter text-white font-display-xl uppercase">
          {SITE_CONFIG.doctorName}
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/especialidades" className={`font-lexend tracking-tight uppercase font-medium text-sm transition-all ${isActive('/especialidades') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}>
            Especialidades
          </Link>
          <Link to="/educacion" className={`font-lexend tracking-tight uppercase font-medium text-sm transition-all ${isActive('/educacion') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}>
            Educación
          </Link>
          <Link to="/timeline" className={`font-lexend tracking-tight uppercase font-medium text-sm transition-all ${isActive('/timeline') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}>
            Línea de Tiempo
          </Link>
          <Link to="/patient-journey" className={`font-lexend tracking-tight uppercase font-medium text-sm transition-all ${isActive('/patient-journey') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}>
            Patient Journey
          </Link>
          <Link to="/precision-quirurgica" className={`font-lexend tracking-tight uppercase font-medium text-sm transition-all ${isActive('/precision-quirurgica') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}>
            Precisión Quirúrgica
          </Link>
          <Link to="/contacto" className={`font-lexend tracking-tight uppercase font-medium text-sm transition-all ${isActive('/contacto') ? 'text-cyan-400 border-b-2 border-cyan-400 pb-1' : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`}>
            Contacto
          </Link>
        </div>
        <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="skeuomorphic-button px-6 py-2 rounded-lg text-tertiary font-label-caps text-xs uppercase tracking-widest active:scale-95 duration-200 ease-in-out neon-glow-cyan border border-tertiary/20">
            Agendar Cita
        </a>
      </div>
    </nav>
  );
}
