import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Page2 = () => {
    return (
        <div className="bg-gradient-to-b from-blue-400 to-pink-300 h-screen w-screen flex flex-col justify-center items-center">
            <div className="text-white font-semibold text-4xl w-[412]">Before 2024 ends...</div>
            <div className="text-white font-semibold text-4xl w-[412]">I just wanna tell you </div>
            <div className="mt-10 flex space-x-10">
                <Link to="/page1">
                    <Icon icon="ic:baseline-keyboard-double-arrow-left" fontSize={70} color="white"/>
                </Link>
                <Link to="/page3">
                    <Icon icon="ic:baseline-keyboard-double-arrow-right" fontSize={70} color="white"/>
                </Link>

            </div>
        </div>
    )
}

export default Page2;