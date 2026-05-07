import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
          <img className="w-full h-full object-cover opacity-40" alt="high-tech orthopedic surgery suite with blue ambient lighting and robotic medical equipment in cinematic focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbN-zhQAEqtfzJY1AWlSIm5A0obfGYy1y3nVuYREj9TNeDl6B2kkC9bzm6s6VWNqiZqI4kLMulCTUtpzmjRo-V-lHykRIRNOLTMo_4VDEwR3cyqGT7piBUkH3YwvLHpkCHYXbcRCShKFMzrjr3UZ3-8vlvrLno4U9wwX3ZQMN61LGykkKok4LPkvptUTj_opsOymZswwvEB5JkFBkk_ZfMb9csK980OcV3qKQQNDhHjrmIm2EEjxxwVUCAc6cAK3KQv_kijhBkoOk"/>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary-container border border-tertiary/30">
              <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
              <span className="text-tertiary font-mono-technical text-[10px] uppercase tracking-[0.2em]">Excelencia Ortopédica</span>
            </div>
            <h1 className="font-display-xl text-white leading-none">
              <span className="block text-surface-tint">DR. ALVIN</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">BENT</span>
            </h1>
            <p className="font-body-lg text-on-secondary-container max-w-lg">
              Medicina deportiva de élite y cirugía ortopédica avanzada. Restauramos el movimiento con precisión quirúrgica y tecnología de vanguardia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacto" className="skeuomorphic-button px-8 py-4 rounded-xl text-white font-headline-md flex items-center gap-3 group hover:border-tertiary/50 transition-all neon-glow-cyan">
                <span className="">Agendar Cita Prioritaria</span>
                <span className="material-symbols-outlined text-tertiary group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link to="/especialidades" className="glass-panel px-8 py-4 rounded-xl font-label-caps border-silver-100/10 hover:bg-white/5 transition-colors text-white text-center flex items-center">
                Ver Resultados
              </Link>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-tertiary/10 blur-3xl rounded-full"></div>
            <div className="glass-panel p-2 rounded-2xl relative border-white/10">
              <img className="rounded-xl w-full aspect-square object-cover shadow-2xl" alt="close-up of a high-tech medical monitor displaying a detailed 3d knee joint reconstruction in neon blue tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuk8Mp5gyxpJ09qX8enRs8mDOe-ewgV_rFIYnzey0D61T7MjzlHNUE7BR5MH_Re_ZGqZPe2-CQgZcqKJWVu8rDsgU-7KMrJn9TSAzyx_RpVqU5ILCW5KyojWiBfs0o-S5J10Bi9JD_X3ECVzAh5KHtDCyAS18fRPWpP2BTvJQx0_j8DazF4QqaYoqevNiDQ2oKP-LzKwDckHMQ-6XTtf4o4sbcajmAL4kToZaG9bdGj58NQNFXG6GzFTfYmImwSSbDClnDQ3RM1wQ"/>
              <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-xl border-tertiary/20 flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-tertiary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: '"FILL" 1' }}>bolt</span>
                </div>
                <div>
                  <div className="text-white font-bold text-xl leading-none">98%</div>
                  <div className="text-slate-400 text-xs font-label-caps uppercase">Tasa de Recuperación</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="font-headline-lg text-white">Especialidades</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-tertiary to-transparent"></div>
          </div>
          <p className="font-body-md text-slate-400 max-w-md">
            Enfoque especializado en las articulaciones más críticas para el rendimiento atlético y la movilidad diaria.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <Link to="/especialidades" className="group relative glass-panel p-8 rounded-2xl hover:border-tertiary/40 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-white">accessibility_new</span>
            </div>
            <h3 className="font-headline-md text-white mb-4">Hombro</h3>
            <p className="font-body-md text-slate-400 mb-8 flex-grow">Tratamiento integral de lesiones del manguito rotador, artrosis e inestabilidad articular.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-tertiary font-label-caps text-xs">Ver más</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden h-32 opacity-60">
              <img className="w-full h-full object-cover" alt="anatomical 3d render" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcTZ2UI1MhhOycZjda8pDhdyK7zAXSL2vxdxI4zhY6EntowfSZAZHaGqAmtnBUifI-OUWUJGvkZmfsBUokyenkgK9NYclE0SgAuJr1rsHV2V8apPJPy6Q7sscH31qbBzUf4h5FEuVTWhaJuzCGmFb1j8uRM_uPXeIOdt5XCpez5SmBCWbvgVMRD3rgYplNJkZ3eAGG6IIKsfnu1YL1z3f2MSa9Hb4WOaG4W9zvdma2Q33PxhsxtgT8tSuTPZq3JPHs-2o597eb8-I"/>
            </div>
          </Link>

          <Link to="/especialidades" className="group relative glass-panel p-8 rounded-2xl border-tertiary/20 bg-tertiary/5 hover:border-tertiary transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-tertiary">folded_hands</span>
            </div>
            <h3 className="font-headline-md text-white mb-4">Rodilla</h3>
            <p className="font-body-md text-slate-400 mb-8 flex-grow">Remplazo Articular, Reconstrucción de ligamentos, menisco, artrosis y artroscopia avanzada para deportistas de alto nivel.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-tertiary font-label-caps text-xs">Ver más</span>
              <div className="w-10 h-10 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden h-32">
              <img className="w-full h-full object-cover" alt="orthopedic surgeon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7fzdKcsBxOTZKyIL25fh2ymEzlqOznhRUY1b51DI-E7daCA15LhIqsm2nXRZ87YXWRXKOGZYhP63FPINRP-9ntmV6dLMIs44Cr_z-0tbeq3LnDmhLTKOhIb8qn0HmKVc915HetSEKmYayfxA5U9NiysIw-64KWB2cd8a6-eiKzLzD0XpIwLkoCfa99eGvZKJR9iu6KYF1GfhYLpxk4lAoz4pzfkkIG2Yvd_JAW24HZ8tYLReBDrhKkLD_7GGo2UUfhWUlp4XBZWs"/>
            </div>
          </Link>

          <Link to="/especialidades" className="group relative glass-panel p-8 rounded-2xl hover:border-tertiary/40 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-white">sports_handball</span>
            </div>
            <h3 className="font-headline-md text-white mb-4">Deporte</h3>
            <p className="font-body-md text-slate-400 mb-8 flex-grow">Optimización del rendimiento y prevención de lesiones traumáticas en competencia.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-tertiary font-label-caps text-xs">Ver más</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden h-32 opacity-60">
              <img className="w-full h-full object-cover" alt="professional athlete" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAiIcXQA4ZLjeoYzuhmWxRp_QqbuT1YFqgGvCwpiF5Hqd4qBEKig9lNl3I5tKXGFNmwdSPQMJGJAa7Dt67Nvv1U9rUyykU3M5K6ZA8K_0Pwg9DQm00-649lDR9KKxD7Rdp69wfze3QO66gHv_gWiUBLImKgSob0Hlc2IPdlrp8HMapbaDzJ1f_MK6t7r7fHhErzKDHOs0sUfmcFjl8uCCKpqUqhZ8Pp204b_WtmQHXRAiH-pBEzbq2BOyR6Bcb_F0vjjJUZvoahyA"/>
            </div>
          </Link>

          <Link to="/especialidades" className="group relative glass-panel p-8 rounded-2xl hover:border-tertiary/40 transition-all duration-500 overflow-hidden flex flex-col h-full cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <span className="material-symbols-outlined text-6xl text-white">vital_signs</span>
            </div>
            <h3 className="font-headline-md text-white mb-4">Ondas de Choque Focales</h3>
            <p className="font-body-md text-slate-400 mb-8 flex-grow">Tecnología regenerativa no invasiva de vanguardia para la recuperación acelerada de tejidos blandos y hueso.</p>
            <div className="flex justify-between items-center mt-auto">
              <span className="text-tertiary font-label-caps text-xs">Ver más</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-tertiary group-hover:text-on-tertiary transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </div>
            </div>
            <div className="mt-6 rounded-lg overflow-hidden h-32 opacity-60">
              <img className="w-full h-full object-cover" alt="shockwave therapy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7fzdKcsBxOTZKyIL25fh2ymEzlqOznhRUY1b51DI-E7daCA15LhIqsm2nXRZ87YXWRXKOGZYhP63FPINRP-9ntmV6dLMIs44Cr_z-0tbeq3LnDmhLTKOhIb8qn0HmKVc915HetSEKmYayfxA5U9NiysIw-64KWB2cd8a6-eiKzLzD0XpIwLkoCfa99eGvZKJR9iu6KYF1GfhYLpxk4lAoz4pzfkkIG2Yvd_JAW24HZ8tYLReBDrhKkLD_7GGo2UUfhWUlp4XBZWs"/>
            </div>
          </Link>
        </div>
      </section>

      {/* Educational Center Preview */}
      <section className="py-24 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-white mb-4">Centro Educativo</h2>
            <p className="font-body-md text-slate-400 max-w-2xl mx-auto">Explora patologías comunes a través de visualización 3D y contenido clínico exclusivo.</p>
          </div>
          <Link to="/educacion" className="block relative max-w-5xl mx-auto aspect-video glass-panel rounded-3xl overflow-hidden group cursor-pointer">
            <img className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" alt="3d medical display" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu0-ieYkPh7Dx2CbDV6n1IaB4pR4dLQVomOlPw6pPc2TpELXuCDvF75Ua26u_08ASPIneZPuhfrsMrSMaIw7Ol64NWMPSvv1e9U6661H1V31VAkiSQmqoMtcka7ChcoZyuluNL4wll-yRYNpJF_UtLsWzQ-eUHAf7rEznRZDN95C7WidxCy3xF8Y9Dz1HehiCe2Mt7SEXZVRoXPp39QAaSq8wYG3CvgsMBPDQt-BEEEbOHS3Rr5734vJacxtZO1O5mbeg5LXErj0c"/>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                 <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: '"FILL" 1' }}>play_arrow</span>
               </div>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-background to-transparent">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary">3d_rotation</span>
                <span className="font-label-caps text-xs text-white uppercase tracking-widest">Ingresar al Centro Educativo</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#4cd7f6 1px, transparent 1px), linear-gradient(90deg, #4cd7f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </section>

      {/* Social Hub */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-[2px]">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-xl">camera</span>
                </div>
              </div>
              <div>
                <h3 className="font-headline-md text-white">Social Hub</h3>
                <p className="text-xs text-slate-500 font-label-caps uppercase tracking-widest">@dralvinbent</p>
              </div>
            </div>
            <a href="#" className="text-tertiary font-label-caps text-xs border border-tertiary/30 px-6 py-2 rounded-full hover:bg-tertiary/10 transition-all">Seguir en Instagram</a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden glass-panel relative group">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="instagram feed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB534ydqs2ZoInYtjRm8wqknfFqfK18CN3wHF90fS5q0StulEjxPJhfUij3j4Osxh8xyB-KuilWabaan3NCd4pkij09WXbN64t_35jASshD7EJDZtzK-W7vDBf99z_vBhc_oN2OMu9_IXdgGOUXepyxlWAugQ8VZ1C_V02kj306OwFagbq5T6NXSGUZtYb7MUBfcsdwO4lIM97V89sdL4qYwvtHLExDh5ZF5SR_omu4FSUYPxARR-PQHV3w8NWR3kFc0V5ZoXKKVDM"/>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden glass-panel relative group">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="clinic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsGJBc3lrcrXRTYA5zp_YiOKa_86j53HFrE447sLUnsLPB3SXlcPvEf6ZiUHLk27u90jDI6qO-Fv6BQNMK9ylNf9tvzG3deH_YUADziCu6G-R6GB2R_MIw2UHBqnutSu7g_Z0SSVjMfEP17_89HeobGnPUdoj3qOUt4BNcP9KElVuTmzxK1vnasiCuEc74SifdpdjY8vdhXw-GoRuV8DUYBURPG7RsiUBTtZic8jAxT2wNqqIEE1sFq_3tgyc80wshNx69-yMov18"/>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden glass-panel relative group">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="athlete" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfnHwRZy4LluQ1Ft_pTpA7NnJFO2CHdv7TGxJPoY4omapCzVfnDNIB6zywAdZh1CcZaSsF-sK0q4GTOTQkDecBiajqkqxOBCo0VC_Sl14eIn3VC1dgL51PFghH5AcmeUoZGzqq-zPV0vEjUK1_L49ZtXUk6A3JHy6pDJ6U0joXbmQV9XlYhSsvYNdY0kgQsZpG089eFT1niWGuKA6dLN-7STzBsyy8hr0o0szRU5bkHfFStIpYrkdDgn_AzSBJmFYh670l297z9Hk"/>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden glass-panel relative group">
              <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="doctor hands" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDr05lpgBem5kFPNT-yG8vsqXd_dBtG924WQUTogy_dRcffoIMwG7Gx00tw5Gr-5ty3aEWIYKivtzhSaCjy6bcggFXl1_yqzy33-61wGTp1BfkjLnYO3PYa3pRVoCbJAc8y9UcE1cw9UkJ8Rmft2vQUJONej3Z6hBLOf2Z5aHc7cspnrnSglJsju15OGDeO6x1BXAKyFUQVyppcsp1s_vQqPUAU0-ZfqfG8ixLUdV-y7fT4oNSGf5EmgfSCMvc2ednVi6rOBk_mvlM"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
