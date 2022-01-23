import "./styles/App.scss";

import Main from "./pages/Main";
import Footer from "./components/Footer";
import Productpage from "./pages/Productpage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Productpage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
