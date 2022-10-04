import { useDispatch, useSelector } from 'react-redux';
import { addCarouselMobile, getCarouselMobile } from '../../../../store/Slice';
import Styles from "../../../../styles/App.module.css";
import CssStyle from "../../../../styles/CssStyle";
import DataJson from "../../../../data/Data.json";
import { Box, Grid, Button } from '@mui/material/';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const CarouselMobile = ({ slides }) => {
    const carouselData = DataJson.carouselComponent.list;
    const dispatch = useDispatch();
    const current = useSelector(getCarouselMobile);
    const length = slides.length;

    const handleNext = () => {
        dispatch(addCarouselMobile(current === length - 1 ? 0 : current + 1));
    };

    const handlePrev = () => {
        dispatch(addCarouselMobile(current === 0 ? length - 1 : current - 1));
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return(
        <Box className={Styles.carouselMobile}>
            <Grid container sx={CssStyle.carouselMobileStyle}>
                {carouselData.map((data, index) => {
                    return (
                        <Grid item className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (
                            <img src={require(`../../../../assets/${data.url}`)} alt={data.url} className={Styles.imgMobile} />
                            )}
                        </Grid>
                    );
                })}
            </Grid>
            <Grid item sx={CssStyle.carouselMobileStyle.buttons}>
                <Button variant="container" color="warning" sx={{transform: 'scale(200%)'}} onClick={handlePrev}><ArrowCircleLeftIcon/></Button>
                <Button variant="container" color="warning" sx={{transform: 'scale(200%)'}} onClick={handleNext}><ArrowCircleRightIcon/></Button>
            </Grid>
        </Box>
    )
}

export default CarouselMobile;