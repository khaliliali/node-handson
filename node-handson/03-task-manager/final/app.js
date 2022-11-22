require('dotenv').config();
const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/tasks", tasks);

// Ports
const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is running on port: ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
