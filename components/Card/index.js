import React from 'react';
import { useState } from 'react';
import Button from '../Button/Button';

const Card = () => {
  const [valor, setValor] = useState(0);

  function Adicionar() {
    setValor(valor + 1);
  }

  function Diminuir() {
    setValor(valor - 1);
  }

  return (
    <div className="card">
      <div className="card-header">Meu Primeiro Card</div>
      <div className="card-body">
        <Button className="btn btn-success" onClick={Adicionar}>
          Adicionar
        </Button>

        <Button className="btn btn-danger" onClick={Diminuir}>
          Adicionar
        </Button>

        <p>{valor}</p>
      </div>
    </div>
  );
};

export default Card;

/**
 * 
 *  <button type="button" className="btn btn-success" onClick={Adicionar}>
          Adicionar
        </button>
        <button type="button" class="btn btn-danger" onClick={Diminuir}>
          Remover
        </button>
 */
