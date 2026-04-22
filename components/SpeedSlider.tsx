"use client";

import { motion } from "framer-motion";
export default function SpeedSlider({ speed, setSpeed }: any) {

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-neutral-900 rounded-2xl shadow-lg border border-neutral-700">

            {/* Header */}
            <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-neutral-400">Speed</span>
                <motion.div
                    key={speed}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xs bg-indigo-500 px-2 py-1 rounded-md"
                >
                    {speed}
                </motion.div>
            </div>

            {/* Slider */}
            <div className="relative">
                <input
                    type="range"
                    min="100"
                    max="1000"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className="w-full appearance-none h-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 outline-none cursor-pointer"
                />
            </div>

            {/* Labels */}
            <div className="flex justify-between text-xs text-neutral-500 mt-2">
                <span>🐢 Slow</span>
                <span>⚡ Fast</span>
            </div>

        </div>
    );
}