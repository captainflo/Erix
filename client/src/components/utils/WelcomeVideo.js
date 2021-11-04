const WelcomeVideo = () => {
  return (
    <div className="fullscreen">
      <div
        dangerouslySetInnerHTML={{
          __html: `
    <video class="video-js responsive-video" playsinline autoplay loop muted>
        <source src=${
          process.env.PUBLIC_URL + '/images/EM_Logo_animation.mp4'
        } type="video/mp4"/>
    </video>`,
        }}
      />
      {/* <video className="responsive-video" autoPlay muted>
        <source
          src={process.env.PUBLIC_URL + '/images/EM_Logo_animation.mp4'}
          type="video/mp4"
        />
      </video> */}
    </div>
  );
};
export default WelcomeVideo;
