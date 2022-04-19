import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import "./styles/style.scss";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
