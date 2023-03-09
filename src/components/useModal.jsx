import { useState } from "react";

const useModal = () => {
    
  const [openModal, setOpenModal] = useState(false);
  const handleButtonClick = () =>   setOpenModal(!openModal);

  return {
    openModal,
    handleButtonClick,
  };
};

export default useModal;
