import styled, { Keyframes, css, keyframes } from 'styled-components';

import Props from './props';

const spinAnimation: Keyframes = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`;

const Icon = styled.i<Props>`
    display: inline-block;
    background-image: url('./../../../../assets/icon/icons.png');
    background-position: top left;
    background-repeat: no-repeat;
    width: 0.875rem;
    ${({ spin }) =>
        spin &&
        css`
            animation: ${spinAnimation} 1s linear infinite;
        `}
    ${({ icon }) => {
        switch (icon) {
            case 'refresh':
                return css`
                    background-position: 0 0;
                    height: 0.875rem;
                `;
            case 'select':
                return css`
                    background-position: 0 -0.9375rem;
                    width: 0.625rem;
                    height: 0.3125rem;
                `;
            case 'sort':
                return css`
                    background-position: 0 -1.3125rem;
                    height: 1.125rem;
                `;
        }
    }}
    @media (-webkit-min-device-pixel-ratio: 2) {
        & {
            background-image: url('./../../../../assets/icon/icons@2x.png');
            background-size: 0.875rem 2.5rem;
        }
    }
    @media (-webkit-min-device-pixel-ratio: 3) {
        & {
            background-image: url('./../../../../assets/icon/icons@3x.png');
            background-size: 0.875rem 2.5rem;
        }
    }
`;

export default Icon;
