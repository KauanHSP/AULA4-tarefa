import { MensagemStatus } from "./utils/statusPedido";

function App() {
  return (
    <>
    <p>{MensagemStatus("pendente")}</p>
    <p>{MensagemStatus("enviado")}</p>
    <p>{MensagemStatus("entregue")}</p>
    <p>{MensagemStatus("cancelado")}</p>
    </>
  );
}

export default App;