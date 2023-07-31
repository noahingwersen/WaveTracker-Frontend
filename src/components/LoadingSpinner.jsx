import { BounceLoader, MoonLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="absolute w-full h-full bg-black opacity-50 flex justify-center items-center z-[1001]">
      <MoonLoader color="#36d7b7" size={60} />
    </div>
  );
};
export default LoadingSpinner;
