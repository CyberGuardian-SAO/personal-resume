import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Mail, MapPin, Linkedin, Github, QrCode, Phone, Copy } from 'lucide-react';

interface ContactProps {
  currentLang: 'zh' | 'en';
}

export default function Contact({ currentLang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Consulting',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wechatError, setWechatError] = useState(false);

  const t = {
    title: currentLang === 'zh' ? '联系我' : 'Get in Touch',
    subtitle: currentLang === 'zh' ? '期待交流，探讨合作并探索更多技术可能' : 'Let\'s connect and explore potential technical collaborations.',
    name: currentLang === 'zh' ? '您的尊称' : 'Full Name',
    email: currentLang === 'zh' ? '电子邮箱' : 'Email Address',
    phone: currentLang === 'zh' ? '联系电话 (可选)' : 'Phone Number (Optional)',
    type: currentLang === 'zh' ? '合作意向' : 'Collaboration Intent',
    typeConsulting: currentLang === 'zh' ? '项目顾问 / 咨询' : 'Consulting / Contract',
    typeFulltime: currentLang === 'zh' ? '全职契机' : 'Full-time Opportunities',
    typeSaaS: currentLang === 'zh' ? 'AI Agent 定制开发' : 'AI Agent Solutions',
    message: currentLang === 'zh' ? '留言内容' : 'Message',
    placeholderMsg: currentLang === 'zh' ? '写下您的项目大纲或合作意向，我会尽快回复您。' : 'Please briefly describe your requirements or intent, and I will get back to you soon.',
    submit: currentLang === 'zh' ? '发送消息' : 'Send Message',
    sending: currentLang === 'zh' ? '发送中...' : 'Sending...',
    successTitle: currentLang === 'zh' ? '发送成功！' : 'Message Sent!',
    successDesc: currentLang === 'zh' ? '感谢您的联络，您的信息已成功发出，我将尽快回复。' : 'Thank you for reaching out. Your message has been sent successfully, and I will get back to you soon.',
    location: currentLang === 'zh' ? '中国 广东省深圳市 / 云南省普洱市' : 'Shenzhen, Guangdong / Pu\'er, Yunnan, China'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('[Contact Submission Response]', data);

      // Save locally too for offline resilience
      const records = JSON.parse(localStorage.getItem('messages_log') || '[]');
      records.push({
        id: Date.now(),
        ...formData,
        date: new Date().toISOString(),
        emailSent: data.emailSent || false,
      });
      localStorage.setItem('messages_log', JSON.stringify(records));

    } catch (err) {
      console.error('[Contact Submit Err]', err);
      // Fallback log of user data
      const records = JSON.parse(localStorage.getItem('messages_log') || '[]');
      records.push({
        id: Date.now(),
        ...formData,
        date: new Date().toISOString(),
        emailSent: false,
      });
      localStorage.setItem('messages_log', JSON.stringify(records));
    } finally {
      setLoading(false);
      setSent(true);
      setFormData({ name: '', email: '', phone: '', subject: 'Consulting', message: '' });
      setTimeout(() => setSent(false), 8000);
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-white/20 select-none relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-xs font-bold text-orange-500 uppercase tracking-widest mb-3"
          >
            <Mail className="w-4 h-4" />
            <span>{t.title}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight"
          >
            {t.subtitle}
          </motion.h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Details Info Panel (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/60 dark:border-zinc-800/60 shadow-lg flex flex-col justify-between"
          >
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-zinc-400 block mb-6 uppercase">
                {currentLang === 'zh' ? '联系方式' : 'COORDINATES'}
              </span>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {currentLang === 'zh' ? '地点' : 'LOCATION'}
                    </p>
                    <p className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm mt-0.5">
                      {t.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {currentLang === 'zh' ? '邮箱' : 'DIRECT EMAIL'}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href="mailto:guoxin@bitqai.com" className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                        guoxin@bitqai.com
                      </a>
                      <button 
                        onClick={() => navigator.clipboard.writeText('guoxin@bitqai.com')}
                        className="p-1 text-zinc-400 hover:text-orange-500 transition-colors"
                        title={currentLang === 'zh' ? '复制邮箱' : 'Copy Email'}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {currentLang === 'zh' ? '联系电话' : 'TELEPHONE'}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href="tel:15323411996" className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm">
                        15323411996
                      </a>
                      <button 
                        onClick={() => navigator.clipboard.writeText('15323411996')}
                        className="p-1 text-zinc-400 hover:text-orange-500 transition-colors"
                        title={currentLang === 'zh' ? '复制电话' : 'Copy Phone'}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-medium text-emerald-600 ml-1">({currentLang === 'zh' ? '微信同号' : 'WeChat Sync'})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-zinc-100/80 dark:border-zinc-800/80">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {currentLang === 'zh' ? '添加微信' : 'WECHAT QR CODE'}
                    </p>
                    <div className="mt-2.5 p-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-150 dark:border-zinc-700/50 rounded-xl inline-block">
                      <div className="w-24 h-24 bg-white border border-dashed border-zinc-200 rounded flex items-center justify-center overflow-hidden">
                        {!wechatError ? (
                          <img
                            src="https://files.bitqai.com/website/wechat-qrcode.jpg"
                            alt="微信二维码"
                            referrerPolicy="no-referrer"
                            onError={() => setWechatError(true)}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center text-center text-emerald-500 p-1">
                            <svg className="w-11 h-11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <rect x="2" y="2" width="20" height="20" rx="3" />
                              <path d="M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7z" />
                              <path d="M14 14h1v1h-1z" />
                            </svg>
                            <span className="text-[8px] text-zinc-400 font-bold tracking-tight mt-0.5">微信同号码</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles links */}
            <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-8 mt-12 md:mt-0">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
                {currentLang === 'zh' ? '社交媒体' : 'COMMUNITY NETWORKS'}
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/BitQAI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Input Form (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-white/60 dark:border-zinc-800/60 shadow-lg"
          >
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center justify-center h-full"
                >
                  <CheckCircle className="w-14 h-14 text-emerald-500 mb-6 shrink-0" />
                  <h3 className="font-sans font-extrabold text-xl text-zinc-900 dark:text-zinc-100 mb-3">
                    {t.successTitle}
                  </h3>
                  <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                    {t.successDesc}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {t.name} <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={currentLang === 'zh' ? '例如：埃隆 · 马斯克' : 'e.g. Elon Musk'}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 placeholder-zinc-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {t.email} <span className="text-orange-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={currentLang === 'zh' ? '例如: guoxin@bitqai.com' : 'e.g. guoxin@bitqai.com'}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 placeholder-zinc-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {t.phone}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={currentLang === 'zh' ? '例如：153 2341 1996' : 'e.g. +1 (555) 000-0000'}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 placeholder-zinc-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {t.type}
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500/15 transition-all duration-300"
                      >
                        <option value="Consulting">{t.typeConsulting}</option>
                        <option value="Fulltime">{t.typeFulltime}</option>
                        <option value="AI Solutions">{t.typeSaaS}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div>
                    <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                      {t.message} <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.placeholderMsg}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 transition-all duration-300 resize-none leading-relaxed text-sm placeholder-zinc-400"
                    />
                  </div>

                  {/* Submission dispatch */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-zinc-900 hover:bg-orange-500 font-sans font-bold text-white text-sm transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
                    >
                      <span>{loading ? t.sending : t.submit}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
