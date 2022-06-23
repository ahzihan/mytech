import React from 'react';
import PageTitle from '../Share/PageTitle/PageTitle';
import Banner from './Banner/Banner';
import Portfolio from './Portfolio/Portfolio';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Portfolio></Portfolio>
            <PageTitle title='Home'></PageTitle>
        </div>
    );
};

export default Home;