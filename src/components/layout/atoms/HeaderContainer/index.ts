import styled, { css } from 'styled-components';

import Button from './../../atoms/Button';
import LogoContainer from './../LogoContainer';
import isPositionStickySupported from './../../../../helpers/isPositionStickySupported';

const HeaderContainer = styled.header`
    height: 5.6875rem;
    display: flex;
    padding: 1.5rem 0 1.5rem 2.5625rem;
    align-items: center;
    ${() =>
        isPositionStickySupported()
            ? css`
                  position: sticky;
                  top: 0;
              `
            : css`
                  position: fixed;
                  width: 100%;
                  top: 0;
                  left: 0;
              `}
    ${LogoContainer} {
        flex: 1;
    }
    ${Button} {
        position: absolute;
        right: 0;
    }
`;

export default HeaderContainer;
