const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const notFound = require('../middleware/not-found');
const deliveryService = require('../services/delivery-service');

const StatusOk = 200;
const StatusCreated = 201;
const StatusNotContent = 204;

router.post('/', checkAuth, async (request, response) => {
    const createDelivery= await deliveryService.add(request.body);
    response
        .status(201)
        .json(createDelivery);
});

router.get('/', checkAuth, async (request, response) => {
    const deliveries = await deliveryService.getAll();
    deliveries 
        ? response.status(200).json(deliveries)
        : response.status(204).end();
});

router.get('/:deliveryId', checkAuth, async (request, response) => {
    const delivery = await deliveryService.getById(request.params.deliveryId);
    delivery
        ? response.json(delivery)
        : notFound(request, response);
});

router.patch('/:deliveryId', checkAuth, async (request, response) => {
    const updatedDelivery = await deliveryService.update(
        request.params.deliveryId,
        request.body
      );
      updatedDelivery
        ? response.json(updatedDelivery)
        : notFound(request, response);
});

router.delete('/:deliveryId', checkAuth, async (request, response) => {
    const isDeleted = await deliveryService.delete(request.params.deliveryId);
    isDeleted
        ? response.end()
        : notFound(request, response)
});

module.exports = router;