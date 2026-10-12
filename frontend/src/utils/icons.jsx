import {
  Activity, Bot, BookOpen, Boxes, Brain, Bug, Building2, Circle, Code2, Container, Cpu, Database, Eye, FileJson, FileText,
  FlaskConical, Gamepad2, Gauge, GitBranch, Globe, HelpCircle, KeyRound, Layers, Layout, LineChart, ListTree, Mail, Megaphone,
  MessageCircle, MessageSquare, Network, PenLine, PenTool, Repeat, RotateCcw, Rocket, Search, Send, Server, ShieldCheck,
  Sparkles, Users, Wind, Workflow,
} from 'lucide-react';

// Maps icon names used in /data files to Lucide components (curated so the bundle stays small).
// Unknown names fall back to a neutral circle.
const icons = {
  Activity, Bot, BookOpen, Boxes, Brain, Bug, Building2, Code2, Container, Cpu, Database, Eye, FileJson, FileText,
  FlaskConical, Gamepad2, Gauge, GitBranch, Globe, HelpCircle, KeyRound, Layers, Layout, LineChart, ListTree, Mail, Megaphone,
  MessageCircle, MessageSquare, Network, PenLine, PenTool, Repeat, RotateCcw, Rocket, Search, Send, Server, ShieldCheck,
  Sparkles, Users, Wind, Workflow,
};

export function Icon({ name, size = 20, ...rest }) {
  const Cmp = icons[name] || Circle;
  return <Cmp size={size} aria-hidden="true" {...rest} />;
}
