import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { useLocation } from "react-router-dom";
import { Main } from "./components/Main/Main";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Error from "./components/Error/Error";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";
// axios.defaults.baseURL =
//   "https://countriesback-production-0f6d.up.railway.app/";

function App() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="App">
      {pathname === "/" ? (
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="*" element={<Error />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/activity" element={<Form />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
