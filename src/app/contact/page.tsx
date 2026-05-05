import { BehanceIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon, YoutubeIcon } from '@/components/CustomIcons';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { 
      name: 'LinkedIn', 
      icon: <LinkedInIcon size={20} />, 
      url: 'https://linkedin.com/in/gperedo98',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'GitHub', 
      icon: <GitHubIcon size={20} />, 
      url: 'https://github.com/GPeredo98', 
      color: 'hover:text-white'
    },
    { 
      name: 'Behance', 
      icon: <BehanceIcon size={20} />, 
      url: 'https://www.behance.net/gabrielperedo1', 
      color: 'hover:text-purple-500'
    },
    { 
      name: 'Youtube', 
      icon: <YoutubeIcon size={20} />, 
      url: 'https://www.youtube.com/@GabrielPeredo', 
      color: 'hover:text-red-500'
    },
    { 
      name: 'Email', 
      icon: <Mail size={20} />, 
      url: 'mailto:gabriel.peredo.98@gmail.com', 
      color: 'hover:text-cyan-400'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <div className="bg-zinc-900/40 border border-zinc-800 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
        
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Lets build <br />
              <span className="text-zinc-500">something great.</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-8 max-w-md">
              ¿Tienes un proyecto en mente o buscas un perfil Senior para tu equipo? 
              Hablemos sobre cómo puedo aportar valor.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
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
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-zinc-500 text-sm mb-8">
                Respuesta inmediata para consultas urgentes o propuestas directas.
              </p>
              
              <a
                href="https://wa.me/59169433575"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 w-full py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              >
                Send a Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-xs font-mono">
          <p>© 2026 GABRIEL PEREDO — FULL STACK DEVELOPER</p>
          <div className="flex gap-6">
            <span className="flex items-center gap-1">
              BUILT WITH <span className="text-cyan-500">NEXT.JS</span>
            </span>
            <span className="flex items-center gap-1">
              DESIGNED IN <span className="text-purple-500">BOLIVIA</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;