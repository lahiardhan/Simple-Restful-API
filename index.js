import express from "express";
import mongoose from "mongoose";
import route from "./routes/api-routes.js";
import cors from "cors";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/restful_db", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', (error) => {console.error(error)});
db.once("open", () => console.log("Database Connected"));


app.use(cors());
app.use(express.json());                                 // agar bisa menerima post dari data dgn format JSON
app.use('/product', route);

app.listen(port, () => console.log(`server Running at port: ${port}`))