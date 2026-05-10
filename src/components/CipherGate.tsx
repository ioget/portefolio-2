
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, ShieldCheck, Terminal, AlertTriangle } from 'lucide-react';

interface CipherGateProps {
  children: React.ReactNode;
}

export const CipherGate = ({ children }: CipherGateProps) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  // Challenge: Decipher "HWDUYT" (Caesar k=5) -> "CRYPTO"
  const TARGET = "CRYPTO";
  const HINT = "HWDUYT (Rot-5)";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.toUpperCase() === TARGET) {
      setIsUnlocked(true);
      setError(false);
    } else {
      setError(true);
      setAttempts(prev => prev + 1);
      setTimeout(() => setError(false), 1000);
    }
  };

  if (isUnlocked) return <>{children}</>;

  return (
    <div className="relative py-24 px-6 max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-cyan-500/5 blur-[100px] -z-10" />
      
      <Card className="flex flex-col items-center text-center p-12 space-y-8 border-cyan-500/30">
        <div className="relative">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-6 bg-cyan-500/10 rounded-full border border-cyan-500/50"
          >
            <Lock className="w-12 h-12 text-cyan-400" />
          </motion.div>
          <div className="absolute -top-2 -right-2 p-2 bg-red-500 rounded-full animate-pulse">
            <ShieldCheck className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-black tracking-tighter uppercase font-mono italic">Encrypted Game</h2>
          <p className="text-zinc-500 text-sm max-w-md font-mono">
            This sector is protected by a standard Caesar Cipher [K=5]. 
            Decipher the payload to bridge the connection.

           
          </p>

          <p className="text-white font-bold  ">
             <span className="text-cyan-400">HINT:</span> <span className="text-g0reen-500">CRYPT</span> <span className="animate-pulse ">_?</span>
          </p>
        </div>

        <div className="w-full max-w-sm space-y-4">
          <div className="flex items-center gap-3 p-4 bg-black/50 border border-white/10 rounded-xl font-mono text-sm">
            <Terminal className="w-4 h-4 text-green-500" />
            <span className="text-green-500/70">PAYLOAD:</span>
            <span className="text-white font-bold tracking-[0.2em]">{HINT}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="PROCEED WITH DECRYPTED KEY..."
                className={`w-full bg-white/5 border ${error ? 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]' : 'border-white/10'} rounded-xl px-6 py-4 font-mono text-sm focus:outline-none focus:border-cyan-500 transition-all uppercase tracking-widest`}
              />
              <AnimatePresence>
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute -bottom-6 left-0 right-0 text-[10px] text-red-500 font-mono flex items-center justify-center gap-1 uppercase"
                  >
                    <AlertTriangle className="w-3 h-3" /> Integrity Check Failed
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-cyan-500 text-black font-black uppercase tracking-[0.2em] rounded-xl hover:bg-cyan-400 transition-all active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              Execute Decryption
            </button>
          </form>
        </div>

        <div className="pt-4 flex gap-4 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          <span>Attemps: {attempts}</span>
          <span>|</span>
          <span>Status: Restricted</span>
        </div>
      </Card>
    </div>
  );
};

// Re-using the Card component since it's locally needed or imported
const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <motion.div 
    className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);
