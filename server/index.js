// Common exports
const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./keys/index");
const cors = require("cors");

//routes
const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
// Initial configurations

app.use(express.json());
app.use(cors(corsOptions));

// Using routes
app.use(authRoutes);
app.use(postRoutes);

// Initial codes
const start = () => {
  const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is started on port ${PORT}`);
  });

  mongoose.connect(mongoURI, () => {
    console.log("Connected suuccesfully to MongoDB");
  });
};

start();
