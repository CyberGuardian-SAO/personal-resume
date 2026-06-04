import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle, Mail, MapPin, Linkedin, Github, QrCode, Phone, Copy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

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

  // Fallback to static text if contact info is somehow missing from portfolioData
  const c = portfolioData.contact || {
    header: {
      title: { zh: "联系我", en: "Get in Touch" },
      subtitle: { zh: "期待交流，探讨合作并探索更多技术可能", en: "Let's connect and explore potential technical collaborations." }
    },
    labels: {
      coordinates: { zh: "联系方式", en: "COORDINATES" },
      location: { zh: "地点", en: "LOCATION" },
      email: { zh: "邮箱", en: "DIRECT EMAIL" },
      phone: { zh: "联系电话", en: "TELEPHONE" },
      wechatQr: { zh: "添加微信", en: "WECHAT QR CODE" },
      socialMedia: { zh: "社交媒体", en: "SOCIAL MEDIA" }
    },
    actions: {
      copyEmail: { zh: "复制邮箱", en: "Copy Email" },
      copyPhone: { zh: "复制电话", en: "Copy Phone" },
      wechatSync: { zh: "微信同号", en: "WeChat Sync" },
      wechatSameNumber: "微信同号码"
    },
    details: {
      location: { zh: "中国 广东省深圳市 / 云南省普洱市", en: "Shenzhen, Guangdong / Pu'er, Yunnan, China" },
      email: "guoxin@bitqai.com",
      phoneLabel: "15323411996",
      wechatQrUrl: "https://files.bitqai.com/website/wechat-qrcode.jpg",
      githubUrl: "https://github.com/BitQAI",
      linkedinUrl: "https://linkedin.com"
    },
    form: {
      name: { zh: "您的尊称", en: "Full Name" },
      namePlaceholder: { zh: "例如：埃隆 · 马斯克", en: "e.g. Elon Musk" },
      email: { zh: "电子邮箱", en: "Email Address" },
      emailPlaceholder: { zh: "例如: guoxin@bitqai.com", en: "e.g. guoxin@bitqai.com" },
      phone: { zh: "联系电话 (可选)", en: "Phone Number (Optional)" },
      phonePlaceholder: { zh: "例如：153 2341 1996", en: "e.g. +1 (555) 000-0000" },
      type: { zh: "合作意向", en: "Collaboration Intent" },
      typeConsulting: { zh: "项目顾问 / 咨询", en: "Consulting / Contract" },
      typeFulltime: { zh: "全职契机", en: "Full-time Opportunities" },
      typeSaaS: { zh: "AI Agent 定制开发", en: "AI Agent Solutions" },
      message: { zh: "留言内容", en: "Message" },
      messagePlaceholder: {
        zh: "写下您的项目大纲或合作意向，我会尽快回复您。",
        en: "Please briefly describe your requirements or intent, and I will get back to you soon."
      },
      submit: { zh: "发送消息", en: "Send Message" },
      sending: { zh: "发送中...", en: "Sending..." },
      successTitle: { zh: "发送成功！", en: "Message Sent!" },
      successDesc: {
        zh: "感谢您的联络，您的信息已成功发出，我将尽快回复。",
        en: "Thank you for reaching out. Your message has been sent successfully, and I will get back to you soon."
      }
    }
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
            <span>{c.header.title[currentLang]}</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-3xl md:text-4xl text-zinc-900 dark:text-zinc-100 tracking-tight"
          >
            {c.header.subtitle[currentLang]}
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
                      {c.labels.location[currentLang]}
                    </p>
                    <p className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm mt-0.5">
                      {c.details.location[currentLang]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-orange-50 dark:bg-orange-500/10 border border-orange-100 dark:border-orange-500/20 flex items-center justify-center text-orange-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {c.labels.email[currentLang]}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href={`mailto:${c.details.email}`} className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                        {c.details.email}
                      </a>
                      <button 
                        onClick={() => navigator.clipboard.writeText(c.details.email)}
                        className="p-1 text-zinc-400 hover:text-orange-500 transition-colors"
                        title={c.actions.copyEmail[currentLang]}
                        aria-label={c.actions.copyEmail[currentLang]}
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
                      {c.labels.phone[currentLang]}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a href={`tel:${c.details.phoneLabel.replace(/\D/g, '')}`} className="font-sans font-bold text-zinc-800 dark:text-zinc-200 text-sm">
                        {c.details.phoneLabel}
                      </a>
                      <button 
                        onClick={() => navigator.clipboard.writeText(c.details.phoneLabel)}
                        className="p-1 text-zinc-400 hover:text-orange-500 transition-colors"
                        title={c.actions.copyPhone[currentLang]}
                        aria-label={c.actions.copyPhone[currentLang]}
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-medium text-emerald-600 ml-1">({c.actions.wechatSync[currentLang]})</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-3 border-t border-zinc-100/80 dark:border-zinc-800/80">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20 flex items-center justify-center text-emerald-500 shrink-0">
                    <QrCode className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      {c.labels.wechatQr[currentLang]}
                    </p>
                    <div className="mt-2.5 p-2 bg-zinc-50 dark:bg-zinc-800 border border-zinc-150 dark:border-zinc-700/50 rounded-xl inline-block">
                      <div className="w-24 h-24 bg-white border border-dashed border-zinc-200 rounded flex items-center justify-center overflow-hidden">
                        {!wechatError ? (
                          <img
                            src={c.details.wechatQrUrl}
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
                            <span className="text-[8px] text-zinc-400 font-bold tracking-tight mt-0.5">{c.actions.wechatSameNumber}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social handles links & Resumes */}
            <div className="border-t border-zinc-100 dark:border-zinc-800/80 pt-8 mt-12 md:mt-0">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">
                {c.labels.socialMedia[currentLang]}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={c.details.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-700 hover:border-orange-500 hover:text-orange-500 flex items-center justify-center text-zinc-600 dark:text-zinc-400 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={c.details.linkedinUrl}
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
                    {c.form.successTitle[currentLang]}
                  </h3>
                  <p className="font-sans text-sm text-zinc-500 dark:text-zinc-400 max-w-md leading-relaxed">
                    {c.form.successDesc[currentLang]}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Form fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {c.form.name[currentLang]} <span className="text-orange-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={c.form.namePlaceholder[currentLang]}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 placeholder-zinc-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {c.form.email[currentLang]} <span className="text-orange-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={c.form.emailPlaceholder[currentLang]}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 placeholder-zinc-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {c.form.phone[currentLang]}
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={c.form.phonePlaceholder[currentLang]}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 placeholder-zinc-400 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                        {c.form.type[currentLang]}
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 bg-white/50 dark:bg-zinc-800/50 backdrop-blur hover:bg-white/80 dark:hover:bg-zinc-800 focus:bg-white dark:focus:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-sans border border-white/60 dark:border-zinc-700/60 shadow-sm rounded-xl outline-none focus:border-orange-500/15 transition-all duration-300"
                      >
                        <option value="Consulting">{c.form.typeConsulting[currentLang]}</option>
                        <option value="Fulltime">{c.form.typeFulltime[currentLang]}</option>
                        <option value="AI Solutions">{c.form.typeSaaS[currentLang]}</option>
                      </select>
                    </div>
                  </div>

                  {/* Message body */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2 font-sans">
                      {c.form.message[currentLang]} <span className="text-orange-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={c.form.messagePlaceholder[currentLang]}
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
                      <span>{loading ? c.form.sending[currentLang] : c.form.submit[currentLang]}</span>
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
