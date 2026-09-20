import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Cpu,
  Play,
  ShieldCheck,
  Zap,
  Workflow,
  CreditCard,
  Radio,
  Terminal
} from 'lucide-react';
import { SimulationStep } from '../types';

interface LiveSimulatorProps {
  darkMode: boolean;
}

export const LiveSimulator: React.FC<LiveSimulatorProps> = ({ darkMode }) => {
  const [activeScenario, setActiveScenario] = useState<'webhook' | 'dlq' | 'cache' | 'payout'>('webhook');
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<SimulationStep[]>([]);
  const [queueCount, setQueueCount] = useState(0);
  const [cacheHitRate, setCacheHitRate] = useState(98.4);
  const [dlqCapturedCount, setDlqCapturedCount] = useState(0);

  const runSimulation = (scenario: 'webhook' | 'dlq' | 'cache' | 'payout') => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveScenario(scenario);
    setLogs([]);

    const timestamp = () => new Date().toLocaleTimeString('en-US', { hour12: false, minute: '2-digit', second: '2-digit', fractionalSecondDigits: 3 });

    if (scenario === 'webhook') {
      setQueueCount(1000);
      const steps: SimulationStep[] = [
        { id: '1', timestamp: timestamp(), stepName: '1. Ingress Webhook', type: 'gateway', status: 'success', message: 'POST /api/webhooks/stripe received 1,000 requests', latencyMs: 12 },
        { id: '2', timestamp: timestamp(), stepName: '2. Rate Limiter', type: 'cache', status: 'success', message: 'Redis token bucket passed signature verification', latencyMs: 4 },
        { id: '3', timestamp: timestamp(), stepName: '3. BullMQ Dispatch', type: 'queue', status: 'pending', message: 'Dispatched to payment-events-queue. Concurrent workers: 10', latencyMs: 18 },
        { id: '4', timestamp: timestamp(), stepName: '4. DB Transaction', type: 'db', status: 'success', message: 'Prisma ORM atomic order status update to PAID', latencyMs: 22 },
        { id: '5', timestamp: timestamp(), stepName: '5. Push Notification', type: 'payment', status: 'success', message: 'FCM push triggered to user mobile app', latencyMs: 15 }
      ];

      steps.forEach((step, idx) => {
        setTimeout(() => {
          setLogs((prev) => [...prev, step]);
          setQueueCount((q) => Math.max(0, q - 200));
          if (idx === steps.length - 1) setIsRunning(false);
        }, (idx + 1) * 450);
      });
    } else if (scenario === 'dlq') {
      const steps: SimulationStep[] = [
        { id: '1', timestamp: timestamp(), stepName: '1. Job Attempt #1', type: 'queue', status: 'pending', message: 'Processing FCM push notification to 5,000 devices', latencyMs: 20 },
        { id: '2', timestamp: timestamp(), stepName: '2. FCM Gateway Timeout', type: 'queue', status: 'warning', message: '504 Gateway Timeout from FCM server. Exponential backoff triggered.', latencyMs: 1200 },
        { id: '3', timestamp: timestamp(), stepName: '3. Automatic Retry #2', type: 'queue', status: 'retry', message: 'Retrying job in 2,000ms via BullMQ worker retry strategy', latencyMs: 15 },
        { id: '4', timestamp: timestamp(), stepName: '4. Captured in DLQ', type: 'dlq', status: 'warning', message: 'Captured in Dead Letter Queue (DLQ). Zero Data Loss guaranteed.', latencyMs: 8 },
        { id: '5', timestamp: timestamp(), stepName: '5. Auto Recovery', type: 'dlq', status: 'success', message: 'DLQ worker drained & successfully delivered to FCM backup gateway', latencyMs: 35 }
      ];

      steps.forEach((step, idx) => {
        setTimeout(() => {
          setLogs((prev) => [...prev, step]);
          if (step.type === 'dlq') setDlqCapturedCount((c) => c + 1);
          if (idx === steps.length - 1) setIsRunning(false);
        }, (idx + 1) * 500);
      });
    } else if (scenario === 'cache') {
      const steps: SimulationStep[] = [
        { id: '1', timestamp: timestamp(), stepName: '1. GET /api/trainers/available', type: 'gateway', status: 'success', message: 'Incoming query for Dubai gym trainer slots', latencyMs: 5 },
        { id: '2', timestamp: timestamp(), stepName: '2. Redis Cache Lookup', type: 'cache', status: 'success', message: 'CACHE HIT! Key: trainer_slots:dubai_central (TTL: 300s)', latencyMs: 3 },
        { id: '3', timestamp: timestamp(), stepName: '3. Fast Response', type: 'cache', status: 'success', message: 'Returned cached JSON payload directly (Bypassed PostgreSQL)', latencyMs: 2 }
      ];

      steps.forEach((step, idx) => {
        setTimeout(() => {
          setLogs((prev) => [...prev, step]);
          if (idx === steps.length - 1) {
            setCacheHitRate(99.2);
            setIsRunning(false);
          }
        }, (idx + 1) * 400);
      });
    } else if (scenario === 'payout') {
      const steps: SimulationStep[] = [
        { id: '1', timestamp: timestamp(), stepName: '1. Ticket Purchased', type: 'payment', status: 'success', message: 'Vybemena ticket sale $200 via Stripe Connect', latencyMs: 15 },
        { id: '2', timestamp: timestamp(), stepName: '2. Commission Split', type: 'payment', status: 'success', message: '3% platform commission ($6.00) routed to platform balance', latencyMs: 8 },
        { id: '3', timestamp: timestamp(), stepName: '3. Escrow Hold', type: 'payment', status: 'pending', message: 'Organizer payout ($194.00) held in escrow for 48 hours post-event', latencyMs: 10 },
        { id: '4', timestamp: timestamp(), stepName: '4. QR Scan Verification', type: 'gateway', status: 'success', message: 'Attendee scanned QR code at venue entrance. Verification complete.', latencyMs: 14 },
        { id: '5', timestamp: timestamp(), stepName: '5. Automated Payout', type: 'payment', status: 'success', message: 'Stripe Connect payout triggered to organizer bank account', latencyMs: 40 }
      ];

      steps.forEach((step, idx) => {
        setTimeout(() => {
          setLogs((prev) => [...prev, step]);
          if (idx === steps.length - 1) setIsRunning(false);
        }, (idx + 1) * 450);
      });
    }
  };

  return (
    <section id="simulator" className={`py-28 lg:py-32 relative border-t transition-colors duration-300 ${
      darkMode ? 'bg-[#09090b] border-white/[0.06]' : 'bg-white border-black/[0.05]'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-mono tracking-tight"
            style={{
              backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.03)',
              borderColor: darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
              color: darkMode ? '#a1a1aa' : '#52525b'
            }}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>INTERACTIVE BENCHMARK CONSOLE</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>
            Microservice & Queue Simulator
          </h2>
          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Live stress-test simulation across BullMQ queues, Redis sub-10ms cache invalidation, and Dead Letter Queue (DLQ) fault handling.
          </p>
        </div>

        {/* Simulator Workspace Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className={`p-6 sm:p-7 rounded-3xl border space-y-4 ${
              darkMode ? 'bg-zinc-900/40 border-white/[0.08]' : 'bg-zinc-50/80 border-black/[0.06] shadow-xs'
            }`}>
              <div className={`flex items-center justify-between pb-3 border-b ${
                darkMode ? 'border-white/[0.06]' : 'border-black/[0.06]'
              }`}>
                <span className={`text-xs font-mono font-medium flex items-center gap-2 ${
                  darkMode ? 'text-zinc-300' : 'text-zinc-800'
                }`}>
                  <Workflow className="w-3.5 h-3.5 text-[#FF5722]" />
                  SIMULATION SUITES
                </span>
                <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
              </div>

              {/* Preset Scenario Selectors */}
              <div className="space-y-2">
                {[
                  { id: 'webhook', title: '1,000 Payment Webhooks', desc: 'Ingress → Redis Token Bucket → BullMQ Queue → DB', icon: CreditCard },
                  { id: 'dlq', title: 'BullMQ DLQ Fault Recovery', desc: 'Simulate Failure → Exponential Backoff → DLQ Drain', icon: ShieldCheck },
                  { id: 'cache', title: 'Redis Sub-10ms Cache Hit', desc: 'Bypass DB via in-memory Redis key-value lookup', icon: Zap },
                  { id: 'payout', title: 'Stripe Connect 48h Payout', desc: '3% Commission → QR Scan → Automated Bank Payout', icon: Radio }
                ].map((scen) => {
                  const Icon = scen.icon;
                  const isCurrent = activeScenario === scen.id;
                  return (
                    <button
                      key={scen.id}
                      disabled={isRunning}
                      onClick={() => runSimulation(scen.id as any)}
                      className={`w-full p-3.5 rounded-2xl border text-left transition-all duration-200 flex items-start gap-3 ${
                        isCurrent
                          ? darkMode
                            ? 'bg-zinc-800 border-[#FF5722]/80 text-white shadow-sm ring-1 ring-[#FF5722]/30'
                            : 'bg-white border-[#FF5722] text-zinc-950 shadow-sm ring-1 ring-[#FF5722]/30'
                          : darkMode
                          ? 'bg-zinc-950/40 border-white/[0.06] text-zinc-400 hover:border-[#FF5722]/40 hover:text-zinc-200'
                          : 'bg-white border-black/[0.06] text-zinc-600 hover:bg-zinc-100 hover:border-[#FF5722]/30'
                      }`}
                    >
                      <div className={`p-2 rounded-xl border shrink-0 ${
                        isCurrent
                          ? 'bg-[#FF5722] text-white border-[#FF5722]'
                          : darkMode ? 'bg-zinc-900 border-white/[0.08] text-zinc-400' : 'bg-zinc-100 border-black/[0.06] text-zinc-700'
                      }`}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5">
                        <div className={`text-xs font-semibold ${
                          isCurrent
                            ? darkMode ? 'text-white' : 'text-zinc-950'
                            : darkMode ? 'text-zinc-300' : 'text-zinc-800'
                        }`}>{scen.title}</div>
                        <div className={`text-[11px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>{scen.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Action Button */}
              <button
                disabled={isRunning}
                onClick={() => runSimulation(activeScenario)}
                className="w-full py-3 px-4 rounded-full font-medium text-xs transition-all flex items-center justify-center gap-2 bg-[#FF5722] hover:bg-[#F4511E] text-white shadow-md shadow-[#FF5722]/30 disabled:opacity-50"
              >
                {isRunning ? (
                  <>
                    <Cpu className="w-3.5 h-3.5 animate-spin" />
                    <span>Executing Pipeline...</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Simulation Suite</span>
                  </>
                )}
              </button>
            </div>

            {/* Metrics Widget Box */}
            <div className="grid grid-cols-3 gap-2.5">
              <div className={`p-3 rounded-2xl border text-center ${
                darkMode ? 'bg-zinc-900/40 border-white/[0.08]' : 'bg-zinc-50 border-black/[0.06]'
              }`}>
                <div className={`text-[10px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Queue Buffer</div>
                <div className={`text-base font-bold font-mono mt-0.5 ${darkMode ? 'text-zinc-100' : 'text-zinc-950'}`}>{queueCount}</div>
              </div>
              <div className={`p-3 rounded-2xl border text-center ${
                darkMode ? 'bg-zinc-900/40 border-white/[0.08]' : 'bg-zinc-50 border-black/[0.06]'
              }`}>
                <div className={`text-[10px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>Cache Hit</div>
                <div className={`text-base font-bold font-mono mt-0.5 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>{cacheHitRate}%</div>
              </div>
              <div className={`p-3 rounded-2xl border text-center ${
                darkMode ? 'bg-zinc-900/40 border-white/[0.08]' : 'bg-zinc-50 border-black/[0.06]'
              }`}>
                <div className={`text-[10px] font-mono ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>DLQ Recovered</div>
                <div className={`text-base font-bold font-mono mt-0.5 ${darkMode ? 'text-amber-400' : 'text-amber-700'}`}>{dlqCapturedCount}</div>
              </div>
            </div>
          </div>

          {/* Real-Time Log Console Column */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-950 rounded-3xl border border-white/[0.08] shadow-2xl overflow-hidden font-mono text-xs">
              {/* Console Header */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-900/80 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-zinc-300 font-semibold text-[11px]">EVENT_STREAM_CONSOLE</span>
                </div>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full border ${
                  isRunning
                    ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                    : 'text-zinc-400 bg-white/[0.04] border-white/[0.08]'
                }`}>
                  {isRunning ? 'PIPELINE_ACTIVE' : 'READY'}
                </span>
              </div>

              {/* Log Stream Output */}
              <div className="p-5 space-y-2.5 h-[390px] overflow-y-auto">
                {logs.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-2.5">
                    <Workflow className="w-7 h-7 text-zinc-600" />
                    <p className="text-xs">Select any suite to trigger microservices benchmark.</p>
                  </div>
                ) : (
                  logs.map((log) => (
                    <motion.div
                      key={log.id}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-3 rounded-xl bg-zinc-900/60 border border-white/[0.06] space-y-1"
                    >
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="font-semibold text-zinc-200">{log.stepName}</span>
                        <div className="flex items-center gap-2 text-[10px]">
                          <span className="text-zinc-500">{log.timestamp}</span>
                          <span className="text-emerald-400 font-medium">+{log.latencyMs}ms</span>
                        </div>
                      </div>
                      <p className="text-zinc-400 text-xs">{log.message}</p>
                    </motion.div>
                  ))
                )}
              </div>

              {/* Console Footer Status */}
              <div className="p-3.5 bg-zinc-900/60 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-2 text-[10px] text-zinc-400">
                <span>GUARANTEE: Zero Data Loss (BullMQ DLQ + Redis Invalidation)</span>
                <span className="text-emerald-400 font-medium">LATENCY: Sub-40ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

