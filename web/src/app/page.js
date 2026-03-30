"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);
  return null;
};

const DIMENSIONS = [
  {
    id: "data",
    title: "Data Readiness",
    short: "Data",
    subtitle: "Availability, quality, integration, and governance of financial data",
    color: "#1B4F72",
    accent: "#2E86C1",
    questions: [
      {
        id: "d1",
        audience: "finance",
        text: "How is financial data currently stored and managed across the organization?",
        lookFor:
          "Centralized systems with clear ownership vs. scattered spreadsheets and local files across entities",
      },
      {
        id: "d2",
        audience: "finance",
        text:
          "How would you rate the overall quality of financial data, in terms of accuracy, completeness, and consistency across entities?",
        lookFor:
          "Documented quality standards enforced at source vs. ad-hoc corrections after errors surface",
      },
      {
        id: "d3",
        audience: "both",
        text:
          "To what extent is data integrated across ERPs, subledgers, and reporting tools, or does it remain siloed by entity, region, or function?",
        lookFor:
          "Automated data flows with reconciled outputs vs. manual consolidation and re-keying between systems",
      },
      {
        id: "d4",
        audience: "both",
        text:
          "Is there a formal data governance structure in place, including defined data owners, access controls, master data standards, and lineage documentation?",
        lookFor:
          "Assigned data stewards with documented accountability vs. unclear ownership and decentralised master data maintenance with frequent duplicates",
      },
      {
        id: "d5",
        audience: "finance",
        text:
          "How easily can finance teams access the data they need for analysis and reporting, without IT intervention or manual workarounds?",
        lookFor:
          "Self-service dashboards and data access vs. ticket-based requests with multi-day turnaround",
      },
      {
        id: "d6",
        audience: "both",
        text:
          "Are there processes to continuously monitor data quality, flag anomalies, and remediate issues proactively?",
        lookFor:
          "Automated monitoring with alerts vs. data quality issues discovered only during month-end close",
      },
      {
        id: "d7",
        audience: "both",
        text:
          "Where is finance data primarily hosted – in cloud-based solutions, on-premise servers, or a hybrid setup – and how does this affect cross-system data accessibility?",
        lookFor: "Cloud platform with cross-system access vs. isolated local data",
      },
      {
        id: "d8",
        audience: "both",
        text:
          "Does the organization have access to unstructured financial data (e.g., contracts, invoices, emails, narrative reports), and is it stored in a way that allows retrieval or analysis?",
        lookFor:
          "Indexed, searchable unstructured data in accessible repositories vs. files stored in local drives or inboxes with no retrieval mechanism",
        isNew: true,
      },
    ],
    vignettes: {
      l2: [
        "Finance data resides in multiple ERPs; consolidation requires manual extraction into Excel",
        "Data quality issues are known but addressed reactively; no formal owner assigned",
        "Teams spend significant time reconciling inconsistencies before each reporting cycle",
        "Unstructured documents are stored in shared drives with no indexing",
      ],
      l3: [
        "A central data warehouse exists and is largely trusted, but some regions maintain local shadow copies",
        "Data quality issues are tracked and reported, but remediation is reactive rather than automated",
        "A data governance policy exists on paper; ownership is inconsistently enforced",
        "Some unstructured data has been digitised but cross-functional access remains limited",
      ],
      l4: [
        "Unified data warehouse integrates all ERPs via automated pipelines; quality rules enforced at ingestion",
        "Formal data stewards assigned per domain; lineage is documented and auditable",
        "Finance teams access data through self-service dashboards without IT dependency",
        "Unstructured data is indexed and accessible; structured and unstructured sources are combined for richer analysis",
      ],
    },
  },
  {
    id: "tech",
    title: "Technology & Infrastructure",
    short: "Technology",
    subtitle: "System landscape, cloud readiness, API capability, and AI deployment infrastructure",
    color: "#1E4D2B",
    accent: "#27AE60",
    questions: [
      {
        id: "t1",
        audience: "both",
        text:
          "How many ERP systems are currently in use across the organization, and how standardized is the system landscape?",
        lookFor:
          "Single harmonized ERP (or well-integrated landscape) vs. dozens of legacy instances across entities with no shared architecture",
      },
      {
        id: "t2",
        audience: "both",
        text:
          "To what extent are core finance systems cloud-based, and is there an active cloud migration strategy with committed timelines?",
        lookFor:
          "Cloud-native or hybrid architecture in execution vs. fully on-premise with cloud strategy existing only on paper",
      },
      {
        id: "t3",
        audience: "both",
        text:
          "How well are finance systems connected to each other, do they exchange data via APIs or require manual interfaces and file transfers?",
        lookFor:
          "Standardized API connectivity with documented interfaces vs. batch file transfers and manual uploads",
      },
      {
        id: "t4",
        audience: "finance",
        text:
          "Can the finance function access new digital tools quickly, or does every new solution require a lengthy IT procurement and approval cycle?",
        lookFor:
          "Finance teams can pilot and deploy tools within weeks vs. new tools require months of IT evaluation before use",
        itNote:
          "If IT is present: also explore whether the infrastructure supports elastic compute for data-intensive workloads.",
      },
      {
        id: "t5",
        audience: "both",
        text:
          "How dependent is the finance function on a single technology vendor, and how flexible is the architecture to incorporate new tools or switch providers?",
        lookFor:
          "Modular, vendor-agnostic architecture vs. deep lock-in to one ecosystem with high switching costs",
      },
      {
        id: "t6",
        audience: "both",
        text:
          "Does the finance function currently use robotic process automation (RPA) or rule-based automation – and if so, how mature and widespread is the deployment?",
        lookFor:
          "scaled RPA across multiple processes vs. isolated bots or no automation",
      },
      {
        id: "t7",
        audience: "both",
        text:
          "Beyond RPA, has the organization piloted or deployed any AI or machine learning tools within finance – e.g., predictive analytics, NLP, or intelligent document processing?",
        lookFor:
          "active AI pilots or production use vs. no AI tooling beyond basic automation",
      },
      {
        id: "t8",
        audience: "it",
        text:
          "Once an AI model or automated tool is deployed, is there a mechanism to monitor its performance, retrain it when needed, and retire it if accuracy degrades?",
        lookFor:
          "Defined model lifecycle management with monitoring thresholds vs. deploy-and-forget approach with no performance tracking after go-live",
        isNew: true,
      },
    ],
    vignettes: {
      l2: [
        "The organization runs multiple ERPs with no integration layer; data exchange happens via flat file exports",
        "A cloud strategy exists on paper but no migration has started",
        "Finance uses AI only in the form of vendor-embedded features with no awareness of how they work",
        "No process for monitoring AI tools after deployment",
      ],
      l3: [
        "A primary ERP is in place; cloud migration is approved but partially executed",
        "API connectivity exists for core systems; peripheral tools still rely on manual exports",
        "A few finance-led AI pilots are underway, sponsored by IT; governance is informal",
        "Model performance is checked manually when issues arise, rather than monitored continuously",
      ],
      l4: [
        "Core finance runs on a cloud-based ERP with standardized APIs connecting treasury, consolidation, and reporting tools",
        "New AI applications can plug in via documented interfaces; infrastructure supports rapid prototyping",
        "Finance owns and governs its AI tools in collaboration with IT; a shared tooling catalogue exists",
        "Model performance is tracked with defined revalidation thresholds and a formal retirement process",
      ],
    },
  },
  {
    id: "process",
    title: "Process Maturity",
    short: "Process",
    subtitle: "Standardization, documentation, automation, and continuous improvement of finance workflows",
    color: "#4A235A",
    accent: "#8E44AD",
    questions: [
      {
        id: "p1",
        audience: "finance",
        text:
          "To what extent are core finance processes (e.g., close, consolidation, AP/AR, reporting) documented and standardized across entities and regions?",
        lookFor:
          "Globally harmonized process maps with version control vs. each entity operating with its own timeline, templates, and workarounds",
      },
      {
        id: "p2",
        audience: "finance",
        text:
          "How much of the current finance workflow is manual vs. automated, including data entry, reconciliations, approvals, and report generation?",
        lookFor:
          "Integrated workflow automation across key steps vs. heavy reliance on email, Excel, and manual handoffs",
      },
      {
        id: "p3",
        audience: "finance",
        text:
          "How consistent is process execution across business units, do teams follow the same steps, timelines, and quality standards?",
        lookFor:
          "Enforced SOPs with compliance monitoring vs. local variations and undocumented workarounds being the norm",
      },
      {
        id: "p4",
        audience: "finance",
        text:
          "How frequently do process exceptions or manual overrides occur during routine operations (e.g., month-end close, payment runs)?",
        lookFor:
          "Low exception rates with documented handling procedures vs. high volume of ad-hoc interventions driven by individual judgment",
      },
      {
        id: "p5",
        audience: "finance",
        text:
          "Does the organization track process performance, such as cycle times, bottlenecks, and exception rates, through data or dashboards?",
        lookFor:
          "Data-driven process monitoring with defined KPIs vs. anecdotal understanding of where delays occur based on individual experience",
      },
      {
        id: "p6",
        audience: "finance",
        text:
          "When was the last time core finance processes were formally reviewed and optimized, and is there a continuous improvement mechanism with clear ownership?",
        lookFor:
          "Regular process reviews with assigned owners and documented outcomes vs. processes essentially unchanged for years",
      },
      {
        id: "p7",
        audience: "finance",
        text:
          "When exceptions occur in finance processes, how are they documented, escalated, and resolved, consistently or left to individual judgment?",
        lookFor:
          "Defined escalation paths with documented resolution and root cause tracking vs. exceptions resolved informally with no audit trail",
        isNew: true,
      },
    ],
    vignettes: {
      l2: [
        "Month-end close follows a broadly similar pattern but each region has its own timeline and workarounds",
        "Process documentation exists for audit purposes but is rarely updated or followed",
        "Reconciliations are largely manual; exception handling depends on individual experience",
        "No data-driven tracking of process cycle times; issues are identified informally",
      ],
      l3: [
        "Core processes are documented and largely followed; some automation exists for high-volume tasks",
        "Process consistency is improving but still varies by business unit; harmonization is underway",
        "Exception rates are tracked informally; escalation paths exist but are not consistently enforced",
        "Process reviews happen annually, typically driven by audit findings rather than proactive optimization",
      ],
      l4: [
        "All major finance processes are mapped end-to-end with defined SLAs per step",
        "Workflow automation handles routine approvals and reconciliations; exception handling follows documented decision trees",
        "Process performance dashboards track cycle times and exception rates in real time",
        "Continuous improvement reviews happen quarterly with clear process owners",
      ],
    },
  },
  {
    id: "people",
    title: "People & Skills",
    short: "People",
    subtitle: "AI literacy, executive sponsorship, change capacity, and cultural openness",
    color: "#784212",
    accent: "#E67E22",
    questions: [
      {
        id: "ps1",
        audience: "finance",
        text:
          "How would you describe AI awareness and understanding among finance leadership: CFO, controllers, FP&A heads, and senior managers?",
        lookFor:
          "Leadership that can articulate AI opportunities and risks in finance vs. awareness limited to headlines and buzzwords",
      },
      {
        id: "ps2",
        audience: "finance",
        text:
          "How would you describe AI awareness and understanding among operational finance staff: analysts, accountants, and reporting teams?",
        lookFor:
          "Staff who understand how AI could affect their day-to-day work vs. broad uncertainty or indifference about AI's practical relevance",
        isNew: true,
      },
      {
        id: "ps3",
        audience: "finance",
        text:
          "Is there active executive sponsorship for AI in finance, and if so, at what level and with what level of committed budget or resource?",
        lookFor:
          "Named sponsor with allocated budget and regular reviews vs. general interest expressed without ownership",
      },
      {
        id: "ps4",
        audience: "both",
        text:
          "Does the organization have access to AI or data science talent, either within finance, through a central team, or via external partners?",
        lookFor:
          "Dedicated AI resources with finance domain knowledge vs. no technical AI access and no plan to build or buy it",
      },
      {
        id: "ps5",
        audience: "finance",
        text:
          "How would you describe the finance team's general attitude toward AI, is it seen as an opportunity, a threat, or largely irrelevant?",
        lookFor:
          "Curiosity and willingness to experiment vs. skepticism, fear, or indifference acting as a barrier",
      },
      {
        id: "ps6",
        audience: "finance",
        text:
          "Has the organization successfully managed technology-driven change in finance before, such as ERP migrations, RPA rollouts, or shared service transitions?",
        lookFor:
          "Proven change track record with structured methodology vs. history of stalled transformations or significant resistance",
      },
      {
        id: "ps7",
        audience: "both",
        text:
          "Are there mechanisms to upskill finance staff on AI tools and data literacy, and does the organization have the L&D infrastructure to scale this across the function?",
        lookFor:
          "Ongoing role-specific learning programmes with L&D infrastructure to scale vs. one-off training sessions with no follow-through",
      },
      {
        id: "ps8",
        audience: "finance",
        text:
          "Does the finance team have experience building business cases for technology investments - including defining KPIs, estimating ROI, and securing budget approval?",
        lookFor:
          "proven business case track record vs. no structured investment justification process",
      },
    ],
    vignettes: {
      l2: [
        "The CFO mentions AI in town halls but has not assigned ownership or budget",
        "Operational staff are unsure how AI would affect their work; no formal training exists",
        "A previous RPA rollout was partially successful but met with significant resistance",
        "L&D capability is thin; upskilling depends on individuals finding their own resources",
      ],
      l3: [
        "A senior finance leader has been named AI sponsor; budget discussions are underway but not yet committed",
        "Some analysts have experimented with AI tools independently; no structured programme supports this",
        "Change management experience exists but is inconsistently applied across the organisation",
        "Isolated training modules on data literacy exist; no end-to-end AI upskilling pathway is in place",
      ],
      l4: [
        "The CFO actively sponsors an AI roadmap with dedicated budget and quarterly reviews",
        "A small AI team within finance works alongside a central data science unit; role-specific training covers prompt engineering and AI oversight",
        "The team has successfully scaled RPA and is culturally open to the next wave of automation",
        "A structured AI learning pathway exists for all finance roles, delivered through a well-resourced L&D function",
      ],
    },
  },
  {
    id: "governance",
    title: "Governance & Compliance",
    short: "Governance",
    subtitle: "AI governance policies, regulatory preparedness, audit-trail capability, and model accountability",
    color: "#1C2833",
    accent: "#7F8C8D",
    questions: [
      {
        id: "g1",
        audience: "finance",
        text:
          "Does the organization have a formal AI governance policy, covering ethical use, accountability, and decision-making authority for AI initiatives in finance?",
        lookFor:
          "Documented AI policy with defined scope and enforcement vs. no formal guidelines; finance teams using AI tools without organisational guardrails",
      },
      {
        id: "g2",
        audience: "finance",
        text:
          "How well does the organization understand the implications of the EU AI Act for its finance-related AI use cases (regarding high-risk classification, transparency, human oversight)?",
        lookFor:
          "mapped AI Act requirements per use case vs. general awareness only",
      },
      {
        id: "g2b",
        audience: "both",
        text:
          "How prepared is the organization to handle GDPR and data privacy requirements when deploying AI in finance (regarding personal data processing and data subject rights?)",
        lookFor:
          "AI-specific data privacy assessment completed vs. reliance on general GDPR compliance",
      },
      {
        id: "g3",
        audience: "finance",
        text:
          "Are there established processes to ensure AI outputs are explainable and auditable, particularly for decisions affecting financial reporting, controls, or compliance?",
        lookFor:
          "Defined explainability standards with audit trails vs. black-box tolerance where AI outputs are accepted without documentation",
      },
      {
        id: "g4",
        audience: "finance",
        text:
          "Has your external auditor or internal audit function been briefed on, or formally reviewed, how the organization uses AI in financial processes?",
        lookFor:
          "Auditors engaged and informed, with AI use cases documented in the audit scope vs. auditors not consulted and AI use not reflected in control frameworks",
        isNew: true,
      },
      {
        id: "g5",
        audience: "both",
        text:
          "Does the organization have a framework for assessing and mitigating AI-specific risks, such as model bias, hallucinations, data privacy breaches, or model drift, beyond general IT risk management?",
        lookFor:
          "Formal AI risk framework with specific controls vs. AI risks treated under general IT risk with no differentiated assessment",
      },
      {
        id: "g6",
        audience: "both",
        text:
          "Is there a defined process for monitoring AI model performance over time, including triggers for revalidation or retirement when accuracy or reliability degrades?",
        lookFor:
          "Continuous model monitoring with defined performance thresholds and revalidation protocols vs. deploy-and-forget approach",
      },
      {
        id: "g7",
        audience: "finance",
        text:
          "Has the organization assigned clear ownership and accountability for AI governance, such as a responsible AI lead, an AI ethics committee, or cross-functional oversight?",
        lookFor:
          "Named accountability with regular governance reviews vs. governance responsibility undefined or assumed to sit with IT by default",
      },
    ],
    vignettes: {
      l2: [
        "Leadership is aware AI regulation is coming but has not assessed specific implications for finance",
        "No AI governance policy exists; finance teams using AI tools do so without formal guidelines",
        "The external auditor has not been consulted on AI governance expectations; AI use is not reflected in control frameworks",
        "Risk management treats AI under general IT risk with no specific AI controls",
      ],
      l3: [
        "An AI governance policy is in draft; some AI use cases have been reviewed by legal or compliance but coverage is incomplete",
        "The regulatory landscape has been scanned at a high level; specific implications for finance are not yet mapped",
        "Internal audit is aware of AI use in some processes but has not formally reviewed or incorporated it into the audit plan",
        "AI-specific risk controls are being developed; model monitoring exists for some tools but not systematically",
      ],
      l4: [
        "A formal AI governance policy defines acceptable use, accountability, and escalation paths; regulatory requirements are mapped per jurisdiction",
        "AI outputs in financial reporting include audit trails and explainability documentation; external auditors are briefed annually",
        "A cross-functional AI governance committee meets quarterly; model performance is monitored with defined revalidation thresholds",
        "A responsible AI lead owns the governance framework; third-party AI vendor contracts are reviewed for data ownership and compliance obligations",
      ],
    },
  },
];

// Minimum readiness thresholds per use case by dimension
// Keys correspond to DIMENSIONS ids: data, tech, process, people, governance
const USE_CASE_GROUPS = [
  {
    category: "Planning, Forecasting & Scenario Intelligence",
    items: [
      {
        name: "Predictive Rolling Forecast Engine",
        mins: { data: 3.5, tech: 3.0, process: 3.0, people: 3.0, governance: 2.0 },
      },
      {
        name: "Real-time Scenario Simulation",
        mins: { data: 4.0, tech: 3.5, process: 3.0, people: 3.0, governance: 3.0 },
      },
      {
        name: "AI-generated Management Reporting",
        mins: { data: 2.5, tech: 2.0, process: 2.5, people: 2.0, governance: 1.5 },
      },
      {
        name: "Predictive Cash Flow Forecasting",
        mins: { data: 3.5, tech: 3.0, process: 2.5, people: 2.5, governance: 2.0 },
      },
    ],
  },
  {
    category: "Revenue & Margin Optimization",
    items: [
      {
        name: "Automated Variance Driver Attribution",
        mins: { data: 3.0, tech: 2.5, process: 3.0, people: 2.5, governance: 1.5 },
      },
      {
        name: "Predictive AR Analytics & DSO Intelligence",
        mins: { data: 3.0, tech: 2.5, process: 2.5, people: 2.0, governance: 2.0 },
      },
      {
        name: "Predictive AP Analytics",
        mins: { data: 2.5, tech: 2.5, process: 2.5, people: 2.0, governance: 1.5 },
      },
    ],
  },
  {
    category: "Working Capital & Cash Optimization",
    items: [
      {
        name: "Predictive Receivables & Collections",
        mins: { data: 3.0, tech: 2.5, process: 2.5, people: 2.0, governance: 2.0 },
      },
      {
        name: "Predictive Collections & Dunning",
        mins: { data: 3.0, tech: 2.5, process: 2.0, people: 1.5, governance: 1.5 },
      },
      {
        name: "Automated Cash Application",
        mins: { data: 3.0, tech: 2.5, process: 2.0, people: 1.5, governance: 1.5 },
      },
      {
        name: "AI-Powered Payment Optimization",
        mins: { data: 3.0, tech: 3.0, process: 2.5, people: 2.0, governance: 2.5 },
      },
    ],
  },
  {
    category: "Procure-to-Pay",
    items: [
      {
        name: "Intelligent Document Processing",
        mins: { data: 2.0, tech: 2.0, process: 2.5, people: 1.5, governance: 1.5 },
      },
      {
        name: "AI Three-Way Matching & Exception Routing",
        mins: { data: 3.0, tech: 2.5, process: 3.0, people: 2.0, governance: 2.0 },
      },
      {
        name: "AI Approval Workflow Automation",
        mins: { data: 2.0, tech: 2.0, process: 2.5, people: 2.0, governance: 1.5 },
      },
    ],
  },
  {
    category: "Order-to-Cash",
    items: [
      {
        name: "AI-Powered Credit Risk Scoring",
        mins: { data: 3.5, tech: 3.0, process: 2.5, people: 3.0, governance: 4.0 },
      },
      {
        name: "AI Dispute Detection & Resolution",
        mins: { data: 3.0, tech: 2.5, process: 2.5, people: 2.5, governance: 3.0 },
      },
    ],
  },
  {
    category: "Financial Closure & Consolidation",
    items: [
      {
        name: "Automated Recurring Journal Generation",
        mins: { data: 2.5, tech: 2.0, process: 3.0, people: 1.5, governance: 2.0 },
      },
      {
        name: "Intelligent Intercompany Matching",
        mins: { data: 3.5, tech: 3.0, process: 3.0, people: 2.0, governance: 2.5 },
      },
      {
        name: "Smart Consolidation Package Validation",
        mins: { data: 3.0, tech: 2.5, process: 3.5, people: 2.0, governance: 2.5 },
      },
      {
        name: "Continuous GL Anomaly Detection",
        mins: { data: 3.0, tech: 2.5, process: 2.5, people: 2.0, governance: 3.0 },
      },
      {
        name: "Automated Accounting Estimate Validation",
        mins: { data: 3.0, tech: 2.0, process: 2.5, people: 3.0, governance: 3.5 },
      },
    ],
  },
  {
    category: "Treasury & Financial Risk Management",
    items: [
      {
        name: "FX Hedging Execution Optimization",
        mins: { data: 4.0, tech: 3.5, process: 3.0, people: 3.5, governance: 4.0 },
      },
      {
        name: "Automated Bank Reconciliation",
        mins: { data: 2.5, tech: 2.5, process: 2.0, people: 1.5, governance: 2.0 },
      },
    ],
  },
  {
    category: "Fraud Detection",
    items: [
      {
        name: "Real-Time Intelligent Fraud Detection",
        mins: { data: 3.5, tech: 3.0, process: 2.5, people: 3.0, governance: 3.5 },
      },
      {
        name: "Real-Time Duplicate Detection",
        mins: { data: 2.5, tech: 2.0, process: 2.0, people: 1.5, governance: 2.0 },
      },
    ],
  },
  {
    category: "Tax & Regulatory Intelligence",
    items: [
      {
        name: "AI-powered VAT/GST Classification",
        mins: { data: 3.0, tech: 2.5, process: 2.5, people: 2.0, governance: 3.0 },
      },
      {
        name: "Ready-to-Review Corporate Tax Provision",
        mins: { data: 3.0, tech: 2.5, process: 3.0, people: 2.5, governance: 3.0 },
      },
      {
        name: "Automated Transfer Pricing Documentation",
        mins: { data: 3.5, tech: 3.0, process: 3.0, people: 3.0, governance: 4.0 },
      },
      {
        name: "Intelligent Tax Audit Defense & Risk Scoring",
        mins: { data: 3.5, tech: 2.5, process: 2.5, people: 3.0, governance: 4.0 },
      },
      {
        name: "Continuous Tax Compliance Monitoring",
        mins: { data: 3.0, tech: 2.5, process: 2.5, people: 2.0, governance: 3.5 },
      },
    ],
  },
  {
    category: "Compliance & Governance",
    items: [
      {
        name: "Continuous Control Monitoring",
        mins: { data: 3.0, tech: 2.5, process: 3.0, people: 2.5, governance: 3.5 },
      },
      {
        name: "Automated Evidence Collection & Validation",
        mins: { data: 2.5, tech: 2.5, process: 2.5, people: 2.0, governance: 3.0 },
      },
      {
        name: "Enterprise Risk Monitoring & Scoring",
        mins: { data: 3.5, tech: 3.0, process: 3.0, people: 3.0, governance: 4.0 },
      },
      {
        name: "Automated Remediation Tracking",
        mins: { data: 2.0, tech: 2.0, process: 2.5, people: 2.0, governance: 2.5 },
      },
      {
        name: "Regulatory Change Intelligence",
        mins: { data: 2.5, tech: 2.0, process: 2.0, people: 2.5, governance: 3.5 },
      },
    ],
  },
  {
    category: "Payroll",
    items: [
      {
        name: "Automated Payroll Validation",
        mins: { data: 3.0, tech: 2.5, process: 3.0, people: 2.0, governance: 3.0 },
      },
      {
        name: "Payroll Master Data Reconciliation",
        mins: { data: 2.5, tech: 2.5, process: 2.0, people: 1.5, governance: 2.0 },
      },
      {
        name: "Workforce & Payroll Forecasting",
        mins: { data: 3.0, tech: 2.0, process: 2.5, people: 2.0, governance: 1.5 },
      },
    ],
  },
  {
    category: "Strategic Investment & Capital Allocation",
    items: [
      {
        name: "AI-Supported CapEx Risk Scoring",
        mins: { data: 3.5, tech: 3.0, process: 3.0, people: 3.5, governance: 3.0 },
      },
    ],
  },
];

const AUDIENCE_CFG = {
  finance: { label: "Finance", border: "#2E86C1", color: "#90CAF9", dot: "#2E86C1" },
  it: { label: "IT / Tech", border: "#27AE60", color: "#A9DFBF", dot: "#27AE60" },
  both: { label: "Finance + IT", border: "#E67E22", color: "#FAD7A0", dot: "#E67E22" },
};

const maturityLabel = (s) => {
  if (!s) return "Not rated";
  if (s < 1.5) return "Beginner";
  if (s < 2.5) return "Emerging";
  if (s < 3.5) return "Defined";
  if (s < 4.5) return "Advanced";
  return "Expert";
};

const maturityColor = (s) => {
  if (!s) return "#94a3b8";
  if (s < 1.5) return "#e74c3c";
  if (s < 2.5) return "#e67e22";
  if (s < 3.5) return "#c9a227";
  if (s < 4.5) return "#27ae60";
  return "#16a085";
};

const genId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

const fmtDate = (d) =>
  new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

// Classify a use case given organization scores and minimum thresholds
const classifyUseCase = (orgScores, mins) => {
  // Count dimensions where org score is below requirement
  let below = 0;
  DIMENSIONS.forEach((d) => {
    const org = orgScores[d.id] || 0;
    const req = mins[d.id] ?? 0;
    if (org < req) below += 1;
  });

  if (below === 0) {
    return {
      label: "Ready to implement",
      color: "#16a34a",
      description:
        "Organizational score meets or exceeds minimum requirements across all dimensions.",
    };
  }
  if (below <= 2) {
    return {
      label: "Targeted investment needed",
      color: "#f97316",
      description:
        "One or two dimensions fall below minimum requirements; address these before implementation.",
    };
  }
  return {
    label: "Significant gaps",
    color: "#dc2626",
    description:
      "Multiple dimensions fall below minimum requirements; foundational work is needed first.",
  };
};

function RadarChart({ scores, compare, size = 260 }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.34;
  const n = DIMENSIONS.length;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i, frac) => ({
    x: cx + r * frac * Math.cos(angle(i)),
    y: cy + r * frac * Math.sin(angle(i)),
  });
  const gridPts = (lv) => DIMENSIONS.map((_, i) => pt(i, lv / 5));
  const scorePts = DIMENSIONS.map((d, i) => pt(i, (scores[d.id] || 0) / 5));
  const comparePts = compare
    ? DIMENSIONS.map((d, i) => pt(i, (compare[d.id] || 0) / 5))
    : null;

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
    <svg
      viewBox={`0 0 ${size} ${size}`}
      style={{ width: "100%", maxWidth: size, overflow: "visible" }}
    >
      {[1, 2, 3, 4, 5].map((lv) => (
        <polygon
          key={lv}
          points={gridPts(lv)
            .map((p) => `${p.x},${p.y}`)
            .join(" ")}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="1"
        />
      ))}
      {DIMENSIONS.map((_, i) => {
        const p = pt(i, 1);
        return (
          <line
            key={i}
            x1={cx}
            y1={cy}
            x2={p.x}
            y2={p.y}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        );
      })}
      {comparePts && (
        <polygon
          points={comparePts
            .map((p) => `${p.x},${p.y}`)
            .join(" ")}
          fill="rgba(148,163,184,0.16)"
          stroke="#9ca3af"
          strokeWidth="1"
        />
      )}
      <polygon
        points={scorePts
          .map((p) => `${p.x},${p.y}`)
          .join(" ")}
        fill="rgba(37,99,235,0.08)"
        stroke="#2563eb"
        strokeWidth="1.5"
      />
      {scorePts.map((p, i) => {
        const dim = DIMENSIONS[i];
        const org = scores[dim.id] || 0;
        const min = compare ? (compare[dim.id] ?? 0) : 0;
        const meets = !compare || org >= min;
        const dotColor = compare
          ? meets
            ? "#16a34a"
            : "#dc2626"
          : dim.accent;
        return (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="4"
            fill={dotColor}
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        );
      })}
      {DIMENSIONS.map((d, i) => {
        const a = angle(i);
        const lx = cx + (r + 24) * Math.cos(a);
        const ly = cy + (r + 24) * Math.sin(a);
        const org = scores[d.id] || 0;
        const min = compare ? (compare[d.id] ?? 0) : 0;
        const meets = !compare || org >= min;
        const textColor = compare
          ? meets
            ? "#16a34a"
            : "#dc2626"
          : "#4b5563";
        return (
          <text
            key={i}
            x={lx}
            y={ly}
            textAnchor="middle"
            dominantBaseline="middle"
            style={{
              fontSize: 8,
              fontWeight: 700,
              fill: textColor,
              fontFamily: "DM Sans,sans-serif",
              letterSpacing: 0.3,
            }}
          >
            {d.short}
          </text>
        );
      })}
    </svg>
    {compare && (
      <div style={{ display: "flex", gap: 12, fontSize: 9, fontWeight: 600 }}>
        <span style={{ color: "#16a34a" }}>● Met</span>
        <span style={{ color: "#dc2626" }}>● Gap</span>
      </div>
    )}
    </div>
  );
}

function Landing({ assessments, onNew, onOpen, onDelete }) {
  const [delConfirm, setDelConfirm] = useState(null);
  const sorted = [...assessments].sort((a, b) => b.updatedAt - a.updatedAt);
  const totalQ = DIMENSIONS.reduce((a, d) => a + d.questions.length, 0);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f6fb",
        fontFamily: "'DM Sans',sans-serif",
        color: "#0f172a",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(140deg,#ffffff 0%,#f3f7ff 45%,#e3f2ff 100%)",
          borderBottom: "1px solid rgba(148,163,184,0.32)",
          padding: "72px 56px 56px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 0 0,rgba(80,150,255,0.16) 0,transparent 55%),radial-gradient(circle at 100% 0,rgba(101,210,255,0.14) 0,transparent 55%)",
            backgroundSize: "100% 100%",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background:
              "linear-gradient(90deg,transparent 0%,#58a6ff 25%,#7dd3fc 55%,transparent 100%)",
          }}
        />
        <div style={{ position: "relative", maxWidth: 1040, margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 40,
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 999,
                  background: "rgba(15,118,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(148,197,255,0.6)",
                  boxShadow: "0 0 40px rgba(56,189,248,0.35)",
                }}
              >
                <Image
                  src="/kibo-logo.png"
                  alt="Kibo AI"
                  width={30}
                  height={30}
                  priority
                />
              </div>
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 4,
                  textTransform: "uppercase",
                  color: "#0f172a",
                  fontWeight: 700,
                  marginBottom: 2,
                }}
              >
                Kibo AI · Finance Transformation
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 260, marginTop: 20 }}>
              <h1
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontSize: "clamp(34px,4.8vw,56px)",
                  fontWeight: 700,
                  margin: "0 0 18px",
                  lineHeight: 1.1,
                  color: "#020617",
                }}
              >
                Finance AI Readiness
                <br />
                <span style={{ color: "#2563eb" }}>Assessment</span>
              </h1>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(30,64,175,0.8)",
                  maxWidth: 560,
                  lineHeight: 1.75,
                  margin: "0 0 28px",
                }}
              >
                A structured diagnostic for evaluating a client organization's
                readiness to adopt and scale AI within the finance function,
                covering five dimensions across {totalQ} assessment questions.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 4,
                }}
              >
                {DIMENSIONS.map((d) => (
                  <div
                    key={d.id}
                    style={{
                      padding: "5px 13px",
                      borderRadius: 999,
                      background: "rgba(226,232,240,0.9)",
                      border: `1px solid ${d.accent}30`,
                      fontSize: 11.5,
                      color: "#0f172a",
                      fontWeight: 500,
                      letterSpacing: 0.3,
                    }}
                  >
                    {d.title}
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={onNew}
              style={{
                padding: "14px 30px",
                background:
                  "linear-gradient(135deg,#3b82f6,#22d3ee 40%,#a855f7 100%)",
                border: "none",
                borderRadius: 10,
                cursor: "pointer",
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: "#020617",
                letterSpacing: 0.3,
                boxShadow: "0 18px 45px rgba(56,189,248,0.55)",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(201,162,39,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow =
                  "0 4px 20px rgba(201,162,39,0.3)";
              }}
            >
              + New Assessment
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 56px 80px" }}>
        {sorted.length === 0 ? (
          <div style={{ textAlign: "center", padding: "80px 0", opacity: 0.45 }}>
            <div style={{ fontSize: 44, marginBottom: 14 }}>📋</div>
            <div
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: 20,
                color: "#f5f0e8",
                marginBottom: 8,
              }}
            >
              No assessments yet
            </div>
            <div style={{ fontSize: 13, color: "rgba(226,232,240,0.5)" }}>
              Create your first assessment to get started
            </div>
          </div>
        ) : (
          <>
            <div
              style={{
                fontSize: 10,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.25)",
                marginBottom: 18,
                fontWeight: 700,
              }}
            >
              Saved Assessments: {sorted.length}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {sorted.map((a) => {
                const dimScores = {};
                DIMENSIONS.forEach((d) => {
                  const ans = d.questions.filter((q) => a.scores[q.id]);
                  if (ans.length) {
                    dimScores[d.id] =
                      ans.reduce((s, q) => s + a.scores[q.id], 0) / ans.length;
                  }
                });
                const overall = Object.values(dimScores).length
                  ? Object.values(dimScores).reduce((s, v) => s + v, 0) /
                    Object.values(dimScores).length
                  : null;
                const answered = DIMENSIONS.reduce(
                  (s, d) =>
                    s + d.questions.filter((q) => a.scores[q.id]).length,
                  0,
                );
                const pct = Math.round(
                  (answered / totalQ) * 100,
                );
                return (
                  <div
                    key={a.id}
                    style={{
                      background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(201,162,39,0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.07)";
                    }}
                    onClick={() => onOpen(a.id)}
                  >
                    <div
                      style={{
                        padding: "18px 22px",
                        display: "flex",
                        alignItems: "center",
                        gap: 18,
                        flexWrap: "wrap",
                      }}
                    >
                      <div style={{ flex: 1, minWidth: 180 }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 4,
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Playfair Display',serif",
                              fontSize: 19,
                              fontWeight: 700,
                              color: "#f5f0e8",
                            }}
                          >
                            {a.companyName}
                          </span>
                          {overall && (
                            <span
                              style={{
                                fontSize: 11,
                                padding: "2px 9px",
                                borderRadius: 20,
                                background: `${maturityColor(
                                  overall,
                                )}20`,
                                color: maturityColor(overall),
                                fontWeight: 700,
                                border: `1px solid ${maturityColor(
                                  overall,
                                )}35`,
                              }}
                            >
                              {maturityLabel(overall)}
                            </span>
                          )}
                        </div>
                        <div
                          style={{
                            fontSize: 11,
                            color: "rgba(226,232,240,0.35)",
                          }}
                        >
                          {a.consultantName && (
                            <span style={{ marginRight: 10 }}>
                              👤 {a.consultantName}
                            </span>
                          )}
                          <span>Updated {fmtDate(a.updatedAt)}</span>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          gap: 6,
                          alignItems: "flex-end",
                        }}
                      >
                        {DIMENSIONS.map((d) => {
                          const s = dimScores[d.id];
                          return (
                            <div
                              key={d.id}
                              title={`${d.title}: ${
                                s ? s.toFixed(1) : "not scored"
                              }`}
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: 3,
                              }}
                            >
                              <div
                                style={{
                                  width: 6,
                                  height: 32,
                                  borderRadius: 3,
                                  background: "rgba(255,255,255,0.07)",
                                  overflow: "hidden",
                                  position: "relative",
                                }}
                              >
                                {s && (
                                  <div
                                    style={{
                                      position: "absolute",
                                      bottom: 0,
                                      width: "100%",
                                      height: `${(s / 5) * 100}%`,
                                      background: d.accent,
                                      borderRadius: 3,
                                    }}
                                  />
                                )}
                              </div>
                              <div
                                style={{
                                  fontSize: 8,
                                  color: s
                                    ? d.accent
                                    : "rgba(255,255,255,0.15)",
                                  fontWeight: 700,
                                }}
                              >
                                {s ? s.toFixed(1) : "N/A"}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                      <div style={{ textAlign: "center", minWidth: 56 }}>
                        {overall ? (
                          <>
                            <div
                              style={{
                                fontSize: 26,
                                fontWeight: 800,
                                color: maturityColor(overall),
                                fontFamily: "'Playfair Display',serif",
                                lineHeight: 1,
                              }}
                            >
                              {overall.toFixed(1)}
                            </div>
                            <div
                              style={{
                                fontSize: 9,
                                color: "rgba(255,255,255,0.3)",
                                marginTop: 2,
                              }}
                            >
                              Overall
                            </div>
                          </>
                        ) : (
                          <div
                            style={{
                              fontSize: 11,
                              color: "rgba(255,255,255,0.2)",
                            }}
                          >
                            N/A
                          </div>
                        )}
                      </div>
                      <div style={{ minWidth: 90 }}>
                        <div
                          style={{
                            fontSize: 10,
                            color: "rgba(255,255,255,0.25)",
                            marginBottom: 4,
                            textAlign: "right",
                          }}
                        >
                          {pct}% done
                        </div>
                        <div
                          style={{
                            height: 3,
                            background: "rgba(255,255,255,0.07)",
                            borderRadius: 2,
                            overflow: "hidden",
                            width: 90,
                          }}
                        >
                          <div
                            style={{
                              height: "100%",
                              width: `${pct}%`,
                              background:
                                "linear-gradient(90deg,#c9a227,#f0d060)",
                              borderRadius: 2,
                            }}
                          />
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDelConfirm(a.id);
                        }}
                        style={{
                          background: "transparent",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: 7,
                          padding: "6px 10px",
                          cursor: "pointer",
                          color: "rgba(255,255,255,0.25)",
                          fontSize: 13,
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#e74c3c";
                          e.currentTarget.style.borderColor = "#e74c3c33";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            "rgba(255,255,255,0.25)";
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.08)";
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {delConfirm && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: 20,
          }}
        >
          <div
            style={{
              background: "#0d1b2e",
              border: "1px solid rgba(201,162,39,0.25)",
              borderRadius: 14,
              padding: "32px",
              maxWidth: 360,
              width: "100%",
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display',serif",
                margin: "0 0 10px",
                color: "#f5f0e8",
                fontSize: 20,
              }}
            >
              Delete Assessment?
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "rgba(226,232,240,0.55)",
                margin: "0 0 24px",
                lineHeight: 1.65,
              }}
            >
              This will remove the assessment and all scores for this session.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => setDelConfirm(null)}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: 8,
                  color: "rgba(255,255,255,0.6)",
                  cursor: "pointer",
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete(delConfirm);
                  setDelConfirm(null);
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#e74c3c",
                  border: "none",
                  borderRadius: 8,
                  color: "#fff",
                  cursor: "pointer",
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function NewAssessmentModal({ onClose, onCreate }) {
  const [companyName, setCompanyName] = useState("");
  const [consultantName, setConsultantName] = useState("");
  const [workshopDate, setWorkshopDate] = useState(
    new Date().toISOString().slice(0, 10),
  );
  const inputRef = useRef(null);
  useEffect(() => {
    setTimeout(() => inputRef.current?.focus(), 100);
  }, []);
  const handleCreate = () => {
    if (!companyName.trim()) return;
    onCreate({
      companyName: companyName.trim(),
      consultantName: consultantName.trim(),
      workshopDate,
    });
  };
  const field = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: 8,
    padding: "12px 14px",
    color: "#f5f0e8",
    fontSize: 14,
    outline: "none",
    fontFamily: "'DM Sans',sans-serif",
    boxSizing: "border-box",
    transition: "border-color 0.15s",
  };
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: 20,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0d1b2e",
          border: "1px solid rgba(201,162,39,0.25)",
          borderRadius: 16,
          padding: "36px",
          maxWidth: 460,
          width: "100%",
          boxShadow: "0 24px 80px rgba(0,0,0,0.7)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ marginBottom: 28 }}>
          <div
            style={{
              fontSize: 10,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#c9a227",
              fontWeight: 700,
              marginBottom: 8,
            }}
          >
            New Assessment
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 24,
              fontWeight: 700,
              color: "#f5f0e8",
              margin: 0,
            }}
          >
            Set up your session
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {[
            {
              label: "Client Company *",
              val: companyName,
              set: setCompanyName,
              ph: "e.g. Acme Corporation",
              ref: inputRef,
              enter: true,
            },
            {
              label: "Consultant Name",
              val: consultantName,
              set: setConsultantName,
              ph: "e.g. Sarah Müller",
            },
          ].map(({ label, val, set, ph, ref, enter }, i) => (
            <div key={i}>
              <label
                style={{
                  fontSize: 10,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.35)",
                  display: "block",
                  marginBottom: 7,
                  fontWeight: 700,
                }}
              >
                {label}
              </label>
              <input
                ref={ref}
                value={val}
                onChange={(e) => set(e.target.value)}
                placeholder={ph}
                style={field}
                onKeyDown={
                  enter
                    ? (e) => {
                        if (e.key === "Enter") handleCreate();
                      }
                    : undefined
                }
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(201,162,39,0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255,255,255,0.12)";
                }}
              />
            </div>
          ))}
          <div>
            <label
              style={{
                fontSize: 10,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.35)",
                display: "block",
                marginBottom: 7,
                fontWeight: 700,
              }}
            >
              Workshop Date
            </label>
            <input
              type="date"
              value={workshopDate}
              onChange={(e) => setWorkshopDate(e.target.value)}
              style={{ ...field, colorScheme: "dark" }}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(201,162,39,0.5)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.12)";
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: 10 }}>
          <button
            onClick={onClose}
            style={{
              flex: 1,
              padding: "12px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 9,
              color: "rgba(255,255,255,0.55)",
              cursor: "pointer",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={!companyName.trim()}
            style={{
              flex: 2,
              padding: "12px",
              background: companyName.trim()
                ? "linear-gradient(135deg,#c9a227,#f0d060)"
                : "rgba(255,255,255,0.04)",
              border: "none",
              borderRadius: 9,
              color: companyName.trim()
                ? "#070c14"
                : "rgba(255,255,255,0.2)",
              cursor: companyName.trim() ? "pointer" : "not-allowed",
              fontFamily: "'DM Sans',sans-serif",
              fontSize: 14,
              fontWeight: 700,
              transition: "all 0.15s",
            }}
          >
            Start Assessment →
          </button>
        </div>
      </div>
    </div>
  );
}

function AssessmentView({ assessment, onUpdate, onBack }) {
  const [activeDim, setActiveDim] = useState(0);
  const [tab, setTab] = useState("assess");
  const [audienceFilter, setAudienceFilter] = useState("all");
  const [selectedUseCaseKey, setSelectedUseCaseKey] = useState(null);
  const [mainTakeaway, setMainTakeaway] = useState("");
  const [mainTakeawayLoading, setMainTakeawayLoading] = useState(false);
  const [mainTakeawayError, setMainTakeawayError] = useState("");
  const scores = assessment.scores;
  const notes = assessment.notes || {};
  const dim = DIMENSIONS[activeDim];

  const setScore = (qid, val) => {
    const s = { ...scores };
    if (s[qid] === val) delete s[qid];
    else s[qid] = val;
    onUpdate({
      ...assessment,
      scores: s,
      updatedAt: Date.now(),
    });
  };

  const setNote = (qid, text) => {
    const nextNotes = { ...notes, [qid]: text };
    onUpdate({
      ...assessment,
      notes: nextNotes,
      updatedAt: Date.now(),
    });
  };

  const getDimScore = (d) => {
    const ans = d.questions.filter((q) => scores[q.id]);
    if (!ans.length) return null;
    return ans.reduce((a, q) => a + scores[q.id], 0) / ans.length;
  };
  const allDimScores = {};
  DIMENSIONS.forEach((d) => {
    const s = getDimScore(d);
    if (s) allDimScores[d.id] = s;
  });
  const overall = Object.values(allDimScores).length
    ? Object.values(allDimScores).reduce((a, b) => a + b, 0) /
      Object.values(allDimScores).length
    : null;
  const totalQ = DIMENSIONS.reduce(
    (a, d) => a + d.questions.length,
    0,
  );
  const totalAnswered = DIMENSIONS.reduce(
    (a, d) => a + d.questions.filter((q) => scores[q.id]).length,
    0,
  );

  const buildNotesPayload = () => {
    const items = [];
    DIMENSIONS.forEach((d) => {
      d.questions.forEach((q) => {
        const noteText = notes[q.id];
        if (noteText && noteText.trim()) {
          items.push({
            id: q.id,
            dimensionId: d.id,
            dimensionTitle: d.title,
            question: q.label,
            note: noteText.trim(),
          });
        }
      });
    });
    return items;
  };

  const handleGenerateMainTakeaway = async () => {
    const noteItems = buildNotesPayload();
    if (!noteItems.length) {
      setMainTakeawayError(
        "Add some notes to the questions first, then try generating a takeaway.",
      );
      return;
    }

    setMainTakeawayError("");
    setMainTakeawayLoading(true);
    try {
      const res = await fetch("/api/main-takeaway", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyName: assessment.companyName,
          notes: noteItems,
          overallScore: overall,
          dimensionScores: allDimScores,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        setMainTakeawayError(
          errData?.error ||
            "Could not generate a takeaway. Please try again in a moment.",
        );
        return;
      }

      const data = await res.json();
      setMainTakeaway(data.takeaway || "");
    } catch (e) {
      setMainTakeawayError(
        "Something went wrong while calling the AI service. Please try again.",
      );
    } finally {
      setMainTakeawayLoading(false);
    }
  };

  // Flattened use cases with gap metrics to support "top 3 easiest" and details
  const allUseCasesFlat = USE_CASE_GROUPS.flatMap((group) =>
    group.items.map((uc) => {
      let below = 0;
      let gapSum = 0;
      DIMENSIONS.forEach((d) => {
        const org = allDimScores[d.id] || 0;
        const req = uc.mins[d.id] ?? 0;
        if (org < req) {
          below += 1;
          gapSum += req - org;
        }
      });
      const cls = classifyUseCase(allDimScores, uc.mins);
      return {
        group: group.category,
        name: uc.name,
        mins: uc.mins,
        classification: cls,
        below,
        gapSum,
      };
    }),
  );

  const topUseCases = [...allUseCasesFlat].sort((a, b) => {
    if (a.below !== b.below) return a.below - b.below;
    if (a.gapSum !== b.gapSum) return a.gapSum - b.gapSum;
    return a.name.localeCompare(b.name);
  }).slice(0, 3);

  const filteredQ = dim.questions.filter((q) => {
    if (audienceFilter === "all") return true;
    if (audienceFilter === "finance")
      return q.audience === "finance" || q.audience === "both";
    if (audienceFilter === "it")
      return q.audience === "it" || q.audience === "both";
    return true;
  });

  const ScoreBtn = ({ qid, val }) => {
    const sel = scores[qid] === val;
    const cols = ["#ef4444", "#f97316", "#eab308", "#22c55e", "#14b8a6"];
    const labs = ["Beginner", "Emerging", "Defined", "Advanced", "Expert"];
    return (
      <button
        onClick={() => setScore(qid, val)}
        title={`${val}: ${labs[val - 1]}`}
        style={{
          width: 38,
          height: 38,
          borderRadius: 7,
          background: sel
            ? cols[val - 1]
            : "#ffffff",
          border: `2px solid ${
            sel ? cols[val - 1] : "rgba(148,163,184,0.6)"
          }`,
          color: sel ? "#ffffff" : "#6b7280",
          fontWeight: 800,
          fontSize: 14,
          cursor: "pointer",
          transition: "all 0.12s",
          fontFamily: "'DM Sans',sans-serif",
        }}
        onMouseEnter={(e) => {
          if (!sel) {
            e.currentTarget.style.borderColor = cols[val - 1];
            e.currentTarget.style.color = cols[val - 1];
          }
        }}
        onMouseLeave={(e) => {
          if (!sel) {
            e.currentTarget.style.borderColor =
              "rgba(148,163,184,0.6)";
            e.currentTarget.style.color =
              "#6b7280";
          }
        }}
      >
        {val}
      </button>
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f9fafb",
        fontFamily: "'DM Sans',sans-serif",
        color: "#0f172a",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid rgba(226,232,240,0.9)",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          gap: 14,
          height: 54,
          flexShrink: 0,
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "transparent",
            border: "none",
            color: "#64748b",
            cursor: "pointer",
            fontSize: 18,
            padding: "4px 8px",
            borderRadius: 6,
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#2563eb";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#64748b";
          }}
        >
          ←
        </button>
        <div
          style={{
            width: 1,
            height: 18,
            background: "rgba(148,163,184,0.4)",
          }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <span
            style={{
              fontFamily: "'Playfair Display',serif",
              fontSize: 16,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            {assessment.companyName}
          </span>
          {assessment.consultantName && (
            <span
              style={{
                fontSize: 11,
                color: "#6b7280",
                marginLeft: 8,
              }}
            >
              · {assessment.consultantName}
            </span>
          )}
          {assessment.workshopDate && (
            <span
              style={{
                fontSize: 11,
                color: "#6b7280",
                marginLeft: 8,
              }}
            >
              ·{" "}
              {fmtDate(
                new Date(assessment.workshopDate).getTime() +
                  43200000,
              )}
            </span>
          )}
        </div>
        <div
          style={{
            fontSize: 11,
            color: "#6b7280",
            flexShrink: 0,
          }}
        >
          {totalAnswered}/{totalQ}
        </div>
        <div
          style={{
            display: "flex",
            gap: 3,
            background: "rgba(226,232,240,0.9)",
            borderRadius: 8,
            padding: 3,
          }}
        >
          {["assess", "summary"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "5px 14px",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
                fontFamily: "'DM Sans',sans-serif",
                fontSize: 12,
                fontWeight: 600,
                transition: "all 0.15s",
                background:
                  tab === t
                    ? "rgba(59,130,246,0.12)"
                    : "transparent",
                color:
                  tab === t
                    ? "#1d4ed8"
                    : "#64748b",
              }}
            >
              {t === "assess" ? "Assessment" : "Summary"}
            </button>
          ))}
        </div>
      </div>

      {tab === "assess" && (
        <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
          <div
            style={{
              width: 196,
              background: "#f9fafb",
              borderRight: "1px solid rgba(226,232,240,0.9)",
              display: "flex",
              flexDirection: "column",
              flexShrink: 0,
              overflowY: "auto",
            }}
          >
            <div
              style={{
                padding: "14px 14px 6px",
                fontSize: 9,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#9ca3af",
                fontWeight: 700,
              }}
            >
              Dimensions
            </div>
            {DIMENSIONS.map((d, i) => {
              const s = getDimScore(d);
              const ans = d.questions.filter((q) => scores[q.id]).length;
              const active = activeDim === i;
              return (
                <button
                  key={d.id}
                  onClick={() => setActiveDim(i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "11px 14px",
                    border: "none",
                    cursor: "pointer",
                    background: active
                    ? "rgba(226,232,240,0.8)"
                      : "transparent",
                    borderLeft: active
                      ? `3px solid ${d.accent}`
                      : "3px solid transparent",
                    transition: "all 0.12s",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: active
                        ? "#0f172a"
                        : "#6b7280",
                      marginBottom: 3,
                      lineHeight: 1.3,
                    }}
                  >
                    {d.title}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 10,
                        color: "#9ca3af",
                      }}
                    >
                      {ans}/{d.questions.length}
                    </div>
                    {s && (
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 800,
                          color: maturityColor(s),
                        }}
                      >
                        {s.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      marginTop: 5,
                      height: 2,
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: 1,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${(ans / d.questions.length) * 100}%`,
                        background: d.accent,
                        borderRadius: 1,
                      }}
                    />
                  </div>
                </button>
              );
            })}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                borderTop: "1px solid rgba(226,232,240,0.9)",
                margin: "10px 0 0",
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                color: "#9ca3af",
                  marginBottom: 9,
                  fontWeight: 700,
                }}
              >
                Workshop Mode
              </div>
              {[
                ["all", "🏢 All questions"],
                ["finance", "🏦 Finance only"],
                ["it", "💻 Finance + IT"],
              ].map(([k, l]) => (
                <button
                  key={k}
                  onClick={() => setAudienceFilter(k)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "7px 10px",
                    marginBottom: 4,
                    borderRadius: 7,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    background:
                      audienceFilter === k
                        ? "rgba(59,130,246,0.12)"
                        : "transparent",
                    color:
                      audienceFilter === k
                        ? "#1d4ed8"
                        : "#64748b",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px 24px 32px 26px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 38,
                  borderRadius: 2,
                  background: dim.accent,
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 21,
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 3px",
                  }}
                >
                  {dim.title}
                </h2>
                <p
                  style={{
                    fontSize: 12,
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  {dim.subtitle}
                </p>
              </div>
              {getDimScore(dim) && (
                <div
                  style={{
                    textAlign: "center",
                    background: "#ffffff",
                    borderRadius: 10,
                    padding: "10px 16px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 800,
                      color: maturityColor(getDimScore(dim)),
                      fontFamily: "'Playfair Display',serif",
                      lineHeight: 1,
                    }}
                  >
                    {getDimScore(dim).toFixed(1)}
                  </div>
                  <div
                    style={{
                      fontSize: 10,
                        color: maturityColor(getDimScore(dim)),
                      fontWeight: 600,
                    }}
                  >
                    {maturityLabel(getDimScore(dim))}
                  </div>
                </div>
              )}
            </div>

            {audienceFilter !== "all" && (
              <div
                style={{
                  background: "rgba(219,234,254,0.9)",
                  border: "1px solid rgba(191,219,254,1)",
                  borderRadius: 8,
                  padding: "7px 14px",
                  fontSize: 12,
                  color: "#1d4ed8",
                  marginBottom: 14,
                }}
              >
                Showing {filteredQ.length} of {dim.questions.length} questions
                for current workshop mode
              </div>
            )}

            <div style={{ display: "flex", gap: 18 }}>
              <div style={{ flex: 1 }}>
                {filteredQ.map((q, qi) => {
                  const ac = AUDIENCE_CFG[q.audience];
                  const noteVal = notes[q.id] || "";
                  return (
                    <div
                      key={q.id}
                      style={{
                      background: "#ffffff",
                      border: "1px solid rgba(226,232,240,1)",
                      borderRadius: 12,
                        padding: "16px 18px",
                        marginBottom: 10,
                        borderLeft: `3px solid ${dim.accent}`,
                      }}
                    >
                      <div style={{ display: "flex", gap: 10, marginBottom: 9 }}>
                        <div
                          style={{
                            width: 24,
                            height: 24,
                            borderRadius: "50%",
                            background: dim.accent,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 11,
                            fontWeight: 800,
                            color: "#fff",
                            flexShrink: 0,
                            marginTop: 2,
                          }}
                        >
                          {qi + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              display: "flex",
                              gap: 5,
                              marginBottom: 7,
                              flexWrap: "wrap",
                            }}
                          >
                            <span
                              style={{
                                fontSize: 10,
                                padding: "2px 8px",
                                borderRadius: 20,
                                background: `${ac.border}18`,
                                border: `1px solid ${ac.border}35`,
                                color: ac.color,
                                fontWeight: 700,
                                letterSpacing: 0.2,
                              }}
                            >
                              {ac.label}
                            </span>
                            {q.isNew && (
                              <span
                                style={{
                                  fontSize: 10,
                                  padding: "2px 8px",
                                  borderRadius: 20,
                                  background: "rgba(201,162,39,0.1)",
                                  border: "1px solid rgba(201,162,39,0.25)",
                                  color: "#c9a227",
                                  fontWeight: 700,
                                }}
                              >
                                ✦ New
                              </span>
                            )}
                          </div>
                          <p
                            style={{
                              margin: 0,
                              fontSize: 14,
                              lineHeight: 1.6,
                              fontWeight: 500,
                              color: "#111827",
                            }}
                          >
                            {q.text}
                          </p>
                        </div>
                      </div>
                      <div
                        style={{
                          background: "#f9fafb",
                          borderRadius: 7,
                          padding: "7px 12px",
                          marginBottom: 10,
                          marginLeft: 34,
                          border: "1px solid rgba(255,255,255,0.04)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 700,
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: 1,
                          }}
                        >
                          Look for:{" "}
                        </span>
                        <span
                          style={{
                            fontSize: 12,
                            color: "#4b5563",
                            fontStyle: "italic",
                            lineHeight: 1.5,
                          }}
                        >
                          {q.lookFor}
                        </span>
                      </div>
                      {q.itNote && audienceFilter !== "finance" && (
                        <div
                          style={{
                            background: "rgba(220,252,231,1)",
                            borderRadius: 7,
                            padding: "6px 12px",
                            marginBottom: 8,
                            marginLeft: 34,
                            border:
                              "1px solid rgba(34,197,94,0.4)",
                            fontSize: 11,
                            color: "#166534",
                          }}
                        >
                          💻 IT note: {q.itNote}
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          marginLeft: 34,
                        }}
                      >
                        <span
                          style={{
                            fontSize: 11,
                            color: "#9ca3af",
                            marginRight: 3,
                          }}
                        >
                          Score:
                        </span>
                        {[1, 2, 3, 4, 5].map((v) => (
                          <ScoreBtn key={v} qid={q.id} val={v} />
                        ))}
                        {scores[q.id] && (
                          <span
                            style={{
                              fontSize: 12,
                              fontWeight: 700,
                              color: maturityColor(scores[q.id]),
                              marginLeft: 5,
                            }}
                          >
                            {maturityLabel(scores[q.id])}
                          </span>
                        )}
                      </div>
                      <div
                        style={{
                          marginTop: 10,
                          marginLeft: 34,
                          display: "flex",
                          flexDirection: "column",
                          gap: 4,
                        }}
                      >
                        <label
                          style={{
                            fontSize: 11,
                            color: "#6b7280",
                            fontWeight: 500,
                          }}
                        >
                          Notes (optional)
                        </label>
                        <textarea
                          value={noteVal}
                          onChange={(e) => setNote(q.id, e.target.value)}
                          placeholder="Capture key observations, quotes, or examples…"
                          rows={2}
                          style={{
                            width: "100%",
                            resize: "vertical",
                            borderRadius: 8,
                            border: "1px solid rgba(148,163,184,0.7)",
                            padding: "8px 10px",
                            fontSize: 12,
                            fontFamily: "'DM Sans',sans-serif",
                            color: "#111827",
                            background: "#f9fafb",
                            outline: "none",
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#2563eb";
                            e.target.style.background = "#ffffff";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "rgba(148,163,184,0.7)";
                            e.target.style.background = "#f9fafb";
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div style={{ width: 230, flexShrink: 0 }}>
                <div style={{ position: "sticky", top: 0 }}>
                  <div
                    style={{
                      background: dim.color,
                      borderRadius: "10px 10px 0 0",
                      padding: "11px 14px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 9,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                        marginBottom: 2,
                        fontWeight: 700,
                      }}
                    >
                      Reference
                    </div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                          color: "#ffffff",
                      }}
                    >
                      What does this look like?
                    </div>
                  </div>
                  {[
                    {
                      level: "Level 2",
                      key: "l2",
                      color: "#e74c3c",
                      bg: "rgba(248,113,113,0.08)",
                    },
                    {
                      level: "Level 3",
                      key: "l3",
                      color: "#c9a227",
                      bg: "rgba(250,204,21,0.08)",
                    },
                    {
                      level: "Level 4",
                      key: "l4",
                      color: "#27ae60",
                      bg: "rgba(74,222,128,0.08)",
                    },
                  ].map(({ level, key, color, bg }) => (
                    <div
                      key={key}
                      style={{
                        background: bg,
                        borderLeft: `1px solid ${color}25`,
                        borderRight: `1px solid ${color}25`,
                        padding: "11px 12px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          color,
                          letterSpacing: 0.3,
                          marginBottom: 7,
                        }}
                      >
                        Typical {level}
                      </div>
                      {dim.vignettes[key].map((item, i) => (
                        <div
                          key={i}
                          style={{ display: "flex", gap: 5, marginBottom: 5 }}
                        >
                          <div
                            style={{
                              width: 4,
                              height: 4,
                              borderRadius: "50%",
                              background: color,
                              flexShrink: 0,
                              marginTop: 6,
                            }}
                          />
                          <p
                            style={{
                              margin: 0,
                              fontSize: 11,
                                color: "#111827",
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                  <div
                    style={{
                      background: "#f3f4f6",
                      border: "1px solid rgba(209,213,219,1)",
                      borderTop: "none",
                      borderRadius: "0 0 10px 10px",
                      padding: "9px 12px",
                    }}
                  >
                    <p
                      style={{
                        margin: 0,
                        fontSize: 10,
                        color: "#6b7280",
                        fontStyle: "italic",
                        textAlign: "center",
                        lineHeight: 1.5,
                      }}
                    >
                      Average question scores (1–5). Dimension score feeds into
                      the overall readiness profile.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {tab === "summary" && (
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "32px 40px 40px",
          }}
        >
          <div style={{ maxWidth: 840, margin: "0 auto" }}>
            <div
              style={{
                display: "flex",
                gap: 22,
                alignItems: "flex-start",
                marginBottom: 32,
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    color: "#1d4ed8",
                    fontWeight: 700,
                    marginBottom: 8,
                  }}
                >
                  Readiness Profile
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: 26,
                    fontWeight: 700,
                    color: "#0f172a",
                    margin: "0 0 5px",
                  }}
                >
                  {assessment.companyName}
                </h2>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    margin: 0,
                  }}
                >
                  {totalAnswered} of {totalQ} questions answered ·{" "}
                  {DIMENSIONS.length} dimensions
                </p>
              </div>
              {overall && (
                <div
                  style={{
                    textAlign: "center",
                    background: "#ffffff",
                    border: "1px solid rgba(226,232,240,1)",
                    borderRadius: 14,
                    padding: "16px 26px",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                        color: "#9ca3af",
                      marginBottom: 3,
                    }}
                  >
                    Overall
                  </div>
                  <div
                    style={{
                      fontSize: 44,
                      fontWeight: 800,
                      lineHeight: 1,
                      color: maturityColor(overall),
                      fontFamily: "'Playfair Display',serif",
                    }}
                  >
                    {overall.toFixed(1)}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: maturityColor(overall),
                      marginTop: 3,
                    }}
                  >
                    {maturityLabel(overall)}
                  </div>
                </div>
              )}
            </div>

            <div
              style={{
                display: "flex",
                gap: 22,
                marginBottom: 20,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,1)",
                  borderRadius: 14,
                  padding: 20,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 240,
                  flex: "0 0 auto",
                }}
              >
                <RadarChart scores={allDimScores} size={240} />
              </div>
              <div style={{ flex: 1, minWidth: 240 }}>
                {DIMENSIONS.map((d) => {
                  const s = getDimScore(d);
                  const ans = d.questions.filter(
                    (q) => scores[q.id],
                  ).length;
                  return (
                    <div
                      key={d.id}
                      style={{
                        background: "#ffffff",
                        border: "1px solid rgba(226,232,240,1)",
                        borderRadius: 10,
                        padding: "13px 16px",
                        marginBottom: 9,
                        borderLeft: `4px solid ${d.accent}`,
                        cursor: "pointer",
                        transition: "border-color 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderLeftColor = d.accent;
                      }}
                      onClick={() => {
                        setActiveDim(DIMENSIONS.indexOf(d));
                        setTab("assess");
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: 5,
                        }}
                      >
                        <div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: "#0f172a",
                            }}
                          >
                            {d.title}
                          </div>
                          <div
                            style={{
                              fontSize: 10,
                              color: "#6b7280",
                            }}
                          >
                            {ans}/{d.questions.length} answered · click to edit
                          </div>
                        </div>
                        {s ? (
                          <div style={{ textAlign: "right" }}>
                            <div
                              style={{
                                fontSize: 22,
                                fontWeight: 800,
                                color: maturityColor(s),
                                fontFamily: "'Playfair Display',serif",
                                lineHeight: 1,
                              }}
                            >
                              {s.toFixed(1)}
                            </div>
                            <div
                              style={{
                                fontSize: 10,
                                fontWeight: 600,
                                color: maturityColor(s),
                              }}
                            >
                              {maturityLabel(s)}
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{
                              fontSize: 11,
                              color: "rgba(255,255,255,0.2)",
                            }}
                          >
                            Not scored
                          </div>
                        )}
                      </div>
                      <div
                        style={{
                          height: 3,
                          background: "#e5e7eb",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${(ans / d.questions.length) * 100}%`,
                            background: d.accent,
                            borderRadius: 2,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Main takeaway from notes */}
            <div
              style={{
                marginBottom: 24,
                background: "#ffffff",
                border: "1px solid rgba(226,232,240,1)",
                borderRadius: 10,
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  marginBottom: 6,
                  fontWeight: 700,
                }}
              >
                Main takeaway
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  margin: "0 0 8px",
                }}
              >
                Use the notes captured during the workshop to generate a concise, executive-ready
                summary of this assessment.
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <button
                  type="button"
                  onClick={handleGenerateMainTakeaway}
                  disabled={mainTakeawayLoading}
                  style={{
                    padding: "6px 12px",
                    borderRadius: 999,
                    border: "none",
                    cursor: mainTakeawayLoading ? "wait" : "pointer",
                    fontSize: 12,
                    fontWeight: 600,
                    fontFamily: "'DM Sans',sans-serif",
                    background: "linear-gradient(135deg,#1d4ed8,#2563eb)",
                    color: "#ffffff",
                    opacity: mainTakeawayLoading ? 0.8 : 1,
                  }}
                >
                  {mainTakeawayLoading ? "Generating…" : "Generate from notes"}
                </button>
                <span
                  style={{
                    fontSize: 11,
                    color: "#6b7280",
                  }}
                >
                  Calls OpenAI using your per-question notes; nothing is stored in this app.
                </span>
              </div>
              {mainTakeawayError && (
                <div
                  style={{
                    fontSize: 11,
                    color: "#b91c1c",
                    marginBottom: 6,
                  }}
                >
                  {mainTakeawayError}
                </div>
              )}
              <div
                style={{
                  minHeight: 70,
                  fontSize: 12,
                  color: "#111827",
                  background: "#f9fafb",
                  borderRadius: 8,
                  padding: "8px 10px",
                  border: "1px dashed rgba(148,163,184,0.9)",
                  whiteSpace: "pre-line",
                }}
              >
                {mainTakeaway
                  ? mainTakeaway
                  : "Click “Generate from notes” to create a 3–6 sentence executive summary highlighting the key themes, strengths, and gaps across dimensions."}
              </div>
            </div>

            {/* Top 3 easiest use cases */}
            <div
              style={{
                marginBottom: 24,
                background: "#f9fafb",
                border: "1px solid rgba(226,232,240,1)",
                borderRadius: 10,
                padding: "12px 14px",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  marginBottom: 6,
                  fontWeight: 700,
                }}
              >
                Top 3 closest-fit use cases
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  margin: "0 0 8px",
                }}
              >
                Based on your current dimension scores, these use cases require the least uplift to
                reach minimum readiness thresholds.
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                  fontSize: 12,
                }}
              >
                {topUseCases.map((uc) => {
                  const key = `${uc.group}::${uc.name}`;
                  const isSelected = selectedUseCaseKey === key;
                  return (
                    <div key={`${uc.group}-${uc.name}`}>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedUseCaseKey((prev) => (prev === key ? null : key))
                        }
                        style={{
                          textAlign: "left",
                          padding: "6px 8px",
                          borderRadius: 8,
                          border: isSelected
                            ? "1px solid rgba(59,130,246,0.7)"
                            : "1px solid transparent",
                          background: isSelected ? "rgba(219,234,254,0.8)" : "transparent",
                          cursor: "pointer",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: 8,
                          width: "100%",
                        }}
                      >
                        <span style={{ color: "#111827" }}>{uc.name}</span>
                        <span
                          style={{
                            fontSize: 10,
                            borderRadius: 999,
                            padding: "2px 8px",
                            border: `1px solid ${uc.classification.color}`,
                            color: uc.classification.color,
                          }}
                        >
                          {uc.classification.label}
                        </span>
                      </button>
                      {isSelected && (
                        <div
                          style={{
                            marginTop: 4,
                            marginBottom: 4,
                            padding: "6px 8px 10px",
                            borderRadius: 8,
                            background: "#f9fafb",
                            border: "1px solid rgba(226,232,240,1)",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              marginBottom: 6,
                            }}
                          >
                            <RadarChart
                              scores={allDimScores}
                              compare={uc.mins}
                              size={150}
                            />
                          </div>
                          <div
                            style={{
                              fontSize: 11,
                              color: "#6b7280",
                              marginBottom: 6,
                            }}
                          >
                            {uc.classification.description}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 6,
                            }}
                          >
                            {DIMENSIONS.map((d) => {
                              const org = allDimScores[d.id] || 0;
                              const req = uc.mins[d.id] ?? 0;
                              const meets = org >= req && req > 0;
                              const gap = !meets && req > 0 ? req - org : 0;
                              return (
                                <div
                                  key={d.id}
                                  style={{
                                    flex: "1 0 120px",
                                    minWidth: 120,
                                    borderRadius: 8,
                                    border: meets
                                      ? "1px solid rgba(167,243,208,0.8)"
                                      : "1px solid #f87171",
                                    padding: "4px 6px",
                                    background: meets ? "#ecfdf3" : "#fecaca",
                                  }}
                                >
                                  <div
                                    style={{
                                      fontSize: 10,
                                      fontWeight: 600,
                                      color: meets ? "#111827" : "#991b1b",
                                      marginBottom: 1,
                                    }}
                                  >
                                    {d.short}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: 10,
                                      color: meets ? "#4b5563" : "#b91c1c",
                                    }}
                                  >
                                    Org:{" "}
                                    <strong>{org ? org.toFixed(1) : "N/A"}</strong>{" "}
                                    · Min: <strong>{req ? req.toFixed(1) : "N/A"}</strong>
                                  </div>
                                  {!meets && gap > 0 && (
                                    <div
                                      style={{
                                        fontSize: 9,
                                        fontWeight: 700,
                                        color: "#dc2626",
                                        marginTop: 2,
                                      }}
                                    >
                                      Gap: {gap.toFixed(1)}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Use case readiness mapping */}
            <div
              style={{
                marginBottom: 28,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  marginBottom: 10,
                  fontWeight: 700,
                }}
              >
                Use-case readiness vs. minimum thresholds
              </div>
              <p
                style={{
                  fontSize: 12,
                  color: "#6b7280",
                  margin: "0 0 10px",
                  lineHeight: 1.6,
                }}
              >
                Each use case has a defined minimum readiness requirement per dimension. The
                classification below shows where the organization is ready today and where gaps must
                be closed before implementation.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 8,
                  fontSize: 11,
                  color: "#6b7280",
                  marginBottom: 10,
                  flexWrap: "wrap",
                }}
              >
                <span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "#16a34a",
                      marginRight: 4,
                    }}
                  />
                  Ready to implement
                </span>
                <span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "#f97316",
                      marginRight: 4,
                    }}
                  />
                  Targeted investment needed
                </span>
                <span>
                  <span
                    style={{
                      display: "inline-block",
                      width: 10,
                      height: 10,
                      borderRadius: 999,
                      background: "#dc2626",
                      marginRight: 4,
                    }}
                  />
                  Significant gaps
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {USE_CASE_GROUPS.map((group) => (
                  <div
                    key={group.category}
                    style={{
                      background: "#f9fafb",
                      border: "1px solid rgba(226,232,240,1)",
                      borderRadius: 10,
                      padding: "10px 12px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        textTransform: "uppercase",
                        letterSpacing: 1.4,
                        color: "#4b5563",
                        marginBottom: 6,
                        fontWeight: 600,
                      }}
                    >
                      {group.category}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                      }}
                    >
                      {group.items.map((uc) => {
                        const cls = classifyUseCase(allDimScores, uc.mins);
                        const key = `${group.category}::${uc.name}`;
                        const isSelected = selectedUseCaseKey === key;
                        return (
                          <div key={uc.name}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: 8,
                                padding: "5px 6px",
                                borderTop: "1px solid rgba(226,232,240,0.9)",
                                borderRadius: 8,
                                background: isSelected
                                  ? "rgba(219,234,254,0.8)"
                                  : "transparent",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                setSelectedUseCaseKey((prev) => (prev === key ? null : key))
                              }
                            >
                              <div
                                style={{
                                  fontSize: 12,
                                  color: "#111827",
                                  fontWeight: 500,
                                  flex: 1,
                                }}
                              >
                                {uc.name}
                              </div>
                              <div
                                style={{
                                  fontSize: 10,
                                  borderRadius: 999,
                                  padding: "3px 9px",
                                  border: `1px solid ${cls.color}`,
                                  color: cls.color,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {cls.label}
                              </div>
                            </div>
                            {isSelected && (
                              <div
                                style={{
                                  marginTop: 6,
                                  marginBottom: 4,
                                  padding: "6px 8px 8px",
                                  borderRadius: 8,
                                  background: "#f9fafb",
                                  border: "1px solid rgba(226,232,240,1)",
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginBottom: 6,
                                  }}
                                >
                                  <RadarChart
                                    scores={allDimScores}
                                    compare={uc.mins}
                                    size={150}
                                  />
                                </div>
                                <div
                                  style={{
                                    fontSize: 11,
                                    color: "#6b7280",
                                    marginBottom: 6,
                                  }}
                                >
                                  {cls.description}
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 6,
                                  }}
                                >
                                  {DIMENSIONS.map((d) => {
                                    const org = allDimScores[d.id] || 0;
                                    const req = uc.mins[d.id] ?? 0;
                                    const meets = org >= req && req > 0;
                                    const gap = !meets && req > 0 ? req - org : 0;
                                    return (
                                      <div
                                        key={d.id}
                                        style={{
                                          flex: "1 0 120px",
                                          minWidth: 120,
                                          borderRadius: 8,
                                          border: meets
                                            ? "1px solid rgba(167,243,208,0.8)"
                                            : "1px solid #f87171",
                                          padding: "4px 6px",
                                          background: meets ? "#ecfdf3" : "#fecaca",
                                        }}
                                      >
                                        <div
                                          style={{
                                            fontSize: 10,
                                            fontWeight: 600,
                                            color: meets ? "#111827" : "#991b1b",
                                            marginBottom: 1,
                                          }}
                                        >
                                          {d.short}
                                        </div>
                                        <div
                                          style={{
                                            fontSize: 10,
                                            color: meets ? "#4b5563" : "#b91c1c",
                                          }}
                                        >
                                          Org:{" "}
                                          <strong>
                                            {org ? org.toFixed(1) : "N/A"}
                                          </strong>{" "}
                                          · Min:{" "}
                                          <strong>
                                            {req ? req.toFixed(1) : "N/A"}
                                          </strong>
                                        </div>
                                        {!meets && gap > 0 && (
                                          <div
                                            style={{
                                              fontSize: 9,
                                              fontWeight: 700,
                                              color: "#dc2626",
                                              marginTop: 2,
                                            }}
                                          >
                                            Gap: {gap.toFixed(1)}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              style={{
                  background: "#ffffff",
                  border: "1px solid rgba(226,232,240,1)",
                borderRadius: 12,
                padding: "14px 18px 18px",
              }}
            >
              <div
                style={{
                  fontSize: 9,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                    color: "#9ca3af",
                  marginBottom: 12,
                  fontWeight: 700,
                }}
              >
                Maturity Scale Reference
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {[
                  {
                    s: 1,
                    l: "Beginner",
                    d: "Unstructured, reactive",
                    c: "#e74c3c",
                  },
                  {
                    s: 2,
                    l: "Emerging",
                    d: "Isolated efforts underway",
                    c: "#e67e22",
                  },
                  {
                    s: 3,
                    l: "Defined",
                    d: "Documented, consistent",
                    c: "#c9a227",
                  },
                  {
                    s: 4,
                    l: "Advanced",
                    d: "Managed and improving",
                    c: "#27ae60",
                  },
                  {
                    s: 5,
                    l: "Expert",
                    d: "AI-native, continuously scaling",
                    c: "#16a085",
                  },
                ].map((m) => (
                  <div
                    key={m.s}
                    style={{
                      flex: 1,
                      minWidth: 120,
                      background: "#f9fafb",
                      borderRadius: 8,
                      padding: "9px 12px",
                      borderTop: `3px solid ${m.c}`,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: 6,
                        alignItems: "center",
                        marginBottom: 3,
                      }}
                    >
                      <div
                        style={{
                          width: 19,
                          height: 19,
                          borderRadius: 5,
                          background: m.c,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 11,
                          fontWeight: 800,
                          color: "#fff",
                        }}
                      >
                        {m.s}
                      </div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: m.c,
                        }}
                      >
                        {m.l}
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#6b7280",
                        lineHeight: 1.4,
                      }}
                    >
                      {m.d}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [assessments, setAssessments] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [showNew, setShowNew] = useState(false);

  const handleCreate = ({ companyName, consultantName, workshopDate }) => {
    const a = {
      id: genId(),
      companyName,
      consultantName,
      workshopDate,
      scores: {},
      notes: {},
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };
    const updated = [a, ...assessments];
    setAssessments(updated);
    setActiveId(a.id);
    setShowNew(false);
  };

  const handleUpdate = (updated) => {
    const list = assessments.map((a) => (a.id === updated.id ? updated : a));
    setAssessments(list);
  };

  const handleDelete = (id) => {
    const list = assessments.filter((a) => a.id !== id);
    setAssessments(list);
    if (activeId === id) setActiveId(null);
  };

  const active = assessments.find((a) => a.id === activeId);

  return (
    <>
      <FontLoader />
      {active ? (
        <AssessmentView
          assessment={active}
          onUpdate={handleUpdate}
          onBack={() => setActiveId(null)}
        />
      ) : (
        <Landing
          assessments={assessments}
          onNew={() => setShowNew(true)}
          onOpen={setActiveId}
          onDelete={handleDelete}
        />
      )}
      {showNew && (
        <NewAssessmentModal
          onClose={() => setShowNew(false)}
          onCreate={handleCreate}
        />
      )}
    </>
  );
}


