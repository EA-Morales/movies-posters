import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../lib/context/UserProvider';

const Login = () => {
	const { user, signInWithGoogle, logOut } = useContext(UserContext);
	const navigate = useNavigate();

	const handleGoogleSignIn = async () => {
		try {
			await signInWithGoogle();
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (user != null) {
			navigate('/account');
		}
	}, [user]);

	return (
		<div className='min-h-screen flex justify-center items-center'>
			<div className='flex flex-col gap-4'>
				<h1>Pantalla de login</h1>
				<h2>{user ? 'Conectado' : 'Desconectado'}</h2>
				{user ? (
					<button
						className='bg-netflix-primary py-2 px-4 rounded-md font-medium'
						onClick={logOut}>
						Cerrar sesión
					</button>
				) : (
					<button
						className='bg-netflix-primary py-2 px-4 rounded-md font-medium'
						onClick={handleGoogleSignIn}>
						Iniciar sesión
					</button>
				)}
			</div>
		</div>
	);
};

export default Login;
