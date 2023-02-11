import { FC } from 'react';
import { BannerBackground } from './Banner.style';
interface BannerProps {
    imageSrc: string
}

export const Banner: FC<BannerProps> = ({imageSrc}) => {

    return (
        <BannerBackground imageSrc ={imageSrc}>
            <h1>hello</h1>
        </BannerBackground>
    )
}