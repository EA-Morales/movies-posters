import { Fragment } from 'react';
import ArrowLeft from './icons/ArrowLeft';
import ArrowRight from './icons/ArrowRight';
import MovieTest from './Movie-test';

const MoviesRow = ({ movies }) => {
	const slideLeft = () => {
		const slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft - 500;
	};
	const slideRight = () => {
		const slider = document.getElementById('slider');
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<Fragment>
			<h2 className='text-white font-bold md:text-xl p-4'>Trending movies</h2>
			<div className='relative flex items-center group snap-x snap-mandatory'>
				<p
					onClick={slideLeft}
					className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block'>
					<ArrowLeft className='h-8' color='black' />
				</p>
				<div
					id={'slider'}
					className='w-full h-full no-scrollbar overflow-x-scroll whitespace-nowrap scroll-smooth snap-center'>
					{movies &&
						movies.map((movie) => (
							<MovieTest
								key={movie.id}
								title={movie.title}
								description={movie.description}
								image={movie.image}
								landscapeImage={movie.landscapeImage}
								year={movie.year}
								rating={movie.rating}
								genres={movie.genres}
							/>
						))}
				</div>
				<p
					onClick={slideRight}
					className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 hidden group-hover:block'
					size={40}>
					<ArrowRight className='h-8' color='red' />
				</p>
			</div>
		</Fragment>
	);
};

export default MoviesRow;
