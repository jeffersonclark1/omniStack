import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile(){
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Logo"/>
        <span>Bem vindo, APAD</span>

        <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
        <button type="button">
          <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>

      <h1>Casos cadastrados</h1>
      <ul>
        <li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li><li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li><li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li><li>
          <strong>Caso:</strong>
          <p>Caso Teste</p>

          <strong>Descrição</strong>
          <p>Descrição teste</p>

          <strong>Valor</strong>
          <p>100</p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>
  );
}