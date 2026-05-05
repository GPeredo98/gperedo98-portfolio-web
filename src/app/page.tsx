import { MapPinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const getYearsOfExperience = () => {
    const startDate = new Date(2020, 0, 6);
    const today = new Date();

    let years = today.getFullYear() - startDate.getFullYear();

    const hasHadAnniversary =
      today.getMonth() > startDate.getMonth() ||
      (today.getMonth() === startDate.getMonth() &&
        today.getDate() >= startDate.getDate());

    if (!hasHadAnniversary) {
      years--;
    }

    return years;
  };

  return (
    <section className="relative pt-24 md:pt-32 pb-10 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
      <div className="flex flex-col-reverse md:flex-row md:flex-row gap-5 md:gap-15">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 text-xs mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for new challenges
          </div>

          <h1 className="text-3xl md:text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Architecting the <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Digital Future
            </span>
          </h1>

          <p className="max-w-2xl text-zinc-400 text-lg md:text-xl mb-10 leading-relaxed">
            Full-Stack Developer specialized in UI/UX and building high-performance
            applications with Angular, React, NestJS, and clean code.
          </p>

          <p className="text-zinc-500 text-lg font-mono mb-10">#FromBoliviaWithLove</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects">
              <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform cursor-pointer">
                View My Projects
              </button>
            </Link>
            <a href="/files/Gabriel_Peredo_CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold hover:scale-105 rounded-xl hover:bg-zinc-800 transition-all cursor-pointer">
                Download CV
              </button>
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center">
          <Image src={'/main-picture.jpg'} alt="Profile Image" width={400} height={400} className="rounded-full w-40 md:w-100" />
          <span className="hidden md:flex absolute right-45 bottom-65 items-center ml-4 text-zinc-400 bg-zinc-900/50 border border-zinc-800 px-3 py-1 rounded-full">
            <MapPinIcon className="w-4 h-4 mr-2" />
            Santa Cruz, Bolivia
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:mt-20 pt-10 md:border-t border-zinc-800/50 w-full">
        <div>
          <div className="text-3xl font-bold">
            +{getYearsOfExperience()} Years
          </div>
          <div className="text-zinc-500 text-sm">Experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold">+12</div>
          <div className="text-zinc-500 text-sm">Projects Developed</div>
        </div>
        <div className="hidden md:block" title="I hope...">
          <div className="text-3xl font-bold">100%</div>
          <div className="text-zinc-500 text-sm">Client Satisfaction</div>
        </div>
      </div>
    </section>
  );
}