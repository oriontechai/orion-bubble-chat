import { DisplayWrapper, MessagesDisplay, TopWhiteSpace } from "./styled-components";
import { Message as MessageModel } from '../../../models';
import Message from "../Message/Message";

interface MessageDisplayProps {
    messages: Array<MessageModel>;
    addDots: boolean;
    color: string | undefined;

}

const MessageDisplay = ({ messages, addDots, color } : MessageDisplayProps) => {

    return (
        <DisplayWrapper id="messageDisplay" className="scroll">
            <TopWhiteSpace />

            <MessagesDisplay>
                {messages.map((msg: MessageModel, index: number) => (
                    <Message
                        color={color}
                        key={msg.text + index.toString()}
                        text={msg.text}
                        isFromUser={msg.fromUser}
                        isDots={false}
                    />
                ))}

                {addDots &&
                    <Message
                        color={color}
                        text=""
                        isFromUser={false}
                        isDots={true}
                    />
                }
            </MessagesDisplay>
            
        </DisplayWrapper>
    );
};

export default MessageDisplay;