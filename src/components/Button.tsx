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
				default: 'bg-gray-100 hover:bg-gray-200 text-gray-700',
				ghost: 'bg-transparent border border-gray-300 hover:bg-gray-100',
			},
			size: {
				sm: 'p-1.5 text-sm',
				md: 'p-2 text-base',
				lg: 'p-3 text-medium',
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
