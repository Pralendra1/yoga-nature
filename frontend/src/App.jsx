import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Imp/Navbar.jsx";
import Footer from "./components/Imp/Footer.jsx";
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import Yoga from "./pages/Yoga.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/yoga/:id" element={<Yoga />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
