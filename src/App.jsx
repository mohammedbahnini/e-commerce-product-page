import { useState } from "react";
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import Product from "./components/Product/Product";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = ()=>{
      setIsMenuOpen(false);
  }

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  }
  return (
    <>
    <Header handleOpenMenu={handleOpenMenu} />
    <Menu  isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
    <Product />
    </>
  )
}

export default App
