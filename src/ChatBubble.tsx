import { useEffect, useRef, useState } from "react";
import BubbleButton from "./BubbleButton/BubbleButton"
import Chat, { ChatService } from "./Chat/Chat";
import { Wrapper } from "./styled.component";
import { getAuthTokenWithKey } from "./services/auth.service";
import { getChatUiData } from "./services/chat.service";

const PROD_BASE_URL = 'https://orionapi.uk.r.appspot.com';
const DEV_BASE_URL = 'http://localhost:8080';

const BASE_URL = false ? DEV_BASE_URL : PROD_BASE_URL; // CHANGE TO FALSE WHEN BUILDING FOR PRODUCTION

const ChatBubble = () => {

  const [widgetAuthenticated, setWidgetAuthenticated] = useState<boolean>(false);
  const [jwtToken, setJwtToken] = useState<string>("");

  const [chatOpened, setChatOpened] = useState<boolean>(false);

  const [companyName, setCompanyName] = useState<string>("Orion");
  const [logo, setLogo] = useState<string>('https://storage.googleapis.com/orion-client-chat/static/logo_o.png');
  const [lightColor, setLightColor] = useState<string>("#2AA3FF");
  const [darkColor, setDarkColor] = useState<string>("#B401FF");

  const chatRef = useRef<ChatService>(new class implements ChatService {
    handleSendClick(): void { console.log("") }
});

  const openChat = () => {
    setChatOpened(true);
  }

  const closeChat = () => {
    setChatOpened(false);
  }

  const sendAction = () => {
    chatRef.current.handleSendClick();
  }

  const getToken = async (widgetKey: string) => {
    const token = await getAuthTokenWithKey(widgetKey, BASE_URL);
    if (token != "") {
      const uiData = await getChatUiData(token, BASE_URL);
      setCompanyName(uiData.companyName);
      setLogo(uiData.logo)
      setLightColor(uiData.mainColor);
      setDarkColor(uiData.darkerMainColor);
      setWidgetAuthenticated(true);
      setJwtToken(token);
    }
  }

  useEffect(() => {

    const scriptTag = document.getElementById('orion-client-bubble-chat-widget-script');

    let widgetKey: string | undefined;

    if (scriptTag) {
      widgetKey = scriptTag.getAttribute('data-clientid') as string;
    } else {
      // FOR TESTING IN DEVELOP
      //widgetKey = 'ed57e1628db21238'; // FOR BUILDING COMMENT THIS LINE ALWAYS!!
    }

    if (widgetKey) {
      getToken(widgetKey);
    }

  }, []);

  return (
    <Wrapper>
      {
        widgetAuthenticated &&
        <>
          <Chat ref={chatRef}
            isChatOpened={chatOpened} 
            closeChat={closeChat} 
            lightColor={lightColor} 
            darkColor={darkColor} 
            companyName={companyName}
            logo={logo}
            jwtToken={jwtToken}
            baseUrl={BASE_URL}/>
          <BubbleButton
            lightColor={lightColor}
            darkColor={darkColor} 
            isChatOpened={chatOpened} 
            openChat={openChat} 
            sendMessage={sendAction} />
        </>
      }
    </Wrapper>
  );
}

export default ChatBubble;
