import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Download,
  Eye,
  FileText,
  Folder,
  Gauge,
  Github,
  Globe2,
  Layers,
  MessageCircle,
  PackageCheck,
  RefreshCw,
  Rocket,
  Search,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  Wrench,
} from "lucide-react";

const logoUrl = `${import.meta.env.BASE_URL}logo.png`;
const githubUrl = "https://github.com/OrmazabalDev/newen_launcher";
const releasesUrl = "https://github.com/OrmazabalDev/newen_launcher/releases";
const discordUrl = "https://discord.gg/tsCcEYuPX3";
const virusTotalUrl =
  "https://www.virustotal.com/gui/file/1e54603be2cf628c7878758c57a18f483f7295f96a9873a350be32af4a8ccd23/details";
const menuJugarImage = new URL("../capturas/Menu_Jugar.png", import.meta.url).href;
const menuInstanciasImage = new URL("../capturas/Menu_Instancias.png", import.meta.url).href;
const menuModsImage = new URL("../capturas/Menu_Catalg_Mods.png", import.meta.url).href;
const menuModpacksImage = new URL(
  "../capturas/Menu_Catalg_Modpacks.png",
  import.meta.url,
).href;
const menuAjustesImage = new URL("../capturas/Menu_Ajustes.png", import.meta.url).href;
const menuSkinsImage = new URL("../capturas/Menu_Skins.png", import.meta.url).href;

type CardData = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ScreenshotPreview = {
  src: string;
  alt: string;
  title: string;
};

const differentiators: CardData[] = [
  {
    icon: MessageCircle,
    title: "Claridad en español",
    description:
      "Flujos, mensajes y onboarding pensados para usuarios hispanohablantes, no solo traducidos.",
  },
  {
    icon: ShieldCheck,
    title: "Confianza y transparencia",
    description:
      "Mostramos qué hace el launcher, qué instala y cómo seguir el proyecto sin zonas grises.",
  },
  {
    icon: Gauge,
    title: "Orden y rendimiento",
    description:
      "Instancias limpias, menos desorden y perfiles orientados a equipos reales, no solo de gama alta.",
  },
];

const coreFeatures: CardData[] = [
  {
    icon: Folder,
    title: "Gestión de instancias",
    description:
      "Crea, edita, duplica, elimina y ordena perfiles sin tocar carpetas manualmente.",
  },
  {
    icon: Layers,
    title: "Vanilla, Fabric, Forge y NeoForge",
    description: "Los loaders principales conviven en un flujo simple y claro.",
  },
  {
    icon: Download,
    title: "Instalación simple",
    description: "Elige versión y loader desde la interfaz, sin procesos complejos.",
  },
  {
    icon: Search,
    title: "Catálogo integrado",
    description:
      "Mods, modpacks, shaders, resource packs y datapacks desde una fuente clara.",
  },
  {
    icon: Gauge,
    title: "Optimización básica",
    description: "Perfiles sugeridos para rendimiento según equipo o tipo de uso.",
  },
  {
    icon: Cpu,
    title: "Gestión de Java",
    description:
      "Detecta, descarga o configura Java sin obligarte a resolverlo por tu cuenta.",
  },
  {
    icon: Eye,
    title: "Diagnóstico entendible",
    description: "Errores explicados con causas probables y sugerencias útiles.",
  },
  {
    icon: RefreshCw,
    title: "Reparación rápida",
    description:
      "Corrige instancias, archivos dañados o configuraciones comunes sin rehacer todo.",
  },
  {
    icon: Sparkles,
    title: "Interfaz moderna",
    description: "Diseño limpio, legible y sin sensación de launcher improvisado.",
  },
  {
    icon: FileText,
    title: "Transparencia del sistema",
    description: "Versión visible, changelog, logs claros y accesos técnicos útiles.",
  },
];

const audienceItems = [
  "Quieres jugar Minecraft sin perder tiempo configurando todo manualmente.",
  "Usas mods o modpacks, pero te enredas con instalaciones y loaders.",
  "Tienes un PC medio o modesto y valoras rendimiento antes que adornos.",
  "Prefieres una experiencia clara en español y desconfías de launchers opacos.",
];

const screenshotShowcase = [
  {
    eyebrow: "Menu jugar",
    title: "Pantalla principal para entrar a jugar",
    description:
      "Vista general del launcher con acceso rapido a la instancia activa y el estado principal del perfil.",
    chips: ["Inicio", "Instancia activa", "Acceso rapido"],
    imageSrc: menuJugarImage,
    imageAlt: "Captura real del menu jugar de Newen Launcher",
  },
  {
    eyebrow: "Menu instancias",
    title: "Gestion visual de instancias",
    description:
      "Espacio para crear, revisar y organizar perfiles sin depender de carpetas manuales.",
    chips: ["Perfiles", "Orden", "Gestion"],
    imageSrc: menuInstanciasImage,
    imageAlt: "Captura real del menu instancias de Newen Launcher",
  },
  {
    eyebrow: "Catalogo de mods",
    title: "Mods integrados en el launcher",
    description:
      "Busqueda y exploracion de contenido desde una vista centralizada y mas clara.",
    chips: ["Mods", "Busqueda", "Catalogo"],
    imageSrc: menuModsImage,
    imageAlt: "Captura real del catalogo de mods de Newen Launcher",
  },
  {
    eyebrow: "Catalogo de modpacks",
    title: "Modpacks desde una vista dedicada",
    description:
      "Pantalla enfocada en modpacks para instalar contenido mas complejo desde un mismo flujo.",
    chips: ["Modpacks", "Instalacion", "Exploracion"],
    imageSrc: menuModpacksImage,
    imageAlt: "Captura real del catalogo de modpacks de Newen Launcher",
  },
  {
    eyebrow: "Menu ajustes",
    title: "Configuracion y control del launcher",
    description:
      "Zona para revisar preferencias, opciones tecnicas y parametros de funcionamiento.",
    chips: ["Ajustes", "Preferencias", "Control"],
    imageSrc: menuAjustesImage,
    imageAlt: "Captura real del menu ajustes de Newen Launcher",
  },
  {
    eyebrow: "Menu skins",
    title: "Gestion de aspecto del perfil",
    description:
      "Pantalla destinada a administrar skins y elementos visuales del usuario.",
    chips: ["Skins", "Perfil", "Personalizacion"],
    imageSrc: menuSkinsImage,
    imageAlt: "Captura real del menu skins de Newen Launcher",
  },
];

const transparencyItems = [
  "Versión actual visible en cada release.",
  "Notas de cambios y seguimiento del desarrollo.",
  "Hash del instalador junto a cada descarga pública.",
  "Análisis externo del archivo descargable.",
  "Enlaces técnicos del proyecto y política de privacidad.",
];

const trustFacts = [
  {
    active: false,
    icon: Gauge,
    label: "Estado del proyecto",
    value: "Beta privada",
    note: "Desarrollo activo y foco actual en estabilidad.",
    href: releasesUrl,
  },
  {
    active: true,
    icon: RefreshCw,
    label: "Ultimo update",
    value: "13 Mar 2026",
    note: "Fecha visible para cada publicacion.",
    href: releasesUrl,
  },
  {
    active: true,
    icon: FileText,
    label: "Changelog",
    value: "Disponible en GitHub Releases",
    note: "Historial de cambios por version.",
    href: releasesUrl,
  },
  {
    active: false,
    icon: ShieldCheck,
    label: "Hash SHA-256",
    value: "Publicado con cada release",
    note: "Verificacion del instalador oficial.",
    href: releasesUrl,
  },
  {
    active: true,
    icon: Eye,
    label: "VirusTotal",
    value: "Analisis publico disponible",
    note: "Enlace directo al reporte de VirusTotal del instalador.",
    href: virusTotalUrl,
  },
  {
    active: true,
    icon: Github,
    label: "GitHub del proyecto",
    value: "Repositorio oficial",
    note: "Codigo, issues y seguimiento tecnico.",
    href: githubUrl,
  },
];

const faqs = [
  {
    question: "Es seguro?",
    answer:
      "Newen prioriza transparencia: publicamos el estado del proyecto, las releases oficiales y la informacion tecnica relevante para que sepas que estas descargando.",
  },
  {
    question: "Por que Windows puede mostrar una advertencia?",
    answer:
      "Porque el instalador aun no cuenta con firma digital. Para compensarlo, la web destaca links oficiales, hash de verificacion y el seguimiento publico del proyecto.",
  },
  {
    question: "Que datos guarda Newen?",
    answer:
      "Principalmente configuraciones, caches e instancias en tu equipo. La politica de privacidad explica cuando intervienen servicios externos.",
  },
  {
    question: "Necesito tener Minecraft premium?",
    answer:
      "Depende del modo de uso y de las reglas del ecosistema oficial de Minecraft. La autenticacion sigue ese contexto.",
  },
  {
    question: "Que loaders soporta?",
    answer:
      "La base del producto contempla Vanilla, Fabric, Forge y NeoForge como compatibilidad principal.",
  },
  {
    question: "Que pasa si una instancia falla?",
    answer:
      "El objetivo del launcher es mostrar diagnostico entendible y opciones de reparacion rapida para errores comunes de Java, archivos o configuracion.",
  },
  {
    question: "Necesito instalar Java manualmente?",
    answer:
      "No deberia ser necesario en la mayoria de casos. Newen apunta a detectar, configurar o ayudarte a recuperar Java desde la propia experiencia.",
  },
];

const roadmap = {
  done: [
    "Base visual del launcher",
    "Gestion inicial de instancias",
    "Compatibilidad base con loaders",
    "Landing y proyecto publico",
  ],
  progress: [
    "Diagnostico y reparacion de errores",
    "Mejoras de onboarding",
    "Pulido de rendimiento y estabilidad",
    "Transparencia de releases y verificacion",
  ],
  next: [
    "Mas capturas reales del producto",
    "Flujo de descarga mas serio",
    "Mejores mensajes de error",
    "Pulido visual entre web y launcher",
  ],
};

const NewenWebsite = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedScreenshot, setSelectedScreenshot] = useState<ScreenshotPreview | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!selectedScreenshot) {
      return undefined;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedScreenshot(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedScreenshot]);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-[-14rem] h-[30rem] bg-[radial-gradient(circle_at_top,_rgba(240,138,36,0.28),_transparent_60%)]" />
        <div className="absolute left-[-12rem] top-[24rem] h-[24rem] w-[24rem] rounded-full bg-[rgba(31,111,139,0.18)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[34rem] h-[20rem] w-[20rem] rounded-full bg-[rgba(255,178,90,0.14)] blur-3xl" />
      </div>

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[rgba(12,17,22,0.88)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <img src={logoUrl} alt="Newen Launcher" className="h-9 w-9 rounded-xl" loading="eager" />
            <div className="leading-none">
              <div className="font-heading text-lg font-bold text-white sm:text-xl">Newen Launcher</div>
              <div className="text-xs text-[var(--muted)]">Juega Minecraft sin enredos</div>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-[var(--muted)] lg:flex">
            <a href="#features" className="hover:text-white">Características</a>
            <a href="#transparency" className="hover:text-white">Transparencia</a>
            <a href="#download" className="hover:text-white">Descarga</a>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-[var(--line)] px-4 py-2 text-sm text-[var(--muted)] transition-colors hover:border-[var(--brand)] hover:text-white sm:inline-flex sm:items-center sm:gap-2"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href={releasesUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-4 py-2 text-sm font-semibold text-[#10151b] transition-transform hover:translate-y-[-1px] hover:bg-[var(--brand-soft)]"
            >
              <Download size={16} />
              Descargar
            </a>
          </div>
        </div>
      </nav>

      <main>
        <section className="px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:pb-28 lg:pt-36">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(240,138,36,0.3)] bg-[rgba(240,138,36,0.08)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">
                <span className="h-2 w-2 rounded-full bg-[var(--brand)]" />
                Desarrollado en Chile
              </div>

              <div className="space-y-5">
                <h1 className="font-heading text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                  Juega Minecraft sin enredos.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                  Newen Launcher es un launcher moderno para Minecraft con foco en orden,
                  confianza y rendimiento. Hecho para instalar, organizar y jugar con menos
                  fricción técnica.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={releasesUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-base font-semibold text-[#10151b] transition-transform hover:translate-y-[-1px] hover:bg-[var(--brand-soft)]"
                >
                  Descargar
                  <Download size={18} />
                </a>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.02)] px-6 py-4 text-base font-semibold text-white transition-colors hover:border-[var(--brand)] hover:bg-[rgba(240,138,36,0.08)]"
                >
                  Ver en GitHub
                  <Github size={18} />
                </a>
              </div>

              <p className="text-sm leading-7 text-[var(--muted)]">
                Orden, confianza y rendimiento en un solo launcher. Compatible con Windows 10/11
                y pensado para la comunidad hispanohablante.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <StatCard label="Soporte base" value="Vanilla + loaders" />
                <StatCard label="Pensado para" value="PCs normales" />
                <StatCard label="Enfoque" value="Claridad real" />
              </div>
            </div>

            <div className="grid gap-4">
              <HeroPanel
                eyebrow="Lo esencial"
                title="Un launcher claro antes de abrirse"
                description="El hero resume la propuesta real del producto: ordenar instancias, reducir friccion tecnica y dar contexto confiable antes de descargar."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <HeroMiniCard
                  icon={Layers}
                  title="Loaders en un solo flujo"
                  description="Vanilla, Fabric, Forge y NeoForge con una experiencia mas clara."
                />
                <HeroMiniCard
                  icon={ShieldCheck}
                  title="Confianza visible"
                  description="Releases, changelog, estado del proyecto y enlaces oficiales al frente."
                />
              </div>

              <div className="rounded-[1.8rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,_rgba(19,28,37,0.9),_rgba(13,18,24,0.92))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">
                      Estado actual
                    </div>
                    <div className="mt-2 font-heading text-3xl font-bold text-white">
                      Beta privada
                    </div>
                  </div>
                  <div className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-2 text-sm text-[var(--muted)]">
                    Windows 10/11
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <HeroFact icon={Folder} label="Instancias" value="Ordenadas sin carpetas manuales" />
                  <HeroFact icon={Cpu} label="Java" value="Gestion y ayuda desde el launcher" />
                  <HeroFact icon={Eye} label="Diagnostico" value="Errores explicados con lenguaje claro" />
                  <HeroFact icon={FileText} label="Transparencia" value="Version, changelog y enlaces visibles" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Prueba visual"
              title="Capturas reales del launcher"
              description="Estas pantallas muestran el estado real de los menus principales del producto para que la landing represente mejor lo que existe hoy."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {screenshotShowcase.map((item) => (
                <ScreenshotCard
                  key={item.title}
                  eyebrow={item.eyebrow}
                  title={item.title}
                  description={item.description}
                  chips={item.chips}
                  imageSrc={item.imageSrc}
                  imageAlt={item.imageAlt}
                  onOpen={() =>
                    setSelectedScreenshot({
                      src: item.imageSrc,
                      alt: item.imageAlt,
                      title: item.title,
                    })
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(255,255,255,0.02)] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Diferenciales"
              title="Tres razones para que Newen se sienta distinto"
              description="El foco esta en resolver mejor lo esencial, no en inflar el producto con ruido."
              centered
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {differentiators.map((item) => (
                <FeatureBlock key={item.title} {...item} accent />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-5">
              <SectionTitle
                eyebrow="Por que existe"
                title="Muchos launchers siguen siendo mas confusos de lo que deberian"
                description="Newen nace para facilitar una experiencia de Minecraft en PC mas ordenada, confiable y accesible, especialmente para jugadores hispanohablantes."
              />
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)]">
                La mision es ayudarte a instalar, organizar y jugar tus instancias con menos
                friccion tecnica. La vision es convertirse en un launcher de referencia para la
                comunidad hispanohablante que busca simplicidad, transparencia y buen rendimiento.
              </p>
            </div>

            <div className="grid gap-4">
              <QuoteCard
                title="Propuesta de valor"
                text="Un launcher moderno de Minecraft que prioriza claridad, confianza y rendimiento."
              />
              <QuoteCard
                title="Tono de marca"
                text="Claro, cercano, tecnico cuando hace falta y transparente sin exagerar."
              />
              <QuoteCard
                title="Que transmite"
                text="Te ayudo. Te explico. No te escondo nada. No te complico la vida."
              />
            </div>
          </div>
        </section>

        <section id="features" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Funciones core"
              title="Lo que si define a Newen Launcher"
              description="Estas funciones sostienen la propuesta del producto y deberian sentirse claras desde la landing."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {coreFeatures.map((item) => (
                <FeatureBlock key={item.title} {...item} />
              ))}
            </div>
          </div>
        </section>

        <section id="transparency" className="border-y border-[var(--line)] bg-[rgba(255,255,255,0.02)] px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.05fr]">
            <div className="space-y-6">
              <SectionTitle
                eyebrow="Transparencia"
                title="Transparencia ante todo"
                description="Mostramos lo que cambia, lo que descargas y el estado actual del proyecto para reducir friccion y desconfianza desde la primera visita."
              />
              <div className="grid gap-3">
                {transparencyItems.map((item) => (
                  <ListRow key={item} text={item} icon={CheckCircle2} />
                ))}
              </div>
              <p className="text-sm leading-7 text-[var(--muted)]">
                El instalador aun no cuenta con firma digital. Por eso esta zona pone al frente
                los datos que una persona prudente necesita revisar antes de descargar.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {trustFacts.filter((item) => item.active).map((item) => (
                <TrustCard
                  key={item.label}
                  icon={item.icon}
                  label={item.label}
                  value={item.value}
                  note={item.note}
                  href={item.href}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <SectionTitle
                eyebrow="Para quien es"
                title="Newen es para ti si valoras una experiencia mas clara"
                description="El usuario principal no quiere pelear con Java, carpetas, loaders ni errores cripticos."
              />
              <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
                El foco esta en jugadores de Minecraft en PC que quieren una experiencia mas
                simple que la de otros launchers, con soporte real para mods y modpacks, pero sin
                exigir conocimientos tecnicos innecesarios.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {audienceItems.map((item) => (
                <ListRow key={item} text={item} icon={CheckCircle2} strong />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-4 pb-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <SectionTitle
              eyebrow="FAQ"
              title="Preguntas frecuentes que bajan la desconfianza"
              description="Respuestas directas a las dudas que mas frenan una descarga o el primer uso del launcher."
            />
            <div className="mt-10 grid gap-4">
              {faqs.map((item) => (
                <FaqItem key={item.question} question={item.question} answer={item.answer} />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[rgba(255,255,255,0.02)] px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Roadmap"
              title="Direccion visible del proyecto"
              description="Un roadmap corto ayuda a ver que ya existe, que esta avanzando y que viene despues sin prometer mas de la cuenta."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              <RoadmapCard
                icon={PackageCheck}
                title="Hecho"
                subtitle="Base ya visible en producto y web."
                items={roadmap.done}
                tone="done"
              />
              <RoadmapCard
                icon={Rocket}
                title="En progreso"
                subtitle="Trabajo activo de la etapa actual."
                items={roadmap.progress}
                tone="progress"
              />
              <RoadmapCard
                icon={ShieldAlert}
                title="Proximamente"
                subtitle="Siguiente capa despues de validar el nucleo."
                items={roadmap.next}
                tone="next"
              />
            </div>
          </div>
        </section>

        <section id="download" className="px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[2rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(135deg,_rgba(240,138,36,0.12),_rgba(31,111,139,0.1))] p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(7,11,15,0.24)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">
                  <Wrench size={14} />
                  Prueba Newen Launcher
                </div>
                <div className="space-y-4">
                  <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Un launcher moderno para Minecraft, enfocado en claridad, orden y confianza.
                  </h2>
                  <p className="max-w-2xl text-base leading-8 text-[rgba(229,237,245,0.78)]">
                    Descarga la build disponible o sigue el desarrollo del proyecto en GitHub.
                    Newen esta hecho para ayudarte a jugar mejor, no para complicarte mas.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href={releasesUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-base font-semibold text-[#10151b] transition-transform hover:translate-y-[-1px] hover:bg-[var(--brand-soft)]"
                  >
                    Descargar ahora
                    <Download size={18} />
                  </a>
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.16)] bg-[rgba(7,11,15,0.22)] px-6 py-4 text-base font-semibold text-white transition-colors hover:border-white hover:bg-[rgba(255,255,255,0.08)]"
                  >
                    Seguir desarrollo
                    <Github size={18} />
                  </a>
                </div>
              </div>

              <div className="grid gap-4">
                <FeatureBlock
                  icon={Globe2}
                  title="Hecho en Chile"
                  description="Con foco inicial en la comunidad hispanohablante de LATAM."
                  accent
                />
                <FeatureBlock
                  icon={ShieldCheck}
                  title="Transparencia como base"
                  description="Links del proyecto, politica de privacidad y seguimiento publico."
                  accent
                />
                <FeatureBlock
                  icon={Cpu}
                  title="Pensado para PCs reales"
                  description="Orden, rendimiento y menos errores comunes al instalar o jugar."
                  accent
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-[rgba(6,9,13,0.8)] px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <img src={logoUrl} alt="Newen Launcher" className="h-10 w-10 rounded-xl" />
            <div>
              <div className="font-heading text-xl font-bold text-white">Newen Launcher</div>
              <div className="text-sm text-[var(--muted)]">Juega Minecraft sin enredos.</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href={releasesUrl} target="_blank" rel="noreferrer" className="hover:text-white">Releases</a>
            <a href={discordUrl} target="_blank" rel="noreferrer" className="hover:text-white">Discord</a>
            <a href="#/politica-de-privacidad" className="hover:text-white">Politica de privacidad</a>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl text-sm leading-7 text-[var(--muted)]">
          Minecraft es una marca registrada de Mojang y Microsoft. Newen Launcher no esta afiliado
          oficialmente con esas marcas.
        </div>
      </footer>

      {selectedScreenshot ? (
        <ScreenshotModal
          screenshot={selectedScreenshot}
          onClose={() => setSelectedScreenshot(null)}
        />
      ) : null}
    </div>
  );
};

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

const SectionTitle = ({ eyebrow, title, description, centered = false }: SectionTitleProps) => (
  <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-soft)]">{eyebrow}</div>
    <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
    <p className="mt-4 text-base leading-8 text-[var(--muted)] sm:text-lg">{description}</p>
  </div>
);

type FeatureBlockProps = CardData & { accent?: boolean };

const FeatureBlock = ({ icon: Icon, title, description, accent = false }: FeatureBlockProps) => (
  <article className="rounded-[1.6rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.55)] p-5 transition-colors hover:border-[rgba(240,138,36,0.3)]">
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
        accent ? "bg-[rgba(240,138,36,0.12)] text-[var(--brand-soft)]" : "bg-[rgba(31,111,139,0.18)] text-[#8bd3ff]"
      }`}
    >
      <Icon size={20} />
    </div>
    <h3 className="mt-5 font-heading text-xl font-bold text-white">{title}</h3>
    <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{description}</p>
  </article>
);

type StatCardProps = {
  label: string;
  value: string;
};

const StatCard = ({ label, value }: StatCardProps) => (
  <div className="rounded-[1.4rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.42)] px-4 py-4">
    <div className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">{label}</div>
    <div className="mt-2 font-heading text-xl font-bold text-white">{value}</div>
  </div>
);

type HeroPanelProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const HeroPanel = ({ eyebrow, title, description }: HeroPanelProps) => (
  <div className="rounded-[1.8rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,_rgba(19,28,37,0.92),_rgba(13,18,24,0.94))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
    <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">{eyebrow}</div>
    <h3 className="mt-3 font-heading text-3xl font-bold text-white">{title}</h3>
    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{description}</p>
  </div>
);

type HeroMiniCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const HeroMiniCard = ({ icon: Icon, title, description }: HeroMiniCardProps) => (
  <div className="rounded-[1.6rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(7,11,15,0.5)] p-5">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(240,138,36,0.12)] text-[var(--brand-soft)]">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 font-heading text-xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{description}</p>
  </div>
);

type HeroFactProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

const HeroFact = ({ icon: Icon, label, value }: HeroFactProps) => (
  <div className="rounded-[1.4rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] p-4">
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.06)] text-white">
        <Icon size={18} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">{label}</div>
        <div className="mt-1 text-sm text-white">{value}</div>
      </div>
    </div>
  </div>
);

type ScreenshotCardProps = {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  imageSrc: string;
  imageAlt: string;
  onOpen: () => void;
};

const ScreenshotCard = ({
  eyebrow,
  title,
  description,
  chips,
  imageSrc,
  imageAlt,
  onOpen,
}: ScreenshotCardProps) => {
  return (
    <article className="overflow-hidden rounded-[1.8rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.55)]">
      <div className="border-b border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,_rgba(19,28,37,0.94),_rgba(13,18,24,0.94))] p-3">
        <button
          type="button"
          onClick={onOpen}
          className="group block w-full overflow-hidden rounded-[1.4rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(8,12,16,0.75)] text-left transition-colors hover:border-[rgba(240,138,36,0.4)]"
          aria-label={`Ampliar captura: ${title}`}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            loading="lazy"
            className="h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>
      </div>
      <div className="space-y-4 p-5">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">
            {eyebrow}
          </div>
          <h3 className="font-heading text-2xl font-bold text-white">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3 py-1 text-xs text-[var(--muted)]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

type ScreenshotModalProps = {
  screenshot: ScreenshotPreview;
  onClose: () => void;
};

const ScreenshotModal = ({ screenshot, onClose }: ScreenshotModalProps) => (
  <div
    className="fixed inset-0 z-[80] flex items-center justify-center bg-[rgba(5,8,11,0.88)] px-4 py-6 backdrop-blur-sm"
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-label={screenshot.title}
  >
    <div
      className="relative max-h-full w-full max-w-6xl"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-3 top-3 z-10 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(7,11,15,0.72)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[var(--brand)] hover:text-[var(--brand-soft)]"
      >
        Cerrar
      </button>
      <div className="overflow-hidden rounded-[1.8rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(9,13,18,0.96)] shadow-[0_24px_100px_rgba(0,0,0,0.45)]">
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          className="max-h-[85vh] w-full object-contain"
        />
      </div>
    </div>
  </div>
);

type QuoteCardProps = {
  title: string;
  text: string;
};

const QuoteCard = ({ title, text }: QuoteCardProps) => (
  <article className="rounded-[1.6rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.46)] p-5">
    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-soft)]">{title}</div>
    <p className="mt-3 text-base leading-8 text-[var(--text)]">{text}</p>
  </article>
);

type ListRowProps = {
  text: string;
  icon: LucideIcon;
  strong?: boolean;
};

const ListRow = ({ text, icon: Icon, strong = false }: ListRowProps) => (
  <div className="flex items-start gap-3 rounded-[1.4rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.5)] px-4 py-4">
    <div className="mt-0.5 rounded-full bg-[rgba(240,138,36,0.12)] p-2 text-[var(--brand-soft)]">
      <Icon size={16} />
    </div>
    <p className={`text-sm leading-7 ${strong ? "text-[var(--text)]" : "text-[var(--muted)]"}`}>{text}</p>
  </div>
);

type TrustCardProps = {
  icon: LucideIcon;
  label: string;
  value: string;
  note: string;
  href: string;
};

const TrustCard = ({ icon: Icon, label, value, note, href }: TrustCardProps) => (
  <a
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noreferrer" : undefined}
    className="group rounded-[1.6rem] border border-[rgba(255,255,255,0.06)] bg-[linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))] p-5 transition-all hover:border-[rgba(240,138,36,0.4)] hover:translate-y-[-2px]"
  >
    <div className="flex items-center justify-between gap-4">
      <div className="rounded-2xl bg-[rgba(240,138,36,0.12)] p-3 text-[var(--brand-soft)]">
        <Icon size={20} />
      </div>
      <ArrowRight size={18} className="text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-white" />
    </div>
    <div className="mt-5 space-y-2">
      <div className="text-xs uppercase tracking-[0.18em] text-[var(--brand-soft)]">{label}</div>
      <div className="font-heading text-xl font-bold text-white">{value}</div>
      <p className="text-sm leading-7 text-[var(--muted)]">{note}</p>
    </div>
  </a>
);

type RoadmapCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: string[];
  tone: "done" | "progress" | "next";
};

const RoadmapCard = ({ icon: Icon, title, subtitle, items, tone }: RoadmapCardProps) => (
  <div className="rounded-[1.8rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.5)] p-6">
    <div className="flex items-center gap-3">
      <div
        className={`rounded-2xl p-3 ${
          tone === "done"
            ? "bg-[rgba(240,138,36,0.12)] text-[var(--brand-soft)]"
            : tone === "progress"
              ? "bg-[rgba(31,111,139,0.18)] text-[#8bd3ff]"
              : "bg-[rgba(255,255,255,0.08)] text-white"
        }`}
      >
        <Icon size={22} />
      </div>
      <div>
        <div className="font-heading text-2xl font-bold text-white">{title}</div>
        <div className="text-sm text-[var(--muted)]">{subtitle}</div>
      </div>
    </div>
    <div className="mt-6 grid gap-3">
      {items.map((item) => (
        <ListRow
          key={item}
          text={item}
          icon={tone === "done" ? CheckCircle2 : tone === "progress" ? Rocket : FileText}
          strong
        />
      ))}
    </div>
  </div>
);

type FaqItemProps = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: FaqItemProps) => (
  <details className="group rounded-[1.5rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.5)] p-5">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-xl font-bold text-white">
      {question}
      <span className="rounded-full border border-[rgba(255,255,255,0.08)] px-3 py-1 text-xs text-[var(--muted)] transition-colors group-open:border-[var(--brand)] group-open:text-[var(--brand-soft)]">
        Ver
      </span>
    </summary>
    <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{answer}</p>
  </details>
);

export default NewenWebsite;
