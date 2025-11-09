export type PersonaId = "revops" | "marketing" | "product" | "support" | "engineering";

export interface Persona {
  id: PersonaId;
  title: string;
  description: string;
  metrics: string[];
}

export interface GoalBlueprint {
  id: string;
  label: string;
  summary: string;
  outcomes: string[];
  steps: Array<{
    id: string;
    title: string;
    description: string;
    effort: "low" | "medium" | "high";
    owner: string;
    tooling: string[];
  }>;
  resources: Array<{
    title: string;
    link: string;
    category: "Playbook" | "Template" | "Integration";
  }>;
}

export const personas: Persona[] = [
  {
    id: "revops",
    title: "Revenue Operations",
    description: "Automate lead routing, scoring, and attribution loops to accelerate pipeline velocity.",
    metrics: ["MQL→SQL Conversion", "Time-to-Lead-Response", "Pipeline Accuracy"]
  },
  {
    id: "marketing",
    title: "Lifecycle Marketing",
    description: "Build behavior-triggered journeys with personalization across email, ads, and in-app.",
    metrics: ["Activation Rate", "LTV/CAC", "Campaign ROI"]
  },
  {
    id: "product",
    title: "Product Management",
    description: "Streamline customer feedback synthesis and experiment rollout pipelines.",
    metrics: ["Experiment Velocity", "Feature Adoption", "NPS"]
  },
  {
    id: "support",
    title: "Customer Support",
    description: "Deflect repetitive tickets while escalating urgent cases with full context.",
    metrics: ["CSAT", "First Response Time", "Self-Serve Deflection"]
  },
  {
    id: "engineering",
    title: "Engineering Enablement",
    description: "Automate environment provisioning, QA gates, and incident workflows.",
    metrics: ["Deploy Frequency", "Change Failure Rate", "MTTR"]
  }
];

export const blueprints: Record<PersonaId, GoalBlueprint[]> = {
  revops: [
    {
      id: "deal-intelligence",
      label: "Deal Intelligence Hub",
      summary:
        "Centralize signals from CRM, usage, and intent to surface actionable selling plays.",
      outcomes: [
        "Smarter prioritization for sales teams",
        "Real-time alerts on risk and expansion signals",
        "Reduced manual data stitching"
      ],
      steps: [
        {
          id: "connect",
          title: "Connect Core Systems",
          description:
            "Use tools like Hightouch or Workato to sync CRM, product analytics, and enrichment data into a shared warehouse view.",
          effort: "medium",
          owner: "RevOps + Data",
          tooling: ["Snowflake", "Fivetran", "Workato"]
        },
        {
          id: "score",
          title: "Design Signal Scoring",
          description:
            "Define scoring logic that weights product usage, buying committee engagement, and intent data. Pipe into CRM fields.",
          effort: "medium",
          owner: "RevOps",
          tooling: ["HubSpot", "Salesforce Flow", "dbt"]
        },
        {
          id: "notify",
          title: "Automate Plays & Alerts",
          description:
            "Trigger Slack alerts and auto-create tasks in CRM when thresholds are met. Include recommended next actions.",
          effort: "low",
          owner: "RevOps",
          tooling: ["Slack Workflow Builder", "Zapier", "Gong"]
        }
      ],
      resources: [
        {
          title: "RevOps Signal Playbook",
          link: "https://www.revopscoop.com/playbooks/signal-routing",
          category: "Playbook"
        },
        {
          title: "Scorecard Template (Airtable)",
          link: "https://airtable.com/automation-scorecard",
          category: "Template"
        },
        {
          title: "Salesforce Integration Guide",
          link: "https://developer.salesforce.com/docs/platform/events",
          category: "Integration"
        }
      ]
    },
    {
      id: "renewal",
      label: "Renewal Risk Radar",
      summary:
        "Automate monitoring of contract risk signals and orchestrate proactive outreach to at-risk accounts.",
      outcomes: [
        "Lower churn through timely CS engagement",
        "Visibility into contract health",
        "Automated briefs for executive escalations"
      ],
      steps: [
        {
          id: "segments",
          title: "Define Risk Segments",
          description:
            "Segment accounts by health score, contract value, and stakeholder engagement. Sync segments to CS tools.",
          effort: "low",
          owner: "RevOps",
          tooling: ["Gainsight", "Catalyst", "Segment"]
        },
        {
          id: "signals",
          title: "Instrument Risk Signals",
          description:
            "Pull product usage drops, ticket backlog, and billing flags into a unified model using operational analytics.",
          effort: "high",
          owner: "Data Engineering",
          tooling: ["Snowflake", "Looker", "dbt"]
        },
        {
          id: "playbooks",
          title: "Automate CS Playbooks",
          description:
            "Trigger renewal workflows with templated outreach, meeting prep packets, and exec alerts.",
          effort: "medium",
          owner: "Customer Success",
          tooling: ["Gainsight", "Zapier", "Asana"]
        }
      ],
      resources: [
        {
          title: "Churn Forecasting Template",
          link: "https://notion.so/templates/churn-forecast",
          category: "Template"
        },
        {
          title: "Gainsight Journey Orchestrator",
          link: "https://www.gainsight.com/journey-orchestrator/",
          category: "Integration"
        },
        {
          title: "Executive Risk Brief Doc",
          link: "https://www.notion.so/templates/executive-brief",
          category: "Playbook"
        }
      ]
    }
  ],
  marketing: [
    {
      id: "full-funnel",
      label: "Full-Funnel Journey Builder",
      summary:
        "Automate cross-channel nurture sequences tailored to lifecycle stage and behavioral triggers.",
      outcomes: [
        "Higher activation from targeted sequences",
        "Consistent messaging across email, paid, and in-app",
        "Reduced manual campaign execution"
      ],
      steps: [
        {
          id: "targets",
          title: "Define Lifecycle Milestones",
          description:
            "Map activation criteria, adoption signals, and upgrade moments. Document channel touchpoints.",
          effort: "low",
          owner: "Growth Marketing",
          tooling: ["Miro", "FigJam"]
        },
        {
          id: "triggers",
          title: "Instrument Behavior Triggers",
          description:
            "Set up event tracking and traits in Segment or RudderStack and sync to marketing automation.",
          effort: "medium",
          owner: "Growth Engineering",
          tooling: ["Segment", "RudderStack", "Customer.io"]
        },
        {
          id: "journeys",
          title: "Launch Multichannel Journeys",
          description:
            "Use Customer.io or Iterable to orchestrate messaging with conditional logic and personalization.",
          effort: "medium",
          owner: "Lifecycle Marketing",
          tooling: ["Customer.io", "Iterable", "Meta Ads Manager"]
        }
      ],
      resources: [
        {
          title: "Lifecycle Journey Template",
          link: "https://miro.com/templates/customer-lifecycle",
          category: "Template"
        },
        {
          title: "Segment Journey API",
          link: "https://segment.com/docs/connections",
          category: "Integration"
        },
        {
          title: "Personalization Checklist",
          link: "https://www.retentionscience.com/personalization-checklist",
          category: "Playbook"
        }
      ]
    },
    {
      id: "content-copilot",
      label: "Content Automation Co-Pilot",
      summary:
        "Automate content planning, drafting, and distribution with AI-assisted workflows.",
      outcomes: [
        "Faster content production cycles",
        "Consistent messaging and tone",
        "Automated distribution across channels"
      ],
      steps: [
        {
          id: "calendar",
          title: "Generate SEO-Driven Content Calendar",
          description:
            "Use tools like Clearscope or Surfer to surface topic clusters and auto-populate briefs in Notion.",
          effort: "low",
          owner: "Content Marketing",
          tooling: ["Clearscope", "Notion API"]
        },
        {
          id: "draft",
          title: "Create AI Drafting Workflows",
          description:
            "Leverage GPT-based prompts via Zapier to draft outlines and social copy. Route drafts to editors in Asana.",
          effort: "medium",
          owner: "Content Ops",
          tooling: ["Zapier", "OpenAI API", "Asana"]
        },
        {
          id: "distribute",
          title: "Automate Distribution & Repurposing",
          description:
            "Publish final assets via Webflow and auto-schedule derivative content across social and email.",
          effort: "medium",
          owner: "Content Ops",
          tooling: ["Buffer", "HubSpot", "Webflow"]
        }
      ],
      resources: [
        {
          title: "AI Prompt Library",
          link: "https://promptvibes.ai/content-marketing",
          category: "Playbook"
        },
        {
          title: "Zapier OpenAI Recipes",
          link: "https://zapier.com/apps/openai/integrations",
          category: "Integration"
        },
        {
          title: "Editorial Calendar Board",
          link: "https://notion.so/templates/editorial-calendar",
          category: "Template"
        }
      ]
    }
  ],
  product: [
    {
      id: "feedback-synthesis",
      label: "Feedback Synthesis Engine",
      summary:
        "Automate aggregation and clustering of qualitative feedback into actionable insights.",
      outcomes: [
        "Faster signal detection",
        "Reduced manual tagging effort",
        "Prioritized roadmap proposals"
      ],
      steps: [
        {
          id: "ingest",
          title: "Ingest Feedback Streams",
          description:
            "Centralize Zendesk, Gong, and in-app feedback into a unified warehouse table updated daily.",
          effort: "medium",
          owner: "Product Ops",
          tooling: ["Fivetran", "Snowflake", "Gong"]
        },
        {
          id: "cluster",
          title: "Cluster Themes with AI",
          description:
            "Run topic modeling or GPT clustering to group feedback by pain point and persona automatically.",
          effort: "medium",
          owner: "Data Science",
          tooling: ["OpenAI", "Hex", "dbt"]
        },
        {
          id: "brief",
          title: "Automate Insight Briefs",
          description:
            "Publish weekly Notion briefs with trend highlights, impact scores, and suggested experiments.",
          effort: "low",
          owner: "Product Ops",
          tooling: ["Notion API", "Zapier"]
        }
      ],
      resources: [
        {
          title: "Feedback Taxonomy Template",
          link: "https://www.productboard.com/templates/feedback",
          category: "Template"
        },
        {
          title: "Hex Notebook Example",
          link: "https://hex.tech/gallery/customer-feedback",
          category: "Integration"
        },
        {
          title: "Experiment Prioritization Framework",
          link: "https://www.reforge.com/blog/prioritization",
          category: "Playbook"
        }
      ]
    },
    {
      id: "rollout-control",
      label: "Rollout Control Tower",
      summary:
        "Automate feature flag rollouts, guardrails, and rollback alerts for safer launches.",
      outcomes: [
        "Fewer incidents from new releases",
        "Real-time visibility into launch health",
        "Clear rollback playbooks"
      ],
      steps: [
        {
          id: "flagging",
          title: "Instrument Feature Flags",
          description:
            "Organize flags by cohort, environment, and kill-switch. Document success criteria before launch.",
          effort: "low",
          owner: "Product Engineering",
          tooling: ["LaunchDarkly", "Split.io"]
        },
        {
          id: "guardrails",
          title: "Define Guardrail Metrics",
          description:
            "Set up dashboards that monitor latency, errors, and engagement. Automate anomaly alerts.",
          effort: "medium",
          owner: "Data Engineering",
          tooling: ["Datadog", "Grafana", "Amplitude"]
        },
        {
          id: "rollback",
          title: "Automate Rollback Paths",
          description:
            "Build incident automations that page owners, post in Slack, and toggle flags when thresholds breach.",
          effort: "medium",
          owner: "SRE",
          tooling: ["PagerDuty", "Opsgenie", "Slack"]
        }
      ],
      resources: [
        {
          title: "Feature Flag Runbook",
          link: "https://launchdarkly.com/resources/runbook",
          category: "Playbook"
        },
        {
          title: "Datadog Alert Recipes",
          link: "https://docs.datadoghq.com/monitors/",
          category: "Integration"
        },
        {
          title: "Launch Checklist Template",
          link: "https://notion.so/templates/launch-checklist",
          category: "Template"
        }
      ]
    }
  ],
  support: [
    {
      id: "self-service",
      label: "Self-Service Automation",
      summary:
        "Automate resolution of high-volume issues with guided diagnostics and AI-powered responses.",
      outcomes: [
        "Lower ticket volume",
        "Improved response times",
        "Consistent knowledge delivery"
      ],
      steps: [
        {
          id: "taxonomy",
          title: "Build Issue Taxonomy",
          description:
            "Tag historical tickets and categorize by topic, severity, and channel. Feed into knowledge base planning.",
          effort: "medium",
          owner: "Support Ops",
          tooling: ["Zendesk", "Kustomer"]
        },
        {
          id: "flows",
          title: "Create Guided Flows",
          description:
            "Use Intercom, Ada, or Stonly to design interactive decision trees with Smart Replies for known issues.",
          effort: "medium",
          owner: "Support Ops",
          tooling: ["Intercom", "Stonly", "Ada"]
        },
        {
          id: "loop",
          title: "Automate Escalation Loop",
          description:
            "Integrate with PagerDuty or Slack to escalate priority tickets with full context and recommended actions.",
          effort: "low",
          owner: "Support Engineering",
          tooling: ["PagerDuty", "Slack", "Zendesk"]
        }
      ],
      resources: [
        {
          title: "Automation ROI Calculator",
          link: "https://airtable.com/automation-roi",
          category: "Template"
        },
        {
          title: "Intercom Finite State Machines",
          link: "https://www.intercom.com/help/en/articles/7039952-workflows-overview",
          category: "Integration"
        },
        {
          title: "CS Automation Playbook",
          link: "https://www.zendesk.com/resources/automation-playbook",
          category: "Playbook"
        }
      ]
    }
  ],
  engineering: [
    {
      id: "devex-flywheel",
      label: "Developer Experience Flywheel",
      summary:
        "Automate developer onboarding, environment provisioning, and quality gates.",
      outcomes: [
        "Faster onboarding times",
        "Higher deploy frequency",
        "Reduced friction in dev workflows"
      ],
      steps: [
        {
          id: "environments",
          title: "Automate Sandbox Environments",
          description:
            "Provision ephemeral environments via Terraform and GitHub Actions for every PR with seeded test data.",
          effort: "high",
          owner: "Platform Engineering",
          tooling: ["Terraform", "GitHub Actions", "Kubernetes"]
        },
        {
          id: "quality",
          title: "Codify Quality Gates",
          description:
            "Integrate automated tests, linting, and security scans into CI with clear pass/fail criteria.",
          effort: "medium",
          owner: "Platform Engineering",
          tooling: ["GitHub Actions", "Snyk", "Playwright"]
        },
        {
          id: "enablement",
          title: "Ship Onboarding Portals",
          description:
            "Generate custom onboarding checklists and Slack nudges via Workbot to keep new hires on track.",
          effort: "low",
          owner: "Dev Experience",
          tooling: ["Workato", "Slack", "Notion"]
        }
      ],
      resources: [
        {
          title: "Terraform Module Library",
          link: "https://registry.terraform.io/",
          category: "Integration"
        },
        {
          title: "CI Pipeline Blueprint",
          link: "https://docs.github.com/actions/automating-builds-and-tests",
          category: "Playbook"
        },
        {
          title: "Onboarding Portal Template",
          link: "https://www.notion.so/templates/developer-onboarding",
          category: "Template"
        }
      ]
    },
    {
      id: "incident-autopilot",
      label: "Incident Response Autopilot",
      summary:
        "Automate detection, triage, and retrospectives for production incidents.",
      outcomes: [
        "Lower MTTR through faster escalations",
        "Structured post-incident reviews",
        "Better stakeholder communication"
      ],
      steps: [
        {
          id: "detect",
          title: "Automate Detection",
          description:
            "Configure alerting pipelines and anomaly detection on key service metrics with auto-tagging of incidents.",
          effort: "medium",
          owner: "SRE",
          tooling: ["Datadog", "PagerDuty", "Opsgenie"]
        },
        {
          id: "triage",
          title: "Streamline Triage War Rooms",
          description:
            "Spin up Slack Incident channels, auto-invite responders, and post runbook links with bots.",
          effort: "low",
          owner: "SRE",
          tooling: ["Slack", "FireHydrant", "Blameless"]
        },
        {
          id: "retro",
          title: "Automate Postmortems",
          description:
            "Compile timelines, assign actions, and publish retrospectives automatically for review.",
          effort: "medium",
          owner: "SRE",
          tooling: ["Rootly", "Jira", "Confluence"]
        }
      ],
      resources: [
        {
          title: "Incident Command Framework",
          link: "https://www.pagerduty.com/resources/learn/incident-command/",
          category: "Playbook"
        },
        {
          title: "FireHydrant Automation",
          link: "https://firehydrant.com/product/automation/",
          category: "Integration"
        },
        {
          title: "Postmortem Template",
          link: "https://www.atlassian.com/incident-management/runbooks/postmortem-template",
          category: "Template"
        }
      ]
    }
  ]
};

export const effortToLabel: Record<"low" | "medium" | "high", string> = {
  low: "Low Effort",
  medium: "Moderate Effort",
  high: "High Effort"
};
