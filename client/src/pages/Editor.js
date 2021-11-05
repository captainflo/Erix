import React, { useState, useEffect } from 'react';
import '../css/editor.css';
import Masonry from 'react-masonry-css';
import Loading from '../components/utils/Loading';
const Editor = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  const medias = [
    {
      title: 'Adidas_prism_Aaron_Judge',
      video: 'Adida_prism_Aaron_Judge.mp4',
    },
    {
      title: 'St.ives_face_mist',
      video: 'St.ives_face_mist.mp4',
    },
    {
      title: 'Gelato',
      video: 'Gelato.mp4',
    },
    {
      title: 'Adidas_prism__Fernandos_tati',
      video: 'Adida_prism_ Fernandos_tati.mp4',
    },
    {
      title: 'Axe_pomade',
      video: 'Axe_pomade.mp4',
    },
    {
      title: 'Suave_for_men_shampoo',
      video: 'Suave_for_men_shampoo.mp4',
    },
    {
      title: 'Adidas_Prism',
      video: 'Adidas_Prism.mp4',
    },
    {
      title: 'Magnum_Icrecream',
      video: 'Magnum_Icrecream.mp4',
    },
    {
      title: 'Degree_deo_wipes',
      video: 'Degree_deo_wipes.mp4',
    },
    {
      title: 'Dove_deo_Wipes',
      video: 'Dove_deo_Wipes.mp4',
    },
    {
      title: 'pure_leaf_iced_tea',
      video: 'pure_leaf_iced_tea.mp4',
    },
    {
      title: 'Dove_men_deo_wipes',
      video: 'Dove_men_deo_wipes.mp4',
    },
    {
      title: 'degre_women_deo_wipes',
      video: 'degre_women_deo_wipes.mp4',
    },
    {
      title: 'Dove_deo_wipes_2',
      video: 'Dove_deo_wipes_2.mp4',
    },
  ];

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderVideo = medias.map((media, i) => {
    return (
      <div key={i}>
        <video className="responsive-video" controls>
          <source
            src={
              process.env.PUBLIC_URL +
              `/images/editor/${media.video}` +
              '#t=0.2'
            }
            type="video/mp4"
          />
        </video>
      </div>
    );
  });

  return (
    <>
      {loading ? <Loading /> : ''}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {renderVideo}
      </Masonry>
    </>
  );
};

export default Editor;
