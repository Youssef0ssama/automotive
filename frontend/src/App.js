import "./styles/variables.css";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import LoginForm from "./pages/login/loginForm";
import Brands from "./pages/brands/Brands";
import Home from "./pages/Home/Home";
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <LoginForm /> */}
      {/* <Brands /> */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
