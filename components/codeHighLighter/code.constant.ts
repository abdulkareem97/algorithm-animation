export type CodeType = [{ text: string; id: string; }[], { text: string; id: string; }[], { text: string; id: string; }[], { text: string; id: string; }[], { text: string; id: string; }[]]


export const codeExample1 :CodeType = [
  [
    { text: "let ", id: "l1" },
    { text: "sum", id: "l2" },
    { text: " = ", id: "l3" },
    { text: "0", id: "l4" },
    { text: ";", id: "l5" }
  ],
  [
    { text: "for ", id: "l6" },
    { text: "(let i = 0; i < 5; i++)", id: "l7" },
    { text: " {", id: "l8" }
  ],
  [
    { text: "  ", id: "l9" },
    { text: "sum", id: "l10" },
    { text: " += ", id: "l11" },
    { text: "i", id: "l12" },
    { text: ";", id: "l13" }
  ],
  [{ text: "}", id: "l14" }],
  [
    { text: "console.log", id: "l15" },
    { text: "(sum)", id: "l16" },
    { text: ";", id: "l17" }
  ]
];

// execution sequence (THIS is the brain 🔥)
export const executionStepsExample1 :string[]= [
  "l2", "l4",        // let sum = 0
  "l7",              // loop condition
  "l10", "l12",      // sum += i
  "l7",
  "l10", "l12",
  "l7",
  "l15", "l16"
];
