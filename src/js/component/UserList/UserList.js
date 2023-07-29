import React, { useState } from 'react';
import styles from './UserList.module.css';
import UserModal from '../UserModal/UserModal';

const UserList = ({ users, createUser }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('');
  const [filterRole, setFilterRole] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

  const handleSearchChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleFilterDepartmentChange = e => {
    setFilterDepartment(e.target.value);
  };

  const handleFilterRoleChange = e => {
    setFilterRole(e.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const filteredUsers = users.filter(user => {
    const nameMatches = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const departmentMatches = filterDepartment ? user.departments.some(dep => dep.name_department === filterDepartment) : true;
    const roleMatches = filterRole ? user.role === filterRole : true;
    return nameMatches && departmentMatches && roleMatches;
  });

  return (
    <div className={styles.container}>
      <h2>Lista de Usuarios</h2>
      <div className={styles.searchContainer}>
        <i className={`fa fa-search ${styles.searchIcon}`} aria-hidden="true"></i>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Buscar usuarios..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.filters}>
        <label>Departamento:</label>
        <select value={filterDepartment} onChange={handleFilterDepartmentChange}>
          <option value="">Todos</option>
          {/* Agregar opciones de departamentos */}
          <option value="Postventa">Postventa</option>
          <option value="Departamento 2">Control</option>
          {/* Agregar más opciones de departamentos si es necesario */}
        </select>

        <label>Rol:</label>
        <select value={filterRole} onChange={handleFilterRoleChange}>
          <option value="">Todos</option>
          {/* Agregar opciones de roles */}
          <option value="Employee">Empleado</option>
          <option value="Administrador">Administrador</option>
          <option value="Directivo">Directivo</option>
          {/* Agregar más opciones de roles si es necesario */}
        </select>
      </div>

      <ul className={styles.userList}>
        {filteredUsers.map(user => (
          <li key={user.id} className={styles.userItem}>
            <h3>{user.name}</h3>
            <p>Correo: {user.email}</p>
            <p>Nombre de usuario: {user.user_name}</p>
            <p>Rol: {user.role}</p>
            <p>Departamento: {user.departments[0]?.name_department}</p>
            <p>Cliente: {user.client?.name}</p>
            <p>Tickets: {user.tickets.length}</p>
          </li>
        ))}
      </ul>

      {/* Botón para abrir el modal */}
      <button onClick={openModal}>Crear Nuevo Usuario</button>

      {/* Modal para crear nuevos usuarios */}
      {isModalOpen && <UserModal closeModal={closeModal} createUser={createUser} />}
    </div>
  );
};

export default UserList;
