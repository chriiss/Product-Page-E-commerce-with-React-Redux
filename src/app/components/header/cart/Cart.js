import { useDispatch } from 'react-redux';
import { addCart } from "../../../store/Slice";
import DataJson from "../../../data/Data.json";
import "../../../styles/App.module.css";
import { Box, Grid, Typography, Button } from '@mui/material/';
import CssStyle from "../../../styles/CssStyle";
import DeleteIcon from '@mui/icons-material/Delete';


const Cart = (props) => {
    const dispatch = useDispatch();
    const { cart, qty } = props;
    const cartData = DataJson.cartComponent;

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        dispatch(addCart(arr));
    };

    return(
        <article>
            <h4>{cartData.title}</h4>
            <hr/>
            {cart.map((item, i) => (
                <Box className="cart_box" key={i}>
                    <Grid container sx={CssStyle.navStyle.cartStyle}>
                        <Grid item className="cart_img">
                            <img src={require(`../../../assets/image-product-1-thumbnail.jpg`)} alt="Fall limited edit snickers" />
                        </Grid>
                        <Grid>
                            <h5>{item.name}</h5>
                        </Grid>
                        <Grid item sx={CssStyle.navStyle.cartStyle.item} md={12}>
                            <Grid item>
                                <Typography>{cartData.price}: ${item.price * qty}</Typography>
                                <Typography>{cartData.quantity}: {qty}</Typography>
                            </Grid>
                            <Grid item>
                                <Button  color="error" onClick={() => handleRemove(item.id)}><DeleteIcon/></Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button sx={CssStyle.navStyle.cartStyle.check} variant="contained" color="warning">{cartData.check}</Button>
                        </Grid>
                    </Grid>
                </Box>
            ))}
        </article>
    )
}

export default Cart;