import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';

const Experience = () => {

  const formatDate = (date: string | null) => {
    if (!date) return "Present";
    const [year, month, day] = date.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);
    return localDate.toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const getDuration = (start: string, end: string | null) => {
    const startDate = new Date(start);
    const endDate = end ? new Date(end) : new Date();
    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    const isCurrent = !end;
    if (isCurrent) {
      return `+${years} year${years !== 1 ? 's' : ''}`;
    }
    let result = "";
    if (years > 0) {
      result += `${years} year${years !== 1 ? 's' : ''}`;
    }
    if (months > 0) {
      if (result) result += " ";
      result += `${months} month${months !== 1 ? 's' : ''}`;
    }
    return result || "0 months";
  };

  const experiences = [
    {
      company: "Overscope SRL",
      image: "/companies/overscope.png",
      role: "Software Architecture & Engineering Consultant",
      start: "2023-10-01",
      end: null,
      location: "Hybrid / Bolivia",
      description: "Consultoria en implementación de arquitecturas modernas y optimización de flujos de trabajo en equipos distribuidos.",
      tech: ["Angular", "NestJS", "TypeScript", "PostgreSQL", "Docker", "CI/CD", "Ionic"]
    },
    {
      company: "Digital Harbor Inc.",
      image: "/companies/dh.png",
      role: "Full-Stack Developer",
      start: "2023-05-01",
      end: null,
      location: "Remote / International",
      description: "Desarrollo de soluciones escalables para Social Text y Yedy.",
      tech: ["Angular", "TypeScript", "NgRX", "SCSS", "Figma"]
    },
    {
      company: "Banco Fassil S.A.",
      image: "/companies/fassil.png",
      role: "Software Engineer",
      start: "2021-06-01",
      end: "2023-05-02",
      location: "Santa Cruz, Bolivia",
      description: "Desarrollo del proyecto 'Gestor Digital' y creación del 'Pionus UI Kit', estandarizando la interfaz de usuario para toda la banca digital.",
      tech: ["Angular", "RxJS", "Angular Material", "Design Systems", "UI/UX"]
    },
    {
      company: "Clan Bolivia",
      image: "/companies/clan.png",
      role: "Full-Stack Developer",
      start: "2021-04-01",
      end: "2021-08-02",
      location: "Remote / Bolivia",
      description: "Contribución al proyecto 'TuPasaje.bo'. Creación de aplicaciones web y plataformas administrativas de alta demanda.",
      tech: ["Angular", "PHP", "MySQL", "Nebula UI"]
    },
    {
      company: "QSM Solutions",
      image: "/companies/qsm.png",
      role: "Software Developer, Tech Lead",
      start: "2020-01-01",
      end: "2021-06-02",
      location: "Santa Cruz, Bolivia",
      description: "Liderazgo en el desarrollo de soluciones personalizadas y conceptualización de plataformas como Dogfy y Ventu.",
      tech: ["Angular", "Vue.js", "jQuery", "MySQL", "FastAPI", "Flask", "Ionic", "Python", "Figma"]
    },
    {
      company: "Freelancer",
      role: "Graphic Designer",
      start: "2019-05-01",
      end: "2021-04-02",
      location: "Santa Cruz, Bolivia",
      description: "Primeros pasos profesionales enfocados en creación de branding corporativo y producción audiovisual.",
      tech: ["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere Pro"]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional <span className="text-cyan-500">Journey</span></h2>
        <p className="text-zinc-400">Mi camino evolucionando ideas en productos digitales robustos.</p>
      </div>

      <div className="relative border-l border-zinc-800 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-16 ml-8 relative group">
            <div className="absolute -left-[41px] top-0">
              <div className="relative flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-zinc-950 border-2 border-zinc-700 group-hover:border-cyan-500 transition-colors z-10" />
                <div className="absolute h-8 w-8 rounded-full bg-cyan-500/20 animate-pulse group-hover:bg-cyan-500/40" />
              </div>
            </div>

            <div className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl hover:bg-zinc-900/50 hover:border-zinc-700 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div className='flex items-center gap-4'>
                  {exp.image && (
                    <div>
                      <Image src={exp.image} alt={`${exp.company} logo`} width={40} height={40} />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-500 font-medium">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:items-end text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <div className="text-sm text-zinc-400">
                      {formatDate(exp.start)} - {formatDate(exp.end)} (
                      {getDuration(exp.start, exp.end)})
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-3 py-1 bg-zinc-950 text-zinc-500 border border-zinc-800 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
