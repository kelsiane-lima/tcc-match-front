import RoutesArquivo from "./routes/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SideBar from "./components/SideBar/index.js";

function App() {

  return (
    <>
     <SideBar/>
     <ToastContainer />
      <RoutesArquivo />
    </>
  );
}

export default App;
