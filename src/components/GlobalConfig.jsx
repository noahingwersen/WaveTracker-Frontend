import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from '../context/AuthContext'

const GlobalConfig = ({ children }) => {
  return (
    <BrowserRouter>
      <SWRConfig
        value={{
          onError: (error) => {
            if (error?.showToast) {
              toast.error(error.toastMessage)
            }
          },
        }}
      >
        <AuthProvider>{children}</AuthProvider>
      </SWRConfig>
      <ToastContainer
        position='bottom-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme='light'
      />
    </BrowserRouter>
  )
}
export default GlobalConfig
