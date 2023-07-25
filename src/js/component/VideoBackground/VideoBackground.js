import React from 'react';
import video1 from "../../../img/video1.mp4";
import styles from './VideoBackground.module.css'; // Importa el módulo CSS

const VideoBackground = () => {
  return (
    <div className={styles['video-container']}>
      <video autoPlay loop muted className={styles.video}>
        <source src={video1} type="video/mp4" />
      </video>
      {/* Contenido adicional que desees mostrar sobre el video */}
    </div>
  );
};

export default VideoBackground;
