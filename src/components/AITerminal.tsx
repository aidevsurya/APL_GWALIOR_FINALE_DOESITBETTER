import React, { useState, useRef, useEffect } from "react";
import { Terminal, Send, X, ChevronUp, Bot, Sparkles, Database } from "lucide-react";
import MarkdownRenderer from "./MarkdownRenderer";

interface ChatMessage {
  sender: "user" | "copilot";
  text: string;
  isWarning?: boolean;
}

export default function AITerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "copilot",
      text: "👋 **Co-Founder Translation Node Active.** Ask me how to translate our software commits, draft a cold sales pitch, or outline a tech value briefing for prospects!"
    }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

  const handleSend = async (textToSend: string) => {
    const currentMsg = textToSend.trim();
    if (!currentMsg) return;

    setMessages(prev => [...prev, { sender: "user", text: currentMsg }]);
    setQuery("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentMsg })
      });

      if (!response.ok) {
        throw new Error("Terminal connection disrupted.");
      }

      const data = await response.json();
      setMessages(prev => [...prev, { 
        sender: "copilot", 
        text: data.response,
        isWarning: !!data.warning 
      }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { 
        sender: "copilot", 
        text: `⚠️ **System Error:** ${err.message}. Please verify the Express backend state.` 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const runPreset = (text: string) => {
    handleSend(text);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Minimized Bubble */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-5 py-3.5 bg-[#161B26] hover:bg-[#1a2130] border border-[#00E5FF]/40 text-[#00E5FF] font-mono text-xs font-bold rounded-full shadow-lg shadow-cyan-500/10 cursor-pointer group transition-all"
          id="btn-open-terminal"
        >
          <Sparkles className="w-4 h-4 text-[#00E5FF] animate-spin" style={{ animationDuration: "3s" }} />
          <span>CO-PILOT AI TERMINAL</span>
          <ChevronUp className="w-4 h-4 text-gray-500 group-hover:text-cyan-400" />
        </button>
      )}

      {/* Expanded Terminal */}
      {isOpen && (
        <div className="w-[380px] sm:w-[420px] h-[500px] bg-[#0B0F19] border-2 border-[#00E5FF]/80 rounded-xl shadow-2xl flex flex-col overflow-hidden font-mono text-xs">
          {/* Header */}
          <div className="bg-[#161B26] border-b border-[#242C3D] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-ping" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] absolute" />
              <span className="font-bold text-gray-200">AI CO-PILOT TERMINAL v1.0.4</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-200 p-1 rounded hover:bg-gray-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#0B0F19]">
            {messages.map((m, idx) => (
              <div key={idx} className={`space-y-1 ${m.sender === "user" ? "text-right" : "text-left"}`}>
                <div className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                  {m.sender === "user" ? "👤 TECHNICAL_COFOUNDER" : "🤖 TRANSLATOR_AGENT"}
                </div>
                <div
                  className={`inline-block max-w-[90%] p-3 rounded-lg leading-relaxed text-[11px] select-all cursor-text whitespace-pre-wrap ${
                    m.sender === "user"
                      ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20"
                      : "bg-[#161B26]/80 text-gray-200 border border-[#242C3D]"
                  }`}
                >
                  <MarkdownRenderer text={m.text} />
                  
                  {m.isWarning && (
                    <div className="mt-2 text-[10px] text-yellow-400 bg-yellow-400/5 p-1 rounded border border-yellow-400/20">
                      💡 Attach your Gemini API Key in Settings to enable customized live neural translations!
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex items-center gap-2 text-[#00E5FF] text-[10px] font-bold uppercase py-1">
                <Bot className="w-4 h-4 animate-bounce" />
                <span>AI is translating code indices...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick presets */}
          <div className="p-2 bg-[#161B26]/40 border-t border-[#242C3D] flex flex-wrap gap-1.5">
            <button
              onClick={() => runPreset("Explain how our core-gateway speedups improve sales outreach hooks.")}
              className="px-2 py-0.5 bg-[#161B26] hover:bg-gray-800 border border-[#242C3D] text-[10px] text-gray-400 hover:text-white rounded transition-colors"
            >
              🚀 Pitch Gateway Speed
            </button>
            <button
              onClick={() => runPreset("Help me draft a cold email outline capturing the stripe retry mechanism.")}
              className="px-2 py-0.5 bg-[#161B26] hover:bg-gray-800 border border-[#242C3D] text-[10px] text-gray-400 hover:text-white rounded transition-colors"
            >
              💳 Stripe Retries Post
            </button>
            <button
              onClick={() => runPreset("Suggest a response to 'Why is your product better than standard cache gates?'")}
              className="px-2 py-0.5 bg-[#161B26] hover:bg-gray-800 border border-[#242C3D] text-[10px] text-gray-400 hover:text-white rounded transition-colors"
            >
              ❓ Handling competitor questions
            </button>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#161B26] border-t border-[#242C3D] flex items-center gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(query)}
              disabled={loading}
              placeholder="Ask AI Co-Pilot something..."
              className="flex-1 bg-[#0B0F19] border border-[#242C3D] text-white rounded px-3 py-1.5 focus:outline-none focus:border-[#00E5FF] placeholder-gray-600 disabled:opacity-50"
            />
            <button
              onClick={() => handleSend(query)}
              disabled={loading || !query.trim()}
              className="p-1.5 bg-[#00E5FF]/20 hover:bg-[#00E5FF]/30 border border-[#00E5FF]/50 text-[#00E5FF] rounded transition-colors disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
