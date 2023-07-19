import React from 'react';
import { BiSearch, BiMessageSquareDetail, BiPhone, BiBell } from 'react-icons/bi';
import styles from '../../styles/modules/dashboardModal.module.css';

const DashboardModal = () => {
  return (
    <div className={styles.modalContent}>
      <h3>
        <BiMessageSquareDetail /> ¡Bienvenido al Dashboard Modal!
      </h3>
      <p>
        <BiPhone /> Hola!¿Necesitas ayuda? <BiBell />
      </p>
      <div className={styles.searchBar}>
        <input type="text" placeholder="Buscar..." />
        <button>
          <BiSearch />
        </button>
      </div>
      {/* Aquí puedes agregar más contenido y funcionalidad del asistente */}
    </div>
  );
};

export default DashboardModal;
