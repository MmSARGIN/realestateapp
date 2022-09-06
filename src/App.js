import { Routes, Route } from "react-router";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signin from './components/Signin';
import About from "./components/About";
import Properties from "./components/Properties";

function App() {
  return (
    <div className="m-0 p-0 block">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
    </div>
  );
}

export default App;
