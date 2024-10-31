import React from 'react';
import { Grid } from '@mui/material';
import CardComponent from './CardComponent';

const Cards: React.FC<{ products: { id: number; name: string; price: string; image: string; }[] }> = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <CardComponent product={product}/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
