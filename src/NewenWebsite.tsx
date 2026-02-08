import { useEffect, useState } from "react";
import {
  Download,
  Shield,
  Zap,
  Cpu,
  Globe,
  Menu,
  X,
  Github,
  Layers,
  Terminal,
  Lock,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Mail,
  MessageSquare,
  GitBranch,
} from "lucide-react";

/* =========================================================
   LOGO NEWEN (logo.png)
   - Hero: con glow (marketing/branding)
   - Flat: sin glow (UI / navbar / footer)
========================================================= */

const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

const NewenLogoBase = ({ className = "w-10 h-10", glow = false }) => (
  <img
    src={logoUrl}
    alt="NEWEN logo"
    loading="eager"
    className={`${className}${glow ? " drop-shadow-[0_0_20px_rgba(255,140,0,0.45)]" : ""}`}
  />
);

const NewenLogoHero = (props) => <NewenLogoBase {...props} glow />;
const NewenLogoFlat = (props) => <NewenLogoBase {...props} />;

/* ========================================================= */

const NewenWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-gray-300 selection:bg-[#FF8C00] selection:text-white overflow-x-hidden">
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#121212]/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <NewenLogoFlat className="w-11 h-11 transition-transform group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className="font-rajdhani font-bold text-2xl text-white uppercase tracking-tight">
                NEWEN
              </span>
              <span className="text-[10px] text-[#FF8C00] font-bold tracking-[0.2em] uppercase opacity-80">
                Launcher
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a href="#about" className="nav-link">Qué es</a>
            <a href="#features" className="nav-link">Funciones</a>
            <a href="#stack" className="nav-link">Tecnología</a>
            <a href="#trust" className="nav-link">Confianza</a>
            <a href="#status" className="nav-link">Estado</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a
              href="https://github.com/OrmazabalDev"
              className="text-gray-400 hover:text-[#FF8C00]"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} />
            </a>
          </div>

          <div className="hidden md:block text-right">
            <button
              type="button"
              disabled
              title="Descarga próximamente"
              className="inline-flex items-center justify-center bg-[#FF8C00]/60 text-[#121212]/80 font-bold py-2.5 px-8 rounded-sm font-rajdhani tracking-wider cursor-not-allowed"
            >
              PRÓXIMAMENTE
            </button>
            <div className="text-[9px] text-gray-500 tracking-widest uppercase mt-1">
              Windows · Linux/macOS en camino
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1B1E23] border-b border-white/5 px-4 py-6 space-y-4 animate-[slideInFromTop_0.3s_ease-out]">
            <a
              href="#about"
              className="block text-white font-bold uppercase tracking-widest text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Qué es
            </a>
            <a
              href="#features"
              className="block text-white font-bold uppercase tracking-widest text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Funciones
            </a>
            <a
              href="#stack"
              className="block text-white font-bold uppercase tracking-widest text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Tecnología
            </a>
            <a
              href="#trust"
              className="block text-white font-bold uppercase tracking-widest text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Confianza
            </a>
            <a
              href="#status"
              className="block text-white font-bold uppercase tracking-widest text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Estado
            </a>
            <a
              href="#faq"
              className="block text-white font-bold uppercase tracking-widest text-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <button
              type="button"
              disabled
              title="Descarga próximamente"
              className="w-full bg-[#FF8C00]/60 text-[#121212]/80 font-bold py-3 px-4 rounded-sm font-rajdhani text-center inline-flex justify-center cursor-not-allowed"
            >
              PRÓXIMAMENTE
            </button>
          </div>
        )}
      </nav>

      {/* ================= HERO ================= */}
      <section className="relative pt-48 pb-32 text-center">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#26619C]/20 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#FF8C00]/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-6">
            Hecho en Chile, para jugadores reales
          </p>
          <NewenLogoHero className="w-24 h-24 mx-auto mb-10" />

          <h1 className="text-5xl md:text-7xl font-rajdhani font-bold text-white tracking-tighter leading-[0.9] mb-6">
            Launcher nativo para Minecraft
          </h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-400 leading-relaxed mb-6">
            NEWEN Launcher 1.0.0 “Atacama”: rápido, claro y gratuito. Diseñado para darte control
            total sin complicaciones.
          </p>
          <p className="max-w-3xl mx-auto text-sm text-gray-500 leading-relaxed mb-12">
            Sin bloatware, sin telemetría, sin humo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button
              type="button"
              disabled
              title="Descarga próximamente"
              className="w-full sm:w-auto bg-[#FF8C00]/60 text-[#121212]/80 font-rajdhani font-bold py-5 px-14 tracking-widest rounded-sm shadow-2xl shadow-[#FF8C00]/10 inline-flex items-center justify-center gap-3 cursor-not-allowed"
            >
              <Download size={22} /> PRÓXIMAMENTE
            </button>
            <a
              href="#features"
              className="w-full sm:w-auto border border-white/10 text-white font-rajdhani font-bold py-5 px-14 tracking-widest rounded-sm hover:border-[#FF8C00] hover:text-[#FF8C00] transition-all inline-flex items-center justify-center gap-3"
            >
              QUÉ INCLUYE
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
            <div className="bg-[#1B1E23] border border-white/5 py-4 px-6 rounded-sm">
              Rendimiento real
            </div>
            <div className="bg-[#1B1E23] border border-white/5 py-4 px-6 rounded-sm">
              Control total
            </div>
            <div className="bg-[#1B1E23] border border-white/5 py-4 px-6 rounded-sm">
              Claridad absoluta
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-24 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col gap-6 mb-12">
            <h2 className="text-4xl font-rajdhani font-bold text-white tracking-tight uppercase">
              Qué es NEWEN
            </h2>
            <p className="text-gray-400 max-w-3xl">
              NEWEN es un launcher nativo, rápido y claro. El objetivo es simple: ayudarte a jugar
              mejor, con menos fricción y más control sobre tus archivos y tus perfiles.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-3">
                Para usuarios no técnicos
              </div>
              <p className="text-gray-400 leading-relaxed">
                NEWEN te permite instalar y jugar sin dolores de cabeza: crea perfiles separados,
                instala mods con un clic, y el launcher te guía cuando algo no es compatible. Nada
                de confusión, nada de pasos raros. Solo jugar.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-3">
                Para usuarios técnicos
              </div>
              <p className="text-gray-400 leading-relaxed">
                NEWEN está construido con Tauri + Rust: binario nativo, bajo consumo y un flujo
                directo sin Chromium. El motor de instancias separa contenido por perfil y el
                catálogo Modrinth usa metadata para detectar estado real de instalación y evitar
                duplicados. Los reportes exportables permiten diagnóstico rápido y reproducible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-24 bg-[#1B1E23]/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-rajdhani font-bold text-white tracking-tight uppercase">
                Lo que ofrece
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Funciones reales, sin humo y sin promesas vagas.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Instancias inteligentes
              </h3>
              <p className="text-gray-400 text-sm">
                Perfiles separados por versión y loader, sin mezclar carpetas.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Modrinth completo
              </h3>
              <p className="text-gray-400 text-sm">
                Mods, modpacks, resource packs y shaders con estado visible.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Compatibilidad clara
              </h3>
              <p className="text-gray-400 text-sm">
                Badges con loader y versión antes de instalar.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Optimización 1 clic
              </h3>
              <p className="text-gray-400 text-sm">
                Presets competitivo, balanceado y calidad, con rollback.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Backups automáticos
              </h3>
              <p className="text-gray-400 text-sm">
                Copias de seguridad (hasta 5) por modpack para volver atrás.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Gestión de contenido
              </h3>
              <p className="text-gray-400 text-sm">
                Activar, desactivar, borrar y abrir carpetas desde el panel.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Skins y capas offline
              </h3>
              <p className="text-gray-400 text-sm">
                Vista previa y cambio rápido en modo offline.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Diagnóstico exportable
              </h3>
              <p className="text-gray-400 text-sm">
                Reporte con logs y datos clave para soporte.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm">
              <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                Focus Mode
              </h3>
              <p className="text-gray-400 text-sm">
                Minimiza al jugar y restaura el launcher al salir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STACK ================= */}
      <section id="stack" className="py-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            <div className="md:col-span-4 bg-[#1B1E23] border border-white/5 p-10 rounded-sm relative overflow-hidden group">
              <div className="absolute -right-20 -top-20 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                <Cpu size={400} />
              </div>
              <h3 className="text-2xl font-rajdhani font-bold text-white mb-6 tracking-widest flex items-center gap-3 italic">
                <Zap className="text-[#FF8C00]" fill="#FF8C00" size={20} /> ARQUITECTURA NATIVA
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                Tauri + Rust + binario nativo. Sin Chromium. Consumo bajo y tiempos de respuesta
                rápidos con procesos ligeros.
              </p>
              <div className="grid grid-cols-2 gap-6 relative z-10 mt-8">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                    Binario nativo
                  </span>
                  <div className="text-4xl font-rajdhani font-bold text-white tracking-tighter">
                    Rápido
                  </div>
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">
                    Sin Chromium
                  </span>
                  <div className="text-4xl font-rajdhani font-bold text-white tracking-tighter">
                    Ligero
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-[#1B1E23] border border-white/5 p-10 rounded-sm flex flex-col justify-between group">
              <div className="w-12 h-12 bg-white/5 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#FF8C00]/10 transition-colors">
                <Terminal className="text-gray-400 group-hover:text-[#FF8C00]" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-rajdhani font-bold text-white mb-3 uppercase tracking-wider">
                  Transparencia técnica
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Control por hechos: instancias aisladas, estado real de instalación y reportes
                  exportables para diagnóstico rápido.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section id="trust" className="py-24">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-rajdhani font-bold text-white tracking-[0.3em] mb-12 uppercase">
            Confianza y privacidad
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm space-y-3">
              <Lock className="mx-auto text-[#FF8C00]" size={28} />
              <h4 className="font-bold text-white text-[10px] uppercase tracking-widest">
                Privacidad real
              </h4>
              <p className="text-[11px] text-gray-500">
                No recolectamos datos personales ni historial de juego.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm space-y-3">
              <Shield className="mx-auto text-[#FF8C00]" size={28} />
              <h4 className="font-bold text-white text-[10px] uppercase tracking-widest">
                Sin telemetría
              </h4>
              <p className="text-[11px] text-gray-500">
                No rastreamos comportamiento. Telemetría desactivada por defecto.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm space-y-3">
              <Layers className="mx-auto text-[#FF8C00]" size={28} />
              <h4 className="font-bold text-white text-[10px] uppercase tracking-widest">
                Control total
              </h4>
              <p className="text-[11px] text-gray-500">
                Instancias separadas y archivos locales bajo tu control.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm space-y-3">
              <Globe className="mx-auto text-[#FF8C00]" size={28} />
              <h4 className="font-bold text-white text-[10px] uppercase tracking-widest">
                Diagnóstico claro
              </h4>
              <p className="text-[11px] text-gray-500">
                Reportes exportables con logs para soporte rápido.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FREE ================= */}
      <section className="py-24 border-y border-white/5 bg-[#1B1E23]/30">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-rajdhani font-bold text-white uppercase tracking-wider">
              Por qué es gratis
            </h2>
          </div>
          <div className="lg:col-span-2 text-gray-400 leading-relaxed space-y-4">
            <p>
              NEWEN es un proyecto orientado a accesibilidad y comunidad. No hay paywall porque
              queremos que cualquiera pueda mejorar su experiencia sin pagar por lo básico.
            </p>
            <p>
              En el futuro podríamos ofrecer extras opcionales (soporte prioritario, donaciones o
              cosméticos), pero el launcher base seguirá siendo gratuito.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STATUS ================= */}
      <section id="status" className="py-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle2 className="text-[#FF8C00]" size={22} />
            <h2 className="text-2xl font-rajdhani font-bold text-white uppercase tracking-widest">
              Estado del proyecto
            </h2>
          </div>
          <div className="bg-[#1B1E23] border border-white/5 p-8 rounded-sm space-y-4">
            <div className="text-sm text-gray-400">
              Versión actual: <span className="text-white">1.0.0 “Atacama”</span>
            </div>
            <div className="text-sm text-gray-400">
              Estado: lanzamiento público inicial (acceso anticipado para detectar errores y
              mejorar el launcher).
            </div>
            <div className="flex gap-3 items-start text-sm text-gray-500">
              <AlertTriangle size={18} className="text-[#FF8C00] mt-0.5" />
              <div>
                Por ahora el instalador no está firmado, por eso Windows puede mostrar advertencias
                de SmartScreen. El instalador es limpio y estamos trabajando en la firma digital
                oficial.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOWNLOAD ================= */}
      <section id="download" className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-rajdhani font-bold text-white uppercase tracking-wider">
                Descarga segura
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Verifica que el archivo no fue modificado.
              </p>
            </div>
            <button
              type="button"
              disabled
              title="Descarga próximamente"
              className="bg-[#FF8C00]/60 text-[#121212]/80 font-rajdhani font-bold py-4 px-10 tracking-widest rounded-sm shadow-2xl shadow-[#FF8C00]/10 inline-flex items-center gap-3 cursor-not-allowed"
            >
              <Download size={20} /> PRÓXIMAMENTE
            </button>
          </div>

          <div className="mt-8 bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">
              SHA256
            </div>
            <div className="font-mono text-sm text-white break-all">
              PENDIENTE-DEFINIR-CHECKSUM-REAL
            </div>
          </div>

          <ol className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
            <li className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              1. Descarga el instalador desde la sección oficial.
            </li>
            <li className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              2. Calcula el SHA256 con tu herramienta de sistema.
            </li>
            <li className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              3. Compara el resultado con el hash publicado arriba.
            </li>
          </ol>
        </div>
      </section>

      {/* ================= ROADMAP ================= */}
      <section id="roadmap" className="py-24 bg-[#1B1E23]/30 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <GitBranch className="text-[#FF8C00]" size={22} />
            <h2 className="text-2xl font-rajdhani font-bold text-white uppercase tracking-widest">
              Roadmap público
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-400">
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              Auto-update con rollback seguro.
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              Perfiles avanzados y presets por instancia.
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUPPORT ================= */}
      <section id="support" className="py-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-rajdhani font-bold text-white uppercase tracking-widest mb-8">
            Soporte real
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm space-y-3">
              <MessageSquare className="text-[#FF8C00]" size={22} />
              <div className="text-white font-bold">Discord</div>
              <p className="text-sm text-gray-500">Canal de soporte y comunidad.</p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm space-y-3">
              <Mail className="text-[#FF8C00]" size={22} />
              <div className="text-white font-bold">Correo</div>
              <p className="text-sm text-gray-500">Soporte directo y casos complejos.</p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm space-y-3">
              <Github className="text-[#FF8C00]" size={22} />
              <div className="text-white font-bold">GitHub Issues</div>
              <p className="text-sm text-gray-500">Bugs y seguimiento transparente.</p>
            </div>
          </div>
          <div className="text-[11px] text-gray-500 tracking-widest uppercase mt-6">
            Tiempo de respuesta estimado: 24–72 horas hábiles.
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="text-[#FF8C00]" size={22} />
            <h2 className="text-2xl font-rajdhani font-bold text-white uppercase tracking-widest">
              Preguntas frecuentes
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              <div className="text-white font-bold mb-2">¿Por qué Windows me advierte?</div>
              <p className="text-sm text-gray-500">
                Porque aún no tenemos certificado de firma digital. El instalador es limpio.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              <div className="text-white font-bold mb-2">¿Necesito Java?</div>
              <p className="text-sm text-gray-500">
                El launcher lo detecta y puede descargarlo si hace falta.
              </p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              <div className="text-white font-bold mb-2">¿Puedo jugar offline?</div>
              <p className="text-sm text-gray-500">Sí, puedes usar modo offline.</p>
            </div>
            <div className="bg-[#1B1E23] border border-white/5 p-6 rounded-sm">
              <div className="text-white font-bold mb-2">¿Dónde se guardan mis archivos?</div>
              <p className="text-sm text-gray-500">
                En tu carpeta local de NEWEN, separadas por instancia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0f0f0f] border-t border-white/5 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <NewenLogoFlat className="w-10 h-10" />
              <span className="font-rajdhani font-bold text-xl text-white uppercase tracking-tight">
                NEWEN
              </span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
              La fuerza ligera que tu juego merece. Launcher nativo, rápido y claro.
            </p>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-6 mb-6">
              <a href="https://github.com/OrmazabalDev" className="text-gray-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a
                href="#roadmap"
                className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
              >
                Roadmap
              </a>
              <a
                href="#support"
                className="text-gray-500 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
              >
                Soporte
              </a>
            </div>
            <div className="text-[10px] text-gray-700 uppercase tracking-[0.2em] font-bold">
              © 2026 NEWEN Launcher · Made in Chile · No oficial de Mojang/Microsoft · No afiliado
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NewenWebsite;
