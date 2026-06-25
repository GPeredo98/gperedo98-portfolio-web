'use client';

import posthog from 'posthog-js';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/i18n/I18nProvider';

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { locale, setLocale, t } = useI18n();

	const languageOptions = [
		{ value: 'en' as const, label: 'EN', flag: '/flags/usa-flag.svg', name: t('common.languages.en') },
		{ value: 'es' as const, label: 'ES', flag: '/flags/spain-flag.svg', name: t('common.languages.es') },
	];

	const currentLanguage = languageOptions.find((option) => option.value === locale) ?? languageOptions[0];

	const navItems = [
		{ name: t('navbar.items.knowledge'), href: '/knowledge' },
		{ name: t('navbar.items.projects'), href: '/projects' },
		{ name: t('navbar.items.experience'), href: '/experience' },
		{ name: t('navbar.items.aboutMe'), href: '/about-me' },
		{ name: t('navbar.items.contact'), href: '/contact' },
	];

	const isActive = (href: string) => {
		if (href === '/') return pathname === '/';
		return pathname.startsWith(href);
	};

	const trackNavbarClick = (
		label: string,
		href: string,
		location: 'desktop' | 'mobile' | 'brand' | 'cta'
	) => {
		posthog.capture('navbar_link_clicked', {
			label,
			href,
			location,
			current_path: pathname,
		});
	};

	return (
		<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
			<div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 px-4 md:px-4 py-3 rounded-full flex items-center justify-between shadow-2xl relative">
				<div className='md:hidden w-6 h-6 flex ml-2 items-center justify-center'>
					<button
						aria-label={t('navbar.mobileMenuAria')}
						onClick={() => {
							const nextOpenState = !isOpen;

							posthog.capture('navbar_menu_toggled', {
								state: nextOpenState ? 'open' : 'closed',
								current_path: pathname,
							});

							setIsOpen(nextOpenState);
						}}
						className="flex flex-col justify-center gap-1 z-50"
					>
						<span className={`block h-[2px] w-5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
						<span className={`block h-[2px] w-5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
						<span className={`block h-[2px] w-5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
					</button>
				</div>

				<Link
					href="/"
					onClick={() => trackNavbarClick(t('navbar.logoAlt'), '/', 'brand')}
					className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
				>
					<Image src="/main-logo.png" alt={t('navbar.logoAlt')} width={62} height={32} />
				</Link>

				<ul className="hidden md:flex gap-8">
					{navItems.map((item) => {
						const active = isActive(item.href);

						return (
							<li key={item.name}>
								<Link
									href={item.href}
									onClick={() => trackNavbarClick(item.name, item.href, 'desktop')}
									className={`relative text-sm font-medium transition-colors ${
										active
											? 'text-white'
											: 'text-zinc-400 hover:text-white'
									}`}
								>
									{item.name}

									<span
										className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-purple-500 origin-left transition-transform duration-300 ${
											active ? 'scale-x-100' : 'scale-x-0'
										}`}
									/>
								</Link>
							</li>
						);
					})}
				</ul>

				<div className="flex items-center gap-2">
					<Link
						href="https://wa.me/59169433575"
						target="_blank"
						onClick={() =>
							trackNavbarClick(t('navbar.cta'), 'https://wa.me/59169433575', 'cta')
						}
						className="hidden md:inline-flex bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all"
					>
						{t('navbar.cta')}
					</Link>

					<div className="relative">
						<button
							type="button"
							aria-label={t('navbar.languageAria')}
							aria-haspopup="menu"
							aria-expanded={isLanguageOpen}
							onClick={() => setIsLanguageOpen(!isLanguageOpen)}
							className="inline-flex items-center gap-2 bg-zinc-900 text-white border border-zinc-700 rounded-full text-xs md:text-sm px-2 py-2 md:px-3 font-bold hover:border-zinc-500 transition-colors"
						>
							<Image src={currentLanguage.flag} alt={currentLanguage.name} width={18} height={18} className="rounded-full" />
							<span>{currentLanguage.label}</span>
						</button>

						{isLanguageOpen ? (
							<div className="absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-2xl z-50">
								{languageOptions.map((option) => (
									<button
										key={option.value}
										type="button"
										onClick={() => {
											setLocale(option.value);
											setIsLanguageOpen(false);
											posthog.capture('language_changed', {
												locale: option.value,
												current_path: pathname,
											});
										}}
										className={`flex w-full items-center gap-3 px-3 py-2 text-left text-sm transition-colors hover:bg-zinc-900 ${
											locale === option.value ? 'text-white' : 'text-zinc-400'
										}`}
									>
										<Image src={option.flag} alt={option.name} width={18} height={18} className="rounded-full" />
										<span>{option.label}</span>
										<span className="text-xs text-zinc-500">{option.name}</span>
									</button>
								))}
							</div>
						) : null}
					</div>
				</div>
			</div>

			<div
				className={`md:hidden mt-3 overflow-hidden transition-all duration-300 ${
					isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
				}`}
			>
				<div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl p-6 flex flex-col gap-4">

					{navItems.map((item) => {
						const active = isActive(item.href);

						return (
							<Link
								key={item.name}
								href={item.href}
								onClick={() => {
									trackNavbarClick(item.name, item.href, 'mobile');
									setIsOpen(false);
								}}
								className={`text-base font-medium transition-colors ${
									active
										? 'text-white'
										: 'text-zinc-400 hover:text-white'
								}`}
							>
								{item.name}
							</Link>
						);
					})}

					<Link
						href="https://wa.me/59169433575"
						target="_blank"
						onClick={() => {
							trackNavbarClick(t('navbar.cta'), 'https://wa.me/59169433575', 'cta');
							setIsOpen(false);
						}}
						className="mt-2 bg-white text-black px-4 py-3 rounded-xl text-center text-sm font-bold hover:bg-green-500 hover:text-white transition-all"
					>
						{t('navbar.cta')}
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;