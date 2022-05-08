const initState = {
    products: [
        {
            "available": true,
            "brand": "Philips",
            "id": 1,
            "name": "Philips hue bulb",
            "options": [
                {
                    "color": "white",
                    "power": [
                        6.5,
                        9.5
                    ],
                    "quantity": 3
                },
                {
                    "color": "red",
                    "power": [
                        7.5,
                        9.5
                    ],
                    "quantity": 7
                }
            ],
            "price": "500",
            "weight": 0.2
        },
        {
            "available": true,
            "brand": "IKEA",
            "id": 2,
            "name": "Trådfria Lampor",
            "options": [
                {
                    "color": "white",
                    "power": [
                        6.5,
                        9.5
                    ],
                    "quantity": 3
                },
                {
                    "color": "red",
                    "power": [
                        6.5,
                        9.5
                    ],
                    "quantity": 7
                },
                {
                    "color": "green",
                    "power": [
                        6.5
                    ],
                    "quantity": 0
                }
            ],
            "price": "300",
            "weight": 0.2
        },
        {
            "available": true,
            "brand": "Sony",
            "id": 3,
            "name": "Playstation 4",
            "options": [
                {
                    "color": [
                        "black"
                    ],
                    "quantity": 10,
                    "storage": [
                        "250",
                        "500",
                        "1000"
                    ]
                },
                {
                    "color": [
                        "white"
                    ],
                    "quantity": 3,
                    "storage": [
                        "250",
                        "500"
                    ]
                }
            ],
            "price": "5000",
            "weight": 2.1
        },
        {
            "available": true,
            "brand": "Nintendo",
            "id": 4,
            "name": "Nintendo switch",
            "options": [
                {
                    "color": [
                        "black"
                    ],
                    "quantity": 0,
                    "storage": [
                        "250",
                        "500"
                    ]
                },
                {
                    "color": [
                        "white"
                    ],
                    "quantity": 12,
                    "storage": [
                        "250",
                        "500"
                    ]
                },
                {
                    "color": [
                        "red"
                    ],
                    "quantity": 5,
                    "storage": [
                        "500"
                    ]
                }
            ],
            "price": "4500",
            "weight": 1.6
        },
        {
            "available": false,
            "brand": "JBL",
            "id": 5,
            "name": "Bluetooth speaker",
            "options": [
                {
                    "color": [
                        "black"
                    ],
                    "quantity": 15
                },
                {
                    "color": [
                        "white"
                    ],
                    "quantity": 0
                },
                {
                    "color": [
                        "red"
                    ],
                    "quantity": 1
                }
            ],
            "price": "800",
            "weight": 0.5
        },
        {
            "available": true,
            "brand": "Marshall",
            "id": 6,
            "name": "Bluetooth speaker",
            "options": [
                {
                    "color": [
                        "black"
                    ],
                    "quantity": 1
                },
                {
                    "color": [
                        "white"
                    ],
                    "quantity": 11
                },
                {
                    "color": [
                        "orange"
                    ],
                    "quantity": 2
                }
            ],
            "price": "950",
            "weight": 0.5
        },
        {
            "available": false,
            "brand": "BRAUN",
            "id": 7,
            "name": "Electrical toothbrush",
            "options": [
                {
                    "color": [
                        "green"
                    ],
                    "quantity": 0
                },
                {
                    "color": [
                        "white"
                    ],
                    "quantity": 0
                }
            ],
            "price": "950",
            "weight": 0.4
        },
        {
            "available": true,
            "brand": "SAMSUNG",
            "id": 8,
            "name": "Samsung 40 UHD Smart TV",
            "options": [
                {
                    "color": [
                        "black"
                    ],
                    "quantity": 19
                }
            ],
            "price": "3200",
            "weight": 8.2
        },
        {
            "available": false,
            "brand": "BenQ",
            "id": 9,
            "name": "BenQ GW2765HE Eye-Care",
            "options": [
                {
                    "color": [
                        "black"
                    ],
                    "quantity": 3
                }
            ],
            "price": "2700",
            "weight": 3.9
        },
        {
            "available": true,
            "brand": "Corsair",
            "id": 10,
            "name": "Corsair HS60 gaming headset",
            "options": [
                {
                    "color": [
                        "black"
                    ],
                    "quantity": 3
                },
                {
                    "color": [
                        "red"
                    ],
                    "quantity": 9
                }
            ],
            "price": "1200",
            "weight": 0.8
        }
    ],
    product: {}
}
const ProductsReducer = (state = initState, action) => {
    switch(action.type){
        case "PRODUCT": 
        return {...state, product: state.products.find(product => product.id === parseInt(action.id))}
        default: 
        return state;
    }
}
export default ProductsReducer;