import React, { useState } from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png";
import {useDispatch, useSelector} from 'react-redux';
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
	const [isSignUp, setIsSignUp] = useState(false);
	const loading = useSelector((state) => state.authReducer.loading);

	const dispatch = useDispatch();

	const initialData = {
		firstname: "",
		lastname: "",
		username: "",
		password: "",
		confirmpass: "",
	};
	const [data, setData] = useState(initialData);

	const [confirmPass, setConfirmPass] = useState(true);

	const handleChange = (event) => {
		setData({...data, [event.target.name]: event.target.value});
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		setConfirmPass(true)
		if(isSignUp) {
			data.password===data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false);
		}
		
		else{
			dispatch(logIn(data));
		}
	}

	const resetForm = () => {
		setConfirmPass(true);
		setData(initialData);
	}

	return (
		<div className='Auth'>
			<div className='a-left'>
				<img src={Logo} alt=''/>
				<div className='Webname'>
					<h1>TheShy Media</h1>
					<h6>Explore the ideas throughout the world</h6>
				</div>
			</div>
			<div className='a-right'>
				<form className='infoForm authForm' onSubmit={handleSubmit}>
					<h3>{isSignUp ? "Sign up" : "Log In"}</h3>
					{isSignUp && <div>
						<input 
							placeholder='First name' 
							className='infoInput' 
							name='firstname'
							value={data.firstname}
							onChange={handleChange}
						/>
						<input 
							placeholder='Last name' 
							className='infoInput' 
							name='lastname'
							value={data.lastname}
							onChange={handleChange}
						/>
					</div>}
					<div>
						<input
							style={{width: '428px'}}
							className='infoInput'
							name='username'
							placeholder='Username'
							value={data.username}
							onChange={handleChange}
						/>
					</div>
					<div>
						<input
							type='password'
							className='infoInput'
							name='password'
							placeholder='Password'
							value={data.password}
							onChange={handleChange}
						/>
						{isSignUp && <input
							type='password'
							className='infoInput'
							name='confirmpass'
							placeholder='Confirm Password'
							value={data.confirmpass}
							onChange={handleChange}
						/>}
					</div>
					<span style={{
							display: confirmPass ? "none" : "block",
							color: "red",
							fontSize: "16px",
							alignSelf: "flex-end",
							marginRight: "5px"
						}}
					>
						* Confirm Password is not same
					</span>
					<div>
						<span 
							style={{fontSize: "16px", cursor: "pointer"}}
							onClick={() => {setIsSignUp(!isSignUp); resetForm()}}
						>
							{loading ? "Loading..." : isSignUp ? "Already have an account? LOGIN" : "Don't have an account? SIGN UP"}
						</span>
					</div>
					<button className='button infoButton' type='submit' disabled={loading}>{isSignUp ? "Signup" : "Login"}</button>
				</form>
			</div>
		</div>
	)
}

const Login = () => {
	return (
		<div className="a-right">
		  <form className="infoForm authForm">
			<h2>Log In</h2>
	
			<div>
			  <input
				type="text"
				placeholder="Username"
				className="infoInput"
				name="username"
			  />
			</div>
	
			<div>
			  <input
				type="password"
				className="infoInput"
				placeholder="Password"
				name="password"
			  />
			</div>
	
			<div>
				<span style={{ fontSize: "16px" }}>
				  Don't have an account?Sign up
				</span>
			  <button className="button infoButton">Login</button>
			</div>
		  </form>
		</div>
	);
}

export default Auth