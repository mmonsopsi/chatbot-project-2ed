import { useState } from "react";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatInput from "@/components/chat/ChatInput";
import TypingIndicator from "@/components/chat/TypingIndicator";

interface Message {
  text: string;
  isAI: boolean;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (message: string) => {
    setMessages(prev => [...prev, { text: message, isAI: false }]);
    setIsLoading(true);

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "This is a simulated AI response. Replace this with actual AI integration.", 
        isAI: true 
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen max-w-[700px] mx-auto px-4">
      <main className="flex-1 overflow-y-auto py-8 space-y-6">
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isAI={message.isAI}
          />
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="chat-bubble bg-transparent">
              <TypingIndicator />
            </div>
          </div>
        )}
      </main>
      <div className="py-4">
        <ChatInput onSend={handleSendMessage} disabled={isLoading} />
      </div>
    </div>
  );
};

export default Index;