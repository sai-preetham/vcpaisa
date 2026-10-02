export type PortfolioStartup = {
  name: string;
  oneLiner: string;
  sector: string;
  location: string;
  website: string;
  fundedAt: string;
  sample?: boolean;
};

export const portfolio: PortfolioStartup[] = [
  {
    name: "NimbusCart",
    oneLiner: "AI checkout that recovers abandoned carts in WhatsApp.",
    sector: "Commerce",
    location: "Bengaluru",
    website: "https://example.com",
    fundedAt: "2026",
    sample: true,
  },
  {
    name: "Kala Labs",
    oneLiner: "Design systems for vernacular Indian brands.",
    sector: "Design / AI",
    location: "Mumbai",
    website: "https://example.com",
    fundedAt: "2026",
    sample: true,
  },
  {
    name: "RoutePaisa",
    oneLiner: "Micro-treasury rails for D2C founders.",
    sector: "Fintech",
    location: "Delhi NCR",
    website: "https://example.com",
    fundedAt: "2026",
    sample: true,
  },
  {
    name: "FarmStack",
    oneLiner: "Cold-chain intel for peri-urban farms.",
    sector: "Agritech",
    location: "Pune",
    website: "https://example.com",
    fundedAt: "2026",
    sample: true,
  },
  {
    name: "Clerkly",
    oneLiner: "Compliance copilots for early-stage India Ops.",
    sector: "SaaS",
    location: "Hyderabad",
    website: "https://example.com",
    fundedAt: "2026",
    sample: true,
  },
  {
    name: "Signal Board",
    oneLiner: "Founder CRM that turns intros into diligence.",
    sector: "Devtools",
    location: "Remote",
    website: "https://example.com",
    fundedAt: "2026",
    sample: true,
  },
];
