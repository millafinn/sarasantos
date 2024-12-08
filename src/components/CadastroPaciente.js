import React, { useState } from 'react';

function CadastroPaciente() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const paciente = { nome, email, telefone };

    fetch('http://localhost:5000/pacientes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(paciente),
    })
    .then(response => response.json())
    .then(data => {
      alert('Paciente cadastrado com sucesso!');
      setNome('');
      setEmail('');
      setTelefone('');
    })
    .catch(error => console.error('Erro ao cadastrar paciente:', error));
  };

  return (
    <div>
      <h2>Cadastro de Pacientes</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Telefone" 
          value={telefone} 
          onChange={(e) => setTelefone(e.target.value)} 
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroPaciente;
