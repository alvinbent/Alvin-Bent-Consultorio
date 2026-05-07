export default function PatientJourney() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-[1440px] mx-auto min-h-screen technical-grid">
      <header className="mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container border border-tertiary/20 mb-6">
          <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(76,215,246,0.8)]"></span>
          <span className="text-tertiary font-label-caps text-[10px]">PROTOCOLO DE RENDIMIENTO DE ÉLITE</span>
        </div>
        <h1 className="font-display-xl text-display-xl text-on-surface mb-4">LÍNEA DE TIEMPO DE RECUPERACIÓN</h1>
        <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">Un mapa quirúrgico de alta precisión diseñado para atletas de élite. Desde el manejo del trauma agudo hasta la optimización biomecánica y el retorno al juego.</p>
      </header>
      
      <div className="flex flex-col lg:flex-row gap-16 relative">
        <div className="hidden lg:block absolute left-[19px] top-0 bottom-0 w-[2px] timeline-wire"></div>
        <div className="flex-1 space-y-12 relative">
          {/* Phase 1 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center">
              <div className="w-4 h-4 bg-tertiary rotate-45 shadow-[0_0_15px_rgba(76,215,246,0.5)]"></div>
            </div>
            <div className="glass-card metallic-sheen p-8 rounded-lg">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono-technical text-tertiary text-xs uppercase mb-2 block">FASE 01 | SEMANAS 0-2</span>
                  <h3 className="font-headline-md text-on-surface">INTERVENCIÓN QUIRÚRGICA AGUDA</h3>
                </div>
                <div className="bg-surface-container-high px-3 py-1 rounded border border-outline-variant font-mono-technical text-xs text-on-surface-variant">ESTADO: COMPLETADO</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ul className="space-y-3 font-body-md text-on-secondary-container">
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Reparación artroscópica mínimamente invasiva</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Estabilización inicial del tejido</li>
                  <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Manejo de edema e inflamación</li>
                </ul>
                <div className="rounded-lg overflow-hidden border border-outline-variant/30">
                  <img alt="Surgical precision" className="w-full h-32 object-cover opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL0sMyxa2P6A0JNqSic_NgbmrC7jgD1VM4v6UpMZdDb3fwLQyxOtJ8FcS99NYn7eBr8o4Qvs5_XUhg38uDLrSu7Bb_JiMjpMWChE42pJzvDIia9tIIYD7kM6ncRS1pkqkFuLb78bQ0GP_dzt8QF8SK9YRU3M3QVO70hQ8dPov6AcR66QLo3H45kAqCW61_dZky0jKVgTwjZCHxrmm1h8fkZU5RT4l5F8MiPCmxW18EAinqeBAw19XvBNgfWCaZAeEKpQ8nHfKs_LU"/>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase 2 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center">
              <div className="w-4 h-4 bg-tertiary rotate-45 shadow-[0_0_20px_rgba(76,215,246,1)] cyan-pulse"></div>
            </div>
            <div className="glass-card metallic-sheen p-8 rounded-lg border-tertiary/40">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono-technical text-tertiary text-xs uppercase mb-2 block">FASE 02 | SEMANAS 2-6</span>
                  <h3 className="font-headline-md text-on-surface">MOVILIDAD PROTEGIDA</h3>
                </div>
                <div className="bg-tertiary/10 px-3 py-1 rounded border border-tertiary/30 font-mono-technical text-xs text-tertiary flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span> ACTIVO AHORA</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <p className="text-on-secondary-container text-body-md">Enfoque en restaurar el rango de movimiento sin comprometer la integridad del injerto o sitio de reparación.</p>
                  <div className="flex gap-2">
                    <div className="bg-surface-container px-3 py-1 rounded-full text-[10px] font-mono-technical text-on-surface-variant border border-outline-variant">ROM: 0-90°</div>
                    <div className="bg-surface-container px-3 py-1 rounded-full text-[10px] font-mono-technical text-on-surface-variant border border-outline-variant">CARGA DE PESO: 25%</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-mono-technical text-on-surface-variant mb-1">
                    <span>INTEGRACIÓN TISSULAR</span>
                    <span>68%</span>
                  </div>
                  <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="h-full bg-tertiary shadow-[0_0_10px_rgba(76,215,246,0.6)]" style={{ width: '68%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phase 3 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center">
              <div className="w-3 h-3 bg-slate-600 rotate-45"></div>
            </div>
            <div className="glass-card metallic-sheen p-8 rounded-lg opacity-60">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono-technical text-slate-500 text-xs uppercase mb-2 block">FASE 03 | SEMANAS 6-12</span>
                  <h3 className="font-headline-md text-slate-400">FORTALECIMIENTO DINÁMICO</h3>
                </div>
                <div className="bg-surface-container-low px-3 py-1 rounded border border-outline-variant font-mono-technical text-xs text-slate-500">PENDIENTE</div>
              </div>
              <p className="text-on-primary-container text-body-md">Transición a ejercicios de carga de peso y activación de grupos musculares localizados mediante bucles de bio-retroalimentación.</p>
            </div>
          </div>
          
          {/* Phase 4 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center">
              <div className="w-3 h-3 bg-slate-600 rotate-45"></div>
            </div>
            <div className="glass-card metallic-sheen p-8 rounded-lg opacity-60">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-mono-technical text-slate-500 text-xs uppercase mb-2 block">FASE 04 | MESES 4-6</span>
                  <h3 className="font-headline-md text-slate-400">INTEGRACIÓN PLIOMÉTRICA</h3>
                </div>
              </div>
              <p className="text-on-primary-container text-body-md">Patrones de movimiento explosivos, ejercicios de agilidad y carga de la cadena cinética específica del deporte.</p>
            </div>
          </div>
        </div>
        
        <aside className="w-full lg:w-80 space-y-6">
          <div className="glass-card p-6 rounded-lg">
            <h4 className="font-label-caps text-on-surface mb-6 flex items-center gap-2"><span className="material-symbols-outlined text-tertiary">analytics</span> MONITOR VITAL EN VIVO</h4>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs text-on-secondary-container">TASA DE CURACIÓN</span>
                <span className="bg-primary-container text-tertiary px-2 py-0.5 rounded font-mono-technical text-xs border border-tertiary/20">1.2x OPTIMAL</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-on-secondary-container">INFLAMACIÓN</span>
                <span className="bg-primary-container text-cyan-400/80 px-2 py-0.5 rounded font-mono-technical text-xs border border-cyan-400/10">BAJA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-on-secondary-container">SIMETRÍA MUSCULAR</span>
                <span className="bg-primary-container text-tertiary px-2 py-0.5 rounded font-mono-technical text-xs border border-tertiary/20">84%</span>
              </div>
            </div>
          </div>
          <div className="glass-card p-6 rounded-lg relative overflow-hidden group">
            <img alt="Athlete training" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDix9okTFhVmuy2nk_YkZOneX-qc0axWAJjI91xRfhDV7X_r1IL11rSq-Skvv3tC7_72jPwGK3M9j8qnPX9b2IWerlPfnKP8EIw2Qws-5RmFrWmkR0R2FH8-cR0BxJ-KWU0ZmwA-JhTHyc_EVkDCnDicGRsfL0FE5gaXT16l7B-SNINHWtn-IfjawyBBnGFkcrBYGReQWjBpMEP8fV0T2xpyBPuPl137ecDfDIkmKObKHMd9dAiUso94bClJ1hMUkyOUhXwWAmIFuk"/>
            <div className="relative z-10">
              <h4 className="font-headline-md text-sm text-on-surface mb-2">PRÓXIMA SESIÓN</h4>
              <p className="text-xs text-on-secondary-container mb-4">Movilidad Funcional y Análisis de Marcha con el Dr. Bent</p>
              <div className="text-xs font-mono-technical text-tertiary">MAÑANA 08:30 AM</div>
              <button className="w-full mt-4 skeuomorphic-button py-2 text-[10px] font-label-caps tracking-widest text-white">REPROGRAMAR</button>
            </div>
          </div>
          <div className="p-6 border border-tertiary/10 bg-tertiary/5 rounded-lg">
            <p className="text-[11px] font-mono-technical text-tertiary/80 leading-relaxed italic">"La recuperación no es solo tiempo. Es una secuencia de optimización biológica ejecutada con precisión quirúrgica."</p>
            <p className="text-[10px] font-label-caps text-on-surface mt-3">— DR. ALVIN BENT</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
