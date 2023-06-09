const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const connectDB = require("./connectDB");

const dotenv = require("dotenv");
dotenv.config();

// Connecting to DB
connectDB();

// Init MiddleWare
app.use(
  express.json({
    extended: false,
  })
);

// Routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/org", require("./routes/api/org"));

// PORT
const port = process.env.PORT || 5000;

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started at port ${port}`));
