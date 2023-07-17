import React, { useState } from 'react';
import { BiHome, BiMessage, BiBarChartAlt2, BiCog } from 'react-icons/bi';

// Estilos de Zendesk (ejemplo)
const zendeskColors = {
  primary: '#2E7ACB',
  secondary: '#F1F5F8',
  text: '#333333',
};

// Estilos personalizados
const styles = {
  dashboardContainer: {
    display: 'grid',
    gridTemplateColumns: '250px 1fr',
    gap: '20px',
    padding: '20px',
    background: zendeskColors.secondary,
  },
  sidebar: {
    background: zendeskColors.primary,
    color: 'white',
    padding: '10px',
  },
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  menuItemActive: {
    background: 'rgba(255, 255, 255, 0.1)',
  },
  content: {
    background: 'white',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

const Tickets = () => (
  <div>
    <h3>Tickets</h3>
    <table>
      {/* Contenido de la tabla de tickets */}
    </table>
  </div>
);

const Statistics = () => (
  <div>
    <h3>Estadísticas</h3>
    {/* Contenido de estadísticas */}
  </div>
);

const Messaging = () => (
  <div>
    <h3>Messaging Component</h3>
    {/* Contenido de la sección de Mensajes */}
  </div>
);

const Settings = () => (
  <div>
    <h3>Ajustes</h3>
    {/* Contenido de la sección de Ajustes */}
  </div>
);

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('tickets');

  const handleComponentSelect = (component) => {
    setSelectedComponent(component);
  };

  const renderSelectedComponent = () => {
    if (selectedComponent === 'tickets') {
      return <Tickets />;
    } else if (selectedComponent === 'messaging') {
      return <Messaging />;
    } else if (selectedComponent === 'reports') {
      return <div>Reports Component</div>;
    } else if (selectedComponent === 'statistics') {
      return <Statistics />;
    } else if (selectedComponent === 'settings') {
      return <Settings />;
    } else {
      return null;
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={styles.dashboardContainer}>
        <div style={styles.sidebar}>
          <div
            style={{
              ...styles.menuItem,
              ...(selectedComponent === 'home' && styles.menuItemActive),
            }}
            onClick={() => handleComponentSelect('home')}
          >
            <BiHome style={{ marginRight: '10px' }} />
            <span>Home</span>
          </div>
          <div
            style={{
              ...styles.menuItem,
              ...(selectedComponent === 'tickets' && styles.menuItemActive),
            }}
            onClick={() => handleComponentSelect('tickets')}
          >
            <BiMessage style={{ marginRight: '10px' }} />
            <span>Tickets</span>
          </div>
          <div
            style={{
              ...styles.menuItem,
              ...(selectedComponent === 'messaging' && styles.menuItemActive),
            }}
            onClick={() => handleComponentSelect('messaging')}
          >
            <BiMessage style={{ marginRight: '10px' }} />
            <span>Messaging</span>
          </div>
          <div
            style={{
              ...styles.menuItem,
              ...(selectedComponent === 'reports' && styles.menuItemActive),
            }}
            onClick={() => handleComponentSelect('reports')}
          >
            <BiBarChartAlt2 style={{ marginRight: '10px' }} />
            <span>Reports</span>
          </div>
          <div
            style={{
              ...styles.menuItem,
              ...(selectedComponent === 'statistics' && styles.menuItemActive),
            }}
            onClick={() => handleComponentSelect('statistics')}
          >
            <BiBarChartAlt2 style={{ marginRight: '10px' }} />
            <span>Statistics</span>
          </div>
          <div
            style={{
              ...styles.menuItem,
              ...(selectedComponent === 'settings' && styles.menuItemActive),
            }}
            onClick={() => handleComponentSelect('settings')}
          >
            <BiCog style={{ marginRight: '10px' }} />
            <span>Settings</span>
          </div>
        </div>
        <div style={styles.content}>{renderSelectedComponent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
