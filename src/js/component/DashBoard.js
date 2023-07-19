import React, { useState } from 'react';
import { BiHome, BiMessage, BiBarChartAlt2, BiCog } from 'react-icons/bi';
import Modal from 'react-modal';
import styles from '../../styles/modules/dashboard.module.css';

const Orders = () => (
  <div>
    <h3>Pedidos</h3>
    <p>Contenido de la tabla de pedidos</p>
  </div>
);

const Departments = () => (
  <div>
    <h3>Departamentos</h3>
    <p>Contenido de la tabla de departamentos</p>
  </div>
);

const Clients = () => (
  <div>
    <h3>Clientes</h3>
    <p>Contenido de la tabla de clientes</p>
  </div>
);

const Settings = () => (
  <div>
    <h3>Ajustes</h3>
    <p>Contenido de la sección de Ajustes</p>
  </div>
);

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('orders');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderSelectedComponent = () => {
    if (selectedComponent === 'orders') {
      return <Orders />;
    } else if (selectedComponent === 'departments') {
      return <Departments />;
    } else if (selectedComponent === 'clients') {
      return <Clients />;
    } else if (selectedComponent === 'settings') {
      return <Settings />;
    } else {
      return null;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.dashboardTitle}>Dashboard</h2>
      <div className={styles.dashboardContainer}>
        <div className={styles.sidebar}>
          <button onClick={() => handleComponentSelect('orders')}>
            <BiHome /> Pedidos
          </button>
          <button onClick={() => handleComponentSelect('departments')}>
            <BiMessage /> Departamentos
          </button>
          <button onClick={() => handleComponentSelect('clients')}>
            <BiBarChartAlt2 /> Clientes
          </button>
          <button onClick={() => handleComponentSelect('settings')}>
            <BiCog /> Ajustes
          </button>
        </div>
        <div className={styles.content}>{renderSelectedComponent()}</div>
      </div>

      {/* Botón para abrir el modal */}
      <button onClick={handleOpenModal}>Crear Usuario</button>

      {/* Modal para la creación de usuarios */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: styles['modal-overlay'],
          content: styles['modal-content'],
        }}
        contentLabel="Crear Usuario"
      >
        <h2>Crear Usuario</h2>
        {/* Formulario de creación de usuarios */}
        <form>
          <label>
            Nombre:
            <input type="text" />
          </label>
          <label>
            Email:
            <input type="email" />
          </label>
          <button type="submit">Guardar Usuario</button>
        </form>

        {/* Botón para cerrar el modal */}
        <button onClick={handleCloseModal}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default Dashboard;
