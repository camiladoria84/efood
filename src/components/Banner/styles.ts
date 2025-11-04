import styled from 'styled-components'
import { cores } from "../../styles"

export const BannerContainer = styled.div`
    width: 100vw;
    height: 280px;
    flex-shrink: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    img {
        position: absolute;
        top: 0;
        left: 0;
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
    width: 101px;
    height: 33.25px;
    flex-shrink: 0;

    color: ${cores.branco};
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    z-index: 1;
`

export const RestaurantName = styled.h2`
    color: ${cores.branco};
    font-family: Roboto, sans-serif;
    font-size: 32px;
    font-weight: 900;
    line-height: normal;
    margin-bottom: 16px;
`   
