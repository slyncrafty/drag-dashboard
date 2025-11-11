import { type CardData, type CardType } from '../components/Card';

import { COLS, type Breakpoint } from './gridConfig';

export const CARDS: CardData[] = [
	{
		id: '1',
		variant: 'base',
		background: '',
		tags: ['Tech'],
		title: 'Card 1',
	},
	{
		id: '2',
		variant: 'base',
		background: '',
		tags: ['Design', 'Tech'],
		title: 'Card 2',
	},
	{
		id: '3',
		variant: 'base',
		background: '',
		tags: ['Media'],
		title: 'Card 3',
	},
	{
		id: 'setting',
		variant: 'base',
		background: '',
		tags: ['about'],
		title: 'Card 4',
	},

	{
		id: '5',
		variant: 'horizontal',
		background: '',
		tags: ['Tech'],
		title: 'H-Card 5',
		showReadMore: true,
	},
	{
		id: '6',
		variant: 'horizontal',
		background: '',
		tags: ['Design'],
		title: 'H-Card 6',
	},
	{
		id: '9',
		variant: 'horizontal',
		background: '',
		tags: ['Design'],
		title: 'H-Card 9',
	},

	{
		id: '7',
		variant: 'vertical',
		background: '',
		tags: ['Media'],
		title: 'V-Card 7',
	},
	{
		id: '8',
		variant: 'vertical',
		background: '',
		tags: ['Tech'],
		title: 'V-Card 8',
		showReadMore: true,
	},

	{
		id: 'about',
		variant: 'large',
		// background: 'bg-gradient-to-r from-yellow-100 to-pink-100',
		tags: ['about'],
		title: 'about me',
		image: 'https://flexboxfroggy.com/images/frog-green.svg',
		content: 'A simple description.',
		showReadMore: true,
		readMoreLink: '/about',
	},
];

const TYPE_SIZES: Record<CardType, { w: number; h: number }> = {
	base: { w: 1, h: 1 },
	horizontal: { w: 2, h: 1 },
	vertical: { w: 1, h: 2 },
	large: { w: 2, h: 2 },
};

export const CATEGORIES = ['All', 'Tech', 'Design', 'Media', 'about'];

export const DEFAULT_LAYOUTS = Object.fromEntries(
	Object.entries(COLS).map(([bp, cols]) => {
		let x = 0;
		let y = 0;
		const layout = CARDS.map((card) => {
			const { w, h } = TYPE_SIZES[card.variant || 'base'];
			if (x + w > cols) {
				x = 0;
				y += h;
			}
			const item = { i: card.id, x, y, w, h };
			x += w;
			return item;
		});
		return [bp, layout];
	})
) as Record<
	Breakpoint,
	{ i: string; x: number; y: number; w: number; h: number }[]
>;
