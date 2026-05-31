import React from "react";

// Inline formatting helper: Bold strings (**text**) and inline code backticks (`code`)
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);
  return parts.map((part, pIdx) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={pIdx} className="text-[#00FF66] font-bold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code key={pIdx} className="bg-[#161B26] border border-[#242C3D] px-1.5 py-0.5 text-[10px] text-[#00E5FF] font-mono rounded">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
}

interface MarkdownRendererProps {
  text: string;
}

export default function MarkdownRenderer({ text }: MarkdownRendererProps) {
  if (!text) return null;
  const parts = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-2 text-[11.5px] sm:text-xs leading-relaxed text-gray-200">
      {parts.map((part, index) => {
        if (part.startsWith("```")) {
          const lines = part.split("\n");
          const lang = lines[0].replace("```", "").trim() || "code";
          const codeContent = lines
            .slice(
              1,
              lines.length -
                (lines[lines.length - 1] === "```" || (lines.length > 1 && part.endsWith("```")) ? 1 : 0)
            )
            .join("\n");
          return (
            <div key={index} className="my-2 border border-[#242C3D] rounded-lg bg-[#0B0F19] overflow-hidden font-mono text-[10px] sm:text-[11px]">
              <div className="bg-[#161B26] px-3.5 py-1.5 text-[9px] text-[#00E5FF] border-b border-[#242C3D] flex justify-between uppercase font-mono font-bold tracking-wider">
                <span>{lang}</span>
                <span className="opacity-50 text-gray-400">code block</span>
              </div>
              <pre className="p-3 text-gray-300 overflow-x-auto whitespace-pre select-all leading-normal">{codeContent}</pre>
            </div>
          );
        } else {
          const lines = part.split("\n");
          return (
            <div key={index} className="space-y-1.5">
              {lines.map((line, lIdx) => {
                const trimmed = line.trim();
                if (!trimmed) {
                  return <div key={lIdx} className="h-1" />;
                }

                // Blockquote
                if (line.trim().startsWith("> ")) {
                  return (
                    <blockquote key={lIdx} className="border-l-3 border-[#00E5FF] bg-cyan-950/15 pl-3 py-1.5 text-gray-400 italic my-1.5 rounded-r">
                      {parseInlineMarkdown(line.trim().substring(2))}
                    </blockquote>
                  );
                }

                // Headings
                if (trimmed.startsWith("### ")) {
                  return (
                    <h5 key={lIdx} className="text-[#00E5FF] font-black mt-3 mb-1 text-xs tracking-tight uppercase">
                      {parseInlineMarkdown(trimmed.substring(4))}
                    </h5>
                  );
                }
                if (trimmed.startsWith("## ")) {
                  return (
                    <h4 key={lIdx} className="text-white font-bold mt-4 mb-1.5 border-b border-[#242C3D] pb-1 text-xs tracking-tight">
                      {parseInlineMarkdown(trimmed.substring(3))}
                    </h4>
                  );
                }
                if (trimmed.startsWith("# ")) {
                  return (
                    <h3 key={lIdx} className="text-[#00FF66] font-bold text-xs mt-4 mb-2 tracking-wide uppercase">
                      {parseInlineMarkdown(trimmed.substring(2))}
                    </h3>
                  );
                }

                // Unordered Lists
                if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
                  return (
                    <div key={lIdx} className="flex items-start gap-1.5 pl-2 py-0.5 text-gray-300">
                      <span className="text-[#00FF66] select-none mt-1 text-[10px]">•</span>
                      <div className="flex-1 text-[11.5px] sm:text-xs">{parseInlineMarkdown(trimmed.substring(2))}</div>
                    </div>
                  );
                }

                // Ordered Lists (e.g., 1. Name)
                const numMatch = trimmed.match(/^(\d+)\.\s(.*)/);
                if (numMatch) {
                  const num = numMatch[1];
                  const entry = numMatch[2];
                  return (
                    <div key={lIdx} className="flex items-start gap-1.5 pl-2 py-0.5 text-gray-300">
                      <span className="text-[#00E5FF] font-mono font-bold text-[10px] sm:text-[11px] mt-0.5">{num}.</span>
                      <div className="flex-1 text-[11.5px] sm:text-xs">{parseInlineMarkdown(entry)}</div>
                    </div>
                  );
                }

                return (
                  <p key={lIdx} className="mb-1 text-gray-300 text-[11.5px] sm:text-xs">
                    {parseInlineMarkdown(line)}
                  </p>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
}
