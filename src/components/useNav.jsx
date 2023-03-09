import { useState } from "react";

const useNav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return {
    nav,
    handleClick,
  };
};

export default useNav;
