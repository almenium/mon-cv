import { Code2, Download } from "lucide-react";

export function Header() {
  return (
    <header className="bg-[#1F3A5F] text-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-[#2563EB] p-3 rounded-lg">
            <Code2 className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl sm:text-5xl tracking-wide uppercase">Alexia Ménier</h1>
            <p className="text-xl text-[#E5E7EB] mt-2">
              Développeuse Full-Stack PHP / JavaScript
            </p>
          </div>
        </div>
        <p className="text-[#E5E7EB] max-w-2xl mb-6 leading-relaxed">
          Développeuse full-stack spécialisée dans les applications métier (ventes, finance,
          production), j&apos;allie rigueur technique et compréhension fonctionnelle pour livrer des
          solutions robustes, performantes et simples à utiliser. Je recherche un poste à temps plein
          en télétravail (full remote).
        </p>
        <p className="text-sm text-[#BFDBFE] mb-8">
          Basée à Fréjus, déménagement prévu vers Chinon — disponible pour des projets web et SaaS.
        </p>
        <a
          href="/cv-alexia-menier.pdf"
          className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#1D4ED8] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="w-5 h-5" />
          Télécharger mon CV (PDF)
        </a>
      </div>
    </header>
  );
}
