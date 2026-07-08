import { createFileRoute } from '@tanstack/react-router';
import { WaitlistFeature } from '#/pages/waitlist/feature/waitlist-feature';

export const Route = createFileRoute('/')({
  component: WaitlistFeature,
});
