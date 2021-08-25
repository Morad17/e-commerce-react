import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core' 

function Cart({ cart }) {
    const isEmpty = !cart.line_items.length

    const EmptyCart = () => {
        <Typography variant="subtitle1">There are no Items in the Basket!</Typography>
    }

    const FilledCart = () => {
        <>
        <Grid container spacing={3}>

        </Grid>
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
