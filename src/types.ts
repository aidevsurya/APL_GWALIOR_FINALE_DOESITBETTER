export interface DBUser {
  id: string;
  email: string;
  password_hash: string;
  role_type: "Technical Co-Founder" | "Commercial Co-Founder";
}

export interface CommitLog {
  id: string;
  hash: string;
  repo_name: string;
  raw_message: string;
  translated_value: string;
  telemetry_status: "Parsed" | "Optimized" | "Pending" | "Failed";
  timestamp: string;
}

export interface SalesMetric {
  id: string;
  rep_name: string;
  event_type: "Cold Outreach Email" | "Demo Scheduled" | "Prospect Call" | "Contract Sent";
  payload_count: number;
  created_at: string;
}

export interface SystemData {
  users: DBUser[];
  commit_logs: CommitLog[];
  sales_metrics: SalesMetric[];
}
