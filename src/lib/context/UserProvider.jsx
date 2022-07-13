import { useState, createContext, useEffect } from 'react';
import { auth } from '../../firebase';
import {
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState({});

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		signInWithPopup(auth, provider);
	};

	const logOut = () => {
		signOut(auth);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
			console.log('User', currentUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	return (
		<UserContext.Provider value={{ user, signInWithGoogle, logOut }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
