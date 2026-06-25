'use client';

import posthog from 'posthog-js';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	const navItems = [
		{ name: 'Knowledge', href: '/knowledge' },
		{ name: 'Projects', href: '/projects' },
		{ name: 'Experience', href: '/experience' },
		{ name: 'About me', href: '/about-me' },
		{ name: 'Contact', href: '/contact' },
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
			<div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 px-4 md:px-6 py-3 rounded-full flex items-center justify-between shadow-2xl relative">
				<div className='md:hidden w-6 h-6 flex ml-2 items-center justify-center'>
					<button
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
					onClick={() => trackNavbarClick('Logo', '/', 'brand')}
					className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
				>
					<Image src="/main-logo.png" alt="Logo" width={62} height={32} />
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

				<Link
					href="https://wa.me/59169433575"
					target="_blank"
					onClick={() =>
						trackNavbarClick('Lets Talk', 'https://wa.me/59169433575', 'cta')
					}
					className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all"
				>
					Lets Talk
				</Link>
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;