import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { Link } from 'react-router-dom';

type NavbarProps = {
	categories?: string[];
	current?: string;
	setCurrent?: (tag: string) => void;
	showLogo?: boolean;
	showCategories?: boolean;
	dark?: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({
	categories,
	current,
	setCurrent = () => {},
	showLogo = true,
	showCategories = true,
	dark = false,
}) => {
	const textColor = dark ? 'text-gray-100' : ' text-[var(--color-text)]';
	const bgColor = dark ? 'bg-black' : 'bg-[var(--color-bg)]';
	const contactBtn = dark ? 'dark' : 'default';
	return (
		<nav
			className={`flex items-center justify-between px-8 py-4 shadow-sm ${bgColor}`}>
			{showLogo && (
				<div
					className={`font-bold text-lg cursor-pointer hover:text-indigo-500 transition-colors ${textColor}`}
					onClick={() => setCurrent('All')}>
					<Link to='/'>Drag-Dashboard</Link>
				</div>
			)}
			{showCategories && (
				<div className='flex gap-4'>
					{categories &&
						categories.map((cat) => (
							<motion.button
								key={cat}
								onClick={() => setCurrent(cat)}
								whileHover={{ scale: 1.1 }}
								className={`px-4 py-1 rounded-full text-sm font-medium ${
									current === cat
										? 'bg-gray-100 text-gray-700'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}>
								{cat}
							</motion.button>
						))}
				</div>
			)}
			{showLogo && (
				<Button variant={contactBtn} size='lg'>
					<a href='mailto:you@example.com'>Contact</a>
				</Button>
			)}
		</nav>
	);
};
