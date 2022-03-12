import Carousel from 'react-material-ui-carousel'
import { makeStyles } from '@material-ui/core'
import { bannerData } from '../../constants/data'
//import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';

const useStyle = makeStyles({
    image: {
        width: '100%',
        height: 280,
        //[theme.breakpoints.down('sm')]: {
        //    objectFit: 'cover',
        //    height: 180,
        //
        //
        //}
    },
    carousel: {
        marginTop: 5
    }
})

const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel
            autoPlay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            // navButtonsAlwaysInvisible={false}
            className={classes.container}
            StylesProvider
            navButtonsProps={{
                style: {
                    color: '#494949',
                    backgroundColor: '#FFFFFF',
                    borderRadius: 0,
                    margin: 0,
                    width: 50,

                }
            }}
        // className={classes.carousel}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image} />
                ))
            }
        </Carousel >
    )
}

export default Banner;