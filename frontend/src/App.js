import NavBar from "./components/navbar/Navbar";
import "./styles/variables.css";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
