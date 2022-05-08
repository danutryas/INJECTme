import './styles/css/reset.css'
import './styles/css/global.css'
import { ModalProvider } from "./components/Context/ModalContext";
import {BrowserRouter as Router} from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes';
import Modal from './components/Cards/Modal';

function App() {
    
  return (
    <ModalProvider >
        <div className="App">
          <Router>
            <AnimatedRoutes />
          </Router>
        </div>
      <Modal />
    </ModalProvider>
  );
}

export default App;
