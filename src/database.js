import chalk from "chalk";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:22062/integradora")
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
