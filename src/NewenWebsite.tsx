import { useEffect, useState, type ReactNode } from "react";
import {
  Download,
  Zap,
  Cpu,
  ShieldCheck,
  Settings,
  ChevronRight,
  CheckCircle,
  Play,
  Search,
  User,
  Folder,
  LogOut,
  Coffee,
  HardDrive,
  MessageCircle,
} from "lucide-react";

/* NEWEN LAUNCHER - LANDING PAGE
  Built with React + Tailwind CSS
  Identity: Dark Theme (#121212), Orange Accent (#FF8C00), Rajdhani/Inter Fonts
*/

const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

const NewenWebsite = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 font-sans selection:bg-[#FF8C00] selection:text-white overflow-x-hidden">
      {/* Font Imports and Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Rajdhani:wght@500;600;700&display=swap');

        .font-heading { font-family: 'Rajdhani', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }

        .glow-text { text-shadow: 0 0 20px rgba(255, 140, 0, 0.3); }
        .glow-box { box-shadow: 0 0 40px rgba(255, 140, 0, 0.1); }

        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: #121212; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #FF8C00; }
      `}</style>

      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#121212]/90 backdrop-blur-md border-b border-[#2A2E35]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="NEWEN logo"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded"
              loading="eager"
            />
            <span className="font-heading font-bold text-lg sm:text-2xl tracking-wide text-white whitespace-nowrap">
              NEWEN <span className="text-[#FF8C00] hidden sm:inline">LAUNCHER</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">
              Qué es Newen
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              Lo que puedes hacer
            </a>
            <a href="#download" className="hover:text-white transition-colors">
              Descarga
            </a>
            <a href="#discord" className="hover:text-white transition-colors">
              Discord
            </a>
            <a href="#faq" className="hover:text-white transition-colors">
              Preguntas rápidas
            </a>
          </div>

          <a
            href="https://forms.gle/247MqxET4xtHj3HM7"
            target="_blank"
            rel="noreferrer"
            className="bg-gradient-to-r from-[#FF8C00] to-[#B87333] text-white font-heading font-bold px-3 sm:px-6 py-2 rounded transition-all flex items-center gap-2 text-[11px] sm:text-sm whitespace-nowrap hover:brightness-110"
          >
            <Download size={18} />
            <span>Acceso anticipado</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF8C00] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#26619C] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/20 text-[#FF8C00] text-[10px] sm:text-xs font-bold tracking-wider uppercase font-body">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8C00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8C00]"></span>
              </span>
              Early Access
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] sm:leading-tight text-white">
              Newen Launcher
            </h1>

            <p className="font-heading text-xl sm:text-2xl text-white max-w-md sm:max-w-xl mx-auto lg:mx-0">
              Fuerza para jugar Minecraft sin complicaciones.
            </p>

            <p className="font-body text-gray-400 text-base sm:text-lg lg:text-xl max-w-md sm:max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Launcher moderno para quienes quieren rendimiento real, control de instancias y una
              experiencia limpia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://forms.gle/247MqxET4xtHj3HM7"
                target="_blank"
                rel="noreferrer"
                className="group relative w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-[#FF8C00] to-[#B87333] text-white font-heading font-bold text-base sm:text-lg rounded overflow-hidden shadow-[0_0_20px_rgba(255,140,0,0.2)] transition-all hover:brightness-110"
              >
                <span className="relative flex items-center gap-2 justify-center">
                  Solicitar acceso <Download size={20} />
                </span>
              </a>

              <a
                href="https://discord.gg/rTbktFZYZz"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-[#1B1E23] border border-[#2A2E35] text-gray-300 font-heading font-bold text-base sm:text-lg rounded hover:border-[#FF8C00] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} className="text-[#26619C]" />
                Discord oficial
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-gray-500 font-body">
              Early Access · Sin firma digital todavía · 0 detecciones en VirusTotal
            </p>
          </div>

          {/* UI Mockup */}
          <div className="hidden lg:block lg:col-span-7 relative glow-box rounded-xl bg-[#0b0d10] border border-[#2A2E35] p-2 shadow-2xl transition-transform duration-700 ease-out origin-top transform-gpu [transform:scale(0.92)] sm:[transform:rotateY(8deg)_scale(1)] lg:[transform:rotate(2deg)_scale(1)] lg:hover:[transform:rotate(0deg)_scale(1)] sm:[transform-style:preserve-3d] sm:[perspective:1000px] w-full max-w-[520px] sm:max-w-none mx-auto">
            <div className="h-10 bg-[#0b0d10] rounded-t-lg flex items-center px-4 gap-2 border-b border-[#2A2E35]/50 justify-between">
              <div className="text-xs text-gray-400 font-heading font-bold tracking-wider">
                Newen Launcher
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-1 bg-gray-600 rounded-full"></div>
                <div className="w-3 h-3 border border-gray-600 rounded-sm"></div>
                <div className="w-3 h-3 relative">
                  <div className="absolute inset-0 rotate-45 w-full h-[1px] bg-gray-600 top-1/2"></div>
                  <div className="absolute inset-0 -rotate-45 w-full h-[1px] bg-gray-600 top-1/2"></div>
                </div>
              </div>
            </div>

            <div className="h-[520px] sm:h-[600px] lg:h-[700px] flex bg-[#0b0d10] overflow-hidden rounded-b-lg font-body text-sm relative">
              {/* Sidebar */}
              <div className="w-48 sm:w-56 lg:w-72 bg-[#131518] flex flex-col p-4 sm:p-5 lg:p-6 border-r border-[#2A2E35]/30 z-20 shrink-0">
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <img
                      src={logoUrl}
                      alt="NEWEN logo"
                      className="w-10 h-10"
                      loading="eager"
                    />
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-white font-heading font-bold text-xl">Newen</span>
                    <span className="text-[#FF8C00] font-heading font-bold text-sm">Launcher</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-4 px-5 py-3 rounded-lg border border-[#FF8C00]/50 bg-gradient-to-r from-[#FF8C00]/10 to-transparent text-white font-medium cursor-pointer relative group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF8C00] rounded-l-lg"></div>
                    <Play size={18} fill="white" className="text-[#FF8C00]" />
                    <span className="text-base font-bold">Jugar</span>
                  </div>

                  <div className="flex items-center gap-4 px-5 py-2 text-gray-400 hover:text-white hover:bg-[#1B1E23] rounded-lg cursor-pointer transition-colors">
                    <Folder size={20} />
                    <span className="text-base font-medium">Instancias</span>
                  </div>

                  <div className="flex items-center gap-4 px-5 py-2 text-gray-400 hover:text-white hover:bg-[#1B1E23] rounded-lg cursor-pointer transition-colors">
                    <Search size={20} />
                    <span className="text-base font-medium">Catálogo mods</span>
                  </div>

                  <div className="flex items-center gap-4 px-5 py-2 text-gray-400 hover:text-white hover:bg-[#1B1E23] rounded-lg cursor-pointer transition-colors">
                    <Download size={20} />
                    <span className="text-base font-medium">Modpacks</span>
                  </div>

                  <div className="flex items-center gap-4 px-5 py-2 text-gray-400 hover:text-white hover:bg-[#1B1E23] rounded-lg cursor-pointer transition-colors">
                    <User size={20} />
                    <span className="text-base font-medium">Skins</span>
                  </div>

                  <div className="flex items-center gap-4 px-5 py-2 text-gray-400 hover:text-white hover:bg-[#1B1E23] rounded-lg cursor-pointer transition-colors">
                    <Settings size={20} />
                    <span className="text-base font-medium">Ajustes</span>
                  </div>
                </div>

                <div className="mt-auto bg-[#0b0d10] p-4 rounded-xl border border-[#2A2E35] flex items-center justify-between group cursor-pointer hover:border-[#FF8C00]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FF8C00] flex items-center justify-center text-black font-bold font-heading text-lg">
                      PA
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm">panxito_26</span>
                      <span className="text-gray-500 text-xs">Offline</span>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-white group-hover:text-[#FF8C00]">
                    <LogOut size={16} />
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col relative bg-[#0b0d10] p-6 sm:p-8 lg:p-16">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

                <div className="relative z-20 flex flex-wrap items-center justify-end gap-3 sm:gap-4">
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 bg-[#131518] border border-[#2A2E35] rounded-full px-4 sm:px-5 py-2">
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-300">
                      <Cpu size={14} className="text-[#FF8C00]" />
                      <span className="font-mono font-bold">CPU: 47.0%</span>
                    </div>
                    <div className="w-[1px] h-4 bg-gray-700"></div>
                    <div className="flex items-center gap-3 text-[10px] sm:text-xs text-gray-300">
                      <HardDrive size={14} className="text-[#26619C]" />
                      <span className="font-mono font-bold">RAM: 21 MB</span>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-2 bg-[#131518] border border-[#2A2E35] rounded-full px-3 sm:px-4 py-2 text-[10px] sm:text-xs text-gray-500 font-mono">
                    <span>Early Access - Beta</span>
                  </div>
                </div>

                <div className="relative z-20 my-auto">
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded bg-[#1e3a8a]/40 text-[#60a5fa] text-xs font-bold tracking-wider border border-[#1e3a8a] uppercase">
                      Forge 1.20.1
                    </span>
                    <span className="px-4 py-1.5 rounded bg-[#4c1d95]/40 text-[#a78bfa] text-xs font-bold tracking-wider border border-[#4c1d95] uppercase">
                      Catálogo Modrinth
                    </span>
                  </div>

                  <div className="space-y-4 mb-12">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tighter uppercase">
                      NEWEN
                    </h1>
                    <p className="text-gray-400 max-w-lg text-lg leading-relaxed font-medium">
                      Instancias, catálogo y optimizaciones en un solo lugar. Menos pasos, más
                      juego.
                    </p>
                  </div>

                  <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-6 xl:gap-8">
                    <button className="h-20 sm:h-24 px-6 sm:px-10 bg-gradient-to-r from-[#FF8C00] to-[#ea580c] rounded-2xl flex items-center gap-6 shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 hover:scale-[1.01] transition-all group w-full xl:min-w-[320px]">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play size={28} fill="white" className="ml-1 text-white" />
                      </div>
                      <div className="flex flex-col items-start justify-center h-full">
                        <span className="text-[11px] font-bold text-orange-100/90 uppercase tracking-widest mb-1">
                          Estado: Beta
                        </span>
                        <span className="text-4xl font-heading font-bold text-white leading-none tracking-wide">
                          JUGAR
                        </span>
                      </div>
                    </button>

                    <div className="h-24 flex flex-col justify-center w-full xl:w-auto">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 ml-1">
                        Instancia Activa
                      </span>
                      <div className="bg-[#131518] border border-[#2A2E35] rounded-2xl px-6 h-[72px] flex items-center gap-4 w-full xl:min-w-[280px] hover:border-gray-600 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-[#2A2E35] rounded-lg flex items-center justify-center text-gray-400 font-bold text-sm">
                          M
                        </div>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 text-white font-bold text-base">
                            <span>MC</span>
                            <ChevronRight size={16} className="rotate-90 text-gray-500" />
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#26619C]"></div>
                            <span className="text-xs text-gray-500 truncate max-w-[140px]">
                              Vanilla / Forge / Fabric
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-20 flex items-center gap-3 text-gray-500 text-sm">
                  <Coffee size={18} className="text-gray-400" />
                  <span className="font-medium">Diagnóstico con reportes de logs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-[#15171B] border-t border-[#2A2E35]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-heading text-4xl font-bold text-white">Qué es Newen</h2>
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Newen es un launcher chileno, moderno y directo. Está pensado para quienes aman
              Minecraft pero odian el caos: instalaciones manuales, mods incompatibles y bajo
              rendimiento.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-[#1B1E23] border border-[#2A2E35] rounded-xl p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-3">
                Enfoque
              </div>
              <p className="text-gray-400 leading-relaxed font-body">
                Rendimiento real, control de instancias y una experiencia limpia para jugar sin
                complicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-[#121212]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              LO QUE <span className="text-[#FF8C00]">PUEDES HACER</span>
            </h2>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              Catálogo, instancias y rendimiento en un solo lugar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Search size={32} className="text-[#26619C]" />}
              title="Catálogo integrado"
              desc="Busca e instala mods, modpacks, shaders y resource packs desde un solo lugar (Modrinth)."
            />
            <FeatureCard
              icon={<Folder size={32} className="text-[#FF8C00]" />}
              title="Instancias claras"
              desc="Vanilla, Forge, NeoForge y Fabric organizados sin enredos."
            />
            <FeatureCard
              icon={<Zap size={32} className="text-[#FF8C00]" />}
              title="Optimización en 1 clic"
              desc="Perfiles listos para rendimiento (Competitivo / Balanceado / Calidad)."
            />
            <FeatureCard
              icon={<ShieldCheck size={32} className="text-green-400" />}
              title="Rollback seguro"
              desc="Si algo falla, puedes volver atrás sin romper tu instancia."
            />
          </div>
        </div>
      </section>

      {/* Performance */}
      <section id="performance" className="py-20 bg-[#121212] border-t border-[#2A2E35]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-heading text-4xl font-bold text-white">Rendimiento en serio</h2>
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Minecraft puede ir lento incluso en PCs buenas.
            </p>
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Newen te da optimizaciones listas, ajustes de RAM y herramientas reales para mejorar
              el rendimiento sin horas de prueba y error.
            </p>
          </div>
          <div className="lg:col-span-5 grid gap-4">
            <InfoCard text="Optimizaciones listas para rendimiento." />
            <InfoCard text="Ajustes de RAM claros y rápidos." />
            <InfoCard text="Herramientas reales para mejorar rendimiento." />
          </div>
        </div>
      </section>

      

      {/* Early Access */}
      <section id="early-access" className="py-20 bg-[#15171B] border-t border-[#2A2E35] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <TechBadge
                label="Early Access"
                color="bg-orange-900/20 text-orange-400 border-orange-500/30"
              />
              <TechBadge
                label="Sin firma"
                color="bg-blue-900/20 text-blue-400 border-blue-500/30"
              />
              <TechBadge
                label="Sin trackers"
                color="bg-gray-800 text-gray-300 border-gray-700"
              />
              <TechBadge
                label="Feedback real"
                color="bg-gray-800 text-gray-300 border-gray-700"
              />
            </div>

            <div className="mt-8 p-6 rounded-lg bg-[#1B1E23] border border-[#2A2E35] font-body text-sm text-gray-400">
              <div className="flex items-center gap-2 border-b border-[#2A2E35] pb-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs opacity-50">estado - transparencia</span>
              </div>
              <p className="mb-2">
                <span className="text-green-400">✔</span>{" "}
                <span className="text-[#FF8C00]">0 detecciones en VirusTotal</span>
              </p>
              <p className="text-gray-500">
                El instalador no tiene firma digital aún (Windows puede advertir).
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-heading text-4xl font-bold text-white">Early Access</h2>
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Este launcher está en desarrollo activo.
            </p>
            <ul className="space-y-4 font-body text-gray-300">
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#FF8C00]/20 text-[#FF8C00] mt-1">
                  <CheckCircle size={16} />
                </div>
                <span>
                  El instalador no tiene firma digital aún (Windows puede advertir).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#FF8C00]/20 text-[#FF8C00] mt-1">
                  <CheckCircle size={16} />
                </div>
                <span>No hay trackers ni publicidad.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="p-1 rounded bg-[#FF8C00]/20 text-[#FF8C00] mt-1">
                  <CheckCircle size={16} />
                </div>
                <span>Mejoramos rápido con feedback real.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Discord Support */}
      <section id="discord" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1B1E23] to-[#121212]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="font-heading text-5xl font-bold text-white">Discord = centro oficial</h2>
          <p className="font-body text-xl text-gray-400">
            Comunidad, soporte y anuncios viven ahí:
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-left">
            <div className="flex items-center gap-3 bg-[#1B1E23] border border-[#2A2E35] rounded-lg px-4 py-3 text-gray-300">
              <CheckCircle size={18} className="text-[#FF8C00]" />
              <span>Chat entre usuarios</span>
            </div>
            <div className="flex items-center gap-3 bg-[#1B1E23] border border-[#2A2E35] rounded-lg px-4 py-3 text-gray-300">
              <CheckCircle size={18} className="text-[#FF8C00]" />
              <span>Tickets de ayuda</span>
            </div>
            <div className="flex items-center gap-3 bg-[#1B1E23] border border-[#2A2E35] rounded-lg px-4 py-3 text-gray-300">
              <CheckCircle size={18} className="text-[#FF8C00]" />
              <span>Changelog y roadmap</span>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <a
              href="https://discord.gg/rTbktFZYZz"
              target="_blank"
              rel="noreferrer"
              className="px-12 py-5 bg-[#FF8C00] text-black font-heading font-bold text-2xl rounded shadow-[0_0_30px_rgba(255,140,0,0.25)] transition-all flex items-center gap-3 hover:brightness-110"
            >
              <MessageCircle size={28} /> Entrar al Discord
            </a>
            <p className="text-gray-500 text-sm font-body mt-2">
              Early Access · Feedback rápido · Soporte oficial
            </p>
            <p className="text-gray-500 text-xs font-body">
              Los que entran por ahora reciben rol beta tester.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-[#15171B] border-t border-[#2A2E35]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold text-white">Preguntas rápidas</h2>
            <p className="font-body text-gray-400">Respuestas directas a lo básico.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FaqCard question="¿Es gratis?" answer="Sí." />
            <FaqCard question="¿Necesito cuenta?" answer="No para jugar offline. Para online, sí." />
            <FaqCard question="¿Dónde pido soporte?" answer="En el Discord oficial." />
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-20 bg-[#121212] border-t border-[#2A2E35]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-4xl font-bold text-white">Descarga</h2>
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Windows 10/11 x64. Completa el formulario para participar en el acceso anticipado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://forms.gle/247MqxET4xtHj3HM7"
                target="_blank"
                rel="noreferrer"
                className="px-6 sm:px-8 py-4 bg-gradient-to-r from-[#FF8C00] to-[#B87333] text-white font-heading font-bold text-base sm:text-lg rounded shadow-[0_0_20px_rgba(255,140,0,0.2)] transition-all hover:brightness-110 inline-flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Participar en Early Access
              </a>
            </div>
          </div>

          <div className="bg-[#1B1E23] border border-[#2A2E35] rounded-xl p-6 space-y-4">
            <div className="flex items-center gap-3 text-gray-300">
              <HardDrive size={18} className="text-[#FF8C00]" />
              <span className="font-body">Windows 10/11 x64</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Download size={18} className="text-[#FF8C00]" />
              <a
                href="https://github.com/OrmazabalDev/Newen_lUpdate"
                target="_blank"
                rel="noreferrer"
                className="font-body text-gray-200 hover:text-white transition-colors"
              >
                Instalador oficial en Releases
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Download size={18} className="text-[#FF8C00]" />
              <a
                href="https://github.com/OrmazabalDev/Newen_lUpdate/releases"
                target="_blank"
                rel="noreferrer"
                className="font-body text-gray-200 hover:text-white transition-colors"
              >
                Link alternativo MSI
              </a>
            </div>
            <div className="flex items-start gap-3 text-gray-300">
              <ShieldCheck size={18} className="text-[#FF8C00] mt-0.5" />
              <span className="font-body">
                Consejo: si Windows muestra advertencia, es por la falta de firma (temporal).
              </span>
            </div>
          </div>
        </div>
      </section>

      

      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-[#1B1E23] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img
              src={logoUrl}
              alt="NEWEN logo"
              className="w-8 h-8 rounded"
              loading="lazy"
            />
            <span className="font-heading font-bold text-lg text-gray-400">
              Newen Launcher — Early Access
            </span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-gray-500 text-sm font-body text-center md:text-right">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <a
                href="https://discord.gg/rTbktFZYZz"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Soporte oficial: Discord
              </a>
              <span className="hidden sm:inline text-gray-700">•</span>
              <a
                href="#/politica-de-privacidad"
                className="hover:text-white transition-colors"
              >
                Política de Privacidad
              </a>
            </div>
            <div className="text-xs text-gray-600 max-w-md">
              Minecraft es una marca registrada de Mojang y Microsoft. Newen no está afiliado.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* Sub-components */
type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

const FeatureCard = ({ icon, title, desc }: FeatureCardProps) => (
  <div className="group bg-[#1B1E23] p-8 rounded-lg border border-[#2A2E35] hover:border-[#FF8C00] transition-colors duration-300 hover:shadow-lg hover:shadow-[#FF8C00]/10 cursor-default">
    <div className="mb-6 p-3 bg-[#121212] rounded w-fit group-hover:scale-110 transition-transform duration-300 border border-[#2A2E35] group-hover:border-[#FF8C00]/30">
      {icon}
    </div>
    <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors">
      {title}
    </h3>
    <p className="font-body text-gray-400 leading-relaxed text-sm">{desc}</p>
  </div>
);

type TechBadgeProps = {
  label: string;
  color: string;
};

const TechBadge = ({ label, color }: TechBadgeProps) => (
  <div
    className={`flex items-center justify-center py-4 rounded border ${color} font-heading font-bold tracking-wider text-sm uppercase`}
  >
    {label}
  </div>
);

type InfoCardProps = {
  text: string;
};

const InfoCard = ({ text }: InfoCardProps) => (
  <div className="bg-[#1B1E23] border border-[#2A2E35] rounded-lg p-6 flex items-start gap-3 text-gray-300">
    <div className="p-1 rounded bg-[#FF8C00]/20 text-[#FF8C00] mt-0.5">
      <CheckCircle size={16} />
    </div>
    <span className="font-body leading-relaxed">{text}</span>
  </div>
);

type FaqCardProps = {
  question: string;
  answer: string;
};

const FaqCard = ({ question, answer }: FaqCardProps) => (
  <div className="bg-[#1B1E23] border border-[#2A2E35] rounded-lg p-6 space-y-3">
    <h3 className="font-heading text-lg text-white">{question}</h3>
    <p className="font-body text-gray-400">{answer}</p>
  </div>
);

export default NewenWebsite;
