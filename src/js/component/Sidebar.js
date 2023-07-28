// Sidebar.js
import React from 'react';

const Sidebar = () => {
  // Define the list of sidebar elements
  const sidebarElements = [
    { id: 1, label: 'Inicio', link: '/' },
    { id: 2, label: 'Lista de Usuarios', link: '/users' },
    // Add more sidebar elements as needed
  ];

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        {sidebarElements.map(element => (
          <li key={element.id}>
            <a href={element.link}>{element.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
