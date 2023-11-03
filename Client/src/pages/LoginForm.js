import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import BackParticles from '../subComponents/BackParticles';
import '../css/index.css'
import { loginFunction } from '../api/loginFunction';
import { AuthContext } from '../context/AuthContext';

const LoginForm = () => {
    const {user, setUser} = useContext(AuthContext);
	const navigate = useNavigate()
	/* 
	datos del formulario
   */
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	/* 
	validacion de formulario y navegacion entre las rutas
   */
	const [error, setError] = useState(null);

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	/* 
	obtener los datos del formulario de login
   */
	const handleSubmit = async (e) => {
		e.preventDefault();
		// datos
		
		try {
			const { access } = await loginFunction(formData);

			if (access) {
				setUser({
					firstname: 'Izan',
					lastname: 'zan',
					email: 'Izan@gmail.com'
				});
				navigate('/home');
			}

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='form__contain'>
			<BackParticles />
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
					¿No tienes una cuenta? <Link to="/">Regístrate</Link>
				</p>
			</form>
			</div>
		</>
	);
};

export default LoginForm;
