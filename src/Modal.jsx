import React, { useState } from "react";

const Modal = ({ setModalOn, formData }) => {
  const handleClick = () => {
    setModalOn(false);
    formData.setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };
  return (
    <div
      className="bg-gray-400 opacity-80 fixed inset-0 z-10"
      onClick={handleClick}
    >
      <div className="flex h-screen justify-center opacity-100 items-center">
        <div className="flex flex-col items-center rounded-lg shadow-md bg-white p-7 sm:p-4 w-1/3 h-auto sm:w-full">
          <h1 className="font-semibold text-lg">Announcement</h1>
          <hr className="w-full my-3" />
          <p className="mb-3">
            Welcome on board! {formData.formData.firstName}{" "}
            {formData.formData.lastName}, a link has been sent to{" "}
            {formData.formData.email} to confirm you email address
          </p>

          <button
            onClick={handleClick}
            className="py-3 px-5 bg-blue-700 text-white rounded-lg shadow-sm sm:w-full"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
