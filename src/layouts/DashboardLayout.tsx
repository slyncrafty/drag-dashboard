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
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col'>
			<Navbar
				categories={categories}
				current={current}
				setCurrent={setCurrent}
				showCategories={true}
			/>
			<main className='flex-1'>
				<Outlet />
			</main>
		</div>
	);
}
