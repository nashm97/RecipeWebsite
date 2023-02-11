import { FC } from 'react';
import { Title, HomePageBackground } from './HomePage.styles';
import { Banner } from '/Users/milonash/Documents/UniMelb/Hastag-CyberStar/recipe-website/src/components/Banner/Banner';
const HomePage: FC<{}> = ({}) => {
    return (
        <HomePageBackground>
        <Banner imageSrc={"/Users/milonash/Documents/UniMelb/Hastag-CyberStar/recipe-website/src/images/homeBanner.jpg"}/>
        </HomePageBackground>
    );
};
export default HomePage;
