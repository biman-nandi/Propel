import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./db/db.js";
dotenv.config({
  path: "./.env",
  quiet: true,
});

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
