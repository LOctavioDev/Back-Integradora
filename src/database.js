import chalk from "chalk";
import mongoose from "mongoose";

// CONEXION A LA BASE DE DATOS
mongoose
  .connect("mongodb+srv://octadev:112020a@clusteroctavio.n8a1lsl.mongodb.net/integradora?retryWrites=true&w=majority")
  .then(() => {
    console.log(
      chalk.green(
        "======================\nCONNECTED TO DATABASE\n======================"
      )
    );
  })
  .catch((err) => {
    console.error(chalk.red("THERE IS AN ERROR"), err);
  });

export default mongoose;
