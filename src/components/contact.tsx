import { Mail, Linkedin, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-8">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="w-6 h-6 text-[#2563EB]" />
        <h2 className="text-3xl text-[#1A1A1D]">Contact</h2>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#1F3A5F]">
        <p className="text-[#4B5563] mb-8">
          Intéressé·e par une collaboration ou un poste en full remote ? N&apos;hésitez pas à me
          contacter, je vous répondrai avec plaisir.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-3 text-[#111827]">
            <div className="bg-[#2563EB] p-3 rounded-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-[#6B7280]">Email</p>
              <a href="mailto:alexia.menier.83@gmail.com" className="hover:underline">
                alexia.menier.83@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#111827]">
            <div className="bg-[#2563EB] p-3 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-[#6B7280]">Téléphone</p>
              <a href="tel:+33615844742" className="hover:underline">
                06 15 84 47 42
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#111827]">
            <div className="bg-[#2563EB] p-3 rounded-lg">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-[#6B7280]">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/alexia-menier-0501"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @alexia-menier-0501
              </a>
            </div>
          </div>

          <div className="flex items-center gap-3 text-[#111827]">
            <div className="bg-[#2563EB] p-3 rounded-lg">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm text-[#6B7280]">Localisation</p>
              <p>Fréjus, France (déménagement prévu vers Chinon)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
