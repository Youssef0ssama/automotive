import "./styles/variables.css";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import LoginForm from "./pages/login/loginForm";
import Brands from "./pages/brands/Brands";
import Home from "./pages/Home/Home";
import Models from "./pages/models/models";

function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <LoginForm /> */}
      {/* <Brands /> */}
      <Models />
      {/* <Home /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
