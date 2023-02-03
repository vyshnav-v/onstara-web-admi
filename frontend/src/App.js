import './App.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

import React, { useState, useEffect } from 'react';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('/api/categories');
      const { categories } = await response.json();

      setCategories(categories);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      const { products } = await response.json();

      setProducts(products);
    };

    fetchProducts();
  }, []);

  return (
    <div className='App'>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => (
          <ListGroup defaultActiveKey='#link1'>
            <ListGroup.Item
              action
              key={category._id}
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </ListGroup.Item>
          </ListGroup>
        ))}
      </ul>
      <h1>Products</h1>
      <ul>
        {products
          .filter(
            (product) =>
              !selectedCategory || product.category === selectedCategory.name
          )
          .map((product) => (
            <div>
              <Card key={product._id} style={{ width: '18rem' }}>
                <Card.Img variant='top' src='holder.js/100px180' />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Badge bg='primary'>{product.category}</Badge>
                  <Button variant='success'>price :{product.price}</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
      </ul>
    </div>
  );
};

export default App;
