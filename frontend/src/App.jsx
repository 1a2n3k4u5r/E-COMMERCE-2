import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from'./pages/Home'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Verify from "./pages/ Verify";
import VerifyEmail from "./pages/VerifyEmail";
import Footer from "./components/Footer";
import Profile from "./pages/profile";

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
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile/>} />


      </Routes>
    </>
  );
}
