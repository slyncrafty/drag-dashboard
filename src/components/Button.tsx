import { type ComponentProps } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

export const buttonStyles = cva(
	[
		'transition-all px-4 py-1 rounded-full font-medium flex items-center justify-center select-none',
		'focus:outline-none focus:ring-2 focus:ring-offset-2',
	],
	{
		variants: {
			variant: {
				default: [
					'bg-[var(--color-secondary)]',
					'hover:bg-[var(--color-secondary-hover)]',
					'text-[var(--color-secondary-text)]',
				],
				ghost: ['bg-transparent border border-gray-400 hover:bg-gray-100'],
				dark: [
					'bg-secondary-dark border-gray-400 hover:bg-secondary-dark-hover text-secondary',
				],
			},
			size: {
				sm: ['p-1.5 text-sm'],
				md: ['p-2 text-base'],
				lg: ['p-3 text-medium'],
				icon: [
					'rounded-full',
					'w-10',
					'h-10',
					'flex',
					'items-center',
					'justify-center',
					'p-2.5',
				],
				iconlg: [
					'rounded-full',
					'w-14',
					'h-14',
					'flex',
					'items-center',
					'justify-center',
					'p-3',
				],
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	}
);

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>;

export const Button = ({ variant, size, className, ...props }: ButtonProps) => {
	return (
		<button
			{...props}
			className={twMerge(buttonStyles({ variant, size }), className)}
		/>
	);
};
