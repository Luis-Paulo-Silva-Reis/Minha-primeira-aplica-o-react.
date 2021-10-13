import React from 'react';
import './style.css';
import Item from '../components/Item';
import Card from '../components/Card'

export default function App() {
  return (
    <>
      <h1>minha primeira aplicação react</h1>
      <ul>
        <Item > Item 1 </Item>
        <Item > Item 2 </Item>
        <Item > Item 3 </Item>
      </ul>
      <Card/>
    </>
  );
}
