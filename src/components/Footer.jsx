import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../siteData';

export default function Footer() {
  return (
    <footer className="bg-[#050B18] w-full py-12 px-8 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto lg:grid-cols-5">
        <div className="space-y-6">
          <div className="text-lg font-bold text-slate-100 font-display-xl uppercase">{SITE_CONFIG.doctorName}</div>
          <p className="text-slate-500 text-xs font-body-md leading-relaxed">
            Especialista en cirugía ortopédica y traumatología. Pionero en técnicas mínimamente invasivas para la recuperación acelerada.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-tertiary transition-colors" href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-sm">share</span></a>
            <a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:text-tertiary transition-colors" href={SITE_CONFIG.facebookUrl} target="_blank" rel="noopener noreferrer"><span className="material-symbols-outlined text-sm">public</span></a>
          </div>
          <div className="space-y-4">
            <h4 className="font-label-caps text-white text-xs uppercase tracking-[0.2em] border-l-2 border-tertiary pl-4">Respaldo</h4>
            <div className="flex items-center gap-4 pt-2">
              <img alt="Doctor Mente Logo" className="h-12 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all" src="https://lh3.googleusercontent.com/aida/ADBb0uhtCcn9xsMom0K0RXdjDpYjnWlLGTvtzU3hZqWVg55rkWx7tvSa7LanvzaO73V2AGJkG-iUu0bUSfSwGrTtUFNbU4ENBVR9aEzFF0sFpuJslA90mw3_G5y6Q5Hf4qsLXz2p0DVoLNJ4xQJVJgIv3M8Y7PbdeoEtS0bDcA4FnRkLnMu9Pm2m3k0LeZca5b9iPcigXsbzSf_IbkWhCcUg7FwnlM4oFXCYUJY5BdM_iIUuHbY1p-rf9mGL2Gg1Tp3Cev75rB-2st4XdQ"/>
              <span className="text-[10px] text-slate-500 font-label-caps uppercase tracking-tighter">Aliado Estratégico</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-white text-xs uppercase tracking-[0.2em] border-l-2 border-tertiary pl-4">Servicios</h4>
          <ul className="space-y-2">
            <li><Link to="/especialidades" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Cirugía de Hombro</Link></li>
            <li><Link to="/especialidades" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Cirugía de Rodilla</Link></li>
            <li><Link to="/especialidades" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Medicina Deportiva</Link></li>
            <li><Link to="/especialidades" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Plasma Rico en Plaquetas</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-white text-xs uppercase tracking-[0.2em] border-l-2 border-tertiary pl-4">Información</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Política de Privacidad</Link></li>
            <li><Link to="/" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Términos de Servicio</Link></li>
            <li><Link to="/" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Portal del Paciente</Link></li>
            <li><a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 font-lexend text-xs uppercase tracking-widest transition-all">Soporte WhatsApp</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-label-caps text-white text-xs uppercase tracking-[0.2em] border-l-2 border-tertiary pl-4">Contacto</h4>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-slate-500">
              <span className="material-symbols-outlined text-tertiary text-sm">location_on</span>
              <span className="text-xs"><a className="hover:text-tertiary transition-colors" href={SITE_CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer">{SITE_CONFIG.address}</a></span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <span className="material-symbols-outlined text-tertiary text-sm">mail</span>
              <span className="text-xs"><a href={`mailto:${SITE_CONFIG.email}`} className="hover:text-tertiary transition-colors">{SITE_CONFIG.email}</a></span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <span className="material-symbols-outlined text-tertiary text-sm">call</span>
              <span className="text-xs font-bold text-white"><a href={`tel:${SITE_CONFIG.phone.replace(/\\s/g, '')}`} className="hover:text-tertiary transition-colors">{SITE_CONFIG.phone}</a></span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-lexend text-xs uppercase tracking-widest text-slate-500">© {new Date().getFullYear()} {SITE_CONFIG.doctorName} | Cirugía Ortopédica y Medicina Deportiva. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <span className="text-slate-500 text-xs font-label-caps">V. 2.0.4 - SEGURO</span>
        </div>
      </div>
    </footer>
  );
}
