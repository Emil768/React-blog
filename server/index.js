let express = require("express");
let app = express();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const PORT = 3001;

const db = mysql.createPool({
  host: "n2o93bb1bwmn0zle.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  database: "bhypyzw6v3kxg7if",
  password: "ist926gwa9um9wy4",
  user: "fhehj6lyl6eo5hz2",
  port: 3306,
});

app.get("/news", (req, res) => {
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

  console.log(tags);

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

  const sqlSort = `select * FROM news WHERE JSON_CONTAINS(JSON_EXTRACT(tags,"$.tags"), '"${tags}"')`;
  db.query(sqlSort, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is starting from ${PORT} port...`);
});
