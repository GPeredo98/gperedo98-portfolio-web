"use client";

import { GitHubIcon } from '@/components/CustomIcons';
import { FolderLock, Globe, User } from 'lucide-react';
import Image from 'next/image';
import { useI18n } from '@/i18n/I18nProvider';

type ProjectItem = {
	title: string;
	company: string;
	description: string;
	mainImage: string;
	internalImages: string[];
	tags: string[];
	type: 'private' | 'personal';
	links: {
		preview?: string;
		github?: string;
	};
};

const ProjectsSection = () => {
	const { t, tm } = useI18n();
	const projects = tm<ProjectItem[]>('projects.items');

	return (
		<section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
			<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
				<div>
					<h2 className="text-4xl font-bold mb-4">{t('projects.title')}</h2>
					<p className="text-zinc-400 max-w-xl">
						{t('projects.subtitle')}
					</p>
				</div>
				<div className="flex gap-2">
					<span className="px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-400">
						{t('projects.totalProjects', { count: projects.length })}
					</span>
				</div>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
				{projects.map((project, index) => (
					<div
						key={index}
						className="group relative bg-zinc-900/40 border border-zinc-800/50 rounded-3xl hover:border-cyan-500/50 transition-all duration-500"
					>
						<div className="relative h-52 w-full overflow-hidden rounded-t-3xl">
							<Image
								src={project.mainImage}
								alt={project.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-110"
							/>

							<div className="absolute top-4 left-4">
								{project.type === 'personal' ? (
									<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-wider">
										<User size={12} /> {t('projects.personal')}
									</span>
								) : (
									<span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-[10px] font-bold uppercase tracking-wider">
										<FolderLock size={12} /> {t('projects.enterprise')}
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
								<span className="text-[10px] text-zinc-500 uppercase font-bold self-center mr-2">{t('projects.insideLabel')}</span>
								{project.internalImages.map((img: string, i: number) => (
									<div key={i} className="relative h-12 w-20 rounded-lg overflow-hidden hover:overflow-visible border border-zinc-700 transition-all cursor-pointer">
										<Image src={img} alt="Internal screenshot" fill className="object-cover hover:object-contain transition-transform duration-300 hover:scale-350 hover:z-10" />
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
