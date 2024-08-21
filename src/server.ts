import express, { Response, Request } from "express";
import dotenv from "dotenv";
import dbConnect from "./Connection/db";
import routerTodo from "./Routes/todo";
import routerAuth from "./Routes/auth";

dotenv.config();
dbConnect();

// PORT number
const PORT = process.env.PORT;
const app = express();

// parse 
app.use(express.json());

app.use(routerTodo);
app.use(routerAuth);

app.get("/", (req: Request, res: Response) => {
  console.log("home route!");
  res.send("Hello World!");
});


app.listen(PORT, () => {
  console.log(`[Server :] listening on  ${PORT}`);
});
