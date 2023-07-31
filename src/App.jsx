import HomePage from './pages/Home/HomePage'
import './App.css'
import Navbar from './components/Navbar'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SWRConfig } from 'swr'
import NotFound from './components/NotFound'

function App() {
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
        <Navbar />
        <div className='box-border pt-16 h-full'>
          <Routes>
            <Route element={<NotFound />} path='*' />
            <Route element={<HomePage />} path='/' exact />
          </Routes>
        </div>
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

export default App
