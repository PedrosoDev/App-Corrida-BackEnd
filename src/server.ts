import "reflect-metadata";
import AppDataSouce from "./AppDataSource";
import express from "express";
import cors from "cors";
import routes from "./routes/routes";

const { PORT = 3000 } = process.env;

void (async function () {
  await AppDataSouce.initialize();
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.listen(PORT, () => console.log(`⚡ server is running on ${PORT}`));
})();
