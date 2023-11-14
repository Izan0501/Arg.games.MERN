import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import BackParticles from '../subComponents/BackParticles';
import '../css/index.css'
import { loginFunction } from '../api/loginFunction';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
    const {user, login} = useContext(AuthContext);
	const navigate = useNavigate()
	
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	
	const [error, setError] = useState(null);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	
	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			const { access } = await loginFunction(formData);
			login(access);
			localStorage.setItem('access', access);
			console.log(access);

			navigate('/home');

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
		    <BackParticles />
			<div className='form__contain'>
			<form  className='form__reg' onSubmit={handleSubmit}>
				<h2 className='form__tittle'>Login</h2>
				<div className='form__content'>
					<input className='form__input'
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleInputChange}
					/>
				</div>
				<div className='form__content'>
					<input className='form__input'
						type="password"
						name="password"
						placeholder="Contraseña"
						value={formData.password}
						onChange={handleInputChange}
					/>
				</div> 
				{error && <p className="alert alert-danger">{error}</p>}
				<button className='form__button' type="submit">Login</button>
				<p className='form__link'>
					You do not have an account? <Link to="/">Sing Up </Link>
				</p>
			</form>
			</div>
		</>
	);
};

export default LoginForm;
