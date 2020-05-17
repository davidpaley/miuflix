import React from 'react';
import Features from '../components/features';
import Slider from '../components/slider';
import HowTo from '../components/how-to';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <main>
            <Slider />
            <Features />
            <HowTo />
        </main>
    </Layout>
);

export default IndexPage;
