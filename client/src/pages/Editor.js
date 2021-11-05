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
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129774/editor/Adidas_prism_Aaron_Judge_ms5jaa.mp4',
    },
    {
      title: 'St.ives_face_mist',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129774/editor/St.ives_face_mist_zsfywg.mp4',
    },
    {
      title: 'Gelato',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129771/editor/Gelato_xlgz2m.mp4',
    },
    {
      title: 'Adidas_prism__Fernandos_tati',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129774/editor/Adidas_prism__Fernandos_tati_dt1m15.mp4',
    },
    {
      title: 'Axe_pomade',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129772/editor/Axe_pomade_aa0lqi.mp4',
    },
    {
      title: 'Suave_for_men_shampoo',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129772/editor/Suave_for_men_shampoo_p0m8bu.mp4',
    },
    {
      title: 'Adidas_Prism',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129773/editor/Adidas_Prism_qcucmt.mp4',
    },
    {
      title: 'Magnum_Icrecream',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129771/editor/Magnum_Icrecream_csxgwb.mp4',
    },
    {
      title: 'Degree_deo_wipes',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129772/editor/Degree_deo_wipes_msbiam.mp4',
    },
    {
      title: 'Dove_deo_Wipes',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129775/editor/Dove_deo_Wipes_epdzhg.mp4',
    },
    {
      title: 'pure_leaf_iced_tea',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129772/editor/pure_leaf_iced_tea_kfhjht.mp4',
    },
    {
      title: 'Dove_men_deo_wipes',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129771/editor/Dove_men_deo_wipes_trpr1j.mp4',
    },
    {
      title: 'degre_women_deo_wipes',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129771/editor/degre_women_deo_wipes_agkjpz.mp4',
    },
    {
      title: 'Dove_deo_wipes_2',
      video:
        'https://res.cloudinary.com/erix-mercedes-llc/video/upload/v1636129771/editor/Dove_deo_wipes_2_msedac.mp4',
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
        <video class="responsive-video" preload="metadata" controls>
          <source src={media.video + '#t=0.2'} type="video/mp4" />
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
