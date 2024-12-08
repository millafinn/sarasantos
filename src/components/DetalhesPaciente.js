import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetalhesPaciente() {
  const { id } = useParams();
  const [paciente, setPaciente] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/pacientes/${id}`)
      .then(response => response.json())
      .then(data => setPaciente(data))
      .catch(error => console.error('Erro ao buscar detalhes do paciente:', error));
  }, [id]);

  if (!paciente) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h2>Detalhes do Paciente</h2>
      <p>Nome: {paciente.nome}</p>
      <p>Email: {paciente.email}</p>
      <p>Telefone: {paciente.telefone}</p>

      <h3>Histórico de Sessões</h3>
      <ul>
        {paciente.historicoSessoes.map((sessao, index) => (
          <li key={index}>
            Data: {sessao.data} - Notas: {sessao.notas}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetalhesPaciente;
