// Tipos del dominio Renova. Espejo de src/lib/supabase/client.ts.
// El schema como fuente de verdad vive en el repo vertex-pather (database/migrations/).

export type Source = "personal" | "professional" | string; // string = MCP de origen (ej. "gmail-mcp")

export type ProjectStatus =
  | "lead"
  | "quoted"
  | "scheduled"
  | "in_progress"
  | "completed"
  | "cancelled";

export type ServiceType = "power_washing" | "maintenance" | "cleaning" | "painting";

export interface Project {
  id: string; // UUID
  client_name: string;
  service_type: ServiceType;
  location: string;
  status: ProjectStatus;
  scheduled_date: string | null; // TIMESTAMPTZ
  completed_date: string | null; // TIMESTAMPTZ
  partner_name: string | null;
  source: Source;
  created_at: string; // TIMESTAMPTZ
  updated_at: string; // TIMESTAMPTZ
}

export type FinanceType = "income" | "expense";

export interface Finance {
  id: string; // UUID
  project_id: string | null;
  type: FinanceType;
  amount_usd: number;
  description: string;
  source: Source;
  created_at: string; // TIMESTAMPTZ
}

export type MaterialUnit = "unit" | "gallon" | "box" | "hour";

export interface LogisticsMaterial {
  id: string; // UUID
  project_id: string | null;
  name: string;
  quantity: number;
  unit: MaterialUnit;
  cost_usd: number;
  source: Source;
  created_at: string; // TIMESTAMPTZ
}

export type AgentAction = "created" | "updated" | "notified" | "error";

export interface AgentLog {
  id: string; // UUID
  agent_name: string;
  action: AgentAction;
  entity: string;
  entity_id: string | null;
  detail: string | null;
  source: Source;
  created_at: string; // TIMESTAMPTZ
}

// Shape mínimo para el cliente tipado de supabase-js (createClient<Database>)
export interface Database {
  public: {
    Tables: {
      projects: { Row: Project; Insert: Partial<Project>; Update: Partial<Project> };
      finances: { Row: Finance; Insert: Partial<Finance>; Update: Partial<Finance> };
      logistics_materials: {
        Row: LogisticsMaterial;
        Insert: Partial<LogisticsMaterial>;
        Update: Partial<LogisticsMaterial>;
      };
      agents_log: { Row: AgentLog; Insert: Partial<AgentLog>; Update: Partial<AgentLog> };
    };
  };
}
