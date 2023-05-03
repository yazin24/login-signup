import React from 'react'

const Login = () => {
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
		<div className="space-y-4">
			<input type="text" placeholder="Username" className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="password" placeholder="Password" className="block text-sm font-bold py-3 px-4 rounded-lg w-full border outline-none" />
    </div>
			<div className="text-center mt-6">
				<button className="py-1 w-64 text-xl text-white font-bold bg-blue-400 rounded-2xl">Sign In</button>
				<p className="mt-4 text-sm font-bold">Need to Sign Up? <span className="underline cursor-pointer font-bold text-blue-400"> Click here</span>
				</p>
			</div>
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