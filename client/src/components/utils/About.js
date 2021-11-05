import { Animated } from 'react-animated-css';
import '../../css/about.css';

const About = () => {
  return (
    <div className="container">
      {/* <Animated animationIn="fadeInUp" animationInDuration={3000}> */}
      {/* Title */}
      <h2 className="center">About me</h2>
      {/* About */}
      <div className="wrapper-about">
        {/* <div className="wrapper-about-parent-img"> */}
        <div className="wrapper-about-img">
          <img
            className="responsive-img"
            src={process.env.PUBLIC_URL + '/images/Erix_Mercedes_Director.jpg'}
            alt="logo"
          />
        </div>
        {/* </div> */}

        <div className="text-about">
          <p>
            After more than a decade of working on high-end content for national
            consumer brands and independent entertainment houses, Erix dove
            headfirst into showcasing his directorial skills in a diverse range
            of commercial genres. Using experience and expertise to
            strategically build brand awareness through customized storytelling
            and social media strategy, he was able to land a spot on six film
            festivals and win three awards for best commercial.
          </p>
          <p>
            Before directing, Erix edited and delivered projects for huge
            television and streaming networks like ESPN, Netflix, and Digital
            commercials for Unilever brands. His work as an Editor consists of
            projects like “1 of 1 Genesis” produced by ESPN, Marvel and Live
            Star Entertainment, “A More Perfect Union” produced by ESPN, and
            Live Star Entertainment.
          </p>
          <p className="signature">Erix Mercedes</p>
        </div>
      </div>
      {/* </Animated> */}
    </div>
  );
};
export default About;
