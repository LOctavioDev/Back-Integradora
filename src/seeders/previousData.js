sensores = [
    {
        // #Baño 1 - Sensor 1
        "type": "Sensor",
        "name": "Ultrasónico",
        "brand": "AEDIKO",
        "model": "HC-SR04",
        "specifications": [
            {
                "name": "Rango de distancia",
                "maxValue": 400,
                "minValue": 2,
                "measurementUnit": "cm",
                "accuracy": "+-0.3"

            },
            {
                "name": "Alimentación de Energía",
                "maxValue": 5,
                "minValue": 3.3,
                "measurementUnit": "V"
            }
        ],
        "location": "Baño 1",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "JODomotics"
    },
    {
        // #Baño 1 - Sensor 2
        "type": "Sensor",
        "name": "Fotoresistencia",
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
        "location": "Baño 1",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "JODomotics"
    },
    {
        // #Baño 1 - Sensor 3
        "type": "Sensor",
        "name": "PIR",
        "brand": "Rantec",
        "model": "HC-SR501",
        "specifications": [
            {
                "name": "Rango de distancia",
                "maxValue": 700,
                "minValue": 200,
                "measurementUnit": "cm"
            },
            {
                "name": "Alimentación de Energía",
                "maxValue": 12,
                "minValue": 5,
                "measurementUnit": "V"
            }
        ],
        "location": "Baño 1",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "JODomotics"
    },
    //  # Cocina - Sensor 1
    {
        "type": "Sensor",
        "name": "Temperatura y Humedad",
        "brand": "Tecneu",
        "model": "DHT-11",
        "specificactions": [
            {
                "name": "Rango Temperatura",
                "minValue": 0,
                "maxValue": 50,
                "meausurementUnit": "°C",
            },
            {
                "name": "Rango de Humedad",
                "minValue": 20,
                "maxValue": 90,
                "meausurementUnit": "% HR",
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
        "initialDate": { "$date": "2024-03-14T12:56:00Z" },
        "owner": "TurtleFS",
    },
    // # Cocina - Sensor 2
    {
        "type": "Sensor",
        "name": "Gas",
        "brand": "TresD Print Tech",
        "model": "MQ-2",
        "specificactions": [
            {
                "name": "Sensibilidad",
                "maxValue": 100,
                "minValue": 0,
                "meausurementUnit": "ppm",
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
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "TurtleFC",
    },

    {
        // #Sala - Sensor 1 
        "type": "Sensor",
        "name": "Temperatura y Humedad",
        "brand": "Steren",
        "model": "DHT11",
        "specifications": [
            {
                "name": "VCD",
                "value": 5,
                "units": "Volts"
            },
            {
                "range": "Rango de Temperatura",
                "minValue": 0,
                "maxValue": 50,
                "measurementUnit": "°C"
            },
            {
                "range": "Rango de Humedad",
                "minValue": 0,
                "maxValue": 100,
                "measurementUnit": "RH"
            }

        ],
        "location": "Sala",
        "status": "Disponible",
        "initialDate": "2024-03-14T12:00:00.000+0000",
        "owner": "SmartHouse"
    },
    {
        //  #Sala - Sensor 2
        "type": "Sensor",
        "name": "Fotoresistencia",
        "brand": "Steren",
        "model": "LDR-04",
        "specifications": [
            {
                "name": "VCD",
                "value": 5,
                "units": "Volts"
            },
            {
                "range": "Intensidad",
                "minValue": 1,
                "maxValue": 1024,
                "measumementUnit": "Ohms"
            }

        ], "location": "Sala",
        "status": "Disponible",
        "initialDate": "2024-03-14T12:00:00.000+0000",
        "owner": "SmartHouse"
    },
    {
        // #Baño 2 - Sensor 1
        "type": "Sensor",
        "name": "Ultrasónico",
        "brand": "Steren",
        "model": "ARD-350",
        "specifications": [
            {
                "name": "Rango de distancia",
                "maxValue": 500,
                "minValue": 2,
                "measurementUnit": "cm",

            },
            {
                "name": "Alimentación de Energía",
                "maxValue": 5,
                "minValue": 3,
                "measurementUnit": "V"
            }
        ],
        "location": "Baño 2",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-14T10:50:00Z" },
        "owner": "Automa-Tic"
    },
    {
        // #Baño 2 - Sensor 2
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
        "location": "Baño 2",
        "status": "Disponible",
        "initialDate": { "$date": "2024-04-18T09:00:00Z" },
        "owner": "Automa-Tic"
    },
    {
        // #Baño 3 - Sensor 3
        "type": "Sensor",
        "name": "PIR",
        "brand": "Tecneu",
        "model": "HC-SR01",
        "specifications": [
            {
                "name": "Rango de distancia",
                "maxValue": 700,
                "minValue": 250,
                "measurementUnit": "cm"
            },
            {
                "name": "Alimentación de Energía",
                "maxValue": 12,
                "minValue": 5,
                "measurementUnit": "V"
            }
        ],
        "location": "Baño 2",
        "status": "Disponible",
        "initialDate": { "$date": "2024-04-17T09:11:00Z" },
        "owner": "Automa-Tic"
    },
    //  # Garaje - Sensor 1
    {
        "type": "Sensor",
        "name": "Sensor infrarrojo de movimiento Puerta",
        "brand": "Genericow",
        "model": "HC-SR501",
        "specifications": [
            {
                "name": "Rango de distancia",
                "maxValue": 7,
                "minValue": 3,
                "measurementUnit": "mts",
                "accuracy": "+-0.3"

            },
            {
                "name": "Alimentación de Energía",
                "maxValue": 12,
                "minValue": 5,
                "measurementUnit": "V"
            }
        ],
        "location": "Garaje 2",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "BYTECRAFTERS"
    },
    // # Garaje - Sensor 2
    {
        "type": "Sensor",
        "name": "Ultrasonico",
        "brand": "Steren",
        "model": "HC-SR04",
        "spesifications": [
            {
                "name": "Rango Distancia",
                "maxValue": 450,
                "minValue": 0,
                "meausurementUnit": "CM",
                "acurrancy": "+-2"
            },
        ],
        "location": "Garaje",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "BYTECRAFTERS",
    },
    // # Garaje - Sensor 3
    {
        "type": "Sensor",
        "name": "Fotoresistencia",
        "brand": "Steren",
        "model": "LDR-04",
        "specifications": [
            {
                "range": "1-100",
                "units": "Ohms"
            }
        ],
        "location": "Garaje",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-14T12:00:00.000Z" },
        "owner": "BYTECRAFTERS",
    },

    {
        // #Recámara 3 - Sensor 1
        "type": "Sensores",
        "name": "Temperatura y Humedad",
        "brand": "Genérico",
        "model": "DHT-11",
        "specificactions": [
            {
                "name": "Rango Temperatura",
                "maxValue": 0,
                "minValue": 50,
                "meausurementUnit": "°C"
            },
            {
                "name": "Rango de Humedad",
                "maxValue": 20,
                "minValue": 80,
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
        "initialDate": { "$date": "2024-03-14T08:00:00Z" },
        "owner": "JAE-Develops"

    },
    {
        // #Recámara 3 - Sensor 2
        "type": "Sensores",
        "name": "Fotoresistencia",
        "brand": "JELELECTRONICA",
        "model": "GL5516",
        "specificactions": [
            {
                "name": "Temperatura de Funcionamiento",
                "Min range": -30,
                "Max range": -70,
                "meausurementUnit": "°C"

            },
            {
                "name": "Alimentación de Energía ",
                "value": 5,
            },
            {
                "name": "Potencia Máxima",
                "value": 90,
                "meausurementUnit": "mW"
            },


        ],
        "location": "Recámara 3",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-14T08:02:00Z" },
        "owner": "JAE-Develops"


    },
    {
        //   #Recámara 2 #Sensor1
        "name": "Temperatura y Humedad",
        "type": "Sensor",
        "brand": "Genérico",
        "model": "DHT-11",
        "specificactions": [
            {
                "name": "Rango Temperatura",
                "maxValue": 0,
                "minValue": 50,
                "meausurementUnit": "°C",
                "acurrancy": "+-2"
            },
            {
                "name": "Rango de Humedad",
                "maxValue": 20,
                "minValue": 80,
                "meausurementUnit": "% HR",
                "acurrancy": "+-5"
            },
            {
                "name": "Alimentación de Energía",
                "maxValue": 5,
                "minValue": 3.3,
                "meausurementUnit": "V"
            },

        ],
        "location": "Recámara 2",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-14T08:00:00Z" },
        "owner": "Evangelistas",
    },
    {
        // #Recámara 2 #Sensor2
        "name": "Detector de movimiento PIR",
        "type": "Sensor",
        "brand": "Steren",
        "model": "ARD-315",
        "specifications": [
            {
                "name": "Rango de detección de movimiento",
                "minimun": 0,
                "maximum": 10,
                "unit": "metros"
            },
            {
                "name": "Consumo eléctrico",
                "value": 0.0015,
                "unit": "W"
            }
        ],
        "location": "Recámara 2",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-14T13:59:00Z" },
        "owner": "Evangelistas",
    },
    {
        // #Recámara 1 - sensor Temperatura 1
        "type": "Sensor",
        "name": "Temperatura y Humedad",
        "brand": "Tecnue",
        "model": "DHT11",
        "specifications": [
            {
                "name": "Rango de Temperatura",
                "maxValue": 50,
                "minValue": 0,
                "measurementUnit": "°C",
                "accuracy": "+-2"
            },
            {
                "name": "Rango de Humedad",
                "maxValue": 100,
                "minValue": 0,
                "measurementUnit": "%",
                "accuracy": "+-5"
            },
            {
                "name": "Alimentación de Energía",
                "maxValue": 5,
                "minValue": 3.3,
                "measurementUnit": "V"
            },
            {
                "name": "Tiempo de Respuesta",
                "value": "2 segundos"
            }
        ],
        "location": "Recámara 1",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "MVC"
    },
    {
        // #Recámara 1 - sensor Fotoresistencia 2
        "type": "Sensor",
        "name": "Fotoresistencia",
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
        "location": "Recámara 1",
        "status": "Disponible",
        "initialDate": { "$date": "2024-03-07T08:00:00Z" },
        "owner": "MVC"
    }
]

actuadores =  [
    {
    //   #Baño 1 - Actuador 1
          "type": "Actuador",
          "name": "Servomotor Puerta",
          "brand": "AITRIP",
          "model": "Micro-servo",
          "specifications": [
              {
                  "name": "Rango de rotación",
                  "maxValue": 180,
                  "minValue": -180,
                  "measurementUnit": "°",
                  "accuracy": "+-1"
                  
              },
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 5,
                  "minValue": 3.3,
                  "measurementUnit": "V"
              }
          ],
          "location": "Baño 1",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "JODomotics"
      },
      {
    //   #Baño 1 - Actuador 2
          "type": "Actuador",
          "name": "Luz Exterior",
          "brand": "Genérico",
          "model": "LED 5mm",
          "specifications": [
              {
                  "name": "Alimentación de Energía",
                  "value": 2,
                  "measurementUnits": "V"
              },
              {
                  "name": "Longitud de Onda",
                  "maxValue": 630,
                  "minValue": 600,
                  "measurementUnits": "nm"
              },
              {
                  "name": "Temperatura de Operación",
                  "maxValue": 85,
                  "minValue": -40,
                  "measurementUnits": "°C"
              }
          ],
          "location": "Baño 1",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "JODomotics"
      },{
    //   #Baño 1 - Actuador 3
          "type": "Actuador",
          "name": "Luz Interior",
          "brand": "Genérico",
          "model": "POPL-12",
          "specifications": [
              {
                  "name": "Soporte de tensión",
                  "value": 250,
                  "measurementUnits": "V"
              },
              {
                  "name": "Corriente directa",
                  "value": 4,
                  "measurementUnits": "A"
              },
              {
                  "name": "Diámetro del Socket",
                  "value": 2 ,
                  "measurementUnits": "in"
              }
          ],
          "location": "Baño 1",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "JODomotics"
      },
      {
    //   #Baño 1 - Actuador 4
          "type": "Actuador",
          "name": "Bomba de agua",
          "brand": "MV Electrónica",
          "model": "MOT-300",
          "specifications": [
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 6,
                  "minValue": 3,
                  "measurementUnits": "V"
              },
              {
                  "name": "Flujo Máximo",
                  "maxValue": 120,
                  "minValue": 80,
                  "measurementUnits": "l/h"
              },
              {
                  "name": "Altura Máxima de Elevación",
                  "maxValue": 100,
                  "minValue": 80,
                  "measurementUnits": "cm"
              }
          ],
          "location": "Baño 1",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "JODomotics"
      },
    //   # Cocina - Actuador 1
      {
          "type": "Actuador",
          "name": "Servomotor Puerta",
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
          "initialDate": {"$date": "2024-03-14T12:56:00Z"},
          "owner": "TurtleFS",
      },
    //   # Cocina - Actuador 2
      {
          "type": "Actuador",
          "name": "Servomotor Ventana Exterior Lavaplatos",
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
          "initialDate": {"$date": "2024-03-14T12:56:00Z"},
          "owner": "TurtleFS",
      },
    //   # cocina - Actuador 3
      {
          "type": "Actuador",
          "name": "Servomotor Ventana Exterior Comedor",
          "brand": "UNIT ELECTRONICS",
          "model": " SG90",
          "specificactions": [
              {
                  "name": "Ángulo de Rotación",
                  "maxValue": 180,
                  "minValue": 0,
                  "meausurementUnit": "grados",
                  "acurrancy": "+-2",
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
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "TurtleFC",
      },
    //   # cocina - Actuador 4
      {
          "type": "Actuador",
          "name": "Luz Interior",
          "brand": "VOLTECH",
          "model": "POPO-13",
          "specificactions": [
              {
                  "name": "Corriente Máxima",
                  "maxValue": 10,
                  "meausurementUnit": "Amperios",
              },
              {
                  "name": "Voltaje de Operación",
                  "minValue": 100,
                  "maxValue": 250,
                  "meausurementUnit": "V",
              },
          ],
          "location": "Cocina",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T12:56:00Z"},
          "owner": "TurtleFS",
      },
    //   # cocina - Actuador 5
      {
          "type": "Actuador",
          "name": "Buzzer",
          "brand": "Tecneu",
          "model": "TMB12A05",
          "specificactions": [
              {
                  "name": "Frecuencia de Sonido",
                  "minValue": 20,
                  "maxValue": 20000,
                  "meausurementUnit": "Hz",
              },
              {
                  "name": "Voltaje de Operación",
                  "minValue": 3,
                  "maxValue": 5,
                  "meausurementUnit": "V",
              },
              {
                  "name": "Corriente de Operación",
                  "maxValue": 50,
                  "meausurementUnit": "mA",
              },
          ],
          "location": "Cocina",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T09:00:00Z"},
          "owner": "TurtleFS",
      },
    //   # cocina - Actuador 6
      {
          "type": "Actuador",
          "name": "Ventilador",
          "brand": "Steren",
          "model": "MOT-050",
          "specificactions": [
              {
                  "name": "Velocidad de Rotación",
                  "maxValue": 13000,
                  "minValue": 0,
                  "meausurementUnit": "RPM",
              },
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 5,
                  "minValue": 3,
                  "meausurementUnit": "V",
              },
          ],
          "location": "Cocina",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "TurtleFC",
      },
    //   # cocina - Actuador 7
      {
          "type": "Actuador",
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
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "TurtleFC",
      },
        {
        //   #Sala - Actuador 1 
          "type":"Actuador",
          "name":"Ventilador",
          "brand":"Steren",
          "model":"VN4-012P",
          "specifications":[
              {
                  "name":"Revoluciones por minuto",
                  "value": 2700.0,
                  "units":"RPM"
              },
              {
                  "name": "VCD",
                  "value":12.0, 
                  "units":"Volts"
              }
          ],
          "location":"Sala",
          "status":"Disponible",
          "initialDate": "2024-03-14T12:00:00.000+0000",
          "owner":"SmartHouse"
      },
      {
    //    #Sala - Actuador 2
           "type":"Actuador",
          "name":"Servomotor Puerta",
          "brand":"Tower Pro",
          "model":"SG-90",
          "specifications":[
              {
                  "name": "Grados de Rotación ",
                  "value":"0 a 180", 
                  "measurementUnit":"Grados"
              },
              {
                  "name":"VCD",
                  "value": 6,
                  "measurementUnit":"Volts"
              }
              
          ],
          "location":"Sala",
          "status":"Disponible",
          "initialDate": "2024-03-14T12:00:00.000+0000",
          "owner":"SmartHouse"
      },
      {
    //    #Sala - Actuador 3
           "type":"Actuador",
          "name":"Servomotor Ventana Doble Izquierda",
          "brand":"Tower Pro",
          "model":"SG-90",
          "specifications":[
              {
                  "name": "Grados de Rotación ",
                  "value":"0 a 180", 
                  "measurementUnit":"Grados"
              },
              {
                  "name":"VCD",
                  "value": 6,
                  "measurementUnit":"Volts"
              }
              
          ],
          "location":"Sala",
          "status":"Disponible",
          "initialDate": "2024-03-14T12:00:00.000+0000",
          "owner":"SmartHouse"
      },
      {
    //    #Sala - Actuador 4
          "type":"Actuador",
          "name":"Servomotor Ventana Doble Derecha",
          "brand":"Tower Pro",
          "model":"SG-90",
          "specifications":[
              {
                  "name": "Grados de Rotación ",
                  "value":"0 a 180", 
                  "measurementUnit":"Grados"
              },
              {
                  "name":"VCD",
                  "value": 6,
                  "measurementUnit":"Volts"
              }
              
          ],
          "location":"Sala",
          "status":"Disponible",
          "initialDate": "2024-03-14T12:00:00.000+0000",
          "owner":"SmartHouse"
      },
      {
    //    #Sala - Actuador 5
          "type":"Actuador",
          "name":"Luz Exterior",
          "brand":"ECOSMART",
          "model":"MR16",
          "specifications":[
              {
                  "name": "Lumenes",
                  "value":"3000 a 250", 
                  "measurementUnits":"Lux"
              },
              {
                  "name":"VCD",
                  "value": 33,
                  "units":"Volts"
              }
              
          ],
          "location":"Sala",
          "status":"Disponible",
          "initialDate": "2024-03-14T12:00:00.000+0000",
          "owner":"SmartHouse"
      },
      {
    //    #Sala - Actuador 6
          "name":"Luz Interior",
          "type":"Actuador",
          "brand":"ECOSMART",
          "model":"MR16",
          "specifications":[
              {
                  "name": "Lumenes",
                  "value":"3000 a 250", 
                  "measurementUnit":"Lux"
              },
              {
                  "name":"VCD",
                  "value": 33,
                  "units":"Volts"
              }
              
          ],
          "location":"Sala",
          "status":"Disponible",
          "initialDate": "2024-03-14T12:00:00.000+0000",
          "owner":"SmartHouse"
      },
      
      {
    //   # Baño 2 - Actuador 1
      "type" : "Actuador",
     "name": "Mini Bomba de Agua",
      "brand" : "DIP",
      "model" : "MLM602838223",
      "specifications" : [
          {
              "name" : "Voltaje",
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
      "location" : "Baño 2",
      "status" : "Disponible",
      "initialDate" : {"$date":"2024-03-01T08:00:00Z"},
      "owner" : "Automa-Tic"
      
  },
  
   {
        //   #Baño 2 - Actuador 2
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
                  "name": "Corriente directa",
                  "value": 4,
                  "measurementUnits": "A"
              },
              {
                  "name": "Diámetro del Socket",
                  "value": 2 ,
                  "measurementUnits": "in"
              }
          ],
          "location": "Baño 2",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-01T08:00:00Z"},
          "owner": "Automa-Tic"
      },
  
  
  
      {
  
    //    # Baño 2 - Actuador 3
          "type": "Actuador",
          "name": "Servomotor puerta",
          "brand": "Microservo9g",
          "model": "SG90",
          "specificactions": [
              {
                  "name": "Ángulo de Rotación",
                  "maxValue": 180,
                  "minValue": 0,
                  "measurementUnit": "grados",
                  "accuracy": "+-2"
              },
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 5,
                  "minValue": 3.3,
                  "measurementUnit": "V"
              }
          ],
          "location": "Baño 2",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "Automa-Tic"
      },
      {
    //    # Baño 2 - Actuador 4
          "type": "Actuador",
          "name": "Servomotor ventana",
          "brand": "Microservo9g",
          "model": "SG90",
          "specificactions": [
              {
                  "name": "Ángulo de Rotación",
                  "maxValue": 180,
                  "minValue": 0,
                  "measurementUnit": "grados",
                  "accuracy": "+-2"
              },
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 5,
                  "minValue": 3.3,
                  "measurementUnit": "V"
              }
          ],
          "location": "Baño 2",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T08:00:00Z"},
          "owner": "Automa-Tic"
      },
        // #Garaje #Servo 1
      {
          "type": "Actuador",
          "name": "Micro-servo",
          "brand": "AITRIP",
          "model": "SG90",
          "specifications": [
              {
                  "name": "Rango de rotación",
                  "maxValue": 180,
                  "minValue": -180,
                  "measurementUnit": "°",
                  "accuracy": "+-1"
  
              },
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 5,
                  "minValue": 3.3,
                  "measurementUnit": "V"
              }
          ],
          "location": "Garaje",
          "status": "Disponible",
          "initialDate": { "$date": "2024-03-07T08:00:00Z" },
          "owner": "BYTECRAFTERS"
      },
    //   #Garaje #Servo 2
          {
          "type": "Actuador",
          "name": "Micro-servo",
          "brand": "AITRIP",
          "model": "SG90",
          "specifications": [
              {
                  "name": "Rango de rotación",
                  "maxValue": 180,
                  "minValue": -180,
                  "measurementUnit": "°",
                  "accuracy": "+-1"
  
              },
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 5,
                  "minValue": 3.3,
                  "measurementUnit": "V"
              }
          ],
          "location": "Garaje",
          "status": "Disponible",
          "initialDate": { "$date": "2024-03-07T08:00:00Z" },
          "owner": "BYTECRAFTERS"
      },
    //   #Garaje #Servo 3
          {
          "type": "Actuador",
          "name": "Micro-servo",
          "brand": "AITRIP",
          "model": "SG90",
          "specifications": [
              {
                  "name": "Rango de rotación",
                  "maxValue": 180,
                  "minValue": -180,
                  "measurementUnit": "°",
                  "accuracy": "+-1"
  
              },
              {
                  "name": "Alimentación de Energía",
                  "maxValue": 5,
                  "minValue": 3.3,
                  "measurementUnit": "V"
              }
          ],
          "location": "Garaje",
          "status": "Disponible",
          "initialDate": { "$date": "2024-03-07T08:00:00Z" },
          "owner": "BYTECRAFTERS"
      },
    //   #Garaje #Actuador 4
      {
          "type": "Actuador",
          "name": "Zumbador/Buzzer Puerta garage",
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
                  "name": "Alimentación de Energía",
                  "maxValue": 8,
                  "minValue": 4,
                  "measurementUnit": "V"
              }
          ],
          "location": "Garaje",
          "status": "Disponible",
          "initialDate": { "$date": "2024-03-07T08:00:00Z" },
          "owner": "BYTECRAFTERS",
      },
    //   #Garaje #Actuador5LED
      {
          "type": "Actuador",
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
          "initialDate": { "$date": "2024-03-07T08:00:00Z" },
          "owner": "BYTECRAFTERS",
      },
    //   #Garaje #Actuador6LED
      {
          "type": "Actuador",
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
          "initialDate": { "$date": "2024-03-07T08:10:00Z" },
          "owner": "BYTECRAFTERS",
      },{
    //   #Recámara 3 - Actuador 1
          "type": "Actuadores", 
          "name": "Foco Interno",
          "brand": "TecnoLite", 
          "model": "13PAR38LEDRMV60", 
          "specificactions": [
              {
                  "name": "Consumo de potencia", 
                  "value": 13.5,
                  "units": "W"
              },
              {   
                  "name": "Consumo de corriente",
                  "value": "0.14 - 0.06", 
                  "units": "A" 
              }, 
              {
                  "name": "Flujo luminoso", 
                  "value": 1100, 
                  "units": "Lm"
              }
              
          ],
          "location": "Recámara 3",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T13:012:00Z"}, 
          "owner": "JAE-Develops"
  
  },
  
  {
    //   #Recámara 3 - Actuador 2
          "type": "Actuadores", 
          "name": "Foco Externo",
          "brand": "Dipmecatronica", 
          "model": "Ledmixdif", 
          "specificactions": [
              {
                  "name": "Corriente funcionamiento", 
                  "value": 20,
                  "units": "mA"
              },
              {   
                  "name": "Tipo de encapsulamiento",
                  "value": 5, 
                  "units": "MM" 
              }, 
              {
                  "name": "Voltaje inverso máximo", 
                  "value": 3, 
                  "units": "V"
              }
              
          ],
          "location": "Recámara 3",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T13:018:00Z"}, 
          "owner": "JAE-Develops"
  
  },
  
  {
    //   #Recámara 3 - Actuador 3
      "type": "Actuadores", 
          "name": "Servomotor Puerta",
          "brand": "Tecneu", 
          "model": "SG90", 
          "specificactions": [
              {
                  "name": "Voltaje de funcionamiento", 
                  "value": "3.0-7.2",
                  "units": "V"
              },
          {
                  "name": "Ángulo de rotación", 
                  "value": 180,
                  "units": "°"
              },
          {
                  "name": "Velocidad", 
                  "value":  "0.10",
                  "units": "seg"
              }
          ],
          "location": "Recámara 3",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T08:00:00Z"}, 
          "owner": "JAE-Develops"
  },
  
  {
    //   #Recámara 3 - Actuador 4
      "type": "Actuadores", 
          "name": "Servomotor VentanaDoble - Derecha",
          "brand": "Tecneu", 
          "model": "SG90", 
          "specificactions": [
              {
                  "name": "Voltaje de funcionamiento", 
                  "value": "3.0-7.2",
                  "units": "V"
              },
          {
                  "name": "Ángulo de rotación", 
                  "value": 180,
                  "units": "°"
              },
          {
                  "name": "Velocidad", 
                  "value":  "0.10",
                  "units": "seg"
              }
          ],
          "location": "Recámara 3",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T08:00:00Z"}, 
          "owner": "JAE-Develops"
  },
  
  {
    //   #Recámara 3 - Actuador 5
      "type": "Actuadores", 
          "name": "Servomotor VentanaDoble - Izquierda",
          "brand": "Tecneu", 
          "model": "SG90", 
          "specificactions": [
              {
                  "name": "Voltaje de funcionamiento", 
                  "value": "3.0-7.2",
                  "units": "V"
              },
          {
                  "name": "Ángulo de rotación", 
                  "value": 180,
                  "units": "°"
              },
          {
                  "name": "Velocidad", 
                  "value":  "0.10",
                  "units": "seg"
              }
          ],
          "location": "Recámara 3",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T08:00:00Z"}, 
          "owner": "JAE-Develops"
  },
  {
    //   #Recámara 3 - Actuador 6
          "type": "Actuadores", 
          "name": "Ventilador",
          "brand": "Steren", 
          "model": "VN4-012P", 
          "specificactions": [
              {
                  "name": "Velocidad de Rotación ", 
                  "value": 2700,
                  "units": "RPM"
              },
              {   
                  "name": "Diametro de Ventilador",
                  "value": 80, 
                  "units": "mm" 
              }, 
              {
                  "name": "Nivel de ruido", 
                  "value": 21.4, 
                  "units": "dB"
              }
              
          ],
          "location": "Recámara 3",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-07T13:018:00Z"}, 
          "owner": "JAE-Develops"
  
  }, 
      {
        // #Recámara 2 #Actuador1
          "name": "Servomotor Ventana Doble Izquierda",
          "type": "Actuador",
          "brand": "UNIT Electronics",
          "model": "SG90 RC",
          "specificactions": [
              {
                  "name": "Ángulo de Rotación",
                  "maxValue": 180,
                  "minValue": 0,
                  "meausurementUnit": "°",
                  "acurrancy": "+-2"
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
          "initialDate": {"$date": "2024-03-14T13:45:00Z"},
          "owner": "Evangelistas"
      },
      {
        // #Recámara 2 #Actuador2
          "name": "Servomotor Ventana Doble Derecha",
          "type": "Actuador",
          "brand": "UNIT Electronics",
          "model": "SG90 RC",
          "specificactions": [
              {
                  "name": "Ángulo de Rotación",
                  "maxValue": 180,
                  "minValue": 0,
                  "meausurementUnit": "°",
                  "acurrancy": "+-2"
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
          "initialDate": {"$date": "2024-03-14T13:45:00Z"},
          "owner": "Evangelistas"
      },
      {
        // #Recámara 2 #Actuador3
          "name": "Servomotor Puerta",
          "type": "Actuador",
          "brand": "UNIT Electronics",
          "model": "SG90 RC",
          "specificactions": [
              {
                  "name": "Ángulo de Rotación",
                  "maxValue": 180,
                  "minValue": 0,
                  "meausurementUnit": "°",
                  "acurrancy": "+-2"
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
          "initialDate": {"$date": "2024-03-14T13:45:00Z"},
          "owner": "Evangelistas"
      },
      {
        // #Recámara 2 #Actuador4
          "name": "Ventilador",
          "type": "Actuador",
          "brand": "Tangxi CPU Cooler",
          "model": "CV3589",  
          "specifications": [
            {
              "name": "Diámetro del ventilador",
              "value": 80,
              "units": "mm"
            },
            {
              "name": "Velocidad de rotación",
              "value": 4000,
              "units": "RPM"
            },
            {
              "name": "Flujo de aire",
              "value": 38.55,
              "units": "CFM"
            }
          ],
          "location": "Recámara 2",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T13:55:00Z"},
          "owner": "Evangelistas"
        },
        {
        //   #Recámara 2 #Actuador5
          "name": "Led Interior",
          "type": "Actuador",
          "brand": "VOLTECH",
          "model": "POPO-13",  
          "specifications": [
            {
              "name": "Corriente Máxima",
              "maxValue": 10,
              "measurementUnit": "Amperios"
            },
            {
              "name": "Voltaje",
              "minValue": 100,
              "maxValue": 250,
              "measurementUnit": "V"
            }
          ],
          "location": "Recámara 2",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T14:00:00Z"},
          "owner": "Evangelistas"
        },
        {
        //   #Recámara 2 #Actuador6
          "name": "Led Exterior",
          "type": "Actuador",
          "brand": "VOLTECH",
          "model": "POPO-13",  
          "specifications": [
            {
              "name": "Corriente Máxima",
              "maxValue": 10,
              "measurementUnit": "Amperios"
            },
            {
              "name": "Voltaje",
              "minValue": 100,
              "maxValue": 250,
              "measurementUnit": "V"
            }
          ],
          "location": "Recámara 2",
          "status": "Disponible",
          "initialDate": {"$date": "2024-03-14T14:00:00Z"},
          "owner": "Evangelistas"
        },
          {
//   #Recamara 1 - Actuador 1
      "type": "Actuador",
      "name": "Servomotor Ventana Doble Izquierda",
      "brand": "Tecnue",
      "model": "SG90",
      "specificactions": [
        {
          "name": "Rango de Rotación",
          "value": "0-180 grados"
        },
        {
          "name": "Voltaje de Operación",
          "value": "4.8 - 6.0V"
        },
        {
          "name": "Rango de Intensidad",
          "maxValue": 100,
          "minValue": 0,
          "measurementUnit": "%"
        },
        {
          "name": "Color",
          "value": "Blanco Cálido (2700K)"
        },
        {
          "name": "Torque",
          "value": "1.8 kgf/cm"
        },
        {
          "name": "Tiempo de Respuesta",
          "value": "0.12s/60 grados"
        },
        {
          "name": "Peso",
          "value": "9 g"
        },
        {
          "name": "Dimensiones",
          "value": "22.2 x 11.8 x 31 mm"
        }
      ],
      "location": "Recámara 1",
      "status": "Disponible",
      "initialDate": {"$date": "2024-03-14T00:00:00Z"}, 
      "owner": "CORLES"
    },
    {
    //   #Recamara 1 - Actuador 2
      "type": "Actuador",
      "name": "Servomotor Ventana Doble Derecha",
      "brand": "Tecnue",
      "model": "SG90",
      "specificactions": [
        {
          "name": "Rango de Rotación",
          "value": "0-180 grados"
        },
        {
          "name": "Voltaje de Operación",
          "value": "4.8 - 6.0V"
        },
        {
          "name": "Rango de Intensidad",
          "maxValue": 100,
          "minValue": 0,
          "measurementUnit": "%"
        },
        {
          "name": "Color",
          "value": "Blanco Cálido (2700K)"
        },
        {
          "name": "Torque",
          "value": "1.8 kgf/cm"
        },
        {
          "name": "Tiempo de Respuesta",
          "value": "0.12s/60 grados"
        },
        {
          "name": "Peso",
          "value": "9 g"
        },
        {
          "name": "Dimensiones",
          "value": "22.2 x 11.8 x 31 mm"
        }
      ],
      "location": "Recámara 1",
      "status": "Disponible",
      "initialDate": {"$date": "2024-03-14T00:00:00Z"}, 
      "owner": "CORLES"
    },
    {
    //   #Recamara 1 - Actuador 3
      "type": "Actuador",
      "name": "Puerta",
      "brand": "Tecnue",
      "model": "SG90",
      "specifications": [
        {
          "name": "Rango de rotación",
          "maxValue": 180,
          "minValue": -180,
          "measurementUnit": "°",
          "accuracy": "+-1"
        },
        {
          "name": "Alimentación de Energía",
          "maxValue": 5,
          "minValue": 3.3,
          "measurementUnit": "V"
        },
        {
          "name": "Corriente de Funcionamiento",
          "maxValue": 200,
          "minValue": 50,
          "measurementUnit": "mA"
        },
        {
          "name": "Dimensiones",
          "value": "23 x 12.2 x 29 mm"
        }
      ],
      "location": "Recámara 1",
      "status": "Disponible",
      "initialDate": {"$date": "2024-03-07T08:00:00Z"},
      "owner": "MVC"
    },
    {
    //   #Recamara 1 - Actuador 4
      "type": "Actuador",
      "name": "Ventilador Plástico",
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
      "location": "Recámara 1",
      "status": "Disponible",
      "initialDate": "2024-03-14T12:00:00.000+0000",
      "owner": "MVC"
    },
    {
    //    # Recamara 1 - Actuador 5
      "type": "Sensor",
      "name": "LEDS",
      "brand": "Lets",
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
      "location": "Recámara 1",
      "status": "Disponible",
      "initialDate": {"$date": "2024-03-07T08:00:00Z"},
      "owner": "MVC"
    },
    {
    //   # Recamara 1 - Actuador 6
     "type": "Sensor",
     "name": "LEDS",
     "brand": "Lets",
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
     "location": "Recámara 1",
     "status": "Disponible",
     "initialDate": {"$date": "2024-03-07T08:00:00Z"},
     "owner": "MVC"
   }
  ]

  