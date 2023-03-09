import React from "react";
import "./Modal.css";

function Modal({ handleButtonClick }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-opacity-50 bg-gray-500">
      <div className="bg-[#0a192f] p-8 rounded-lg shadow-lg">
        <div className="modalBackground">
          <div className="modalContainer">
            <button
              onClick={handleButtonClick}
              className="absolute top-2 right-2"
            >
              X
            </button>
            <div className="title"></div>
            <div className="body">
              <p className="text-lg text-white">
                CarFlow is a web application designed to help you manage your
                cars with ease. Whether you own one car or many, CarFlow
                simplifies the car management process by providing a
                user-friendly interface for recording important details such as
                maintenance costs, profits, oil changes, and other relevant
                information. Our application, built with ReactJS on the frontend
                and ASP.net on the backend, is optimized to ensure a smooth and
                efficient experience for all users. Keep an eye out for future
                updates as we continue to improve CarFlow's capabilities.
              </p>
            </div>
            <div className="footer flex justify-end mt-4">
              <button
                onClick={handleButtonClick}
                className="px-4 py-2 mr-4 text-sm font-medium text-gray-500 bg-pink-700  rounded-md hover:bg-gray-300"
                id="cancelBtn"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
