import styled from 'styled-components';
import homeBackgroundImage from '../../images/homeBackground.jpg'

export const BannerBackground = styled.div<{ imageSrc: string }>(
    ({imageSrc}) =>`
    background-color:red;
    width: 100%;
    background-size:100;    
`
);