import React, { useMemo, useRef, useState } from 'react';
import GridLayout, { type Layout } from 'react-grid-layout';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { DEFAULT_LAYOUT, CARDS, CELL_SIZE, COLS, MARGIN } from '../data/data';

const GRID_WIDTH = COLS * CELL_SIZE + (COLS + 1) * MARGIN;

type OverlayCard = {
	i: string;
	x: number;
	y: number;
	w: number;
	h: number;
};

export const Dashboard: React.FC<{ activeTag: string }> = ({ activeTag }) => {
	const [layout, setLayout] = useState<Layout[]>(DEFAULT_LAYOUT);
	const [dragging, setDragging] = useState<OverlayCard | null>(null);
	const gridRef = useRef<HTMLDivElement>(null);

	// const [locked, setLocked] = useState<string[]>([]);
	// const toggleLock = (id: string) =>
	// 	setLocked((prev) =>
	// 		prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
	// 	);

	// const visibleCards = useMemo(() => {
	// 	return activeTag === 'All'
	// 		? CARDS
	// 		: CARDS.filter((c) => c.tags.includes(activeTag));
	// }, [activeTag]);

	// const visibleLayout = useMemo(() => {
	// 	const byId = new Map(layout.map((l) => [l.i, l]));
	// 	return visibleCards.map((card, idx) => {
	// 		const found = byId.get(card.id);
	// 		const isLocked = locked.includes(card.id);
	// 		if (found) return { ...found, static: isLocked };
	// 		const x = idx % COLS;
	// 		const y = Math.floor(idx / COLS);
	// 		const w = card.variant === 'horizontal' || card.variant === 'bio' ? 2 : 1;
	// 		const h = card.variant === 'vertical' ? 2 : 1;
	// 		return { i: card.id, x, y, w, h, static: isLocked };
	// 	});
	// }, [layout, visibleCards, locked]);

	// --- Push selected tag cards upward ---
	const visibleLayout = useMemo(() => {
		if (activeTag === 'All') return layout;

		const taggedIds = CARDS.filter((c) => c.tags.includes(activeTag)).map(
			(c) => c.id
		);

		// Sort layout: tagged cards first
		const sorted = [...layout].sort((a, b) => {
			const aTagged = taggedIds.includes(a.i);
			const bTagged = taggedIds.includes(b.i);
			return aTagged === bTagged ? 0 : aTagged ? -1 : 1;
		});

		// Reassign y positions to push tagged cards up
		let yCounter = 0;
		const newLayout = sorted.map((item) => {
			if (taggedIds.includes(item.i)) {
				const updated = { ...item, y: yCounter };
				yCounter += item.h; // Stack vertically
				return updated;
			}
			return item;
		});

		return newLayout;
	}, [activeTag, layout]);

	const onLayoutChange = (newLayout: Layout[]) => setLayout(newLayout);

	const handleDragStart = (
		layout: Layout[],
		oldItem: Layout,
		newItem: Layout
	) => {
		setDragging({
			i: newItem.i,
			x: newItem.x,
			y: newItem.y,
			w: newItem.w,
			h: newItem.h,
		});
	};

	const handleDrag = (layout: Layout[], oldItem: Layout, newItem: Layout) => {
		setDragging({
			i: newItem.i,
			x: newItem.x,
			y: newItem.y,
			w: newItem.w,
			h: newItem.h,
		});
	};

	const handleDragStop = () => setDragging(null);

	return (
		<div className='flex justify-center items-start py-8 bg-gray-50 min-h-screen relative'>
			<div
				ref={gridRef}
				style={{
					width: GRID_WIDTH,
					position: 'relative',
					background: 'transparent',
				}}>
				<GridLayout
					layout={visibleLayout}
					onLayoutChange={onLayoutChange}
					onDragStart={handleDragStart}
					onDrag={handleDrag}
					onDragStop={handleDragStop}
					cols={COLS}
					rowHeight={CELL_SIZE}
					width={GRID_WIDTH}
					margin={[MARGIN, MARGIN]}
					compactType='vertical'
					preventCollision={false}
					isDraggable
					isResizable={false}>
					{CARDS.map((card) => {
						// const isLocked = locked.includes(card.id);
						const gridItem = visibleLayout.find((l) => l.i === card.id);
						const isActive =
							activeTag === 'All' || card.tags.includes(activeTag);
						return (
							<div
								key={card.id}
								data-grid={gridItem}
								className={`relative ${
									isActive ? 'opacity-100' : 'opacity-40'
								} ${
									dragging?.i === card.id
										? 'z-50'
										: // : isLocked
										  // ? 'opacity-90'
										  'z-10'
								}`}>
								<div className=''>
									<Card
										id={card.id}
										title={card.title}
										variant={card.variant}
										background={card.background}
										showReadMore={card.variant === 'bio'}
										image={card.image}
										content={card.content}
										// locked={locked.includes(card.id)}
										// showLock
										// onLockToggle={() => toggleLock(card.id)}
									/>
								</div>
							</div>
						);
					})}
				</GridLayout>
				{/* Shadow Overlay */}
				{dragging && (
					<motion.div
						className='absolute bg-blue-400/20 border-2 border-blue-500/40 rounded-xl pointer-events-none z-0'
						initial={false}
						animate={{
							left: dragging.x * (CELL_SIZE + MARGIN),
							top: dragging.y * (CELL_SIZE + MARGIN * 2),
							width: dragging.w * CELL_SIZE + (dragging.w - 1) * MARGIN,
							height: dragging.h * CELL_SIZE + (dragging.h - 1) * MARGIN,
						}}
						transition={{ type: 'spring', stiffness: 300, damping: 30 }}
					/>
				)}
			</div>
		</div>
	);
};
