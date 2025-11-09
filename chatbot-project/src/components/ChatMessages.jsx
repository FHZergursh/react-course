import { ChatMessage } from "./ChatMessage";
import { useRef, useEffect } from "react";
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
  const ChatMessagesRef = useRef(null);

  useEffect(() => {
    const containerElem = ChatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-messages-container" ref={ChatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}


export default ChatMessages;