import React from 'react';
import Head from './Head';
import UrlList from './UrlList';
import Cards from './Cards';
import Boost from './Boost';
import Footer from './Footer';
import Illustration from './Illustration';

const Header=()=>{

    return(
        <div className="min-h-screen">
            <Head/>
            <Illustration/>
            <UrlList/>
            <Cards/>
            <Boost/>
            <Footer/>
        </div>
    )
}

export default Header;