function App() {

  let mensagens = ["1", "2"]

  function Notificacao({mensagens}) {
    if (mensagens.length == 0){
      return <p>Nenhuma Notificação nova</p>
    }

    return (
      <p>Voce tem {mensagens.length} {
        mensagens.length == 1 ? "notificação" : "notificações"
      }</p>
    )
  }


  return (
    <>
    <div>
      <h1>notificações</h1>
      <Notificacao mensagens={mensagens}/>
    </div>
    </>
  )
}

export default App
