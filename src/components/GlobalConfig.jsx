import { BrowserRouter } from 'react-router-dom'
import { SWRConfig } from 'swr'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
        {children}
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
