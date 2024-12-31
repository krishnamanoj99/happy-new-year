import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Page1 = () => (
    <div className="bg-gradient-to-b from-blue-400 to-pink-300 h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-white font-semibold text-6xl">Oyyy!!</div>
        <div className="text-white font-semibold text-6xl mt-5">Harini</div>
        <div className="text-white font-semibold text-6xl mt-5">🩷</div>
        <div className="mt-10 flex space-x-10">
            <Link to="/page2">
                <Icon icon="ic:baseline-keyboard-double-arrow-right" fontSize={70} color="white" />
            </Link>

        </div>
    </div>
)

export default Page1;