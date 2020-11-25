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
  db.query("select* from news", (err, result) => {
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
