import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isAI?: boolean;
}

const ChatMessage = ({ message, isAI = false }: ChatMessageProps) => {
  return (
    <div className={cn("flex w-full mb-4", isAI ? "justify-start" : "justify-end")}>
      <div
        className={cn(
          "chat-bubble glass-panel",
          isAI ? "bg-secondary" : "bg-primary/10"
        )}
      >
        <p className="text-sm md:text-base leading-relaxed">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;