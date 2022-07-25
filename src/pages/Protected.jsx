import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../lib/context/UserProvider';

const Protected = ({ children }) => {
	const { user } = useContext(UserContext);
	if (!user) {
		return <Navigate to='/' />;
	}

	return children;
};

export default Protected;
