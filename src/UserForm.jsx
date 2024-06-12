import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.min.css';

const UserForm = ({ addUser }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = () => {
// Validar datos antes de agregar
const newUser = { name, email };
// Llamar a la función desde las props para agregar usuario
addUser(newUser);
};

return (
<div>
<h2 className="text-danger m-3">Agregar Usuario</h2>
<label className="form-label text-success ms-3">Nombre: </label>
<input type="text" className="form-control ms-3 mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca Nombre" value={name} onChange={(e) => setName(e.target.value)} />
<br />
<label htmlFor="exampleInputEmail1" className="form-label text-success ms-3">Email: </label>
<input type="text" className="form-control ms-3 mt-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduzca email" value={email} onChange={(e) => setEmail(e.target.value)} />
<br />
<button className="btn btn-outline-warning ms-3 mt-2 mb-3" onClick={handleSubmit}>Agregar</button>
</div>
  );
};

export default UserForm;