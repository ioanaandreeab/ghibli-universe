const express = require("express");
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const indexRouter = require("./routes/index");
const path = require("path");
const public = path.join(__dirname, './dist');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api",indexRouter);


app.use("/", express.static(public));

app.listen(process.env.PORT || 5000, ()=> {
    console.log("Server started listening");
})