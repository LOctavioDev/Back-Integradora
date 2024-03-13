import chalk from "chalk";
import mongoose from "mongoose";

mongoose
  .connect("mongodb+srv://octadev:112020a@clusteroctavio.n8a1lsl.mongodb.net/integradora?retryWrites=true&w=majority")
  .then(() => {
    console.log(
      chalk.green(
        "======================\nCONNTECTED TO DATABASE\n======================"
      )
    );
  })
  .catch((err) => {
    console.error(chalk.red("THERE IS A ERROR"), err);
  });

  

export default mongoose;
