import React from 'react';
import video2 from "../../../img/video2.mp4";
import styles from './VideoBackground2.module.css'; // Importa el módulo CSS

const VideoBackground = () => {
  return (
    <div className={styles['video-container']}>
      <video autoPlay loop muted className={styles.video}>
        <source src={video2} type="video/mp4" />
      </video>
      {/* Contenido adicional que desees mostrar sobre el video */}
    </div>
  );
};

export default VideoBackground;