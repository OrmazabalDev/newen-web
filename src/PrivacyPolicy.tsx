const logoUrl = `${import.meta.env.BASE_URL}logo.png`;

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 font-sans selection:bg-[#FF8C00] selection:text-white">
      <header className="border-b border-[#1B1E23] bg-[#0e0e0e]">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={logoUrl}
              alt="NEWEN logo"
              className="w-8 h-8 rounded"
              loading="eager"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-rajdhani font-bold text-lg text-white">
                Newen Launcher
              </span>
              <span className="text-xs text-gray-500">Early Access</span>
            </div>
          </div>
          <a
            href="#/"
            className="text-sm font-semibold text-gray-300 hover:text-white transition-colors"
          >
            Volver al inicio
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
        <div className="space-y-3">
          <h1 className="font-rajdhani text-4xl sm:text-5xl font-bold text-white">
            Política de Privacidad — Newen Launcher (Early Access)
          </h1>
          <p className="text-sm text-gray-400">Última actualización: 2026-02-27</p>
        </div>

        <p className="text-gray-300 text-lg leading-relaxed">
          Newen Launcher es un launcher de Minecraft en fase Early Access. Esta política
          explica qué datos se procesan y cómo se usan.
        </p>

        <section className="space-y-3">
          <h2 className="font-rajdhani text-2xl font-bold text-white">
            1) Datos que se procesan
          </h2>
          <p className="text-gray-400">
            Newen Launcher puede procesar los siguientes datos según las funciones que el
            usuario use:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Inicio de sesión Microsoft (opcional): token de autenticación y datos
              básicos del perfil (gamertag/UUID).
            </li>
            <li>
              Descargas de contenido: al usar Modrinth/CurseForge, se realizan
              solicitudes a sus servidores (ellos reciben tu IP como cualquier descarga
              estándar).
            </li>
            <li>
              Reportes de diagnóstico (opcional): si el usuario genera y sube un reporte,
              este puede incluir logs técnicos del launcher y del juego.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-rajdhani text-2xl font-bold text-white">
            2) Datos que NO se recopilan
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>No vendemos ni compartimos datos personales.</li>
            <li>No usamos trackers publicitarios.</li>
            <li>No hacemos perfiles de usuarios.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-rajdhani text-2xl font-bold text-white">
            3) Uso de los datos
          </h2>
          <p className="text-gray-400">Los datos se usan únicamente para:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Permitir el funcionamiento del launcher (login, descargas, instancias).
            </li>
            <li>
              Mejorar estabilidad y soporte cuando el usuario comparte un reporte.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-rajdhani text-2xl font-bold text-white">4) Terceros</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Modrinth y CurseForge pueden procesar datos de conexión (IP) al descargar
              contenido.
            </li>
            <li>Microsoft procesa el login cuando el usuario inicia sesión.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-rajdhani text-2xl font-bold text-white">
            5) Almacenamiento local
          </h2>
          <p className="text-gray-300 leading-relaxed">
            La mayor parte de los datos se guardan localmente en tu PC (configuraciones,
            instancias, cachés).
          </p>
          <p className="text-gray-300 leading-relaxed">
            No enviamos datos a servidores propios salvo que el usuario lo autorice
            explícitamente (por ejemplo, reporte).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-rajdhani text-2xl font-bold text-white">6) Contacto</h2>
          <p className="text-gray-300 leading-relaxed">
            Si tienes dudas o quieres solicitar eliminación de datos compartidos,
            contáctanos en el Discord oficial.
          </p>
        </section>
      </main>

      <footer className="border-t border-[#1B1E23] bg-[#0e0e0e]">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-sm text-gray-500">
          <span>Newen Launcher — Política de Privacidad</span>
          <a
            href="https://discord.gg/rTbktFZYZz"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            Discord oficial
          </a>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
