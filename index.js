const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./config/dbConnect");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
const app = express();
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const authRouter = require("./routes/authRoute");
const productRouter = require("./routes/productRoute");
const cookieParser = require("cookie-parser");
dbConnect();
let cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());
app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use(notFound);
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server is running  at POT ${PORT}`);
  });
