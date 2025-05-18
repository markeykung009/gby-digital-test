import { Outlet } from "react-router-dom";
import "./App.css";
import type { JSX } from "react";
import Navbar from "./components/Navbar";

function App(): JSX.Element {
  return (
    <div className="">
      <div className="container px-6">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
