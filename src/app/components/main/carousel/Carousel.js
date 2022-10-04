import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCarouselOpen, getCarouselOpen } from '../../../store/Slice';
import { Box, Grid, Modal } from '@mui/material/';
import DataJson from "../../../data/Data.json";
import Styles from "../../../styles/App.module.css";
import CssStyles from "../../../styles/CssStyle";
import ImgThumb from './imgThumb/ImgThumb';



const Carousel = () => {
    const images = DataJson.carouselComponent.list;
    const [selectedImg, setSelectedImg] = useState(images[0]);
    const dispatch = useDispatch();


    const carouselOpen = useSelector(getCarouselOpen);
    const handleOpen = () => dispatch(addCarouselOpen(true));
    const handleClose = () => dispatch(addCarouselOpen(false));

    return(
        <Box>
            <Grid container>
                <Grid item lg={2} md={2}></Grid>
                <Grid item lg={9} md={8}>
                <img onClick={handleOpen} className={Styles.img} src={require(`../../../assets/${selectedImg.url}`)} alt="img"/>
                <Modal
                    open={carouselOpen}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                     <Box sx={CssStyles.carouselStyle.modalStyle}>
                        <img className={Styles.img} src={require(`../../../assets/${selectedImg.url}`)} alt="img"/>
                        <ImgThumb images={images} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
                    </Box>
                </Modal>
                </Grid>
            </Grid>
            <Grid container>
                <ImgThumb images={images} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
            </Grid>
        </Box>
    )
}


export default Carousel;