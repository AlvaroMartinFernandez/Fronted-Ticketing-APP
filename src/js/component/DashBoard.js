import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import TicketList from './TicketList';

const Dashboard = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.loadUsersData();
  }, []);

  return (
    <div>
      {/* Renderizar el componente TicketList con los datos de usuarios */}
      <TicketList users={store.users} />
    </div>
  );
};

export default Dashboard;
