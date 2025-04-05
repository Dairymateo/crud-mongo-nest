import React from "react";

function UserList({ users, onEdit, onDelete }) {
  return (
    <div>
      {users.length === 0 ? (
        <p>No hay usuarios</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: "10px" }}>
              <strong>{user.name}</strong> - Edad: {user.age}
              <button onClick={() => onEdit(user)} style={{ marginLeft: "10px" }}>
                Editar
              </button>
              <button onClick={() => onDelete(user.id)} style={{ marginLeft: "5px" }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
