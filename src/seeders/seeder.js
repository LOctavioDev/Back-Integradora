import mongoose from "mongoose";
import chalk from "chalk";
// Conecta a la base de datos
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
import { kitchen, bathroom1, bathroom2, room1, room2, room3,livingRoom, garaje } from "../models/sensor.model.js";


async function seedData() {
    try {
        /******COCINA******/
        const kitchenSensors = [
            { //Sensor 1 Gas
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
                        "measurementUnit": "ppm"
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
                    "measuramentUnit": "ppm"
                }]
            },
            { //Sensor 2 Temperatura y Humedad
                "type": "Sensor",
                "identifier": "S2CTF",
                "name": "Temperatura y humedad",
                "brand": "Rantec",
                "model": "DHT11",
                "specificactions": [
                    {
                        "name": "Rango Temperatura",
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
                "status": "Activo",
                "owner": "TurtleFS",
                "readings": [
                    {
                        "name": "Deteccion de humedad",
                        "value": 14,
                        "measuramentUnit": "HR%"
                    },
                    {
                        "name": "Deteccion de temperatura",
                        "value": 24,
                        "measuramentUnit": "°C"
                    }
                ]
            },
            { //Actuador 1 Luz Exterior
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
                        "name": "Luz encendida",
                        "value": true
                    }
                ],
            }, {
                // Actuador 2 luz interior 
                "type": "Actuador",
                "identifier": "A2CTF",
                "name": "Luz Interior",
                "brand": "Radox",
                "model": "LED-5mm",
                "specifications": [
                    {
                        "name": "Corriente Máxima de Pico",
                        "maxValue": 15,
                        "minValue": 0,
                        "meausurementUnit": "mA"
                    },
                    {
                        "name": "Voltaje Nominal de Operación",
                        "maxValue": 2.1,
                        "minValue": 2.1,
                        "meausurementUnit": "V"
                    }
                ],
                "location": "Cocina",
                "status": "Disponible",

                "owner": "TurtleFC",
                "actions": [
                    {
                        "name": "Luz interior apagada",
                        "value": true
                    }
                ]

            }, {
                // Actuador 3 Ventilador

                "type": "Actuador",
                "identifier": "A3CTF",
                "name": "Ventilador",
                "brand": "Steren",
                "model": "VN4-012P",
                "specifications": [
                    {
                        "name": "Revoluciones por minuto",
                        "value": 2700.0,
                        "units": "RPM"
                    },
                    {
                        "name": "VCD",
                        "value": 12.0,
                        "units": "Volts"
                    }
                ],
                "location": "Cocina",
                "status": "Disponible",
                "owner": "TurtleFS",
                "actions": [
                    {
                        "name": "Ventilador encendido",
                        "value": true
                    }
                ]

            }, {
                // Actuador 4 ventana Sencilla
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
                        "meausurementUnit": "grados",
                    },
                    {
                        "name": "Tiempo de Respuesta",
                        "value": 0.12,
                        "meausurementUnit": "segundos",
                    },
                    {
                        "name": "Alimentación de Energía",
                        "maxValue": 5,
                        "minValue": 3.3,
                        "meausurementUnit": "V",
                    },
                ],
                "location": "------",
                "status": "Disponible",
                "owner": "TurtleFS",
                "actions": [{
                    "name": "Ventana abierta",
                    "degrees": 95,
                    "status": true

                }]

            }, 
            {
                // Actuador 5 ventana sencilla
                "type": "Actuador",
                "identifier": "A5CTF",
                "name": "Ventana Sencilla",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "grados",
                    },
                    {
                        "name": "Tiempo de Respuesta",
                        "value": 0.12,
                        "meausurementUnit": "segundos",
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
                    "degrees": 95,
                    "status": true

                }]

            }, {
                // Actuador 6 puerta
                "type": "Actuador",
                "identifier": "A6CTF",
                "name": "Puerta",
                "brand": "ServoTech",
                "model": "SG90",
                "specificactions": [
                    {
                        "name": "Ángulo Máximo",
                        "maxValue": 180,
                        "minValue": 0,
                        "meausurementUnit": "grados",
                    },
                    {
                        "name": "Tiempo de Respuesta",
                        "value": 0.12,
                        "meausurementUnit": "segundos",
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
                    "name": "Puerta abierta",
                    "degrees": 95,
                    "status": true

                }]

            }]
        /******RECAMARA-1******/
        await kitchen.insertMany(kitchenSensors)

        // ***********RECAMARA1************
        const room1Sensors = [{
            "type":"Sensor",
            "identifier":"S1R1MV",
            "name":"Temperatura y Humedad",
            "brand":"Steren",
            "model":"DHT11",
            "specifications":[
                {
                    "name": "VCD",
                    "value":5, 
                    "units":"Volts"
                },
                {
                    "range":"Rango de Temperatura",
                    "minValue":0,
                    "maxValue":50,
                    "measurementUnit":"°C"
                },
                {
                    "range":"Rango de Humedad",
                    "minValue":0,
                    "maxValue":100,
                     "measurementUnit":"RH"
                }
                
            ],
            "location":"Recámara 1",
            "status":"Disponible",
            "owner":"MVC",
            "readings": [
                        {
                            "name": "Deteccion de humedad",
                            "value": 14,
                            "measuramentUnit": "HR%"
                        },
                        {
                            "name": "Deteccion de temperatura",
                            "value": 24,
                            "measuramentUnit": "°C"
                        }
                    ]
        },{
            "type": "Sensor",
            "identifier":"S1R1MV",
            "name": "Fotorresistencia",
            "brand": "Ipower",
            "model": "LDR 5mm",
            "specifications": [
              {
                "name": "Rango de Luz",
                "maxValue": 50,
                "minValue": 30,
                "measurementUnit": "Lux"
              },
              {
                "name": "Alimentación de Energía",
                "maxValue": 5,
                "minValue": 3.3,
                "measurementUnit": "V"
              },
              {
                "name": "Intensidad",
                "maxValue": 1024,
                "minValue": 0
              }
            ],
            "location": "Recámara  1",
            "status": "Disponible",
            "owner": "MVC",
            "readings":[{
                "name": "Lectura de Intensidad de Luz",
                "intensity": 40,
                "measurementUnit": "Unidad"
            }]
          },]
        // ****************************
        console.log('Data seeded')
    } catch (error) {
        console.log(error)
    }
    finally {
        mongoose.disconnect()
    }

}
seedData();


// SmartHouse sala
// b1 JODomotics
// b2 Automa-Tic
// g BYTECRAFTERS
// r1 MVC ----
// r2 Evangelistas
// C TurtleFS
// JAE-Develops