# DM124 - INATEL

## Endpoints

Base Auth username: dm124, password: alunoinatel

#### Create Delivery

```bash
POST
*/api/deliveries

Body:
{
	
	"orderId": 1,
	"clientId": 1,
	"receiverName": "Nome1",
	"receiverCpf": "111.111.111-11",
	"isBuyer": true,
	"dateTime": "2019-12-12 12:00 PM",
	"local": "Santa Rita do Sapucaí"
	
}
```

#### List Deliveries
```bash
GET
*/api/deliveries
Response (200 OK):

Body:
[
    {
        "id": "5",
        "orderId": 7,
        "clientId": 2,
        "receiverName": "Nome1",
        "receiverCpf": "111.111.111-11",
        "isBuyer": true,
        "dateTime": "2019-12-12 12:00 PM",
        "local": "Santa Rita do Sapucaí",
        "status": "PENDENTE"
    },
]
```

#### Get Delivery by ID

```bash
GET
*/api/deliveries/<deliveryId>

Response (200 OK):
Body:
{
	
    "id": "5",
    "orderId": 1,
    "clientId": 2,
    "receiverName": "Nome1",
    "receiverCpf": "111.111.111-11",
    "isBuyer": true,
    "dateTime": "2019-12-12 12:00 PM",
    "local": "Santa Rita do Sapucaí",
    "status": "ENTREGUE"
}
```

#### Update Delivery

```bash
PATCH
url/api/deliveries/<deliveryId>
Content-Type: application/json

Body:
{
    "status": "SAIU PARA ENTREGA"
}
```

#### Delete Order

```bash
DELETE
*/api/deliveries/<orderId>
```