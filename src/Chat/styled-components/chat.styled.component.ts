import styled from 'styled-components';

export const ChatContainer = styled.div`
    z-index: 10;
    position: absolute;
    width: 360px;
    height: 600px;
    background-color: #f8f8f8;
    bottom: 60px;
    right: 130px;
    border-radius: 16px;
    box-shadow: rgba(0, 18, 46, 0.16) 0px 8px 36px 0px;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    background-image: linear-gradient(135deg, rgba(42, 39, 218, 0.72) 0%, rgba(0, 204, 255, 0.72) 100%);
    border-top-right-radius: 16px;
    border-top-left-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &::after{
        content: "";
        position: absolute;
        width: calc(100%);
        top: 92px;
        border-image-source: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNzIgMTUiPgogIDxwYXRoIGQ9Ik0zNDkuOCAxLjRDMzM0LjUuNCAzMTguNSAwIDMwMiAwaC0yLjVjLTkuMSAwLTE4LjQuMS0yNy44LjQtMzQuNSAxLTY4LjMgMy0xMDIuMyA0LjctMTQgLjUtMjggMS4yLTQxLjUgMS42Qzg0IDcuNyA0MS42IDUuMyAwIDIuMnY4LjRjNDEuNiAzIDg0IDUuMyAxMjguMiA0LjEgMTMuNS0uNCAyNy41LTEuMSA0MS41LTEuNiAzMy45LTEuNyA2Ny44LTMuNiAxMDIuMy00LjcgOS40LS4zIDE4LjctLjQgMjcuOC0uNGgyLjVjMTYuNSAwIDMyLjQuNCA0Ny44IDEuNCA4LjQuMyAxNS42LjcgMjIgMS4yVjIuMmMtNi41LS41LTEzLjgtLjUtMjIuMy0uOHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==);
        border-image-slice: 0 0 100%;
        border-image-width: 0 0 15px;
        border-image-repeat: stretch;
        border-width: 0px 0px 15px;
        border-bottom-style: solid;
        border-color: initial;
        border-top-style: initial;
        border-left-style: initial;
        border-right-style: initial;
    }
`;

export const HeaderLogo = styled.img`
    width: 50px;
    height: 50px;
`;

export const HeaderText = styled.h3`
    color: hsl(0, 0%, 90%);
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    font-family: 'Poppins', 'sans-serif' !important;
`;

export const HeaderButton = styled.button`
    background-color: transparent;
    outline: none;
    border: 0;
    margin: 0;
    padding: 0;
    margin-right: 20px;
    cursor: pointer;
`;

export const ChatBody = styled.div`
    height: 400px;
`;

export const SendContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 1rem;
`;

export const Input = styled.input`
    flex: 1 1 0% !important;
    border-color: rgb(209 213 219) !important;
    border-width: 0px !important;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
    padding: 0.5rem 1rem !important;
    border-radius: 9999px !important;
    outline: 2px solid transparent !important;
    outline-offset: 2px !important;
    caret-color: #4b5563 !important;
    color: rgb(75 85 99) !important;
    font-family: 'Poppins', 'sans-serif' !important;
    font-size: 0.875rem !important;
`;
