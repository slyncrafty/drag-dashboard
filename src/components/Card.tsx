import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export type CardType = 'base' | 'horizontal' | 'vertical' | 'large';

// export type CardProps = {
// 	id: string;
// 	variant: CardType;
// 	background?: string;
// 	tags: string[];
// 	title?: string | undefined;
// 	image?: string;
// 	content?: string | React.ReactNode;
// 	showReadMore?: boolean;
// 	readMoreLink?: string;
// 	children?: React.ReactNode;
// 	cellSize: number;
// 	margin: number;
// 	gridRef: RefObject<HTMLDivElement | null>;
// 	// locked?: boolean;
// 	// showLock?: boolean;
// 	// onLockToggle?: () => void;
// };

export type CardData = {
	id: string;
	variant?: CardType;
	background?: string;
	tags: string[];
	title: string;
	image?: string;
	content?: string;
	showReadMore?: boolean;
	readMoreLink?: string;
	children?: React.ReactNode;
};

export type CardProps = CardData & {
	cellSize: number;
	margin: number;
	gridRef: React.RefObject<HTMLDivElement | null>;
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
	cellSize,
	margin,
	gridRef,
	// locked = false,
	// showLock = false,
	// onLockToggle,
}) => {
	const isHorizontal = variant === 'horizontal';
	const isVertical = variant === 'vertical';
	const isLarge = variant === 'large';
	const base = cellSize + margin;

	const style: React.CSSProperties = {
		width: isHorizontal || isLarge ? base * 2 - margin : base - margin,
		height: isVertical || isLarge ? base * 2 - margin : base - margin,
		background,
		borderRadius: '1rem',
		overflow: 'hidden',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		boxShadow: '0 2px 8px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.08)',
	};

	return (
		<motion.div
			layout
			className={`rounded-2xl shadow-md overflow-hidden border border-gray-200 flex flex-col justify-between bg-[var(--color-card)] border-[var(--color-border)] text-[var(--color-text)]     transition-colors duration-300 hover:bg-[var(--color-card-hover)] ${
				background ? background : ''
			}`}
			style={style}
			dragConstraints={gridRef}
			whileHover={{ scale: 1.01 }}
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
