const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5500;

app.use(cors());

const response = "Initial content loaded.";
const additionalResponse = "<p>English, 204 pages, released Oct 10, 2023</p>";

let loadedContent = false;

app.get("/", (req, res) => {
  res.status(200).send(response);
});

app.get("/more", (req, res) => {
  if (!additionalResponse) {
    res.status(404).send("No more content available");
  } else {
    res.status(200).contentType("text/html").send(additionalResponse);
    loadedContent = true;
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
