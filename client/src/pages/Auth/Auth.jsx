import React from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png";

const Auth = () => {
	return (
		<div className='Auth'>
			<div className='a-left'>
				<img src={Logo} alt=''/>
				<div className='Webname'>
					<h1>TheShy Media</h1>
					<h6>Explore the ideas throughout the world</h6>
				</div>
			</div>
			<SignUp/>
		</div>
	)
}

const SignUp = () => {
	return (
		<div className='a-right'>
			<form className='infoForm authForm'>
				<h3>Sign up</h3>
				<div>
					<input 
						placeholder='First name' 
						className='infoInput' 
						name='firstname'
					/>
					<input 
						placeholder='Last name' 
						className='infoInput' 
						name='lastname'
					/>
				</div>
				<div>
					<input
						className='infoInput'
						name='username'
						placeholder='Username'
					/>
				</div>
				<div>
					<input
						type='password'
						className='infoInput'
						name='password'
						placeholder='Password'
					/>
					<input
						type='password'
						className='infoInput'
						name='confirmpass'
						placeholder='Confirm Password'
					/>
				</div>
				<div>
					<span style={{fontSize: "16px"}}>Already have an account? LOGIN</span>
				</div>
				<button className='button infoButton' type='submit'>Signup</button>
			</form>
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