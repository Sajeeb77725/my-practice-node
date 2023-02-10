const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.port || 5000;

// middlewere
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Running my loser node server");
});

const users = [
  { id: 1, name: "Sajeeb", email: "man@gmail.com", phone: 09838748 },
  { id: 2, name: "Sajib", email: "mandel@gmail.com", phone: 098340988 },
  { id: 3, name: "Sojeeb", email: "mandol@gmail.com", phone: 09865248 },
  { id: 4, name: "Sazeeb", email: "mandal@gmail.com", phone: 09833348 },
  { id: 5, name: "Sazib", email: "mand@gmail.com", phone: 09832348 },
];

app.get("/users", (req, res) => {
  // Filter by search query parameter
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const user = users.find((u) => u.id == id);
  res.send(user);
});

// for getting data from client side
app.post("/user", (req, res) => {
  console.log("Request:", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["apple", "Graps", "watermillen"]);
});

app.listen(port, () => {
  console.log("Node server is running", port);
});
