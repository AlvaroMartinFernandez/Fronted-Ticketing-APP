// DepartmentList.js
import React from 'react';
import PropTypes from 'prop-types';

const DepartmentList = ({ departments }) => {
  return (
    <div>
      <h2>Lista de Departamentos</h2>
      {/* Mostrar la lista de departamentos */}
      <ul>
        {departments.map(department => (
          <li key={department.id}>
            {/* Mostrar la información del departamento aquí */}
          </li>
        ))}
      </ul>
    </div>
  );
};

DepartmentList.propTypes = {
  departments: PropTypes.array.isRequired,
};

export default DepartmentList;
