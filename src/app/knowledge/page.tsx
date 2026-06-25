"use client";

import { AngularIcon, AppStoreIcon, BitbucketIcon, BootstrapIcon, CapacitorIcon, CloudflareIcon, DigitalOceanIcon, DockerIcon, DropboxIcon, FastAPIIcon, FigmaIcon, FlaskIcon, GitIcon, GoogleCloudIcon, IonicIcon, MySQLIcon, NestJSIcon, NextJSIcon, NGINXIcon, NgRXIcon, NodeJSIcon, PlayStoreIcon, PostgreSQLIcon, PostHogIcon, PrimeNGIcon, PythonIcon, ReactNativeIcon, RenderIcon, SCSSIcon, SQLAlchemyIcon, SQLiteIcon, TailwindCSSIcon, TypeORMIcon, TypeScriptIcon, VercelIcon } from '@/components/CustomIcons';
import { 
  Layout, Server, Smartphone, Globe, 
  Layers, Cloud, 
  Code2Icon,
} from 'lucide-react';
import { useI18n } from '@/i18n/I18nProvider';

const Knowledge = () => {
  const { t, tm } = useI18n();
  const iconSize = 18;
  const badges = tm<string[]>('knowledge.badges');
  const techStack = [
    {
      category: t('knowledge.categories.frontend'),
      icon: <Layout className="text-cyan-400" />,
      skills: [
        { name: "Angular", icon: <AngularIcon size={iconSize} />,  },
        { name: "React", icon: <ReactNativeIcon size={iconSize} />,  },
        { name: "TypeScript", icon: <TypeScriptIcon size={iconSize} />,  },
        { name: "Next.js", icon: <NextJSIcon size={iconSize} />,  },
        { name: "Tailwind CSS", icon: <TailwindCSSIcon size={iconSize} />,  },
        { name: "NgRX", icon: <NgRXIcon size={iconSize} />,  },
        { name: "SCSS", icon: <SCSSIcon size={iconSize} />,  },
        { name: "PrimeNG", icon: <PrimeNGIcon size={iconSize} />,  },
        { name: "Bootstrap", icon: <BootstrapIcon size={iconSize} />,  },
        { name: "UI/UX Design", icon: <Code2Icon size={iconSize} />,  },
        { name: "Figma", icon: <FigmaIcon size={iconSize} />,  },
      ],
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      category: t('knowledge.categories.backend'),
      icon: <Server className="text-purple-400" />,
      skills: [
        { name: "NestJS", icon: <NestJSIcon size={iconSize} />,  },
        { name: "Node.js", icon: <NodeJSIcon size={iconSize} />,  },
        { name: "RESTful APIs", icon: <Code2Icon size={iconSize} />,  },
        { name: "TypeORM", icon: <TypeORMIcon size={iconSize} />,  },
        { name: "FastAPI", icon: <FastAPIIcon size={iconSize} />,  },
        { name: "Flask", icon: <FlaskIcon size={iconSize} />,  },
        { name: "SQLAlchemy", icon: <SQLAlchemyIcon size={iconSize} />,  },
        { name: "Python", icon: <PythonIcon size={iconSize} />,  },
        { name: "PostgreSQL", icon: <PostgreSQLIcon size={iconSize} />,  },
        { name: "MySQL", icon: <MySQLIcon size={iconSize} />,  },
      ],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      category: t('knowledge.categories.mobile'),
      icon: <Smartphone className="text-amber-400" />,
      skills: [
        { name: "React Native", icon: <ReactNativeIcon size={iconSize} />,  },
        { name: "Ionic", icon: <IonicIcon size={iconSize} />,  },
        { name: "Capacitor", icon: <CapacitorIcon size={iconSize} />,  },
        { name: "Android Deploy", icon: <PlayStoreIcon size={iconSize} />,  },
        { name: "iOS Deploy", icon: <AppStoreIcon size={iconSize} />,  },
        { name: "SQLite", icon: <SQLiteIcon size={iconSize} />,  },
        { name: "Mobile UI Patterns", icon: <Code2Icon size={iconSize} />,  },
      ],
      color: "from-amber-500/20 to-orange-500/20"
    },
    {
      category: t('knowledge.categories.cloud'),
      icon: <Cloud className="text-emerald-400" />,
      skills: [
        { name: "Docker", icon: <DockerIcon size={iconSize} />,  },
        { name: "Render", icon: <RenderIcon size={iconSize} />,  },
        { name: "Vercel", icon: <VercelIcon size={iconSize} />,  },
        { name: "DigitalOcean", icon: <DigitalOceanIcon size={iconSize} />,  },
        { name: "Google Cloud Platform", icon: <GoogleCloudIcon size={iconSize} />,  },
        { name: "CI/CD Bitbucket", icon: <BitbucketIcon size={iconSize} />,  },
        { name: "Git Flow", icon: <GitIcon size={iconSize} />,  },
        { name: "Dropbox", icon: <DropboxIcon size={iconSize} />,  },
        { name: "PostHog", icon: <PostHogIcon size={iconSize} />,  },
        { name: "Cloudflare", icon: <CloudflareIcon size={iconSize} />,  },
        { name: "NGINX", icon: <NGINXIcon size={iconSize} />,  },
      ],
      color: "from-emerald-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="knowledge" className="py-24 px-6 max-w-7xl mx-auto relative">
      <div className="mb-16 text-center">
        <h2 className="text-sm font-mono text-cyan-500 tracking-widest uppercase mb-4">
          {t('knowledge.eyebrow')}
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-white">
          {t('knowledge.titlePrefix')} <span className="text-zinc-500">{t('knowledge.titleHighlight')}</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map((stack, index) => (
          <div 
            key={index}
            className={`relative group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all hover:border-zinc-700`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${stack.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-zinc-800 border border-zinc-700">
                  {stack.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{stack.category}</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {stack.skills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="flex gap-2 items-center px-4 py-2 rounded-xl bg-zinc-950/50 border border-zinc-800 text-zinc-400 text-sm font-medium hover:text-cyan-400 hover:border-cyan-500/50 transition-all cursor-default"
                  >
                    {skill.icon} {skill.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute -bottom-2 -right-2 text-zinc-800/20 group-hover:text-cyan-500/10 transition-colors">
              <Layers size={120} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 md:mt-12 p-8 rounded-3xl border border-dashed border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 bg-zinc-900/20">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
            <Globe size={24} />
          </div>
          <div>
            <p className="text-white font-semibold">{t('knowledge.strategicTitle')}</p>
            <p className="text-zinc-500 text-sm">{t('knowledge.strategicSubtitle')}</p>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          {badges.map((badge) => (
            <span key={badge} className="text-xs font-mono text-zinc-500 px-3 py-1 border border-zinc-800 rounded-lg">{badge}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Knowledge;