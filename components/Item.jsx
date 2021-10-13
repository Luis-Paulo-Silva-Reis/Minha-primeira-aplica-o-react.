import React from 'react';

const Item = ({children}) => {
  return (
    <>
      <li>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          {children}
        </a>
      </li>
    </>
  );
};

export default Item;

// pode usar           {props.texto}
// também poderia ser  {props.children}
// const Item = (children) => também poderia usar assim
// const Item = (props) => ou poderia usar assim
/*
import React from 'react';

const Item = ({props}) => {
  return (
    <>
      <li>
        <a
          href="#"
          className="list-group-item list-group-item-action list-group-item-dark"
        >
          {props.text}
        </a>
      </li>
    </>
  );
};

também seria algo possivel

*/