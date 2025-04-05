import React, { useState, useEffect } from "react";

function UserForm({ onSubmit, editingUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setAge(editingUser.age);
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) return alert("Por favor completa todos los campos");
    onSubmit({ name, age });
    setName("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        placeholder="Edad"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">{editingUser ? "Actualizar" : "Agregar"}</button>
    </form>
  );
}

export default UserForm;
