import { Code, Database, Wrench } from "lucide-react";

export function Skills() {
  const backend = [
    "PHP (4 → 8)",
    "MSSQL, MySQL, DB2",
    "Requêtage SQL avancé",
    "Processus ETL / traitements batch",
  ];

  const frontend = [
    "JavaScript",
    "HTML / CSS",
    "Bootstrap",
    "React (bases)",
    "Flutter (bases)",
  ];

  const tools = ["Git", "Jira", "AS400 (IBM iSeries)", "Méthodes Agile", "MVP", "UX simple et fluide"];

  const softSkills = [
    "Curiosité",
    "Créativité",
    "Autonomie",
    "Visualisation des solutions",
    "Gestion du temps",
    "Communication à distance",
  ];

  return (
    <section id="skills" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Code className="w-6 h-6 text-[#2563EB]" />
        <h2 className="text-3xl text-[#1A1A1D]">Compétences</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#1F3A5F]">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-[#2563EB]" />
            <h3 className="text-lg font-semibold text-[#111827]">Back-end & Data</h3>
          </div>
          <ul className="space-y-1 text-[#4B5563]">
            {backend.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-[#1F3A5F]">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="w-5 h-5 text-[#2563EB]" />
            <h3 className="text-lg font-semibold text-[#111827]">Front-end & Outils</h3>
          </div>
          <ul className="space-y-1 text-[#4B5563]">
            {frontend.map((skill) => (
              <li key={skill}>• {skill}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="bg-[#1F3A5F] text-white px-3 py-1 rounded-full text-xs"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#2563EB]">
        <div className="flex items-center gap-2 mb-3">
          <Database className="w-5 h-5 text-[#2563EB]" />
          <h3 className="text-lg font-semibold text-[#111827]">Soft skills</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="border border-[#E5E7EB] px-3 py-1 rounded-full text-xs text-[#374151]"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
