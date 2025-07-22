import { FaTelegram } from "react-icons/fa";
import StateAuth from "./_component/state";
import Social from "./_component/social";
import { ModeToggle } from "@/components/shared/mode-toggle";


const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container max-w-md w-full flex flex-col items-center space-y-4">
        <FaTelegram size={120} className="text-blue-500" /> 
        <h1 className="text-4xl font-bold">Telegram</h1>
        
        <StateAuth />
        <Social />
      </div>
      <ModeToggle />
    </div>
  );
};

export default Page;
