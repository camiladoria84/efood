import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerContainer = styled.div`
    width: 100%;
    height: 280px;

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        position: absolute;
        inset: 0; /* top: 0, left: 0, right: 0, bottom: 0 */
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: brightness(50%);
        z-index: 0;
    }

    .container {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;

        width: 100%;
        max-width: 1366px;
        height: 100%;
        padding: 0 120px;
        box-sizing: border-box;
    }
`

export const CuisineType = styled.h3`
    position: absolute;
    top: 25px;
    left: 120px;

    color: ${cores.branco};
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 100;
    line-height: normal;

    z-index: 2;
`

export const RestaurantName = styled.h2`
    color: ${cores.branco};
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 900;
    line-height: normal;

    margin-bottom: 16px;
`
