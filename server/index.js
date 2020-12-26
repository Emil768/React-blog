let express = require("express");
let app = express();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: "localhost",
  database: "blog",
  password: "emil22878",
  user: "root",
});

app.get("/", (req, res) => {
  db.query("select* from news order by date desc", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/password", (req, res) => {
  const password = req.body.password;
  db.query("select* from password where pass = ?", password, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/insert", (req, res) => {
  const title = req.body.title;
  const text = req.body.text;
  const img = req.body.img;
  const tags = req.body.tags;

  console.log(tags)

  const sqlInsert = "insert into news(title,text,img,tags)values(?,?,?,?)";
  db.query(sqlInsert, [title, text, img, tags], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//update

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  const title = req.body.title;
  const text = req.body.text;
  const img = req.body.img;
  const tags = req.body.tags;

  console.log(tag);

  const sqlUpdate = "update news set title=?,text=?,img=?,tags=? where id=?";
  db.query(sqlUpdate, [title, text, img, tags, id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//delete
app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "delete from news where id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//category

app.get("/category/:name", (req, res) => {
  const tags = req.params.name;
  console.log(req.params);

  db.query("select* from news where tags=? ", tags, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is starting from 3001 port...");
});
