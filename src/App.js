import React from "react";
import "./App.css";
import HeroPart from "./components/HeroPart";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
// import Companies from "./components/Companies";
import CallToAction from "./components/CallToAction";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="app">
        <Navbar />
        <HeroPart />
        <Highlights/>
        <CallToAction/>
        <Testimonials />
        {/* <Companies/> */}
        <Footer />
    </div>
  );
}

export default App;
