import styled from '@emotion/styled';

export const StyledModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    cursor: default;
`

export const StyledModal = styled.div`
    background-color: rgb(195, 178, 183);
    border-radius: 5px;
    position: relative; 
    width: 95%;
    left: 10px;
    top: 50px;
    @media (min-width: 768px) {
        height: 550px;
        width: 60%;
        left: 200px;
        top: 30px;
    }
`

export const StyledCloseButton = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 20px;
    padding-top: 20px;
`

export const StyledProfileDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    height: 500px;
    @media (min-width: 768px) {
        height: 480px;
    }
`

export const StyledImage = styled.img`
    border-radius: 50%;
    width: 50%;
    padding: 10px;
    margin-left: 25%
`

export const StyledInfoWrapper = styled.div`
    padding: 20px;
    button {
        padding: 10px 20px;
        width: -webkit-fill-available;
    }
`

export const StyledButtonWrapper = styled.div`
    box-shadow: rgb(0 0 0 / 35%) 0px 3px 7px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 15px -5px;
    &:hover {
        box-shadow: 0px 0px 15px 0px;
    }
`