import React, { useState } from "react";
import { Terminal, Database, ShieldAlert, Cpu, HeartHandshake, Eye, GitBranch, ArrowRight, Server, FileCode2 } from "lucide-react";

export default function BlueprintView() {
  const [activeTab, setActiveTab] = useState<"visual" | "auth" | "crawling" | "gemini">("visual");

  return (
    <div className="space-y-6">
      <div className="border border-[#242C3D] bg-[#161B26] p-6 rounded-lg">
        <h2 className="text-xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00FF66] mb-2 flex items-center gap-2">
          <Terminal className="text-[#00E5FF] w-5 h-5 animate-pulse" />
          SYSTEM SPECIFICATION BLUEPRINT: THE TECH-TO-SALES SYNC ENGINE
        </h2>
        <p className="text-sm text-gray-400">
          This architectural hub displays the deep technical specifications, design patterns, backend routes, and database models powering our B2B SaaS system. Toggle tabs below to explore the elite technical specs.
        </p>
      </div>

      {/* Blueprint Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-[#242C3D] pb-3">
        <button
          onClick={() => setActiveTab("visual")}
          className={`px-4 py-2 text-xs font-mono rounded-md border transition-all ${
            activeTab === "visual"
              ? "bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]"
              : "border-transparent text-gray-400 hover:text-gray-200"
          }`}
        >
          🖥️ SECTION 1: VISUAL & THEME MATRIX
        </button>
        <button
          onClick={() => setActiveTab("auth")}
          className={`px-4 py-2 text-xs font-mono rounded-md border transition-all ${
            activeTab === "auth"
              ? "bg-[#00FF66]/10 text-[#00FF66] border-[#00FF66]"
              : "border-transparent text-gray-400 hover:text-gray-200"
          }`}
        >
          🔐 SECTION 2: ACCESS & STRUCTURE
        </button>
        <button
          onClick={() => setActiveTab("crawling")}
          className={`px-4 py-2 text-xs font-mono rounded-md border transition-all ${
            activeTab === "crawling"
              ? "bg-[#00E5FF]/10 text-[#00E5FF] border-[#242C3D] hover:border-[#00E5FF]"
              : "border-transparent text-gray-400 hover:text-gray-200"
          }`}
        >
          🕵️ SECTION 3: AST PARSER & AGENT PIPELINE
        </button>
        <button
          onClick={() => setActiveTab("gemini")}
          className={`px-4 py-2 text-xs font-mono rounded-md border transition-all ${
            activeTab === "gemini"
              ? "bg-[#00FF66]/10 text-[#00FF66] border-[#242C3D] hover:border-[#00FF66]"
              : "border-transparent text-gray-400 hover:text-gray-200"
          }`}
        >
          🧠 SECTION 4: CO-PILOT PROMPTS
        </button>
      </div>

      {/* Tab Area Content */}
      <div className="border border-[#242C3D] bg-[#161B26]/60 rounded-xl p-6 relative overflow-hidden backdrop-blur-md">
        
        {/* Decorative corner grid background matching Cyberpunk Theme */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-cyan-500/2 to-transparent pointer-events-none" />

        {activeTab === "visual" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#242C3D] pb-3">
              <Eye className="text-[#00E5FF] w-6 h-6" />
              <h3 className="text-lg font-display text-[#F3F4F6] font-bold">FRONTEND MATRIX & CONTROLS</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
              <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-3">
                <span className="text-[#00E5FF] uppercase font-bold tracking-wider">palette variables</span>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center justify-between border-b border-[#242C3D] pb-1">
                    <span>Primary BG:</span> <span className="text-white bg-[#0B0F19] px-2 py-0.5 rounded border border-[#242C3D]">#0B0F19</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#242C3D] pb-1">
                    <span>Card Surface:</span> <span className="text-white bg-[#161B26] px-2 py-0.5 rounded border border-[#242C3D]">#161B26</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#242C3D] pb-1">
                    <span>Borders Hex:</span> <span className="text-white bg-[#242C3D] px-2 py-0.5 rounded border border-[#242C3D]">#242C3D</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#242C3D] pb-1">
                    <span>Tech Cyan Accent:</span> <span className="text-[#00E5FF] font-bold">#00E5FF</span>
                  </li>
                  <li className="flex items-center justify-between border-b border-[#242C3D] pb-1">
                    <span>Sales Green Accent:</span> <span className="text-[#00FF66] font-bold">#00FF66</span>
                  </li>
                </ul>
              </div>

              <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-3">
                <span className="text-[#00FF66] uppercase font-bold tracking-wider">layout architecture</span>
                <p className="text-gray-400 text-xs font-sans leading-relaxed">
                  Engineered with a persistent responsive grid featuring an <strong>RBAC switcher</strong> in the top header. The left sidebar handles navigation shortcuts between high-priority scopes. A central pane displays the side-by-side metrics: tracking active developer commit velocity vs outgoing cold campaign progress. A floating client-facing AI terminal sits in the bottom right corner of the workspace, listening to user queries about feature translation values.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-mono text-[#00E5FF]">System Layout Diagram (ASCII)</h4>
              <pre className="bg-[#0b101c] border border-[#242C3D] p-4 rounded-lg text-xs text-gray-300 font-mono overflow-x-auto leading-relaxed">
{`+---------------------------------------------------------------------------------+
|   TECH-TO-SALES ENGINE (RBAC TOGGLE: [ TECHNICAL ] vs [ COMMERCIAL CO-FOUNDER ] )|
+---------------------------------------------------------------------------------+
| [SIDEBAR]   | [HEADER]: Global Stats (Total Commits: 53 | High-yield pitches: 40) |
|             +-------------------------------------------------------------------+
| Dashboard   | [CO-FOUNDER METRIC SPLITS]                                        |
|             | ----------------------------------  ----------------------------  |
| Repo Linker | | Git Commit Velocity            |  | Sales Cold outreach rate |  |
|             | | [ c-12: queue rewrite  ]       |  | [ s-09: 140 cold mails   ] |  |
| Client Hub  | | [ c-11: stripe capturing ]     |  | [ s-10: 2 contract sends ] |  |
|             | ----------------------------------  ----------------------------  |
| Blueprint   |                                                                   |
|             | [AI TRANSLATED WORKSPACE FEED]                                    |
| Settings    |   * Core Gateway Commit -> Translated: "3.2x faster response... " |
+-------------+------------------------------------------------+------------------+
                                                               | [AI FLOATING BOX]|
                                                               | (Active Query)   |
                                                               +------------------+`}
              </pre>
            </div>
          </div>
        )}

        {activeTab === "auth" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#242C3D] pb-3">
              <Database className="text-[#00FF66] w-6 h-6" />
              <h3 className="text-lg font-display text-[#F3F4F6] font-bold">ACCESS CONTROL CODE & SQL SCHEMA</h3>
            </div>

            <div className="space-y-3 text-sm text-gray-300 font-sans">
              <p>
                The database runs high-availability PostgreSQL with ACID constraints, enforcing referential integrity. User privileges are checked in a key middleware that segments dashboard commands, restricting technical actions (like forcing manual webhooks and scoping staging repos) to the <code>Technical Co-Founder</code> role, and metrics logging or outreach triggers to the <code>Commercial Co-Founder</code> role.
              </p>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 font-mono text-[11px]">
              <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-2">
                <span className="text-[#00E5FF] font-bold block border-b border-[#242C3D] pb-1">1. USERS TABLE SCHEMA</span>
                <pre className="text-gray-400 overflow-x-auto">
{`CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role_type VARCHAR(50) NOT NULL 
    CHECK (role_type IN (
      'Technical Co-Founder', 
      'Commercial Co-Founder'
    )),
  github_token VARCHAR(255),
  hubspot_token VARCHAR(255),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);`}
                </pre>
              </div>

              <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-2">
                <span className="text-[#00FF66] font-bold block border-b border-[#242C3D] pb-1">2. COMMIT_LOGS TABLE SCHEMA</span>
                <pre className="text-gray-400 overflow-x-auto">
{`CREATE TABLE commit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  hash VARCHAR(40) NOT NULL,
  repo_name VARCHAR(100) NOT NULL,
  raw_message TEXT NOT NULL,
  translated_value TEXT NOT NULL,
  telemetry_status VARCHAR(30) DEFAULT 'Pending',
  timestamp TIMESTAMPTZ NOT NULL,
  CONSTRAINT hash_repo_unique UNIQUE (hash, repo_name)
);
CREATE INDEX idx_commit_telemetry 
ON commit_logs(telemetry_status);`}
                </pre>
              </div>

              <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-2">
                <span className="text-[#00E5FF] font-bold block border-b border-[#242C3D] pb-1">3. SALES_METRICS TABLE SCHEMA</span>
                <pre className="text-gray-400 overflow-x-auto">
{`CREATE TABLE sales_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rep_name VARCHAR(150) NOT NULL,
  event_type VARCHAR(100) NOT NULL,
  payload_count INTEGER NOT NULL CHECK (payload_count >= 0),
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_sales_rep 
ON sales_metrics(rep_name);`}
                </pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === "crawling" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#242C3D] pb-3">
              <Cpu className="text-[#00E5FF] w-6 h-6" />
              <h3 className="text-lg font-display text-[#F3F4F6] font-bold">AUTOMATED CRAWLER & AST PARSING</h3>
            </div>

            <div className="space-y-4 font-sans text-sm text-gray-300">
              <p>
                Unlike basic platforms that count arbitrary additions and deletions (which forces engineers to split files into single-line noise to inflate status lists), our parser analyzes actual syntax tree changes.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-2 font-mono text-xs">
                  <span className="text-[#00E5FF] block border-b border-[#242C3D] pb-1 font-bold">AST PARSING CONTROLLER LOGIC (Node.js)</span>
                  <pre className="text-gray-400 overflow-x-auto text-[11px] leading-relaxed">
{`import espree from "espree"; // TS parser

export function parseSyntaxTree(codeBefore, codeAfter) {
  const astBefore = espree.parse(codeBefore, { ecmaVersion: 12 });
  const astAfter = espree.parse(codeAfter, { ecmaVersion: 12 });
  
  // Scans for modification variables, functions, router endpoints
  const endpoints = extractEndpoints(astAfter).filter(
    e => !extractEndpoints(astBefore).includes(e)
  );
  
  return {
    semanticGains: endpoints.length > 0,
    addedPaths: endpoints,
    deltaComplexity: calculateCC(astAfter) - calculateCC(astBefore)
  };
}`}
                  </pre>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#00E5FF]/10 text-[#00E5FF] rounded mt-0.5 font-mono text-xs">A</div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-white uppercase">FastAPI Webhook Listeners</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        An asynchronous queue endpoint captures incoming GitHub <code>push</code> payloads. It parses commit messages, flags modified modules, and registers the logs under <code>telemetry_status = 'Pending'</code> within our PostgreSQL storage array.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="p-1 bg-[#00FF66]/10 text-[#00FF66] rounded mt-0.5 font-mono text-xs">B</div>
                    <div>
                      <h4 className="text-xs font-mono font-bold text-white uppercase">Celery background tasks (Celery + Redis)</h4>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        The webhooks trigger immediate parallel scan schedules. A micro-worker grabs tasks from Redis, clones only modified files, extracts AST paths (e.g. modified router files, SQL trigger modules), and forwards the semantic summaries directly to the Gemini API node for fast commercial translations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "gemini" && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-[#242C3D] pb-3">
              <FileCode2 className="text-[#00FF66] w-6 h-6" />
              <h3 className="text-lg font-display text-[#F3F4F6] font-bold">THE GEMINI AI TRANSLATION SYSTEM</h3>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-gray-300 font-sans">
                The platform contains built-in pipeline queries translating dry git logs into client-winning pitches using <code>gemini-3.5-flash</code>. Below are the actual prompt templates compiled in our live Express endpoints.
              </p>

              <div className="border border-[#242C3D] bg-[#0B0F19] rounded-lg overflow-hidden">
                <div className="bg-[#1c2331] px-4 py-2 text-xs font-mono text-[#00E5FF] border-b border-[#242C3D]">
                  SYSTEM_INSTRUCTION PROMPT TEMPLATE
                </div>
                <pre className="text-[11px] text-[#00FF66] p-4 font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
{`You are an elite Tech-to-Sales Translation Engine. Translate this dry, highly technical software commit message into a highly compelling, professional, client-friendly business value asset or commercial pitch bullet point. 
Focus purely on what this means for enterprise clients, such as performance gains, security enhancements, cost savings, software stability, or user experience retention. Keep it under 25 words. 

Avoid clinical jargon, do not sound spammy, and do not use technical terms like "regex", "refactor", "index", or language specifics in the output. Instead, use business terms like "latency", "system throughput", "data security", "system self-healing".

Input: "replaced regex engine with state-machine lexer for processing webhook headers under high backpressure"
Output: "Accelerated API response times by 320% during traffic surges, guaranteeing zero server crashes for high-volume enterprise users."`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans text-xs">
                <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-2">
                  <span className="text-[#00FF66] font-mono font-bold block uppercase tracking-wider">Highlight Engine</span>
                  <p className="text-gray-400 leading-relaxed">
                    Filters the parsed commit database for critical changes containing core modules, groups parallel updates together daily, and extracts high-impact client elevator talking points. This prevents spam while maintaining client relevance.
                  </p>
                </div>
                <div className="border border-[#242C3D] bg-[#0B0F19] p-4 rounded-lg space-y-2">
                  <span className="text-[#00E5FF] font-mono font-bold block uppercase tracking-wider">Morning Brief Publisher</span>
                  <p className="text-gray-400 leading-relaxed">
                    Compiles daily technical commits into an executive digest. Delivers Slack or email publications to the sales team, updating them instantly on exactly what has shipped so they can confidently pitch new capabilities to prospects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
