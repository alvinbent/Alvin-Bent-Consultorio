export default function Educacion() {
  return (
    <div className="pt-32 pb-20 px-8 max-w-[1440px] mx-auto min-h-screen">
      {/* Hero Section */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-tertiary font-label-caps mb-4 block tracking-[0.3em]">PORTAL ACADÉMICO</span>
            <h1 className="font-display-xl text-display-xl text-on-surface mb-4">Centro Educativo</h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-2xl">Recursos avanzados de patología, visualizaciones quirúrgicas en 3D de alta fidelidad y protocolos de recuperación basados en evidencia, diseñados para el rendimiento atlético de élite.</p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-surface-container-high rounded-full text-tertiary border border-tertiary/20 flex items-center gap-2 font-mono-technical text-mono-technical">
              <span className="material-symbols-outlined text-sm">database</span> v.4.2 NÚCLEO BIOMÉTRICO
            </span>
          </div>
        </div>
      </header>

      {/* Bento Grid: Main Features */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-20">
        {/* 3D Pathology Video Library */}
        <div className="md:col-span-8 glass-card rounded-xl overflow-hidden group">
          <div className="relative h-[400px]">
            <img alt="3D Human Knee Joint" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCYbGats2HXvHetIEeePFwXqyXM4GHVxiOc2EiVhzQ3CG9DGYIzz8oHxsGxL_wIKj3Sd6jPoYj8fQZPFpqSJCfpQhaZ2S4V2tkguubQ5vYFs1EWoTZVPM6mgzNxxDQSW4aPq33xkEct2M2Leicm50B6W2DIKK3xK12jvYYKzEjfKFAKzSbbcTsp_uHrraZd4BNmc3zKmb2q0ODHfdpqrLA0V5VQHIyPZcDBYSSG2L3fVqy1sVNBFeajoxrGGX7-fB2Wu6XtgLUE_g"/>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 bg-tertiary rounded-full animate-pulse"></span>
                <span className="text-tertiary font-label-caps">VIDEO DESTACADO</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg text-white mb-2">Mecánica de Reconstrucción del LCA</h2>
              <p className="text-on-surface-variant max-w-md">Vista interna del procedimiento quirúrgico mediante modelado 3D de ultra alta definición y dinámica de fluidos.</p>
            </div>
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full glass-card flex items-center justify-center hover:bg-tertiary group/play transition-all">
              <span className="material-symbols-outlined text-4xl text-white group-hover/play:text-on-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
            </button>
          </div>
        </div>

        {/* Recovery Protocols */}
        <div className="md:col-span-4 glass-card rounded-xl p-8 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-tertiary mb-6 text-4xl">fitness_center</span>
            <h3 className="font-headline-md text-headline-md mb-4">Protocolos de Recuperación</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm text-tertiary">arrow_forward</span>
                <span>Postoperatorio Semanas 1-4: Movilidad</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm text-tertiary">arrow_forward</span>
                <span>Estrategias de Gestión de Carga</span>
              </li>
              <li className="flex items-center gap-3 text-on-surface-variant hover:text-white transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm text-tertiary">arrow_forward</span>
                <span>Propiocepción Avanzada</span>
              </li>
            </ul>
          </div>
          <button className="w-full mt-8 py-3 border border-tertiary/30 font-label-caps text-tertiary hover:bg-tertiary/10 transition-all">VER TODOS LOS ARTÍCULOS</button>
        </div>

        {/* Interactive Diagram: Joint Map */}
        <div className="md:col-span-4 glass-card rounded-xl p-8 border-l-4 border-l-tertiary">
          <h3 className="font-headline-md text-headline-md mb-2">Mapa Articular Interactivo</h3>
          <p className="text-on-surface-variant text-body-md mb-8">Seleccione una región para explorar patologías específicas y rutas de tratamiento.</p>
          <div className="relative aspect-square flex items-center justify-center">
            {/* Stylized Human Figure/Joint Dots Placeholder */}
            <div className="w-48 h-80 border border-slate-700/50 rounded-full flex flex-col items-center justify-around py-10 relative">
              <div className="w-3 h-3 bg-tertiary rounded-full timeline-pulse cursor-pointer"></div>
              <div className="w-3 h-3 bg-tertiary rounded-full timeline-pulse cursor-pointer"></div>
              <div className="w-3 h-3 bg-slate-600 rounded-full cursor-pointer hover:bg-tertiary transition-colors"></div>
              <div className="w-3 h-3 bg-slate-600 rounded-full cursor-pointer hover:bg-tertiary transition-colors"></div>
              {/* UI annotations */}
              <div className="absolute top-10 -right-12 px-2 py-1 bg-surface-container border border-tertiary/50 text-[10px] text-tertiary font-mono-technical">CERVICAL</div>
              <div className="absolute bottom-1/2 -left-16 px-2 py-1 bg-surface-container border border-tertiary/50 text-[10px] text-tertiary font-mono-technical">COLUMNA LUMBAR</div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Grid */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="glass-card rounded-xl p-6 flex gap-6 items-start group cursor-pointer">
            <div className="w-24 h-24 bg-surface-container rounded shrink-0 overflow-hidden">
              <img alt="Microscopic Bone Structure" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbB_pmedlQajBoL1K0PQzNWupFmPknKEulyDoS3iwryQfzMTnkSK1z17nlOLejDlxFZBcU4vOAsr2SrO5sV4vwG4h0VPGQ3qwV_tmXPm2buv4DSZIeRpvWndRQskPmuLjClGOoH-Lja8yGahif3CInl5FUlssVP1U9BHSWZ2652-8LZKScqKw57a9A0dNyuOg6XvQdMLzZy4hqbQ-SdMzhlsphOCSIrhEf0QIc55eOQRj-eMncOujlqQbfsiiWRO0aFknY7m4gwcw"/>
            </div>
            <div>
              <h4 className="font-headline-md text-[20px] mb-2 text-white">Aumentación Biológica</h4>
              <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">Aprovechamiento de células madre y PRP en la recuperación ortopédica de élite.</p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono-technical text-tertiary uppercase">8 MIN DE LECTURA</span>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">bookmark</span>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex gap-6 items-start group cursor-pointer">
            <div className="w-24 h-24 bg-surface-container rounded shrink-0 overflow-hidden">
              <img alt="Precision Surgical Tools" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL6q1d0uoiGqaR0MIcX6HEgZDEuAAmxLsGJeG1NPmLger9n7_OhKxXzN75sr1CUWnphzlAONjo0F2yATyNg9Q_5SxvA8SKUb0T6tLFTMzTFY_eE-R2nYjvUxcY0LkljT6YchbX2lOQLngSrl0BwoygMlsB0W8qSZKOejh4cfAQYjNVobgJMMhQs2PM6obNaXD88bkhnYXS69xrnOxMvuYwfottTGl3LbpRLGeqqfLh9m4augKBPunlP9fi9gRZoT_NzKBNe4d5Vxo"/>
            </div>
            <div>
              <h4 className="font-headline-md text-[20px] mb-2 text-white">Artroscopia de Precisión</h4>
              <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">Técnicas mínimamente invasivas para la longevidad de las articulaciones.</p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono-technical text-tertiary uppercase">12 MIN DE LECTURA</span>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">bookmark</span>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex gap-6 items-start group cursor-pointer">
            <div className="w-24 h-24 bg-surface-container rounded shrink-0 overflow-hidden">
              <img alt="Athletic Biometrics" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzVSbw78oH8JGAgK2V_rTsIONkSfFo0-r_xnyrWrDvmMQZZ613v65f1gZt1Q9728_Ax-FycF6aethxLkZAsXc1v5kYTrJ7nlH9dIuj9ABYaGPAQLss7SwKAsDhHInJ5KxuWrYU9DGICNYWGgpvgSCdQPq4fvlS3pHAB2PFAwI755aiN1US9Otkr9INIIAsQJgcZ9-RxM29fOKPzrB0-s1iHRE9ur87qdRGX-kBrP0lD3HnFbzmnLXF4UUJm1w-S0OhJ9whKUHrfNU"/>
            </div>
            <div>
              <h4 className="font-headline-md text-[20px] mb-2 text-white">Retorno al Juego</h4>
              <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">Puntos de referencia basados en datos para la reanudación atlética segura.</p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono-technical text-tertiary uppercase">15 MIN DE LECTURA</span>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">bookmark</span>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-xl p-6 flex gap-6 items-start group cursor-pointer">
            <div className="w-24 h-24 bg-surface-container rounded shrink-0 overflow-hidden">
              <img alt="Advanced Imaging" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxwuaANBPRhNdcVYpcCrxVX3z8qBz1KE01tjrUzPzAaq1_k5KpMnhd9GJf0jRWuABqAy58rkbNqLczn2ctLvYVhU3nX99FHLuVrhLTciMsu_Q-wtMSu1GyuGbB2tVRkabdHN-tlK00nBKpUeG445Om4k_B6FeoB6pZWkb476i_YqKTW_gJ0wHrlSfQzPGs8AA9pG26IYhCAyZJWHM-8GUYXURD2tFcVVYeIUkJfNwQ2XSw1bjapE7yYx5cBsnYA-N8Tds-wmOyatk"/>
            </div>
            <div>
              <h4 className="font-headline-md text-[20px] mb-2 text-white">Inteligencia de Imagen</h4>
              <p className="text-body-md text-on-surface-variant line-clamp-2 mb-4">Descodificación de resultados de RM para el atleta profesional.</p>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono-technical text-tertiary uppercase">10 MIN DE LECTURA</span>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">bookmark</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs / Bio-Metric Chips Section */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <h3 className="font-headline-md text-headline-md text-white">Panel de Métricas del Paciente</h3>
          <div className="h-px bg-slate-800 flex-grow"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-on-surface-variant font-label-caps text-[10px] mb-2">TIEMPO DE ACTIVIDAD</div>
            <div className="text-tertiary font-display-xl text-3xl cyan-glow-text">99.9%</div>
            <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded bg-tertiary/10 text-tertiary text-[10px] font-mono-technical">TIEMPO REAL</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-on-surface-variant font-label-caps text-[10px] mb-2">DATOS DE RECUPERACIÓN</div>
            <div className="text-slate-100 font-display-xl text-3xl">12k+</div>
            <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded bg-slate-700/50 text-slate-400 text-[10px] font-mono-technical">ANONIMIZADOS</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-on-surface-variant font-label-caps text-[10px] mb-2">PRECISIÓN SENSORIAL</div>
            <div className="text-slate-100 font-display-xl text-3xl">0.05mm</div>
            <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded bg-slate-700/50 text-slate-400 text-[10px] font-mono-technical">GRADO QUIRÚRGICO</div>
          </div>
          <div className="glass-card p-6 rounded-lg text-center">
            <div className="text-on-surface-variant font-label-caps text-[10px] mb-2">HORAS EDUCATIVAS</div>
            <div className="text-slate-100 font-display-xl text-3xl">850+</div>
            <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded bg-slate-700/50 text-slate-400 text-[10px] font-mono-technical">ACREDITADO POR CME</div>
          </div>
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section className="glass-card rounded-2xl p-12 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-tertiary/5 blur-[100px] rounded-full"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="font-headline-lg text-headline-lg text-white mb-4">Manténgase informado sobre avances quirúrgicos</h2>
          <p className="text-on-surface-variant mb-8">Reciba actualizaciones trimestrales sobre técnicas ortopédicas innovadoras y protocolos de recuperación directamente desde el laboratorio del Dr. Bent.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-grow bg-primary-container border-0 border-b border-slate-700 focus:border-tertiary outline-none text-white placeholder:text-slate-600 transition-all px-4" placeholder="email_profesional@acceso.md" type="email"/>
            <button className="px-8 py-3 metallic-button text-on-primary font-label-caps text-[12px] font-bold rounded">SUSCRIBIRSE</button>
          </form>
        </div>
      </section>
    </div>
  );
}
