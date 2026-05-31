import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Bot, User, Sparkles, AlertCircle, RefreshCw } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

interface AIChatbotProps {
  currentLang: 'zh' | 'en';
}

export default function AIChatbot({ currentLang }: AIChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      sender: 'assistant',
      text: currentLang === 'zh'
        ? "你好！我是郭鑫（Bill）的 AI 数字化身。我熟知他的所有项目经验、技能广度和架构偏好。你可以问我任何关于他的问题，例如：“他擅长哪些微服务架构？”或者“为什么选择他作为全栈合作伙伴？”"
        : "Hello! I am Bill Guo's AI Twin. I have full knowledge of his project credentials, codebases, development processes, and delivery standards. Feel free to ask me anything about him, such as 'What AI agents has he built?' or 'Which frontend stack does he prefer?'",
      timestamp: new Date(),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const t = {
    title: currentLang === 'zh' ? 'AI 数字化分身' : 'Talk with Bill\'s Digital Twin',
    subtitle: currentLang === 'zh' ? '基于 Gemini 强力驱动的候选人智囊层，随时解答您的咨询' : 'Ask anything regarding skills, project designs, availability and processes',
    placeholder: currentLang === 'zh' ? '在此发送您的提问...' : 'Ask his AI assistant...',
    assistantTitle: currentLang === 'zh' ? 'Bill Guo (AI 分身)' : 'Bill\'s AI Twin',
    assistantStatus: currentLang === 'zh' ? '高能就绪' : 'Fully Active',
    errorDesc: currentLang === 'zh' ? '服务请求遇到了短暂波折。请点击重试。' : 'Encountered a slight server error. Please retry.',
  };

  const suggestionPills = currentLang === 'zh' ? [
    "郭鑫擅长哪些端到端技术架构与AI应用方案？",
    "他在智慧宠物门店(ERP)项目中取得了什么成果？",
    "目前他倾向于寻找什么样的合作或职业机会？",
    "他多元的斜杠经历(导游/旅居)对他产品思维有何影响？"
  ] : [
    "What core tech stacks and AI agents does Guoxin excel in?",
    "Explain his role and achievements in the Pet SaaS ERP.",
    "What tech projects or engineering roles is he seeking?",
    "How does his diverse background shape his product mindset?"
  ];

  // NOTE: Auto-scroll effect removed to prevent forced page movement
  /*
  useEffect(() => {
    if (messages.length > 1) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);
  */

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    setErrorMsg(null);
    const userMessage: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputVal('');
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: textToSend,
          lang: currentLang,
          // Send chat history back to maintain continuous conversation context
          history: messages.map(msg => ({
            role: msg.sender === 'user' ? 'user' : 'model',
            parts: [{ text: msg.text }]
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('API Request Failed');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: `ai-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || (currentLang === 'zh' ? "抱歉，我刚刚在构思更深奥的问题，请再说一遍？" : "Apologies, I stumbled on that concept. Could you repeat?"),
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      console.error("Error communicating with AI Proxy:", err);
      setErrorMsg(t.errorDesc);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-24 bg-white border-b border-orange-500/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest mb-3"
          >
            <Bot className="w-4 h-4" />
            <span>智能问答</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-900 tracking-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-sm text-zinc-400 mt-2"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Chat Widget Wrapper */}
        <div className="max-w-4xl mx-auto bg-zinc-50 border border-zinc-200/60 rounded-3xl overflow-hidden shadow-sm flex flex-col h-[580px] hover:border-orange-500/10 transition-all duration-300">
          {/* Header Panel */}
          <div className="px-6 py-4 bg-white border-b border-zinc-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 text-orange-600 relative shrink-0">
                <Bot className="w-5 h-5 animate-pulse" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <h3 className="font-sans font-bold text-sm text-zinc-800">
                  {t.assistantTitle}
                </h3>
                <span className="text-[10px] uppercase font-extrabold text-emerald-500 tracking-wider">
                  {t.assistantStatus}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[10px] bg-orange-50 text-orange-600 font-extrabold tracking-widest border border-orange-200/30 px-2 rounded-full py-0.5">
                GEMINI 3.5 FLASH
              </span>
            </div>
          </div>

          {/* Dialogue Message lists */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 max-w-[85%] ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                }`}
              >
                {/* Visual Avatar */}
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border select-none ${
                    msg.sender === 'user'
                      ? 'bg-zinc-800 border-zinc-700 text-white'
                      : 'bg-orange-500 border-orange-400 text-white'
                  }`}
                >
                  {msg.sender === 'user' ? (
                    <User className="w-4 h-4" />
                  ) : (
                    <Bot className="w-4 h-4" />
                  )}
                </div>

                {/* Content Bubble */}
                <div
                  className={`p-4 rounded-3xl text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-zinc-800 text-white rounded-tr-none font-medium'
                      : 'bg-white border border-zinc-200/50 text-zinc-700 rounded-tl-none font-normal shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line font-sans">{msg.text}</p>
                </div>
              </div>
            ))}

            {/* Waiting Spinner */}
            {loading && (
              <div className="flex gap-3 max-w-[85%] mr-auto items-center">
                <div className="w-8 h-8 rounded-full bg-orange-500 border border-orange-400 text-white flex items-center justify-center shrink-0 animate-bounce">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="px-5 py-3.5 bg-white border border-zinc-100 rounded-3xl rounded-tl-none shadow-sm flex items-center gap-2">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce delay-75" />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce delay-150" />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-bounce delay-300" />
                  </div>
                </div>
              </div>
            )}

            {/* Error alerts */}
            {errorMsg && (
              <div className="flex gap-2 max-w-[80%] mx-auto bg-red-50 text-red-600 border border-red-200 px-4 py-3 rounded-2xl text-xs font-semibold items-center justify-between">
                <div className="flex gap-2 items-center">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMsg}</span>
                </div>
                <button
                  onClick={() => {
                    const lastUserMsg = [...messages].reverse().find(m => m.sender === 'user');
                    if (lastUserMsg) handleSendMessage(lastUserMsg.text);
                  }}
                  className="p-1.5 bg-red-100 hover:bg-red-200 rounded-full transition-colors focus:outline-none"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-6 py-2.5 bg-white border-t border-zinc-100 flex flex-wrap gap-2 items-center select-none overflow-x-auto whitespace-nowrap">
            {suggestionPills.map((p) => (
              <button
                key={p}
                onClick={() => handleSendMessage(p)}
                className="clickable px-3.5 py-1.5 bg-zinc-50 border border-zinc-200/50 hover:bg-orange-50 hover:border-orange-500/20 text-zinc-600 hover:text-orange-500 rounded-full font-sans text-xs font-semibold shrink-0 cursor-pointer transition-all duration-300 focus:outline-none"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Core Input box */}
          <div className="px-6 py-4 bg-white border-t border-zinc-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputVal);
              }}
              className="flex items-center gap-3 relative"
            >
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder={t.placeholder}
                className="w-full pl-5 pr-14 py-3.5 bg-zinc-50 hover:bg-zinc-100/40 focus:bg-white text-zinc-800 placeholder-zinc-450 border border-zinc-200 rounded-2xl outline-none focus:border-orange-500 transition-all duration-300 font-sans font-medium text-sm text-shadow-none shadow-inner"
              />
              <button
                type="submit"
                disabled={!inputVal.trim() || loading}
                className={`absolute right-2 px-3 py-2 rounded-xl text-white outline-none focus:outline-none transition-all duration-305 ${
                  inputVal.trim() && !loading
                    ? 'bg-orange-500 hover:bg-orange-600 cursor-pointer active:scale-95'
                    : 'bg-zinc-200 text-zinc-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
