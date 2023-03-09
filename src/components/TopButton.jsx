import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);
  const width =window.innerWidth;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300 && width >= 768 ) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      {showButton && (
        <button
          className="fixed right-10 bottom-10 w-14 h-14 bg-blue-900 rounded-full flex items-center justify-center text-white shadow-md hover:shadow-l transition-all duration-200 hover:bg-pink-600"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <AiOutlineArrowUp className="w-7 h-7 text-current" />
        </button>
      )}
    </>
  );
}

export default BackToTopButton;
