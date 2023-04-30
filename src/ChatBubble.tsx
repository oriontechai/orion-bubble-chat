import { useState } from "react";
import BubbleButton from "./BubbleButton/BubbleButton"
import Chat from "./Chat/Chat";

const ChatBubble = () => {

  const [chatOpened, setChatOpened] = useState<boolean>(false);

  const openChat = () => {
    setChatOpened(true);
  }

  const closeChat = () => {
    setChatOpened(false);
  }

  const sendAction = () => {

  }

  return (
    <>
      <Chat isChatOpened={chatOpened} closeChat={closeChat}  />
      <BubbleButton isChatOpened={chatOpened} openChat={openChat} sendMessage={sendAction}/>
    </>
  );
}

export default ChatBubble;
