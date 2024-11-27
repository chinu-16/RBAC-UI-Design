import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/roles').then((response) => setRoles(response.data));
  }, []);

  const deleteRole = (id) => {
    axios.delete(`http://localhost:3001/roles/${id}`).then(() => {
      setRoles(roles.filter((role) => role.id !== id));
    });
  };

  return (
    <div>
      <h1>Role Management</h1>
      <ul>
        {roles.map((role) => (
          <li key={role.id}>
            <strong>{role.name}</strong>: {role.permissions.join(', ')}
            <button onClick={() => deleteRole(role.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoleManagement;