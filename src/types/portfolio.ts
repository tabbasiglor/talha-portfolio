export interface ProjectItem {
  id: string;
  title: string;
  meta: string;
  metrics: string[];
  stack: string[];
  summary: string;
  flow: string[];
  proof: string[];
}

export interface CapabilityItem {
  id: string;
  name: string;
  category: string;
  impact: number;
  description: string;
  triggers: string[];
  deliverables: string[];
}
