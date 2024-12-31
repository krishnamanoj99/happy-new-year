import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Page9 = () => {
    return (
        <div className="bg-gradient-to-b from-blue-400 to-pink-300 h-screen w-screen flex flex-col justify-center items-center">
            <div className="text-white font-semibold text-2xl mb-10 w-[412]">HAPPY NEW YEAR!</div>
            <div className="text-white font-semibold text-3xl w-[412]">ittlu</div>
            <div className="text-white font-semibold text-3xl w-[412]">Mee priyudu</div>
            <div className="text-white font-semibold text-3xl w-[412]">Manoj</div>
            <div className="text-white font-semibold text-6xl mt-5">🤗</div>
            
            <div className="mt-10 flex space-x-10">
                <Link to="/page7">
                    <Icon icon="ic:baseline-keyboard-double-arrow-left" fontSize={70} color="white"/>
                </Link>
            </div>
        </div>
    )
}

export default Page9;