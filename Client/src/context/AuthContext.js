import { useState, createContext, useEffect } from 'react';
import Loader from '../subComponents/Loader';
import getMeFunction from '../api/getMeFunction';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		(async () => {
			const token = localStorage.getItem('access');
			await login(token);

			setLoading(false);
		})();
	});

	const login = async (token) => {
		try {
			const user = await (token);
			delete user.password;
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	// los datos para utilizar en todo el sitio web
	const data = {
		user,
		setUser,
		login,
	};

	const changeState = () => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false);
		},5000);

		changeState();
	};

	if (loading) {
		return (<Loader />
		);
	}
	// el contexto
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
