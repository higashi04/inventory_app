import { NextUIProvider } from "@nextui-org/react";
import { Route, Routes, BrowserRouter, Outlet } from "react-router-dom";
import "./App.css";
import Navibar from "./components/NaviBar/Navibar";

//pages
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <NextUIProvider>
      <BrowserRouter>
      <Navibar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Outlet/>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
