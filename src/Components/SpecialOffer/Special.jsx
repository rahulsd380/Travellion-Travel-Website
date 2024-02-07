import { FaStar } from "react-icons/fa";

const Special = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-4 gap-10">
            <div className="rounded-2xl bg-[#FFF8F1]">
                <img className="rounded-t-2xl mb-4" src="/public/images/1.jpg" alt="" />
                <div className="px-2 pb-2">
                <h1 className="text-2xl mb-1">Lisbon, Portugal</h1>
                <div className="flex items-center gap-2 text-yellow-500 mb-2">
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        </div>
                <p className="mb-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus quo ipsam eligendi consequuntur nobis.me quas eius!</p>

                <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <p>From</p>
                    <h1 className="text-2xl text-orange-400">
                        $500
                    </h1>
                </div>
                <button className="text-white bg-orange-400 font-semibold border-blue-400 rounded-md py-2 px-4">
                  Details
                </button>
                </div>
                </div>
            </div>
        </div>
        
        </div>
    );
};

export default Special;