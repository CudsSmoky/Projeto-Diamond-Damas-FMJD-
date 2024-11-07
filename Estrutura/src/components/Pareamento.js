// src/components/Pareamento.js
import React, { useState, useEffect } from 'react';
import api from '../api';

function Pareamento() {
  const [pareamentos, setPareamentos] = useState([]);

  useEffect(() => {
    const fetchPareamento = async () => {
      const response = await api.get('/pareamento/1');  // Substitua por ID do torneio desejado
      setPareamentos(response.data.pareamentos);
    };
    fetchPareamento();
  }, []);

  return (
    <div>
      <h3>Pareamento de Jogadores</h3>
      {pareamentos.map((pair, index) => (
        <div key={index}>
          <p>{pair.jogador1.nome} vs {pair.jogador2.nome}</p>
        </div>
      ))}
    </div>
  );
}

export default Pareamento;
