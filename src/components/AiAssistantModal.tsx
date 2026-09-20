import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, X, Send, Bot, User, Loader2 } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({ isOpen, onClose, darkMode = true }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Hello! I am Umesh Kotwal's interactive AI assistant. Ask me anything regarding Umesh's microservice architecture, BullMQ queue strategies, Stripe Connect payouts, or production project history!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const SUGGESTED_QUESTIONS = [
    "Summarize Umesh's Stripe Connect payouts experience.",
    "How does Umesh achieve zero data loss with BullMQ DLQ?",
    "Tell me about Umesh's work for Dubai enterprise clients.",
    "Is Umesh available for full-time or contract roles?"
  ];

  const handleSendMessage = async (promptToSend?: string) => {
    const query = promptToSend || inputPrompt;
    if (!query.trim() || isLoading) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages((prev) => [...prev, { sender: 'user', text: query, time: userTime }]);
    if (!promptToSend) setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: query }),
      });

      const data = await response.json();
      const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: data.answer || "Umesh Kotwal is a Senior Full Stack Engineer with 2+ years of production experience in microservices, Node.js, Next.js, Redis, and Stripe Connect.",
          time: aiTime
        }
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: 'ai',
          text: "Umesh Kotwal is a Full Stack Developer specializing in Node.js microservices, Next.js, Redis caching, and Stripe payments. Feel free to contact him directly at umeshkotwal7@gmail.com!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className={`relative w-full max-w-2xl border rounded-3xl shadow-2xl flex flex-col h-[560px] overflow-hidden ${
          darkMode ? 'bg-zinc-950 border-white/[0.1] text-zinc-100' : 'bg-white border-black/[0.08] text-zinc-900'
        }`}
      >
        {/* Header */}
        <div className={`px-6 py-4 border-b flex items-center justify-between ${
          darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-zinc-50 border-black/[0.06]'
        }`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl border ${
              darkMode ? 'bg-zinc-800 border-white/[0.08] text-zinc-200' : 'bg-zinc-200 border-black/[0.08] text-zinc-900'
            }`}>
              <Sparkles className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <h3 className={`text-sm font-bold tracking-tight flex items-center gap-2 ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
                AI Architecture Assistant
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                  darkMode ? 'text-zinc-400 bg-white/[0.04] border-white/[0.08]' : 'text-zinc-600 bg-black/[0.04] border-black/[0.08]'
                }`}>
                  Gemini Flash 3.6
                </span>
              </h3>
              <p className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Interactive resume & systems knowledge engine</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-full border transition-colors ${
              darkMode ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border-white/[0.08]' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600 border-black/[0.06]'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Chat Thread */}
        <div className={`flex-1 p-5 overflow-y-auto space-y-3 font-sans text-xs ${
          darkMode ? 'bg-zinc-950' : 'bg-zinc-50'
        }`}>
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className={`p-2 rounded-xl border shrink-0 ${
                  darkMode ? 'bg-zinc-900 border-white/[0.08] text-zinc-300' : 'bg-zinc-200 border-black/[0.06] text-zinc-800'
                }`}>
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`p-3.5 rounded-2xl max-w-[82%] space-y-1 ${
                  msg.sender === 'user'
                    ? darkMode
                      ? 'bg-white text-zinc-950 font-medium'
                      : 'bg-zinc-950 text-white font-medium'
                    : darkMode
                    ? 'bg-zinc-900/70 border border-white/[0.08] text-zinc-300'
                    : 'bg-white border border-black/[0.06] text-zinc-800 shadow-xs'
                }`}
              >
                <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                <div className={`text-[9px] font-mono ${msg.sender === 'user' ? (darkMode ? 'text-zinc-600' : 'text-zinc-400') : darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {msg.time}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className={`p-2 rounded-xl border shrink-0 ${
                  darkMode ? 'bg-zinc-800 border-white/[0.08] text-zinc-200' : 'bg-zinc-900 text-white border-black'
                }`}>
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs p-2">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
              <span>Analyzing knowledge base...</span>
            </div>
          )}
        </div>

        {/* Suggested Prompts */}
        <div className={`p-3 border-t flex items-center gap-2 overflow-x-auto text-[11px] font-mono ${
          darkMode ? 'bg-zinc-900/60 border-white/[0.06]' : 'bg-zinc-100/80 border-black/[0.06]'
        }`}>
          <span className={`font-semibold shrink-0 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Try:</span>
          {SUGGESTED_QUESTIONS.map((q, qIdx) => (
            <button
              key={qIdx}
              onClick={() => handleSendMessage(q)}
              className={`px-3 py-1 rounded-full border whitespace-nowrap transition-colors shrink-0 ${
                darkMode
                  ? 'bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border-white/[0.08]'
                  : 'bg-white hover:bg-zinc-50 text-zinc-800 border-black/[0.08] shadow-2xs'
              }`}
            >
              {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className={`p-3.5 border-t flex items-center gap-2 ${
            darkMode ? 'bg-zinc-950 border-white/[0.06]' : 'bg-white border-black/[0.06]'
          }`}
        >
          <input
            type="text"
            value={inputPrompt}
            onChange={(e) => setInputPrompt(e.target.value)}
            placeholder="Ask about Umesh's backend architecture, projects, or credentials..."
            className={`flex-1 rounded-full px-4 py-2.5 text-xs focus:outline-none border transition-colors ${
              darkMode
                ? 'bg-zinc-900/70 border-white/[0.08] text-zinc-200 placeholder-zinc-500 focus:border-white/30'
                : 'bg-zinc-50 border-black/[0.08] text-zinc-900 placeholder-zinc-400 focus:border-black/30'
            }`}
          />
          <button
            type="submit"
            disabled={isLoading || !inputPrompt.trim()}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold transition-all disabled:opacity-40 flex items-center gap-1.5 ${
              darkMode
                ? 'bg-white text-zinc-950 hover:bg-zinc-200'
                : 'bg-zinc-950 text-white hover:bg-zinc-800'
            }`}
          >
            <span>Send</span>
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

