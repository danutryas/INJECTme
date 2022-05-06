import FindLocation from "./pages/FindLocation";
import Landing from "./pages/Landing";
import './styles/css/reset.css'
import './styles/css/global.css'
import { ModalProvider } from "./components/Context/ModalContext";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { ScrollProvider } from "./components/Context/ScrollContext"

function App() {
  
  return (
    <ModalProvider >
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Landing  />}/>
              <Route path="/find" element={<FindLocation />}/>
            </Routes>
          </Router>
        </div>
    </ModalProvider>
  );
}

export default App;
