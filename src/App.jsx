import React from "react";

function App() {
  return (
    <>
      <div className="flex sm:flex-col sm:items-center sm:text-center min-h-screen bg-red-400 text-white py-14 px-3">
        <h1 className="font-semibold text-3xl sm:px-4 mb-6">
          Learn to code by watching others
        </h1>
        <p className="mb-8">
          See how experienced developers solve problems in real-time, Watching
          scripted tutorials is great, but understandng how developers think is
          invaluable
        </p>
        <button className="bg-blue-800 sm:w-full py-4 px-6 mb-4 rounded-md shadow-xl ">
          <strong>Try it free 7days</strong> then $20/mo. thereafter
        </button>
        <div className="bg-white rounded-md sm:w-full p-5 text-black shadow-xl">
          <form>
            <input
              type="text"
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-4 w-full mb-4"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-4 w-full mb-4"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-4 w-full mb-4"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border border-gray-300 rounded-md p-4 w-full mb-4"
              required
            />
            <button className="bg-green-400 w-full py-4 px-6 mb-4 rounded-md shadow-xl text-white tracking-widest">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-xs text-gray-400 leading-6">
              By Clicking the button, you are agreeing to our{" "}
              <a href="#" className="text-red-400" alt="click">
                Terms and Services
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
