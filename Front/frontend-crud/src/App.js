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
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
=======
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h1>Gestión de Usuarios</h1>
      <UserForm onSubmit={addUser} editingUser={editingUser} />
      <UserList users={users} onEdit={editUser} onDelete={deleteUser} />
>>>>>>> f26e7c6b32d3f074fc14db20ff251f8425d63ae1
    </div>
  );
}

export default App;
