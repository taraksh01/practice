import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import App from "./App";
import Contact from "./Contact";
import About from "./About";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
