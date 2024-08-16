const express = require('express');
const cors = require('cors');
const path = require('path');
const productsData = require('./data/products.json');

const app = express();

app.use(cors());

// Настройка статических файлов
app.use('/data/images', express.static(path.join(__dirname, 'data/images')));

// Маршрут для получения списка товаров
app.get('/products', (req, res) => {
  res.json(productsData);
});

// Маршрут для получения информации о конкретном товаре
app.get('/products/:id', (req, res) => {
  const product = productsData.find((p) => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
