import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

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
		<>
			<h2 className='text-white font-bold md:text-xl p-4'>Trending movies</h2>
			<div className='relative flex items-center group snap-x snap-mandatory'>
				<p
					onClick={slideLeft}
					className='bg-white p-1 left-0 rounded-full absolute opacity-50 hover:opacity-100 hover:scale-125 z-10 hidden group-hover:block'>
					<AiOutlineLeft size={20} color={'black'} />
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
					className='bg-white right-0 p-1 rounded-full absolute opacity-50 hover:opacity-100 hover:scale-125 z-10 hidden group-hover:block'
					size={40}>
					<AiOutlineRight size={20} color={'black'} />
				</p>
			</div>
		</>
	);
};

export default MoviesRow;
