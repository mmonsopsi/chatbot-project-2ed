import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAI?: boolean;
}

const ChatMessage = ({ message, isAI = false }: ChatMessageProps) => {
  return (
    <div className={cn("flex w-full mb-6", isAI ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "chat-bubble",
          isAI ? "bg-transparent" : "bg-[#1E2A4A] text-white"
        )}
      >
        <p className="text-sm md:text-base leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;