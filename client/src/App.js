import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import about from "./components/about"
import navbar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <>
    <navbar/>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<about />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
