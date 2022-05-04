import { useContext } from "react";
import FindLocation from "./pages/FindLocation";
import Landing from "./pages/Landing";
import './styles/css/reset.css'
import './styles/css/global.css'
import { ModalProvider } from "./components/Context/ModalContext";

function App() {
  return (
    <ModalProvider >
      <div className="App">
        <Landing  />
        {/* <FindLocation /> */}
      </div>
    </ModalProvider>
  );
}

export default App;
