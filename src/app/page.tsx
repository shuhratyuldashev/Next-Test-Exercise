import React from 'react';
import { Container, Typography } from '@mui/material';
import Cards from '@/Components/CardsComponent';

const products = [
  { id: 1, name: 'Product 1', price: '10 $', image: 'https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1' },
  { id: 2, name: 'Product 2', price: '10 $', image: 'https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1' },
  { id: 3, name: 'Product 3', price: '10 $', image: 'https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1' },
  { id: 4, name: 'Product 4', price: '10 $', image: 'https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1' },
  { id: 5, name: 'Product 5', price: '10 $', image: 'https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1' },
  { id: 6, name: 'Product 6', price: '10 $', image: 'https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1' },
  { id: 7, name: 'Product 7', price: '10 $', image: 'https://i0.wp.com/www.bishoprook.com/wp-content/uploads/2021/05/placeholder-image-gray-16x9-1.png?ssl=1' },
];

export default function ProductsPage() {
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Product List
      </Typography>
      <Cards products={products} />
    </Container>
  );
}
