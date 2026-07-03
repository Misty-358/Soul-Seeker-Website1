import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      data-lovable-blank-page-placeholder
      className="min-h-screen flex items-center justify-center bg-background text-foreground"
    >
      <p className="text-muted-foreground">REPLACE this with your app content.</p>
    </div>
  );
}
