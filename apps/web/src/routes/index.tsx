import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@openbourse/ui/components/button';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-semibold tracking-tight">OpenBourse</h1>
      <Button>Get started</Button>
    </main>
  );
}
