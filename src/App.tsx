import React, { useState, useEffect, useRef } from "react";
import { 
  Terminal, 
  Database, 
  Sparkles, 
  AlertCircle, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Download, 
  ArrowLeft, 
  RefreshCw, 
  Search, 
  HelpCircle, 
  FileText, 
  Blocks, 
  ChevronRight,
  Info
} from "lucide-react";
import AITerminal from "./components/AITerminal";
import MarkdownRenderer from "./components/MarkdownRenderer";

// Interfaces for our semantic code analysis response
interface ProjectStats {
  primary_language: string;
  framework: string;
  architecture_pattern: string;
  complexity_level: string;
}

interface SpecialFeature {
  title: string;
  description: string;
  evidence_pattern: string;
  impact: string;
}

interface NormalFeature {
  title: string;
  description: string;
  evidence_pattern: string;
}

interface StackDetails {
  languages: string[];
  dependencies: string[];
  build_tools: string[];
}

interface ArchitectureInsight {
  element: string;
  evaluation: string;
}

interface AnalysisResult {
  project_name: string;
  project_description: string;
  statistics: ProjectStats;
  special_features: SpecialFeature[];
  normal_features: NormalFeature[];
  stack_details: StackDetails;
  architecture_insights: ArchitectureInsight[];
  markdown_features: string;
}

export default function App() {
  const [repoUrl, setRepoUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [activeView, setActiveView] = useState<"features" | "stack" | "architecture" | "markdown">("features");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [alertInfo, setAlertInfo] = useState<string | null>(null);
  const [errorInfo, setErrorInfo] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Simulated Console Output steps
  const [logs, setLogs] = useState<string[]>([]);
  const logTerminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logs terminal
  useEffect(() => {
    if (logTerminalRef.current) {
      logTerminalRef.current.scrollTop = logTerminalRef.current.scrollHeight;
    }
  }, [logs]);

  // Dynamic log streamer simulator
  const streamLogs = (onComplete: () => void) => {
    setLogs([]);
    const logSteps = [
      "⚡ [SYSTEM] RepoScope Unified Miner Core Initiated safely.",
      "🔍 [CRAWLER] Connecting to remote endpoint API gateways...",
      "📡 [CRAWLER] Connection established. Parsing path structures...",
      "⚙️ [CRAWLER] Successfully resolved codebase default branch and metadata streams.",
      "📂 [CRAWLER] Recursively mapping directories. Mapped directory hierarchy nodes...",
      "📦 [CRAWLER] Inspecting 'package.json' and critical file modules...",
      "🔬 [CRAWLER] Found file structures. Extracting codebase configurations to memory buffer...",
      "🧠 [NEURAL] Connecting to Gemini intelligent developer neural system on port 3000...",
      "🚀 [NEURAL] Analyzing source structures: Evaluating special engineering under-the-hood highlights...",
      "✨ [NEURAL] Sorting discoveries: Categorized advanced features from normal UI and routing loops...",
      "🖥️ [SYSTEM] Stream extraction compiled. Initializing components rendering layout..."
    ];

    let index = 0;
    const interval = setInterval(() => {
      if (index < logSteps.length) {
        setLogs(prev => [...prev, logSteps[index]]);
        index++;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, 450);
  };

  const handleAnalyze = async (urlInput: string) => {
    const trimmed = urlInput.trim();
    if (!trimmed) return;

    setAnalyzing(true);
    setResult(null);
    setAlertInfo(null);
    setErrorInfo(null);

    // Stream logs for beautiful user engagement before showing details
    streamLogs(async () => {
      try {
        const res = await fetch("/api/github/analyze-repo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: trimmed })
        });

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.error || "Analysis routine rejected.");
        }

        const data = await res.json();
        if (data.alert) {
          setAlertInfo(data.alert);
        }
        setResult(data.result);
        setActiveView("features");
      } catch (err: any) {
        console.error(err);
        setErrorInfo(err.message || "Failed to establish secure indexer stream.");
      } finally {
        setAnalyzing(false);
      }
    });
  };

  // Preset chips handler
  const handlePresetSelect = (preset: string) => {
    setRepoUrl(preset);
    handleAnalyze(preset);
  };

  // Back to Search
  const handleReset = () => {
    setResult(null);
    setRepoUrl("");
    setAlertInfo(null);
    setErrorInfo(null);
  };

  // Copy code utility
  const handleCopyMarkdown = () => {
    if (!result) return;
    navigator.clipboard.writeText(result.markdown_features);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Trigger browser file download
  const handleDownloadMarkdown = () => {
    if (!result) return;
    const cleanProjectName = result.project_name.replace("/", "_");
    const element = document.createElement("a");
    const file = new Blob([result.markdown_features], { type: "text/markdown;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = `${cleanProjectName}_FEATURES.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]" id="root-viewport">
      
      {/* Top Professional Node Status Banner */}
      <div className="bg-[#161B26]/60 border-b border-[#242C3D] px-6 py-2.5 flex items-center justify-between text-[11px] font-mono leading-none shrink-0" id="top-status-bar">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-ping" />
          <span className="text-[#00FF66] uppercase font-bold tracking-wider">● System Node: Online</span>
          <span className="text-gray-500">| Environment Sandbox Active</span>
        </div>
        <div className="flex items-center gap-4 text-gray-400">
          <span>Module: <strong className="text-white font-medium">RepoScope Code Miner v2.0</strong></span>
          <span className="hidden sm:inline-block h-3.5 w-px bg-[#242C3D]" />
          <span className="hidden sm:inline">Port: <strong className="text-gray-300">3000</strong></span>
        </div>
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12 flex flex-col justify-start">
        
        {/* LOGO AND BRAND HEADER */}
        <header className="mb-10 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#242C3D] pb-6 shrink-0" id="brand-header">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#00E5FF]/15 border border-[#00E5FF]/30 rounded-xl shadow-lg shadow-cyan-500/5">
              <Code2 className="text-[#00E5FF] w-7 h-7 animate-pulse" />
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2 uppercase">
                <span>Repo</span><span className="text-[#00E5FF]">Scope</span>
              </h1>
              <p className="text-[10px] sm:text-xs text-gray-400 font-mono tracking-wide">
                Deep Semantic Code Miner & Feature Evaluator
              </p>
            </div>
          </div>
          
          <div className="text-xs font-mono text-gray-500 flex items-center gap-2 bg-[#161B26]/30 px-3 py-1.5 rounded-lg border border-[#242C3D]">
            <Sparkles className="w-4.5 h-4.5 text-[#00E5FF]" />
            <span>AI powered by <strong className="text-[#00FF66] font-semibold">Gemini 3.5-Flash</strong></span>
          </div>
        </header>

        {/* 1. INPUT SCREEN */}
        {!analyzing && !result && (
          <section className="flex-1 flex flex-col justify-center max-w-2xl mx-auto w-full py-6" id="setup-panel">
            <div className="space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
                  Deconstruct Any Codebase.
                </h2>
                <p className="text-sm text-gray-400 max-w-lg mx-auto font-sans leading-relaxed">
                  Analyze deep code paths to automatically extract, catalog, and evaluate special development achievements. Get beautiful organized results with immediate Markdown export.
                </p>
              </div>

              {/* Minimal Search Input and Action Button */}
              <div className="bg-[#161B26] p-4 rounded-2xl border-2 border-[#242C3D] shadow-2xl focus-within:border-[#00E5FF]/60 transition-all p-2.5">
                <div className="flex flex-col sm:flex-row items-stretch gap-2">
                  <div className="flex-1 relative flex items-center">
                    <Search className="absolute left-3 w-5 h-5 text-gray-500 hover:text-cyan-400 transition-colors" />
                    <input
                      type="text"
                      value={repoUrl}
                      onChange={(e) => setRepoUrl(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleAnalyze(repoUrl)}
                      placeholder="Paste public GitHub URL (e.g., vitejs/vite or direct code node links)"
                      className="w-full bg-[#0B0F19] text-gray-100 placeholder-gray-500 text-sm rounded-xl pl-11 pr-4 py-3.5 border border-[#242C3D] focus:outline-none focus:border-[#00E5FF] font-mono tracking-wide"
                    />
                  </div>
                  <button
                    onClick={() => handleAnalyze(repoUrl)}
                    disabled={!repoUrl.trim()}
                    className="bg-[#00E5FF] hover:bg-[#00B4D8] text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 px-8 py-3.5 rounded-xl text-sm font-bold uppercase transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed shrink-0 font-mono tracking-wider"
                  >
                    Analyse Repository
                  </button>
                </div>
              </div>

              {/* Form Quick Preset Suggestion Chips */}
              <div className="space-y-2 pt-2 text-center">
                <p className="text-[10px] uppercase font-mono tracking-widest text-[#00E5FF]">
                  💡 SUB-SECOND SAMPLE TEST SUITES (1-Click Test)
                </p>
                <div className="flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={() => handlePresetSelect("vitejs/vite")}
                    className="px-3.5 py-1.5 bg-[#161B26] hover:bg-[#1C2332] border border-[#242C3D] hover:border-[#00E5FF] text-xs text-gray-300 hover:text-[#00E5FF] font-mono rounded-lg transition-all cursor-pointer"
                  >
                    ⚡ vitejs/vite
                  </button>
                  <button
                    onClick={() => handlePresetSelect("expressjs/express")}
                    className="px-3.5 py-1.5 bg-[#161B26] hover:bg-[#1C2332] border border-[#242C3D] hover:border-[#00E5FF] text-xs text-gray-300 hover:text-[#00E5FF] font-mono rounded-lg transition-all cursor-pointer"
                  >
                    🚂 expressjs/express
                  </button>
                  <button
                    onClick={() => handlePresetSelect("github.com/axios/axios")}
                    className="px-3.5 py-1.5 bg-[#161B26] hover:bg-[#1C2332] border border-[#242C3D] hover:border-[#00E5FF] text-xs text-gray-300 hover:text-[#00E5FF] font-mono rounded-lg transition-all cursor-pointer"
                  >
                    📡 axios/axios
                  </button>
                  <button
                    onClick={() => handlePresetSelect("https://raw.githubusercontent.com/expressjs/express/master/lib/express.js")}
                    className="px-3.5 py-1.5 bg-[#161B26]/40 hover:bg-[#1C2332] border border-[#242C3D] hover:border-[#00E5FF] text-xs text-gray-400 hover:text-[#00E5FF] font-mono rounded-lg transition-all cursor-pointer truncate max-w-[200px]"
                    title="Direct code file crawler"
                  >
                    📄 Raw Express Entrypoint
                  </button>
                </div>
              </div>

              {/* Features Info Card */}
              <div className="max-w-md mx-auto p-4 bg-[#161B26]/30 border border-[#242C3D] rounded-xl text-left text-xs space-y-2.5 text-gray-400 leading-relaxed font-sans">
                <div className="flex items-center gap-2 text-white font-mono font-bold uppercase text-[10px]">
                  <Info className="w-4.5 h-4.5 text-[#00E5FF]" />
                  <span>How does RepoScope evaluate code?</span>
                </div>
                <p>
                  Our server leverages standard unauthenticated git crawler protocols to fetch code maps. It then buffers high-critical files and instructs the AI structure node to partition development metrics safely.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* 2. LIVE COMPILING TERMINAL LOADER */}
        {analyzing && (
          <section className="flex-grow flex flex-col justify-center max-w-3xl mx-auto w-full py-8" id="loading-panel">
            <div className="space-y-5">
              <div className="flex items-center justify-between font-mono text-xs text-gray-400">
                <span className="flex items-center gap-2">
                  <RefreshCw className="w-4.5 h-4.5 animate-spin text-[#00E5FF]" />
                  <span className="text-white font-bold">CRAWLING STREAMS ACTIVE</span>
                </span>
                <span className="text-[#00E5FF] tracking-wider uppercase bg-[#161B26] px-2.5 py-0.5 rounded border border-[#242C3D]">
                  Gathering indexes...
                </span>
              </div>

              {/* Glowing Log Terminal */}
              <div className="border border-[#00E5FF]/40 rounded-xl bg-[#080C14] shadow-2xl overflow-hidden shadow-[#00E5FF]/5 font-mono">
                <div className="bg-[#161B26] px-4 py-2.5 text-[11px] text-gray-400 border-b border-[#242C3D] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-[#00E5FF]" />
                    <span className="text-white font-semibold">REPOSCOPE STREAM CONSOLE</span>
                  </div>
                  <span className="opacity-50 text-[10px]">online feedback</span>
                </div>
                
                {/* Simulated Log Output Window */}
                <div 
                  ref={logTerminalRef}
                  className="p-5 h-[280px] overflow-y-auto text-left text-[11px] leading-relaxed space-y-2 font-mono scrollbar-none scroll-smooth select-all"
                >
                  {logs.map((log, index) => (
                    <div 
                      key={index} 
                      className={`${log.includes("[CRAWLER]") ? "text-gray-300" : log.includes("[NEURAL]") ? "text-[#00E5FF]" : log.includes("[SYSTEM]") ? "text-[#00FF66]" : "text-gray-400"}`}
                    >
                      {log}
                    </div>
                  ))}
                  {logs.length < 11 && (
                    <div className="text-[#00FF66] animate-pulse">▋</div>
                  )}
                </div>
              </div>

              <p className="text-center text-xs text-gray-500 font-sans tracking-wide">
                Analyzing directory metadata. This process is fully completed server-side to hide secure API elements.
              </p>
            </div>
          </section>
        )}

        {/* 3. DIAGNOSTIC ERROR SCREEN SPLIT */}
        {errorInfo && (
          <section className="bg-red-950/20 border border-red-500/30 rounded-2xl p-6 max-w-xl mx-auto text-center space-y-4" id="error-screen">
            <AlertCircle className="w-12 h-12 text-red-400 mx-auto animate-bounce" />
            <div className="space-y-1.5">
              <h3 className="text-lg font-bold text-red-100 font-mono">Crawler Interrupt Stream Exception</h3>
              <p className="text-xs text-red-300 leading-relaxed">{errorInfo}</p>
            </div>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-[#161B26] hover:bg-[#20273a] text-xs font-mono font-bold tracking-wider uppercase border border-red-500/20 text-gray-200 hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                Back To Input Hub
              </button>
            </div>
          </section>
        )}

        {/* 4. RESULT WEB-PAGE WORKSPACE */}
        {result && (
          <section className="space-y-6 animate-fade-in flex-1 flex flex-col justify-start" id="results-workspace">
            
            {/* ALERT BOX if active rate-limits / simulator was triggered */}
            {alertInfo && (
              <div className="bg-[#242C3D] border border-[#00E5FF]/30 p-4 rounded-xl flex items-start gap-3">
                <Info className="text-[#00E5FF] shrink-0 w-5 h-5 mt-0.5" />
                <div className="text-xs text-gray-300 leading-normal">
                  <strong className="text-white">Notice:</strong> {alertInfo}
                </div>
              </div>
            )}

            {/* TOP METADATA CARD HEADER */}
            <div className="bg-[#161B26] border border-[#242C3D] rounded-2xl p-6 relative overflow-hidden shadow-xl shrink-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#00E5FF]/2 to-transparent pointer-events-none" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={handleReset}
                      className="px-2.5 py-1.5 bg-[#0B0F19] hover:bg-[#20273a] border border-[#242C3D] rounded-lg text-gray-400 hover:text-white transition-all text-xs font-bold uppercase tracking-wider font-mono flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                    <span className="text-[10px] bg-[#00FF55]/10 text-[#00FF66] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded border border-[#00FF66]/20">
                      Successfully Profiled
                    </span>
                  </div>
                  
                  <h2 className="text-2xl font-black text-white leading-tight font-display tracking-tight break-words uppercase">
                    {result.project_name}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-4xl line-clamp-2 leading-relaxed">
                    {result.project_description}
                  </p>
                </div>

                {/* Sub KPI Quick Table stats */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 shrink-0 bg-[#0B0F19]/60 p-4 rounded-xl border border-[#242C3D] font-mono text-[10px] sm:text-xs text-gray-400">
                  <div>
                    <span className="block text-gray-600 block uppercase font-bold text-[9px]">LANGUAGE:</span>
                    <strong className="text-[#00FF66] font-semibold">{result.statistics?.primary_language || "N/A"}</strong>
                  </div>
                  <div>
                    <span className="block text-gray-600 block uppercase font-bold text-[9px]">FRAMEWORK:</span>
                    <strong className="text-white font-semibold">{result.statistics?.framework || "Bare Stack"}</strong>
                  </div>
                  <div>
                    <span className="block text-gray-600 block uppercase font-bold text-[9px]">PATTERN:</span>
                    <strong className="text-[#00E5FF] font-semibold">{result.statistics?.architecture_pattern || "Standard Model"}</strong>
                  </div>
                  <div>
                    <span className="block text-gray-600 block uppercase font-bold text-[9px]">COMPLEXITY:</span>
                    <strong className="text-white font-semibold">{result.statistics?.complexity_level || "Medium"}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* TAB SELECTOR CONTROL LAYER */}
            <div className="flex border-b border-[#242C3D] shrink-0 font-mono text-xs p-0.5 scrollbar-none overflow-x-auto gap-2">
              <button
                onClick={() => setActiveView("features")}
                className={`px-4 py-2.5 rounded-t-xl transition-all font-bold cursor-pointer shrink-0 uppercase flex items-center gap-2 ${
                  activeView === "features"
                    ? "bg-[#161B26] text-[#00FF66] border-t-2 border-[#00FF66]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Blocks className="w-4 h-4" />
                <span>Feature Classification</span>
              </button>

              <button
                onClick={() => setActiveView("stack")}
                className={`px-4 py-2.5 rounded-t-xl transition-all font-bold cursor-pointer shrink-0 uppercase flex items-center gap-2 ${
                  activeView === "stack"
                    ? "bg-[#161B26] text-[#00E5FF] border-t-2 border-[#00E5FF]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Database className="w-4 h-4" />
                <span>Under-The-Hood Stack</span>
              </button>

              <button
                onClick={() => setActiveView("architecture")}
                className={`px-4 py-2.5 rounded-t-xl transition-all font-bold cursor-pointer shrink-0 uppercase flex items-center gap-2 ${
                  activeView === "architecture"
                    ? "bg-[#161B26] text-white border-t-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>Architecture Insights</span>
              </button>

              <button
                onClick={() => setActiveView("markdown")}
                className={`px-4 py-2.5 rounded-t-xl transition-all font-bold cursor-pointer shrink-0 uppercase flex items-center gap-2 ${
                  activeView === "markdown"
                    ? "bg-[#161B26] text-amber-400 border-t-2 border-amber-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Markdown (FEATURES.md)</span>
              </button>
            </div>

            {/* WORKSPACE VALUE SLIDER AREA */}
            <div className="flex-1 bg-[#161B26]/30 border border-[#242C3D] rounded-2xl p-6 min-h-[400px]">

              {/* A. FEATURES INTERACTIVE PANEL */}
              {activeView === "features" && (
                <div className="space-y-8 animate-fade-in">
                  
                  {/* 1. SPECIAL FEATURES ROW */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-3 h-3 rounded-full bg-[#00FF66] shrink-0" />
                        <h3 className="text-sm font-mono font-bold text-[#00FF66] uppercase tracking-wider">
                          ✨ Key Architectural & Special Features
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 pl-5">
                        Deep engineering feats, caching architectures, state processing machines, and microsecond latency optimization mechanics discovered in code files.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-5">
                      {result.special_features?.map((f, index) => (
                        <div 
                          key={index} 
                          className="bg-[#0B0F19] border border-[#242C3D] hover:border-[#00FF66]/30 p-5 rounded-xl space-y-3 transition-all flex flex-col justify-between"
                        >
                          <div className="space-y-1.5">
                            <h4 className="text-sm font-semibold text-white tracking-tight uppercase flex items-center gap-2">
                              {f.title}
                            </h4>
                            <p className="text-xs text-gray-300 leading-normal">
                              {f.description}
                            </p>
                          </div>

                          <div className="pt-3.5 border-t border-[#242C3D] space-y-2">
                            <div className="text-[10px] font-mono text-gray-500">
                              <span className="text-[#00E5FF] font-bold block uppercase text-[9px] mb-0.5">📂 Observed Code Pattern:</span>
                              <code className="bg-[#161B26] px-1.5 py-0.5 rounded text-gray-300 border border-[#242C3D] leading-tight block truncate select-all">{f.evidence_pattern}</code>
                            </div>
                            <div className="text-[10px] text-gray-500 flex items-center justify-between font-mono pt-1">
                              <span>BUSINESS IMPACT rating:</span>
                              <span className="text-[#00FF66] font-bold uppercase bg-[#00FF66]/5 border border-[#00FF66]/20 px-2 py-0.5 rounded">
                                {f.impact}
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2. NORMAL FEATURES ROW */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-3 h-3 rounded-full bg-cyan-400 shrink-0" />
                        <h3 className="text-sm font-mono font-bold text-cyan-400 uppercase tracking-wider">
                          📦 Core / Standard Utilities Features
                        </h3>
                      </div>
                      <p className="text-xs text-gray-400 pl-5">
                        Standard components, typical route endpoints, environment parsers, boilerplate layouts, and default controllers.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pl-5">
                      {result.normal_features?.map((f, index) => (
                        <div key={index} className="bg-[#0B0F19] border border-[#242C3D] p-4 rounded-xl space-y-2.5">
                          <h4 className="text-xs font-semibold text-white uppercase tracking-tight">
                            {f.title}
                          </h4>
                          <p className="text-xs text-gray-400 leading-relaxed">
                            {f.description}
                          </p>
                          <div className="pt-2 text-[10px] text-gray-500 font-mono border-t border-[#242C3D]">
                            <span className="text-[9px] text-[#00E5FF] font-bold block mb-1">🗺️ FILE / LOCATION TRACE:</span>
                            <span className="italic block truncate select-all text-gray-300 bg-[#161B26]/30 px-1 py-0.5 rounded">{f.evidence_pattern}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* B. DETAILED UNDER-THE-HOOD STACK VIEW */}
              {activeView === "stack" && (
                <div className="space-y-6 animate-fade-in">
                  <div className="border-b border-[#242C3D] pb-3">
                    <h3 className="text-sm font-mono font-bold text-[#00E5FF] uppercase tracking-wider">
                      🛠️ Detailed Tech Stack & Under-the-Hood Manifest
                    </h3>
                    <p className="text-xs text-gray-400">
                      Primary compilers, package dependencies, package libraries, and runtime parameters detected in source tree indexes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Column 1 */}
                    <div className="bg-[#0B0F19] border border-[#242C3D] p-5 rounded-2xl space-y-3">
                      <div className="text-[10px] font-mono text-[#00FF66] uppercase tracking-widest font-bold">● Core Languages</div>
                      <div className="flex flex-wrap gap-1.5">
                        {result.stack_details?.languages?.map((lang, idx) => (
                          <span key={idx} className="bg-[#161B26] border border-[#242C3D] px-2.5 py-1 text-xs text-gray-200 rounded-lg font-mono">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="bg-[#0B0F19] border border-[#242C3D] p-5 rounded-2xl space-y-3">
                      <div className="text-[10px] font-mono text-[#00E5FF] uppercase tracking-widest font-bold">● Package Dependencies</div>
                      <div className="flex flex-wrap gap-1.5">
                        {result.stack_details?.dependencies?.map((dep, idx) => (
                          <span key={idx} className="bg-[#161B26] border border-[#242C3D] px-2.5 py-1 text-xs text-gray-300 rounded-lg font-mono">
                            {dep}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Column 3 */}
                    <div className="bg-[#0B0F19] border border-[#242C3D] p-5 rounded-2xl space-y-3">
                      <div className="text-[10px] font-mono text-white uppercase tracking-widest font-bold">● Compilers & Build Tools</div>
                      <div className="flex flex-wrap gap-1.5">
                        {result.stack_details?.build_tools?.map((tool, idx) => (
                          <span key={idx} className="bg-[#161B26] border border-[#242C3D] px-2.5 py-1 text-xs text-gray-200 rounded-lg font-mono">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* C. CODE QUALITY ARCHITECTURE REVIEWS */}
              {activeView === "architecture" && (
                <div className="space-y-6 animate-fade-in text-left">
                  <div className="border-b border-[#242C3D] pb-3">
                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                      📐 Architecture Design Reviews & Insights
                    </h3>
                    <p className="text-xs text-gray-400">
                      Technical evaluation of project design choices, division of concerns, and structural robustness.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {result.architecture_insights?.map((insight, idx) => (
                      <div key={idx} className="bg-[#0B0F19] border border-[#242C3D] p-5 rounded-xl space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#00FF66] shrink-0" />
                          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#00FF66]">
                            {insight.element}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans pl-6">
                          {insight.evaluation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* D. DISPATCH TO GITHUB (MARKDOWN LAYOUTS SCREEN) */}
              {activeView === "markdown" && (
                <div className="space-y-4 animate-fade-in text-left">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[#242C3D] pb-4 gap-3">
                    <div>
                      <h3 className="text-sm font-mono font-bold text-amber-400 uppercase tracking-wider">
                        📝 Compiled FEATURES.md
                      </h3>
                      <p className="text-xs text-gray-400">
                        Pre-rendered markdown block describing all evaluated special algorithms ready for immediate download.
                      </p>
                    </div>

                    {/* Action Panel Copy and download inline */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleCopyMarkdown}
                        className="px-3.5 py-2 bg-[#161B26] hover:bg-[#20273a] border border-[#242C3D] rounded-lg text-xs font-mono font-bold text-gray-200 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copied ? "COPIED!" : "COPY MARKDOWN"}</span>
                      </button>

                      <button
                        onClick={handleDownloadMarkdown}
                        className="px-3.5 py-2 bg-amber-400/20 hover:bg-amber-400/35 border border-amber-400/50 rounded-lg text-xs font-mono font-bold text-amber-400 hover:text-amber-200 transition-all flex items-center gap-1.5 cursor-pointer"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>DOWNLOAD .MD</span>
                      </button>
                    </div>
                  </div>

                  {/* Gorgeous Markdown display layout */}
                  <div className="bg-[#0B0F19] rounded-xl border border-[#242C3D] p-5 md:p-8 overflow-y-auto max-h-[500px] shadow-2xl">
                    <MarkdownRenderer text={result.markdown_features} />
                  </div>
                </div>
              )}

            </div>

            {/* RESET BUTTON */}
            <div className="pt-4 flex items-center justify-center shrink-0">
              <button
                onClick={handleReset}
                className="px-6 py-3 bg-[#161B26] hover:bg-zinc-800 text-xs text-white border border-[#242C3D] rounded-xl font-mono font-bold uppercase tracking-wider tracking-widest flex items-center gap-2 cursor-pointer transition-all hover:border-[#00E5FF]/40"
              >
                <ArrowLeft className="w-4 h-4 text-[#00E5FF]" />
                <span>Analyse Another Codebase</span>
              </button>
            </div>

          </section>
        )}

      </div>

      {/* FOOTER */}
      <footer className="border-t border-[#242C3D] bg-[#161B26]/20 px-6 py-4 mt-auto text-center font-mono text-[9px] sm:text-[10px] text-gray-500 shrink-0">
        <p>© 2026 RepoScope Systems Node -- Staging Environment Gateway. Deep-mapping software code assets seamlessly.</p>
      </footer>

      {/* Floating Copilot Bubble Terminal */}
      <AITerminal />

    </div>
  );
}
