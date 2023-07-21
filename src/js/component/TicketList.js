import React, { useState, useEffect } from 'react';
import { FaSearch, FaUserSlash } from 'react-icons/fa';
import Modal from 'react-modal';
import styles from '../../styles/modules/TicketList.module.css';

const TicketList = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [sortOrder, setSortOrder] = useState('asc');
  const [genderFilter, setGenderFilter] = useState('all');
  const [cityFilter, setCityFilter] = useState('all');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [citiesModalIsOpen, setCitiesModalIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        user =>
          (user.name.first.toLowerCase().includes(searchTerm) || user.name.last.toLowerCase().includes(searchTerm)) &&
          (genderFilter === 'all' || user.gender === genderFilter) &&
          (cityFilter === 'all' || user.location.city === cityFilter)
      )
    );
  }, [users, searchTerm, genderFilter, cityFilter]);

  const handleSort = () => {
    // Código para ordenar la lista, igual que antes
  };

  const handleFilterByGender = gender => {
    setGenderFilter(gender);
  };

  const handleFilterByCity = city => {
    setCityFilter(city);
    setSelectedCity(city);
    setModalIsOpen(true);
  };

  const openCitiesModal = () => {
    setCitiesModalIsOpen(true);
  };

  const closeCitiesModal = () => {
    setCitiesModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const allCities = users.map(user => user.location.city);
  const uniqueCities = Array.from(new Set(allCities));

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.searchContainer}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="search"
            placeholder="Buscar usuarios por nombre..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value.toLowerCase())}
            className={styles.searchInput}
          />
        </div>
        <ul>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <li key={index}>
                <h3>{user.name.first} {user.name.last}</h3>
                <p>Email: {user.email}</p>
                <p>Género: {user.gender}</p>
                <p>Fecha de Nacimiento: {user.dob.date}</p>
                <p>Ubicación: {user.location.street.name}, {user.location.city}, {user.location.country}</p>
              </li>
            ))
          ) : (
            <div className={styles.noUsers}>
              <FaUserSlash className={styles.userSlashIcon} />
              <p>No se encontraron usuarios.</p>
            </div>
          )}
        </ul>
      </div>
      <div className={styles.sidebar}>
        <button onClick={() => handleFilterByGender('all')} className={styles.filterButton}>
          Todos
        </button>
        <button onClick={() => handleFilterByGender('male')} className={styles.filterButton}>
          Hombres
        </button>
        <button onClick={() => handleFilterByGender('female')} className={styles.filterButton}>
          Mujeres
        </button>
        <button onClick={openCitiesModal} className={styles.filterButton}>
          Ciudades
        </button>
        <button onClick={handleSort} className={styles.sortButton}>
          Ordenar por Nombre
        </button>
      </div>
      <Modal isOpen={citiesModalIsOpen} onRequestClose={closeCitiesModal} contentLabel="Todas las Ciudades" className={styles.modal}>
        <h2>Todas las Ciudades</h2>
        <ul>
          {uniqueCities.map((city, index) => (
            <li key={index} onClick={() => handleFilterByCity(city)} className={styles.cityListItem}>
              {city}
            </li>
          ))}
        </ul>
        <button onClick={closeCitiesModal} className={styles.modalButton}>Cerrar</button>
      </Modal>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel={`Usuarios en ${selectedCity}`} className={styles.modal}>
        <h2>Usuarios en {selectedCity}</h2>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user, index) => (
            <div key={index}>
              <h3>{user.name.first} {user.name.last}</h3>
              <p>Email: {user.email}</p>
              <p>Género: {user.gender}</p>
              <p>Fecha de Nacimiento: {user.dob.date}</p>
              <p>Ubicación: {user.location.street.name}, {user.location.city}, {user.location.country}</p>
            </div>
          ))
        ) : (
          <div className={styles.noUsers}>
            <FaUserSlash className={styles.userSlashIcon} />
            <p>No se encontraron usuarios en {selectedCity}.</p>
          </div>
        )}
        <button onClick={closeModal} className={styles.modalButton}>Cerrar</button>
      </Modal>
    </div>
  );
};

export default TicketList;
