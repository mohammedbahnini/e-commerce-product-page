import { useState } from "react";
import Header from "./components/Header/Header"
import Menu from "./components/Menu/Menu"
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  }

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  }
  return (
    <>
      <Header handleOpenMenu={handleOpenMenu} />
      <Menu isMenuOpen={isMenuOpen} handleCloseMenu={handleCloseMenu} />
      <ProductDetails />
    </>
  )
}

export default App
