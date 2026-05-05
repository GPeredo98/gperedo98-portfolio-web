'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
	const pathname = usePathname();

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

	return (
		<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
			<div className="bg-zinc-900/70 backdrop-blur-md border border-zinc-800 px-6 py-3 rounded-full flex items-center justify-between shadow-2xl">

				<Link
					href="/"
					className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
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
									aria-current={active ? 'page' : undefined}
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
					className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-green-500 hover:text-white transition-all"
				>
					Lets Talk
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;