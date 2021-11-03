import React, { Component } from 'react';
import Slider from 'react-slick';
import '../../css/slider.css';

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
      <div>
        <Slider
          asNavFor={this.state.nav2}
          ref={(slider) => (this.slider1 = slider)}
          arrows={false}
        >
          <>
            <h4>First Slider</h4>
            <div className="wrapper-video">
              <video class="responsive-video video-style" controls>
                <source
                  src={
                    process.env.PUBLIC_URL + '/images/EM_Logo_animation.mp4 '
                  }
                  type="video/mp4"
                />
              </video>
              <p>Sale Pute</p>
            </div>
          </>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
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
              src={process.env.PUBLIC_URL + '/images/oscar_logo.png'}
              alt="logo"
            />
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
