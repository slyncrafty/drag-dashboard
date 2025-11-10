import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './components/Dashboard';
import { PostPage } from './pages/PostPage';
import { AboutPage } from './pages/AboutPage';
import { CATEGORIES } from './data/data';
import { AppSettingProvider } from './contexts/AppSettingContext';

function ThemedApp() {
	const [activeTag, setActiveTag] = useState('All');
	const handleCategoryChange = (tag: string) => {
		setActiveTag(tag);
	};

	return (
		<div className='min-h-screen bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-[var(--color-secondary-text)] transition-colors'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={
							<DashboardLayout
								categories={CATEGORIES}
								current={activeTag}
								setCurrent={handleCategoryChange}
							/>
						}>
						<Route index element={<Dashboard activeTag={activeTag} />} />
					</Route>

					{/* Standalone routes */}
					<Route path='/content/:id' element={<PostPage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default function App() {
	return (
		<AppSettingProvider>
			<ThemedApp />
		</AppSettingProvider>
	);
}
