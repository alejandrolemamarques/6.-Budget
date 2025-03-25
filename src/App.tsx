import "./App.css";
import Calculator from "./pages/Calculator";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { BASE_URL } from "./config";

function App() {
    return (
        <Router basename={BASE_URL.slice(0, -1)}>
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
