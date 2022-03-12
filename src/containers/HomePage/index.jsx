import React from 'react'
import { Box, makeStyles } from '@material-ui/core';
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import Banner from './Banner'
import MidSlide from './MidSlide'
import MidSection from './MidSection'
import Slide from './Slide'
import { useSelector, useDispatch } from 'react-redux'; // hooks
import NavBar from './NavBar'
/**
* @author
* @function HomePage
**/

const useStyle = makeStyles({
    component: {
        padding: 10,
        background: '#e6e6e6'
    }
})

const HomePage = () => {
    const classes = useStyle();

    //const getProducts = useSelector(state => state.getProducts);
    //const { products, error } = getProducts;

    //const dispatch = useDispatch();

    //useEffect(() => {
    //    dispatch(listProducts())
    //}, [dispatch])

    return (
        <Layout>

            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <MidSection />

            </Box>

        </Layout>
    )
}

export default HomePage;