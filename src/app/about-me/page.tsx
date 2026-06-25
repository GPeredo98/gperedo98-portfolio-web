"use client";

import { GraduationCap, Award, Heart, Trophy, Zap } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';

type EducationItem = {
  title: string;
  institution: string;
};

type HobbyItem = {
  title: string;
  description: string;
};

const AboutMe = () => {
  const { t, tm } = useI18n();
  const courses = tm<string[]>('about.continuousLearning.courses');
  const educationItems = tm<EducationItem[]>('about.education.items');
  const hobbies = tm<HobbyItem[]>('about.beyondTerminal.hobbies');

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        <div className="md:col-span-8 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-30 group-hover:rotate-8 transition-transform">
            <Image src="/my-picture.png" alt="Profile Picture" width={200} height={200} className="rounded-full" />
          </div>
          
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-cyan-500" /> {t('about.title')}
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed max-w-2xl">
            <p>
              {t('about.paragraph1')}
            </p>
            <p>
              {t('about.paragraph2')}
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 p-8 rounded-3xl">
          <GraduationCap className="text-blue-400 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">{t('about.education.title')}</h3>
          <div className="space-y-4">
            {educationItems.map((item, index) => (
              <div key={item.title}>
                <p className="text-white font-semibold text-sm">{item.title}</p>
                <p className="text-zinc-400 text-xs">{item.institution}</p>
                {index < educationItems.length - 1 ? <div className="h-px bg-zinc-800 mt-4" /> : null}
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-4 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl">
          <Award className="text-cyan-500 mb-4" size={32} />
          <h3 className="text-xl font-bold text-white mb-4">{t('about.continuousLearning.title')}</h3>
          <div className="flex flex-wrap gap-2">
            {courses.map((course) => (
              <span key={course} className="text-[10px] px-2 py-1 bg-zinc-950 border border-zinc-800 rounded-md text-zinc-500 font-mono">
                {course}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-8 bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl relative overflow-hidden">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Heart className="text-pink-500" size={20} /> {t('about.beyondTerminal.title')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {hobbies.map((hobby) => (
              <div key={hobby.title} className="space-y-2">
                <div className="text-2xl font-bold text-white">{hobby.title}</div>
                <p className="text-xs text-zinc-500">{hobby.description}</p>
              </div>
            ))}
          </div>
          
          <div className="absolute -bottom-6 -right-6 opacity-5 rotate-12">
            <Trophy size={150} />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;