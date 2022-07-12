import { useState, createContext } from 'react';
import { auth } from '../../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState('');

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider)
			.then(res => {
				const user = res.user.displayName;
				setUser(user);
			})
			.catch(err => {
				console.log(err);
			});
	};

	const signOut = () => {
		setUser();
	};

	return (
		<UserContext.Provider value={{ user, signInWithGoogle, signOut }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
