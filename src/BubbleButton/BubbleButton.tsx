import { Button } from "./styled-components";
import { TbMessageCircle } from 'react-icons/tb';
import { MdSend } from 'react-icons/md';

interface BubbleButtonProps{
    isChatOpened: boolean;
    openChat: () => void;
    sendMessage: () => void;
    lightColor: string; 
    darkColor: string;
}

const BubbleButton = ({ isChatOpened, openChat, sendMessage, lightColor, darkColor } : BubbleButtonProps) => {
    const handleButtonClick = () => {
        if(isChatOpened){
            sendMessage();
        }else{
            openChat();
        }
    }

    return(
        <Button onClick={handleButtonClick} lightColor={lightColor} darkColor={darkColor}>
            { isChatOpened ? 
                <MdSend color="white" size={25}/> :
                <TbMessageCircle color="white" size={35}/>
            }
            
        </Button>
    );
}

export default BubbleButton;