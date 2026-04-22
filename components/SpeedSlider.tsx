"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Settings } from "lucide-react"; // icon

export default function SpeedSlider({ speed, setSpeed }: any) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // ✅ Close on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setOpen(false);
            }
        }

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    return (
        <div className="relative inline-block" ref={containerRef}>
            {/* ⚙️ Settings Button */}
            <button
                onClick={() => setOpen((prev) => !prev)}
                className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
            >
                <Settings className="w-5 h-5 text-white" />
            </button>

            {/* 🎛️ Slider Panel */}
            {open && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 mt-3 w-72 p-4 bg-neutral-900 rounded-2xl shadow-xl border border-neutral-700 z-50"
                >
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
                    <input
                        type="range"
                        min="100"
                        max="1000"
                        value={speed}
                        onChange={(e) => setSpeed(Number(e.target.value))}
                        className="w-full appearance-none h-2 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 outline-none cursor-pointer"
                    />

                    {/* Labels */}
                    <div className="flex justify-between text-xs text-neutral-500 mt-2">
                        <span>🐢 Slow</span>
                        <span>⚡ Fast</span>
                    </div>
                </motion.div>
            )}
        </div>
    );
}