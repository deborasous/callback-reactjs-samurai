import { useState } from "react";
import ClientForm from "./components/ClientForm";
import Hello from "./components/Hello";

//CALLBACK PARA PASSAR INFORMAÇÕES DO FILHO PARA O PAI

function App() {
  //CALLBACK passando informações como parâmentro do filho ClientForm para o pai App// Nesse caso terá que replicar os states existentes no componente ClientForm ...
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();

  // ...assim quando a handleSubmit receber as informações de email e senha dá um setEmail e setPassword e passa os parametors email e password dentro...AGORA, para acessar esse handleSubmit, passa um parametro dentro do componente ClientForm=({submit}), este vai receber as inofrmações de email e senha
  const handleSubmit = ({ name, email, password }) => {
    setEmail(email);
    setPassword(password);
    setName(name);
    console.log("datas App", { name, email, password });
  };
  return (
    <div className="App">
      {/* agora o handleSubmit recebe os dados dos inputs do componente filho, através do onSubmit={handleSubmit}  */}
      <ClientForm onSubmit={handleSubmit} />
      <Hello name={name} />
      {/* o name={name}  vai passar receber o name do state acima*/}
    </div>
  );
}

export default App;
