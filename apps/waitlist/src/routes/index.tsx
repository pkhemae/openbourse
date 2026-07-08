import { useState } from 'react';
import type { FormEvent } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import type { Variants } from 'motion/react';
import { ArrowUpRight, Check, LoaderCircle } from 'lucide-react';
import { Button } from '@openbourse/ui/components/button';
import { Input } from '@openbourse/ui/components/input';
import { GithubIcon } from '#components/github-icon';

const GITHUB_REPO_URL = 'https://github.com/pkhemae/openbourse';

export const Route = createFileRoute('/')({
  component: Waitlist,
});

const item: Variants = {
  hidden: { opacity: 0, y: 12, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { type: 'spring', duration: 0.6, bounce: 0 },
  },
};

type Status = 'idle' | 'submitting' | 'success';

function Waitlist() {
  const [status, setStatus] = useState<Status>('idle');
  const [email, setEmail] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status !== 'idle') return;
    setStatus('submitting');
    // UI only for now — simulate a round-trip until a backend is wired up
    setTimeout(() => setStatus('success'), 900);
  }

  return (
    <MotionConfig reducedMotion="user">
      <main className="flex min-h-svh items-center justify-center px-6 py-16">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex w-full max-w-lg flex-col items-center gap-6 text-center"
        >
          <motion.div variants={item}>
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              className="group/star relative inline-flex h-8 items-center gap-2 rounded-full border border-border bg-background px-3.5 text-xs font-medium text-foreground outline-none transition-[background-color,scale] duration-150 ease-out before:absolute before:-inset-1 before:content-[''] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:scale-[0.96]"
            >
              <GithubIcon className="size-3.5" />
              Star us on GitHub
              <ArrowUpRight className="size-3 text-muted-foreground transition-[translate,color] duration-150 ease-out group-hover/star:translate-x-0.5 group-hover/star:-translate-y-0.5 group-hover/star:text-foreground" />
            </a>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl"
          >
            OpenBourse
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-md text-pretty text-muted-foreground"
          >
            The open-source platform for market data and financial analysis.
            Join the waitlist to get early access at launch.
          </motion.p>

          <motion.div variants={item} className="w-full max-w-md">
            <AnimatePresence mode="wait" initial={false}>
              {status === 'success' ? (
                <motion.p
                  key="success"
                  initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
                  className="flex min-h-11 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm"
                >
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  You&apos;re on the list — we&apos;ll reach out at{' '}
                  <span className="font-medium">{email}</span>
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  exit={{
                    opacity: 0,
                    y: -12,
                    filter: 'blur(4px)',
                    transition: { duration: 0.15, ease: 'easeIn' },
                  }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2 sm:flex-row"
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={status === 'submitting'}
                    className="h-11 px-3.5 sm:flex-1"
                  />
                  <Button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="h-11 px-5"
                  >
                    {status === 'submitting' && (
                      <LoaderCircle className="animate-spin" />
                    )}
                    Join the waitlist
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.p variants={item} className="text-xs text-muted-foreground">
            Open source. No spam — just one email at launch.
          </motion.p>
        </motion.section>
      </main>
    </MotionConfig>
  );
}
