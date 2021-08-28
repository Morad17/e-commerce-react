import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'

import useStyles from './styles'

const Cart = ({ cart }) => {

    /*---- Tells if basket is empty---*/
    console.log(cart.line_items)
    const isEmpty = !cart.line_items.length
    const classes = useStyles()

    const EmptyCart = () => {
        <Typography variant="subtitle1">There are no Items in the Basket!</Typography>
    }

    const FilledCart = () => {
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) =>(
                <Grid item xs={12} sm={4} key={item.id}>
                    <div>{item.name}</div>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Basket</Button>
                <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>
        </div>
        </>
    }
    
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variable="h3">Your Shopping Basket</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart
