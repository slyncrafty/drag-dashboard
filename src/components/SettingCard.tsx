import React from 'react';
import { motion } from 'framer-motion';
import { Card } from './Card';
import { useAppSettings } from '../contexts/AppSettingContext';
import { Button } from './Button';

export const SettingCard: React.FC = () => {
	// const { theme, setTheme, width, setWidth } = useAppSettings();
	const { theme, setTheme } = useAppSettings();
	const isDark = theme === 'dark';

	return (
		<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
			<Card
				id='settings'
				variant='default'
				background=''
				tags={[]}
				title={'Settings'}>
				<div className='flex justify-center align-center mb-8'>
					<Button
						variant={`${isDark ? 'dark' : 'default'}`}
						size='lg'
						onClick={() => setTheme(isDark ? 'light' : 'dark')}
						aria-label='Toggle dark/light mode'>
						{isDark ? (
							<svg
								className='w-4 h-4'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 18 20'>
								<path d='M17.8 13.75a1 1 0 0 0-.859-.5A7.488 7.488 0 0 1 10.52 2a1 1 0 0 0 0-.969A1.035 1.035 0 0 0 9.687.5h-.113a9.5 9.5 0 1 0 8.222 14.247 1 1 0 0 0 .004-.997Z'></path>
							</svg>
						) : (
							<svg
								className='w-4 h-4'
								xmlns='http://www.w3.org/2000/svg'
								fill='currentColor'
								viewBox='0 0 20 20'>
								<path d='M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0-11a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Zm0 12a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1ZM4.343 5.757a1 1 0 0 0 1.414-1.414L4.343 2.929a1 1 0 0 0-1.414 1.414l1.414 1.414Zm11.314 8.486a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM4 10a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Zm15-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 0-2ZM4.343 14.243l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414a1 1 0 0 0-1.414-1.414ZM14.95 6.05a1 1 0 0 0 .707-.293l1.414-1.414a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 .707 1.707Z'></path>
							</svg>
						)}
					</Button>
				</div>

				{/* <div>
					<label className='block mb-2 font-medium'>Reading Width</label>
					<input
						type='range'
						min={0}
						max={2}
						step={1}
						value={['narrow', 'default', 'wide'].indexOf(width)}
						onChange={(e) =>
							setWidth(
								['narrow', 'default', 'wide'][parseInt(e.target.value)] as any
							)
						}
						className='w-full accent-blue-500'
					/>
					<div className='flex justify-between text-sm text-gray-500 mt-1'>
						<span>Narrow</span>
						<span>Default</span>
						<span>Wide</span>
					</div>
				</div> */}
			</Card>
		</motion.div>
	);
};
