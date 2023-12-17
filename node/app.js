const express = require("express");

const app = express();

// register view engine
app.set("view engine", "ejs"); // default = views folder.

const posts = [
  { id: 1, title: "first post", content: "This is my first post" },
  { id: 2, title: "second post", content: "This is my second post" },
  { id: 3, title: "third post", content: "This is my third post" },
];

// listen for request
app.listen(3000);

app.get("/", (req, res) => {
  //   res.send(""); // data
  //   res.sendFile("./views/index.html", { root: __dirname }); // html
  res.render("index", { title: "Home" }); //render ejs template for pages
});

app.get("/posts", (req, res) => {
  res.send(posts);
});

// page by ID

app.get("/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (post) {
    res.send(post);
  } else {
    res.status(404).end();
  }
});

// redirect

app.get("/post", (req, res) => {
  res.redirect("./posts");
});

// 404
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
