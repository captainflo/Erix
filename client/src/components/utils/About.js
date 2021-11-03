import { Animated } from 'react-animated-css';
import '../../css/about.css';

const About = () => {
  return (
    <div className="container">
      <div className="row">
        <Animated animationIn="fadeInDown" animationInDuration={3000}>
          <h2 className="center">Who is Erix Mercedes</h2>
        </Animated>
        <Animated animationIn="fadeInRight" animationInDuration={3000}>
          <div className="col s12 l6">
            <div className="wrapper-about">
              <img
                className="responsive-img"
                src={process.env.PUBLIC_URL + '/images/Erix-profile-1.png'}
                alt="logo"
              />
            </div>
          </div>
        </Animated>
        <Animated animationIn="fadeInLeft" animationInDuration={3000}>
          <div className="col s12 l6">
            <p>
              Erix Mercedes is a highly skilled Film Director with over 13 years
              of experience in all aspects of video production.{' '}
            </p>
            <p>
              Erix has directed 2 award-winning spec commercials that have been
              selected for 6 film festivals and already winning 3 awards for
              best commercial. He has a passion for creating heartwarming
              narratives mixed with branded content.{' '}
            </p>
            <p>
              Before directing, Erix edited and delivered projects for huge
              television and streaming networks like ESPN, Netflix, and Digital
              commercials for Unilever brands. He’s worked as an editor and
              cameraman for many documentaries such as “1 of 1 Genesis” produced
              by ESPN, Marvel and Live Star Entertainment, “A More Perfect
              Union” produced by ESPN and Live Star Entertainment and Skum
              Rocks, directed by Hart Baur and narrated by Alice Cooper.
            </p>
            <p>
              Seasonal ongoing projects like “Broadcast & Cable Hall of Fame”
              and “The Wonder Woman Awards” have allowed Erix the opportunity to
              edit video packages for big network executives like Disney’s Chief
              Executive Officer, Bob Iger, and NFL’s New England Patriots Chief
              Executive Officer, Robert Kraft. Not to mention the most powerful
              and influential women in the Industry like Chief Brand Officer of
              WWE, Stephanie McMahon, and the United States Chief Executive
              Officer of the National Geographic Channel, Courteney Monroe. Erix
              earned his degree in Film/Video Production from Miami
              International University of Art and Design. He’s currently part of
              Unilever’s U-Studio team where he edits many ads for different
              brands such as Suave Men, Pure Leaf, Breyers Ice Cream, St. Ives
              and Dove Men+Care.
            </p>
            <p className="signature">Erix Mercedes</p>
          </div>
        </Animated>
      </div>
    </div>
  );
};
export default About;
