import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { UserContext } from '../lib/context/UserProvider';

const Navbar = () => {
	const { user, logOut } = useContext(UserContext);

	return (
		<div className='flex justify-between py-2 px-4'>
			<Link to='/'>
				<p className='text-4xl font-bold text-netflix-primary'>
					Logo de net-flis
				</p>
			</Link>

			{user ? (
				<button
					className='bg-netflix-primary py-2 px-4 rounded-md font-medium'
					onClick={logOut}>
					Logout
				</button>
			) : (
				<Link to='/login'>
					<button className='bg-netflix-primary py-2 px-4 rounded-md font-medium'>
						Login
					</button>
				</Link>
			)}
		</div>
	);
};

export default Navbar;
