import styled from 'styled-components';

export const ChatContainer = styled.div`
    z-index: 10;
    position: fixed;
    background-color: #f8f8f8;
    
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        width: 310px;
        height: 450px;
        bottom: 20px;
        right: 90px;    

        border-radius: 16px;
        box-shadow: rgba(0, 18, 46, 0.16) 0px 8px 36px 0px;
    }

    @media (min-width: 1200px){
        width: 360px;
        height: 600px;
        bottom: 60px;
        right: 130px;
    }
`;

interface ChatHeaderProps{
    lightColor: string;
    darkColor: string;
}

export const ChatHeader = styled.div<ChatHeaderProps>`
    
    border-top-right-radius: inherit;
    border-top-left-radius: inherit;
    background-image: linear-gradient(to right, ${props => props.darkColor}, ${props => props.lightColor}) !important;
    box-sizing: border-box;
    width: 100%;
    height: 90px;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 40px;
`;

export const CompanyNameContainer = styled.div`
    flex: 1 1 0;
    box-sizing: border-box;
    padding-left: 20px;
`;

export const CloseButton = styled.button`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background-color: transparent;
    color: #f8f8f8;
    font-size: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CompanyName = styled.h1`
    margin: 0;
    padding: 0;
    color: #f8f8f8;
    font-family: 'Jost', sans-serif;
    font-size: 1.3rem;
    font-weight: 500;
`;

export const ChatBody = styled.div`
    width: 100%;
    flex: 1 1 0;
    margin-bottom: 10px;
    overflow-y: scroll;
`;

export const Footer = styled.div`
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    padding: 0 20px;
    box-sizing: border-box;
    @media (min-width: 700px) {
        height: 90px;
    }
`;

export const FooterContent  = styled.div`
    border-top: 1px solid #141414cc;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const InputContainer  = styled.div`
    font-size: 25px;
    display: flex;
    color: rgb(144,144,144);
    margin: 10px 0;
    align-items: center;
`;

export const PoweredByContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    color: #141414;
    opacity: 0.7;
    font-size: 0.6rem;
    text-transform: uppercase;
    @media (min-width: 700px) {
        width: 95%;
        margin-bottom: 10px;
    }
`;

export const LogoOrion = styled.img`
    height: 20px;
    margin: 0 5px;
`;

export const TextInput = styled.input`
    border: 0;
    outline: 0;
    background-color: transparent;
    margin-left: 5px;
    color: rgb(144,144,144);
    font-family: 'Jost', sans-serif;
    flex: 1 1 0;
`;