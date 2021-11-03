import React from 'react';
import '../css/editor.css';
import Masonry from 'react-masonry-css';
const Editor = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const medias = [
    { title: 'video1', video: 'EM_Logo_animation.mp4' },
    { title: 'video2', video: 'IMG_8475.mp4' },
    { title: 'video3', video: 'EM_Logo_animation.mp4' },
  ];

  const renderVideo = medias.map((media, i) => {
    return (
      <div key={i}>
        <video class="responsive-video" controls>
          <source
            src={process.env.PUBLIC_URL + `/images/${media.video}`}
            type="video/mp4"
          />
        </video>
      </div>
    );
  });

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {renderVideo}
    </Masonry>
  );
};

export default Editor;
