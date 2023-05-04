import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
	const [fullname, setFullname] = useState('');
	const [age, setAge] = useState('');
	const [address, setAddress] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();

	const onSubmit = async (event) => {
		event.preventDefault();
		try{
			await axios.post('http://localhost:4000/users/signup', {fullname, age, address, username, password});
			alert("Sign Up SuccessFull!");
			navigate('/');
		}catch(err) {
			console.error(err);		}
	}

	return (
		<div>
			<div className="min-h-screen bg-blue-400 flex justify-center items-center">
				<div className="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
				</div>
				<div className="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
				</div>
				<div className="py-10 px-12 bg-white rounded-2xl shadow-xl z-20">
					<div>
						<h1 className="text-2xl font-bold text-center mb-4 cursor-pointer">Sign Up Now!</h1>

					</div>
					<form onSubmit={onSubmit}>
					<div className="space-y-4">
						<input type="text" placeholder="Full Name" htmlFor='fullname' className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" onChange={(event) => setFullname(event.target.value)}/>
						<input type="number" placeholder="Age" htmlFor='age' className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" onChange={(event) => setAge(event.target.value)}/>
						<input type="text" placeholder="Address" htmlFor='address' className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" onChange={(event) => setAddress(event.target.value)}/>
						<input type="text" placeholder="Username" htmlFor='username' className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" onChange={(event) => setUsername(event.target.value)}/>
						<input type="password" placeholder="Password" htmlFor='password' className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" onChange={(event) => setPassword(event.target.value)}/>
					</div>
					<div className="text-center mt-6">
						<button type='submit' className="py-1 w-64 text-xl text-white font-bold bg-blue-400 rounded-2xl">Sign Up</button>
						<p className="mt-4 text-sm font-bold">Already Sign Up? <Link to= '/'className="underline cursor-pointer font-bold text-blue-400"> Click here</Link>
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

export default Signup