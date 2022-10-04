import { useDispatch, useSelector } from 'react-redux';
import { addCart, getCart, getQty } from "../store/Slice";
import Nav from "./header/Nav";
import Carousel from "./main/carousel/Carousel";
import CarouselMobile from "./main/carousel/carouselMobile/CarouselMobile";
import Details  from "./main/details/Details";
import DataJson from "../data/Data.json";
const Home = () => {
    const dispatch = useDispatch();
    const cart = useSelector(getCart);
    const qty = useSelector(getQty);
    const carouselData = DataJson.carouselComponent.list;

    const addToCart = (item) => {
        if (cart.indexOf(item) !== -1) return;
        dispatch(addCart([...cart, item]));
    }
    return(
        <>
            <header>
                <Nav cart={cart} setCart={addCart} qty={qty} size={cart.length} />
            </header>
            <main>
                <section>
                    <Carousel/>
                    <CarouselMobile slides={carouselData} />
                    <Details qty={qty} setCart={addCart} addToCart={addToCart} />
                </section>
            </main>
        </>
    )
}

export default Home;