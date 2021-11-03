import { Animated } from 'react-animated-css';
import Video from './slider';

const Portfolio = () => {
  return (
    <div className="container">
      <div className="row">
        <Animated animationIn="fadeInDown" animationInDuration={3000}>
          <h2 className="center">Portfolio</h2>
        </Animated>
        <Video />
      </div>
    </div>
  );
};
export default Portfolio;
