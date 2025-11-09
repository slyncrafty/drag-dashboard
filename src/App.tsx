import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Dashboard } from './components/Dashboard';
import { PostPage } from './pages/PostPage';
import { AboutPage } from './pages/AboutPage';
import { CATEGORIES } from './data/data';

export default function App() {
	const [activeTag, setActiveTag] = useState('All');
	const handleCategoryChange = (tag: string) => {
		setActiveTag(tag);
	};

	return (
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
	);
}
