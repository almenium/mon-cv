import { Briefcase } from "lucide-react";

type ExperienceItem = {
  id: number;
  title: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
};

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Développeuse Full-Stack PHP / JavaScript",
      company: "Hydro Building System",
      location: "Puget-sur-Argens",
      period: "Août 2020 — Aujourd'hui",
      description: [
        "Étude et développement d’applications métier (ventes, finance, production).",
        "Automatisation de rapports statistiques via MSSQL et PHP.",
        "Intégration d’API externes et optimisation du traitement des données.",
        "Participation à la modernisation du front (Bootstrap, JavaScript).",
      ],
    },
    {
      id: 2,
      title: "Programmeuse Analyste",
      company: "MODE83",
      location: "Draguignan",
      period: "2019 — 2020",
      description: [
        "Participation à des projets de développement et de maintenance d’applications.",
        "Montée en compétences sur les bonnes pratiques de développement web.",
      ],
    },
    {
      id: 3,
      title: "Développeuse Web (Stage)",
      company: "L’Encre Noire",
      location: "Saint-Raphaël",
      period: "Décembre 2018",
      description: [
        "Développement front-end (React JS) pour un site vitrine.",
        "Mise en place d’une carte interactive OpenStreetMap.",
        "Contribution à un moteur de recherche intelligent (stemming).",
      ],
    },
    {
      id: 4,
      title: "Télé-gestionnaire",
      company: "Domus Vie Quotidienne",
      location: "Paris",
      period: "Juin 2010 — Octobre 2019",
      description: [
        "Gestion des sinistres habitation et accompagnement des assurés.",
        "Formation de nouveaux collaborateurs sur les outils et procédures.",
        "Développement de compétences en gestion du stress, priorisation et communication.",
      ],
    },
  ];

  return (
    <section id="experience" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-6 h-6 text-[#2563EB]" />
        <h2 className="text-3xl text-[#1A1A1D]">Expériences</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB]"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg font-semibold text-[#111827]">{exp.title}</h3>
                <p className="text-sm text-[#4B5563]">
                  {exp.company}
                  {exp.location ? ` — ${exp.location}` : ""}
                </p>
              </div>
              <p className="text-sm text-[#6B7280]">{exp.period}</p>
            </div>
            <ul className="space-y-2">
              {exp.description.map((item, index) => (
                <li key={index} className="text-[#4B5563] flex gap-2">
                  <span className="text-[#2563EB] mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
