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
                  src="https://res.cloudinary.com/dwtc6zep7/video/upload/v1635980234/Erix/TERMANA_FINAL_DFFNY_1920x1080.mp4"
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
        </Slider>
      </div>
    );
  }
}
