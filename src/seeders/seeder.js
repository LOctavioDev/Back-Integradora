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
import { kitchen } from "../models/sensor.model.js";

async function seedData() {
    try {
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
        await kitchen.insertMany(kitchenSensors)

        // ***********RECAMARA1************

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