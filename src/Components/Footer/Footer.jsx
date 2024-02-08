

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <div className="flex items-center gap-3">
            <img className="w-7" src="/public/logo.png" alt="" />
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Travellion
            </h1>
          </div>
          <p className="text-white">
            Copyright © Travellian 2020 All rights reserved
          </p>
        </div>

        <div>
            <h1 className="text-xl text-white mb-3">Menu</h1>
            <p className="text-white mb-1">Home</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
