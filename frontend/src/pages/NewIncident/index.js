import React from 'react';
import './styles.css';
import logoImg from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncidents(){
  return (
    <div className="new-incident">
      <div className="content">
        <section>
          <img src={logoImg} alt="Logo"/>

          <h1>Cadastro novo caso</h1>
          <p>Descreva o caso detalhadamento para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
              <FiArrowLeft size={16} color="#e02041"></FiArrowLeft>
              Voltar para Home
            </Link>
        </section>
        <form action="">
          <input placeholder="Titulo do caso"></input>
          <textarea type="email" placeholder="Descrição"></textarea>
          <input placeholder="Valor em reais"></input>          
          <button className="button" type="submit">Registar</button>
        </form>
      </div>
    </div>
  );
}