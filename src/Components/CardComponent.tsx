import React from 'react';
import { Card, CardContent, Button, CardMedia, Typography, Divider } from '@mui/material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import styles from './CardComponent.module.css'

const CardComponent: React.FC<{ product: { id: number; name: string; price: string; image: string; } }> = ({ product }) => {
  return (
    <Card className={styles.Card}>
      <CardMedia
        component="img"
        alt={product.name}
        image={product.image}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography fontWeight={600} variant='h3'>{product.price}</Typography>
        <Divider sx={{ my: 2 }} />
        <Button
          className={styles.button}  
          disableElevation
          variant="contained">
          <ShoppingBasketIcon />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
