import React, { useState } from 'react';
import {
  Container, Box, List, ListItem, ListItemText, AppBar, Toolbar, IconButton, InputBase, Modal, TextField, Button, Typography,
} from '@mui/material';
import {
  Search as SearchIcon,
  HelpOutline as HelpOutlineIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from '@mui/icons-material';

import styles from '../../styles/modules/dashboard.module.css';

const Dashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('Inicio');
  const [isModalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
  });

  const handleItemClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSaveUser = () => {
    console.log('Nuevo usuario:', newUser);
    setModalOpen(false);
    setNewUser({
      name: '',
      lastName: '',
      company: '',
      phone: '',
      email: '',
    });
  };

  const components = {
    Inicio: (
      <div>
        Contenido para la página de Inicio
      </div>
    ),
    Clientes: <div>Contenido para la página de Clientes</div>,
    Departamentos: <div>Contenido para la página de Departamentos</div>,
    Ajustes: <div>Contenido para la página de Ajustes</div>,
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            placeholder="Buscar..."
            className={styles.searchInput}
            inputProps={{ 'aria-label': 'Buscar' }}
          />
          <IconButton color="inherit" onClick={handleModalOpen}>
            <AddCircleOutlineIcon />
          </IconButton>
          <IconButton color="inherit">
            <HelpOutlineIcon />
          </IconButton>
          <Typography variant="body2" sx={{ display: { xs: 'none', sm: 'block' } }}>
            Hola soy Maria, ¿necesitas ayuda?
          </Typography>
        </Toolbar>
      </AppBar>

      <Container sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '20%', padding: 2 }}>
          <List>
            {Object.keys(components).map((componentName) => (
              <ListItem
                key={componentName}
                button
                selected={selectedComponent === componentName}
                onClick={() => handleItemClick(componentName)}
              >
                <ListItemText primary={componentName} />
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ width: '70%', padding: 2 }}>{components[selectedComponent]}</Box>
      </Container>

      <Modal open={isModalOpen} onClose={handleModalClose}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: '#fff', p: 4 }}>
          <h2>Crear Nuevo Usuario</h2>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            margin="normal"
            name="name"
            value={newUser.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Apellido"
            variant="outlined"
            fullWidth
            margin="normal"
            name="lastName"
            value={newUser.lastName}
            onChange={handleInputChange}
          />
          <TextField
            label="Empresa"
            variant="outlined"
            fullWidth
            margin="normal"
            name="company"
            value={newUser.company}
            onChange={handleInputChange}
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            margin="normal"
            name="phone"
            value={newUser.phone}
            onChange={handleInputChange}
          />
          <TextField
            label="Correo"
            variant="outlined"
            fullWidth
            margin="normal"
            name="email"
            value={newUser.email}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleSaveUser}>
            Guardar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Dashboard;
