import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import MetaalPage from "./pages/metaal/metaal-page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<MetaalPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
