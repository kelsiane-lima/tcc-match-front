import RoutesArquivo from "./routes/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
     <ToastContainer />
      <RoutesArquivo />
    </>
  );
}

export default App;
