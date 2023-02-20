import React from "react";

//PEGAR SOMENTE O NOME DO COMPONENTE CLIENTEFORN
//Passa o name como parametro da função {name} e dentro de uma tag chama name
//agora dentro do App chama o componente e passa para ele name={name}
const Hello = ({ name }) => {
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
};

export default Hello;
