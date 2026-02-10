import { useEffect, useState, type ReactNode } from "react";
import {
  Download,
  Zap,
  Layers,
  Box,
  Cpu,
  ShieldCheck,
  Settings,
  ChevronRight,
  Terminal,
  CheckCircle,
  Play,
  Search,
  User,
  Folder,
  LogOut,
  Coffee,
  HardDrive,
} from "lucide-react";

/* NEWEN LAUNCHER - LANDING PAGE
  Built with React + Tailwind CSS
  Identity: Dark Theme (#121212), Orange Accent (#FF8C00), Rajdhani/Inter Fonts
*/

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
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF8C00] to-[#B87333] rounded flex items-center justify-center font-heading font-bold text-black text-xl">
              N
            </div>
            <span className="font-heading font-bold text-2xl tracking-wide text-white">
              NEWEN <span className="text-[#FF8C00]">LAUNCHER</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-white transition-colors">
              Características
            </a>
            <a href="#performance" className="hover:text-white transition-colors">
              Rendimiento
            </a>
            <a href="#community" className="hover:text-white transition-colors">
              Comunidad
            </a>
          </div>

          <button
            type="button"
            disabled
            title="Descarga próximamente"
            className="bg-white/60 text-black/70 font-heading font-bold px-6 py-2 rounded transition-colors flex items-center gap-2 cursor-not-allowed"
          >
            <Download size={18} />
            <span>PRÓXIMAMENTE</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF8C00] rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#26619C] rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        </div>

        {/* Changed Grid to cols-12 to give more space to the mockup (col-span-7) */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
          {/* Text Content (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/20 text-[#FF8C00] text-xs font-bold tracking-wider uppercase font-body">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8C00] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF8C00]"></span>
              </span>
              Versión Atacama v1.0 Disponible
            </div>

            <h1 className="font-heading text-5xl lg:text-7xl font-bold leading-tight text-white">
              TU MINECRAFT, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-[#B87333] glow-text">
                SIN LÍMITES.
              </span>
            </h1>

            <p className="font-body text-gray-400 text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Potenciado por Rust y Tauri. Gestiona instancias, mods y rendimiento en una interfaz
              moderna, ligera y diseñada para gamers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                type="button"
                disabled
                title="Descarga próximamente"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#FF8C00] to-[#B87333] text-white/80 font-heading font-bold text-lg rounded overflow-hidden shadow-[0_0_20px_rgba(255,140,0,0.2)] transition-all cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-white/20"></div>
                <span className="relative flex items-center gap-2">
                  PRÓXIMAMENTE <Download size={20} />
                </span>
              </button>

              <button className="px-8 py-4 bg-[#1B1E23] border border-[#2A2E35] text-gray-300 font-heading font-bold text-lg rounded hover:border-[#FF8C00] hover:text-white transition-all flex items-center gap-2">
                <Terminal size={20} className="text-[#26619C]" />
                VER CHANGELOG
              </button>
            </div>
          </div>

          {/* UI Mockup (Takes 7 columns now for extra width) */}
          <div className="lg:col-span-7 relative glow-box rounded-xl bg-[#0b0d10] border border-[#2A2E35] p-2 shadow-2xl transition-all duration-700 ease-out [transform:rotateY(12deg)] lg:[transform:rotate(2deg)] hover:[transform:rotate(0deg)] [transform-style:preserve-3d] [perspective:1000px] w-full">
            {/* Window Controls */}
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

            {/* App Interface */}
            <div className="h-[700px] flex bg-[#0b0d10] overflow-hidden rounded-b-lg font-body text-sm relative">
              {/* Sidebar */}
              <div className="w-72 bg-[#131518] flex flex-col p-6 border-r border-[#2A2E35]/30 z-20 shrink-0">
                {/* App Logo Area */}
                <div className="flex items-center gap-3 mb-10">
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 stroke-[#FF8C00] stroke-2">
                      <path d="M3 20L12 4L21 20H3Z" strokeLinejoin="round" />
                      <path d="M8 20L12 12L16 20" />
                    </svg>
                  </div>
                  <div className="flex flex-col leading-none">
                    <span className="text-white font-heading font-bold text-xl">Newen</span>
                    <span className="text-[#FF8C00] font-heading font-bold text-sm">Launcher</span>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex flex-col gap-4 flex-1">
                  {/* Jugar Button */}
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

                {/* User Profile Card */}
                <div className="mt-auto bg-[#0b0d10] p-4 rounded-xl border border-[#2A2E35] flex items-center justify-between group cursor-pointer hover:border-[#FF8C00]/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#FF8C00] flex items-center justify-center text-black font-bold font-heading text-lg">
                      PA
                    </div>
                    <div className="flex flex-col">
                      <span className="text-white font-bold text-sm">pancito</span>
                      <span className="text-gray-500 text-xs">Offline</span>
                    </div>
                  </div>
                  <button className="text-gray-500 hover:text-white group-hover:text-[#FF8C00]">
                    <LogOut size={16} />
                  </button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 flex flex-col relative bg-[#0b0d10] p-12 lg:p-16">
                {/* Background Details */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>

                {/* Top Stats Bar */}
                <div className="relative z-20 flex justify-end gap-4">
                  <div className="flex items-center gap-6 bg-[#131518] border border-[#2A2E35] rounded-full px-5 py-2">
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <Cpu size={14} className="text-[#FF8C00]" />
                      <span className="font-mono font-bold">CPU: 47.0%</span>
                    </div>
                    <div className="w-[1px] h-4 bg-gray-700"></div>
                    <div className="flex items-center gap-3 text-xs text-gray-300">
                      <HardDrive size={14} className="text-[#26619C]" />
                      <span className="font-mono font-bold">RAM: 21 MB</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 bg-[#131518] border border-[#2A2E35] rounded-full px-4 py-2 text-xs text-gray-500 font-mono">
                    <span>Launcher reservada: 22 MB</span>
                  </div>
                </div>

                {/* Center Content Group */}
                <div className="relative z-20 my-auto">
                  {/* Badges */}
                  <div className="flex gap-3 mb-6">
                    <span className="px-4 py-1.5 rounded bg-[#1e3a8a]/40 text-[#60a5fa] text-xs font-bold tracking-wider border border-[#1e3a8a] uppercase">
                      Forge 1.20.1-FORGE-47.4.16
                    </span>
                    <span className="px-4 py-1.5 rounded bg-[#4c1d95]/40 text-[#a78bfa] text-xs font-bold tracking-wider border border-[#4c1d95] uppercase">
                      13 Mods
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-4 mb-12">
                    <h1 className="text-7xl font-heading font-bold text-white tracking-tighter uppercase">
                      MC
                    </h1>
                    <p className="text-gray-400 max-w-lg text-lg leading-relaxed font-medium">
                      Tu aventura está lista. Newen gestiona los recursos en segundo plano para una
                      experiencia fluida.
                    </p>
                  </div>

                  {/* Action Area */}
                  <div className="flex items-center gap-8">
                    {/* Play Button */}
                    <button className="h-24 px-10 bg-gradient-to-r from-[#FF8C00] to-[#ea580c] rounded-2xl flex items-center gap-6 shadow-xl shadow-orange-500/10 hover:shadow-orange-500/20 hover:scale-[1.01] transition-all group min-w-[320px]">
                      <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <Play size={28} fill="white" className="ml-1 text-white" />
                      </div>
                      <div className="flex flex-col items-start justify-center h-full">
                        <span className="text-[11px] font-bold text-orange-100/90 uppercase tracking-widest mb-1">
                          Estado: Listo
                        </span>
                        <span className="text-4xl font-heading font-bold text-white leading-none tracking-wide">
                          JUGAR
                        </span>
                      </div>
                    </button>

                    {/* Instance Selector */}
                    <div className="h-24 flex flex-col justify-center">
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-2 ml-1">
                        Instancia Activa
                      </span>
                      <div className="bg-[#131518] border border-[#2A2E35] rounded-2xl px-6 h-[72px] flex items-center gap-4 min-w-[280px] hover:border-gray-600 transition-colors cursor-pointer">
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
                              Forge 1.20.1-forge...
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer */}
                <div className="relative z-20 flex items-center gap-3 text-gray-500 text-sm">
                  <Coffee size={18} className="text-gray-400" />
                  <span className="font-medium">Java sistema: 21.0.9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-[#15171B] border-t border-[#2A2E35]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              INGENIERÍA <span className="text-[#FF8C00]">PREMIUM</span>
            </h2>
            <p className="font-body text-gray-400 max-w-2xl mx-auto">
              Diseñado para eliminar las fricciones. Todo lo que necesitas para gestionar tu
              universo de Minecraft en una sola aplicación robusta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Box size={32} className="text-[#FF8C00]" />}
              title="Gestión de Instancias"
              desc="Crea entornos aislados para cada versión. Mantén tus mundos de Vanilla, Forge y Fabric separados y seguros."
            />
            <FeatureCard
              icon={<Search size={32} className="text-[#26619C]" />}
              title="Catálogo Integrado"
              desc="Busca e instala mods, shaders y modpacks directamente desde Modrinth y CurseForge sin salir del launcher."
            />
            <FeatureCard
              icon={<Zap size={32} className="text-[#FF8C00]" />}
              title="Optimización One-Click"
              desc="Instala mods de rendimiento (Sodium, Lithium, etc.) automáticamente según tu versión. Gana FPS en segundos."
            />
            <FeatureCard
              icon={<ShieldCheck size={32} className="text-green-500" />}
              title="Seguridad Microsoft"
              desc="Inicio de sesión seguro mediante Device Code. Tus credenciales nunca tocan nuestros servidores."
            />
            <FeatureCard
              icon={<Layers size={32} className="text-[#B87333]" />}
              title="Modpacks & Backups"
              desc="Instalación automatizada de modpacks populares con sistema de copias de seguridad automáticas."
            />
            <FeatureCard
              icon={<User size={32} className="text-purple-500" />}
              title="Skin Viewer 3D"
              desc="Visualiza y cambia tu skin o capa, incluso en modo offline. Carga desde archivo o URL al instante."
            />
          </div>
        </div>
      </section>

      {/* Technical Showcase */}
      <section id="performance" className="py-20 bg-[#121212] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <TechBadge label="Rust" color="bg-orange-900/20 text-orange-500 border-orange-500/30" />
              <TechBadge label="Tauri" color="bg-blue-900/20 text-blue-500 border-blue-500/30" />
              <TechBadge label="React" color="bg-cyan-900/20 text-cyan-500 border-cyan-500/30" />
              <TechBadge label="Fabric & Forge" color="bg-gray-800 text-gray-300 border-gray-700" />
            </div>

            <div className="mt-8 p-6 rounded-lg bg-[#1B1E23] border border-[#2A2E35] font-mono text-sm text-gray-400">
              <div className="flex items-center gap-2 border-b border-[#2A2E35] pb-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="ml-2 text-xs opacity-50">console — newen-core</span>
              </div>
              <p className="mb-2">
                <span className="text-green-500">➜</span>{" "}
                <span className="text-[#FF8C00]">newen</span> init --performance-mode
              </p>
              <p className="mb-1 text-gray-500">[INFO] Detecting system Java version...</p>
              <p className="mb-1 text-gray-500">[INFO] Java 21 found. Optimizing flags...</p>
              <p className="mb-1 text-gray-500">[INFO] Allocating 6GB RAM (Smart Allocation)</p>
              <p className="animate-pulse text-[#26619C]">[SUCCESS] Instance ready in 1.2s</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-heading text-4xl font-bold text-white">
              CONSTRUIDO PARA <br />
              <span className="text-[#FF8C00]">VELOCIDAD</span>
            </h2>
            <p className="font-body text-gray-400 text-lg leading-relaxed">
              Olvídate de los launchers pesados basados en Electron. Newen utiliza **Tauri** y
              **Rust** para ofrecer una experiencia ultraligera que consume una fracción de la RAM,
              dejando más recursos para lo que importa: tu juego.
            </p>
            <ul className="space-y-4 font-body text-gray-300">
              <li className="flex items-center gap-3">
                <div className="p-1 rounded bg-[#FF8C00]/20 text-[#FF8C00]">
                  <CheckCircle size={16} />
                </div>
                <span>Descarga automática de Java Portable si falta.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 rounded bg-[#FF8C00]/20 text-[#FF8C00]">
                  <CheckCircle size={16} />
                </div>
                <span>Gestión inteligente de memoria RAM.</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 rounded bg-[#FF8C00]/20 text-[#FF8C00]">
                  <CheckCircle size={16} />
                </div>
                <span>Integración nativa con Discord Rich Presence.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1B1E23] to-[#121212]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
          <h2 className="font-heading text-5xl font-bold text-white">EMPIEZA TU AVENTURA</h2>
          <p className="font-body text-xl text-gray-400">
            Únete a miles de jugadores que han simplificado su forma de jugar Minecraft.
          </p>

          <div className="flex flex-col items-center gap-4">
            <button
              type="button"
              disabled
              title="Descarga próximamente"
              className="px-12 py-5 bg-[#FF8C00]/70 text-black/70 font-heading font-bold text-2xl rounded shadow-[0_0_30px_rgba(255,140,0,0.25)] transition-all flex items-center gap-3 cursor-not-allowed"
            >
              <Download size={28} /> PRÓXIMAMENTE
            </button>
            <p className="text-gray-500 text-sm font-body mt-4">
              v1.0.4 Atacama • Open Source • Sin publicidad
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0e0e] border-t border-[#1B1E23] py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2A2E35] rounded flex items-center justify-center font-heading font-bold text-gray-400 text-lg">
              N
            </div>
            <span className="font-heading font-bold text-xl text-gray-500">NEWEN</span>
          </div>

          <div className="flex gap-8 font-body text-sm text-gray-500">
            <a href="#" className="hover:text-[#FF8C00] transition-colors">
              Discord
            </a>
            <a href="#" className="hover:text-[#FF8C00] transition-colors">
              GitHub
            </a>
            <a href="#" className="hover:text-[#FF8C00] transition-colors">
              Reportar Bug
            </a>
            <a href="#" className="hover:text-[#FF8C00] transition-colors">
              Términos
            </a>
          </div>

          <div className="text-gray-600 text-xs font-body text-center md:text-right">
            © 2024 Newen Launcher Team.
            <br />
            Not affiliated with Mojang or Microsoft.
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
  <div className={`flex items-center justify-center py-4 rounded border ${color} font-heading font-bold tracking-wider`}>
    {label}
  </div>
);

export default NewenWebsite;
