import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../css/slider.css';
import { Animated } from 'react-animated-css';

export default class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    return (
      <div className="wrapper-slider">
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          arrows={false}
        >
          <>
            <div className="wrapper-video">
              <video class=" video-style" controls>
                <source
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635980233/Erix/Than_You_Big_Brother_Spec.mp4"
                  type="video/mp4"
                />
              </video>
              <h6 className="title-portfolio">Thank you big brother</h6>
              <p>
                I created this spec commercial for national siblings day.
                Inspired by Derrick Rose' signature sneakers. Derrick is an
                athlete that always gives thanks to his older siblings. We
                sometimes forget the sacrifices our brothers and sisters give in
                order to invest in our own goals.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" controls>
                <source
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635981760/Erix/11092016_JRW_Trailer_v2.mp4"
                  type="video/mp4"
                />
              </video>
              <h6 className="title-portfolio">Jackie Robinson west</h6>

              <p>
                Immersing the viewer in Southside Chicago, Jackie Robinson West
                follows the buildup and backlash of the team's exciting run by
                examining conﬂicting perspectives. Two opposing views of the
                success of the team create a conﬂict that challenges and
                embodies the issues of race relations, youth sports, and
                assumptions of character. The ﬁlm joins the party as parents,
                coaches, and players gather around a team that bursts out from
                the violence in its neighborhoods and becomes the pride of
                Chicago only to see it all come crashing down with allegations
                of illegal recruitment that would revoke their title.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" controls>
                <source
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635980234/Erix/TERMANA_FINAL_DFFNY_1920x1080.mp4"
                  type="video/mp4"
                />
              </video>
              <h6 className="title-portfolio"> Fathers day spec ( Teremana)</h6>

              <p>
                A US Marine Vet gives thanks to his mentor after stepping up to
                the plate when his father passed away.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" controls>
                <source
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635980221/Erix/MATCHA_TEA_DRINKERS.mp4"
                  type="video/mp4"
                />
              </video>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" controls>
                <source
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635980221/Erix/PURE_LEAF_COFFEE_LOVER.mp4"
                  type="video/mp4"
                />
              </video>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" controls>
                <source
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635980221/Erix/PURE_LEAF_HEALTH_WELLNESS.mp4"
                  type="video/mp4"
                />
              </video>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" controls>
                <source
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635980221/Erix/PURE_LEAF_BAKING_ENTHUSIAST.mp4"
                  type="video/mp4"
                />
              </video>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
              </p>
            </div>
          </>
        </Slider>
        {/* Second Slider */}
        <Slider
          asNavFor={this.state.nav1}
          ref={(slider) => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className="logo-wrapper">
            <img
              className="responsive-img"
              src={process.env.PUBLIC_URL + '/images/images.jpeg'}
              alt="logo"
            />
          </div>
          <div className="logo-wrapper">
            <img
              className="responsive-img"
              src={process.env.PUBLIC_URL + '/images/images.jpeg'}
              alt="logo"
            />
          </div>
          <div className="logo-wrapper">
            <img
              className="responsive-img"
              src={process.env.PUBLIC_URL + '/images/images.jpeg'}
              alt="logo"
            />
          </div>
          <div className="logo-wrapper">
            <img
              className="responsive-img"
              src={process.env.PUBLIC_URL + '/images/images.jpeg'}
              alt="logo"
            />
          </div>
          <div className="logo-wrapper">
            <img
              className="responsive-img"
              src={process.env.PUBLIC_URL + '/images/images.jpeg'}
              alt="logo"
            />
          </div>
          <div className="logo-wrapper">
            <img
              className="responsive-img"
              src={process.env.PUBLIC_URL + '/images/images.jpeg'}
              alt="logo"
            />
          </div>
          <div className="logo-wrapper">
            <img
              className="responsive-img"
              src={process.env.PUBLIC_URL + '/images/images.jpeg'}
              alt="logo"
            />
          </div>
        </Slider>
      </div>
    );
  }
}
