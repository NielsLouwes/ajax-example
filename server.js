const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5500;

// Middleware to parse JSON body
app.use(cors());

// Response for the initial content
const response = "Initial content loaded.";

// New response for the additional content
const additionalResponse =
  "This is the additional content loaded via Ajax. Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum laborum debitis, recusandae ex voluptates blanditiis ipsam aliquam? Voluptas ex doloremque nisi cupiditate modi, illo quis asperiores laudantium esse molestias. Amet repellendus aspernatur libero nisi dolores unde, pariatur ex doloribus eveniet laboriosam saepe cumque distinctio quam, alias recusandae omnis atque aperiam commodi non possimus deleniti error excepturi accusantium? Explicabo delectus expedita illo deserunt dolores laudantium quibusdam corrupti mollitia, beatae porro sequi sint iste facere adipisci libero cupiditate doloribus obcaecati error praesentium assumenda repellendus, tenetur rerum! Provident deserunt expedita earum, dolore voluptatem iste sit asperiores autem beatae amet, mollitia et perferendis ea.";

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
