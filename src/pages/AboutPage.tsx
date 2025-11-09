import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { PageLayout } from '../layouts/PageLayout';

export const AboutPage: React.FC = () => {
	return (
		<PageLayout dark showCategories={false}>
			<motion.main
				initial={{ opacity: 0, y: 500 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className='flex flex-col items-center justify-center px-6 py-12'>
				<div className='flex justify-center mb-12 pt-10'>
					<Link to='/'>
						<Button variant='ghost' size='iconlg'>
							X
						</Button>
					</Link>
				</div>
				<h1 className='text-5xl font-extrabold text-white mb-6'>About Me</h1>

				<p className='text-gray-400 text-lg max-w-2xl text-center mb-12'>
					Hi 👋, I’m{' '}
					<span className='text-white font-semibold'>[Your Name]</span>. I’m a
					creative developer.
				</p>

				<div className='grid md:grid-cols-2 gap-10 items-center max-w-5xl'>
					<img
						src='https://picsum.photos/seed/about-dark/800/600'
						alt='About'
						className='rounded-2xl shadow-lg'
					/>

					<div className='space-y-6 leading-relaxed text-gray-300'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum a ullamcorper lorem. Suspendisse consequat tincidunt
							odio, at malesuada est rhoncus quis. Maecenas non diam pulvinar,
							faucibus velit ullamcorper, fringilla justo. Proin tempor est
							diam, et convallis libero commodo id. Aenean sit amet turpis
							massa. Integer et ornare sapien. Orci varius natoque penatibus et
							magnis dis parturient montes, nascetur ridiculus mus. Nulla
							facilisi. Nunc accumsan aliquam ante, a aliquam risus. Vestibulum
							sed placerat tellus. Aenean accumsan, dolor sed faucibus iaculis,
							erat lacus ullamcorper dui, in pellentesque sapien sapien sed
							orci. Phasellus luctus lorem ut elementum tincidunt. Pellentesque
							sagittis, mi vitae vulputate blandit, massa nibh luctus lectus,
							quis eleifend dui turpis quis massa. Nam imperdiet sem mi, non
							condimentum dui vulputate vitae. Etiam luctus, augue eget auctor
							tincidunt, lectus ligula imperdiet est, ac consequat nisl eros eu
							erat. Mauris sed enim eleifend purus blandit dignissim. Integer
							luctus nec arcu sed laoreet. Mauris eget hendrerit enim. Class
							aptent taciti sociosqu ad litora torquent per conubia nostra, per
							inceptos himenaeos. Maecenas id risus nibh.
						</p>
					</div>
				</div>
			</motion.main>
		</PageLayout>
	);
};
