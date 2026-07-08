import { useState } from 'react';
import { WaitlistUI } from '#/pages/waitlist/ui/waitlist-ui';
import type { WaitlistStatus } from '#/pages/waitlist/types';

export function WaitlistFeature() {
  const [status, setStatus] = useState<WaitlistStatus>('idle');
  const [email, setEmail] = useState('');

  function handleSubmit() {
    if (status !== 'idle') return;
    setStatus('submitting');
    // UI only for now — simulate a round-trip until a backend is wired up
    setTimeout(() => setStatus('success'), 900);
  }

  return (
    <WaitlistUI
      status={status}
      email={email}
      onEmailChange={setEmail}
      onSubmit={handleSubmit}
    />
  );
}
