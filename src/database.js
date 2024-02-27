import chalk from "chalk";
import mongoose from "mongoose";

mongoose
  .connect("URL")
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
