export default function Especialidades() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
      {/* Hero Section */}
      <section className="mb-20 text-center md:text-left grid md:grid-cols-2 items-center gap-12">
        <div>
          <span className="inline-block bg-cyan-500/10 text-cyan-400 font-mono-technical text-label-caps px-4 py-1 rounded-full mb-6 border border-cyan-400/20">PRECISIÓN QUIRÚRGICA</span>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">
            Especialidades Médicas de <span className="text-tertiary">Alto Rendimiento</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl mb-8">
            Combinando tecnología de vanguardia con técnicas quirúrgicas avanzadas para restaurar la movilidad y el potencial atlético de élite.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-tertiary text-sm">precision_manufacturing</span>
              <span className="font-mono-technical text-xs text-on-surface-variant">TECNOLOGÍA ROBÓTICA</span>
            </div>
            <div className="flex items-center gap-2 bg-surface-container border border-outline-variant/30 px-4 py-2 rounded-full">
              <span className="material-symbols-outlined text-tertiary text-sm">biotech</span>
              <span className="font-mono-technical text-xs text-on-surface-variant">BIOMECÁNICA AVANZADA</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-tertiary/10 blur-3xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity"></div>
          <div className="relative glass-card rounded-2xl overflow-hidden aspect-square border border-silver-400/20">
            <img alt="Surgical precision" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDC9jchJPosnXv6MDmI2zhYE6nAOQwRxPgFF2qEWvYdnvHkp50EVt8qo9CxPMMkSn60_SXolibs69yVsgi_fnF8PgU22IjUdyurI6KRW7T8VtNFvF7UlX-kXCSaRsj2NGiFa88aOEPmmR3aMOU8b3ovcnR0u5b2b8kfXPVSsyxmHQJfO9Ku4_g2vB5B-f2Ngh97Gs7gv9v6_F97ijGvVh4Xt9_YYNb-tGLwTX0cgX1-D79CkX5x_evPyEF7yL65uTFY_g9sbAbCJ7g"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Specialties Grid */}
      <section className="grid grid-cols-1 gap-8 mb-24">
        {/* Specialty: Shoulder */}
        <div className="glass-card p-8 rounded-2xl flex flex-col group metallic-sheen transition-all duration-500 hover:border-tertiary/40">
          <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mb-6 cyan-glow-pulse group-hover:bg-tertiary/10 transition-colors">
            <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>accessibility_new</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Cirugía de Hombro</h3>
          <p className="text-body-md text-on-surface-variant mb-6 flex-grow">Expertos en reconstrucción artroscópica de manguito rotador y tratamiento de inestabilidad articular, complementado con Ondas de Choque Focales para tendinopatías crónicas.</p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-sm font-mono-technical text-secondary">Artroscopia de alta definición</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-sm font-mono-technical text-secondary">Reparación del Labrum</span>
            </div>
          </div>
          <button className="w-full py-3 rounded-lg border border-outline-variant/50 text-tertiary font-lexend text-xs uppercase tracking-widest hover:bg-tertiary/5 hover:border-tertiary transition-all">Ver Detalles del Procedimiento</button>
        </div>

        {/* Specialty: Knee */}
        <div className="glass-card p-8 rounded-2xl flex flex-col group metallic-sheen transition-all duration-500 hover:border-tertiary/40">
          <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mb-6 cyan-glow-pulse group-hover:bg-tertiary/10 transition-colors">
            <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>directions_run</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Cirugía de Rodilla</h3>
          <p className="text-body-md text-on-surface-variant mb-6 flex-grow">Especialistas en reconstrucción de LCA y preservación de cartílago, utilizando Ondas de Choque como alternativa no invasiva para estimular la regeneración tisular.</p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-sm font-mono-technical text-secondary">Reconstrucción de LCA</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-sm font-mono-technical text-secondary">Meniscectomía Selectiva</span>
            </div>
          </div>
          <button className="w-full py-3 rounded-lg border border-outline-variant/50 text-tertiary font-lexend text-xs uppercase tracking-widest hover:bg-tertiary/5 hover:border-tertiary transition-all">Ver Detalles del Procedimiento</button>
        </div>

        {/* Specialty: Sports Medicine */}
        <div className="glass-card p-8 rounded-2xl flex flex-col group metallic-sheen transition-all duration-500 hover:border-tertiary/40">
          <div className="w-16 h-16 glass-card rounded-xl flex items-center justify-center mb-6 cyan-glow-pulse group-hover:bg-tertiary/10 transition-colors">
            <span className="material-symbols-outlined text-tertiary text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>sports_gymnastics</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-on-surface mb-4">Medicina Deportiva</h3>
          <p className="text-body-md text-on-surface-variant mb-6 flex-grow">Enfoque multidisciplinario que integra medicina regenerativa y Ondas de Choque Focales para acelerar la recuperación sin necesidad de intervención quirúrgica.</p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-sm font-mono-technical text-secondary">Terapias Regenerativas</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span>
              <span className="text-sm font-mono-technical text-secondary">Análisis Biomecánico 3D</span>
            </div>
          </div>
          <button className="w-full py-3 rounded-lg border border-outline-variant/50 text-tertiary font-lexend text-xs uppercase tracking-widest hover:bg-tertiary/5 hover:border-tertiary transition-all">Ver Detalles del Procedimiento</button>
        </div>
      </section>

      {/* Technical Excellence Section (Bento Inspired) */}
      <section className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 glass-card p-8 rounded-2xl relative overflow-hidden group">
          <img alt="Tech surgical" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCixlbBVtZG9Yo-GhT3C6lAs3v-LMgUGbJrAaorsippxJNv4JxJIAnUtmWXLcXqazzkK9BxoUnSS8MclMM-aZGjE2RRmczjGuMkT45e-7H8xDB1novqWCWwW2W7ob1LEXU6N3L6yELp0i0pqhz6bHiMQcGHQRAQ9UrOnItXaHbc6De1GtE3sXw7KODYsGla3HBUbvvWvpocRBVVd83bDKuPIeMpxgHZsrnBZd2vktmDjkQtPtDhF5rw0QJDU9EhP4V1U9wnbeHIsdw"/>
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg mb-4">Tecnología de Visualización 4K</h2>
            <p className="text-on-surface-variant mb-6">Utilizamos torres de video con resolución 4K y tecnología NBI para una identificación tisular ultra-precisa durante la cirugía.</p>
            <div className="flex gap-4">
              <div className="glass-card px-4 py-2 rounded-lg bg-surface/80">
                <span className="block text-tertiary font-lexend font-bold text-xl">99.8%</span>
                <span className="text-[10px] font-mono-technical uppercase tracking-tighter">Precisión Visual</span>
              </div>
              <div className="glass-card px-4 py-2 rounded-lg bg-surface/80">
                <span className="block text-tertiary font-lexend font-bold text-xl">&lt;10ms</span>
                <span className="text-[10px] font-mono-technical uppercase tracking-tighter">Latencia Zero</span>
              </div>
            </div>
          </div>
        </div>
        <div className="glass-card p-8 rounded-2xl flex flex-col justify-end min-h-[300px]">
          <span className="material-symbols-outlined text-tertiary text-4xl mb-4">clinical_notes</span>
          <h4 className="font-headline-md text-headline-md mb-2">Protocolos Personalizados</h4>
          <p className="text-sm text-on-surface-variant">Cada atleta recibe un plan de recuperación basado en su bio-mecánica individual.</p>
        </div>
        <div className="glass-card p-8 rounded-2xl border-tertiary/30 bg-tertiary/5">
          <div className="flex justify-between items-start mb-12">
            <div className="w-12 h-12 rounded-full border border-tertiary flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">pulse_alert</span>
            </div>
            <div className="text-right">
              <span className="font-mono-technical text-2xl text-on-surface">120+</span>
              <p className="text-[10px] uppercase text-on-surface-variant">Cirugías Mensuales</p>
            </div>
          </div>
          <h4 className="font-headline-md text-headline-md mb-2">Elite Care</h4>
          <p className="text-sm text-on-surface-variant">Confianza depositada por ligas profesionales de fútbol, béisbol y baloncesto.</p>
        </div>
      </section>

      {/* Detailed Recovery Timeline */}
      <section className="max-w-7xl mx-auto px-8 mb-32 mt-32">
        <h2 className="font-headline-lg text-headline-lg text-center mb-16">Camino a la Recuperación</h2>
        <div className="relative py-12">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px timeline-wire"></div>
          <div className="space-y-16">
            {/* Milestone 1 */}
            <div className="relative flex items-center justify-center md:justify-start">
              <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                <h4 className="font-headline-md text-headline-md text-on-surface">Evaluación Inicial</h4>
                <p className="text-on-surface-variant">Mapeo 3D y análisis cinemático de la lesión.</p>
              </div>
              <div className="z-10 w-6 h-6 bg-background border-2 border-silver-400 rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-silver-400"></div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:block hidden">
                <span className="text-tertiary font-mono-technical text-xs">FASE 01</span>
              </div>
            </div>
            {/* Milestone 2 */}
            <div className="relative flex items-center justify-center md:justify-end">
              <div className="md:w-1/2 md:pr-12 md:text-right hidden md:block">
                <span className="text-tertiary font-mono-technical text-xs">FASE 02</span>
              </div>
              <div className="z-10 w-8 h-8 bg-background border-2 border-tertiary rotate-45 flex items-center justify-center cyan-glow-pulse animate-pulse">
                <div className="w-3 h-3 bg-tertiary"></div>
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h4 className="font-headline-md text-headline-md text-tertiary">Intervención Quirúrgica</h4>
                <p className="text-on-surface-variant">Procedimiento de mínima invasión con asistencia robótica.</p>
              </div>
            </div>
            {/* Milestone 3 */}
            <div className="relative flex items-center justify-center md:justify-start">
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h4 className="font-headline-md text-headline-md text-on-surface">Rehabilitación Dinámica</h4>
                <p className="text-on-surface-variant">Fisioterapia avanzada enfocada en movilidad funcional.</p>
              </div>
              <div className="z-10 w-6 h-6 bg-background border-2 border-silver-400 rotate-45 flex items-center justify-center">
                <div className="w-2 h-2 bg-silver-400"></div>
              </div>
              <div className="md:w-1/2 md:pl-12 hidden md:block">
                <span className="text-tertiary font-mono-technical text-xs">FASE 03</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
