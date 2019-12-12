class Delivery {
    constructor(
                id, 
                orderId, 
                clienteId, 
                receiverName,
                receiverCpf,
                isBuyer,
                dateTime,
                local) {
        this.id = id, 
        this.orderId = orderId, 
        this.clienteId = clienteId, 
        this.receiverName = receiverName,
        this.receiverCpf = receiverCpf,
        this.isBuyer = isBuyer,
        this.dateTime = dateTime,
        this.local = local
    }
}

module.exports = Delivery; 