import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, QrCode, Phone } from 'lucide-react';

export default function WeChatWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const [imgError, setImgError] = useState(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed right-6 bottom-6 z-50 flex items-end justify-end group select-none"
        >
          {/* Close button - appears on hover */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute -top-2 -right-2 w-5 h-5 bg-white text-gray-500 hover:text-gray-900 shadow-md border border-gray-100 rounded-full flex items-center justify-center transition-all z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 cursor-pointer"
            aria-label="Close"
          >
            <X className="w-3 h-3" />
          </button>

          {/* Main Floating Button */}
          <div className="relative w-12 h-12 bg-gradient-to-br from-[#07C160] to-[#06ad56] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#07C160]/30 hover:scale-110 transition-transform cursor-pointer">
            <MessageCircle className="w-6 h-6" />
            
            {/* Ping animation behind */}
            <div className="absolute inset-0 rounded-full border border-[#07C160] animate-ping opacity-20 pointer-events-none" />
          </div>

          {/* Floating pop-out content on hover (simulated QR code panel) */}
          <div className="absolute right-full bottom-0 mb-0 mr-4 w-52 bg-white shadow-2xl rounded-[1.5rem] p-5 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-bottom-right translate-x-4 group-hover:translate-x-0">
            <div className="flex flex-col items-center text-center">
              <div className="w-9 h-9 bg-[#07C160]/10 rounded-full flex items-center justify-center text-[#07C160] mb-2.5">
                <QrCode className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-gray-800 tracking-tight mb-1 text-xs">欢迎扫码咨询</h4>
              <div className="w-full aspect-square bg-zinc-50 rounded-xl border border-zinc-100 p-2 mb-3">
                <div className="w-full h-full border border-dashed border-zinc-200 rounded flex items-center justify-center overflow-hidden bg-white">
                  {!imgError ? (
                    <img
                      src="/wechat-qrcode.jpg"
                      alt="微信二维码"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    /* High fidelity vector fallback in case local file doesn't exist */
                    <div className="flex flex-col items-center justify-center p-2 text-center text-[#07C160]">
                      <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="3" />
                        <path d="M7 7h4v4H7zM13 7h4v4h-4zM7 13h4v4H7z" />
                        <path d="M14 14h1v1h-1zM16 16h1v1h-1zM15 15h1v1h-1zM13 13h1v1h-1zM16 13h1v1h-1zM13 16h1v1h-1z" />
                      </svg>
                      <span className="text-[10px] text-zinc-400 font-bold tracking-tight mt-1">扫码联络郭鑫</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-center text-center w-full bg-zinc-50 py-2.5 px-3 rounded-xl border border-zinc-100">
                <div className="w-7 h-7 bg-[#07C160]/10 rounded-full flex items-center justify-center text-[#07C160] shrink-0 mr-2">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="text-left">
                  <p className="font-mono text-xs font-bold text-gray-800 leading-none">15323411996</p>
                  <p className="font-sans text-[10px] text-gray-400 mt-0.5 leading-none">(微信同号)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
