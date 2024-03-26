import mongoose from "mongoose";
import chalk from "chalk";
// Conexion a base de datos en MongoDB
mongoose.connect('mongodb+srv://octadev:112020a@clusteroctavio.n8a1lsl.mongodb.net/integradora?retryWrites=true&w=majority')
    .then(() => {
        console.log(
            chalk.green(
                "======================\n TRYING SEEDER\n======================"
            )
        );
    })
    .catch((err) => {
        console.error(chalk.red("THERE IS A ERROR"), err);
    });

// Importaciones de los modelos
import { kitchen, bathroom1, bathroom2, room1, room2, room3,livingRoom, garaje } from "../models/sensor.model.js";

// Funcion asincrona para insertar los datos del seeder
async function seedData() {
    try {
        // Kitchen
        const kitchen = [
            { 
                //Sensor 1 - Gas
                "type": "Sensor",
                "identifier": "S1CTF",
                "name": "Gas",
                "brand": "TresD Print Tech",
                "model": "MQ-2",
                "specifications": [
                    {
                        "name": "Sensibilidad",
                        "maxValue": 1000,
                        "minValue": 0,
                        "measurementUnit": "PPM"
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "measurementUnit": "V"
                    }
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFS",
                "readings": [{
                    "name": "Concentracion de Gas",
                    "value": 50,
                    "measuramentUnit": "PPM"
                }]
            },
            { 
                //Sensor 2 - Temperatura y Humedad
                "type": "Sensor",
                "identifier": "S2CTF",
                "name": "Temperatura y humedad",
                "brand": "Rantec",
                "model": "DHT11",
                "specificactions": [
                    {
                        "name": "Rango de Temperatura",
                        "minValue": 0,
                        "maxValue": 50,
                        "meausurementUnit": "°C"
                    },
                    {
                        "name": "Rango de Humedad",
                        "minValue": 20,
                        "maxValue": 90,
                        "meausurementUnit": "% HR"
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V"
                    }
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFS",
                "readings": [
                    {
                        "name": "Deteccion de Temperatura",
                        "value": 24,
                        "measuramentUnit": "°C"
                    },
                    {
                        "name": "Deteccion de Humedad",
                        "value": 14,
                        "measuramentUnit": "% HR"
                    }
                ]
            },
            { 
                //Actuador 1 - Luz Exterior
                "type": "Actuador",
                "identifier": "A1CTF",
                "name": "Luz Exterior",
                "brand": "Radox",
                "model": "LED-5mm",
                "specificactions": [
                    {
                        "name": "Corriente Máxima de Pico",
                        "maxValue": 15,
                        "minValue": 0,
                        "meausurementUnit": "mA",
                    },
                    {
                        "name": "Voltaje Nominal de Operación",
                        "maxValue": 2.1,
                        "minValue": 2.1,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFC",
                "actions": [
                    {
                        "name": "Luz Exterior",
                        "status": true
                    }
                ],
            }, 
            {
                // Actuador 2 - Luz Interior
                "type": "Actuador",        
                "name": "Luz Interior",
                    "brand": "Voltech",
                    "model": "POPL-12",
                    "specifications": [
                        {
                            "name": "Soporte de tensión",
                            "value": 250,
                            "measurementUnits": "V"
                        },
                        {
                            "name": "VCD",
                            "value": 4,
                            "measurementUnits": "A"
                        },
                        {
                            "name": "Diámetro del Socket",
                            "value": 2 ,
                            "measurementUnits": "IN"
                        }
                    ],
                    "location": "Cocina",
                    "status": "Disponible",
                    "initialDate": {"$date": "2024-03-01T08:00:00.000+0000"},
                    "owner": "TurtleFS",
                    "actions": [
                        {
                            "name": "Luz interior",
                            "status": true
                        }
                    ]
            },	
            {
                // Actuador 3 - Ventilador
                "type": "Actuador",
                "identifier": "A3CTF",
                "name": "Ventilador",
                "brand": "Steren",
                "model": "VN4-012P",
                "specifications": [
                    {
                        "name": "Revoluciones por minuto",
                        "value": 2700,
                        "units": "RPM"
                    },
                    {
                        "name": "VCD",
                        "value": 12,
                        "units": "V"
                    }
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFS",
                "actions": [
                    {
                        "name": "Ventilador",
                        "status": true
                    }
                ]

            },
            {
                // Actuador 4 - Ventana Sencilla
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Ventana Sencilla",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFS",
                "actions": [{
                    "name": "Ventana abierta",
                    "value": 95,
                    "meausurementUnit": "°"
                }]

            },
            {
                // Actuador 5 - Ventana Sencilla
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Ventana Sencilla",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFS",
                "actions": [{
                    "name": "Ventana abierta",
                    "value": 95,
                    "meausurementUnit": "°"
                }]

            },
            {
                // Actuador 6 - Puerta
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Puerta",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFS",
                "actions": [{
                    "name": "Puerta",
                    "value": 40,
                    "meausurementUnit": "°"
                }]
            }
        ]

        await kitchen.insertMany(kitchen)

        // Bathroom1
        const bathroomOne = [
        {
            // Sensor 1 - Proximidad
            "type": "Sensor",
            "name": "Proximidad",
            "brand": "Steren",
            "model": "ARD-350",
            "specifications": [
                {
                    "name": "Rango de Distancia",
                    "maxValue": 500,
                    "minValue": 2,
                    "measurementUnit": "CM",
                    
                },
                {
                    "name": "VCD",
                    "maxValue": 5,
                    "minValue": 3,
                    "measurementUnit": "V"
                }
            ],
            "location": "Baño 1",
            "status": "Disponible",
            "initialDate": {"$date": "2024-03-14T10:50:00Z"},
            "owner": "JODomotics",
            "readings": [{
                "name": "Deteccion de Distancia",
                "reading": 30,
                "measurementUnit": "CM"
            }]
        },
        {
            // Sensor 2 - Fotoresistencia
            "type": "Sensor",
            "name": "Fotoresistencia",
            "brand": "Genérica",
            "model": "LDR5537",
            "specifications": [
                {
                    "name": "Rango de Luz",
                    "maxValue": 50,
                    "minValue": 18,
                    "measurementUnit": "Lux"
                },
                {
                    "name": "VCD",
                    "maxValue": 5,
                    "minValue": 3.3,
                    "measurementUnit": "V"
                },
                {
                    "name": "Intensidad",
                    "maxValue": 1024,
                    "minValue": 0,
                    "measurementUnit": "Ohms"
                }
            ],
            "location": "Baño 1",
            "status": "Disponible",
            "initialDate": {"$date": "2024-04-18T09:00:00Z"},
            "owner": "JODomotics",
            "readings": [{
                "name": "Deteccion de Luz",
                "reading": 28,
                "measurementUnit": "Lux"
            },
            {
                "name": "Deteccion de Intensidad",
                "reading": 589,
                "measurementUnit": "Ohms"
            }]
        },
        {
        // Sensor 3 - Presencia
            "type": "Sensor",
            "name": "Presencia",
            "brand": "Tecneu",
            "model": "HC-SR01",
            "specifications": [
                {
                    "name": "Rango de Distancia",
                    "maxValue": 700,
                    "minValue": 250,
                    "measurementUnit": "CM"
                },
                {
                    "name": "VCD",
                    "maxValue": 12,
                    "minValue": 5,
                    "measurementUnit": "V"
                }
            ],
            "location": "Baño 1",
            "status": "Disponible",
            "initialDate": {"$date": "2024-04-17T09:11:00Z"},
            "owner": "JODomotics",
            "readings": [{
                "name": "Deteccion de Presencia",
                "status": true
            }]
        },
        {
            // Actuador 1 - Bomba de Agua
            "type" : "Actuador",
            "name": "Bomba de Agua",
            "brand" : "DIP",
            "model" : "MLM602838223",
            "specifications" : [
                {
                    "name" : "VCD",
                    "minValue" : 2.5,
                    "maxValue" : 6.0,
                    "units" : "V"
                },
                {
                    "name" : "Corriente",
                    "minValue" : 130.0,
                    "maxValue" : 220.0,
                    "units" : "mA"
                },
                {
                    "name" : "Diámetro del Tubo de Salida",
                    "external" : 7.5,
                    "internal" : 5.0,
                    "units" : "mm"
                }
            ],
            "location" : "Baño 1",
            "status" : "Disponible",
            "initialDate" : {"$date":"2024-03-01T08:00:00.000+0000"},
            "owner" : "JODomotics",
            "actions": [
                {
                    "name": "Bomba de agua",
                    "status": true
                }
            ]
        },
        {
        // Actuador 2 - Luz Interior
        "type": "Actuador",        
        "name": "Luz Interior",
            "brand": "Voltech",
            "model": "POPL-12",
            "specifications": [
                {
                    "name": "Soporte de tensión",
                    "value": 250,
                    "measurementUnits": "V"
                },
                {
                    "name": "VCD",
                    "value": 4,
                    "measurementUnits": "A"
                },
                {
                    "name": "Diámetro del Socket",
                    "value": 2 ,
                    "measurementUnits": "IN"
                }
            ],
            "location": "Baño 1",
            "status": "Disponible",
            "initialDate": {"$date": "2024-03-01T08:00:00.000+0000"},
            "owner": "JODomotics",
            "actions": [
                {
                    "name": "Luz interior",
                    "status": true
                }
            ]
        },	
        { 
            //Actuador 3 - Luz Exterior
            "type": "Actuador",
            "identifier": "A1CTF",
            "name": "Luz Exterior",
            "brand": "Radox",
            "model": "LED-5mm",
            "specificactions": [
                {
                    "name": "Corriente Máxima de Pico",
                    "maxValue": 15,
                    "minValue": 0,
                    "meausurementUnit": "mA",
                },
                {
                    "name": "Voltaje Nominal de Operación",
                    "maxValue": 2.1,
                    "minValue": 2.1,
                    "meausurementUnit": "V",
                },
            ],
            "location": "Baño 1",
            "status": "Disponible",
            "owner": "JODomotics",
            "actions": [
                {
                    "name": "Luz Exterior",
                    "status": true
                }
            ],
        }, 
        {
            // Actuador 4 - Puerta
            "type": "Actuador",
            "identifier": "A4CTF",
            "name": "Puerta",
            "brand": "ServoTech",
            "model": "SG90",
            "specificactions": [
                {
                    "name": "Ángulo Máximo",
                    "maxValue": 180,
                    "minValue": 0,
                    "meausurementUnit": "°",
                },
                {
                    "name": "Alimentación de Energía",
                    "maxValue": 5,
                    "minValue": 3.3,
                    "meausurementUnit": "V",
                },
            ],
            "location": "Baño 1",
            "status": "Disponible",
            "owner": "JODomotics",
            "actions": [{
                "name": "Puerta",
                "value": 40,
                "meausurementUnit": "°"
            }]
        },
        {
            // Actuador 5 - Ventana Sencilla
            "type": "Actuador",
            "identifier": "A4CTF",
            "name": "Ventana Sencilla",
            "brand": "ServoTech",
            "model": "SG90",
            "specificactions": [
                {
                    "name": "Ángulo Máximo",
                    "maxValue": 180,
                    "minValue": 0,
                    "meausurementUnit": "°",
                },
                {
                    "name": "Alimentación de Energía",
                    "maxValue": 5,
                    "minValue": 3.3,
                    "meausurementUnit": "V",
                },
            ],
            "location": "Baño 1",
            "status": "Disponible",
            "owner": "JODomotics",
            "actions": [{
                "name": "Ventana abierta",
                "value": 95,
                "meausurementUnit": "°"
            }]

        }
        ]

        await bathroom1.insertMany(bathroomOne)

        // Garage 
        const garage = [
            {
                // Sensor 1 - Presencia
                    "type": "Sensor",
                    "name": "Presencia",
                    "brand": "Tecneu",
                    "model": "HC-SR01",
                    "specifications": [
                        {
                            "name": "Rango de Distancia",
                            "maxValue": 700,
                            "minValue": 250,
                            "measurementUnit": "CM"
                        },
                        {
                            "name": "VCD",
                            "maxValue": 12,
                            "minValue": 5,
                            "measurementUnit": "V"
                        }
                    ],
                    "location": "Garaje",
                    "status": "Disponible",
                    "initialDate": {"$date": "2024-04-17T09:11:00Z"},
                    "owner": "BYTECRAFTERS",
                    "readings": [{
                        "name": "Deteccion de Presencia",
                        "status": true
                    }]
            },
            {
                // Sensor 2 - Proximidad
                "type": "Sensor",
                "name": "Proximidad",
                "brand": "Steren",
                "model": "ARD-350",
                "specifications": [
                    {
                        "name": "Rango de Distancia",
                        "maxValue": 500,
                        "minValue": 2,
                        "measurementUnit": "CM",
                        
                    },
                    {
                        "name": "VCD",
                        "maxValue": 5,
                        "minValue": 3,
                        "measurementUnit": "V"
                    }
                ],
                "location": "Garaje",
                "status": "Disponible",
                "initialDate": {"$date": "2024-03-14T10:50:00Z"},
                "owner": "BYTECRAFTERS",
                "readings": [{
                    "name": "Deteccion de Distancia",
                    "reading": 45,
                    "measurementUnit": "CM"
                }]
            },
            {
                // Sensor 3 - Fotoresistencia
                "type": "Sensor",
                "name": "Fotoresistencia",
                "brand": "Genérica",
                "model": "LDR5537",
                "specifications": [
                    {
                        "name": "Rango de Luz",
                        "maxValue": 50,
                        "minValue": 18,
                        "measurementUnit": "Lux"
                    },
                    {
                        "name": "VCD",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "measurementUnit": "V"
                    },
                    {
                        "name": "Intensidad",
                        "maxValue": 1024,
                        "minValue": 0,
                        "measurementUnit": "Ohms"
                    }
                ],
                "location": "Garaje",
                "status": "Disponible",
                "initialDate": {"$date": "2024-04-18T09:00:00Z"},
                "owner": "BYTECRAFTERS",
                "readings": [{
                    "name": "Deteccion de Luz",
                    "reading": 23,
                    "measurementUnit": "Lux"
                },
                {
                    "name": "Deteccion de Intensidad",
                    "reading": 608,
                    "measurementUnit": "Ohms"
                }]
            },
            {
                // Actuador 1 - Puerta
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Puerta",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Garaje",
                "status": "Disponible",
                "owner": "BYTECRAFTERS",
                "actions": [{
                    "name": "Puerta",
                    "value": 30,
                    "meausurementUnit": "°"
                }]
            },
            {
                // Actuador 2 - Servomotor Porton Izquierdo
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Servomotor Porton Izquierdo",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Garaje",
                "status": "Disponible",
                "owner": "BYTECRAFTERS",
                "actions": [{
                    "name": "Servomotor Porton Izquierdo",
                    "value": 95,
                    "meausurementUnit": "°"
                }]
            },
            {
                // Actuador 3 - Servomotor Porton Derecho
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Servomotor Porton Derecho",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Garaje",
                "status": "Disponible",
                "owner": "BYTECRAFTERS",
                "actions": [{
                    "name": "Servomotor Porton Derecho",
                    "value": 101,
                    "meausurementUnit": "°"
                }]
            },  
            {
                // Actuador 4 - Buzzer
                "type": "Actuador",
                "name": "Buzzer",
                "brand": "Generica",
                "model": "YHE12",
                "specifications": [
                    {
                        "name": "Rango de operacion",
                        "maxValue": 85,
                        "minValue": 30,
                        "measurementUnit": "dB",
                        "accuracy": "+-1"
        
                    },
                    {
                        "name": "VCD",
                        "maxValue": 8,
                        "minValue": 4,
                        "measurementUnit": "V"
                    }
                ],
                "location": "Garaje",
                "status": "Disponible",
                "initialDate": { "$date": "2024-03-07T08:00:00Z" },
                "owner": "BYTECRAFTERS",
                "actions": [{
                    "name": "Buzzer",
                    "status": true
                }]
            },
            { 
                //Actuador 5 - Luz Exterior
                "type": "Actuador",
                "identifier": "A1CTF",
                "name": "Luz Exterior",
                "brand": "Radox",
                "model": "LED-5mm",
                "specificactions": [
                    {
                        "name": "Corriente Máxima de Pico",
                        "maxValue": 15,
                        "minValue": 0,
                        "meausurementUnit": "mA",
                    },
                    {
                        "name": "Voltaje Nominal de Operación",
                        "maxValue": 2.1,
                        "minValue": 2.1,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Garaje",
                "status": "Disponible",
                "owner": "BYTECRAFTERS",
                "actions": [
                    {
                        "name": "Luz Exterior",
                        "status": true
                    }
                ],
            }, 
            {
                // Actuador 6 - Luz Interior
                "type": "Actuador",        
                "name": "Luz Interior",
                    "brand": "Voltech",
                    "model": "POPL-12",
                    "specifications": [
                        {
                            "name": "Soporte de tensión",
                            "value": 250,
                            "measurementUnits": "V"
                        },
                        {
                            "name": "VCD",
                            "value": 4,
                            "measurementUnits": "A"
                        },
                        {
                            "name": "Diámetro del Socket",
                            "value": 2 ,
                            "measurementUnits": "IN"
                        }
                    ],
                    "location": "Garaje",
                    "status": "Disponible",
                    "initialDate": {"$date": "2024-03-01T08:00:00.000+0000"},
                    "owner": "BYTECRAFTERS",
                    "actions": [
                        {
                            "name": "Luz interior",
                            "status": true
                        }
                    ]
            }	
        ]

        await garaje.insertMany(garage)

        // Livingroom
        const livingroom = [
            { 
                //Sensor 1 - Temperatura y Humedad
                "type": "Sensor",
                "identifier": "S2CTF",
                "name": "Temperatura y humedad",
                "brand": "Rantec",
                "model": "DHT11",
                "specificactions": [
                    {
                        "name": "Rango de Temperatura",
                        "minValue": 0,
                        "maxValue": 50,
                        "meausurementUnit": "°C"
                    },
                    {
                        "name": "Rango de Humedad",
                        "minValue": 20,
                        "maxValue": 90,
                        "meausurementUnit": "% HR"
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V"
                    }
                ],
                "location": "Sala",
                "status": "Disponible",
                "owner": "SmartHouse",
                "readings": [
                    {
                        "name": "Deteccion de Temperatura",
                        "value": 30,
                        "measuramentUnit": "°C"
                    },
                    {
                        "name": "Deteccion de Humedad",
                        "value": 15,
                        "measuramentUnit": "% HR"
                    }
                ]
            },
            {
                // Sensor 2 - Fotoresistencia
                "type": "Sensor",
                "name": "Fotoresistencia",
                "brand": "Genérica",
                "model": "LDR5537",
                "specifications": [
                    {
                        "name": "Rango de Luz",
                        "maxValue": 50,
                        "minValue": 18,
                        "measurementUnit": "Lux"
                    },
                    {
                        "name": "VCD",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "measurementUnit": "V"
                    },
                    {
                        "name": "Intensidad",
                        "maxValue": 1024,
                        "minValue": 0,
                        "measurementUnit": "Ohms"
                    }
                ],
                "location": "Sala",
                "status": "Disponible",
                "initialDate": {"$date": "2024-04-18T09:00:00Z"},
                "owner": "SmartHouse",
                "readings": [{
                    "name": "Deteccion de Luz",
                    "reading": 35,
                    "measurementUnit": "Lux"
                },
                {
                    "name": "Deteccion de Intensidad",
                    "reading": 507,
                    "measurementUnit": "Ohms"
                }]
            },
            {
                // Actuador 1 - Ventilador
                "type": "Actuador",
                "identifier": "A3CTF",
                "name": "Ventilador",
                "brand": "Steren",
                "model": "VN4-012P",
                "specifications": [
                    {
                        "name": "Revoluciones por minuto",
                        "value": 2700,
                        "units": "RPM"
                    },
                    {
                        "name": "VCD",
                        "value": 12,
                        "units": "V"
                    }
                ],
                "location": "Ventilador",
                "status": "Disponible",
                "owner": "SmartHouse",
                "actions": [
                    {
                        "name": "Ventilador",
                        "status": true
                    }
                ]

            },
            {
                // Actuador 2 - Puerta
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Puerta",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Sala",
                "status": "Disponible",
                "owner": "SmartHouse",
                "actions": [{
                    "name": "Puerta",
                    "value": 40,
                    "meausurementUnit": "°"
                }]
            },
            {
                // Actuador 3 - Ventana Sencilla
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Ventana Sencilla",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Sala",
                "status": "Disponible",
                "owner": "SmartHouse",
                "actions": [{
                    "name": "Ventana abierta",
                    "value": 95,
                    "meausurementUnit": "°"
                }]

            }, 
            { 
                //Actuador 4 - Luz Exterior
                "type": "Actuador",
                "identifier": "A1CTF",
                "name": "Luz Exterior",
                "brand": "Radox",
                "model": "LED-5mm",
                "specificactions": [
                    {
                        "name": "Corriente Máxima de Pico",
                        "maxValue": 15,
                        "minValue": 0,
                        "meausurementUnit": "mA",
                    },
                    {
                        "name": "Voltaje Nominal de Operación",
                        "maxValue": 2.1,
                        "minValue": 2.1,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Sala",
                "status": "Disponible",
                "owner": "SmartHouse",
                "actions": [
                    {
                        "name": "Luz Exterior",
                        "status": true
                    }
                ],
            }, 
            {
                // Actuador 5 - Luz Interior
                "type": "Actuador",        
                "name": "Luz Interior",
                    "brand": "Voltech",
                    "model": "POPL-12",
                    "specifications": [
                        {
                            "name": "Soporte de tensión",
                            "value": 250,
                            "measurementUnits": "V"
                        },
                        {
                            "name": "VCD",
                            "value": 4,
                            "measurementUnits": "A"
                        },
                        {
                            "name": "Diámetro del Socket",
                            "value": 2 ,
                            "measurementUnits": "IN"
                        }
                    ],
                    "location": "Sala",
                    "status": "Disponible",
                    "initialDate": {"$date": "2024-03-01T08:00:00.000+0000"},
                    "owner": "SmartHouse",
                    "actions": [
                        {
                            "name": "Luz interior",
                            "status": true
                        }
                    ]
            },
        ]

        await livingRoom.insertMany(livingroom)

        // roomeOne
        const roomOne = [
            { 
                //Sensor 1 - Temperatura y Humedad
                "type": "Sensor",
                "identifier": "S2CTF",
                "name": "Temperatura y humedad",
                "brand": "Rantec",
                "model": "DHT11",
                "specificactions": [
                    {
                        "name": "Rango de Temperatura",
                        "minValue": 0,
                        "maxValue": 50,
                        "meausurementUnit": "°C"
                    },
                    {
                        "name": "Rango de Humedad",
                        "minValue": 20,
                        "maxValue": 90,
                        "meausurementUnit": "% HR"
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V"
                    }
                ],
                "location": "Recámara 1",
                "status": "Disponible",
                "owner": "MVC",
                "readings": [
                    {
                        "name": "Deteccion de Temperatura",
                        "value": 22,
                        "measuramentUnit": "°C"
                    },
                    {
                        "name": "Deteccion de Humedad",
                        "value": 16,
                        "measuramentUnit": "% HR"
                    }
                ]
            },
            {
                // Sensor 2 - Fotoresistencia
                "type": "Sensor",
                "name": "Fotoresistencia",
                "brand": "Genérica",
                "model": "LDR5537",
                "specifications": [
                    {
                        "name": "Rango de Luz",
                        "maxValue": 50,
                        "minValue": 18,
                        "measurementUnit": "Lux"
                    },
                    {
                        "name": "VCD",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "measurementUnit": "V"
                    },
                    {
                        "name": "Intensidad",
                        "maxValue": 1024,
                        "minValue": 0,
                        "measurementUnit": "Ohms"
                    }
                ],
                "location": "Recámara 1",
                "status": "Disponible",
                "initialDate": {"$date": "2024-04-18T09:00:00Z"},
                "owner": "MVC",
                "readings": [{
                    "name": "Deteccion de Luz",
                    "reading": 27,
                    "measurementUnit": "Lux"
                },
                {
                    "name": "Deteccion de Intensidad",
                    "reading": 587,
                    "measurementUnit": "Ohms"
                }]
            },
            {
                // Actuador 1 - Luz Interior
                "type": "Actuador",        
                "name": "Luz Interior",
                "brand": "Voltech",
                "model": "POPL-12",
                "specifications": [
                    {
                        "name": "Soporte de tensión",
                        "value": 250,
                        "measurementUnits": "V"
                    },
                    {
                        "name": "VCD",
                        "value": 4,
                        "measurementUnits": "A"
                    },
                    {
                        "name": "Diámetro del Socket",
                        "value": 2 ,
                        "measurementUnits": "IN"
                    }
                ],
                "location": "Recámara 1",
                "status": "Disponible",
                "initialDate": {"$date": "2024-03-01T08:00:00.000+0000"},
                "owner": "MVC",
                "actions": [
                    {
                        "name": "Luz interior",
                        "status": true
                    }
                ]
            },	
            { 
                //Actuador 2 - Luz Exterior
                "type": "Actuador",
                "identifier": "A1CTF",
                "name": "Luz Exterior",
                "brand": "Radox",
                "model": "LED-5mm",
                "specificactions": [
                    {
                        "name": "Corriente Máxima de Pico",
                        "maxValue": 15,
                        "minValue": 0,
                        "meausurementUnit": "mA",
                    },
                    {
                        "name": "Voltaje Nominal de Operación",
                        "maxValue": 2.1,
                        "minValue": 2.1,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 1",
                "status": "Disponible",
                "owner": "MVC",
                "actions": [
                    {
                        "name": "Luz Exterior",
                        "status": true
                    }
                ],
            }, 
            {
                // Actuador 3 - Puerta
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Puerta",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 1",
                "status": "Disponible",
                "owner": "MVC",
                "actions": [{
                    "name": "Puerta",
                    "value": 40,
                    "meausurementUnit": "°"
                }]
            },
        
            {
                // Actuador 4 - Ventana Sencilla
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Ventana Sencilla",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 1",
                "status": "Disponible",
                "owner": "MVC",
                "actions": [{
                    "name": "Ventana abierta",
                    "value": 95,
                    "meausurementUnit": "°"
                }]

            }, 
            {
                // Actuador 5 - Ventilador
                "type": "Actuador",
                "identifier": "A3CTF",
                "name": "Ventilador",
                "brand": "Steren",
                "model": "VN4-012P",
                "specifications": [
                    {
                        "name": "Revoluciones por minuto",
                        "value": 2700,
                        "units": "RPM"
                    },
                    {
                        "name": "VCD",
                        "value": 12,
                        "units": "V"
                    }
                ],
                "location": "Recámara 1",
                "status": "Disponible",
                "owner": "MVC",
                "actions": [
                    {
                        "name": "Ventilador",
                        "status": true
                    }
                ]

            }
        ]

        await room1.insertMany(roomOne)

        // room 2
        const roomTwo = [
            { 
                //Sensor 1 - Temperatura y Humedad
                "type": "Sensor",
                "identifier": "S2CTF",
                "name": "Temperatura y humedad",
                "brand": "Rantec",
                "model": "DHT11",
                "specificactions": [
                    {
                        "name": "Rango de Temperatura",
                        "minValue": 0,
                        "maxValue": 50,
                        "meausurementUnit": "°C"
                    },
                    {
                        "name": "Rango de Humedad",
                        "minValue": 20,
                        "maxValue": 90,
                        "meausurementUnit": "% HR"
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V"
                    }
                ],
                "location": "Recámara 2",
                "status": "Disponible",
                "owner": "Evangelistas",
                "readings": [
                    {
                        "name": "Deteccion de Temperatura",
                        "value": 25,
                        "measuramentUnit": "°C"
                    },
                    {
                        "name": "Deteccion de Humedad",
                        "value": 12,
                        "measuramentUnit": "% HR"
                    }
                ]
            },
            {
                // Sensor 2 - Fotoresistencia
                "type": "Sensor",
                "name": "Fotoresistencia",
                "brand": "Genérica",
                "model": "LDR5537",
                "specifications": [
                    {
                        "name": "Rango de Luz",
                        "maxValue": 50,
                        "minValue": 18,
                        "measurementUnit": "Lux"
                    },
                    {
                        "name": "VCD",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "measurementUnit": "V"
                    },
                    {
                        "name": "Intensidad",
                        "maxValue": 1024,
                        "minValue": 0,
                        "measurementUnit": "Ohms"
                    }
                ],
                "location": "Recámara 2",
                "status": "Disponible",
                "initialDate": {"$date": "2024-04-18T09:00:00Z"},
                "owner": "Evangelistas",
                "readings": [{
                    "name": "Deteccion de Luz",
                    "reading": 29,
                    "measurementUnit": "Lux"
                },
                {
                    "name": "Deteccion de Intensidad",
                    "reading": 666,
                    "measurementUnit": "Ohms"
                }]
            },
            {
                // Actuador 1 - Luz Interior
                "type": "Actuador",        
                "name": "Luz Interior",
                "brand": "Voltech",
                "model": "POPL-12",
                "specifications": [
                    {
                        "name": "Soporte de tensión",
                        "value": 250,
                        "measurementUnits": "V"
                    },
                    {
                        "name": "VCD",
                        "value": 4,
                        "measurementUnits": "A"
                    },
                    {
                        "name": "Diámetro del Socket",
                        "value": 2 ,
                        "measurementUnits": "IN"
                    }
                ],
                "location": "Recámara 2",
                "status": "Disponible",
                "initialDate": {"$date": "2024-03-01T08:00:00.000+0000"},
                "owner": "Evangelistas",
                "actions": [
                    {
                        "name": "Luz interior",
                        "status": true
                    }
                ]
            },	
            { 
                //Actuador 2 - Luz Exterior
                "type": "Actuador",
                "identifier": "A1CTF",
                "name": "Luz Exterior",
                "brand": "Radox",
                "model": "LED-5mm",
                "specificactions": [
                    {
                        "name": "Corriente Máxima de Pico",
                        "maxValue": 15,
                        "minValue": 0,
                        "meausurementUnit": "mA",
                    },
                    {
                        "name": "Voltaje Nominal de Operación",
                        "maxValue": 2.1,
                        "minValue": 2.1,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 2",
                "status": "Disponible",
                "owner": "Evangelistas",
                "actions": [
                    {
                        "name": "Luz Exterior",
                        "status": true
                    }
                ],
            }, 
            {
                // Actuador 3 - Puerta
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Puerta",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 2",
                "status": "Disponible",
                "owner": "Evangelistas",
                "actions": [{
                    "name": "Puerta",
                    "value": 55,
                    "meausurementUnit": "°"
                }]
            },
        
            {
                // Actuador 4 - Ventana Sencilla
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Ventana Sencilla",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 2",
                "status": "Disponible",
                "owner": "Evangelistas",
                "actions": [{
                    "name": "Ventana abierta",
                    "value": 70,
                    "meausurementUnit": "°"
                }]

            }, 
            {
                // Actuador 5 - Ventilador
                "type": "Actuador",
                "identifier": "A3CTF",
                "name": "Ventilador",
                "brand": "Steren",
                "model": "VN4-012P",
                "specifications": [
                    {
                        "name": "Revoluciones por minuto",
                        "value": 2700,
                        "units": "RPM"
                    },
                    {
                        "name": "VCD",
                        "value": 12,
                        "units": "V"
                    }
                ],
                "location": "Recámara 2",
                "status": "Disponible",
                "owner": "Evangelistas",
                "actions": [
                    {
                        "name": "Ventilador",
                        "status": true
                    }
                ]

            }
        ]

        await room2.insertMany(roomTwo)

        // room 3
        const roomThree = [
            { 
                //Sensor 1 - Temperatura y Humedad
                "type": "Sensor",
                "identifier": "S2CTF",
                "name": "Temperatura y humedad",
                "brand": "Rantec",
                "model": "DHT11",
                "specificactions": [
                    {
                        "name": "Rango de Temperatura",
                        "minValue": 0,
                        "maxValue": 50,
                        "meausurementUnit": "°C"
                    },
                    {
                        "name": "Rango de Humedad",
                        "minValue": 20,
                        "maxValue": 90,
                        "meausurementUnit": "% HR"
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V"
                    }
                ],
                "location": "Recámara 3",
                "status": "Disponible",
                "owner": "JAE-Develops",
                "readings": [
                    {
                        "name": "Deteccion de Temperatura",
                        "value": 30,
                        "measuramentUnit": "°C"
                    },
                    {
                        "name": "Deteccion de Humedad",
                        "value": 17,
                        "measuramentUnit": "% HR"
                    }
                ]
            },
            {
                // Sensor 2 - Fotoresistencia
                "type": "Sensor",
                "name": "Fotoresistencia",
                "brand": "Genérica",
                "model": "LDR5537",
                "specifications": [
                    {
                        "name": "Rango de Luz",
                        "maxValue": 50,
                        "minValue": 18,
                        "measurementUnit": "Lux"
                    },
                    {
                        "name": "VCD",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "measurementUnit": "V"
                    },
                    {
                        "name": "Intensidad",
                        "maxValue": 1024,
                        "minValue": 0,
                        "measurementUnit": "Ohms"
                    }
                ],
                "location": "Recámara 3",
                "status": "Disponible",
                "initialDate": {"$date": "2024-04-18T09:00:00Z"},
                "owner": "JAE-Develops",
                "readings": [{
                    "name": "Deteccion de Luz",
                    "reading": 35,
                    "measurementUnit": "Lux"
                },
                {
                    "name": "Deteccion de Intensidad",
                    "reading": 679,
                    "measurementUnit": "Ohms"
                }]
            },
            {
                // Actuador 1 - Luz Interior
                "type": "Actuador",        
                "name": "Luz Interior",
                "brand": "Voltech",
                "model": "POPL-12",
                "specifications": [
                    {
                        "name": "Soporte de tensión",
                        "value": 250,
                        "measurementUnits": "V"
                    },
                    {
                        "name": "VCD",
                        "value": 4,
                        "measurementUnits": "A"
                    },
                    {
                        "name": "Diámetro del Socket",
                        "value": 2 ,
                        "measurementUnits": "IN"
                    }
                ],
                "location": "Recámara 3",
                "status": "Disponible",
                "initialDate": {"$date": "2024-03-01T08:00:00.000+0000"},
                "owner": "JAE-Develops",
                "actions": [
                    {
                        "name": "Luz interior",
                        "status": true
                    }
                ]
            },	
            { 
                //Actuador 2 - Luz Exterior
                "type": "Actuador",
                "identifier": "A1CTF",
                "name": "Luz Exterior",
                "brand": "Radox",
                "model": "LED-5mm",
                "specificactions": [
                    {
                        "name": "Corriente Máxima de Pico",
                        "maxValue": 15,
                        "minValue": 0,
                        "meausurementUnit": "mA",
                    },
                    {
                        "name": "Voltaje Nominal de Operación",
                        "maxValue": 2.1,
                        "minValue": 2.1,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 3",
                "status": "Disponible",
                "owner": "JAE-Develops",
                "actions": [
                    {
                        "name": "Luz Exterior",
                        "status": true
                    }
                ],
            }, 
            {
                // Actuador 3 - Puerta
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Puerta",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 3",
                "status": "Disponible",
                "owner": "JAE-Develops",
                "actions": [{
                    "name": "Puerta",
                    "value": 67,
                    "meausurementUnit": "°"
                }]
            },
        
            {
                // Actuador 4 - Ventana Sencilla
                "type": "Actuador",
                "identifier": "A4CTF",
                "name": "Ventana Sencilla",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "°",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "Recámara 3",
                "status": "Disponible",
                "owner": "JAE-Develops",
                "actions": [{
                    "name": "Ventana abierta",
                    "value": 70,
                    "meausurementUnit": "°"
                }]

            }, 
            {
                // Actuador 5 - Ventilador
                "type": "Actuador",
                "identifier": "A3CTF",
                "name": "Ventilador",
                "brand": "Steren",
                "model": "VN4-012P",
                "specifications": [
                    {
                        "name": "Revoluciones por minuto",
                        "value": 2700,
                        "units": "RPM"
                    },
                    {
                        "name": "VCD",
                        "value": 12,
                        "units": "V"
                    }
                ],
                "location": "Recámara 3",
                "status": "Disponible",
                "owner": "JAE-Develops",
                "actions": [
                    {
                        "name": "Ventilador",
                        "status": true
                    }
                ]

            }
        ]

        await room3.insertMany(roomThree)

        console.log('Data seeded')
    } catch (error) {
        console.log(error)
    }
    finally {
        mongoose.disconnect()
    }

}
seedData();

/* PROPIETARIOS
Baño 1: JODomotics
Baño 2: Automa-Tics
Garaje: BYTECRAFTERS
Recámara 1: MVC
Recámara 2: Evangelistas
Recámara 3: JAE-Develops
Cocina: TurtleFS
Sala: SmartHouse */
