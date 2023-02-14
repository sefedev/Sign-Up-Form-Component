import React, { useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [modalOn, setModalOn] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = "First Name cannot be empty";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last Name cannot be empty";
    }

    if (!formData.email) {
      newErrors.email = "Email cannot be empty";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Looks like this is not an Email";
    }

    if (!formData.password) {
      newErrors.password = "Password cannot be empty";
    }

    setErrors(newErrors);

    console.log(errors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setModalOn(true);
    }
  };

  return (
    <>
      {modalOn && <Modal setModalOn={setModalOn} formData={{formData, setFormData}} />}

      <div className="flex sm:flex-col md:flex-col sm:items-center sm:text-center min-h-screen bg-[url('/assets/bg-intro-desktop.png')] sm:bg-[url('/assets/bg-intro-mobile.png')] bg-red-400 opacity-75 text-white py-14 sm:px-3 px-36">
        <div className="flex flex-col justify-center lg:px-20">
          <h1 className="font-bold sm:font-semibold text-4xl sm:text-3xl sm:px-4 mb-6">
            Learn to code by watching others
          </h1>
          <p className="mb-8">
            See how experienced developers solve problems in real-time, Watching
            scripted tutorials is great, but understandng how developers think
            is invaluable
          </p>
        </div>
        <div className="flex flex-col justify-center text-center min-w-fit">
          <button className="bg-blue-800 sm:w-full py-4 px-6 mb-4 rounded-md shadow-xl hover:bg-blue-500 transition duration-150">
            <strong>Try it free 7days</strong> then $20/mo. thereafter
          </button>
          <div className="bg-white rounded-md sm:w-full p-5 text-black shadow-xl">
            <form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                errors={errors}
                formData={{ formData, setFormData }}
              />

              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                errors={errors}
                formData={{ formData, setFormData }}
              />

              <Input
                type="text"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                errors={errors}
                formData={{ formData, setFormData }}
              />

              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                errors={errors}
                formData={{ formData, setFormData }}
              />
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-300 transition duration-150 w-full py-4 px-6 mb-4 rounded-md shadow-xl text-white tracking-widest"
              >
                CLAIM YOUR FREE TRIAL
              </button>
              <p className="text-xs text-gray-400 leading-6">
                By Clicking the button, you are agreeing to our{" "}
                <a
                  href="#"
                  className="text-red-400 hover:underline transition duration-150"
                  alt="click"
                >
                  Terms and Services
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
