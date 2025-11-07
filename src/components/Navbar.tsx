import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';

type NavbarProps = {
	categories: string[];
	current: string;
	setCurrent: (tag: string) => void;
};

export const Navbar: React.FC<NavbarProps> = ({
	categories,
	current,
	setCurrent,
}) => {
	return (
		<nav className='flex items-center justify-between px-8 py-4 bg-white shadow-sm'>
			<div
				className='font-bold text-lg text-gray-800 cursor-pointer hover:text-blue-500 transition-colors'
				onClick={() => setCurrent('All')}>
				Drag-Dashboard
			</div>

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

			<Button variant='ghost' size='md'>
				Contact
			</Button>
		</nav>
	);
};
