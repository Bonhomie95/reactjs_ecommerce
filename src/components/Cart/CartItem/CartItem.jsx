import React from 'react'
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@material-ui/core'

import useStyles from './styles';
const CartItem = ({lineItem, onUpdateCartQty, onRemoveFromCart}) => {
    const classes = useStyles();
  return (
    <Card>
        <CardMedia image={lineItem.image.url} alt={lineItem.name} className={classes.media}/>
        <CardContent className={classes.cardContent}>
            <Typography variant="h6">{lineItem.name}</Typography>
            <Typography variant="h6">{lineItem.price.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
        <Button type="button" size='small' onClick={()=> onUpdateCartQty(lineItem.id, lineItem.quantity -1 )} >-</Button>
        <Typography>{lineItem.quantity}</Typography>
        <Button type="button" size='small' onClick={()=> onUpdateCartQty(lineItem.id, lineItem.quantity + 1)} >+</Button>
        </div>
        <Button variant='contained' color='secondary' type='button' onClick={()=> onRemoveFromCart(lineItem.id)}>Remove</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem