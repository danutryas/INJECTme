import './styles/css/reset.css'
import './styles/css/global.css'
import { ModalProvider } from "./components/Context/ModalContext";
import {BrowserRouter as Router} from "react-router-dom";
// import { ScrollProvider } from "./components/Context/ScrollContext"
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
    
  return (
    <ModalProvider >
        <div className="App">
          <Router>
            <AnimatedRoutes />
          </Router>
        </div>
    </ModalProvider>
  );
}

export default App;
