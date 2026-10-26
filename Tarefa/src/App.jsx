import { useState } from "react";

function App() {

  const [tema, setTema] = useState("claro");
  
  function BotoesDeTema({ alterarTema }) {
    return (
      <div>
        <button onClick={() => alterarTema("claro")}>
          Tema Claro
        </button>
  
        <button onClick={() => alterarTema("escuro")}>
          Tema Escuro
        </button>
      </div>
    );
  }
  
  function Previa({ tema }) {
    return (
      <div>
        <h2>Prévia</h2>
        <p>Tema atual: {tema}</p>
      </div>
    );
  }

  return (
    <>
      <h1>Lifting State Up</h1>

      <BotoesDeTema alterarTema={setTema} />

      <Previa tema={tema} />
    </>
  );
}

export default App;