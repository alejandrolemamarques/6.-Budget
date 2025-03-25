import "./App.css";
import Calculator from "./pages/Calculator";
import Home from "./pages/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { BASE_URL } from "./config";

function App() {
    return (
        <Router>
            <NavBar />
            <div className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/calculator" element={<Calculator />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
