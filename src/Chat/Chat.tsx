import { ChatBody, ChatContainer, HeaderButton, HeaderContainer, HeaderLogo, HeaderText, Input, SendContainer } from "./styled-components";
import { SlArrowDown } from 'react-icons/sl';

interface ChatProps {
    isChatOpened: boolean;
    closeChat: () => void;
}

const Chat = ({ isChatOpened, closeChat } : ChatProps) => {
    if(isChatOpened){
        return(
            <ChatContainer>
                <HeaderContainer>
                    <HeaderLogo src="https://storage.googleapis.com/orion-client-chat/static/logo_o.png" />
                    <HeaderText>orion</HeaderText>
                    <HeaderButton onClick={closeChat}>
                        <SlArrowDown color="white" size={25}/>
                    </HeaderButton>
                    
                </HeaderContainer>

                <ChatBody>

                </ChatBody>

                <SendContainer>
                    <Input id="orion-bubble-chat-msg-input" type="text" placeholder="Send Message..." />
                </SendContainer>
            </ChatContainer> 
        );
    }

    return <></>;
}

export default Chat;