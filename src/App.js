import { Routes, Route } from "react-router";
import Home from './components/Home';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signin from './components/Signin';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />

      </Routes>
    </div>
  );
}

export default App;
