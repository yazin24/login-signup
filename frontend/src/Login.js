import React, {useState} from 'react'
import {useCookies} from 'react-cookie';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const [_, setCookies] = useCookies(['access_token']);

	const onSubmit = async (event) => {

		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:4000/users/login', {username, password});
			setCookies('access_token', response.data.token);
			window.localStorage.setItem('Name', response.data.username);
			alert('Sign In Sucessfull!');
			navigate('/home');
		}catch(err) {
			console.error(err);
		}
	}

  return (
    <div>
      <div className="min-h-screen bg-blue-400 flex justify-center items-center">
	<div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">Sign In!</h1>
		</div>
		<form onSubmit={onSubmit}>
		<div className="space-y-4">
			<input htmlFor='username' name='paswword' required type="text" placeholder="Username" className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" onChange={(event) => setUsername(event.target.value)}/>
			<input htmlFor='username' name='paswword' required type="password" placeholder="Password" className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" onChange={(event) => setPassword(event.target.value)}/>
    </div>
			<div className="text-center mt-6">
				<button type='submit' className="py-1 w-64 text-xl text-white font-bold bg-blue-400 rounded-2xl">Sign In</button>
				<p className="mt-4 text-sm font-bold">Need to Sign Up? <span className="underline cursor-pointer font-bold text-blue-400"> Click here</span>
				</p>
			</div>
			</form>
		</div>
		
		<div className="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			className="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div>
    </div>
  )
}

export default Login