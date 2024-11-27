import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PermissionManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/roles').then((response) => setRoles(response.data));
  }, []);

  const updatePermissions = (id, permissions) => {
    axios.put(`http://localhost:3001/roles/${id}`, { permissions }).then(() => {
      setRoles(
        roles.map((role) =>
          role.id === id ? { ...role, permissions } : role
        )
      );
    });
  };

  return (
    <div>
      <h1>Permission Management</h1>
      {roles.map((role) => (
        <div key={role.id}>
          <h3>{role.name}</h3>
          <input
            type="text"
            value={role.permissions.join(', ')}
            onChange={(e) =>
              updatePermissions(role.id, e.target.value.split(',').map((p) => p.trim()))
            }
          />
        </div>
      ))}
    </div>
  );
};

export default PermissionManagement;
