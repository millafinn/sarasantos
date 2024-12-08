import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListaPaciente() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/pacientes')
      .then(response => response.json())
      .then(data => setPacientes(data))
      .catch(error => console.error('Erro ao buscar pacientes:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      <ul>
        {pacientes.map((paciente) => (
          <li key={paciente._id}>
            <Link to={`/pacientes/${paciente._id}`}>{paciente.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaPaciente;
