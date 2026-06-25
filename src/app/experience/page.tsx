"use client";

import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';

type ExperienceItem = {
  company: string;
  image?: string;
  role: string;
  start: string;
  end: string | null;
  location: string;
  description: string;
  tech: string[];
};

const Experience = () => {
  const { locale, t, tm } = useI18n();

  const formatDate = (date: string | null) => {
    if (!date) return t('experience.present');
    const [year, month, day] = date.split("-").map(Number);
    const localDate = new Date(year, month - 1, day);
    return localDate.toLocaleDateString(locale === 'es' ? 'es-ES' : 'en-US', {
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
      return `+${years} ${t(years === 1 ? 'experience.year.one' : 'experience.year.other')}`;
    }
    let result = "";
    if (years > 0) {
      result += `${years} ${t(years === 1 ? 'experience.year.one' : 'experience.year.other')}`;
    }
    if (months > 0) {
      if (result) result += " ";
      result += `${months} ${t(months === 1 ? 'experience.month.one' : 'experience.month.other')}`;
    }
    return result || t('experience.zeroMonths');
  };

  const experiences = tm<ExperienceItem[]>('experience.items');

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative">
      <div className="mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('experience.titlePrefix')} <span className="text-cyan-500">{t('experience.titleHighlight')}</span></h2>
        <p className="text-zinc-400">{t('experience.subtitle')}</p>
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
                      <Image src={exp.image} alt={`${exp.company} logo`} width={40} height={40} className='min-w-[40px]' />
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
