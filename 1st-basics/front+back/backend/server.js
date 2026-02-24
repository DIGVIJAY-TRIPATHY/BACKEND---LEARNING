const express = require("express");

const app = express();

const jokes = [
  {
    id: 1,
    title: "A joke 1",
    content:
      "Why did the scarecrow win an award? Because he was outstanding in his field!",
  },
  {
    id: 2,
    title: "A joke 2",
    content:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 3,
    title: "A joke 3",
    content:
      "Why don't scientists trust atoms? Because they make up everything!",
  },
  {
    id: 4,
    title: "A joke 4",
    content: "Why did the bicycle fall over? Because it was two tired!",
  },
  {
    id: 5,
    title: "A joke 5",
    content:
      "Why did the math book look sad? Because it had too many problems!",
  },
];

app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
