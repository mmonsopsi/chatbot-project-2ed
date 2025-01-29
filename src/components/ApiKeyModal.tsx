import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface ApiKeyModalProps {
  isOpen: boolean;
  onApiKeySubmit: (apiKey: string) => void;
}

const ApiKeyModal = ({ isOpen, onApiKeySubmit }: ApiKeyModalProps) => {
  const [apiKey, setApiKey] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      toast({
        title: "Erro",
        description: "Por favor, insira uma chave API válida",
        variant: "destructive",
      });
      return;
    }
    onApiKeySubmit(apiKey);
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px] bg-background">
        <DialogHeader>
          <DialogTitle>Bem-vindo ao Chat</DialogTitle>
          <DialogDescription>
            Para começar, insira sua chave API do Deepseek
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Insira sua chave API"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            type="password"
          />
          <Button type="submit" className="w-full">
            Começar
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApiKeyModal;