import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, X, Send, Bot, User, Loader2, Copy, Check } from 'lucide-react';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
  initialQuestion?: string;
}

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
  time: string;
}

// Lightweight, resilient markdown parser for AI responses
const FormattedMessage: React.FC<{ content: string; darkMode: boolean }> = ({ content, darkMode }) => {
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);

  const handleCopyCode = (code: string, idx: number) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  // Split content by code blocks ```...```
  const parts = content.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2 text-xs leading-relaxed">
      {parts.map((part, partIdx) => {
        if (part.startsWith('```') && part.endsWith('```')) {
          // Extract code block
          const lines = part.slice(3, -3).trim().split('\n');
          const firstLine = lines[0].trim();
          const hasLang = /^[a-zA-Z0-9_-]+$/.test(firstLine);
          const lang = hasLang ? firstLine : '';
          const code = (hasLang ? lines.slice(1) : lines).join('\n');

          return (
            <div
              key={partIdx}
              className={`my-2 rounded-xl overflow-hidden border text-[11px] font-mono ${
                darkMode ? 'bg-zinc-900/90 border-white/[0.1]' : 'bg-zinc-900 border-black/[0.1] text-zinc-100'
              }`}
            >
              <div className="flex items-center justify-between px-3 py-1.5 bg-white/[0.05] border-b border-white/[0.06] text-[10px] text-zinc-400">
                <span>{lang || 'code'}</span>
                <button
                  onClick={() => handleCopyCode(code, partIdx)}
                  className="flex items-center gap-1 hover:text-white transition-colors"
                >
                  {copiedCodeIdx === partIdx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <pre className="p-3 overflow-x-auto text-zinc-200">
                <code>{code}</code>
              </pre>
            </div>
          );
        }

        // Render normal text with formatting (headers, bold, lists, links)
        const lines = part.split('\n');
        return (
          <div key={partIdx} className="space-y-1">
            {lines.map((line, lineIdx) => {
              const trimmed = line.trim();
              if (!trimmed) return <div key={lineIdx} className="h-1" />;

              // Headers: ### or ## or #
              if (trimmed.startsWith('### ')) {
                return (
                  <h4 key={lineIdx} className="font-bold text-sm mt-2 mb-1 text-emerald-500">
                    {trimmed.replace(/^###\s+/, '')}
                  </h4>
                );
              }
              if (trimmed.startsWith('## ')) {
                return (
                  <h3 key={lineIdx} className="font-bold text-base mt-2 mb-1">
                    {trimmed.replace(/^##\s+/, '')}
                  </h3>
                );
              }

              // Divider
              if (trimmed === '---') {
                return <hr key={lineIdx} className={`my-2 border-t ${darkMode ? 'border-white/[0.08]' : 'border-black/[0.08]'}`} />;
              }

              // Bullet points
              const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ');
              const isNumbered = /^\d+\.\s/.test(trimmed);
              const textContent = isBullet ? trimmed.slice(2) : isNumbered ? trimmed.replace(/^\d+\.\s+/, '') : line;

              // Format inline bold (**text**) and code (`text`)
              const formattedInline = renderInlineFormatted(textContent, darkMode);

              if (isBullet) {
                return (
                  <div key={lineIdx} className="flex items-start gap-2 pl-2">
                    <span className="text-emerald-500 mt-1 shrink-0">•</span>
                    <span className="flex-1">{formattedInline}</span>
                  </div>
                );
              }

              if (isNumbered) {
                const matchNum = trimmed.match(/^(\d+)\./);
                const num = matchNum ? matchNum[1] : '1';
                return (
                  <div key={lineIdx} className="flex items-start gap-2 pl-2">
                    <span className="font-mono text-emerald-500 font-semibold shrink-0">{num}.</span>
                    <span className="flex-1">{formattedInline}</span>
                  </div>
                );
              }

              return (
                <p key={lineIdx} className="leading-relaxed">
                  {formattedInline}
                </p>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

// Helper for inline markdown: **bold**, `code`, and [links](url)
function renderInlineFormatted(text: string, darkMode: boolean): React.ReactNode[] {
  // Regex to split by bold, inline code, and markdown links
  const regex = /(\*\*.*?\*\*|`.*?`|\[.*?\]\(.*?\))/g;
  const tokens = text.split(regex);

  return tokens.map((token, i) => {
    if (token.startsWith('**') && token.endsWith('**')) {
      return (
        <strong key={i} className={`font-semibold ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
          {token.slice(2, -2)}
        </strong>
      );
    }
    if (token.startsWith('`') && token.endsWith('`')) {
      return (
        <code
          key={i}
          className={`px-1.5 py-0.5 rounded text-[11px] font-mono ${
            darkMode ? 'bg-zinc-800 text-emerald-400 border border-white/[0.08]' : 'bg-zinc-200 text-emerald-700 border border-black/[0.06]'
          }`}
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    const linkMatch = token.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="text-emerald-500 hover:underline font-medium"
        >
          {linkMatch[1]}
        </a>
      );
    }
    return token;
  });
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose,
  darkMode = true,
  initialQuestion
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'ai',
      text: "Hello! I am Umesh Kotwal's interactive AI assistant. Ask me anything regarding Umesh's microservice architecture, BullMQ queue strategies, Stripe Connect payouts, or production project history!",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const initializedQuestionRef = useRef<string | null>(null);

  const SUGGESTED_QUESTIONS = [
    "Summarize Umesh's Stripe Connect payouts experience.",
    "How does Umesh achieve zero data loss with BullMQ DLQ?",
    "Tell me about Umesh's work for Dubai enterprise clients.",
    "Is Umesh available for full-time or contract roles?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  useEffect(() => {
    if (isOpen && initialQuestion && initializedQuestionRef.current !== initialQuestion) {
      initializedQuestionRef.current = initialQuestion;
      handleSendMessage(initialQuestion);
    }
  }, [isOpen, initialQuestion]);

  const handleSendMessage = async (promptToSend?: string) => {
    const query = promptToSend || inputPrompt;
    if (!query.trim() || isLoading) return;

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMessages: ChatMessage[] = [...messages, { sender: 'user', text: query, time: userTime }];
    setMessages(newMessages);
    if (!promptToSend) setInputPrompt('');
    setIsLoading(true);

    try {
      // Send conversation history to support multi-turn conversational context
      const historyPayload = messages.slice(-10).map((m) => ({
        sender: m.sender,
        text: m.text,
      }));

      const response = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: query, history: historyPayload }),
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
          text: "Umesh Kotwal is a Full Stack Developer specializing in Node.js microservices, Next.js, Redis caching, and Stripe payments. Feel free to contact him directly at umeshkotwal658@gmail.com!",
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
        className={`relative w-full max-w-2xl border rounded-3xl shadow-2xl flex flex-col h-[580px] overflow-hidden ${
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
                  darkMode ? 'text-emerald-400 bg-emerald-500/[0.08] border-emerald-500/20' : 'text-emerald-700 bg-emerald-50 border-emerald-200'
                }`}>
                  Gemini Flash AI
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
                className={`p-3.5 rounded-2xl max-w-[85%] space-y-1.5 ${
                  msg.sender === 'user'
                    ? darkMode
                      ? 'bg-white text-zinc-950 font-medium'
                      : 'bg-zinc-950 text-white font-medium'
                    : darkMode
                    ? 'bg-zinc-900/70 border border-white/[0.08] text-zinc-300'
                    : 'bg-white border border-black/[0.06] text-zinc-800 shadow-xs'
                }`}
              >
                {msg.sender === 'ai' ? (
                  <FormattedMessage content={msg.text} darkMode={darkMode} />
                ) : (
                  <p className="leading-relaxed whitespace-pre-line">{msg.text}</p>
                )}
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
              <span>Thinking & formulating answer...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
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


