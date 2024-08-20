import express, { Response, Request } from "express";
import dotenv from "dotenv";
import dbConnect from "./Connection/db";
import router from "./Routes/todo";


dotenv.config();
dbConnect();

// PORT number
const PORT = process.env.PORT;
const app = express();
app.use(router)

app.get("/", (req: Request, res: Response) => {
  console.log("home route!");
  res.send("Hello World!");
});

//  connection



// dbConnect

app.listen(PORT, () => {
  console.log(`[Server :] listening on  ${PORT}`);
});
