import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatBubble from './ChatBubble.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('orion-bubble-chat-widget') as HTMLElement).render(
  <React.StrictMode>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>
    <ChatBubble />
  </React.StrictMode>,
)
