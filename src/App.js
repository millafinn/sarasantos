import React from 'react';
import CadastroPaciente from './components/CadastroPaciente';
import Agendamentos from './components/Agendamentos';
import HistoricoSessoes from './components/HistoricoSessoes';
import ListaPaciente from './components/ListaPaciente'; 

function App() {
  return (
    <div className="App">
      <h1>Bem-vindo ao Sistema da Psicóloga Sara Santos</h1>
      <CadastroPaciente />
      <ListaPaciente />  
      <Agendamentos />
      <HistoricoSessoes />
    </div>
  );
}

export default App;
