import React, { useState, useEffect } from 'react';

function HistoricoSessoes() {
  const [sessoes, setSessoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/sessoes')
      .then(response => response.json())
      .then(data => setSessoes(data))
      .catch(error => console.error('Erro ao buscar sessões:', error));
  }, []);

  return (
    <div>
      <h2>Histórico de Sessões</h2>
      <ul>
        {sessoes.map((sessao) => (
          <li key={sessao.id}>
            {sessao.data} - {sessao.pacienteNome} - {sessao.notas}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoricoSessoes;
