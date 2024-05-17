import "./App.css";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ForgetPasswordPage from "./components/ForgetPasswordPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route
            path="/forget-password"
            element={<ForgetPasswordPage />}
          ></Route>
          <Route path="/home" element={<HomePage />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Footer = () => {
  return (
    <p className="text-center" style={FooterStyle}>
      Designed & created by{" "}
      <a href="https://google.com" target="_blank" rel="noopener noreferrer">
        <b>
          <u>iusStudio Learnings</u>
        </b>
      </a>
    </p>
  );
};

const FooterStyle = {
  background: "#222",
  fontSize: "0.8rem",
  color: "#fff",
  position: "absolute",
  bottom: "0",
  padding: "1rem",
  margin: "0",
  width: "100%",
  opacity: "0.7",
};

export default App;
