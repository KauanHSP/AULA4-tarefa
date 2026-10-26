export function MensagemStatus(status){
    const Posibilidades ={
        pendente: "Pedido pendente",
        enviado: "Pedido enviado",
        entregue: "Pedido entregue"
    }
    return Posibilidades[status] ?? "Status desconhecido"
}