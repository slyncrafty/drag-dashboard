import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

type NavbarProps = {
	categories?: string[];
	current?: string;
	setCurrent?: (tag: string) => void;
	showCategories?: boolean;
	dark?: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({
	categories,
	current,
	setCurrent = () => {},
	showCategories = true,
	dark = false,
}) => {
	const textColor = dark ? 'text-gray-100' : 'text-gray-800';
	const bgColor = dark ? 'bg-black' : 'bg-white';
	const contactBtn = dark ? 'dark' : 'ghost';
	return (
		<nav
			className={`flex items-center justify-between px-8 py-4 shadow-sm ${bgColor}`}>
			<div
				className={`font-bold text-lg cursor-pointer hover:text-blue-500 transition-colors ${textColor}`}
				onClick={() => setCurrent('All')}>
				Drag-Dashboard
			</div>

			{showCategories && (
				<div className='flex gap-4'>
					{categories.map((cat) => (
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

			<Button variant={contactBtn} size='md' className='border-gray-600 '>
				{/* text-gray-200 hover:bg-gray-800 hover:text-white */}
				<a href='mailto:you@example.com'>Contact</a>
			</Button>
		</nav>
	);
};
