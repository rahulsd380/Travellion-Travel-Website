import { FaArrowRightLong } from "react-icons/fa6";

const Blog = () => {
  return (
    <div className="max-w-7xl mx-auto py-10">
     <div>
     <div className="mb-10">
        <h1 className="text-3xl mb-3">Our Blogs</h1>
        <div className="h-0.5 w-44 bg-orange-500 mb-2"></div>
        <p className="">
        An insight the incredible experience in the world
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <img className="rounded-2xl" src="/public/images/7.jpg" alt="" />
        <div className="">
            <h1 className="mb-2 text-3xl">Beautiful Italy <br /> Let’s travel</h1>
            <p className="mb-3">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
            <p className="text-orange-500 flex items-center gap-2">Read More <FaArrowRightLong></FaArrowRightLong></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <img className="rounded-2xl" src="/public/images/7.jpg" alt="" />
        <div className="">
            <h1 className="mb-2 text-3xl">Beautiful Italy <br /> Let’s travel</h1>
            <p className="mb-3">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids plasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremly painful. Nor again is there anyone who loves or pursues.</p>
            <p className="text-orange-500 flex items-center gap-2">Read More <FaArrowRightLong></FaArrowRightLong></p>
        </div>
      </div>
      </div>
     </div>
    </div>
  );
};

export default Blog;
