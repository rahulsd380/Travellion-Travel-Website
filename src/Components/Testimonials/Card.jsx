import { FaStar } from "react-icons/fa6";


const Card = () => {
    return (
        <div>
            <div className="bg-[#f5f6f7] p-3 rounded-md relative">
            <div className="avatar absolute bottom-40">
  <div className="w-16 rounded-full">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>
                <p className="text-gray-500 mb-3 mt-5">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.</p>
                <div className="flex items-center gap-2 text-yellow-400 mb-3">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        </div>

        <h1 className="text-2xl text-gray-500">Rahul Sutradhar</h1>
        <p className="text-gray-400">Web Developer</p>
            </div>
        </div>
    );
};

export default Card;