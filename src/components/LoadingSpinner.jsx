import { MoonLoader } from "react-spinners"

const LoadingSpinner = () => {
  return (
    <div className="absolute w-full h-full flex justify-center items-center z-[1001]">
    <div>
        <MoonLoader color="#36d7b7"/>
    </div>
</div>
  )
}
export default LoadingSpinner