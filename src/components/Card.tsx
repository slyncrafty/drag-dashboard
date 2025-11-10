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
	title?: string | undefined;
	image?: string;
	content?: string | React.ReactNode;
	showReadMore?: boolean;
	readMoreLink?: string;
	children?: React.ReactNode;
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
	children,
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
			className={`rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-text)]     transition-colors duration-300 hover:bg-[var(--color-card-hover)] ${
				background ? background : ''
			}`}
			style={style}
			whileHover={{ scale: 1.01 }}
			// whileDrag={{ zIndex: 20 }}
			// dragMomentum={false}
			transition={{ duration: 0, type: 'spring', stiffness: 300, damping: 20 }}>
			<div className='p-4 flex flex-col gap-2'>
				<h2 className='font-semibold text-lg'>{title}</h2>
				{image && (
					<img
						src={image}
						alt={title}
						className='w-16 h-16 rounded-full object-cover'
					/>
				)}
			</div>
			<div className='p-4 text-sm'>
				{content && typeof content === 'string' ? (
					<p>{content}</p>
				) : (
					content || children
				)}
			</div>

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
				{/* {children && <div className='mt-4'>{children}</div>} */}
			</div>
		</motion.div>
	);
};
