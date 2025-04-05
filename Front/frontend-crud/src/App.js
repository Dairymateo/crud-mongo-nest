import './App.css';
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";


function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...user, id: editingUser.id } : u)));
      setEditingUser(null);
    } else {
      setUsers([...users, { ...user, id: Date.now() }]);
    }
  };

  const deleteUser = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Gestión de Usuarios</h1>
      <UserForm onSubmit={addUser} editingUser={editingUser} />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
    </div>
  );
}

export default App;
