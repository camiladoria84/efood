import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`

export const ModalContainer = styled.div`
    position: relative;
    width: calc(100% - 406px); /* 203px a cada lado */
    max-width: 1024px;
    height: 344px;
    background-color: ${cores.vermelho};
    display: flex;
    padding: 0;

    @media (max-width: 1024px) {
        width: calc(100% - 200px); /* 100px a cada lado */
    }

    @media (max-width: 768px) {
        width: calc(100% - 60px); /* 30px a cada lado */
        flex-direction: column;
        height: auto;
        max-height: 90vh;
        overflow-y: auto;
    }
`

export const ModalImage = styled.img`
    width: 280px;
    height: 280px;
    margin: 32px;
    object-fit: cover;

    @media (max-width: 768px) {
        width: calc(100% - 32px);
        height: 200px;
        margin: 16px;
    }
`

export const ModalContent = styled.div`
    flex: 1;
    color: ${cores.branco};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 32px;
    margin-bottom: 32px;
    margin-right: 32px;

    @media (max-width: 768px) {
        margin: 0 16px 16px 16px;
    }
`

export const ModalTitle = styled.h2`
    font-family: Roboto;
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
    color: ${cores.branco};
`

export const ModalDescription = styled.p`
    font-family: Roboto;
    font-size: 14px;
    line-height: 1.4;
    color: ${cores.branco};
    text-align: left;
    overflow-y: auto;
    max-height: 220px;
    padding-right: 10px;
`
export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 16px;
        height: 16px;
    }
`

export const ModalActions = styled.div`
    margin-top: auto; 
    display: flex;
    justify-content: flex-start;
`