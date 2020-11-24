let express = require("express");
let app = express();
let mysql = require("mysql");
let bodyParser = require("body-parser");
let cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.listen(3001, () => {
  console.log("Server is starting from 3001 port...");
});
