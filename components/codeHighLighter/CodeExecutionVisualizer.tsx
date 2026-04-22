'use client';
import React, { useState, useRef } from "react";
import { CodeType } from "./code.constant";
import useSpeed from "@/store/speedSlice";
import { AnimatePresence, motion } from "framer-motion";

interface CodeExecutionVisualizerProps {
  code: CodeType;
  // executionSteps: string[];
  activeToken: {
    activeLine: number;
    activeToken: string;
    variables: { [key: string]: { value: string, color: string } };
  };
}


const CodeExecutionVisualizer = ({ code, activeToken }: CodeExecutionVisualizerProps) => {


  // const [step, setStep] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);


  // const { speed, setSpeed } = useSpeed((s: any) => s);


  // const intervalRef = useRef<string | number | NodeJS.Timeout | undefined>(undefined);

  // const run = () => {
  //   if (isRunning) return;
  //   setIsRunning(true);

  //   intervalRef.current = setInterval(() => {
  //     setStep((prev) => {
  //       if (prev >= executionSteps.length - 1) {
  //         clearInterval(intervalRef.current);
  //         setIsRunning(false);
  //         return 0;
  //       }
  //       return prev + 1;
  //     });
  //   }, speed);
  // };

  // const pause = () => {
  //   clearInterval(intervalRef.current);
  //   setIsRunning(false);
  // };

  // const reset = () => {
  //   clearInterval(intervalRef.current);
  //   setStep(0);
  //   setIsRunning(false);
  // };

  // const next = () => {
  //   if (step < executionSteps.length - 1) {
  //     setStep((prev) => prev + 1);
  //   }
  // };

  // const activeToken = executionSteps[step];

  return (
    <div className=" mx-auto mt-10 text-white font-mono">
      <h2 className="text-xl text-center mb-4">
        Code Execution Visualizer
      </h2>



      <div className="flex space-x-2">


        {/* CODE BLOCK */}
        <div className="flex-1 bg-gray-900 p-4 rounded-xl">
          {code.map((line, i) => (
            <motion.div
              key={i}
              layout
              className={`flex px-2 py-1 rounded-md ${i === activeToken.activeLine ? "bg-yellow-400/20" : ""
                }`}
            >
              <span className="w-8 text-gray-500">{i + 1}</span>


              <div className="flex">


                {line.map((token) => (
                  <motion.pre
                    key={token.id}
                    layout
                    className={`px-0.5 ${token.id === activeToken.activeToken
                      ? "bg-yellow-300/40 text-yellow-200 rounded"
                      : ""
                      }`}
                  >
                    {token.text}
                  </motion.pre>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* VARIABLE PANEL */}
        <div className="w-60 bg-gray-800 p-4 rounded-xl">
          <h3 className="mb-3 text-lg">Variables</h3>

          <AnimatePresence>
            {activeToken.variables && Object.entries(activeToken.variables).map(([key, value]) => {


              let color = value.color ?? 'bg-gray-400';


              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className={` flex justify-between  px-3 py-2 mb-2 rounded ${color}`}
                >
                  <span>{key}</span>
                  <motion.span
                    key={value.value}
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 1 }}
                    className="text-white"
                  >
                    {value.value}
                  </motion.span>
                </motion.div>
              )
            }
            )

            }
          </AnimatePresence>
        </div>

      </div>
      {/* Controls */}
      {/* <div className="flex justify-center gap-3 mt-4">
        <button
          onClick={run}
          className="px-4 py-1 bg-green-600 rounded"
        >
          ▶ Run
        </button>
        <button
          onClick={pause}
          className="px-4 py-1 bg-yellow-600 rounded"
        >
          ⏸ Pause
        </button>
        <button
          onClick={next}
          className="px-4 py-1 bg-blue-600 rounded"
        >
          ⏭ Step
        </button>
        <button
          onClick={reset}
          className="px-4 py-1 bg-red-600 rounded"
        >
          🔄 Reset
        </button>
      </div> */}

      {/* Speed */}
      {/* <div className="text-center mt-3">
        <input
          type="range"
          min="200"
          max="1500"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
        />
        <span className="ml-2">{speed} ms</span>
      </div> */}
    </div>
  );
};

export default CodeExecutionVisualizer;