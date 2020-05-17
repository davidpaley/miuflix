import React from 'react';
import Features from '../components/features';
import Slider from '../components/slider';
import AboutUs from '../components/about-us';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <main>
            <Slider />
            <Features />
            <AboutUs />
        </main>
    </Layout>
);

export default IndexPage;
