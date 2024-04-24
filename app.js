const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let cart = [];

app.get("/",(req,res)=>{
    res.sendFile(__dirname,'mainpage.html');
    });

app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

app.post('/add-to-cart', (req, res) => {
  const { name, price } = req.body;
  cart.push({ name, price });
  res.send(`Item ${name} successfully added to cart.`);
});

app.get('/calculate-total', (req, res) => {
  let total = 0;
  cart.forEach(item => {
    total += item.price;
  });
  res.json({ total });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

