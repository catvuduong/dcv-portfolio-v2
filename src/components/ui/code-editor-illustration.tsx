"use client";

import * as React from "react";

export function CodeEditorIllustration() {
  return React.createElement(
    "div",
    { className: "relative w-full max-w-lg" },
    React.createElement(
      "div",
      { className: "rounded-2xl border border-neutral-200 bg-white p-0 shadow-xl shadow-neutral-200/50 overflow-hidden" },
      // Editor Header
      React.createElement(
        "div",
        { className: "flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-3" },
        React.createElement(
          "div",
          { className: "flex gap-1.5" },
          React.createElement("div", { className: "h-3 w-3 rounded-full bg-red-400" }),
          React.createElement("div", { className: "h-3 w-3 rounded-full bg-yellow-400" }),
          React.createElement("div", { className: "h-3 w-3 rounded-full bg-green-400" })
        ),
        React.createElement(
          "div",
          { className: "ml-4 flex items-center gap-2 rounded-md bg-neutral-100 px-3 py-1" },
          React.createElement("span", { className: "text-xs text-neutral-500" }, "app.tsx")
        )
      ),
      // Code Content
      React.createElement(
        "div",
        { className: "p-4 font-mono text-sm leading-relaxed" },
        // Line 1
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "1"),
          React.createElement("span", { className: "text-purple-600" }, "import"),
          React.createElement("span", { className: "text-neutral-800" }, " {"),
          React.createElement("span", { className: "text-violet-600" }, "useState"),
          React.createElement("span", { className: "text-neutral-800" }, ", "),
          React.createElement("span", { className: "text-violet-600" }, "useEffect"),
          React.createElement("span", { className: "text-neutral-800" }, "} "),
          React.createElement("span", { className: "text-purple-600" }, "from"),
          React.createElement("span", { className: "text-emerald-600" }, " 'react'")
        ),
        // Line 2
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "2"),
          React.createElement("span", { className: "text-neutral-800" }, " ")
        ),
        // Line 3
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "3"),
          React.createElement("span", { className: "text-purple-600" }, "export default function"),
          React.createElement("span", { className: "text-neutral-800" }, " "),
          React.createElement("span", { className: "text-blue-600" }, "Portfolio"),
          React.createElement("span", { className: "text-neutral-800" }, "() {")
        ),
        // Line 4
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "4"),
          React.createElement("span", { className: "text-neutral-800" }, "  "),
          React.createElement("span", { className: "text-violet-600" }, "const"),
          React.createElement("span", { className: "text-neutral-800" }, " [data, setData] = "),
          React.createElement("span", { className: "text-violet-600" }, "useState"),
          React.createElement("span", { className: "text-neutral-800" }, "(null)")
        ),
        // Line 5
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "5"),
          React.createElement("span", { className: "text-neutral-800" }, "  ")
        ),
        // Line 6
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "6"),
          React.createElement("span", { className: "text-neutral-800" }, "  "),
          React.createElement("span", { className: "text-violet-600" }, "useEffect"),
          React.createElement("span", { className: "text-neutral-800" }, "(() => {")
        ),
        // Line 7 - Highlighted
        React.createElement(
          "div",
          { className: "flex rounded bg-indigo-50/50 -mx-4 px-4" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "7"),
          React.createElement("span", { className: "text-neutral-800" }, "    "),
          React.createElement("span", { className: "text-sky-600" }, "fetchData"),
          React.createElement("span", { className: "text-neutral-800" }, "()."),
          React.createElement("span", { className: "text-sky-600" }, "then"),
          React.createElement("span", { className: "text-neutral-800" }, "("),
          React.createElement("span", { className: "text-violet-600" }, "setData"),
          React.createElement("span", { className: "text-neutral-800" }, ")")
        ),
        // Line 8
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "8"),
          React.createElement("span", { className: "text-neutral-800" }, "  }, [])")
        ),
        // Line 9
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "9"),
          React.createElement("span", { className: "text-neutral-800" }, " ")
        ),
        // Line 10
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "10"),
          React.createElement("span", { className: "text-neutral-800" }, "  "),
          React.createElement("span", { className: "text-violet-600" }, "return"),
          React.createElement("span", { className: "text-neutral-800" }, " (")
        ),
        // Line 11
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "11"),
          React.createElement("span", { className: "text-neutral-800" }, "    &lt;"),
          React.createElement("span", { className: "text-blue-600" }, "Hero"),
          React.createElement("span", { className: "text-neutral-800" }, " "),
          React.createElement("span", { className: "text-sky-600" }, "name"),
          React.createElement("span", { className: "text-neutral-800" }, "="),
          React.createElement("span", { className: "text-emerald-600" }, "&quot;Vu&quot;"),
          React.createElement("span", { className: "text-neutral-800" }, " /&gt;")
        ),
        // Line 12
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "12"),
          React.createElement("span", { className: "text-neutral-800" }, "  )")
        ),
        // Line 13
        React.createElement(
          "div",
          { className: "flex" },
          React.createElement("span", { className: "w-8 text-right pr-4 text-neutral-300 select-none" }, "13"),
          React.createElement("span", { className: "text-neutral-800" }, "}")
        )
      ),
      // Cursor indicator
      React.createElement(
        "div",
        { className: "mx-4 mb-4 flex items-center gap-2 rounded bg-neutral-50 px-3 py-2" },
        React.createElement("div", { className: "h-4 w-0.5 bg-indigo-600 animate-pulse" }),
        React.createElement("span", { className: "text-xs text-neutral-500" }, "Ready to build something amazing")
      )
    ),
    // Floating Badge
    React.createElement(
      "div",
      { className: "absolute -right-6 -top-4 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 shadow-lg" },
      React.createElement(
        "div",
        { className: "flex items-center gap-2" },
        React.createElement(
          "span",
          { className: "relative flex h-2 w-2" },
          React.createElement("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" }),
          React.createElement("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-indigo-500" })
        ),
        React.createElement("span", { className: "text-xs font-medium text-indigo-700" }, "4+ years")
      )
    ),
    // Decorative Elements
    React.createElement("div", { className: "absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-indigo-100/40 blur-3xl" }),
    React.createElement("div", { className: "absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-violet-100/40 blur-2xl" })
  );
}
