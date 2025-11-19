import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <User className="w-6 h-6 text-[#2563EB]" />
        <h2 className="text-3xl text-[#1A1A1D]">À propos</h2>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-[#1F3A5F]">
        <p className="text-[#4B5563] leading-relaxed mb-4">
          Développeuse full-stack expérimentée (PHP, JavaScript, SQL), je conçois et maintiens des
          applications métier robustes et intuitives. Habituée à travailler au plus près des équipes
          métiers (ventes, finance, production), je comprends rapidement les enjeux fonctionnels pour
          proposer des solutions pragmatiques.
        </p>
        <p className="text-[#4B5563] leading-relaxed">
          J&apos;accorde une importance particulière à la qualité du code, à la simplicité de
          l&apos;expérience utilisateur et à l&apos;automatisation des tâches répétitives. Mon
          objectif : livrer des outils fiables qui font gagner du temps aux utilisateurs et sécurisent
          la donnée, tout en gardant une communication claire et transparente avec l&apos;équipe.
        </p>
      </div>
    </section>
  );
}
