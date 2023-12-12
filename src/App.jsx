import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./common/Nav/Navbar";
import Collection from "./components/Pages/Collection";
import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Main from "./components/home/Main";

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Main />
        <Routes>
          <Route path={"/Collection"} element={<Collection />} />
          <Route path={"/Men"} element={<Men />} />
          <Route path={"/Women"} element={<Women />} />
          <Route path={"/Contact"} element={<Contact />} />
          <Route path={"/About"} element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
