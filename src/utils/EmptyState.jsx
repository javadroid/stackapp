import { Empty } from "../assets/images";

const EmptyState = ({message}) => {
  return (
    <>
      <div className="flex-col py-6">
        <div className="flex justify-center items-center py-3">
          <img className="w-[25%] h-[25%]" src={Empty } alt="empty state" />
        </div>
        <p className="flex justify-center items-center">{message}</p>
      </div>
    </>
  );
}

export default EmptyState