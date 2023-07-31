import HomePage from "./pages/Home/HomePage";
import "./App.css";
import Navbar from "./components/Navbar";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SWRConfig } from "swr";

function App() {
  return (
    <>
      <SWRConfig
        value={{
          onError: (error, key) => {
            if (error?.showToast) {
              toast.error(error.toastMessage);
            }
          },
        }}
      >
        <Navbar />
        <HomePage />
      </SWRConfig>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
