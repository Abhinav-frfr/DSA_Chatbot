import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './components/ChatMessage';
import { TopicCard } from './components/TopicCard';
import {
  TreeIcon,
  GraphIcon,
  StackIcon,
  LinkedListIcon,
  SortIcon,
  HashIcon,
  BotIcon,
} from './components/DSAIcons';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
}

const SYSTEM_INSTRUCTION = `You are a Data Structure and Algorithm instructor. You will only reply to the problem related to Data Structure and Algorithm. You have to solve query of user in simplest way possible. If user asks any unrelated question then reply him rudely Example: If user asks How are you Reply user: You Dumb Fuck Ask me some sensible questions not these stupid ones, like this message you can reply him anything rudely. Else reply him properly and politely in a decent manner regarding his Data structure and algorithm query.`;

const suggestedTopics = [
  {
    icon: <TreeIcon className="w-full h-full" />,
    title: 'Binary Trees',
    description: 'Learn tree traversals',
    color: 'bg-gradient-to-br from-emerald-500 to-green-600',
    prompt: 'Explain binary tree traversals with examples',
  },
  {
    icon: <GraphIcon className="w-full h-full" />,
    title: 'Graphs',
    description: 'BFS & DFS algorithms',
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    prompt: 'Explain BFS and DFS graph traversal algorithms',
  },
  {
    icon: <StackIcon className="w-full h-full" />,
    title: 'Stacks & Queues',
    description: 'LIFO & FIFO structures',
    color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
    prompt: 'Explain the difference between Stack and Queue with examples',
  },
  {
    icon: <SortIcon className="w-full h-full" />,
    title: 'Sorting',
    description: 'QuickSort, MergeSort',
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    prompt: 'Compare QuickSort and MergeSort algorithms',
  },
  {
    icon: <LinkedListIcon className="w-full h-full" />,
    title: 'Linked Lists',
    description: 'Singly & Doubly linked',
    color: 'bg-gradient-to-br from-pink-500 to-rose-600',
    prompt: 'Explain how to reverse a linked list',
  },
  {
    icon: <HashIcon className="w-full h-full" />,
    title: 'Hash Tables',
    description: 'Hashing & collision',
    color: 'bg-gradient-to-br from-amber-500 to-yellow-600',
    prompt: 'Explain how hash tables work and handle collisions',
  },
];

export function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    if (!apiKey) {
      setShowApiKeyModal(true);
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }],
            },
            contents: [
              {
                parts: [{ text: text.trim() }],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message || 'API Error');
      }

      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response received.';

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `Error: ${error instanceof Error ? error.message : 'Failed to get response. Please check your API key.'}`,
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />
        
        {/* Floating DSA icons */}
        <div className="absolute top-20 right-20 text-white/5 animate-float">
          <TreeIcon className="w-32 h-32" />
        </div>
        <div className="absolute bottom-40 left-20 text-white/5 animate-float" style={{ animationDelay: '2s' }}>
          <GraphIcon className="w-24 h-24" />
        </div>
        <div className="absolute top-1/3 right-1/4 text-white/5 animate-float" style={{ animationDelay: '1s' }}>
          <StackIcon className="w-20 h-20" />
        </div>
      </div>

      {/* API Key Modal */}
      {showApiKeyModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 max-w-md w-full border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Enter API Key</h2>
            <p className="text-gray-300 mb-6">
              Enter your Google Gemini API key to start chatting with the DSA Instructor.
            </p>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Your Gemini API Key"
              className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 mb-4"
            />
            <div className="flex gap-3">
              <button
                onClick={() => setShowApiKeyModal(false)}
                className="flex-1 px-4 py-3 rounded-xl bg-gray-600/50 text-white hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (apiKey.trim()) {
                    setShowApiKeyModal(false);
                  }
                }}
                className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Save Key
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-5xl mx-auto h-screen flex flex-col p-4">
        {/* Header */}
        <header className="flex items-center justify-between py-4 px-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
              <BotIcon className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">DSA Instructor</h1>
              <p className="text-sm text-gray-400">Your AI-powered algorithm tutor</p>
            </div>
          </div>
          <button
            onClick={() => setShowApiKeyModal(true)}
            className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/80 text-sm transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
            {apiKey ? 'Change API Key' : 'Set API Key'}
          </button>
        </header>

        {/* Chat Area */}
        <div className="flex-1 overflow-hidden flex flex-col bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
          {messages.length === 0 ? (
            /* Welcome Screen */
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30">
                <BotIcon className="w-14 h-14 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Welcome to DSA Instructor!</h2>
              <p className="text-gray-400 text-center max-w-lg mb-8">
                I'm your dedicated Data Structures & Algorithms tutor. Ask me anything about DSA topics, and I'll explain them in the simplest way possible!
              </p>

              {/* Topic Cards */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                {suggestedTopics.map((topic, idx) => (
                  <TopicCard
                    key={idx}
                    icon={topic.icon}
                    title={topic.title}
                    description={topic.description}
                    color={topic.color}
                    onClick={() => sendMessage(topic.prompt)}
                  />
                ))}
              </div>
            </div>
          ) : (
            /* Messages */
            <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg.text} isUser={msg.isUser} />
              ))}
              {isLoading && <ChatMessage message="" isUser={false} isLoading />}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t border-white/10">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Data Structures & Algorithms..."
                  rows={1}
                  className="w-full px-5 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all shadow-lg shadow-purple-500/30 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send
              </button>
            </form>
            <p className="text-center text-gray-500 text-xs mt-3">
              Ask DSA questions only • Powered by Gemini AI
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
