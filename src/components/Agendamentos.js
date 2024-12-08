import React, { useState, useEffect } from 'react';

function Agendamentos() {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/agendamentos')
      .then(response => response.json())
      .then(data => setAgendamentos(data))
      .catch(error => console.error('Erro ao buscar agendamentos:', error));
  }, []);

  return (
    <div>
      <h2>Agendamentos</h2>
      <ul>
        {agendamentos.map((agendamento) => (
          <li key={agendamento.id}>
            {agendamento.data} - {agendamento.pacienteNome}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Agendamentos;
