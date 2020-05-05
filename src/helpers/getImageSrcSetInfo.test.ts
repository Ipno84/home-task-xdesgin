import _ from '@testing-library/react';
import getImageSrcSetInfo from './getImageSrcSetInfo';

describe('Get image info, src and srcset', () => {
    test('With 3 declinations', () => {
        const imagePath = 'image';
        const imageExt = '.png';
        const set = 3;
        let imageInfo = getImageSrcSetInfo(imagePath, imageExt, set);
        expect(imageInfo).toMatchObject({
            src: imagePath + imageExt,
            srcSet: `${imagePath}${imageExt} 1x, ${imagePath}@2x${imageExt} 1.5x, ${imagePath}@3x${imageExt} 2x`,
        });
    });

    test('With 2 declinations', () => {
        const imagePath = 'image';
        const imageExt = '.png';
        const set = 2;
        let imageInfo = getImageSrcSetInfo(imagePath, imageExt, set);
        expect(imageInfo).toMatchObject({
            src: imagePath + imageExt,
            srcSet: `${imagePath}${imageExt} 1x, ${imagePath}@2x${imageExt} 1.5x`,
        });
    });

    test('Just source', () => {
        const imagePath = 'image';
        const imageExt = '.png';
        const set = 1;
        let imageInfo = getImageSrcSetInfo(imagePath, imageExt, set);
        expect(imageInfo).toMatchObject({
            src: imagePath + imageExt,
        });
    });

    test('With missing data', () => {
        const imagePath = '';
        const imageExt = '.png';
        const set = 1;
        let imageInfo = getImageSrcSetInfo(imagePath, imageExt, set);
        expect(imageInfo).toMatchObject({});
    });
});
