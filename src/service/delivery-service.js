const Delivery = require('../model/Delivery')

const db = {};
let sequence = 0;

class DeliveryService {
    static add(newDelivery) {
        return new Promise((resolve) => {
            console.log(newDelivery)
            const delivery = new Delivery(++sequence, 
                newDelivery.orderId, 
                newDelivery.clientId, 
                newDelivery.receiverName,
                newDelivery.receiverCpf,
                newDelivery.isBuyer,
                newDelivery.dateTime,
                newDelivery.local);
            db[delivery.id] = delivery;
            resolve(delivery);
        });
    }

    static getAll() {
        const toArray = key => db[key];
        return new Promise((resolve) => {
            const deliveries = Object.keys(db).map(toArray);
            resolve(deliveries);
        });
    }

    static getById(id) {
        return new Promise((resolve) => {
            resolve(db[id]);
        });
    }

    static update(deliveryId, updatedDelivery) {
        return new Promise(async (resolve) => {
            const delivery = await DeliveryService.getById(deliveryId);
            if (delivery) {
                delivery.receiverName = updatedDelivery.receiverName || delivery.receiverName;
                delivery.receiverCpf = updatedDelivery.receiverCpf || delivery.receiverCpf;
                delivery.isBuyer = updatedDelivery.isBuyer || delivery.isBuyer;
                delivery.dateTimeDelivery = updatedDelivery.dateTimeDelivery || delivery.dateTimeDelivery;
                delivery.location = updatedDelivery.location || delivery.location;
                resolve(delivery);
            }
            resolve(null);
        });
    }

    static delete(id) {
        return new Promise((resolve) => {
            const delivery = db[id];
            if (delivery) {
                delete db[id];
                resolve(true);
            }
            resolve(false);
        });
    }
}

module.exports = DeliveryService;