
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Verify from "./pages/ Verify";
import VerifyEmail from "./pages/VerifyEmail";
import Footer from "./components/Footer";

function Home() {
  return <h1 className="p-10 text-2xl">Home Page</h1>;
}

function Login() {
  return <h1 className="p-10 text-2xl">Login Page</h1>;
}

export default function App() {
  return (
    <>
      <Navbar /><Home/><Footer/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/verify/:token" element={<VerifyEmail/>} />
        <Route path="/Footer" element={<Footer/>} />


      </Routes>
    </>
  );
}
