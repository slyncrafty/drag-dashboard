import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { CATEGORIES } from './data/data';

export const App: React.FC = () => {
	const [activeTag, setActiveTag] = useState('All');
	const handleCategoryChange = (tag: string) => {
		setActiveTag(tag);
	};

	return (
		<Router>
			<div className='flex flex-col min-h-screen bg-gray-50'>
				<Navbar
					categories={CATEGORIES}
					current={activeTag}
					setCurrent={handleCategoryChange}
				/>
				<main className='flex-1'>
					<Routes>
						<Route path='/' element={<Dashboard activeTag={activeTag} />} />
						{/* <Route path='/content/:id' element={<PostPage />} /> */}
					</Routes>
				</main>
			</div>
		</Router>
	);
};
export default App;
