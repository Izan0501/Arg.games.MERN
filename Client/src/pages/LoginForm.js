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
			setError('Incorrect User')
	
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
						type="text"
						name="email"
						required="required"
						placeholder=""
						value={formData.email}
						onChange={handleInputChange}
					/>
					<span className='input__span'>Email</span>
					<i></i>
				</div>
				<div className='form__content'>
					<input className='form__input'
						type="text"
						name="password"
						required="required"
						placeholder=""
						value={formData.password}
						onChange={handleInputChange}
					/>
					<span className='input__span'>Password</span>
					<i></i>
				</div> 
				{error && <p className="alert__errorLogin alert-danger">{error}</p>}
				<button className='form__button' type="submit">Login</button>
				<p className='form__link'>
					You do not have an account? <Link className='input__link ' to="/">Sing Up </Link>
				</p>
			</form>
			</div>
		</>
	);
};

export default LoginForm;
