import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  "Initializing portfolio architecture...",
  "Loading microservices & Redis caches...",
  "Connecting BullMQ DLQ resilient workers...",
  "Verifying Stripe Connect payout pipelines...",
  "Calibrating typography & interface design...",
  "Environment ready. Welcome."
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const logInterval = setInterval(() => {
      setCurrentLogIndex((prev) => {
        if (prev < BOOT_LOGS.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 350);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        return prev + 4;
      });
    }, 45);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b] text-zinc-100 font-sans px-4 select-none"
    >
      <div className="relative w-full max-w-md p-6 sm:p-8 bg-zinc-900/60 border border-white/[0.08] rounded-3xl shadow-2xl backdrop-blur-xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-zinc-800 border border-white/[0.08] flex items-center justify-center text-xs font-mono font-bold text-zinc-200">
              UK
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-100 tracking-tight">Umesh Kotwal</h3>
              <p className="text-[11px] text-zinc-400 font-mono">Full Stack & Microservices Lead</p>
            </div>
          </div>
          <span className="text-xs font-mono font-medium text-zinc-400 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
            {progress}%
          </span>
        </div>

        {/* Console Log Area */}
        <div className="h-24 font-mono text-xs text-zinc-300 bg-zinc-950 p-3.5 rounded-2xl border border-white/[0.06] flex flex-col justify-end overflow-hidden space-y-1">
          {BOOT_LOGS.slice(0, currentLogIndex + 1).map((log, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">&gt;</span>
              <span className={idx === currentLogIndex ? "text-zinc-200 font-medium" : "text-zinc-500"}>
                {log}
              </span>
              {idx === currentLogIndex && progress < 100 && (
                <span className="w-1.5 h-3.5 bg-emerald-500 inline-block animate-pulse ml-0.5" />
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2 pt-1">
          <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-zinc-200 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
            <span>SURAT, INDIA</span>
            <span>SYSTEMS ONLINE</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

