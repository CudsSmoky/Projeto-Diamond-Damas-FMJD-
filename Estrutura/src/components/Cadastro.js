// src/components/Cadastro.js
import React, { useState } from 'react';
import api from '../api';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async () => {
    try {
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input type="text" placeholder="CPF" onChange={(e) => setCpf(e.target.value)} />
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}

export default Cadastro;
