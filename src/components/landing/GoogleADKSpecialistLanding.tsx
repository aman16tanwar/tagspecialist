'use client';

import { motion } from 'framer-motion';
import {
  HiCheck,
  HiArrowRight,
  HiLightningBolt,
  HiChartBar,
  HiCode,
  HiCog,
  HiChevronDown,
  HiChevronUp,
  HiCheckCircle,
  HiSparkles,
  HiCube,
} from 'react-icons/hi';
import Link from 'next/link';
import { useState } from 'react';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';

interface FAQ {
  q: string;
  a: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function GoogleADKSpecialistLanding() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      icon: HiSparkles,
      title: 'Custom AI Agent Development',
      description:
        'Production agents built with Google ADK, deployed on Vertex AI Agent Engine. Powered by Gemini 2.5 with tool use, session memory, and structured outputs. Designed for marketing analytics, ops automation, and customer-facing assistants.',
      deliverables: [
        'ADK project scaffolding (agent, tools, sessions)',
        'Tool integrations (BigQuery, Google Ads, GA4, internal APIs)',
        'Vertex AI Agent Engine deployment',
        'Evaluation harness and regression tests',
        'Observability via Cloud Trace + Cloud Logging',
      ],
    },
    {
      icon: HiChartBar,
      title: 'Marketing Analytics Agents',
      description:
        'Self-serve AI analysts that answer "why is CPA up this week?" with real BigQuery queries, surface anomalies on a schedule, and generate weekly performance reports — without dashboard sprawl.',
      deliverables: [
        'Natural-language → BigQuery SQL agent',
        'Anomaly detection on campaign performance',
        'Scheduled performance summaries (Slack / email)',
        'Attribution explainer agent',
        'Read-only IAM with audit logging',
      ],
    },
    {
      icon: HiCube,
      title: 'RAG Systems on BigQuery & Vertex AI',
      description:
        'Retrieval-augmented generation grounded in your real data — campaign performance, product catalogs, support tickets, internal docs. Vertex AI Search for retrieval, Gemini for generation, BigQuery for the source of truth.',
      deliverables: [
        'Vertex AI Search index design',
        'Embedding pipelines (text-embedding-005 / multimodal)',
        'Grounded generation with citations',
        'Hybrid retrieval (semantic + keyword + filters)',
        'Eval set for retrieval and generation quality',
      ],
    },
    {
      icon: HiCog,
      title: 'Multi-Agent Workflows',
      description:
        'Orchestrate multiple specialized agents — researcher, planner, critic, executor — with ADK\'s sub-agent and workflow patterns. Best for tasks too complex for a single agent loop, like end-to-end campaign briefs or multi-step diagnostics.',
      deliverables: [
        'Sub-agent decomposition and routing',
        'Sequential and parallel agent workflows',
        'Critic / verifier agents for quality control',
        'Stateful session management',
        'Human-in-the-loop checkpoints',
      ],
    },
    {
      icon: HiCode,
      title: 'Agent Tooling & MCP Integration',
      description:
        'The agent is only as good as its tools. We design and build the tool layer — typed function tools, MCP server integrations, OpenAPI tool generation — that connects ADK agents to your real systems safely.',
      deliverables: [
        'Custom Python function tools',
        'MCP server integration for shared tool ecosystems',
        'OpenAPI → ADK tool auto-generation',
        'Authorization, scopes, and rate limiting',
        'Tool result caching and idempotency',
      ],
    },
    {
      icon: HiLightningBolt,
      title: 'Agent Evaluation & Production Ops',
      description:
        'Most ADK agents fail in production for the same reasons: unstable tool behavior, prompt drift, and no eval harness. We add evals, telemetry, and rollout discipline so the agent that worked yesterday still works tomorrow.',
      deliverables: [
        'Eval set design (golden tests + adversarial)',
        'Continuous eval in CI/CD',
        'Cloud Trace + structured logging for every step',
        'Cost monitoring per agent / per task',
        'Canary rollouts and rollback playbooks',
      ],
    },
  ];

  const whyUs = [
    {
      title: 'Marketing Data + AI Engineering, Not Either Or',
      description:
        'Most agent shops know LLMs but not your data. Most data shops know BigQuery but ship LangChain demos. We do both — production agents grounded in production marketing data.',
    },
    {
      title: 'GCP-Native Architecture',
      description:
        'ADK + Vertex AI + BigQuery + Cloud Run is one IAM boundary, one billing surface, one observability stack. We deploy in your GCP project — no vendor lock-in to a third-party agent platform.',
    },
    {
      title: 'Eval-First, Not Demo-First',
      description:
        'Every agent ships with an eval harness. Demos look great until prompt-drift breaks them on Monday. Evals catch the drift before it ships.',
    },
    {
      title: 'Production Discipline',
      description:
        'Cloud Trace on every tool call. Cost monitoring per agent invocation. Canary deploys, rollback playbooks, and on-call runbooks. Production-grade, not Jupyter-grade.',
    },
    {
      title: '15+ Years of Data Engineering',
      description:
        'BigQuery, dbt, Cloud Run, Pub/Sub — the substrate ADK agents need access to is the substrate we have been building on for 15+ years.',
    },
    {
      title: 'Direct Engineer Access',
      description:
        'No project managers, no offshore handoffs. You work directly with the engineer writing the agent code, prompt, and tool layer.',
    },
  ];

  const faqs: FAQ[] = [
    {
      q: 'What is Google\'s Agent Development Kit (ADK)?',
      a: 'Google\'s Agent Development Kit (ADK) is an open-source Python framework for building, evaluating, and deploying AI agents. Released in 2025, it provides primitives for agents (LLM-powered with tools), tools (functions agents can call), sessions and memory, multi-agent orchestration (sub-agents, sequential and parallel workflows), and one-command deployment to Vertex AI Agent Engine. It works natively with Gemini, but also supports other LLMs via LiteLLM. Compared to LangChain or CrewAI, ADK is more opinionated, more production-focused, and tightly integrated with the rest of Google Cloud (BigQuery, Vertex AI, Cloud Run, IAM).',
    },
    {
      q: 'When should we use ADK instead of LangChain or CrewAI?',
      a: 'ADK is the right choice when you are deploying production agents on GCP and want native integration with Vertex AI, BigQuery, and Cloud Run. It is opinionated about session management, evaluation, and deployment — which means less glue code than LangChain but less flexibility for non-GCP setups. Pick LangChain when you need broad provider support and a large ecosystem of integrations. Pick CrewAI when role-based multi-agent collaboration is the dominant pattern. Pick ADK when GCP is your platform and production reliability is non-negotiable.',
    },
    {
      q: 'What does a Google ADK specialist do?',
      a: 'A Google ADK specialist designs, builds, evaluates, and operates production AI agents using the Agent Development Kit. This includes ADK project scaffolding (agents, tools, sessions), tool layer design (function tools, MCP integrations, OpenAPI tools), Vertex AI Agent Engine deployment, evaluation harness setup, observability wiring (Cloud Trace, Cloud Logging), and production ops (canary rollouts, cost monitoring, rollback playbooks). For marketing-focused agents, also: BigQuery tool integration, GA4 / Ads API tools, and natural-language → SQL generation patterns.',
    },
    {
      q: 'How much does a custom AI agent built with ADK cost?',
      a: 'Engagements range from a focused agent prototype ($5,000-$12,000, 2-3 weeks) to a full production multi-agent system with evals and ops tooling ($25,000-$60,000, 6-10 weeks). Marketing analytics agents (BigQuery + Gemini, single-agent loop) typically run $8,000-$18,000. Ongoing managed agent operations start at $400/month. Pricing is fixed-scope, not hourly.',
    },
    {
      q: 'Can ADK agents query our BigQuery data warehouse safely?',
      a: 'Yes — and the safety story is one of ADK\'s strengths. Agents access BigQuery via typed function tools that you define, with read-only IAM bindings, query templates, and result-row limits. The agent does not get arbitrary SQL execution; it picks from a set of permitted tools each with clear scope. Combined with Cloud Audit Logs on every BigQuery call, you get full traceability of which agent ran which query for which user.',
    },
    {
      q: 'How does ADK handle agent evaluation?',
      a: 'ADK has built-in evaluation primitives — `AgentEvaluator` with golden test sets, automated scoring, and CI/CD integration. We typically design two eval sets: a golden set (representative happy-path cases that should always work) and an adversarial set (edge cases, prompt injections, off-topic requests that should be rejected gracefully). Evals run in CI on every prompt or tool change, and we ship to production only when the new agent matches or exceeds the previous version on both sets.',
    },
    {
      q: 'Do ADK agents support MCP (Model Context Protocol)?',
      a: 'Yes. ADK supports both consuming MCP servers (using their tools inside an ADK agent) and exposing ADK tools as an MCP server (so other agents — including non-Google ones — can use them). This matters for organizations that want a shared tool ecosystem across ADK, Anthropic\'s Claude SDK, and other agent frameworks without rewriting tools per platform.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-600 rounded-full filter blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
        </div>
        <div className="content-container py-16 lg:py-24 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-orange-400 font-heading font-semibold text-sm uppercase tracking-wider mb-4">
              Google ADK Specialist · Vertex AI · Gemini
            </p>
            <h1 className="text-white text-[32px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              Google Agent Development Kit Specialist:{' '}
              <span className="text-orange-400">Production AI Agents on Google Cloud</span>
            </h1>
            <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
              Most AI agents look great in a Jupyter notebook and break in production. We build ADK agents the way data
              infrastructure should be built — with evals, observability, IAM, and a deployment pipeline — grounded in
              your real BigQuery data, deployed on Vertex AI Agent Engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=adk"
                className="btn-primary text-center inline-flex items-center justify-center gap-2 group"
              >
                Book a Free Agent Scoping Call
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/case-studies"
                className="bg-white/10 text-white border-2 border-white/20 px-7 py-3.5 rounded-md font-heading font-semibold transition-all hover:bg-white/20 text-center"
              >
                See Our Results
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center mt-12 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> ADK + Vertex AI Agent Engine
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> Production evals included
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> 15+ years data engineering
              </span>
              <span className="flex items-center gap-2">
                <HiCheckCircle className="text-green-400" /> Deployed in your GCP project
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Answer-First Summary for AI/AEO */}
      <section className="py-10 bg-gray-50 border-b border-gray-200" data-speakable="true">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-base leading-relaxed">
              <strong>Google&apos;s Agent Development Kit (ADK)</strong> is an open-source Python framework for building,
              evaluating, and deploying AI agents on Google Cloud. <strong>A Google ADK specialist</strong> designs the
              agent (LLM, prompts, structured outputs), builds the tool layer (typed function tools, MCP integrations,
              OpenAPI tools), wires Vertex AI Agent Engine deployment, and ships an evaluation harness that catches
              regressions before they reach production. As of 2026, a typical ADK engagement runs{' '}
              <strong>2-10 weeks</strong> and costs between <strong>$5,000 (prototype)</strong> and{' '}
              <strong>$60,000 (full multi-agent system)</strong>, with managed agent operations from{' '}
              <strong>$400/month</strong>. The TagSpecialist team combines 15+ years of data engineering on Google Cloud
              with hands-on ADK production deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2>Google ADK Specialist Services</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              From a focused agent prototype to a full production multi-agent system — built with ADK, deployed on
              Vertex AI, grounded in your real data.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <HiCheck className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Why TagSpecialist for Google ADK</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              Most agent shops know LLMs but not your data. Most data shops ship Jupyter demos. We do both.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: index * 0.08 }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mb-3">
                  <HiCheck className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — productized service tiers */}
      <section className="section-padding bg-white" data-speakable="true">
        <div className="content-container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-10"
          >
            <h2>Google ADK Engagements</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
              Fixed-scope, fixed-price engagements. From a focused prototype to a production multi-agent system.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="overflow-x-auto"
          >
            <table className="w-full bg-white rounded-xl shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-navy-900 text-white">
                  <th className="text-left px-6 py-4 font-heading font-semibold rounded-tl-xl">Engagement</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold">Price Range</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold">Timeline</th>
                  <th className="text-left px-6 py-4 font-heading font-semibold rounded-tr-xl">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-navy-900">Agent Prototype</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">$5,000 – $12,000</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">2–3 weeks</td>
                  <td className="px-6 py-4 text-gray-600">Validating an agent use case before bigger commitment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Marketing Analytics Agent</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">$8,000 – $18,000</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">3–5 weeks</td>
                  <td className="px-6 py-4 text-gray-600">BigQuery + Gemini single-agent (anomaly detection, NL→SQL)</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold text-navy-900">Production Multi-Agent System</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">$25,000 – $60,000</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">6–10 weeks</td>
                  <td className="px-6 py-4 text-gray-600">Multi-agent orchestration with evals, ops, deployment</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-navy-900">Managed Agent Operations</td>
                  <td className="px-6 py-4 text-orange-600 font-bold whitespace-nowrap">From $400/month</td>
                  <td className="px-6 py-4 text-gray-700 whitespace-nowrap">Ongoing</td>
                  <td className="px-6 py-4 text-gray-600">Eval runs, prompt updates, model upgrades, on-call</td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/book-audit?service=adk"
              className="btn-primary inline-flex items-center justify-center gap-2 group"
            >
              Get a Fixed-Price Quote
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="content-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>How It Works</h2>
            <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
              From use-case discovery to a deployed agent with evals — typically in 3-6 weeks for a single agent.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Use Case & Eval Set',
                description:
                  'Pick the right agent shape for the job. Define golden tests and adversarial cases before any code ships. If it cannot be measured, it does not get built.',
              },
              {
                step: '2',
                title: 'Tool Layer & Prompt',
                description:
                  'Build typed function tools, wire MCP servers, draft the agent prompt and structured outputs. Iterate against the eval set, not against vibes.',
              },
              {
                step: '3',
                title: 'Deploy & Observe',
                description:
                  'Vertex AI Agent Engine deployment with Cloud Trace, structured logging, and per-invocation cost tracking. Canary rollout, then full traffic.',
              },
              {
                step: '4',
                title: 'Operate or Handoff',
                description:
                  'Managed retainer, or full handoff with documentation and runbooks. Evals continue running in CI on every prompt or tool change.',
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-full bg-navy-900 text-white flex items-center justify-center mx-auto mb-4 text-xl font-heading font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="content-container max-w-3xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2>Google ADK Specialist FAQ</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: i * 0.05 }}
                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                >
                  <span className="font-heading font-semibold text-navy-900">{faq.q}</span>
                  {activeFaq === i ? (
                    <HiChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <HiChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-navy-900 to-navy-800 text-white">
        <div className="content-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-white mb-4">Ship a Production AI Agent, Not a Demo</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Book a free 15-minute scoping call. We&apos;ll review your use case, propose an agent architecture, and tell
              you honestly if ADK is the right tool — or if a simpler approach would do the job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-audit?service=adk"
                className="bg-orange-500 text-white px-8 py-4 rounded-md font-heading font-semibold hover:bg-orange-600 transition-all shadow-lg inline-flex items-center justify-center gap-2 group"
              >
                Book Your Free Scoping Call
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-md font-heading font-semibold hover:bg-white/20 transition-all text-center"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
