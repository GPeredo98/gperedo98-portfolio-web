'use client';

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function TransitionProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();

	return (
		<motion.div
			key={pathname}
			initial={{ x: 40, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.25, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	);
}