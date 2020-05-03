import Img from '../../atoms/Img';
import LaunchBackground from '../../atoms/LaunchBackground';
import React from 'react';

const imagePath: string = './../../../../assets/img/launch-home';
const imageExt: string = '.png';
const imageSet: string[] = ['', '@2x', '@3x'];
const imageSetPath: string = imageSet
    .map(
        (e: string, i: number): string =>
            `${imagePath}${e}${imageExt} ${i + 1}x`
    )
    .join(', ');

const HomeLaunchBackground = () => {
    return (
        <LaunchBackground>
            <Img srcSet={imageSetPath} src={imagePath + imageExt} />
        </LaunchBackground>
    );
};

export default HomeLaunchBackground;
