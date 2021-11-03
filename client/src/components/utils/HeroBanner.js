import '../../css/heroBanner.css';
import { Animated } from 'react-animated-css';

const HeroBanner = () => {
  return (
    <Animated animationIn="fadeInDown" animationInDuration={3000}>
      <div className="wrapper-banner">
        <img src={process.env.PUBLIC_URL + '/images/banner.png'} alt="banner" />
      </div>
    </Animated>
  );
};
export default HeroBanner;
