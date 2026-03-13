const logoUrl = `${import.meta.env.BASE_URL}logo.png`;
const discordUrl = "https://discord.gg/tsCcEYuPX3";

const sections = [
  {
    title: "1. Informacion que puede procesarse",
    intro:
      "Dependiendo de las funciones que utilices, Newen Launcher puede procesar la siguiente informacion:",
    items: [
      "Inicio de sesion con Microsoft, en caso de que el usuario decida autenticarse mediante ese servicio.",
      "Descargas de contenido desde servicios externos como Modrinth o CurseForge.",
      "Reportes de diagnostico y logs, unicamente cuando el usuario decide compartirlos para recibir soporte tecnico.",
      "Configuraciones locales, instancias, caches y datos operativos necesarios para el funcionamiento normal del launcher.",
    ],
  },
  {
    title: "2. Informacion que no recopilamos",
    intro: "Newen Launcher no:",
    items: [
      "vende datos personales.",
      "utiliza trackers publicitarios.",
      "crea perfiles comerciales de usuarios.",
      "recopila informacion personal con fines de marketing.",
    ],
  },
  {
    title: "3. Finalidad del uso de la informacion",
    intro: "La informacion procesada se utiliza unicamente para:",
    items: [
      "permitir el funcionamiento del launcher y sus integraciones.",
      "gestionar configuraciones, instancias y datos necesarios para el uso normal de la aplicacion.",
      "facilitar descargas e instalaciones solicitadas por el usuario.",
      "ayudar a diagnosticar y resolver fallos cuando el usuario comparte reportes tecnicos de forma voluntaria.",
    ],
  },
  {
    title: "4. Servicios de terceros",
    intro:
      "Algunas funciones de Newen Launcher dependen de servicios externos. Por ejemplo:",
    items: [
      "Microsoft, para procesos de autenticacion cuando el usuario inicia sesion.",
      "Modrinth y CurseForge, para la descarga de contenido, modpacks, mods u otros recursos.",
    ],
    outro:
      "Estos servicios pueden procesar datos de conexion, solicitudes o informacion tecnica de acuerdo con sus propias politicas de privacidad y condiciones de uso. Newen Launcher no controla las politicas ni el tratamiento de datos realizado por dichos terceros.",
  },
  {
    title: "5. Almacenamiento local",
    intro: "Newen Launcher almacena principalmente en tu equipo:",
    items: [
      "configuraciones.",
      "instancias.",
      "caches.",
      "logs.",
      "otros datos operativos necesarios para el funcionamiento del launcher.",
    ],
    outro:
      "Salvo que el usuario lo autorice expresamente, Newen Launcher no envia esta informacion a servidores propios. Por ejemplo, un reporte tecnico solo se comparte si el usuario decide hacerlo para obtener soporte.",
  },
  {
    title: "6. Reportes y soporte",
    paragraphs: [
      "Si decides compartir un reporte de diagnostico o archivos de log con fines de soporte, dicha informacion podra ser revisada unicamente para analizar errores, problemas tecnicos o fallos de funcionamiento del launcher.",
      "Te recomendamos revisar el contenido de cualquier reporte antes de compartirlo.",
    ],
  },
  {
    title: "7. Cambios en esta politica",
    paragraphs: [
      "Esta politica de privacidad puede actualizarse en el futuro para reflejar cambios en el launcher, en sus integraciones o en la forma en que se procesan ciertos datos.",
      "Cuando existan cambios relevantes, la fecha de Ultima actualizacion sera modificada en esta pagina.",
    ],
  },
  {
    title: "8. Contacto",
    paragraphs: [
      "Si tienes dudas sobre privacidad, soporte o funcionamiento del proyecto, puedes comunicarte a traves del canal oficial de Newen Launcher.",
    ],
  },
];

type PolicySection = (typeof sections)[number];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="border-b border-[var(--line)] bg-[rgba(6,9,13,0.84)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="#/" className="flex items-center gap-3">
            <img src={logoUrl} alt="Newen Launcher" className="h-10 w-10 rounded-xl" />
            <div>
              <div className="font-heading text-xl font-bold text-white">Newen Launcher</div>
              <div className="text-sm text-[var(--muted)]">Politica de privacidad</div>
            </div>
          </a>
          <a
            href="#/"
            className="text-sm font-semibold text-[var(--muted)] transition-colors hover:text-white"
          >
            Volver al inicio
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-14">
        <div className="rounded-[2rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(7,11,15,0.5)] p-8 sm:p-10">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brand-soft)]">
              Ultima actualizacion: 13 de marzo de 2026
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Politica de privacidad de Newen Launcher
            </h1>
            <p className="text-base leading-8 text-[var(--muted)]">
              En <strong className="text-white">Newen Launcher</strong> valoramos una experiencia
              clara, transparente y respetuosa con el usuario. La mayor parte de la informacion
              utilizada por el launcher se almacena y procesa en tu propio equipo. Solo se
              comparte informacion con servicios de terceros cuando una funcion lo requiere o
              cuando tu lo autorizas de forma explicita.
            </p>
          </div>

          <div className="mt-10 space-y-8">
            {sections.map((section) => (
              <PolicyBlock key={section.title} section={section} />
            ))}

            <div className="rounded-[1.6rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)] p-5">
              <a
                href={discordUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[var(--brand)] hover:text-[var(--brand-soft)]"
              >
                Ir al canal oficial de Newen Launcher
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

type PolicyBlockProps = {
  section: PolicySection;
};

const PolicyBlock = ({ section }: PolicyBlockProps) => (
  <section className="space-y-4">
    <h2 className="font-heading text-2xl font-bold text-white">{section.title}</h2>

    {"intro" in section && section.intro ? (
      <p className="text-sm leading-7 text-[var(--muted)]">{section.intro}</p>
    ) : null}

    {"items" in section && section.items ? (
      <ul className="space-y-3 text-sm leading-7 text-[var(--muted)]">
        {section.items.map((item) => (
          <li
            key={item}
            className="rounded-2xl border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] px-4 py-3"
          >
            {item}
          </li>
        ))}
      </ul>
    ) : null}

    {"paragraphs" in section && section.paragraphs
      ? section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-sm leading-7 text-[var(--muted)]">
            {paragraph}
          </p>
        ))
      : null}

    {"outro" in section && section.outro ? (
      <p className="text-sm leading-7 text-[var(--muted)]">{section.outro}</p>
    ) : null}
  </section>
);

export default PrivacyPolicy;
