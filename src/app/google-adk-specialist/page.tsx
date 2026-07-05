import type { Metadata } from 'next';
import GoogleADKSpecialistLanding from '@/components/landing/GoogleADKSpecialistLanding';
import JsonLd from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: 'Google ADK Specialist | Build AI Agents on Vertex AI & BigQuery',
  description:
    'Hire a Google Agent Development Kit (ADK) specialist to build production AI agents on Vertex AI Agent Engine. ADK + Gemini + BigQuery, with evals, observability, and managed ops. Prototypes from $5,000.',
  keywords:
    'Google ADK specialist, Google Agent Development Kit, ADK consultant, hire ADK engineer, Vertex AI agent, Vertex AI Agent Engine, AI agent specialist, marketing AI agents, BigQuery AI agent, Gemini agent developer, agent development kit, AI agent for analytics, RAG specialist, multi-agent system',
  alternates: {
    canonical: 'https://tagspecialist.ca/google-adk-specialist',
  },
  openGraph: {
    title: 'Google ADK Specialist | Build AI Agents on Vertex AI & BigQuery',
    description:
      'Hire a Google Agent Development Kit (ADK) specialist to build production AI agents on Vertex AI. ADK + Gemini + BigQuery with evals, observability, and managed ops.',
    type: 'website',
    url: 'https://tagspecialist.ca/google-adk-specialist',
  },
};

export default function GoogleADKSpecialistPage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Google ADK Specialist Services',
        description:
          'Expert Google Agent Development Kit (ADK) implementation: custom agent development, marketing analytics agents, RAG systems, multi-agent workflows, agent tooling and MCP integration, and production agent operations on Vertex AI.',
        provider: {
          '@type': 'Organization',
          name: 'Tag Specialist',
          url: 'https://tagspecialist.ca',
        },
        serviceType: 'AI Agent Development',
        areaServed: 'Worldwide',
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Google ADK Services',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom AI Agent Development',
                description:
                  'Production AI agents built with Google ADK and deployed on Vertex AI Agent Engine, powered by Gemini, with tool use, session memory, structured outputs, evals, and Cloud Trace observability.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Marketing Analytics Agents',
                description:
                  'Self-serve AI analysts that translate natural language to BigQuery SQL, surface campaign performance anomalies on a schedule, and generate weekly performance reports without dashboard sprawl.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'RAG Systems on BigQuery and Vertex AI',
                description:
                  'Retrieval-augmented generation grounded in real data: campaign performance, product catalogs, support tickets, internal docs. Vertex AI Search retrieval, Gemini generation, BigQuery as source of truth.',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Multi-Agent Workflows',
                description:
                  'Multiple specialized ADK agents orchestrated via sub-agent and workflow patterns: researcher, planner, critic, executor — for tasks too complex for a single agent loop.',
              },
            },
          ],
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: "What is Google's Agent Development Kit (ADK)?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: "Google's Agent Development Kit (ADK) is an open-source Python framework for building, evaluating, and deploying AI agents. Released in 2025, it provides primitives for agents (LLM-powered with tools), tools (functions agents can call), sessions and memory, multi-agent orchestration, and one-command deployment to Vertex AI Agent Engine. It works natively with Gemini and supports other LLMs via LiteLLM. Compared to LangChain or CrewAI, ADK is more opinionated, more production-focused, and tightly integrated with Google Cloud (BigQuery, Vertex AI, Cloud Run, IAM).",
            },
          },
          {
            '@type': 'Question',
            name: 'When should we use ADK instead of LangChain or CrewAI?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'ADK is the right choice when you are deploying production agents on GCP and want native integration with Vertex AI, BigQuery, and Cloud Run. It is opinionated about session management, evaluation, and deployment — less glue code than LangChain but less flexibility for non-GCP setups. Pick LangChain for broad provider support and a large integrations ecosystem. Pick CrewAI when role-based multi-agent collaboration is the dominant pattern. Pick ADK when GCP is your platform and production reliability is non-negotiable.',
            },
          },
          {
            '@type': 'Question',
            name: 'What does a Google ADK specialist do?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Google ADK specialist designs, builds, evaluates, and operates production AI agents using the Agent Development Kit. This includes ADK project scaffolding (agents, tools, sessions), tool layer design (function tools, MCP integrations, OpenAPI tools), Vertex AI Agent Engine deployment, evaluation harness setup, observability wiring (Cloud Trace, Cloud Logging), and production ops (canary rollouts, cost monitoring, rollback playbooks).',
            },
          },
          {
            '@type': 'Question',
            name: 'How much does a custom AI agent built with ADK cost?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Engagements range from a focused agent prototype ($5,000-$12,000, 2-3 weeks) to a full production multi-agent system with evals and ops tooling ($25,000-$60,000, 6-10 weeks). Marketing analytics agents (BigQuery + Gemini, single-agent loop) typically run $8,000-$18,000. Ongoing managed agent operations start at $400/month. Pricing is fixed-scope, not hourly.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://tagspecialist.ca' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Google ADK Specialist',
            item: 'https://tagspecialist.ca/google-adk-specialist',
          },
        ],
      },
      {
        '@type': 'WebPage',
        name: 'Google ADK Specialist',
        url: 'https://tagspecialist.ca/google-adk-specialist',
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', '[data-speakable]'],
        },
        description:
          "Google's Agent Development Kit (ADK) is an open-source Python framework for building, evaluating, and deploying AI agents on Google Cloud. A Google ADK specialist designs the agent, builds the tool layer, deploys to Vertex AI Agent Engine, and ships an evaluation harness. Engagements range from $5,000 prototypes to $60,000 production multi-agent systems, with managed agent operations from $400/month.",
      },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <GoogleADKSpecialistLanding />
    </>
  );
}
