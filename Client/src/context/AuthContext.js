import { useState, createContext, useEffect } from 'react';
import Loader from '../subComponents/Loader';
import getMeFunction from '../api/getMeFunction';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [cart, setCart] = useState([]);


	useEffect(() => {
		(async () => {
			const token = localStorage.getItem('access');
			await login(token);

			setLoading(false);
		})();
	});

	const login = async (token) => {
		try {
			const user = await getMeFunction(token);
			delete user.password;
			setUser(user);
		} catch (error) {
			console.log(error);
		}
	};

	const logout = () => {
		setUser(false);
		localStorage.clear();
	};
	
	const data = {
		user,
		setUser,
		login,
		logout,
		cart,
		setCart,
	};

	if (loading) {
		return (<Loader />
		);
	};
	
	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
