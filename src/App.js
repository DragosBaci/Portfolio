import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { Skills } from "./components/Skills";
import Work from "./components/Work";
import { Contact } from "./components/Contact";
import BackToTopButton from "./components/TopButton";
import useNav from "./components/useNav";
import Modal from "./components/Modal";
import useModal from "./components/useModal";

function App() {
  const { nav, handleClick } = useNav();
  const { openModal, handleButtonClick } = useModal();

  return (
    <div className="App">
      <Navbar nav={nav} handleClick={handleClick} />
      <Home nav={nav} />
      <About />
      <Skills />
      <Work handleButtonClick={handleButtonClick} />
      {openModal && <Modal handleButtonClick={handleButtonClick} />}
      <Contact />
      <BackToTopButton />
    </div>
  );
}

export default App;
