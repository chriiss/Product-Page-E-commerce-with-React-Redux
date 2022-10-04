import { useDispatch } from 'react-redux';
import { decrement, increment } from '../../../store/Slice';
import { Box, Grid, Typography, Button } from '@mui/material/';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CssStyle from "../../../styles/CssStyle";
import "../../../styles/App.module.css";
import DataJson from "../../../data/Data.json";


const Details = (props) => {
    const dispatch = useDispatch()
    const { qty, addToCart } = props;
    const product = DataJson.detailsComponent.product;

    return(
        <Box>
            <Grid container>
                <Grid item sm={0.35} xs={1}></Grid>
                <Grid item md={10} sm={10} xs={10} sx={CssStyle.detailsStyle.textBloc}>
                    <h3>{product.company}</h3>
                    <h1>{product.name}<br/>{product.name_bis}</h1>
                    <Typography sx={CssStyle.detailsStyle.typoColor}>{product.description} <br/> {product.description_bis}</Typography>
                    <Grid item sx={CssStyle.detailsStyle.priceBloc}>
                        <Typography sx={CssStyle.detailsStyle.priceBloc.price}>${product.price}</Typography>
                        <Typography sx={CssStyle.detailsStyle.priceBloc.reduction}>{product.reduction}%</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={CssStyle.detailsStyle.priceBloc.priceReduction}>${product.before_price}</Typography>
                    </Grid>
                    <Grid item sx={CssStyle.detailsStyle.buttonBloc}>
                        <Grid item sx={CssStyle.detailsStyle.buttonBloc.buttonGroup}>
                            <Button color="warning" disabled={qty <= 1} sx={CssStyle.detailsStyle.buttonBloc.buttonGroup.button} onClick={() => dispatch(decrement())}>-</Button>
                                <Typography sx={CssStyle.detailsStyle.buttonBloc.buttonGroup.count}>{qty}</Typography>
                            <Button color="warning" sx={CssStyle.detailsStyle.buttonBloc.buttonGroup.button} onClick={() => dispatch(increment())}>+</Button>
                        </Grid>
                        <Button variant="contained" color="warning" sx={CssStyle.detailsStyle.buttonBloc.text} onClick={() => addToCart(product)}><ShoppingCartIcon/>&nbsp; &nbsp; Add to Card</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Details;