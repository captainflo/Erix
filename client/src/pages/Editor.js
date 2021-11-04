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
    {
      title: 'Adidas_prism_Aaron_Judge',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038875/Erix/editor/Adidas_prism_Aaron_Judge.mp4',
    },
    {
      title: 'St.ives_face_mist',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038874/Erix/editor/St.ives_face_mist.mp4',
    },
    {
      title: 'Gelato',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038875/Erix/editor/Gelato.mp4',
    },
    {
      title: 'Adidas_prism__Fernandos_tati',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038874/Erix/editor/Adidas_prism__Fernandos_tati.mp4',
    },
    {
      title: 'Axe_pomade',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038873/Erix/editor/Axe_pomade.mp4',
    },
    {
      title: 'Suave_for_men_shampoo',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038873/Erix/editor/Suave_for_men_shampoo.mp4',
    },
    {
      title: 'Adidas_Prism',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038873/Erix/editor/Adidas_Prism.mp4',
    },
    {
      title: 'Magnum_Icrecream',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038873/Erix/editor/Magnum_Icrecream.mp4',
    },
    {
      title: 'Degree_deo_wipes',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038872/Erix/editor/Degree_deo_wipes.mp4',
    },
    {
      title: 'Dove_deo_Wipes',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038871/Erix/editor/Dove_deo_Wipes.mp4',
    },
    {
      title: 'pure_leaf_iced_tea',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038871/Erix/editor/pure_leaf_iced_tea.mp4',
    },
    {
      title: 'Dove_men_deo_wipes',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038871/Erix/editor/Dove_men_deo_wipes.mp4',
    },
    {
      title: 'degre_women_deo_wipes',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038871/Erix/editor/degre_women_deo_wipes.mp4',
    },
    {
      title: 'Dove_deo_wipes_2',
      video:
        'https://res.cloudinary.com/dwtc6zep7/video/upload/v1636038871/Erix/editor/Dove_deo_wipes_2.mp4',
    },
  ];

  const renderVideo = medias.map((media, i) => {
    return (
      <div key={i}>
        <video class="responsive-video" preload="metadata" controls>
          <source src={media.video + '#t=0.2'} type="video/mp4" />
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
