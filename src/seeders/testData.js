
temperatura = {
    "type": "Sensor",
    "idetifier":"S1C1TF",
    "name":"Temperatura y humedad",
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
    "location": "----",
    "status": "Activo",
    "owner": "----",
    "readings": [
                {
            "name" : "Humedad",
            "value" : 24,
            "measuramentUnit" : "HR%"
        },
        {
            "name" : "Temperatura",
            "value" : 20,
            "measuramentUnit" : "°C"
        }
    ]
}


gas = {
    "type": "Sensor",
    "identifier": "SG1C1PPM",
    "name": "Gas",
    "brand": "----",
    "model": "----",
    "specificactions": [
        {
            "name": "Rango de Detección",
            "minValue": 0,
            "maxValue": 1000,
            "meausurementUnit": "ppm"
        },
        {
            "name": "Tiempo de Respuesta",
            "value": 10,
            "meausurementUnit": "segundos"
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
    "owner": "S2CTF",
    "readings": [
        {
            "name": "Concentracion de Gas",
            "value": 50,
            "measuramentUnit": "ppm"
        }
    ]
}

