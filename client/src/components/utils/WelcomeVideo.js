const WelcomeVideo = () => {
  return (
    <div className="wrapper-welcome">
      <div
        dangerouslySetInnerHTML={{
          __html: `
    <video className="video-js" playsinline autoplay muted>
        <source src=${
          process.env.PUBLIC_URL + '/images/EM_Logo_animation.mp4'
        } type="video/mp4"/>
    </video>`,
        }}
      />
    </div>
  );
};
export default WelcomeVideo;
