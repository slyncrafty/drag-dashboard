export const BREAKPOINTS = {
	lg: 1201,
	md: 800,
	sm: 600,
	xs: 320,
};

export const COLS = {
	lg: 4,
	md: 4,
	sm: 2,
	xs: 2,
};

export const CELL_SIZES = {
	lg: 250,
	md: 200,
	sm: 180,
	xs: 150,
};

export const MARGINS = {
	lg: 10,
	md: 8,
	sm: 4,
	xs: 2,
};

export type Breakpoint = keyof typeof BREAKPOINTS;
