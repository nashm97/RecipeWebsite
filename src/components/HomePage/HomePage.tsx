import { FC } from 'react';
import { HomePageBackground } from './HomePage.styles';
import { Banner } from '/Users/milonash/Documents/UniMelb/Hastag-CyberStar/recipe-website/src/components/Banner/Banner';
import bannerImage from '../../images/homeBanner.jpg'

const HomePage: FC<{}> = ({}) => {
    return (
        <HomePageBackground>
        <Banner imageSrc={bannerImage}/>
        </HomePageBackground>
    );
};
export default HomePage;
