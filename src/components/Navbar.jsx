import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='flex justify-between py-2 px-4'>
			<p className='text-4xl font-bold text-netflix-primary'>
				Logo de net-flis
			</p>
			<Link to='/login'>
				<button className='bg-netflix-primary py-2 px-4 rounded-md font-medium'>
					Login
				</button>
			</Link>
		</div>
	);
};

export default Navbar;
