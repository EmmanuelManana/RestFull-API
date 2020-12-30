require('dotenv/config')
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");


//temp
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
const DB_CONNECTION =  process.env.DB_CONNECT;

//Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//import Routes
const postsRoute = require("./routes/posts")


app.use('/posts', postsRoute)

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the homepage</h1>");
});



//connect to the databse
mongoose.connect(
   DB_CONNECTION,
  { useNewUrlParser: true,
    useUnifiedTopology: true }, 
  () => {
      console.log('connected to DB!')
  }
);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
