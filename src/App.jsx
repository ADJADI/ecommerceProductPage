import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./common/Nav/Navbar";
import Collection from "./components/Pages/Collection";
import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Main from "./components/home/Main";

function App() {
  const [isclicked, setIsClicked] = useState(false);

  const toggleNavLink = () => {
    setIsClicked(!isclicked);
  };

  return (
    <div className="xl:px-32 cursor-pointer">
      <Navbar />
      {isclicked ? <Main /> : ""}
      <Routes>
        <Route path={"/Main"} element={<Main />} onClick={toggleNavLink} />
        <Route
          path={"/Collection"}
          element={<Collection />}
          onClick={toggleNavLink}
        />
        <Route path={"/Men"} element={<Men />} onClick={toggleNavLink} />
        <Route path={"/Women"} element={<Women />} onClick={toggleNavLink} />
        <Route
          path={"/Contact"}
          element={<Contact />}
          onClick={toggleNavLink}
        />
        <Route path={"/About"} element={<About />} onClick={toggleNavLink} />
      </Routes>
    </div>
  );
}

export default App;
