import express from "express";
import bodyParser from "body-parser";
import constrollers from "./controller.js";
import RedisConfig from "./config.js";

const app = express();
const jsonParser = bodyParser.json();

app.post("/api/send", jsonParser, constrollers.sendMessageToRedis);


const redisConfig = new RedisConfig();
redisConfig.consume("first", (message) => {
  console.log("📨 Received message:", message);
  
});

app.listen(8080, () => {
  console.log(`Server is running on port 8080.`);
});