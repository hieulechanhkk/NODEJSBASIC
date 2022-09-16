
const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000; 


app.use(express.static('./src/public'))
app.set("view engine", "ejs");
app.set("views", "./src/views");


const sp = [{
        name:"HTC M9",
        price: 600000
    },
    {
        name:"HTC M8",
        price: 394289
    }
    ]
app.get('/', (req, res) => {
  res.render("home")
})
app.get('/chao', (req, res) => {
  res.render("chao", {array:sp})
})
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})