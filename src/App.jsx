import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
