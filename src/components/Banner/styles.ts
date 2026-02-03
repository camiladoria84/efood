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
        flex-direction: column;
        justify-content: space-between;
        
        width: 100%;
        max-width: 1024px;
        height: 100%;
        padding: 32px 16px;
        box-sizing: border-box;

        @media (max-width: 768px) {
            padding: 32px 16px; /* Keeping uniform padding for mobile too */
        }
    }
`

export const CuisineType = styled.h3`
    color: ${cores.branco};
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 100;
    line-height: normal;

    z-index: 2;
    margin-bottom: auto; /* Push to top if in flex container */

    @media (max-width: 768px) {
        font-size: 24px;
    }

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
