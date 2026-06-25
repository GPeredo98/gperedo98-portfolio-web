"use client";

import posthog from 'posthog-js';
import { BehanceIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon, YoutubeIcon } from '@/components/CustomIcons';
import { Mail, Send } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n/I18nProvider';

const Contact = () => {
  const pathname = usePathname();
  const { t } = useI18n();

  const socialLinks = [
    {
      name: t('contact.social.linkedin'),
      icon: <LinkedInIcon size={20} />,
      url: 'https://linkedin.com/in/gperedo98',
      color: 'hover:text-blue-400'
    },
    {
      name: t('contact.social.github'),
      icon: <GitHubIcon size={20} />,
      url: 'https://github.com/GPeredo98',
      color: 'hover:text-white'
    },
    {
      name: t('contact.social.behance'),
      icon: <BehanceIcon size={20} />,
      url: 'https://www.behance.net/gabrielperedo1',
      color: 'hover:text-purple-500'
    },
    {
      name: t('contact.social.youtube'),
      icon: <YoutubeIcon size={20} />,
      url: 'https://www.youtube.com/@GabrielPeredo',
      color: 'hover:text-red-500'
    },
    {
      name: t('contact.social.email'),
      icon: <Mail size={20} />,
      url: 'mailto:gabriel.peredo.98@gmail.com',
      color: 'hover:text-cyan-400'
    }
  ];

  const trackContactLinkClick = (label: string, href: string, category: 'social' | 'direct') => {
    posthog.capture('contact_link_clicked', {
      label,
      href,
      category,
      current_path: pathname,
    });
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-5 md:p-16 overflow-hidden relative">

        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-7 md:gap-12 items-center">

          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t('contact.titleLine1')} <br />
              <span className="text-zinc-500">{t('contact.titleLine2')}</span>
            </h2>
            <p className="hidden md:block text-zinc-400 text-lg mb-8 max-w-md">
              {t('contact.description')}
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackContactLinkClick(link.name, link.url, 'social')}
                  className={`p-4 bg-zinc-950 border border-zinc-800 rounded-2xl text-zinc-500 transition-all duration-300 ${link.color} hover:border-zinc-700 hover:-translate-y-1`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-end">
            <div className="w-full max-w-sm bg-zinc-950/50 border border-zinc-800 p-8 rounded-3xl text-center">
              <div className="inline-flex p-4 rounded-2xl bg-green-500/10 text-green-500 mb-6">
                <WhatsAppIcon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{t('contact.directTitle')}</h3>
              <p className="text-zinc-500 text-sm mb-8">
                {t('contact.directDescription')}
              </p>

              <a
                href="https://wa.me/59169433575"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackContactLinkClick(t('contact.sendMessage'), 'https://wa.me/59169433575', 'direct')}
                className="group flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              >
                {t('contact.sendMessage')}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-5 md:mt-20 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-mono">
          <p>{t('contact.footer.copyright')}</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              {t('contact.footer.builtWith')} <span className="text-cyan-500">NEXT.JS</span>
            </span>
            <span className="flex items-center gap-1">
              {t('contact.footer.designedIn')} <span className="text-purple-500">{t('contact.footer.country')}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;