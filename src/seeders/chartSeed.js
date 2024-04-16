import mongoose from "mongoose";
import chalk from "chalk";
import { kitchen } from "../models/sensor.model.js";

mongoose
    .connect("mongodb+srv://octadev:112020a@clusteroctavio.n8a1lsl.mongodb.net/integradora?retryWrites=true&w=majority")
    .then(() => {
        console.log(chalk.green("======================\n TRYING SEEDER\n======================"));
        seedData(); // Llamar a la función de inserción después de conectarse correctamente a la base de datos
    })
    .catch((err) => {
        console.error(chalk.red("THERE IS A ERROR"), err);
    });

async function seedData() {
    try {
        const owner = "TurtleFS"; // Propietario de la cocina

        // Obtener la fecha actual
        const currentDate = new Date();

        // Calcular la fecha de inicio (hace 7 días)
        const startDate = new Date(currentDate);
        startDate.setDate(currentDate.getDate() - 7);

        // Iterar 10 veces para insertar datos
        for (let i = 0; i < 10; i++) {
            const endDate = new Date(startDate); // Crear una copia de la fecha de inicio
            endDate.setDate(startDate.getDate() + 1); // Añadir 1 día a la fecha de inicio para obtener la fecha de fin

            // Crear objeto de datos para insertar
            const sensorData = {
                type: "Sensor",
                name: "Gas",
                brand: "TresD Print Tech",
                model: "MQ-2",
                specifications: [
                    {
                        name: "Sensibilidad",
                        maxValue: 1000,
                        minValue: 0,
                        measurementUnit: "PPM",
                    },
                    {
                        name: "Alimentación de Energía",
                        maxValue: 5,
                        minValue: 3.3,
                        measurementUnit: "V",
                    },
                ],
                location: "Cocina",
                status: "Disponible",
                owner: owner,
                startsAt: startDate.toISOString(), // Convertir fecha de inicio a formato ISO
                endsAt: endDate.toISOString(), // Convertir fecha de fin a formato ISO
                readings: [
                    {
                        name: "Concentracion de Gas",
                        value: 50,
                        measurementUnit: "PPM",
                    },
                ],
            };

            // Insertar datos en la base de datos utilizando el modelo de mongoose
            await kitchen.insertMany(sensorData);

            console.log(`Inserted record ${i + 1} with start date: ${startDate.toISOString()} and end date: ${endDate.toISOString()}`);

            // Añadir 1 día a la fecha de inicio para el siguiente ciclo
            startDate.setDate(startDate.getDate() + 1);
        }

        console.log("Data seeded");
    } catch (error) {
        console.log(error);
    } finally {
        mongoose.disconnect();
    }
}
