import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from "../../../../assets/bg/1.jpeg";
import bg2 from "../../../../assets/bg/2.avif";
import bg3 from "../../../../assets/bg/3.avif";

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
    >
      <div className="banner-slide h-[700px]">
        <img src={bg1} alt="Slide 1" />
        <div className="banner-overlay">
          <h2>Welcome to Artistry Academy</h2>
          <p>Unleash your creativity and explore the world of art.</p>
          <button className="banner-button">Learn More</button>
        </div>
      </div>
      <div className="banner-slide">
        <img src={bg2} alt="Slide 2" />
        <div className="banner-overlay">
          <h2>Discover Your Artistic Passion</h2>
          <p>Join our diverse community of artists and express yourself.</p>
          <button className="banner-button">Get Started</button>
        </div>
      </div>
      <div className="banner-slide">
        <img src={bg3} alt="Slide 3" />
        <div className="banner-overlay">
          <h2>Unlock Your Creative Potential</h2>
          <p>Experience innovative art classes and workshops.</p>
          <button className="banner-button">Enroll Now</button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
