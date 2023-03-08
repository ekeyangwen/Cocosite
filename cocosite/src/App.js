import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./pages/home";
import Apropos from "./pages/aproposdeColineMichon";
import PourquoiConsulter from "./pages/pourquoiConsulterOsteo";
import InfosPratiquesCabinetColineMichon from "./pages/infosPratiquesCabinetColineMichon";
import LiensColineMichon from "./pages/liensColineMichon";
import ScrollToTop from "./Components/ScrollToTop";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aproposdeColineMichon" element={<Apropos />} />
          <Route
            exact
            path="/pourquoiConsulterOsteo"
            element={<PourquoiConsulter />}
          />{" "}
          <Route
            exact
            path="/infosPratiquesCabinetColineMichon"
            element={<InfosPratiquesCabinetColineMichon />}
          />
          <Route
            exact
            path="/liensColineMichon"
            element={<LiensColineMichon />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
