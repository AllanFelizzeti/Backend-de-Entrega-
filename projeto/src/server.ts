import express, { request, response } from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({
    message: "Hello word",
  });
});

app.listen(3000, () => console.log("Server is running")); 