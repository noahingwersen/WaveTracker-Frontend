import useApiData from '../../hooks/useApiData'
import { Circles } from 'react-loader-spinner'
import Map from '../../components/Map'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import SpotRatingList from './components/SpotRatingList'

const MainPage = () => {
  const [loading, markerData, errors] = useApiData('/api/markers/')

  useEffect(() => {
    if (errors) {
      toast.error('Unable to fetch markers')
    }
  }, [errors])

  return (
    <>
      {!loading ? (
        <div className="main-page">
          <Map markerData={markerData} />
        </div>
      ) : (
        <Circles
          height="80"
          width="80"
          color="white"
          ariaLabel="circles-loading"
          wrapperClass="loader"
          visible={true}
        />
      )}
    </>
  )
}
export default MainPage
