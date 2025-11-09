import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CELL_SIZE, MARGIN } from '../data/data';
import { Button } from './Button';

export type CardType = 'default' | 'horizontal' | 'vertical' | 'about';

export type CardProps = {
	id: string;
	variant: CardType;
	background?: string;
	tags: string[];
	title: string | undefined;
	image?: string;
	content?: string | React.ReactNode;
	showReadMore?: boolean;
	readMoreLink?: string;
	// locked?: boolean;
	// showLock?: boolean;
	// onLockToggle?: () => void;
};

export const Card: React.FC<CardProps> = ({
	id,
	variant,
	background = 'bg-grey-100',
	tags,
	title,
	image,
	content,
	showReadMore,
	readMoreLink,
	// locked = false,
	// showLock = false,
	// onLockToggle,
}) => {
	const isHorizontal = variant === 'horizontal' || variant === 'about';
	const isVertical = variant === 'vertical';

	const style = {
		width: isHorizontal ? CELL_SIZE * 2 + MARGIN : CELL_SIZE,
		height: isVertical ? CELL_SIZE * 2 + MARGIN : CELL_SIZE,
		background,
	};

	return (
		<motion.div
			layout
			className={`rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between ${background}`}
			style={style}
			whileHover={{ scale: 1.02 }}
			transition={{ duration: 0, type: 'spring', stiffness: 300, damping: 20 }}>
			<div className='p-4 flex flex-col gap-2'>
				<h2 className='font-semibold text-lg text-gray-800'>{title}</h2>
				{image && (
					<img
						src={image}
						alt={title}
						className='w-16 h-16 rounded-full object-cover'
					/>
				)}
			</div>

			{content && <div className='p-4 text-gray-600 text-sm'>{content}</div>}

			<div className='flex justify-between items-center px-4 pb-4'>
				{showReadMore && (
					<Link to={readMoreLink || `/content/${encodeURIComponent(id)}`}>
						<Button
							variant='default'
							size='sm'
							className='mt-4 hover:underline bold'>
							Read More
						</Button>
					</Link>
				)}

				{/* {showLock && (
					<Button
						variant='ghost'
						size='sm'
						onClick={(e) => {
							e.stopPropagation();
							onLockToggle?.();
						}}
						className='text-xs px-3 py-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 z-20 pointer-events-auto'>
						{locked ? 'Unlock' : 'Lock'}
					</Button>
				)} */}
			</div>
		</motion.div>
	);
};
