import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function Register(){

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  function handleRegister(e){
    e.preventDefault();
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo"/>

          <h1>Cadsatro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

          <Link className="back-link" to="/">
              <FiArrowLeft size={16} color="#E02041" />
              Não tenho cadastro
            </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input placeholder="Nome da Ong"></input>
          <input type="email" placeholder="Email"></input>
          <input placeholder="Whatsapp"></input>
          <div className="input-group">
            <input placeholder="Cidade"></input>
            <input placeholder="UF" style={{ width: 80 }}></input>
          </div>
          <button className="button" type="submit">Registar</button>
        </form>
      </div>
    </div>
  );
}