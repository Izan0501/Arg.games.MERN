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

		try {
			const res = await registerFunction(formData);
			console.log(res)
			setError('')
			setSuccess(res.msg)
		} catch (error) {
			console.log(error);
			setError('existing user')
			setSuccess('')
		}
	};

	return (
		<>
			<BackParticles />
			<div className='form__contain'>
				<form className='form__reg' onSubmit={handleSubmit}>
					<h2 className='form__tittle'>Register</h2>
					<div className='form__content'>
						<input className='form__input'
							type="text"
							required="required"
							name="firstname"
							placeholder=""
							value={formData.firstname}
							onChange={handleInputChange}
						/>
						<span className='input__span'>First Name</span>
						<i></i>
					</div>
					<div className='form__content'>
						<input className='form__input'
							type="text"
							required="required"
							name="lastname"
							placeholder=""
							value={formData.lastname}
							onChange={handleInputChange}
						/>
						<span className='input__span'>Last Name</span>
						<i></i>
					</div>
					<div className='form__content'>
						<input className='form__input'
							type="text"
							required="required"
							name="email"
							placeholder=""
							value={formData.email}
							onChange={handleInputChange}
						/>
						<span className='input__spanE'>Email</span>
						<i></i>
					</div>
					<div className='form__content'>
						<input className='form__input'
							type="password"
							name="password"
							required="required"
							placeholder=""
							value={formData.password}
							onChange={handleInputChange}
						/>
						<span className='input__span'>Password</span>
						<i></i>
					</div>
					{error && <p className="alert__error alert-danger">{error}</p>}
					<button className='form__button-R' type="submit">Register</button>
					{success && <p className="alert alert-success">{success}</p>}
					<p className='form__link'>
						Do you already have an account? <Link className='input__link' to="/login">Login</Link>
					</p>
				</form>
			</div>
		</>
	);
};

export default RegisterForm;
