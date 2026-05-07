export default function Timeline() {
  return (
    <div className="pt-32 pb-24 px-8 max-w-7xl mx-auto min-h-screen">
      <header className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-12 h-[1px] bg-tertiary"></span>
            <span className="font-label-caps text-tertiary text-label-caps">PROTOCOLO DE ALTO RENDIMIENTO</span>
          </div>
          <h1 className="font-display-xl text-display-xl text-on-surface mb-6 leading-tight">
            Tu Camino a la <span className="text-tertiary">Excelencia</span> Deportiva
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Un mapa estratégico diseñado para atletas de élite. Desde el diagnóstico quirúrgico hasta el retorno triunfal al campo, cada paso es una fase de precisión biológica.
          </p>
        </div>
        <div className="hidden lg:flex justify-end">
          <div className="glass-card p-6 rounded-xl flex items-center gap-4 border-tertiary/20">
            <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-tertiary">speed</span>
            </div>
            <div>
              <div className="text-xs font-label-caps text-on-surface-variant">RECUPERACIÓN ESTIMADA</div>
              <div className="text-headline-md font-headline-md text-on-surface">94% <span className="text-sm font-normal text-on-surface-variant">Eficiencia</span></div>
            </div>
          </div>
        </div>
      </header>

      <section className="relative">
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] timeline-wire"></div>
        <div className="space-y-16">
          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="w-full md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-xl metallic-sheen">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary font-label-caps text-[10px]">FASE 01</span>
                  <span className="material-symbols-outlined text-on-surface-variant/40">biotech</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Diagnóstico de Precisión</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Análisis cinemático y resonancia de alta resolución para identificar micro-lesiones estructurales.</p>
                <div className="mt-6 flex gap-3">
                  <div className="bg-primary-container px-3 py-1.5 rounded-full border border-outline-variant/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-tertiary pulse-glow"></span>
                    <span className="text-xs font-mono-technical text-on-surface">3D Mapping</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-2 border-tertiary rotate-45 z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-tertiary"></div>
            </div>
            <div className="w-full md:w-[45%] text-right hidden md:block">
              <div className="p-6">
                <span className="text-display-xl font-display-xl opacity-10 text-on-surface">01</span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
            <div className="w-full md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-xl metallic-sheen">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary font-label-caps text-[10px]">FASE 02</span>
                  <span className="material-symbols-outlined text-on-surface-variant/40">precision_manufacturing</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Intervención Avanzada</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Procedimientos mínimamente invasivos con tecnología de navegación robótica para asegurar la integridad tisular.</p>
                <div className="mt-6 flex gap-3">
                  <div className="bg-primary-container px-3 py-1.5 rounded-full border border-outline-variant/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span className="text-xs font-mono-technical text-on-surface">Minimal Access</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-2 border-slate-500 rotate-45 z-10"></div>
            <div className="w-full md:w-[45%] text-left hidden md:block">
              <div className="p-6">
                <span className="text-display-xl font-display-xl opacity-10 text-on-surface">02</span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="w-full md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-xl border-tertiary/50 bg-tertiary/5">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded bg-tertiary text-on-tertiary font-label-caps text-[10px]">ACTUAL</span>
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>monitor_heart</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Biorregeneración</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Optimización metabólica y terapias biológicas para acelerar la consolidación del tejido reparado.</p>
                <div className="mt-6 flex gap-3 flex-wrap">
                  <div className="bg-primary-container px-3 py-1.5 rounded-full border border-tertiary/30 flex items-center gap-2">
                    <span className="text-xs font-mono-technical text-tertiary">98 BPM</span>
                  </div>
                  <div className="bg-primary-container px-3 py-1.5 rounded-full border border-tertiary/30 flex items-center gap-2">
                    <span className="text-xs font-mono-technical text-tertiary">CELL-ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-6 h-6 bg-tertiary rotate-45 z-20 flex items-center justify-center pulse-glow">
              <span className="material-symbols-outlined text-on-tertiary text-[16px]">check</span>
            </div>
            <div className="w-full md:w-[45%] text-right hidden md:block">
              <div className="p-6">
                <img alt="Athlete training" className="w-full h-48 object-cover rounded-xl grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC97Obrqn2VTVzShwnmr-6fpbiQHJA51nISGAgdMJl4sot5Lh2QKHwMbiLLTUGrbGxFymvwE8IeS5GIsRPMXrJxgAQp5deR3UBIJvJRUUdd0N7HhjGX7FcLdfW475pVFqgbwYxcytZgePojioJPDqhMxpWD9kU9DIKhj05rXUhaG5B-GHMiR0Q5A0qPKKlzqorOqh0MnQMCR3IjvGXn-AiDlYEoq_Mk3lPf1_C8DEFWzbQkSWHYNO_aRkSn_ihqgTul_wXUO-5fJa8"/>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row-reverse items-center justify-between group">
            <div className="w-full md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-xl metallic-sheen">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary font-label-caps text-[10px]">FASE 04</span>
                  <span className="material-symbols-outlined text-on-surface-variant/40">fitness_center</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Re-integración Motriz</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Entrenamiento neuro-muscular específico para restaurar patrones de movimiento de alta potencia.</p>
                <div className="mt-6 flex gap-3">
                  <div className="bg-primary-container px-3 py-1.5 rounded-full border border-outline-variant/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-slate-500"></span>
                    <span className="text-xs font-mono-technical text-on-surface">Power Flux</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-2 border-slate-500 rotate-45 z-10"></div>
            <div className="w-full md:w-[45%] text-left hidden md:block">
              <div className="p-6">
                <span className="text-display-xl font-display-xl opacity-10 text-on-surface">04</span>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between group">
            <div className="w-full md:w-[45%] mb-8 md:mb-0">
              <div className="glass-card p-8 rounded-xl metallic-sheen">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 rounded bg-tertiary/10 text-tertiary font-label-caps text-[10px]">FASE FINAL</span>
                  <span className="material-symbols-outlined text-on-surface-variant/40">trophy</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-3">Retorno al Deporte</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">Alta médica deportiva tras superar protocolos de estrés competitivo y estabilidad biomecánica.</p>
                <button className="mt-6 text-tertiary flex items-center gap-2 font-label-caps text-xs group-hover:gap-4 transition-all">
                  VER CRITERIOS DE ALTA <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-2 border-slate-500 rotate-45 z-10"></div>
            <div className="w-full md:w-[45%] text-right hidden md:block">
              <div className="p-6">
                <span className="text-display-xl font-display-xl opacity-10 text-on-surface">05</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32">
        <div className="glass-card p-12 rounded-2xl flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-primary-container to-surface-container">
          <div className="w-full md:w-1/3">
            <div className="relative aspect-square rounded-full border-4 border-tertiary/20 p-2">
              <img alt="Dr. Alvin Bent" className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv5enyPyfpaBigU2o2QkhE9XnsNxolYxjhSfUVeK1rzqF_BLFWDnN-pU4PWOSAVV4D7MBu3xctOnKb0bq3i1KrB3XWhYH_LUMGYd5yd69CcD179wv4EoxssuVHq9kzJUWnuJUIC8mX-De4qlk5c6xCGt4RqA7bjP59uyL0u9w4hnaPVUMs--ymtYrmvnNIHmvvqaXthAYjS_qF3DJFSd9TZzT5ZsAdPBB_xEVDbos82wyN8q7baeRttSGLtWxSPYafhukLENWYdD4"/>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-tertiary text-on-tertiary px-4 py-1 rounded-full font-label-caps text-[10px]">CIRUJANO JEFE</div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Un Compromiso con tu Legado</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              "En el deporte de élite, el tiempo no es solo un recurso; es la diferencia entre el éxito y el olvido. Mi protocolo de recuperación no solo busca curar, busca reconstruir a un atleta más fuerte, más resiliente y técnicamente superior."
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="skeuomorphic-silver px-8 py-3 rounded-lg font-lexend font-bold text-md tracking-tight active:scale-95 transition-transform text-slate-800">
                Iniciar mi Evaluación
              </button>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
                    <img alt="Athlete 1" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl02IlM6jGw1bYZjUdtxLpuJ-ZI3GWaFwd9bQ7Adr7qzem900kj-olMqZBu7GEZ-yXWTt7fXhTEYlBqX143JpHaVdpBTnL23ww0Mxpe3HXlzDLSkcJm3nKdjhBzakhswqz1gIMnEO5yg9tS-dc6ebNoXpexS3vYm9sdHBO14i2YrhoTwW2C_h112xBQrq-ytjlPH99ONJNVHoV3dpdmbf-rKniRoLACofAk-DU-RWjgKFM14oVRuyN4p8n9qqaKTODSahic8ug02Y"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
                    <img alt="Athlete 2" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEcQVvKBbCFyiVXBVkdbUERANSzXL8_K79d2F04Zcdz6N7rRsWn7jWA4eRCkn1MsHHZEO9Xp6wMM5_39i_A9cPRx6SbRFSifCqpOsZ4uT-juxNwzFDLktRypADwYk5yNZVui-g5etqpWiIBgpK6po4PJa2k4hf8huIpl9Z_XgjQb9vhZKJfRjavF49QGVncPxjN6P1OgsiKK5F-_1s6MGed3K8afs94wzPC8Fn2v7kLUG8fGHgeLJVn2TR9Nlvtxxj0GULAAAtIBE"/>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container overflow-hidden">
                    <img alt="Athlete 3" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARO0Q2qGEfEmL4raoV9eLBMc4Df4I3a02oGVWUXiG1WLMzsvDVqLUOUQMKlHMbAC4ID6AFZ9mLW_-WuTbGWew9mF9NQ7R1VNBXDUDPmh9fy5SKwMD56OSkrIeydVhZCsEZnaruErSfKqciHWidBmHxi-h-NU5eE372GodQgpHq0wYlcn6S1nC8oy6PAXVxcjj443oKFHWdJOJzGCiu3URwPEo6wKJ-uAKOjgc00kUyfztwBuIjHf2Dmhkkpdyb-LL4FF2v36zCWrg"/>
                  </div>
                </div>
                <span className="text-xs font-mono-technical text-on-surface-variant">+500 Atletas Recuperados</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
