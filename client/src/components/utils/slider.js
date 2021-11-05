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
          arrows={true}
        >
          <>
            <div className="wrapper-video">
              <video class="video-style" preload="metadata" controls>
                <source
                  src="https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129766/director/Than_You_Big_Brother_Spec_sxsgfx.mp4#t=0.2"
                  type="video/mp4"
                />
              </video>
              <div className="wrapper-slider-img">
                <img
                  className="responsive-img"
                  src="https://res.cloudinary.com/erix-mercedes-llc/image/upload/v1636129761/director/Thank_you_big_brother_2021_Oficcial_Selction_CISF-min_qzrrjr.png"
                  alt="office"
                />
                <img
                  className="responsive-img"
                  src="https://res.cloudinary.com/erix-mercedes-llc/image/upload/v1636129761/director/Thank_you_big_brother_2021_Honorable_Mention_CISF-min_jnzehw.png"
                  alt="office"
                />
                <img
                  className="responsive-img"
                  src="https://res.cloudinary.com/erix-mercedes-llc/image/upload/v1636129761/director/thank_you_big_brother_Colorful-version-Merit-SP-1024x543-min_k33e5d.png"
                  alt="office"
                />
                <img
                  className="responsive-img"
                  src="https://res.cloudinary.com/erix-mercedes-llc/image/upload/v1636129761/director/Thank_you_big_brother_winner-min_u2krma.png"
                  alt="office"
                />
                <img
                  className="responsive-img"
                  src="https://res.cloudinary.com/erix-mercedes-llc/image/upload/v1636129761/director/Thank_you_big_brotherAccolade-Merit-Logo-Color-min_dkq6en.png"
                  alt="office"
                />
                <img
                  className="responsive-img"
                  src="https://res.cloudinary.com/erix-mercedes-llc/image/upload/v1636129761/director/Teremana_fianilist-min_hvzg5t.png"
                  alt="office"
                />
              </div>

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
              <video class=" video-style" preload="metadata" controls>
                <source
                  src="https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129767/director/11092016_JRW_Trailer_v2_h6ww6g.mp4#t=1"
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
              <video class=" video-style" preload="metadata" controls>
                <source
                  src="https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129763/director/TERMANA_FINAL_DFFNY_1920x1080_zpnghe.mp4#t=0.2"
                  type="video/mp4"
                />
              </video>
              <div className="wrapper-slider-img">
                <img
                  className="responsive-img"
                  src="https://res.cloudinary.com/erix-mercedes-llc/image/upload/v1636129761/director/Teremana_fianilist-min_hvzg5t.png"
                  alt="office"
                />
              </div>
              <h6 className="title-portfolio"> Fathers day spec ( Teremana)</h6>
              <p>
                A US Marine Vet gives thanks to his mentor after stepping up to
                the plate when his father passed away.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" preload="metadata" controls>
                <source
                  src="https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129763/director/PURE_LEAF_HEALTH_WELLNESS_as3drd.mp4#t=0.2"
                  type="video/mp4"
                />
              </video>
              <p>
                Pure Leaf Pure Matcha Tea uses the finest Tencha green leaves
                from shade-grown Japanese tea plants, specially cultivated for
                matcha. Pure Matcha has a smooth, earthy taste. This tea is a
                perfect beverage choice for in the morning, afternoon, or
                evening.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" preload="metadata" controls>
                <source
                  src="https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129762/director/MATCHA_TEA_DRINKERS_ztw5hn.mp4#t=0.2"
                  type="video/mp4"
                />
              </video>
              <p>
                Pure Leaf Pure Matcha Tea uses the finest Tencha green leaves
                from shade-grown Japanese tea plants, specially cultivated for
                matcha. Pure Matcha has a smooth, earthy taste. This tea is a
                perfect beverage choice for in the morning, afternoon, or
                evening.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" preload="metadata" controls>
                <source
                  src="https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129762/director/PURE_LEAF_COFFEE_LOVER_u6q1nm.mp4#t=0.2"
                  type="video/mp4"
                />
              </video>
              <p>
                Pure Leaf Pure Matcha Tea uses the finest Tencha green leaves
                from shade-grown Japanese tea plants, specially cultivated for
                matcha. Pure Matcha has a smooth, earthy taste. This tea is a
                perfect beverage choice for in the morning, afternoon, or
                evening.
              </p>
            </div>
          </>
          <>
            <div className="wrapper-video">
              <video class=" video-style" preload="metadata" controls>
                <source
                  src="https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129761/director/PURE_LEAF_BAKING_ENTHUSIAST_ttr5va.mp4#t=0.2"
                  type="video/mp4"
                />
              </video>
              <p>
                Pure Leaf Pure Matcha Tea uses the finest Tencha green leaves
                from shade-grown Japanese tea plants, specially cultivated for
                matcha. Pure Matcha has a smooth, earthy taste. This tea is a
                perfect beverage choice for in the morning, afternoon, or
                evening.
              </p>
            </div>
          </>
        </Slider>
      </div>
    );
  }
}
