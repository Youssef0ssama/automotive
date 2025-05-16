import "./styles/variables.css";
import NavBar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import RoutesConfig from "./routes/RoutersConfig";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <RoutesConfig />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
