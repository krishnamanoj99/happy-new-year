import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Page7 = () => {
    return (
        <div className="bg-gradient-to-b from-blue-400 to-pink-300 h-screen w-screen flex flex-col justify-center items-center">
            <div className="text-white font-semibold text-3xl w-[412]">I can't appreciate</div>
            <div className="text-white font-semibold text-3xl w-[412]">enough.</div>
            <div className="text-white font-semibold text-6xl mt-5">🩷</div>
            <div className="mt-10 flex space-x-10">
                <Link to="/page6">
                    <Icon icon="ic:baseline-keyboard-double-arrow-left" fontSize={70} color="white"/>
                </Link>
                <Link to="/page8">
                    <Icon icon="ic:baseline-keyboard-double-arrow-right" fontSize={70} color="white"/>
                </Link>
            </div>
        </div>
    )
}

export default Page7;