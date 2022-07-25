import { useContext } from 'react';
import { UserContext } from '../lib/context/UserProvider';

const Account = () => {
	const { user, logOut } = useContext(UserContext);

	const handleSignOut = async () => {
		try {
			await logOut();
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className='w-[300px] m-auto'>
			<h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
			<div>
				<p>Welcome, {user?.displayName}</p>
			</div>
			<button onClick={handleSignOut} className='border py-2 px-5 mt-10'>
				Logout
			</button>
		</div>
	);
};

export default Account;
