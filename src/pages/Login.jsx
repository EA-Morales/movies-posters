import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../lib/context/UserProvider';

const Login = () => {
	const { user, signIn, signOut } = useContext(UserContext);

	return (
		<div className='min-h-screen flex justify-center items-center'>
			<div className='flex flex-col gap-4'>
				<h1>Pantalla de login</h1>
				<h2>{user ? 'Conectado' : 'Desconectado'}</h2>
				{user ? (
					<button
						className='bg-netflix-primary py-2 px-4 rounded-md font-medium'
						onClick={signOut}>
						Cerrar sesión
					</button>
				) : (
					<Link
						to={'/'}
						className='bg-netflix-primary py-2 px-4 rounded-md font-medium'
						onClick={signIn}>
						Iniciar sesión
					</Link>
				)}
			</div>
		</div>
	);
};

export default Login;
