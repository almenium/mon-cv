import { Header } from "./components/header";
import { Navigation } from "./components/navigation";
import { About } from "./components/about";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Education } from "./components/education";
import { Contact } from "./components/contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEEEEE]">
      <Header />
      <Navigation />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-24">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="bg-[#1A1A1D] text-[#EEEEEE] py-8 mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Alexia Ménier. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}