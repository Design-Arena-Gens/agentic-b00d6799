import AutomationWizard from "@/components/automation-wizard";

export default function HomePage() {
  return (
    <main>
      <header className="app-header">
        <h1 className="title">Automation Blueprint Studio</h1>
        <p className="subtitle">
          Pick a team, select a goal, and instantly get a structured automation plan with steps,
          tooling, and resources. Use it to kickstart your next RevOps, marketing, or product
          initiative.
        </p>
      </header>
      <AutomationWizard />
    </main>
  );
}
