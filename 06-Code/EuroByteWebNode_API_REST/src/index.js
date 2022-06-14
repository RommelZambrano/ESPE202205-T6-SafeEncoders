//imports and libraries
const express = require("express");
const mongoose = require("mongoose");
require("dotenv")
.config();
const productoRoute = require("./routes/Productos"); 

// settings
const app = express();
const port = process.env.PORT || 2000;

// middlewares
app.use(express.json());
app.use("/api", productoRoute);

// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));
  app.listen(port, () => console.log("Server listening to", port));



