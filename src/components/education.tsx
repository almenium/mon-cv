import { GraduationCap } from "lucide-react";

export function Education() {
  const education = [
    {
      id: 1,
      degree: "Titre Professionnel Développeur Web et Web Mobile (DWWM)",
      institution: "MODE83",
      period: "2019 — 2020",
      description: "Formation professionnelle niveau III axée sur le développement web front-end et back-end.",
    },
  ];

  return (
    <section id="education" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-6 h-6 text-[#2563EB]" />
        <h2 className="text-3xl text-[#1A1A1D]">Formation</h2>
      </div>

      <div className="space-y-4">
        {education.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[#1F3A5F]"
          >
            <h3 className="text-lg font-semibold text-[#111827]">{item.degree}</h3>
            <p className="text-sm text-[#4B5563]">
              {item.institution} — {item.period}
            </p>
            <p className="text-sm text-[#4B5563] mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
