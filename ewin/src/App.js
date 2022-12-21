import React from "react";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";
import { MyProjects } from "./Components/MyProjects";
import { MyInstallations } from "./Components/MyInstallations";
import { useSelector } from "react-redux";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const App = () => {
  const loggedIn = useSelector(state=> state.login?.access_token)
  return (
    <div >
      <BrowserRouter>
      {loggedIn? <Sidebar>
        <Routes>
        <Route path="/" element={<Login />} />
          <Route  path="/Home" element={<Home />}/>
          <Route path="/myProjects" element={<MyProjects />} />
          <Route path="/myInstallations" element={<MyInstallations />} />
        </Routes>
        </Sidebar>: <Routes><Route path="/" element={<Login />} /></Routes> }
      </BrowserRouter>
    </div>
  );
};
