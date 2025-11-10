import React from 'react';
import { Navbar } from '../components/Navbar';

type PageLayoutProps = {
	dark?: boolean;
	showCategories?: boolean;
	children: React.ReactNode;
};

export const PageLayout: React.FC<PageLayoutProps> = ({
	dark = false,
	showCategories = false,
	children,
}) => {
	return (
		<div
			className={`min-h-screen flex flex-col ${
				dark ? 'bg-black text-gray-200' : ''
			}`}>
			<Navbar showCategories={showCategories} dark={dark} />
			<main className='flex-1 flex flex-col items-center justify-start'>
				{children}
			</main>
		</div>
	);
};
