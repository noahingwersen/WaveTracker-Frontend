const BlankForm = ({ header, form }) => {
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className='min-w-[500px] rounded-xl bg-white flex flex-col px-14 py-8'>
        <h2 className='text-4xl font-medium my-10 text-center'>{header}</h2>
        {form}
      </div>
    </div>
  )
}
export default BlankForm
