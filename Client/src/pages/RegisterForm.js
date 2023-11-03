import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerFunction } from '../api/registerFunction';
import BackParticles from '../subComponents/BackParticles';
import '../css/index.css'

const RegisterForm = () => {
	/* 
	formData
   */
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
	});

	/* 
	formValidation
   */
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	/* 
	obtener los datos del formulario de registro
   */
	const handleSubmit = async (e) => {
		e.preventDefault();
		// data
		
		try{
			const res = await registerFunction(formData);
			console.log(res)
			setError('')
			setSuccess(res.msg)
		} catch (error){
			console.log(error);
			setError('Server Fatal')
			setSuccess('')
		}
	};

	return (
		<>  
			<div className='form__contain'>
			<BackParticles />
			<form className='form__reg' onSubmit={handleSubmit}>
				<h2 className='form__tittle'>Register</h2>
				<div className='form__content'>
					<input className='form__input'
						type="text"
						name="firstname"
						placeholder="Nombre"
						value={formData.firstname}
						onChange={handleInputChange}
					/>
				</div>
				<div className='form__content'>
					<input className='form__input'
						type="text"
						name="lastname"
						placeholder="Last Name"
						value={formData.lastname}
						onChange={handleInputChange}
					/>
				</div>
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
						placeholder="Password"
						value={formData.password}
						onChange={handleInputChange}
					/>
				</div>
				{error && <p className="alert alert-danger">{error}</p>}
				<button className='form__button' type="submit">Register</button>
				{success && <p className="alert alert-success">{success}</p>}
				<p className='form__link'>
				    Do you already have an account? <Link to="/login">Login</Link>
				</p>
			</form>
			</div>
		</>
	);
};

export default RegisterForm;
