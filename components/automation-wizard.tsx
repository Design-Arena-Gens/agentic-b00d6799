/* eslint-disable @next/next/no-img-element */
"use client";

import { useMemo, useState } from "react";
import {
  blueprints,
  effortToLabel,
  personas,
  type GoalBlueprint,
  type Persona,
  type PersonaId
} from "./automation-data";

function findDefaultPersona(): Persona {
  return personas[0];
}

function findDefaultGoal(personaId: PersonaId): GoalBlueprint {
  const options = blueprints[personaId];
  return options[0];
}

export default function AutomationWizard() {
  const [personaId, setPersonaId] = useState<PersonaId>(findDefaultPersona().id);
  const [goalId, setGoalId] = useState<string>(findDefaultGoal(findDefaultPersona().id).id);

  const persona = useMemo(
    () => personas.find((item) => item.id === personaId) ?? findDefaultPersona(),
    [personaId]
  );

  const goals = useMemo(() => blueprints[personaId], [personaId]);

  const selectedGoal = useMemo(
    () => goals.find((item) => item.id === goalId) ?? goals[0],
    [goalId, goals]
  );

  const handlePersonaChange = (id: PersonaId) => {
    setPersonaId(id);
    const defaultGoal = findDefaultGoal(id);
    setGoalId(defaultGoal.id);
  };

  return (
    <div className="layout">
      <section className="card">
        <h2>Who are we designing automation for?</h2>
        <div className="persona-grid">
          {personas.map((item) => (
            <button
              key={item.id}
              type="button"
              className="persona-button"
              data-active={persona.id === item.id}
              onClick={() => handlePersonaChange(item.id)}
            >
              <span className="persona-title">{item.title}</span>
              <span className="persona-desc">{item.description}</span>
              <span className="step-meta">
                <em>Key metrics:</em> {item.metrics.join(" · ")}
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Primary automation goal</h2>
        <div className="goal-chip-list">
          {goals.map((goal) => (
            <button
              key={goal.id}
              type="button"
              className="goal-chip"
              data-selected={goal.id === selectedGoal.id}
              onClick={() => setGoalId(goal.id)}
            >
              {goal.label}
            </button>
          ))}
        </div>
        <p>{selectedGoal.summary}</p>
        <div>
          <strong>Strategic outcomes</strong>
          <ul>
            {selectedGoal.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="card workflow-container">
        <h2 className="workflow-title">Automation playbook</h2>
        <div className="step-list">
          {selectedGoal.steps.map((step, index) => (
            <article key={step.id} className="step-card">
              <div className="step-header">
                <span>
                  {index + 1}. {step.title}
                </span>
                <span className="step-meta">
                  <span>{effortToLabel[step.effort]}</span>
                  <span>Owner: {step.owner}</span>
                </span>
              </div>
              <p>{step.description}</p>
              <span className="step-meta">Suggested tooling: {step.tooling.join(", ")}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Enablement resources</h2>
        <div className="resources-grid">
          {selectedGoal.resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              className="resource-card"
            >
              <strong>{resource.title}</strong>
              <span>{resource.category}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="card cta-banner">
        <strong>Launch your automation initiative</strong>
        <p>
          Export this blueprint to your workspace or invite your team to collaborate on the next
          planning session. Turn these plays into orchestrated workflows in under a week.
        </p>
        <button type="button" onClick={() => window.open("mailto:ops@automationhq.co")}>
          Email the Ops Team
        </button>
      </section>
    </div>
  );
}
