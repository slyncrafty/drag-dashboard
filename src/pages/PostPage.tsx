import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CARDS } from '../data/data';
import { Button } from '../components/Button';
import { PageLayout } from '../layouts/PageLayout';

export const PostPage: React.FC = () => {
	const { id } = useParams();
	const card = CARDS.find((c) => c.id === id);

	if (!card) {
		return (
			<div className='flex flex-col items-center justify-center py-20'>
				<h2 className='text-2xl font-semibold text-gray-700'>
					Content not found.
				</h2>
				<Link to='/' className='mt-4 text-blue-500 hover:underline font-medium'>
					← Back to Dashboard
				</Link>
			</div>
		);
	}

	return (
		<PageLayout dark={false} showCategories={false}>
			<motion.div
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
				<h1 className='text-5xl font-extrabold text-gray-800 mb-6'>
					{card.title}
				</h1>
				<p className='text-gray-600 mb-6'>
					This is a detailed content page for <strong>{card.title}</strong>. Add
					contents.
				</p>
				<div className='flex flex-col items-center gap-10 max-w-5xl'>
					<img
						src={`https://picsum.photos/seed/${card.id}/800/400`}
						alt={card.title}
						className='rounded-lg mb-6'
					/>
					<div className='space-y-6 leading-relaxed text-gray-800'>
						<p>
							Phasellus a ante vel ipsum mollis cursus. Donec interdum, nisl sed
							congue dapibus, mi tortor accumsan diam, et pretium nunc purus
							porta diam. Aliquam volutpat, leo nec tincidunt sagittis, ante
							nunc auctor velit, id accumsan tellus turpis ut lectus.
							Pellentesque tempus dui eu tempus semper. Fusce sit amet diam in
							neque pellentesque dignissim. Morbi dignissim, nibh sed sodales
							iaculis, lorem justo congue ex, vel faucibus leo nulla sit amet
							ex. Nunc nec volutpat neque, ut viverra urna. Vivamus non tortor
							sit amet justo bibendum posuere id nec neque. Nulla ac enim
							ultrices lectus accumsan posuere tempor viverra dui. Mauris nisi
							dolor, luctus non eros nec, viverra cursus nisi. Etiam auctor
							risus metus, vitae congue tortor pretium ac.{' '}
						</p>
						<p>
							Phasellus a ante vel ipsum mollis cursus. Donec interdum, nisl sed
							congue dapibus, mi tortor accumsan diam, et pretium nunc purus
							porta diam. Aliquam volutpat, leo nec tincidunt sagittis, ante
							nunc auctor velit, id accumsan tellus turpis ut lectus.
							Pellentesque tempus dui eu tempus semper. Fusce sit amet diam in
							neque pellentesque dignissim. Morbi dignissim, nibh sed sodales
							iaculis, lorem justo congue ex, vel faucibus leo nulla sit amet
							ex. Nunc nec volutpat neque, ut viverra urna. Vivamus non tortor
							sit amet justo bibendum posuere id nec neque. Nulla ac enim
							ultrices lectus accumsan posuere tempor viverra dui. Mauris nisi
							dolor, luctus non eros nec, viverra cursus nisi. Etiam auctor
							risus metus, vitae congue tortor pretium ac.{' '}
						</p>
					</div>
				</div>
			</motion.div>
		</PageLayout>
	);
};
