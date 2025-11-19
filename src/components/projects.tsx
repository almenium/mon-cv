import { FolderGit2 } from "lucide-react";

type ProjectItem = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

export function Projects() {
  const projects: ProjectItem[] = [
    {
      id: 1,
      title: "Outil de statistiques ventes & production",
      description:
        "Application interne pour automatiser les rapports et suivre les indicateurs clés de performance (CA, volumes, productivité).",
      technologies: ["PHP", "MSSQL", "ETL", "Rapports automatisés"],
      link: "#",
    },
    {
      id: 2,
      title: "Cartographie interactive OpenStreetMap",
      description:
        "Interface front-end intégrant une carte dynamique avec un moteur de recherche intelligent (stemming).",
      technologies: ["React", "JavaScript", "OpenStreetMap"],
      link: "#",
    },
    {
      id: 3,
      title: "Application mobile de checklist maternité",
      description:
        "Projet personnel : application Flutter pour gérer une checklist interactive de préparation au séjour à la maternité.",
      technologies: ["Flutter", "Mobile", "UX minimaliste"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <FolderGit2 className="w-6 h-6 text-[#2563EB]" />
        <h2 className="text-3xl text-[#1A1A1D]">Portfolio</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-lg p-6 border border-[#E5E7EB] flex flex-col"
          >
            <h3 className="text-lg font-semibold text-[#111827] mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-[#4B5563] mb-3 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded-full bg-[#EFF6FF] text-[#1D4ED8] border border-[#DBEAFE]"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                className="text-xs text-[#2563EB] hover:underline mt-auto"
              >
                Voir le projet
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
