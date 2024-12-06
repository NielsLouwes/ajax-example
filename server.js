const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5500;

// Middleware to parse JSON body
app.use(cors());

// Response for the initial content
const response = "Initial content loaded.";

// New response for the additional content
const additionalResponse = "English, 204 pages, released Oct 10, 2023";

let loadedContent = false;

// Endpoint to serve initial content
app.get("/", (req, res) => {
  res.status(200).send(response);
});

// New endpoint to handle the Ajax request
app.get("/more", (req, res) => {
  if (!additionalResponse) {
    res.status(404).send("No more content available");
  } else if (loadedContent === false) {
    res.status(200).send(additionalResponse);
    loadedContent = true;
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
