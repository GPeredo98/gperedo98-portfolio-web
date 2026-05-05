import { GitHubIcon } from '@/components/CustomIcons';
import { ExternalLink, FolderLock, Eye, Globe, User } from 'lucide-react';
import Image from 'next/image';

const ProjectsSection = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const projects: any[] = [
		{
			title: "Mencargo",
			company: "Overscope SRL",
			description: "Sistema integral de gestión para condominios y seguridad.",
			mainImage: "/projects/mencargo-main.png",
			internalImages: ["/projects/mencargo-screenshot-1.png", "/projects/mencargo-screenshot-2.png", "/projects/mencargo-screenshot-3.png"],
			tags: ["TypeScript", "Angular", "NestJS", "PostgreSQL", "Ionic", "PrimeNG", "Docker", "Figma", "Multitenancy"],
			type: 'private',
			links: { preview: "https://mencargo.net" }
		},
		{
			title: "AidGlobe",
			company: "Personal Project",
			description: "Plataforma global para la gestión de voluntariado y ayuda social.",
			mainImage: "/projects/aidglobe-main.jpg",
			internalImages: ["/projects/aidglobe-screenshot-1.png", "/projects/aidglobe-screenshot-2.png", "/projects/aidglobe-screenshot-3.png"],
			tags: ["Next.js", "React", "TypeScript", "Tailwind", "ShadcnUI", "NestJS", "PostgreSQL", "Figma"],
			type: 'personal',
			links: {
				preview: "https://aidglobe.org",
				github: "https://github.com/GPeredo98/aidglobe-platform"
			}
		},
		{
			title: "Yedy",
			company: "Digital Harbor Inc.",
			description: "Herramienta de gestión de proyectos orientada a un enfoque social de colaboración en cada interacción.",
			mainImage: "/projects/yedy-main.png",
			internalImages: ["/projects/yedy-screenshot-1.png", "/projects/yedy-screenshot-2.png", "/projects/yedy-screenshot-3.png"],
			tags: ["Angular", "NgRX", "TypeScript", "SCSS", "Figma"],
			type: 'private',
			links: { preview: "https://digitalharborbolivia.com" }
		},
		{
			title: "Social Text",
			company: "Digital Harbor Inc.",
			description: "Procesador de texto con IA para crear texto enriquecido.",
			mainImage: "/projects/social-text-main.png",
			internalImages: ["/projects/social-text-dash.jpg", "/projects/social-text-app.jpg"],
			tags: ["TypeScript", "Figma"],
			type: 'private',
			links: { preview: "https://digitalharborbolivia.com" }
		},
		{
			title: "Lluvia de Colores",
			company: "Personal Project",
			description: "Plataforma de estimulación infantil y seguimiento de desarrollo para padres y profesionales.",
			mainImage: "/projects/lluvia-de-colores-mainn.png",
			internalImages: ["/projects/lluvia-de-colores-screenshot-1.png", "/projects/lluvia-de-colores-screenshot-2.png", "/projects/lluvia-de-colores-screenshot-3.png"],
			tags: ["Next.js", "React", "TypeScript", "Tailwind", "NestJS", "PostgreSQL"],
			type: 'personal',
			links: {
				preview: "https://lluviadecolores.vercel.app",
				github: "https://github.com/GPeredo98/lluvia-de-colores-platform"
			}
		},
		{
			title: "Ventu",
			company: "QSM Solutions",
			description: "Sistema de gestión de ingresos e invitados para eventos y organizadores.",
			mainImage: "/projects/ventu-main.png",
			internalImages: ["/projects/ventu-screenshot-1.png", "/projects/ventu-screenshot-2.png", "/projects/ventu-screenshot-3.png", "/projects/ventu-screenshot-4.png"],
			tags: ["Angular", "PrimeNG", "Ionic", "MySQL", "Python", "FastAPI", "Figma"],
			type: 'private',
			links: { preview: "https://ventu.vip" }
		},
		{
			title: "Dogfy",
			company: "QSM Solutions",
			description: "E-commerce para la venta de productos y servicios para mascotas.",
			mainImage: "/projects/dogfy-main.png",
			internalImages: ["/projects/dogfy-screenshot-1.png", "/projects/dogfy-screenshot-2.png", "/projects/dogfy-screenshot-3.png", "/projects/dogfy-screenshot-4.png"],
			tags: ["Angular", "PrimeNG", "Ionic", "MySQL", "Python", "FastAPI"],
			type: 'private',
			links: { preview: "https://dogfy.app" }
		},
		{
			title: "TuPasaje.bo",
			company: "Clan Bolivia",
			description: "Plataforma web de venta de pasajes y servicios de viaje.",
			mainImage: "/projects/tupasaje-main.png",
			internalImages: ["/projects/tupasaje-screenshot-1.png", "/projects/tupasaje-screenshot-2.png", "/projects/tupasaje-screenshot-3.png"],
			tags: ["Angular", "PrimeNG", "Nebula UI", "PHP", "MySQL"],
			type: 'private',
			links: { preview: "https://tupasaje.bo" }
		},
		{
			title: "Gestor Digital",
			company: "Banco Fassil S.A.",
			description: "Sistema de gestión del proceso crediticio en microcréditos.",
			mainImage: "/projects/gestor-digital-mainn.png",
			internalImages: ["/projects/gedi-screenshot-1.png", "/projects/gedi-screenshot-2.png", "/projects/gedi-screenshot-3.png"],
			tags: ["Angular", "Angular Material", "SCSS", "Figma"],
			type: 'private',
			links: { preview: "https://fassil.com.bo" }
		},
		{
			title: "Microcréditos Landing Page",
			company: "Banco Fassil S.A.",
			description: "Página comercial para publicitar el producto de microcréditos.",
			mainImage: "/projects/microcreditos-main.png",
			internalImages: ["/projects/microcreditos-screenshot-1.png", "/projects/microcreditos-screenshot-2.png", "/projects/microcreditos-screenshot-3.png"],
			tags: ["Angular", "Angular Material", "SCSS", "Figma"],
			type: 'private',
			links: { preview: "https://fassil.com.bo" }
		},
		{
			title: "Pionus UI Kit",
			company: "Banco Fassil S.A.",
			description: "Librería de componentes UI reutilizables en herramientas del banco.",
			mainImage: "/projects/pionus-main.png",
			internalImages: ["/projects/pionus-screenshot-1.png", "/projects/pionus-screenshot-2.png", "/projects/pionus-screenshot-3.png"],
			tags: ["Angular", "Angular Material", "SCSS", "Figma"],
			type: 'private',
			links: { preview: "https://fassil.com.bo" }
		},
		{
			title: "Personal Portfolio",
			company: "Personal Project",
			description: "Portafolio personal que muestra mis proyectos y experiencia.",
			mainImage: "/projects/portfolio-main.png",
			internalImages: ["/projects/portfolio-screenshot-1.png", "/projects/portfolio-screenshot-2.png"],
			tags: ["Next.js", "React", "TypeScript", "Tailwind"],
			type: 'personal',
			links: {
				preview: "https://gperedo98.vercel.app",
				github: "https://github.com/GPeredo98/gperedo98-portfolio"
			}
		},
	];

	return (
		<section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
				<div>
					<h2 className="text-4xl font-bold mb-4">Featured Work</h2>
					<p className="text-zinc-400 max-w-xl">
						A collection of enterprise solutions and personal experiments
						built with precision and scalability in mind.
					</p>
				</div>
				<div className="flex gap-2">
					<span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
						{projects.length} Total Projects
					</span>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
				{projects.map((project, index) => (
					<div
						key={index}
						className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500"
					>
						<div className="relative h-52 w-full overflow-hidden">
							<Image
								src={project.mainImage}
								alt={project.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-110"
							/>

							<div className="absolute top-4 left-4">
								{project.type === 'personal' ? (
									<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
										<User size={12} /> Personal
									</span>
								) : (
									<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-bold uppercase tracking-wider">
										<FolderLock size={12} /> Enterprise
									</span>
								)}
							</div>
						</div>

						<div className="p-4">
							<div className="flex justify-between items-start mb-4">
								<div>
									{project.company && (
										<span
											className={`text-xs font-mono mb-1 block ${project.type === 'private'
												? 'text-cyan-500'
												: 'text-amber-500'
												}`}
										>
											{project.company}
										</span>
									)}
									<h3 className="text-2xl font-bold text-white">{project.title}</h3>
								</div>

								<div className="flex gap-3">
									{project.links.github && (
										<a href={project.links.github} target="_blank" className="text-zinc-400 hover:text-white transition-colors">
											<GitHubIcon size={20} />
										</a>
									)}
									{project.links.preview && (
										<a href={project.links.preview} target="_blank" className="text-zinc-400 hover:text-cyan-400 transition-colors">
											<Globe size={20} />
										</a>
									)}
								</div>
							</div>

							<p className="text-zinc-400 text-sm leading-relaxed mb-6">
								{project.description}
							</p>

							<div className="flex flex-wrap gap-2 mb-4">
								{project.tags.map((tag: string) => (
									<span key={tag} className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50">
										{tag}
									</span>
								))}
							</div>

							<div className="flex gap-3 pt-4 border-t border-zinc-800/50">
								<span className="text-[10px] text-zinc-500 uppercase font-bold self-center mr-2">Inside:</span>
								{project.internalImages.map((img: string, i: number) => (
									<div key={i} className="relative h-12 w-20 rounded-lg overflow-hidden border border-zinc-700 transition-all cursor-pointer">
										<Image src={img} alt="Internal screenshot" fill className="object-cover" />
									</div>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProjectsSection;
