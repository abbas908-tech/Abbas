const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id:1, name:"Rose Face Oil", description:"Nourishing rose oil", price:14.99, image:"https://via.placeholder.com/300x200?text=Rose+Oil"},
  { id:2, name:"Lavender Shampoo", description:"Gentle lavender shampoo", price:9.5, image:"https://via.placeholder.com/300x200?text=Shampoo"},
  { id:3, name:"Herbal Soap", description:"Handmade herbal soap", price:5, image:"https://via.placeholder.com/300x200?text=Soap"}
];

app.get('/api/products', (req,res)=> res.json(products));

app.post('/api/orders', (req,res)=>{
  console.log("Order received:", req.body);
  res.json({orderId: Date.now().toString(), status:"received"});
});

const PORT=3000;
app.listen(PORT, ()=> console.log(`Flora Beauty API running at http://localhost:${PORT}`));