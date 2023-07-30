import { ChatBody, ChatContainer, ChatHeader, CloseButton, CompanyName, CompanyNameContainer, Footer, FooterContent, InputContainer, Logo, LogoOrion, PoweredByContainer, TextInput } from "./styled-components";
import { BsChatLeftText } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';
import MessagesDisplay from "./components/MessageDisplay/MessageDisplay";
import { Ref, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Message as MessageModel } from '../models';
import { getClientChatCompletion } from "../services/chat.service";

interface ChatProps {
    isChatOpened: boolean;
    closeChat: () => void;
    lightColor: string;
    darkColor: string;
    companyName: string;
    logo: string;
    jwtToken: string;
    baseUrl: string;
}

export interface ChatService{
    handleSendClick: () => void
}

const Chat = forwardRef(({ isChatOpened, closeChat, lightColor, darkColor, companyName, logo, jwtToken, baseUrl } : ChatProps, ref: Ref<ChatService>) => {

    const [conversation, setConversation] = useState(Array<MessageModel>);

    const [disableMsgInput, setDisableMsgInput] = useState(false);

    // Assign the childMethod to the ref
    useImperativeHandle(ref, () => ({
        handleSendClick,
    }));

    const submitMessage = async (msgTxt: string, isFromUser: boolean) => {
        const msg: MessageModel = {
            text: msgTxt,
            fromUser: isFromUser
        };

        setConversation((prev) => [...prev, msg]);
        
        if (isFromUser) {
            setDisableMsgInput(true);

            let response = await getClientChatCompletion(jwtToken, baseUrl, [...conversation.slice(-10), msg]);

            await submitMessage(response, false);
            setDisableMsgInput(false);
        }
    }

    const handleSendClick = () => {
        const inputEle = (document.getElementById("msgInput") as HTMLInputElement);
        if (inputEle.value.length > 0) {
            submitMessage(inputEle.value, true);
            inputEle.value = "";
        }
    }

    useEffect(() => {
        const listener = (e: any) => {
            if (e.code === "Enter") {
                handleSendClick();
            };
        };

        document.addEventListener("keydown", listener);
        return () => document.removeEventListener("keydown", listener);
    }, []);

    useEffect( () => {
        const body = document.getElementById('orion-bubble-chat-body');
        if(body){
            body.scrollTop = body?.scrollHeight;
        }
    }, [conversation]);

    if(isChatOpened){
        return(
            <ChatContainer>
                <ChatHeader lightColor={lightColor} darkColor={darkColor}>
                    <Logo src={logo}/>
                    
                    <CompanyNameContainer>
                        <CompanyName>{companyName}</CompanyName>
                    </CompanyNameContainer>

                    <CloseButton onClick={closeChat}><IoMdClose/></CloseButton>
                </ChatHeader>

                <ChatBody id='orion-bubble-chat-body'>
                    <MessagesDisplay messages={conversation} addDots={disableMsgInput} color={lightColor}/>
                </ChatBody>

                <Footer>
                    <FooterContent>
                        <InputContainer>
                            <BsChatLeftText />
                            <TextInput id="msgInput" type="text" placeholder="Pregúntame cualquier cosa" autoComplete="off"/>
                        </InputContainer>

                        <PoweredByContainer>
                            <span>powered by </span>
                            <LogoOrion src='https://storage.googleapis.com/orion-client-chat/static/orion_black.png'/>
                            <span>orion</span>
                        </PoweredByContainer>
                    </FooterContent>
                </Footer>
            </ChatContainer> 
        );
    }

    return <></>;
});

export default Chat;