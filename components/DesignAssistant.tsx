
import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, Sparkles } from 'lucide-react';
import { getDesignAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const DesignAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hello! I'm Aditya's AI Design Assistant. Ask me anything about 3D workflows, software, or brainstorming your next big project!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await getDesignAdvice(messages, input);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="glass rounded-3xl p-6 flex flex-col h-[500px] shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <Sparkles className="text-indigo-500 w-5 h-5 animate-pulse" />
      </div>
      <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start max-w-[85%] space-x-2 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-indigo-600' : 'bg-gray-800'}`}>
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-indigo-600 text-white' : 'bg-gray-800 text-gray-200'}`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-800 p-3 rounded-2xl text-sm text-gray-400 animate-pulse">
              Aditya's neural net is thinking...
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <div className="mt-4 relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about Aditya's design secrets..."
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all placeholder:text-gray-500"
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-indigo-500 hover:text-indigo-400 disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
};

export default DesignAssistant;
