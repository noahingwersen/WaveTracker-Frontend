const MapError = () => {
  return (
    <div className='h-[93vh] w-full relative flex items-center justify-center z-[1001]'>
      <img
        src='blurred_map.png'
        className='h-full w-full top-0 left-0 absolute object-fill'
      />
      <h1 className='text-4xl z-10'>Unable to Load Map</h1>
    </div>
  )
}
export default MapError
