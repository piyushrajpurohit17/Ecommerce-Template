import React, { useState } from 'react';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="backdrop-blur-md bg-white/30 border border-white/40 rounded-2xl shadow-lg p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-white mb-6">
          {isLogin ? 'Login to Your Account' : 'Create an Account'}
        </h2>

        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 rounded-lg bg-white/60 placeholder:text-gray-700 focus:outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-lg bg-white/60 placeholder:text-gray-700 focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-lg bg-white/60 placeholder:text-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-white/40" />
          <span className="text-white mx-2">or</span>
          <div className="flex-grow h-px bg-white/40" />
        </div>

        <button className="flex items-center justify-center gap-3 border border-white/50 bg-white/70 hover:bg-white text-gray-800 py-2 px-4 rounded-lg transition w-full">

                    Continue with Google
        </button>

        <p className="text-white mt-4">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            className="underline hover:text-green-300"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
