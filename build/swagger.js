"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocument = void 0;
exports.swaggerDocument = {
    "openapi": "3.0.1",
    "info": {
        "title": "Loomi-processo-seletivo-docs",
        "description": "Documentação de rotas para a API do processo-seletivo-loomi",
        "version": "Public v.01",
    },
    "servers": [{
            "url": "https://desafio-loomi-app.herokuapp.com",
        }],
    "paths": {
        "/user/login": {
            "post": {
                "summary": "Given JSON, return a Autentication TOKEN",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "password": {
                                        "type": "string",
                                    },
                                    "email": {
                                        "type": "string",
                                    },
                                },
                            },
                            "examples": {
                                "Correct": {
                                    "value": "{\r\n    \"email\": \"guitib2000@gmail.com\",\r\n    \"password\": \"guitib123\"\r\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "405": {
                        "description": "The request method is known on the server but is not supported by the target resource.",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["user"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/user/register": {
            "post": {
                "summary": "Register a new USER (need JSON)",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "password": {
                                        "type": "string",
                                    },
                                    "email": {
                                        "type": "string",
                                    },
                                },
                            },
                            "examples": {
                                "correct": {
                                    "value": "email\": \"xa@gmail.com\",\r\n    \"password\": \"1234\",\r\n }",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                },
                "tags": ["user"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/user/:{idOrEmail}": {
            "get": {
                "summary": "Return JSON with a single User information",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["user"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/user/get-users-with-same-email-provider/:{emailProvider}": {
            "get": {
                "summary": "Return JSON with all users that have the same email provider",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["user"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/user/verify/{:id}/{:uniqueString}": {
            "get": {
                "summary": "Return JSON confirming the verification of your email",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["user"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/user/{:id}": {
            "put": {
                "summary": "Update bed (Need JSON)",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                    },
                                    "status": {
                                        "type": "string",
                                    },
                                },
                            },
                            "examples": {
                                "0": {
                                    "value": "{\n    \"id\": \"df589863-f3a9-40c9-88b4-d1ce3826f93c\",\n    \"status\": \"CLEANING_NEEDED\"\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["user"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "delete": {
                "summary": "Delete user (Need JSON)",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["user"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/client/{id}": {
            "get": {
                "summary": "Given a client ID, returns client informations",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["client"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
            "put": {
                "summary": "Update client (Need JSON)",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                    },
                                    "name": {
                                        "type": "string",
                                    },
                                    "email": {
                                        "type": "string",
                                    },
                                    "phone": {
                                        "type": "string",
                                    },
                                    "address": {
                                        "type": "string",
                                    },
                                },
                            },
                            "examples": {
                                "0": {
                                    "value": "{\n    \"id\": \"fc2dd946-4005-40d7-8d54-1c66b25279dc\",\n    \"name\": \"Guilherme Tiberios\"\n}    \"email\": \"guitib2001@gmail.com\"\n}    \"phone\": \"992674928\"\n}    \"address\": \"Av Boa viagem 3629 ap 402\"\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["client"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "delete": {
                "summary": "Delete client (Need JSON)",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["client"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
        },
        "/client": {
            "post": {
                "summary": "Create a new Client",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                    },
                                    "email": {
                                        "type": "string",
                                    },
                                    "phone": {
                                        "type": "string",
                                    },
                                    "address": {
                                        "type": "string",
                                    },
                                },
                            },
                            "examples": {
                                "0": {
                                    "value": "{\r\n    \"name\": \"Guilherme\",\r\n    \"email\": \"guitib2000@gmail.com\",\r\n    \"phone\": \"992674929\"\r\n   \"address\": \"Av Boa viagem 3628 ap 401\"\r\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                    "409": {
                        "$ref": "#/components/responses/Conflict",
                    },
                },
                "tags": ["client"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
        },
        "/product/single-product/{:id}": {
            "get": {
                "summary": "Given a product ID, returns product informations",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["product"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/product/price-filter?lowValue=(number)&highValue=(number)": {
            "get": {
                "summary": "return a list of products between both values",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                    "400": {
                        "$ref": "#/components/responses/BadRequest"
                    },
                },
                "tags": ["product"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/product/characteristics": {
            "get": {
                "summary": "get a list of products that have the same characteristics, like COMPUTERS",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["product"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/product": {
            "post": {
                "summary": "Create a new Product",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "name": {
                                        "type": "string",
                                    },
                                    "price": {
                                        "type": "number",
                                    },
                                    "characteristics": {
                                        "type": "string",
                                    },
                                    "image": {
                                        "type": "file",
                                    },
                                },
                            },
                            "examples": {
                                "0": {
                                    "value": "{\r\n    \"name\": \"Computador Gamer ryzen 5 5600X\",\r\n    \"price\": \"9000\",\r\n    \"characteristics\": \"COMPUTERS\"\r\n   \"image\": \"src/imagefile\"\r\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                    "409": {
                        "$ref": "#/components/responses/Conflict",
                    },
                },
                "tags": ["product"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
        },
        "/product/{id}": {
            "put": {
                "summary": "Update Product (Need JSON)",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                    },
                                    "name": {
                                        "type": "string",
                                    },
                                    "price": {
                                        "type": "number",
                                    },
                                    "characteristics": {
                                        "type": "string",
                                    },
                                    "image": {
                                        "type": "imageFile",
                                    },
                                },
                            },
                            "examples": {
                                "0": {
                                    "value": "{\n    \"id\": \"bfdc8824-a481-4621-acde-63c2d29dda1c\",\n    \"name\": \"Mouse Raposa\"\n}    \"price\": \"150\"\n}    \"characteristics\": \"PERIPHERALS\"\n}    \"image\": \"src/mouseRaposa.img\"\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["product"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "delete": {
                "summary": "Delete Product (Need JSON)",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["product"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
        },
        "/order/single-order/{:id}": {
            "get": {
                "summary": "Given order Id, returns order information",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["order"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/order/all-orders-client?clientId=(string)": {
            "get": {
                "summary": "Given client id, returns all orders from this id",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["order"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/order/custom-timestamp-filter?initialTime=(Date)&finalTime=(Date)": {
            "get": {
                "summary": "Given a date, returns all orders between this 2 times",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                },
                "tags": ["order"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "servers": [{
                    "url": "https://desafio-loomi-app.herokuapp.com",
                }],
        },
        "/order": {
            "post": {
                "summary": "Create a new Order",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "clientId": {
                                        "type": "string",
                                    },
                                    "product_list": {
                                        "type": "Array<string>",
                                    },
                                },
                            },
                            "examples": {
                                "0": {
                                    "value": "{\r\n    \"clientId\": \"fc2dd946-4005-40d7-8d54-1c66b25279dc\",\r\n    \"product_list\": \"['cce59b62-1ab2-49c5-bae9-d95e54a1ef8e','0768ab94-250a-4371-8cf6-82f4578352fc','7793bcb2-05fa-4851-a5b1-c452e4f05b0d']\",\r\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                    "503": {
                        "$ref": "#/components/responses/ServiceUnavailable",
                    },
                    "409": {
                        "$ref": "#/components/responses/Conflict",
                    },
                },
                "tags": ["order"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
        },
        "/order/{:id}": {
            "put": {
                "summary": "Update Order (Need JSON)",
                "description": "",
                "requestBody": {
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "id": {
                                        "type": "string",
                                    },
                                    "clientId": {
                                        "type": "string",
                                    },
                                    "product_list": {
                                        "type": "Array<string>",
                                    },
                                    "status": {
                                        "type": "string",
                                    },
                                },
                            },
                            "examples": {
                                "0": {
                                    "value": "{\r\n    \"clientId\": \"fc2dd946-4005-40d7-8d54-1c66b25279dc\",\r\n    \"status\": \"DELIVERED\",\r\n}",
                                },
                            },
                        },
                    },
                },
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["order"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
            "delete": {
                "summary": "Delete Order (Need JSON)",
                "description": "",
                "responses": {
                    "200": {
                        "$ref": "#/components/responses/OK",
                    },
                    "403": {
                        "$ref": "#/components/responses/Forbidden",
                    },
                    "404": {
                        "$ref": "#/components/responses/NotFound",
                    },
                },
                "tags": ["order"],
                "servers": [{
                        "url": "https://desafio-loomi-app.herokuapp.com",
                    }],
            },
        },
    },
    "components": {
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT",
            },
        },
        "schemas": {
            "Error": {},
        },
        "responses": {
            "OK": {
                "description": "The request succeeded.",
                "content": {
                    "application/json": {},
                },
            },
            "BadRequest": {
                "description": "The server couldn't understand the request due to invalid syntax.",
                "content": {
                    "application/json": {},
                },
            },
            "Unauthorized": {
                "description": "The client must autenticate itself to get the requested response.",
                "content": {
                    "application/json": {},
                },
            },
            "Conflict": {
                "description": "The request conflicts with the current state of the server.",
                "content": {
                    "application/json": {},
                },
            },
            "Forbidden": {
                "description": "The client doesn't have acess rights to the content. But the client identity is known to the server.",
                "content": {
                    "application/json": {},
                },
            },
            "NotFound": {
                "description": "Could not find Id/URL on the server.",
                "content": {
                    "application/json": {},
                },
            },
            "ServiceUnavailable": {
                "description": "Service Error.",
                "content": {
                    "application/json": {},
                },
            },
        },
    },
    "security": [{
            "bearerAuth": [],
        }],
};
