import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

type DashboardLayoutProps = {
	categories: string[];
	current: string;
	setCurrent: (cat: string) => void;
};

export function DashboardLayout({
	categories,
	current,
	setCurrent,
}: DashboardLayoutProps) {
	const isLarge = window.innerWidth < 600 ? false : true;
	console.log(window.innerWidth);
	return (
		<div className='min-h-screen flex flex-col transition-colors duration-300 bg-[var(--color-bg)] text-[var(--color-text)]'>
			<Navbar
				categories={categories}
				current={current}
				setCurrent={setCurrent}
				showLogo={isLarge}
				showCategories={true}
			/>
			<main className='flex-1'>
				<Outlet />
			</main>
		</div>
	);
}
