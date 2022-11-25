import { ToastContainer } from "react-toastify";
import Dashboard from "./components/Dashboard";

import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}

export default App;
