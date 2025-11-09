// src/data.ts
import type { Layout } from 'react-grid-layout';
import type { CardProps } from '../components/Card';

export const CELL_SIZE = 280;
export const COLS = 4;
export const MARGIN = 10;
export const CATEGORIES = ['All', 'Tech', 'Design', 'Media', 'about'];

export const DEFAULT_LAYOUT: Layout[] = [
	{ i: '1', x: 0, y: 0, w: 1, h: 1 },
	{ i: '2', x: 1, y: 0, w: 1, h: 1 },
	{ i: '3', x: 2, y: 0, w: 1, h: 1 },
	{ i: '4', x: 3, y: 0, w: 1, h: 1 },

	// horizontals (2x1)
	{ i: '5', x: 0, y: 1, w: 2, h: 1 },
	{ i: '6', x: 2, y: 1, w: 2, h: 1 },
	{ i: '9', x: 3, y: 2, w: 2, h: 1 },

	// verticals (1x2)
	{ i: '7', x: 0, y: 2, w: 1, h: 2 },
	{ i: '8', x: 1, y: 2, w: 1, h: 2 },

	// About card - horizontal
	{ i: 'about', x: 2, y: 2, w: 2, h: 1 },
];

export const CARDS: CardProps[] = [
	{
		id: '1',
		variant: 'default',
		background: 'bg-blue-100',
		tags: ['Tech'],
		title: 'Card 1',
	},
	{
		id: '2',
		variant: 'default',
		background: 'bg-green-100',
		tags: ['Design'],
		title: 'Card 2',
	},
	{
		id: '3',
		variant: 'default',
		background: 'bg-pink-100',
		tags: ['Media'],
		title: 'Card 3',
		showReadMore: true,
	},
	{
		id: '4',
		variant: 'default',
		background: 'bg-yellow-100',
		tags: ['about'],
		title: 'Card 4',
	},

	{
		id: '5',
		variant: 'horizontal',
		background: 'bg-red-100',
		tags: ['Tech'],
		title: 'H-Card 5',
	},
	{
		id: '6',
		variant: 'horizontal',
		background: 'bg-purple-100',
		tags: ['Design'],
		title: 'H-Card 6',
	},
	{
		id: '9',
		variant: 'horizontal',
		background: 'bg-purple-100',
		tags: ['Design'],
		title: 'H-Card 9',
	},

	{
		id: '7',
		variant: 'vertical',
		background: 'bg-indigo-100',
		tags: ['Media'],
		title: 'V-Card 7',
	},
	{
		id: '8',
		variant: 'vertical',
		background: 'bg-teal-100',
		tags: ['Tech'],
		title: 'V-Card 8',
		showReadMore: true,
	},

	{
		id: 'about',
		variant: 'about',
		background: 'bg-gradient-to-r from-yellow-100 to-pink-100',
		tags: ['about'],
		title: 'about Card',
		image: 'https://flexboxfroggy.com/images/frog-green.svg',
		content: 'A simple description.',
		showReadMore: true,
		readMoreLink: '/about',
	},
];
