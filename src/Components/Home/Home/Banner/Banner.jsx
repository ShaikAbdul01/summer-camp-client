import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from "../../../../assets/bg/1.jpg";
import bg2 from "../../../../assets/bg/2.jpg";
import bg3 from "../../../../assets/bg/3.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={3000}
      className="w-full"
    >
      <div className="banner-slide h-[400px] md:h-[500px] lg:h-[700px]">
        <img src={bg1} alt="Slide 1" className="w-full h-full object-cover" />
        <div className="banner-overlay">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Welcome to Artistry Academy
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Unleash your creativity and explore the world of art.
          </p>
          <button className="mt-6 py-2 px-4 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Sign Up</button>
        </div>
      </div>
      <div className="banner-slide h-[400px] md:h-[500px] lg:h-[700px]">
        <img src={bg2} alt="Slide 2" className="w-full h-full object-cover" />
        <div className="banner-overlay">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Discover Your Artistic Passion
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Join our diverse community of artists and express yourself.
          </p>
          <button className="mt-6 py-2 px-4 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Sign Up</button>
        </div>
      </div>
      <div className="banner-slide h-[400px] md:h-[500px] lg:h-[700px]">
        <img src={bg3} alt="Slide 3" className="w-full h-full object-cover" />
        <div className="banner-overlay">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Unlock Your Creative Potential
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl">
            Experience innovative art classes and workshops.
          </p>
          <button className="mt-6 py-2 px-4 bg-blue-400 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Sign Up</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
