import { SITE_CONFIG } from '../siteData';

export default function Contacto() {
  return (
    <div className="pt-24 pb-12 min-h-screen bg-background relative overflow-hidden">
      {/* Abstract Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-tertiary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-12 gap-gutter relative z-10 pt-10">
        {/* Hero Section: Identity */}
        <section className="col-span-12 mb-lg">
          <span className="font-label-caps text-tertiary tracking-widest block mb-xs uppercase">Establecer Conexión</span>
          <h1 className="font-display-xl text-on-surface leading-none mb-md">Contacto &amp; <span className="text-tertiary">Social Hub</span></h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">Liderando la vanguardia en medicina deportiva. Conéctese con nuestro equipo para optimizar su rendimiento físico o siga nuestra trayectoria de innovación.</p>
        </section>

        {/* Left Column: Form & Social Feed */}
        <div className="col-span-12 lg:col-span-7 space-y-gutter">
          {/* Consultation Form Card */}
          <div className="glass-card p-lg rounded-xl">
            <div className="flex items-center justify-between mb-lg">
              <h2 className="font-headline-md text-on-surface">Solicitud de Consulta</h2>
              <div className="bg-primary-container/50 border border-tertiary/20 px-3 py-1 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 bg-tertiary rounded-full pulse-glow"></span>
                <span className="font-label-caps text-[10px] text-tertiary">SISTEMA ACTIVO</span>
              </div>
            </div>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-md" onSubmit={(e) => e.preventDefault()}>
              <div className="col-span-1 space-y-xs">
                <label className="font-label-caps text-slate-500 text-[10px]">NOMBRE COMPLETO</label>
                <input className="w-full bg-transparent border-0 border-b border-silver-400/30 focus:ring-0 focus:border-tertiary transition-colors py-2 text-on-surface placeholder:text-slate-600 outline-none" placeholder="Ej. Juan Pérez" type="text"/>
              </div>
              <div className="col-span-1 space-y-xs">
                <label className="font-label-caps text-slate-500 text-[10px]">CORREO ELECTRÓNICO</label>
                <input className="w-full bg-transparent border-0 border-b border-silver-400/30 focus:ring-0 focus:border-tertiary transition-colors py-2 text-on-surface placeholder:text-slate-600 outline-none" placeholder="juan@ejemplo.com" type="email"/>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-xs">
                <label className="font-label-caps text-slate-500 text-[10px]">ESPECIALIDAD DE INTERÉS</label>
                <select className="w-full bg-transparent border-0 border-b border-silver-400/30 focus:ring-0 focus:border-tertiary transition-colors py-2 text-on-surface appearance-none cursor-pointer outline-none">
                  <option className="bg-surface">Cirugía Ortopédica</option>
                  <option className="bg-surface">Rehabilitación de Alto Rendimiento</option>
                  <option className="bg-surface">Prevención de Lesiones</option>
                  <option className="bg-surface">Bio-Mecánica Deportiva</option>
                </select>
              </div>
              <div className="col-span-1 md:col-span-2 space-y-xs">
                <label className="font-label-caps text-slate-500 text-[10px]">MENSAJE O SINTOMATOLOGÍA</label>
                <textarea className="w-full bg-transparent border-0 border-b border-silver-400/30 focus:ring-0 focus:border-tertiary transition-colors py-2 text-on-surface placeholder:text-slate-600 resize-none outline-none" placeholder="Describa brevemente su caso..." rows="4"></textarea>
              </div>
              <div className="col-span-1 md:col-span-2 pt-4">
                <button className="w-full metallic-button py-4 rounded-lg font-lexend font-bold text-lg text-on-primary shadow-xl hover:shadow-tertiary/20 transition-all">
                  ENVIAR SOLICITUD DE PRE-DIAGNÓSTICO
                </button>
              </div>
            </form>
          </div>

          {/* Social Hub Bento Grid */}
          <div className="grid grid-cols-2 gap-gutter">
            {/* Instagram Preview */}
            <div className="glass-card p-md rounded-xl col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-md">
                <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>photo_camera</span>
                <span className="font-label-caps text-on-surface">@dralvinbent</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-white/5">
                  <img alt="Instagram Post 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYG_EoCHO3tfA_jq3hjKdHWIub0k4mHnpbJ-qDm9FTT9wGxiXxIWxNqZlksZpdOy96-d7DCD2rH8FbeDWyR3TaId3BQ5LmlxI0RkUmkuXt_jgBXhdGB-n6Uj-ly3RU7Paco_kDWgvemCt0-JUUspJFz5QDRXHDj767GYNJ98nh77fcLeopyeTvNUZoqxa-OgFqPgttEbMAM5l4eWp55IZ_iNqJqma686yIay9QQPmnYzSx8rT3s1unGUVMxXAgYlUEtAJ68Dnr28E"/>
                </div>
                <div className="aspect-square bg-surface-container rounded-lg overflow-hidden border border-white/5">
                  <img alt="Instagram Post 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBigzKXdNRiuZJRnYDj8y6CeI3QkfeTkC5kFrCVuSe2ZxKG74hJzVggyhEl1RwZXkisXweHuVBFB2pxYIGZbKxtyYAc7bbSciLjZWgigynvITxSVbBrGxY2EguobD-sHE1ZPKQYyqXBljeQCZP492ZBFF3Vn0NXZFt63JQTLhf-WdP2utEw8_NeUj_fQ3792tV2SvWpPjFpxmhu2M6QL7nrQhXucD2n7sVr0u4rfcySyOgqAmbH9OkBcMyz4VhVfqOF-8dHs3bWa_o"/>
                </div>
              </div>
              <a href={SITE_CONFIG.instagramUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 border border-silver-400/20 rounded-lg text-sm text-slate-400 hover:bg-white/5 transition-colors">
                Ver Instagram
              </a>
            </div>

            {/* LinkedIn Insight */}
            <div className="glass-card p-md rounded-xl col-span-2 md:col-span-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-md">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>article</span>
                  <span className="font-label-caps text-on-surface">Publicaciones</span>
                </div>
                <h3 className="text-sm font-semibold mb-2 line-clamp-2">Nuevos avances en la regeneración de tejido cartilaginoso en atletas de élite.</h3>
                <p className="text-xs text-slate-500 mb-4">Publicado hace 2 días</p>
              </div>
              <a href="#" className="block w-full text-center py-2 border border-silver-400/20 rounded-lg text-sm text-slate-400 hover:bg-white/5 transition-colors">
                Conectar en LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Location & Contact Channels */}
        <div className="col-span-12 lg:col-span-5 space-y-gutter mt-8 lg:mt-0">
          {/* Map Card */}
          <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full min-h-[400px]">
            <div className="p-md border-b border-white/10 flex justify-between items-center">
              <div>
                <h3 className="font-headline-md text-on-surface text-lg">Centro de Excelencia</h3>
                <p className="text-xs text-slate-500">Piso 12, Medical Tower Premium</p>
              </div>
              <span className="material-symbols-outlined text-tertiary">location_on</span>
            </div>
            <div className="flex-1 bg-surface-container relative group">
              {/* Simulated Map */}
              <div className="absolute inset-0 grayscale contrast-125 opacity-40 group-hover:opacity-60 transition-opacity">
                <img alt="Ubicación Clínica" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfRqd2GZ2FLnDa9Kj66ghCKH2mqS1H6XSNMnGxAqO-aIOKo_sPDj_h2dgDjCalJLGbhYxPoPEZ-Av3DFzgrkWY3b6cstqp6HDm_v-x4mVFEm_kz3nqmUwIqCHn2tnPDQVGFf64QjW8-Zl62L1pcyU8Lq0kKWu7cwVagc1NJXy-cSz_9G9a9UWdoxX2xEcMt6zrWiV0sibduxZkp6PMN-Ab4s7IMy7vIFxKCaMKUIEa2QjMFDxRwy7qTGQ7sfO8WnoRLKLQ2brGeWM"/>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-tertiary/20 rounded-full flex items-center justify-center pulse-glow">
                  <div className="w-4 h-4 bg-tertiary rounded-full shadow-[0_0_20px_#4cd7f6]"></div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 glass-card px-4 py-2 rounded-lg text-xs font-mono-technical">
                9.9333° N, 84.0833° W
              </div>
            </div>
            <div className="p-md bg-primary-container/80 backdrop-blur-md">
              <a href={SITE_CONFIG.mapsUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-white/5 border border-white/10 py-3 rounded-lg text-on-surface font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">directions</span>
                Obtener Direcciones
              </a>
            </div>
          </div>

          {/* Contact Channels Card */}
          <div className="glass-card p-lg rounded-xl mt-8">
            <h3 className="font-headline-md text-on-surface text-lg mb-lg">Canales Directos</h3>
            <div className="space-y-md">
              {/* Phone */}
              <a href={`tel:${SITE_CONFIG.phone.replace(/\\s/g, '')}`} className="flex items-start gap-4 p-md rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">call</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-label-caps mb-1">TELÉFONO DE ASISTENCIA</p>
                  <p className="text-body-md font-semibold text-on-surface">{SITE_CONFIG.phone}</p>
                </div>
              </a>
              {/* Email */}
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-start gap-4 p-md rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">mail</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-label-caps mb-1">CONSULTAS MÉDICAS</p>
                  <p className="text-body-md font-semibold text-on-surface">{SITE_CONFIG.email}</p>
                </div>
              </a>
              {/* WhatsApp */}
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-md rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">chat</span>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-label-caps mb-1">WHATSAPP CONCIERGE</p>
                  <p className="text-body-md font-semibold text-on-surface">+{SITE_CONFIG.phone}</p>
                </div>
              </a>
            </div>
          </div>

          {/* Emergency Banner */}
          <div className="bg-error-container/20 border border-error/20 p-md rounded-xl flex items-center gap-4 mt-8">
            <div className="w-10 h-10 bg-error/10 rounded-full flex items-center justify-center text-error">
              <span className="material-symbols-outlined">emergency_home</span>
            </div>
            <div>
              <p className="text-sm font-bold text-error">Emergencias Críticas</p>
              <p className="text-xs text-error/80 leading-tight">Para lesiones agudas graves, favor dirigirse directamente a la unidad de trauma del Hospital CIMA.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
