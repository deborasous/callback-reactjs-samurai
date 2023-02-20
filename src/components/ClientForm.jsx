import React, { useState } from "react";

const ClientForm = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //CAPTURAR OS VALORES QUE SERÃO ENVIADOS AO CLICAR NO BOTÃO
  //CALLBACK -> agora para passar ess função para o App()...dentro do App()...
  const handleSubmit = (e) => {
    e.preventDefault();

    //CALLBACK -> recebe a função onSubmit (este onSubmit não tem nada a ver com o onSubmit do button deste componente e sim do componente pai App) como parâmetro da função, chama ela e passa as informações de email e senha
    onSubmit({ name, email, password });

    console.log("datas component", [email, password]);
  };

  return (
    <div>
      <form action="" className="form">
        <label htmlFor="name" className="name">
          Nome
        </label>
        {/* controlar o input com onchange */}
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="email">
          Email
        </label>
        {/* controlar o input com onchange */}
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="password">
          Senha
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
