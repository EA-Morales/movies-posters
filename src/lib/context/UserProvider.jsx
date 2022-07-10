import { useState, createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [user, setUser] = useState(true);

	const signIn = () => {
		setUser(true);
	};

	const signOut = () => {
		setUser(false);
	};

	return (
		<UserContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
