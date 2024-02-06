const express = require("express");
const htmlRoute = require("./routes/htmlRoute");
const apiRoute = require("./routes/apiRoute");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define routes
app.use("/api", apiRoute);
app.use("/", htmlRoute);


// Start the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));