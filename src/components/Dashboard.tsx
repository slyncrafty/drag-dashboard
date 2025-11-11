import React, {
	useEffect,
	useMemo,
	useRef,
	useState,
	type RefObject,
} from 'react';
import {
	Responsive,
	WidthProvider,
	type Layout,
	type Layouts,
} from 'react-grid-layout';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { SettingCard } from './SettingCard';
import { DEFAULT_LAYOUTS, CARDS } from '../data/data';
import {
	BREAKPOINTS,
	COLS,
	CELL_SIZES,
	MARGINS,
	type Breakpoint,
} from '../data/gridConfig';

// const GRID_WIDTH = COLS * CELL_SIZE + (COLS + 1) * MARGIN;

type OverlayCard = {
	i: string;
	x: number;
	y: number;
	w: number;
	h: number;
};

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Dashboard: React.FC<{ activeTag: string }> = ({ activeTag }) => {
	const gridRef = useRef<HTMLDivElement>(null);
	const [layouts, setLayouts] = useState<Layouts>(DEFAULT_LAYOUTS);
	const [breakpoint, setBreakpoint] = useState<Breakpoint>('lg');
	const [containerWidth, setContainerWidth] = useState<number>(
		window.innerWidth
	);

	// overlay
	const [dragging, setDragging] = useState<OverlayCard | null>(null);

	// Responsive resizing	Grid Calculation
	const COL = COLS[breakpoint];
	const CELL_SIZE = CELL_SIZES[breakpoint];
	const MARGIN = MARGINS[breakpoint];
	const GRID_WIDTH = COL * CELL_SIZE + (COL + 1) * MARGIN;
	useEffect(() => {
		const updateBreakpoint = () => {
			const width = window.innerWidth;
			if (width >= BREAKPOINTS.lg) setBreakpoint('lg');
			else if (width >= BREAKPOINTS.md) setBreakpoint('md');
			else if (width >= BREAKPOINTS.sm) setBreakpoint('sm');
			else setBreakpoint('xs');
			setContainerWidth(width);
		};

		updateBreakpoint();
		window.addEventListener('resize', updateBreakpoint);

		return () => window.removeEventListener('resize', updateBreakpoint);
	}, [containerWidth]);

	const handleBreakpointChange = (bp: string) => {
		if (Object.keys(BREAKPOINTS).includes(bp)) {
			setBreakpoint(bp as Breakpoint);
		}
	};

	// filter and reorder the visible field based on tag
	const visibleLayout: Layouts = useMemo(() => {
		if (activeTag === 'All') return layouts;

		const taggedIds = CARDS.filter((c) => c.tags.includes(activeTag)).map(
			(c) => c.id
		);

		// Sort layout: tagged cards first
		const sortLayout = (layoutArr: Layout[]) => {
			const sorted = [...layoutArr].sort((a, b) => {
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
		};
		const result: Layouts = {};
		for (const key of Object.keys(layouts) as (keyof Layouts)[]) {
			result[key] = sortLayout(layouts[key]);
		}
		return result;
	}, [activeTag, layouts]);

	// Drag Handlers
	// const onLayoutChange = (newLayout: Layout[]) => setLayout(newLayout);
	const onLayoutChange = (_: Layout[], allLayouts: Layouts) =>
		setLayouts(allLayouts);

	const handleDragStart = (_: Layout[], __: Layout, newItem: Layout) => {
		setDragging({
			i: newItem.i,
			x: newItem.x,
			y: newItem.y,
			w: newItem.w,
			h: newItem.h,
		});
	};

	const handleDrag = (_: Layout[], __: Layout, newItem: Layout) => {
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
		<div className='flex justify-center items-start py-8 min-h-screen w-full'>
			<div
				ref={gridRef}
				style={{
					width: GRID_WIDTH,
					position: 'relative',
					background: 'transparent',
				}}
				className='relative w-full max-w-[1600px] mx-auto'
				// className='relative w-full max-w-[1600px] mx-auto p-4 min-w-[320px]'
			>
				<ResponsiveGridLayout
					layouts={visibleLayout}
					breakpoints={BREAKPOINTS}
					onLayoutChange={onLayoutChange}
					onBreakpointChange={handleBreakpointChange}
					onDragStart={handleDragStart}
					onDrag={handleDrag}
					onDragStop={handleDragStop}
					cols={COLS}
					rowHeight={CELL_SIZE}
					// width={GRID_WIDTH}
					width={containerWidth}
					margin={[MARGIN, MARGIN]}
					compactType='vertical'
					preventCollision={false}
					isDraggable
					isResizable={false}>
					{/* Process Cards */}
					{CARDS.map((card) => {
						const isActive =
							activeTag === 'All' || card.tags.includes(activeTag);
						const gridItem =
							layouts[breakpoint]?.find((l) => l.i === card.id) ??
							({ i: card.id, x: 0, y: 0, w: 1, h: 1 } as Layout);
						{
							/* Setting Card */
						}
						if (card.id === 'setting') {
							return (
								<div
									key='setting'
									data-grid={gridItem}
									className={`relative ${
										isActive ? 'opacity-100' : 'opacity-40'
									} ${dragging?.i === card.id ? 'z-50' : 'z-10'}`}>
									<SettingCard
										cellSize={CELL_SIZE}
										margin={MARGIN}
										gridRef={gridRef as RefObject<HTMLDivElement>}
									/>
								</div>
							);
						}
						return (
							<div
								key={card.id}
								data-grid={gridItem}
								className={`relative ${
									isActive ? 'opacity-100' : 'opacity-40'
								} ${dragging?.i === card.id ? 'z-50' : 'z-10'}`}>
								<div className=''>
									<Card
										id={card.id}
										variant={card.variant}
										background={card.background}
										tags={card.tags}
										title={card.title}
										image={card.image}
										content={card.content}
										showReadMore={card.showReadMore}
										readMoreLink={card.readMoreLink}
										cellSize={CELL_SIZE}
										margin={MARGIN}
										gridRef={gridRef as RefObject<HTMLDivElement>}
									/>
								</div>
							</div>
						);
					})}
				</ResponsiveGridLayout>
				{/* Shadow Overlay */}
				{dragging && (
					<motion.div
						className='absolute bg-gray-400/20 border-2 border-blue-500/40 rounded-xl pointer-events-none z-0'
						initial={false}
						animate={{
							left: dragging.x * CELL_SIZE + 3 * MARGIN,
							top: dragging.y * CELL_SIZE + 3 * MARGIN,
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
