import { Grid } from '@mui/material/';
import Styles from "../../../../styles/App.module.css";
import CssStyles from "../../../../styles/CssStyle";


const ImgThumb = (props) => {
    const { images, selectedImg, setSelectedImg} = props;
    return(
        <Grid item lg={10.25} md={10.25} sx={CssStyles.carouselStyle.imgBloc}>
            {images.map((data, index) => {
                return(
                    <img className={Styles.imgThumb} style={{opacity: selectedImg.url === data.url ? '.75': ''}} key={index} src={require(`../../../../assets/${data.url}`)} alt="images" onClick={() => setSelectedImg(data)}/>
                )
            })}
        </Grid>
    )
}

export default ImgThumb;