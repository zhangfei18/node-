const express = require("express");
const bodyParser = require("body-parser");
const read = require("node-readability");
const Article = require("./db").Article;
let app = express();
const port = process.env.port || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/articles", (req, res, next) => {
  Article.all((err, articles) => {
    if (err) return next(err);
    res.send(articles);
  });
});
app.get("/articles/:id", (req, res) => {
  console.log(req);
  let id = req.params.id;
  Article.find(id, (err, articles) => {
    if (err) return next(err);
    res.send(articles);
  });
});
app.post("/articles", (req, res) => {
  const url = req.body.url;
  read(url, (err, result) => {
    if (err || !result) res.status(500).send("Error downloading article!");
    Article.create(
      { title: result.title, content: result.content },
      (err, article) => {
        if (err) return next(err);
        res.send("OK");
      }
    );
  });

  res.send("创建完成");
});
app.delete("/articles/:id", (req, res) => {
  let id = req.params.id;
  Article.delete(id, (err) => {
    if (err) return next(err);
    res.send({ message: "Deleted OK!" });
  });
  res.send(id);
});
app.listen(port, () => {
  console.log(`Express web avalilable at localhost: ${port}`);
});
