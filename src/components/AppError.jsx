const AppError = () => {
  return (
    <div className='h-full w-full p-6'>
      <h1 className='font-bold text-6xl'>Unable to Load Webpage</h1>
      <h1 className='font-semibold text-2xl mb-4'>
        Massive, app breaking error
      </h1>
      <p>
        If you&apos;re seeing this page, something has gone horribly wrong. You
        can try again later, but it probably won&apos;t fix anything.
      </p>
    </div>
  )
}
export default AppError
