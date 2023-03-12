import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import Navibar from "./components/NaviBar/Navibar";

function App() {
  return (
    <NextUIProvider>
      <Navibar/>
      <h1>hello world</h1>
    </NextUIProvider>
  );
}

export default App;
